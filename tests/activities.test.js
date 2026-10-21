const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const core = require('../game-core.js');
const activities = require('../quiz-activities.js');
const {createGame} = require('./helpers/game-harness.cjs');

const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'data/quiz-packs.json'), 'utf8'));
const packs = manifest.packs.map(entry => JSON.parse(fs.readFileSync(path.resolve(root, entry.path), 'utf8')));
const bentonville = packs.find(pack => pack.id === 'bentonville-carmen');
const copy = value => JSON.parse(JSON.stringify(value));
const activityOf = game => JSON.parse(game.run('JSON.stringify(getCurrentActivity())'));
const labelsOf = game => game.document.getElementById('activityCards').children.map(button => button.getAttribute('aria-label'));

function chooseCards(game, indices) {
  for (const index of indices) {
    const order = game.state().optionOrder.filter(value => value < activityOf(game).items.length);
    game.document.getElementById('activityCards').children[order.indexOf(index)].click();
  }
}

function solveCurrentPuzzle(game) {
  game.run("switchTab('puzzle')");
  const activity = activityOf(game);
  if (activity) {
    chooseCards(game, core.activitySolution(activity));
    game.document.getElementById('activityCheck').click();
  } else if (game.state().isFinalConfrontation) {
    game.run('selectFinalChoice(state.activeFinalCorrectIndex)');
  } else {
    game.run('selectChoice(state.activePuzzleCorrectIndex)');
  }
  game.flush();
  assert.equal(game.state().puzzleSolved, true);
}

// Start through the real new-case entry point, with a deterministic case list.
// The supplied ID only selects an existing variant; route order is unchanged.
function startMixed(caseId = 'classic-downtown-square', pack = bentonville, count = 4) {
  const game = createGame();
  game.context.testActivityPack = copy(pack);
  game.context.testActivityCases = pack.locations.slice(0, count).map(location => {
    const pool = pack.questions[location.id];
    return (pool.find(item => item.caseId === caseId) || pool[0]).caseId;
  });
  const target = game.context.testActivityCases.indexOf(caseId);
  assert.notEqual(target, -1, `Case ${caseId} must be in the requested route`);
  game.run('applyQuizPack(testActivityPack); createDistinctRun = () => ({seed: "activity-fixture", routeStart: 0, caseVariantIds: [...testActivityCases]});');
  game.document.getElementById('quizStyleSelect').value = 'mixed';
  game.start(count);
  for (let stop = 0; stop < target; stop++) {
    solveCurrentPuzzle(game);
    game.document.getElementById('goToWarrantBtn').click();
    game.warrant(); game.flush(); game.run('nextRound()');
  }
  game.run("switchTab('puzzle')");
  assert.equal(game.state().quizStyle, 'mixed');
  assert.equal(game.run('getLocationCase(state.currentLocationIndex).caseId'), caseId);
  assert.equal(core.validateSave(game.snapshot(), pack), true);
  return game;
}

test('current authored activity coverage is version-bound and preserves reusable answer descriptors', () => {
  let total = 0;
  const kinds = new Set();
  for (const pack of packs) {
    let packCount = 0;
    for (const item of Object.values(pack.questions).flat()) {
      const activity = activities.getCaseActivity(pack, item);
      if (!activity) continue;
      total++; packCount++; kinds.add(activity.kind);
      assert.match(activity.id, /:(sequence|match|filter|assemble):v1$/);
      assert.equal(activity.version, 1);
      assert.ok(activity.title.trim() && activity.instruction.trim(), item.caseId);
      assert.ok(activity.items.length >= 2 && activity.items.length <= 4, item.caseId);
      assert.equal(activity.hints.length, 3, item.caseId);
      assert.ok(activity.hints.every(hint => typeof hint === 'string' && hint.trim()), item.caseId);
      const answers = activity.kind === 'match' ? activity.items.map(pair => pair.answer) : activity.items;
      assert.equal(new Set(answers).size, answers.length, item.caseId);
      assert.ok(answers.every(answer => typeof answer === 'string' && answer.trim()), item.caseId);
      if (activity.kind === 'match') {
        assert.ok(activity.items.every(pair => typeof pair.prompt === 'string' && pair.prompt.trim()), item.caseId);
        assert.equal(new Set(activity.items.map(pair => pair.prompt)).size, activity.items.length, item.caseId);
      }
      assert.equal(activities.getCaseActivity({...pack, contentVersion: pack.contentVersion + 1}, item), null);
      assert.equal(activities.getCaseActivity({...pack, id: 'unknown-pack'}, item), null);
      const original = copy(activity);
      activity.items.reverse(); activity.hints[0] = 'Changed by caller';
      if (activity.kind === 'match') activity.items[0].answer = 'Changed by caller';
      assert.deepEqual(activities.getCaseActivity(pack, item), original, item.caseId);
    }
    assert.ok(packCount > 0, `No activity is anchored to ${pack.id}'s current content version`);
    assert.equal(activities.getCaseActivity(pack, {caseId: 'missing-case'}), null);
  }
  assert.equal(packs.length, 12);
  assert.equal(total, 47);
  assert.deepEqual([...kinds].sort(), ['assemble', 'filter', 'match', 'sequence']);
});

for (const [caseId, kind] of [['classic-downtown-square', 'match'], ['classic-crystal-bridges', 'sequence']]) {
  test(`${kind} partial work survives pause/resume with stable card labels and free revisions`, () => {
    const game = startMixed(caseId);
    assert.equal(activityOf(game).kind, kind);
    const labels = labelsOf(game);
    labels.forEach((label, index) => assert.match(label, new RegExp(`^Card ${'ABCD'[index]}:`)));
    const baseline = game.state();
    chooseCards(game, [1, 0]);
    assert.deepEqual(game.snapshot().activityProgress.selections, [1, 0]);
    assert.equal(game.document.getElementById('activityCheck').disabled, true);
    game.document.getElementById('activityCheck').click();
    assert.equal(game.state().lives, baseline.lives);
    game.run('goToTitle(); resumeGame()');
    assert.deepEqual(game.state().activityProgress.selections, [1, 0]);
    assert.deepEqual(labelsOf(game), labels);
    assert.equal(game.document.getElementById('activityPanel').hidden, false);
    assert.equal(game.document.getElementById('puzzleOptionsGrid').hidden, true);
    game.document.getElementById('activityUndo').click();
    assert.deepEqual(game.snapshot().activityProgress.selections, [1]);
    game.document.getElementById('activityReset').click();
    assert.deepEqual(game.snapshot().activityProgress.selections, []);
    assert.deepEqual(labelsOf(game), labels);
    assert.equal(game.state().score, baseline.score);
    assert.equal(game.state().lives, baseline.lives);
    assert.equal(game.state().puzzleAttempts, baseline.puzzleAttempts);
    assert.equal(core.validateSave(game.snapshot(), bentonville), true);
  });
}

test('one rejected complete arrangement costs one life across repeated checks and resume', () => {
  const game = startMixed();
  const before = game.state();
  chooseCards(game, [1, 0, 2, 3]);
  game.document.getElementById('activityCheck').click();
  game.run('checkActivity(); checkActivity()');
  assert.equal(game.state().lives, before.lives - 1);
  assert.equal(game.state().puzzleAttempts, 1);
  assert.deepEqual(game.snapshot().activityProgress.rejected, [[1, 0, 2, 3]]);
  // Pause while the feedback callback is still pending, then restore the same work.
  game.run('goToTitle(); resumeGame()'); game.flush();
  game.document.getElementById('activityCheck').click();
  assert.equal(game.state().lives, before.lives - 1);
  assert.equal(game.state().puzzleAttempts, 1);
  assert.match(game.document.getElementById('puzzleFeedback').textContent, /already rejected/);
  game.document.getElementById('activityReset').click();
  chooseCards(game, [0, 1, 3, 2]);
  game.document.getElementById('activityCheck').click(); game.flush();
  assert.equal(game.state().lives, before.lives - 2);
  assert.equal(game.state().puzzleAttempts, 2);
  assert.equal(core.validateSave(game.snapshot(), bentonville), true);
});

test('accepted activity awards once, retains explanation, and waits for Continue after resume', () => {
  const game = startMixed();
  game.run('requestHint()');
  const before = game.state().score;
  chooseCards(game, [0, 1, 2, 3]);
  game.document.getElementById('activityCheck').click(); game.flush();
  assert.equal(game.state().score - before, core.getPuzzleScore(0, 1));
  assert.equal(game.state().activeTab, 'puzzle');
  assert.equal(game.document.getElementById('activityUndo').disabled, true);
  assert.match(game.document.getElementById('puzzleFeedback').textContent, /Continue/);
  assert.match(game.document.getElementById('puzzleFeedback').textContent, /Fern/);
  assert.match(game.document.getElementById('puzzleFeedback').textContent, /both conditions/);
  const score = game.state().score;
  game.run('checkActivity(); goToTitle(); resumeGame(); checkActivity()');
  assert.equal(game.state().score, score);
  assert.equal(game.state().puzzleSolved, true);
  assert.equal(game.state().activeTab, 'puzzle');
  assert.equal(game.snapshot().hintsUsedInRound, 1);
  game.document.getElementById('goToWarrantBtn').click();
  assert.equal(game.state().activeTab, 'warrant');
  game.warrant(); game.flush();
  assert.equal(game.state().phase, 'between');
  assert.equal(core.validateSave(game.snapshot(), bentonville), true);
});

test('enabled shortcuts operate from the focused puzzle tab and activity card', async () => {
  const game = createGame();
  await game.boot();
  game.context.testActivityCases = bentonville.locations.slice(0, 4).map(location => bentonville.questions[location.id][0].caseId);
  game.run('createDistinctRun = () => ({seed: "shortcut-activity", routeStart: 0, caseVariantIds: [...testActivityCases]});');
  game.document.getElementById('quizStyleSelect').value = 'mixed'; game.start();
  game.run("switchTab('puzzle')");
  assert.equal(game.document.activeElement, game.document.getElementById('tabPuzzle'));
  await game.dispatchKey('a', game.document.activeElement);
  assert.deepEqual(game.state().activityProgress.selections, []);
  game.document.getElementById('shortcutToggle').click();
  await game.dispatchKey('a', game.document.getElementById('tabPuzzle'));
  assert.equal(game.state().activityProgress.selections.length, 1);
  const next = game.document.getElementById('activityCards').children.findIndex(button => !button.disabled);
  await game.dispatchKey('abcd'[next], game.document.activeElement);
  assert.equal(game.state().activityProgress.selections.length, 2);
  await game.dispatchKey('c', game.document.getElementById('warrantHideout'));
  assert.equal(game.state().activityProgress.selections.length, 2);
});

test('historical schema-5 progress resumes as Classic without reinterpreting its chosen cases', () => {
  const game = createGame();
  game.run('CarmenRunGenerator.chooseRouteStart = () => 0');
  game.document.getElementById('quizStyleSelect').value = 'classic'; game.start();
  game.run("switchTab('puzzle'); requestHint(); selectChoice((state.activePuzzleCorrectIndex+1)%4)"); game.flush();
  const legacy = game.snapshot();
  legacy.schemaVersion = 5; delete legacy.quizStyle; delete legacy.activityProgress; delete legacy.routeStart; delete legacy.activityCatalogVersion;
  for (const key of ['assisted','supportEnabled','challenge','episodeId','evidenceMarks','scoringHintsUsedInRound']) delete legacy[key];
  assert.equal(core.validateSave(legacy, bentonville), true);
  game.run('goToTitle()');
  game.document.getElementById('quizStyleSelect').value = 'mixed';
  game.backing.set('carmen_save', JSON.stringify(legacy));
  game.run('resumeGame()');
  assert.equal(game.state().quizStyle, 'classic');
  assert.equal(game.state().activityProgress, null);
  assert.deepEqual(game.state().caseVariantIds, legacy.caseVariantIds);
  assert.deepEqual(game.state().optionOrder, legacy.optionOrder);
  assert.deepEqual(game.state().wrongOptions, legacy.wrongOptions);
  assert.equal(game.state().hintsUsedInRound, 1);
  assert.equal(game.snapshot().schemaVersion, core.SAVE_VERSION);
  assert.equal(game.snapshot().activityCatalogVersion, 1);
  assert.equal(core.validateSave(game.snapshot(), bentonville), true);
  assert.equal(game.document.getElementById('activityPanel').hidden, true);
});

test('current saves reject corrupt, substituted, or incompatible activity progress', () => {
  const game = startMixed();
  const original = game.snapshot();
  const mutations = [
    save => { delete save.quizStyle; },
    save => { save.quizStyle = 'unrecognized'; },
    save => { delete save.activityProgress; },
    save => { save.activityProgress = null; },
    save => { save.activityProgress.activityId += ':different'; },
    save => { save.activityProgress.selections = [0, 0]; },
    save => { save.activityProgress.selections = [0.5]; },
    save => { save.activityProgress.selections = [4]; },
    save => { save.activityProgress.extra = 'untrusted answer'; },
    save => { save.activityProgress.rejected = [[1, 0]]; save.puzzleAttempts = 1; },
    save => { save.activityProgress.rejected = [[0, 1, 2, 3]]; save.puzzleAttempts = 1; },
    save => { save.activityProgress.rejected = [[1, 0, 2, 3], [1, 0, 2, 3]]; save.puzzleAttempts = 2; },
    save => { save.activityProgress.rejected = [[1, 0, 2, 3]]; save.puzzleAttempts = 0; },
    save => { save.quizStyle = 'classic'; },
    save => { save.schemaVersion = 5; },
    save => { save.wrongOptions = [0]; }
  ];
  mutations.forEach((mutate, index) => {
    const save = copy(original); mutate(save);
    assert.equal(core.validateSave(save, bentonville), false, `corruption ${index}`);
  });
  chooseCards(game, [0, 1, 2, 3]); game.document.getElementById('activityCheck').click();
  const solved = game.snapshot(); solved.activityProgress.selections = [1, 0, 2, 3];
  assert.equal(core.validateSave(solved, bentonville), false);
});

test('filter answers are unordered and imported reversed rejections never charge twice', () => {
  const game = startMixed('classic-the-momentary', bentonville, 8);
  assert.equal(activityOf(game).kind, 'filter');
  const lives = game.state().lives;
  chooseCards(game, [3,2]); game.document.getElementById('activityCheck').click(); game.flush();
  assert.equal(game.state().lives, lives - 1);
  const imported = game.snapshot(); imported.activityProgress.rejected = [[3,2]];
  assert.equal(core.validateSave(imported, bentonville), true);
  game.run('goToTitle()'); game.backing.set('carmen_save', JSON.stringify(imported)); game.run('resumeGame()');
  game.document.getElementById('activityCheck').click();
  assert.equal(game.state().lives, lives - 1);
  assert.equal(game.state().puzzleAttempts, 1);
  game.document.getElementById('activityReset').click();
  chooseCards(game, [...core.activitySolution(activityOf(game))].reverse());
  game.document.getElementById('activityCheck').click();
  assert.equal(game.state().puzzleSolved, true);
  assert.equal(core.validateSave(game.snapshot(), bentonville), true);
});

test('fragment assembly caps input at its answer length and preserves ordered partial work', () => {
  const pack = packs.find(value => value.id === 'northwest-arkansas-carmen');
  const game = startMixed('nwa-atalanta', pack, 8);
  const activity = activityOf(game);
  assert.equal(activity.kind, 'assemble');
  chooseCards(game, [0,2]);
  assert.equal(game.document.getElementById('activityCheck').disabled, true);
  game.run('goToTitle(); resumeGame()');
  assert.deepEqual(game.snapshot().activityProgress.selections, [0,2]);
  chooseCards(game, [3]);
  const completed = game.snapshot().activityProgress.selections;
  game.run('selectActivityCard(1)');
  assert.deepEqual(game.snapshot().activityProgress.selections, completed);
  game.document.getElementById('activityCheck').click(); game.flush();
  assert.equal(game.state().puzzleSolved, false);
  game.document.getElementById('activityReset').click();
  chooseCards(game, core.activitySolution(activity)); game.document.getElementById('activityCheck').click();
  assert.equal(game.state().puzzleSolved, true);
  assert.equal(core.validateSave(game.snapshot(), pack), true);
});

test('every supported pack and route length has bounded route-order and token-match finales', () => {
  for (const pack of packs) for (const count of core.stopCounts(pack.locations.length)) {
    const locations = pack.locations.slice(0, count);
    const cases = locations.map(location => pack.questions[location.id][0].caseId);
    const get = (round, style = 'mixed') => core.getActivity(pack, locations, cases, 'final', count - 1, round, style);
    assert.equal(get(1), null);
    assert.equal(get(2, 'classic'), null);
    assert.equal(get(3, 'classic'), null);
    const ordered = get(2), matched = get(3);
    assert.equal(ordered.kind, 'sequence'); assert.equal(matched.kind, 'match');
    assert.equal(ordered.items.length, 4); assert.equal(matched.items.length, 4);
    assert.equal(ordered.items[0], locations[0].name);
    assert.equal(ordered.items.at(-1), locations.at(-1).name);
    const visited = ordered.items.map(name => locations.findIndex(location => location.name === name));
    assert.ok(visited.every((index, position) => index >= 0 && (position === 0 || index > visited[position - 1])));
    for (const pair of matched.items) {
      const location = locations.find(item => item.name === pair.prompt);
      assert.ok(location); assert.equal(pair.answer, location.token.name);
    }
    assert.match(ordered.id, /:v1$/); assert.match(matched.id, /:v1$/);
    assert.notEqual(ordered.id, matched.id);
  }
});

test('a mixed short route completes all three finale formats with resumable work and explicit Continue', () => {
  const game = startMixed();
  for (let stop = 0; stop < 4; stop++) {
    solveCurrentPuzzle(game); game.document.getElementById('goToWarrantBtn').click();
    game.warrant(); game.flush();
    assert.equal(core.validateSave(game.snapshot(), bentonville), true);
    game.run(stop === 3 ? 'triggerFinalConfrontationFlow()' : 'nextRound()');
  }
  assert.equal(activityOf(game), null);
  solveCurrentPuzzle(game);
  assert.equal(game.state().finalConfrontationRound, 1);
  game.document.getElementById('finalContinueBtn').click();
  for (const [round, kind] of [[2, 'sequence'], [3, 'match']]) {
    assert.equal(activityOf(game).kind, kind);
    const labels = labelsOf(game);
    chooseCards(game, [0]); game.run('goToTitle(); resumeGame()');
    assert.deepEqual(game.state().activityProgress.selections, [0]);
    assert.deepEqual(labelsOf(game), labels);
    chooseCards(game, [1, 2, 3]); game.document.getElementById('activityCheck').click(); game.flush();
    assert.equal(game.state().finalConfrontationRound, round);
    assert.equal(game.state().phase, 'final');
    assert.match(game.document.getElementById('puzzleFeedback').textContent, /Continue/);
    assert.equal(core.validateSave(game.snapshot(), bentonville), true);
    game.run('goToTitle(); resumeGame()');
    assert.equal(game.state().puzzleSolved, true);
    game.document.getElementById('finalContinueBtn').click();
  }
  assert.equal(game.state().phase, 'complete');
  assert.equal(game.run('getStats().gamesPlayed'), 1);
  assert.equal(game.run('getHighScores()[0].quizStyle'), 'mixed');
});

test('score boards separate Mixed from Classic and retain unlabelled historical records as Classic', () => {
  const game = createGame();
  game.run('CarmenRunGenerator.chooseRouteStart = () => 0');
  game.document.getElementById('quizStyleSelect').value = 'classic'; game.start();
  game.run("state.caseSeed='shared-id'; saveHighScore(800,'Classic rank')");
  game.run("state.quizStyle='mixed'");
  assert.equal(game.state().activityCatalogVersion, 2);
  assert.equal(game.run("saveHighScore(300,'Mixed rank').previousBest"), 0);
  assert.equal(game.run('getHighScores().length'), 2);
  game.run("state.caseSeed='another-mixed'");
  assert.equal(game.run("saveHighScore(350,'Mixed rank').previousBest"), 300);
  const records = JSON.parse(game.backing.get('carmen_highScores'));
  const historical = records.find(record => record.quizStyle === 'classic');
  delete historical.quizStyle; delete historical.routeStart; delete historical.activityCatalogVersion;
  for (const key of ['designVersion','assisted','challenge','episodeId']) delete historical[key];
  game.backing.set('carmen_highScores', JSON.stringify(records));
  game.run("state.quizStyle='classic'; state.caseSeed='new-classic'");
  assert.equal(game.run("saveHighScore(850,'Classic rank').previousBest"), 800);
  game.run('showRecordsModal()');
  assert.match(game.document.getElementById('recordsContent').innerHTML, /Mixed quizzes/);
  assert.match(game.document.getElementById('recordsContent').innerHTML, /Classic choices/);
});

test('mixed generation deterministically includes a pilot when the selected route has one', () => {
  for (const pack of packs) for (const count of core.stopCounts(pack.locations.length)) {
    const game = createGame();
    const locations = pack.locations.slice(0, count);
    const eligible = locations.some(location => pack.questions[location.id].some(item => activities.getCaseActivity(pack, item)));
    const hasActivity = ids => ids.some((id, index) => {
      const item = pack.questions[locations[index].id].find(candidate => candidate.caseId === id);
      return activities.getCaseActivity(pack, item);
    });
    game.context.testActivityPack = copy(pack);
    game.context.choiceOnlyIds = locations.map(location => {
      const pool = pack.questions[location.id];
      return (pool.find(item => !activities.getCaseActivity(pack, item)) || pool[0]).caseId;
    });
    const original = [...game.context.choiceOnlyIds];
    game.run('applyQuizPack(testActivityPack); createCaseSeed = () => "mixed-guarantee"; CarmenRunGenerator.chooseRouteStart = () => 0;');
    game.document.getElementById('quizStyleSelect').value = 'mixed'; game.start(count);
    assert.equal(hasActivity(game.snapshot().caseVariantIds), eligible, `${pack.id}: ${count} stops`);
    const first = JSON.parse(game.run('JSON.stringify(ensureActivityInRun(choiceOnlyIds, "repeatable"))'));
    const again = JSON.parse(game.run('JSON.stringify(ensureActivityInRun(choiceOnlyIds, "repeatable"))'));
    assert.deepEqual(first, again);
    assert.deepEqual([...game.context.choiceOnlyIds], original);
    assert.equal(hasActivity(first), eligible, `${pack.id}: deterministic replacement`);
    if (!eligible) assert.deepEqual(first, original, 'Routes outside pilot coverage retain their chosen cases');
    game.run("state.quizStyle='classic'");
    assert.deepEqual(JSON.parse(game.run('JSON.stringify(ensureActivityInRun(choiceOnlyIds, "repeatable"))')), original);
  }
});

test('mixed activity result reviews retain warrant answers and the reconstructed work', () => {
  const game = startMixed();
  solveCurrentPuzzle(game); game.document.getElementById('goToWarrantBtn').click();
  for (let attempt = 0; attempt < 5; attempt++) { game.warrant(false); game.flush(); }
  assert.equal(game.run('activeModal'), 'assistanceModal');
  assert.equal(game.state().phase, 'investigation');
  assert.equal(core.validateSave(game.snapshot(), bentonville), true);
  game.run('finishEscapedCase()');
  assert.equal(game.state().phase, 'complete');
  const failure = game.document.getElementById('resultsContent').innerHTML;
  assert.match(failure, /Farmers Market stalls/);
  assert.match(failure, /Farmers market vendor/);
  assert.match(failure, /Grows cut flowers/);

  const captured = startMixed();
  solveCurrentPuzzle(captured); captured.document.getElementById('goToWarrantBtn').click();
  captured.warrant(); captured.flush();
  assert.match(captured.run('renderCaseHistorySummary()'), /Grows cut flowers/);
});

test('both warrant layouts lock their editable fields during rejection and restore after pause', () => {
  const game = createGame(); game.start(); game.solve();
  game.context.rejectedPair = JSON.parse(game.run(`JSON.stringify((() => {
    const answer = getLocationCase(state.currentLocationIndex).warrantAnswers;
    return [getAllWarrantChoices('hideout').find(value => value !== answer.hideout), answer.disguise];
  })())`));
  game.run('document.getElementById("warrantPair").value = JSON.stringify(rejectedPair); selectWarrantPair(); submitWarrant();');
  for (const id of ['warrantPair','warrantHideout','warrantDisguise']) assert.equal(game.document.getElementById(id).disabled, true, id);
  game.run('toggleCompactWarrant()');
  assert.equal(game.document.getElementById('warrantHideout').disabled, true);
  game.flush();
  for (const id of ['warrantPair','warrantHideout','warrantDisguise']) assert.equal(game.document.getElementById(id).disabled, false, id);
  assert.equal(game.document.getElementById('warrantCity').disabled, true);
  const selection = game.snapshot().warrantSelection;
  game.run('submitWarrant(); goToTitle(); resumeGame()');
  assert.deepEqual(game.snapshot().warrantSelection, selection);
  assert.equal(game.document.getElementById('warrantPair').disabled, false);
  assert.equal(game.document.getElementById('warrantPair').value, JSON.stringify(game.context.rejectedPair));
});

test('the page and existing Pages package include both activity modules in dependency order', () => {
  const html = fs.readFileSync(path.join(root, 'carmen-sandiego-bentonville.html'), 'utf8');
  const styleSelect = html.match(/<select id="quizStyleSelect"[^>]*>([\s\S]*?)<\/select>/)?.[1];
  assert.ok(styleSelect);
  assert.match(styleSelect, /<option value="mixed" selected>/);
  assert.doesNotMatch(styleSelect, /<option value="classic" selected>/);
  const scripts = [...html.matchAll(/<script[^>]*src="\.\/([^"]+)"[^>]*>/g)].map(match => match[1]);
  for (const file of ['quiz-activities.js', 'game-activities.js', 'game-core.js', 'game.js']) {
    assert.equal(scripts.filter(script => script === file).length, 1, file);
    assert.equal(fs.existsSync(path.join(root, file)), true, file);
  }
  assert.ok(scripts.indexOf('quiz-activities.js') < scripts.indexOf('game-core.js'));
  assert.ok(scripts.indexOf('game-activities.js') < scripts.indexOf('game.js'));
  const workflow = fs.readFileSync(path.join(root, '.github/workflows/pages.yml'), 'utf8');
  const packageCommand = workflow.match(/cp index\.html[\s\S]*?_site\//)?.[0];
  assert.ok(packageCommand, 'Expected the existing static-site copy command');
  const packageJson = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
  for (const file of ['quiz-activities.js', 'game-activities.js']) {
    assert.ok(workflow.includes(`- '${file}'`), `${file} must trigger the existing workflow`);
    assert.ok(packageCommand.includes(file), `${file} must be in the packaged assets`);
    assert.ok(packageJson.scripts['check:syntax'].includes(`node --check ${file}`), `${file} must be syntax-checked`);
  }
});
