const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const core = require('../game-core.js');
const {createGame} = require('./helpers/game-harness.cjs');
const {buildOffline} = require('../scripts/build-offline.cjs');
const root = path.resolve(__dirname, '..');

function solve(game) {
  game.run("switchTab('puzzle')");
  const activity = JSON.parse(game.run('JSON.stringify(getCurrentActivity())'));
  if (activity) {
    game.context.solution = core.activitySolution(activity);
    game.run('solution.forEach(selectActivityCard); checkActivity()');
  } else game.run('selectChoice(state.activePuzzleCorrectIndex)');
  game.flush();
}

function activityGame(packFile, caseId) {
  const game = createGame();
  const pack = JSON.parse(fs.readFileSync(path.join(root, 'data/packs', packFile), 'utf8'));
  const target = pack.locations.findIndex(loc => pack.questions[loc.id].some(item => item.caseId === caseId));
  assert.ok(target >= 0);
  const routeStart = Math.min(target, pack.locations.length - 4);
  const ids = pack.locations.slice(routeStart, routeStart + 4).map(loc => (pack.questions[loc.id].find(item => item.caseId === caseId) || pack.questions[loc.id][0]).caseId);
  Object.assign(game.context, {testPack:pack,testRun:{seed:'harmony',routeStart,caseVariantIds:ids}});
  game.run('applyQuizPack(testPack); createDistinctRun=()=>testRun');
  game.document.getElementById('quizStyleSelect').value = 'mixed'; game.start();
  for (let index = routeStart; index < target; index++) { solve(game); game.warrant(); game.flush(); game.run('nextRound()'); }
  game.run("switchTab('puzzle')");
  return {game,pack,activity:JSON.parse(game.run('JSON.stringify(getCurrentActivity())'))};
}

test('filters toggle freely and cannot charge again for the same set selected in a different order after resume', () => {
  const {game,pack,activity} = activityGame('bentonville.json', 'classic-the-momentary');
  assert.equal(activity.kind, 'filter');
  const wrong = activity.items.map((_,i)=>i); // This authored filter has distractors.
  game.context.wrong = wrong;
  const lives = game.state().lives;
  game.run('wrong.forEach(selectActivityCard); checkActivity()'); game.flush();
  assert.equal(game.state().lives, lives - 1);
  game.run('goToTitle(); resumeGame(); resetActivitySelection(); [...wrong].reverse().forEach(selectActivityCard); checkActivity()');
  assert.equal(game.state().lives, lives - 1);
  game.run('resetActivitySelection(); selectActivityCard(0); selectActivityCard(0)');
  assert.deepEqual(game.state().activityProgress.selections, []);
  assert.equal(game.document.getElementById('activityCheck').disabled, true);
  game.context.solution = core.activitySolution(activity);
  game.run('[...solution].reverse().forEach(selectActivityCard); checkActivity()');
  assert.equal(game.state().puzzleSolved, true);
  assert.equal(core.validateSave(game.snapshot(),pack), true);
});

test('fragment assembly leaves distractors unused and saves partial ordered work', () => {
  const {game,pack,activity} = activityGame('nwa-mountain-biking.json', 'mtb-slaughter-american');
  assert.equal(activity.kind, 'assemble');
  const solution = core.activitySolution(activity);
  game.context.solution = solution;
  game.run('selectActivityCard(solution[0]); goToTitle(); resumeGame()');
  assert.deepEqual(game.state().activityProgress.selections, [solution[0]]);
  game.run('solution.slice(1).forEach(selectActivityCard); checkActivity()');
  assert.equal(game.state().puzzleSolved, true);
  assert.ok(solution.length < activity.items.length);
  assert.equal(core.validateSave(game.snapshot(),pack), true);
});

test('compact warrants preserve every answer combination, saved selections, and the original score path', () => {
  const game = createGame(); game.start(); solve(game);
  const pairs = game.document.getElementById('warrantPair');
  const count = game.run("getAllWarrantChoices('hideout').length * getAllWarrantChoices('disguise').length");
  assert.equal(pairs.children.length, count + 1);
  const answer = JSON.parse(game.run('JSON.stringify(getLocationCase(0).warrantAnswers)'));
  pairs.value = JSON.stringify([answer.hideout, answer.disguise]); game.run('selectWarrantPair()');
  const saved = game.snapshot().warrantSelection;
  game.run('toggleCompactWarrant(); toggleCompactWarrant(); goToTitle(); resumeGame()');
  assert.deepEqual(game.snapshot().warrantSelection, saved);
  assert.equal(game.document.getElementById('warrantPair').value, pairs.value);
  game.run('submitWarrant()'); game.flush();
  assert.equal(game.state().phase, 'between');
  assert.equal(game.state().roundScore.warrant, core.SCORE_RULES.warrant);
});

test('save restoration requires a paused Study session and rejects a stale replacement preview', () => {
  const game=createGame(); game.start();
  game.context.candidate=game.snapshot();
  assert.equal(game.run('CarmenStudySession.replace(candidate, storage.getItem(SAVE_KEY)).ok'),false);
  game.run('openStudy()');
  game.context.previewRaw=game.backing.get('carmen_save');
  const changed=JSON.stringify({...game.snapshot(),caseSeed:'other-tab'});
  game.backing.set('carmen_save',changed);
  assert.equal(game.run('CarmenStudySession.replace(candidate, previewRaw).ok'),false);
  assert.equal(game.backing.get('carmen_save'),changed);
  game.context.previewRaw=changed;
  game.run('candidate.extra="not a persisted field"');
  assert.equal(game.run('CarmenStudySession.replace(candidate, previewRaw).ok'),true);
  assert.equal(Object.hasOwn(game.snapshot(),'extra'),false);
});

test('fallback evidence renders plain names and labels as text, not markup', () => {
  const game=createGame(); game.start();
  game.context.visualCase={id:'unknown',name:'<b>Stop</b>',token:{char:'<img>',name:'A & B'},puzzle:{title:'<script>bad</script>'}};
  game.run('renderPuzzleVisual(visualCase)');
  const html=game.document.getElementById('puzzleVisualContainer').innerHTML;
  assert.match(html,/&lt;b&gt;Stop&lt;\/b&gt;/);
  assert.match(html,/A &amp; B/);
  assert.doesNotMatch(html,/<script>|<img>/);
});

test('fictional warrant names agree across clues, controls, review and Study while saves keep canonical answers', () => {
  const game=createGame();
  const pack=JSON.parse(fs.readFileSync(path.join(root,'data/packs/arkansas-delta.json'),'utf8'));
  game.context.aliasPack=pack;
  game.run('applyQuizPack(aliasPack); createDistinctRun=()=>({seed:"aliases",routeStart:0,caseVariantIds:aliasPack.locations.slice(0,4).map(loc=>aliasPack.questions[loc.id][0].caseId)})');
  game.start();
  const clue=game.document.getElementById('clueText2').textContent;
  assert.match(clue,/ACME Music File Desk/);
  assert.match(clue,/Music-file cataloguer/);
  assert.doesNotMatch(clue,/ACME Records Desk|Archive photographer/);
  const hideouts=game.document.getElementById('warrantHideout').children;
  assert.equal(hideouts.find(option=>option.value==='ACME Records Desk').textContent,'ACME Music File Desk');
  solve(game);
  const pair=game.document.getElementById('warrantPair');
  pair.value=JSON.stringify(['ACME Records Desk','Archive photographer']); game.run('selectWarrantPair()');
  assert.equal(game.snapshot().warrantSelection.hideout,'ACME Records Desk');
  assert.match(game.run('renderEscapedAnswersPanel()'),/ACME Music File Desk/);
  const before=game.backing.get('carmen_save');
  game.run('openStudy()');
  assert.match(game.document.getElementById('studyEvidence').textContent,/ACME Music File Desk/);
  assert.equal(game.backing.get('carmen_save'),before);
  game.run('closeStudy(); resumeGame(); submitWarrant()'); game.flush();
  assert.equal(game.state().phase,'between');
  assert.equal(core.validateSave(game.snapshot(),pack),true);
});

test('offline edition embeds all current packs and runtime assets without fetching maps or scripts', () => {
  const html=buildOffline(root);
  assert.doesNotMatch(html,/<script\b[^>]*src=/);
  assert.doesNotMatch(html,/<link\b[^>]*href=/);
  const payload=html.match(/window\.CarmenOfflinePacks=(.*?);<\/script>/s)?.[1];
  assert.ok(payload);
  const resources=JSON.parse(payload);
  assert.equal(resources['data/quiz-packs.json'].packs.length,12);
  assert.equal(Object.keys(resources).length,13);
  for(const file of ['game.js','game-session.js','game-warrant.js','game-study.js','study-core.js','quiz-practice.js']) {
    assert.ok(html.includes(`data-source="${file}"`));
  }
  assert.match(html,/Offline edition/);
});

test('every shipped script is syntax-covered and included in the deployment artifact', () => {
  const html=fs.readFileSync(path.join(root,'carmen-sandiego-bentonville.html'),'utf8');
  const workflow=fs.readFileSync(path.join(root,'.github/workflows/pages.yml'),'utf8');
  const syntax=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8')).scripts['check:syntax'];
  const files=[...html.matchAll(/<script[^>]*src="\.\/([^"]+)"/g)].map(match=>match[1]);
  assert.equal(new Set(files).size,files.length);
  for(const file of files) {
    assert.ok(workflow.includes(`- '${file}'`),file);
    assert.ok(workflow.match(/cp index\.html[\s\S]*?_site\//)[0].includes(file),file);
    assert.ok(syntax.includes(`node --check ${file}`),file);
  }
});

test('offline JSON embedding preserves literal replacement markers and script-looking evidence', () => {
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'carmen-offline-'));
  try {
    fs.mkdirSync(path.join(temporary, 'data/packs'), {recursive:true});
    const pack = JSON.parse(fs.readFileSync(path.join(root,'data/packs/bentonville.json'),'utf8'));
    pack.intro += " Literal $& $` $' </script> evidence.";
    const manifest={schemaVersion:1,defaultPackId:pack.id,packs:[{id:pack.id,title:pack.title,path:'./data/packs/bentonville.json'}]};
    fs.writeFileSync(path.join(temporary,'data/quiz-packs.json'),JSON.stringify(manifest));
    fs.writeFileSync(path.join(temporary,'data/packs/bentonville.json'),JSON.stringify(pack));
    fs.writeFileSync(path.join(temporary,'carmen-sandiego-bentonville.html'),'<html><head></head><body class="game"></body></html>');
    const html=buildOffline(temporary);
    const resources=JSON.parse(html.match(/window\.CarmenOfflinePacks=(.*?);<\/script>/s)[1]);
    assert.equal(resources['data/packs/bentonville.json'].intro,pack.intro);
    assert.match(html,/<body class="game"><p class="offline-notice">/);
  } finally { fs.rmSync(temporary,{recursive:true,force:true}); }
});
