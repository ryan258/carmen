const test = require('node:test');
const assert = require('node:assert/strict');
const core = require('../game-core.js');
const pack = require('../data/packs/bentonville.json');
const {createGame} = require('./helpers/game-harness.cjs');

function solve(game) {
  game.run("switchTab('puzzle')");
  const activity = JSON.parse(game.run('JSON.stringify(getCurrentActivity())'));
  if (activity) {
    game.context.answer = core.activitySolution(activity);
    game.run('answer.forEach(selectActivityCard); checkActivity()');
  } else game.run('state.isFinalConfrontation ? selectFinalChoice(state.activeFinalCorrectIndex) : selectChoice(state.activePuzzleCorrectIndex)');
  game.flush();
}

test('quick entry creates a four-stop current Mixed case and resume visibly describes its next action', () => {
  const game = createGame();
  game.document.getElementById('quickCaseButton').disabled = false;
  game.document.getElementById('quickCaseButton').click();
  assert.equal(game.state().stopCount, 4);
  assert.equal(game.state().quizStyle, 'mixed');
  assert.equal(game.state().difficulty, 'rookie');
  assert.equal(game.state().activityCatalogVersion, 3);
  assert.equal(core.validateSave(game.snapshot(), pack), true);
  game.run('goToTitle()');
  assert.equal(game.document.getElementById('resumeCard').hidden, false);
  assert.equal(game.document.getElementById('resumeSummary').hidden, false);
  assert.match(game.document.getElementById('resumeSummary').textContent, /stop 1 of 4/);
  game.document.getElementById('resumeButton').click();
  assert.equal(game.state().phase, 'investigation');
});

test('new warrants confirm the solved case once while historical catalog keeps its independent fields', () => {
  const game = createGame(); game.start(4, 3); solve(game);
  game.document.getElementById('goToWarrantBtn').click();
  assert.equal(game.document.getElementById('warrantManualFields').hidden, true);
  assert.equal(game.document.getElementById('warrantConfirmation').hidden, false);
  assert.equal(game.document.getElementById('submitWarrantBtn').textContent, 'Confirm arrest');
  const before = game.state();
  game.run('submitWarrant(); submitWarrant()'); game.flush();
  assert.equal(game.state().phase, 'between');
  assert.equal(game.state().lives, before.lives);
  assert.equal(game.state().history.length, 1);
  assert.equal(game.state().roundScore.warrant, core.SCORE_RULES.warrant);
  assert.equal(core.validateSave(game.snapshot(), pack), true);
  const old = createGame(); old.start(); solve(old);
  assert.equal(old.document.getElementById('warrantManualFields').hidden, false);
});

test('assistance preserves paid hints and earned work while waiving only future hint costs', () => {
  const game = createGame(); game.start(4, 3);
  game.run("switchTab('puzzle'); requestHint(); enableCaseSupport(); requestHint()");
  assert.equal(game.state().hintsUsedInRound, 2);
  assert.equal(game.state().scoringHintsUsedInRound, 1);
  const lives = game.state().lives;
  game.run('selectChoice((state.activePuzzleCorrectIndex+1)%4)'); game.flush();
  assert.equal(game.state().lives, lives);
  assert.equal(game.state().puzzleAttempts, 1);
  solve(game);
  assert.equal(game.state().roundScore.puzzle, 60);
  assert.equal(core.validateSave(game.snapshot(), pack), true);
  game.run('goToTitle(); resumeGame()');
  assert.equal(game.state().supportEnabled, true);
  assert.equal(game.state().roundScore.puzzle, 60);
});

test('zero lives offers durable recovery, Pause keeps it, then assistance resumes the same case', () => {
  const game = createGame(); game.start(4, 3);
  const save = game.snapshot(); save.lives = 0;
  game.backing.set('carmen_save', JSON.stringify(save));
  game.run('goToTitle(); resumeGame()');
  assert.equal(game.run('activeModal'), 'assistanceModal');
  assert.equal(game.snapshot().lives, 0);
  assert.equal(game.backing.has('carmen_stats'), false);
  game.run('declineCaseAssistance()');
  assert.equal(game.state().phase, 'idle');
  assert.equal(game.snapshot().lives, 0);
  game.run('resumeGame(); continueAssistedCase()');
  assert.equal(game.state().phase, 'investigation');
  assert.equal(game.state().assisted, true);
  assert.equal(game.state().lives, 1);
  assert.deepEqual(game.state().caseVariantIds, save.caseVariantIds);
  assert.equal(core.validateSave(game.snapshot(), pack), true);
});

test('assistance and confirmation cannot replace progress changed in another tab', () => {
  const game = createGame(); game.start(4, 3);
  const newer = JSON.stringify({...game.snapshot(), caseSeed:'another-tab'});
  game.backing.set('carmen_save', newer);
  game.run('enableCaseSupport()');
  assert.equal(game.backing.get('carmen_save'), newer);
  assert.equal(game.state().phase, 'idle');
});

test('story reveals recovered records in order and completes its synthesis finale with a short-route commendation', async () => {
  const game = createGame();
  await game.run('startStoryCase()');
  assert.equal(game.state().episodeId, 'bentonville-paper-trail-v1');
  assert.equal(game.state().routeStart, 0);
  assert.equal(game.run('workspaceEpisodeEvidence()'), '');
  assert.equal(core.validateSave(game.snapshot(), pack), true, 'new story can resume before any answer');
  const firstActivity = JSON.parse(game.run('JSON.stringify(getCurrentActivity())'));
  assert.equal(firstActivity.id, 'classic-downtown-square:filter:v2');
  const firstAnswer = core.activitySolution(firstActivity)[0];
  game.run(`switchTab('puzzle'); selectActivityCard(${firstAnswer}); goToTitle(); resumeGame()`);
  assert.equal(game.state().phase, 'investigation');
  assert.deepEqual(game.state().activityProgress.selections, [firstAnswer]);
  assert.equal(core.validateSave(game.snapshot(), pack), true, 'selected market card survives resume');
  game.run('resetActivitySelection()');
  for (let index = 0; index < 4; index++) {
    solve(game);
    assert.ok(game.run('workspaceEpisodeEvidence()').includes(`Record ${index+1}.`));
    assert.equal(core.validateSave(game.snapshot(), pack), true);
    game.run('goToTitle(); resumeGame()');
    assert.equal(game.state().puzzleSolved, true);
    assert.ok(game.run('workspaceEpisodeEvidence()').includes(`Record ${index+1}.`));
    game.run("switchTab('warrant'); submitWarrant()"); game.flush();
    assert.equal(game.state().history.length, index+1);
    game.run(index === 3 ? 'triggerFinalConfrontationFlow()' : 'nextRound()');
  }
  for (let part = 1; part <= 3; part++) {
    assert.equal(game.run('getCurrentActivity()'), null);
    assert.match(game.document.getElementById('puzzleDescription').textContent, /Record 4/);
    solve(game);
    assert.match(game.document.getElementById('currentTask').textContent, /Review your deduction/);
    assert.equal(core.validateSave(game.snapshot(), pack), true);
    game.run('advanceFinalRound()');
  }
  assert.equal(game.state().phase, 'complete');
  assert.equal(game.backing.has('carmen_save'), false);
  assert.match(game.document.getElementById('resultsContent').innerHTML, /Chief Inspector/);
  assert.match(game.document.getElementById('resultsContent').innerHTML, /original Studio destination/);
  const records = JSON.parse(game.backing.get('carmen_highScores'));
  assert.equal(records[0].episodeId, 'bentonville-paper-trail-v1');
  assert.equal(records[0].assisted, false);
});

test('Continue across packs loads only a manifest pack and refuses a stale saved snapshot', async () => {
  const game = createGame(); game.start(4, 3); game.run('goToTitle()');
  const otherPack = require('../data/packs/argentina.json');
  game.context.otherPack = otherPack;
  game.run('QUIZ_PACK_MANIFEST={schemaVersion:1,defaultPackId:DEFAULT_QUIZ_PACK.id,packs:[{...DEFAULT_QUIZ_PACK_ENTRY,path:"./data/packs/bentonville.json"},{id:otherPack.id,title:otherPack.title,path:"./data/packs/argentina.json"}]}; applyQuizPack(otherPack); checkResumeState()');
  assert.match(game.document.getElementById('resumeButton').textContent, /Bentonville/);
  let resolveFetch;
  game.context.fetch = () => new Promise(resolve => { resolveFetch = resolve; });
  const resume = game.run('resumeGame()');
  const newer = JSON.stringify({...game.snapshot(),caseSeed:'newer-save'});
  game.backing.set('carmen_save',newer);
  resolveFetch({ok:true,json:async()=>pack});
  await resume;
  assert.equal(game.backing.get('carmen_save'),newer);
  assert.equal(game.state().phase,'idle');
});
