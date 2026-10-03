const test=require('node:test');
const assert=require('node:assert/strict');
const {createGame}=require('./helpers/game-harness.cjs');

test('resume preserves hint cost, attempts, eliminated options, and solved score',()=>{
  const g=createGame();g.start();g.run('requestHint(); selectChoice((state.activePuzzleCorrectIndex+1)%4)');g.flush();
  const before=g.state();g.run('goToTitle(); resumeGame()');
  assert.equal(g.state().hintsUsedInRound,1);assert.equal(g.state().puzzleAttempts,1);
  assert.deepEqual(g.state().wrongOptions,before.wrongOptions);assert.deepEqual(g.state().optionOrder,before.optionOrder);
  g.solve();const score=g.state().score;g.warrant(false);g.flush();g.run('goToTitle(); resumeGame()');
  assert.equal(g.state().puzzleSolved,true);assert.equal(g.state().score,score);
  g.run('selectChoice(state.activePuzzleCorrectIndex)');assert.equal(g.state().score,score);
});

test('warrant rejection is locked during feedback; unsolved and final warrants are rejected',()=>{
  const g=createGame();g.start();g.warrant(true);assert.equal(g.state().score,0);
  g.solve();g.warrant(false);g.warrant(false);g.warrant(false);assert.equal(g.state().lives,4);
  g.flush();assert.equal(g.document.getElementById('submitWarrantBtn').disabled,false);
});

test('approved warrant resumes the between-stop phase once without awarding twice',()=>{
  const g=createGame();g.start();g.solve();g.warrant();const score=g.state().score;
  g.run('goToTitle(); resumeGame()');g.flush();assert.equal(g.state().phase,'between');
  assert.equal(g.state().history.length,1);assert.equal(g.state().score,score);
  g.run('nextRound()');assert.equal(g.state().currentLocationIndex,1);assert.equal(g.state().hintsUsedInRound,0);
});

test('abort cancels delayed progression and keeps the save deleted',()=>{
  const g=createGame();g.start();g.solve();g.warrant();g.run('showResetModal(); confirmReset()');g.flush();
  assert.equal(g.state().phase,'idle');assert.equal(g.backing.has('carmen_save'),false);
  assert.equal(g.document.getElementById('titleScreen').classList.contains('hidden'),false);
});

test('zero-life resume ends the game once without restoring lives',()=>{
  const g=createGame();g.start();const save=g.snapshot();save.lives=0;g.backing.set('carmen_save',JSON.stringify(save));
  g.run('goToTitle(); resumeGame(); triggerGameOver()');assert.equal(g.state().lives,0);assert.equal(g.state().phase,'complete');
  assert.equal(g.run('getStats().gamesPlayed'),1);
});

test('unknown, old, foreign, malformed and unsupported-length saves never migrate',()=>{
  const g=createGame();g.start();const original=g.snapshot();
  for(const patch of [{schemaVersion:999},{schemaVersion:3},{quizPackId:'argentina-carmen'},{stopCount:5},{stopCount:4.5},{score:-1},{lives:99},{contentVersion:999},{warrantSelection:null}]){
    const value=JSON.stringify({...original,...patch});g.backing.set('carmen_save',value);assert.equal(g.run('getValidSave()'),null,JSON.stringify(patch));assert.equal(g.backing.get('carmen_save'),value);
  }
  g.backing.set('carmen_save','{broken');g.run('checkResumeState()');assert.equal(g.document.getElementById('clearBrokenSaveButton').classList.contains('hidden'),false);
});

test('records recover from malformed storage and separate route lengths',()=>{
  const g=createGame();g.start();g.backing.set('carmen_highScores','{}');
  g.run("saveHighScore(100,'Rank'); state.stopCount=8; state.caseSeed='eight'; saveHighScore(500,'Rank')");
  assert.equal(g.run('getHighScores().length'),2);
  g.run("state.stopCount=4;state.caseSeed='four-new'");assert.equal(g.run("saveHighScore(120,'Rank').previousBest"),100);
});

test('both packs complete 4/6/8-stop runs and start again with correct controls',()=>{
  const fs=require('node:fs');const path=require('node:path');
  for(const packName of ['bentonville','argentina']) for(const count of [4,6,8]) {
    const g=createGame();g.context.testPack=JSON.parse(fs.readFileSync(path.join(__dirname,`../data/packs/${packName}.json`),'utf8'));
    g.run('applyQuizPack(testPack)');g.start(count);
    for(let i=0;i<count;i++){g.solve();g.warrant();g.flush();assert.equal(g.run('Boolean(getValidSave())'),true);g.run(i===count-1?'triggerFinalConfrontationFlow()':'nextRound()');}
    assert.equal(g.document.getElementById('goToWarrantBtn').disabled,true);
    assert.equal(g.document.getElementById('reviewCluesBtn').disabled,true);
    const before=g.state().score;g.warrant();assert.equal(g.state().score,before);
    assert.equal(g.run('getFinalConfrontationRounds()[2].options[0] === LOCATIONS[LOCATIONS.length-1].token.name'),true);
    for(let round=0;round<3;round++){g.run('selectFinalChoice(state.activeFinalCorrectIndex,state.activeFinalCorrectIndex)');g.flush();g.document.getElementById('finalContinueBtn').click();}
    assert.equal(g.state().phase,'complete');assert.equal(g.run('getStats().gamesPlayed'),1);
    g.run('triggerGameSuccess()');assert.equal(g.run('getStats().gamesPlayed'),1);
    g.run('goToDifficultySelect()');assert.equal(Number(g.document.getElementById('stopCountSelect').value),count);
    g.start(count);assert.equal(g.document.getElementById('tabDossier').disabled,false);
  }
});

test('final feedback is resumable and a final failure explains the failed final question',()=>{
  const g=createGame();g.start();for(let i=0;i<4;i++){g.solve();g.warrant();g.flush();g.run(i===3?'triggerFinalConfrontationFlow()':'nextRound()');}
  g.run('selectFinalChoice(state.activeFinalCorrectIndex,state.activeFinalCorrectIndex); goToTitle(); resumeGame()');
  assert.equal(g.state().finalConfrontationRound,1);assert.equal(g.state().puzzleSolved,true);
  g.document.getElementById('finalContinueBtn').click();assert.equal(g.state().finalConfrontationRound,2);assert.equal(g.state().puzzleSolved,false);
  g.run('state.lives=0;triggerGameOver()');assert.match(g.document.getElementById('resultsContent').innerHTML,/Final report — round 2/);
});

test('pack loading blocks start and resume until the latest request completes',async()=>{
  const g=createGame();g.run('QUIZ_PACK_MANIFEST={schemaVersion:1,defaultPackId:DEFAULT_QUIZ_PACK.id,packs:[{...DEFAULT_QUIZ_PACK_ENTRY,path:"./data/packs/bentonville.json"}]}');
  let resolve;g.context.fetch=()=>new Promise(r=>{resolve=r;});
  const loading=g.run('selectQuizPackById(DEFAULT_QUIZ_PACK.id)');g.run("selectDifficulty('detective');resumeGame()");assert.equal(g.state().phase,'idle');
  resolve({ok:true,json:async()=>JSON.parse(g.run('JSON.stringify(DEFAULT_QUIZ_PACK)'))});await loading;
  assert.equal(g.run('packLoading'),false);g.start();assert.equal(g.state().phase,'investigation');
});

test('a late earlier pack response cannot replace the latest selection',async()=>{
  const fs=require('node:fs'),path=require('node:path');const g=createGame();
  const argentina=JSON.parse(fs.readFileSync(path.join(__dirname,'../data/packs/argentina.json'),'utf8'));
  g.context.argentina=argentina;
  g.run('QUIZ_PACK_MANIFEST={schemaVersion:1,defaultPackId:DEFAULT_QUIZ_PACK.id,packs:[{...DEFAULT_QUIZ_PACK_ENTRY,path:"./data/packs/bentonville.json"},{id:argentina.id,title:argentina.title,path:"./data/packs/argentina.json"}]}');
  const pending=[];g.context.fetch=()=>new Promise(resolve=>pending.push(resolve));
  const first=g.run('selectQuizPackById(DEFAULT_QUIZ_PACK.id)');
  const second=g.run('selectQuizPackById(argentina.id)');
  pending[1]({ok:true,json:async()=>argentina});await second;
  pending[0]({ok:true,json:async()=>JSON.parse(g.run('JSON.stringify(DEFAULT_QUIZ_PACK)'))});await first;
  assert.equal(g.run('QUIZ_PACK.id'),argentina.id);assert.equal(g.run('packLoading'),false);
});

test('unavailable map stays a route fallback across stops without reinitializing Leaflet',()=>{
  const g=createGame();g.start();assert.equal(g.run('mapUnavailable'),true);
  g.context.window.L={map(){throw new Error('Must not reinitialize a failed map');}};
  g.solve();g.warrant();g.flush();g.run('nextRound()');
  assert.match(g.document.getElementById('map').innerHTML,/Route overview/);
});

test('stale abort confirmation cannot erase another tab save, even before its storage event',()=>{
  const g=createGame();g.start();g.run('showResetModal()');
  assert.equal(g.document.activeElement.getAttribute('data-initial-focus'),'');
  const newer=JSON.stringify({...g.snapshot(),caseSeed:'other-tab'});g.backing.set('carmen_save',newer);
  g.run('confirmReset()');assert.equal(g.backing.get('carmen_save'),newer);
  assert.equal(g.run('activeModal'),null);assert.equal(g.state().phase,'idle');
  assert.equal(g.document.body.children.some(el=>el.inert),false);
});

test('actual boot registers storage cancellation and invalidates an open dialog',async()=>{
  const g=createGame();await g.boot();g.start();g.run('showResetModal()');
  const newer=JSON.stringify({...g.snapshot(),caseSeed:'newer'});g.backing.set('carmen_save',newer);
  await g.dispatchWindow('storage',{key:'carmen_save',newValue:newer});
  assert.equal(g.run('activeModal'),null);assert.equal(g.state().phase,'idle');
  g.run('confirmReset()');assert.equal(g.backing.get('carmen_save'),newer);
});

test('clearing an old broken-save control preserves a newer valid save',()=>{
  const g=createGame();g.start();const save=g.backing.get('carmen_save');g.run('clearBrokenSave()');assert.equal(g.backing.get('carmen_save'),save);
});

test('correct-answer feedback waits for Continue and restores without advancing',()=>{
  const g=createGame();g.start();g.run("switchTab('puzzle');selectChoice(state.activePuzzleCorrectIndex)");g.flush();
  assert.equal(g.state().activeTab,'puzzle');assert.equal(g.state().puzzleSolved,true);
  assert.match(g.document.getElementById('puzzleFeedback').textContent,/Continue/);
  g.run('goToTitle();resumeGame()');assert.equal(g.state().activeTab,'puzzle');
  g.document.getElementById('goToWarrantBtn').click();assert.equal(g.state().activeTab,'warrant');
});

test('warrant choices stay local and the established location is filled at every difficulty',()=>{
  const g=createGame();for(const difficulty of ['rookie','detective','inspector']) {
    g.run(`state.stopCount=8;selectDifficulty('${difficulty}')`);
    for(const field of ['hideout','disguise'])assert.ok(g.run(`getAllWarrantChoices('${field}').length`)<=5);
    assert.equal(g.document.getElementById('warrantCity').disabled,true);
    assert.equal(g.document.getElementById('warrantCity').value,g.run('LOCATIONS[0].name'));
  }
});

test('actual page bindings expose unique controls, voice labels, pause and text-route preference',()=>{
  const g=createGame();g.start();
  assert.equal(g.document.getElementById('missing-id'),null);
  assert.notEqual(g.document.getElementById('beginInvestigationBtn'),g.document.getElementById('reviewCluesBtn'));
  for(const [i,button] of g.document.getElementById('puzzleOptionsGrid').children.entries())assert.match(button.getAttribute('aria-label'),new RegExp(`^Answer ${'ABCD'[i]}:`));
  g.document.getElementById('routeToggle').click();assert.equal(g.state().settings.textRoute,true);
  assert.match(g.document.getElementById('map').innerHTML,/text route selected/);
  const saved=g.backing.get('carmen_save');g.run('goToTitle()');assert.equal(g.backing.get('carmen_save'),saved);
});

test('keyboard shortcuts execute after boot and ignore focused form controls',async()=>{
  const g=createGame();await g.boot();g.start();g.run("switchTab('puzzle')");
  const key='abcd'[g.state().activePuzzleCorrectIndex];
  await g.dispatchKey(key,g.document.getElementById('warrantHideout'));assert.equal(g.state().puzzleSolved,false);
  await g.dispatchKey(key);assert.equal(g.state().puzzleSolved,true);
});

test('a pending storage event cannot let an old tab overwrite a newer save',()=>{
  const g=createGame();g.start();const newer=JSON.stringify({...g.snapshot(),caseSeed:'newer-tab'});
  g.backing.set('carmen_save',newer);g.run('requestHint()');
  assert.equal(g.backing.get('carmen_save'),newer);assert.equal(g.state().phase,'idle');
});
