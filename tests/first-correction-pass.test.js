const test = require('node:test');
const assert = require('node:assert/strict');
const core = require('../game-core.js');
const bentonville = require('../data/packs/bentonville.json');
const argentina = require('../data/packs/argentina.json');
const {createGame} = require('./helpers/game-harness.cjs');

test('new case requires explicit replacement and initially focuses the preserving action', () => {
  const g = createGame(); g.start(); g.run('goToTitle(); goToDifficultySelect()');
  const saved = g.backing.get('carmen_save');
  g.run("selectDifficulty('inspector')");
  assert.equal(g.run('activeModal'), 'replaceSaveModal');
  assert.equal(g.document.activeElement.getAttribute('onclick'), 'keepSavedCase()');
  assert.equal(g.backing.get('carmen_save'), saved);
  g.document.activeElement.click();
  assert.equal(g.run('activeModal'), null);
  assert.equal(g.document.getElementById('titleScreen').classList.contains('hidden'), false);
  assert.equal(g.backing.get('carmen_save'), saved);
  assert.equal(g.document.body.children.some(el => el.inert), false);
  g.run('resumeGame()');
  assert.equal(g.state().caseSeed, JSON.parse(saved).caseSeed);
  g.run("goToDifficultySelect(); selectDifficulty('inspector'); confirmNewCase()");
  assert.equal(g.snapshot().difficulty, 'inspector');
  assert.notEqual(g.backing.get('carmen_save'), saved);
  const replacement = g.backing.get('carmen_save');
  g.run('confirmNewCase()');
  assert.equal(g.backing.get('carmen_save'), replacement);
});

test('replacement protects another pack and malformed saves until confirmed', () => {
  for (const malformed of [false, true]) {
    const g = createGame(); g.start(); g.run('goToTitle()');
    if (malformed) g.backing.set('carmen_save', '{broken');
    const saved = g.backing.get('carmen_save');
    g.context.otherPack = structuredClone(argentina);
    g.run("applyQuizPack(otherPack); selectDifficulty('rookie')");
    assert.equal(g.run('activeModal'), 'replaceSaveModal');
    assert.equal(g.backing.get('carmen_save'), saved);
    g.run('confirmNewCase()');
    assert.equal(g.snapshot().quizPackId, argentina.id);
    assert.equal(g.snapshot().difficulty, 'rookie');
    assert.equal(g.run('Boolean(getValidSave())'), true);
  }
});

test('a stale replacement confirmation cannot overwrite a newer save or undo its deletion', () => {
  for (const deleted of [false, true]) {
    const g = createGame(); g.start();
    const newer = JSON.stringify({...g.snapshot(), caseSeed: 'another-tab'});
    g.run("goToDifficultySelect(); selectDifficulty('rookie')");
    if (deleted) g.backing.delete('carmen_save');
    else g.backing.set('carmen_save', newer);
    g.run('confirmNewCase()');
    assert.equal(g.backing.get('carmen_save'), deleted ? undefined : newer);
    assert.equal(g.run('activeModal'), null);
    assert.equal(g.state().phase, 'idle');
  }
});

test('Escape and storage events invalidate pending replacement consent', async () => {
  const g = createGame(); await g.boot(); g.start();
  const saved = g.backing.get('carmen_save');
  g.run("goToDifficultySelect(); selectDifficulty('rookie')");
  await g.dispatchKey('Escape');
  g.run('confirmNewCase()');
  assert.equal(g.backing.get('carmen_save'), saved);
  assert.equal(g.run('pendingNewCase'), null);
  g.run("selectDifficulty('rookie')");
  const newer = JSON.stringify({...g.snapshot(), caseSeed: 'latest-tab'});
  g.backing.set('carmen_save', newer);
  await g.dispatchWindow('storage', {key: 'carmen_save'});
  g.run('confirmNewCase()');
  assert.equal(g.backing.get('carmen_save'), newer);
  assert.equal(g.run('pendingNewCase'), null);
});

test('replacement consent cannot transfer to a different pack or route', () => {
  for (const change of ['route', 'pack']) {
    const g = createGame(); g.start();
    const saved = g.backing.get('carmen_save');
    g.run("goToDifficultySelect(); selectDifficulty('rookie')");
    if (change === 'route') g.run('selectStopCount(6)');
    else { g.context.otherPack = structuredClone(argentina); g.run('applyQuizPack(otherPack)'); }
    g.run('confirmNewCase()');
    assert.equal(g.backing.get('carmen_save'), saved);
    assert.equal(g.state().phase, 'idle');
    assert.equal(g.run('pendingNewCase'), null);
  }
});

test('answer shortcuts default off, persist opt-in, and ignore typing and modified input', async () => {
  const g = createGame(); await g.boot(); g.start(); g.run("switchTab('puzzle')");
  const key = 'abcd'[g.state().activePuzzleCorrectIndex];
  await g.dispatchKey(key);
  assert.equal(g.state().puzzleSolved, false);
  const toggle = g.document.getElementById('shortcutToggle');
  assert.equal(toggle.getAttribute('aria-pressed'), 'false');
  toggle.click();
  assert.equal(JSON.parse(g.backing.get('carmen_settings')).answerShortcuts, true);
  g.run('state.settings.answerShortcuts=false; loadSettings()');
  assert.equal(g.state().settings.answerShortcuts, true);
  for (const extra of [{ctrlKey:true}, {metaKey:true}, {altKey:true}, {shiftKey:true}, {repeat:true}, {isComposing:true}]) await g.dispatchKey(key, g.document.body, extra);
  for (const tag of ['input', 'select', 'textarea', 'button']) await g.dispatchKey(key, g.document.createElement(tag));
  const editable = g.document.createElement('div'); editable.setAttribute('contenteditable', '');
  await g.dispatchKey(key, editable);
  assert.equal(g.state().puzzleSolved, false);
  toggle.click();
  g.run('state.settings.answerShortcuts=true; loadSettings()');
  await g.dispatchKey(key);
  assert.equal(g.state().puzzleSolved, false);
  toggle.click();
  await g.dispatchKey(String(g.state().activePuzzleCorrectIndex + 1));
  assert.equal(g.state().puzzleSolved, true);
});

test('legacy clues-tab saves reopen the combined Case File from c12e772', () => {
  const g = createGame(); g.start();
  const saved = {...g.snapshot(), activeTab: 'clues'};
  g.backing.set('carmen_save', JSON.stringify(saved));
  g.run('goToTitle(); resumeGame()');
  assert.equal(g.state().activeTab, 'dossier');
  assert.equal(g.document.getElementById('contentDossier').classList.contains('hidden'), false);
});

test('4/5/6-location packs keep four final options and can resume the inventory question', () => {
  for (const total of [4, 5, 6]) {
    const pack = structuredClone(bentonville);
    pack.locations = pack.locations.slice(0, total);
    pack.questions = Object.fromEntries(pack.locations.map(loc => [loc.id, pack.questions[loc.id]]));
    core.validatePack(pack);
    for (const count of core.stopCounts(total)) {
      const g = createGame(); g.context.smallPack = pack; g.run('applyQuizPack(smallPack)'); g.start(count);
      for (let stop = 0; stop < count; stop++) {
        g.solve(); g.warrant(); g.flush();
        g.run(stop === count - 1 ? 'triggerFinalConfrontationFlow()' : 'nextRound()');
      }
      for (let round = 0; round < 2; round++) {
        g.run('selectFinalChoice(state.activeFinalCorrectIndex, state.activeFinalCorrectIndex)');
        g.document.getElementById('finalContinueBtn').click();
      }
      assert.equal(g.state().finalConfrontationRound, 3);
      assert.equal(g.document.getElementById('puzzleOptionsGrid').children.length, 4);
      const choices = g.run('getFinalConfrontationRounds()[2].options');
      assert.equal(new Set(choices).size, 4);
      assert.equal(core.validateSave(g.snapshot(), pack), true);
      g.run('goToTitle(); resumeGame()');
      assert.equal(g.state().phase, 'final');
      assert.equal(g.state().finalConfrontationRound, 3);
      assert.equal(g.document.getElementById('puzzleOptionsGrid').children.length, 4);
    }
  }
});

// This fake checks adapter lifecycle only; it does not establish real map rendering.
function installLeaflet(g) {
  const observed = {maps: [], tileErrors: []};
  const library = {
    map() {
      const instance = {remove(){this.removed=true;}, invalidateSize(){}, removeLayer(){}, setView(){}};
      observed.maps.push(instance); return instance;
    },
    tileLayer() {return {on(event, callback){observed.tileErrors.push(callback);return this;}, addTo(){return this;}};},
    circleMarker() {return {addTo(){return this;}, bindTooltip(){return this;}, openTooltip(){return this;}};}
  };
  g.context.L = library; g.context.window.L = library;
  return observed;
}

test('a delayed Leaflet load upgrades the temporary route without changing the save', () => {
  const g = createGame(); g.start();
  const saved = g.backing.get('carmen_save');
  assert.equal(g.run('mapUnavailable'), false);
  assert.match(g.document.getElementById('map').innerHTML, /map loading/);
  const observed = installLeaflet(g); g.run('handleMapLibraryLoad()');
  assert.equal(observed.maps.length, 1);
  assert.doesNotMatch(g.document.getElementById('map').innerHTML, /map loading/);
  assert.equal(g.document.getElementById('retryMapButton').hidden, true);
  assert.equal(g.backing.get('carmen_save'), saved);
});

test('failed library retries are explicit, use the pinned source, and cannot duplicate a pending load', () => {
  const g = createGame(); g.start(); g.run('handleMapLibraryError()');
  assert.match(g.document.getElementById('map').innerHTML, /map library unavailable/);
  assert.equal(g.document.getElementById('retryMapButton').hidden, false);
  const before = g.document.head.children.length;
  g.document.getElementById('retryMapButton').focus();
  g.document.getElementById('retryMapButton').click();
  assert.equal(g.document.activeElement, g.document.getElementById('map'));
  const retry = g.document.head.children.at(-1);
  const original = g.document.getElementById('leafletScript');
  for (const name of ['src','integrity','crossorigin']) assert.equal(retry.getAttribute(name), original.getAttribute(name));
  g.run('retryMap()');
  assert.equal(g.document.head.children.length, before + 1);
  const observed = installLeaflet(g); retry.onload();
  assert.equal(observed.maps.length, 1);
  assert.equal(g.document.head.children.length, before);
});

test('tile failure stays on text until Retry map and obsolete tile callbacks cannot remove the new map', () => {
  const g = createGame(); const observed = installLeaflet(g); g.start();
  const saved = g.backing.get('carmen_save');
  observed.tileErrors[0](); g.flush();
  assert.equal(observed.maps[0].removed, true);
  assert.match(g.document.getElementById('map').innerHTML, /map tiles unavailable/);
  g.run('drawMapGrid()'); assert.equal(observed.maps.length, 1);
  g.document.getElementById('retryMapButton').click();
  assert.equal(observed.maps.length, 2);
  observed.tileErrors[0](); g.flush();
  assert.equal(observed.maps[1].removed, undefined);
  assert.equal(g.backing.get('carmen_save'), saved);
});

test('late library callbacks respect Text route and do not revive a paused session', () => {
  const g = createGame(); g.start(); g.document.getElementById('routeToggle').click();
  const observed = installLeaflet(g); g.run('handleMapLibraryLoad(); retryMap()');
  assert.equal(observed.maps.length, 0);
  assert.match(g.document.getElementById('map').innerHTML, /text route selected/);
  g.run('goToTitle(); handleMapLibraryLoad()');
  assert.equal(observed.maps.length, 0);
  assert.equal(g.state().phase, 'idle');
});
