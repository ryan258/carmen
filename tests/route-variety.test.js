const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const core = require('../game-core.js');
const generator = require('../run-generator.js');
const {createGame} = require('./helpers/game-harness.cjs');
const bentonville = require('../data/packs/bentonville.json');
const manifest = require('../data/quiz-packs.json');
const packs = manifest.packs.map(entry => JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', entry.path), 'utf8')));
const copy = value => JSON.parse(JSON.stringify(value));

test('every short route is a deterministic contiguous window, including the final pack locations', () => {
  for (const pack of packs) for (const count of core.stopCounts(pack.locations.length)) {
    const starts = new Set();
    for (let seed = 0; seed < 100; seed++) {
      const start = generator.chooseRouteStart(pack.locations.length, count, `coverage-${seed}`);
      assert.equal(start, generator.chooseRouteStart(pack.locations.length, count, `coverage-${seed}`));
      starts.add(start);
      const route = core.routeLocations(pack, count, start);
      assert.equal(route.length, count);
      route.forEach((location, index) => assert.equal(location, pack.locations[start + index]));
      assert.equal(route.at(-1), pack.locations[start + count - 1]);
    }
    assert.equal(starts.size, pack.locations.length - count + 1, `${pack.id} ${count}-stop window coverage`);
  }
  for (const start of [-1, .5, 5]) {
    assert.throws(() => core.routeLocations(bentonville, 4, start));
  }
  assert.throws(() => generator.chooseRouteStart(8, 5, 'invalid'));
});

test('case selection uses unseen variants, then the least recently visited variant', () => {
  const location = {id: 'one'};
  const pool = [{caseId:'a'}, {caseId:'b'}, {caseId:'c'}];
  for (let seed = 0; seed < 10; seed++) {
    assert.deepEqual(generator.createRunCaseVariantIds([location], () => pool, seed, ['a','b']), ['c']);
    assert.deepEqual(generator.createRunCaseVariantIds([location], () => pool, seed, ['b','c','a']), ['b']);
  }
});

test('format balancing stays inside equally fresh case candidates', () => {
  const locations = Array.from({length: 4}, (_, index) => ({id:String(index)}));
  const pools = Object.fromEntries(locations.map(location => [location.id,
    ['choice','sequence','match'].map(kind => ({caseId:`${location.id}-${kind}`,kind}))]));
  const getPool = location => pools[location.id];
  const getKind = item => item.kind;
  const first = generator.createRunCaseVariantIds(locations, getPool, 'balanced', [], getKind);
  assert.deepEqual(first, generator.createRunCaseVariantIds(locations, getPool, 'balanced', [], getKind));
  assert.equal(new Set(first.slice(0,3).map(id => id.split('-')[1])).size, 3);
  const history = locations.flatMap(location => [`${location.id}-sequence`, `${location.id}-match`]);
  assert.deepEqual(generator.createRunCaseVariantIds(locations, getPool, 'fresh-first', history, getKind),
    locations.map(location => `${location.id}-choice`));
});

test('recent history is bounded, deduplicated and accepts only current pack case identities', () => {
  const fixture = {questions:{one:Array.from({length:120}, (_, i) => ({caseId:`case-${i}`}))}};
  let history = [];
  for (const item of fixture.questions.one) history = generator.rememberCase(history, fixture, item.caseId);
  assert.equal(history.length, 100);
  assert.equal(history[0], 'case-20');
  history = generator.rememberCase(history, fixture, 'case-20');
  assert.equal(history.at(-1), 'case-20');
  assert.equal(new Set(history).size, 100);
  assert.deepEqual(generator.rememberCase(history, fixture, 'foreign'), history);
  assert.deepEqual(generator.recentCaseIds(['case-1', null, 'foreign', 'case-2', 'case-1'], fixture), ['case-2','case-1']);
  assert.deepEqual(generator.recentCaseIds({caseId:'case-1'}, fixture), []);
});

test('only actually visited cases enter history, including an abandoned first stop', () => {
  const game = createGame();
  game.run('CarmenRunGenerator.chooseRouteStart = () => 0;');
  game.start();
  const first = game.snapshot();
  assert.deepEqual(JSON.parse(game.run('JSON.stringify(readRecentCaseIds())')), [first.caseVariantIds[0]]);
  game.run('goToTitle(); resumeGame()');
  assert.deepEqual(JSON.parse(game.run('JSON.stringify(readRecentCaseIds())')), [first.caseVariantIds[0]]);
  game.run('showResetModal(); confirmReset()');
  game.start();
  const second = game.snapshot();
  assert.notEqual(second.caseVariantIds[0], first.caseVariantIds[0]);
  assert.deepEqual(JSON.parse(game.run('JSON.stringify(readRecentCaseIds())')), [first.caseVariantIds[0], second.caseVariantIds[0]]);
  game.solve(); game.warrant(); game.flush(); game.run('nextRound()');
  assert.deepEqual(JSON.parse(game.run('JSON.stringify(readRecentCaseIds())')), [first.caseVariantIds[0], second.caseVariantIds[0], second.caseVariantIds[1]]);
});

test('a saved non-prefix route restores exact locations and cases after history changes', () => {
  const game = createGame();
  game.run('CarmenRunGenerator.chooseRouteStart = () => 2;');
  game.start();
  const saved = game.snapshot();
  assert.equal(saved.schemaVersion, core.SAVE_VERSION);
  assert.equal(saved.routeStart, 2);
  assert.equal(core.validateSave(saved, bentonville), true);
  assert.equal(game.run('LOCATIONS[0].id'), bentonville.locations[2].id);
  game.run('goToTitle(); storage.setItem(recentCaseStorageKey(), JSON.stringify(Object.values(QUESTION_BANK).flat().map(item => item.caseId))); resumeGame();');
  assert.deepEqual(game.snapshot().caseVariantIds, saved.caseVariantIds);
  assert.equal(game.snapshot().routeStart, 2);
  assert.equal(game.run('LOCATIONS[LOCATIONS.length-1].id'), bentonville.locations[5].id);
  for (const mutate of [value => {delete value.routeStart;}, value => {value.routeStart=-1;},
    value => {value.routeStart=.5;}, value => {value.routeStart=5;}, value => {value.routeStart=1;},
    value => {value.schemaVersion=6;}, value => {value.schemaVersion=5;}]) {
    const invalid = copy(saved); mutate(invalid);
    assert.equal(core.validateSave(invalid, bentonville), false);
  }
});

for (const schemaVersion of [5,6,7]) test(`schema ${schemaVersion} preserves its historical route and migrates only after resume`, () => {
  const game = createGame();
  game.run('CarmenRunGenerator.chooseRouteStart = () => 0;'); game.start();
  const legacy = game.snapshot(); legacy.schemaVersion = schemaVersion;
  for (const key of ['assisted','supportEnabled','challenge','episodeId','evidenceMarks','scoringHintsUsedInRound']) delete legacy[key];
  if (schemaVersion < 7) {delete legacy.routeStart; delete legacy.activityCatalogVersion;}
  if (schemaVersion === 5) {delete legacy.quizStyle; delete legacy.activityProgress;}
  assert.equal(core.validateSave(legacy, bentonville), true);
  const smuggled = schemaVersion < 7 ? {...legacy, routeStart:0} : {...legacy,activityCatalogVersion:3};
  assert.equal(core.validateSave(smuggled, bentonville), false);
  game.run('goToTitle()'); game.backing.set('carmen_save', JSON.stringify(legacy)); game.run('resumeGame()');
  assert.equal(game.snapshot().schemaVersion, core.SAVE_VERSION);
  assert.equal(game.snapshot().routeStart, 0);
  assert.equal(game.snapshot().activityCatalogVersion, schemaVersion < 7 ? 1 : 2);
  assert.deepEqual(game.snapshot().caseVariantIds, legacy.caseVariantIds);
  assert.equal(core.validateSave(game.snapshot(), bentonville), true);
});

test('schema-6 Mixed resumes a formerly-choice case without applying the expanded catalog', () => {
  const game = createGame();
  const targetId = 'classic-the-momentary';
  const target = bentonville.locations.findIndex(location => bentonville.questions[location.id].some(item => item.caseId === targetId));
  game.context.fixtureCases = bentonville.locations.map(location =>
    (bentonville.questions[location.id].find(item => item.caseId === targetId) || bentonville.questions[location.id][0]).caseId);
  game.run('createDistinctRun = () => ({seed:"legacy-choice",routeStart:0,caseVariantIds:[...fixtureCases]});');
  game.start(8);
  for (let index=0; index<target; index++) {game.solve(); game.warrant(); game.flush(); game.run('nextRound()');}
  const legacy = game.snapshot(); legacy.schemaVersion=6; legacy.quizStyle='mixed';
  delete legacy.routeStart; delete legacy.activityCatalogVersion;
  for (const key of ['assisted','supportEnabled','challenge','episodeId','evidenceMarks','scoringHintsUsedInRound']) delete legacy[key];
  assert.equal(core.resolveActivity(legacy, bentonville), null);
  assert.equal(core.validateSave(legacy, bentonville), true);
  game.run('goToTitle()'); game.backing.set('carmen_save', JSON.stringify(legacy)); game.run('resumeGame()');
  assert.equal(game.run('getCurrentActivity()'), null);
  assert.equal(game.snapshot().activityCatalogVersion, 1);
  assert.equal(game.document.getElementById('activityPanel').hidden, true);
  assert.deepEqual(game.snapshot().history, legacy.history);
  const migrated = game.snapshot();
  assert.equal(core.validateSave(migrated, bentonville), true);
  const route = core.savedRouteLocations(migrated, bentonville);
  const finale = core.getActivity(bentonville,route,migrated.caseVariantIds,'final',7,2,'mixed',1);
  assert.equal(finale.kind, 'sequence');
  assert.equal(finale.items[0], route[0].name);
  assert.equal(finale.items.at(-1), route.at(-1).name);
  const reinterpreted = {...migrated,activityCatalogVersion:2};
  assert.notEqual(core.resolveActivity(reinterpreted, bentonville), null);
  assert.equal(core.validateSave(reinterpreted, bentonville), false);
});

test('a window ending before the pack end returns to headquarters and uses only visited finale evidence', () => {
  const game = createGame();
  game.run('CarmenRunGenerator.chooseRouteStart = () => 2;'); game.start();
  for (let index = 0; index < 4; index++) {
    game.solve(); game.warrant(); game.flush();
    if (index < 3) game.run('nextRound()');
  }
  assert.match(game.document.getElementById('betweenContent').innerHTML, /selected route is complete/);
  game.run('triggerFinalConfrontationFlow()');
  assert.equal(core.validateSave(game.snapshot(), bentonville), true);
  assert.equal(game.run('getFinalConfrontationRounds()[2].options[0]'), bentonville.locations[5].token.name);
  assert.deepEqual(game.snapshot().clueTokens, bentonville.locations.slice(2,6).map(location => location.id));
});

test('scoreboards separate route windows and preserve legacy prefix records', () => {
  const game = createGame();
  game.run('CarmenRunGenerator.chooseRouteStart = () => 0;'); game.start();
  const legacy = {quizPackId:bentonville.id,contentVersion:bentonville.contentVersion,score:100,rank:'Rank',
    difficulty:'detective',stopCount:4,caseSeed:'legacy',date:'2026-10-21T00:00:00.000Z'};
  game.backing.set('carmen_highScores', JSON.stringify([legacy]));
  assert.equal(game.run("saveHighScore(120,'Rank').previousBest"), 100);
  game.run("state.routeStart=1; state.caseSeed='different-window';");
  assert.equal(game.run("saveHighScore(500,'Rank').previousBest"), 0);
  game.run("state.routeStart=0; state.caseSeed='prefix-again';");
  assert.equal(game.run("saveHighScore(130,'Rank').previousBest"), 120);
  game.run('showRecordsModal()');
  const html = game.document.getElementById('recordsContent').innerHTML;
  assert.ok(html.includes(core.escapeHtml(`${bentonville.locations[0].name} → ${bentonville.locations[3].name}`)));
  assert.ok(html.includes(core.escapeHtml(`${bentonville.locations[1].name} → ${bentonville.locations[4].name}`)));
});

test('Mixed records keep original and expanded catalogs on separate boards', () => {
  const game = createGame();
  game.run('CarmenRunGenerator.chooseRouteStart = () => 0;'); game.start();
  game.run("state.quizStyle='mixed'; state.activityCatalogVersion=1; saveHighScore(100,'Rank'); state.activityCatalogVersion=2; state.caseSeed='expanded';");
  assert.equal(game.run("saveHighScore(500,'Rank').previousBest"),0);
  game.run("state.activityCatalogVersion=1; state.caseSeed='original-again';");
  assert.equal(game.run("saveHighScore(120,'Rank').previousBest"),100);
  game.run('showRecordsModal()');
  assert.match(game.document.getElementById('recordsContent').innerHTML,/original catalog/);
});

test('subset activity rules distinguish unordered filters from ordered fragment assembly', () => {
  const filter = {kind:'filter',items:['first','second','third','distractor'],answer:[0,2]};
  const assemble = {...filter,kind:'assemble'};
  assert.equal(core.activityComplete(filter, []), false);
  assert.equal(core.activityComplete(filter, [1]), true);
  assert.equal(core.activityCorrect(filter, [2,0]), true);
  assert.equal(core.activityCorrect(filter, [0,2,3]), false);
  assert.equal(core.activityComplete(assemble, [0]), false);
  assert.equal(core.activityCorrect(assemble, [2,0]), false);
  assert.equal(core.activityCorrect(assemble, [0,2]), true);
  assert.equal(core.activityAnswer(filter), 'first; third');
  assert.equal(core.activityAnswer(assemble), 'first → third');
});
