const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const core = require('../game-core.js');
const generator = require('../run-generator.js');
const design = require('../case-design.js');
const pack = require('../data/packs/bentonville.json');

function savedCase(schemaVersion = 8) {
  const save = {
    schemaVersion, quizPackId: pack.id, contentVersion: pack.contentVersion,
    phase: 'investigation', difficulty: 'rookie', currentLocationIndex: 0,
    score: 0, lives: 6, streak: 0, puzzleSolved: false, puzzleAttempts: 0,
    hintsUsedInRound: 0, totalHintsUsed: 0,
    roundScore: {puzzle: 0, warrant: 0, streak: 0, total: 0},
    warrantIssued: false, clueTokens: [], history: [], stopCount: 4,
    routeStart: 0, caseSeed: 'design-contract',
    caseVariantIds: pack.locations.slice(0, 4).map(location => pack.questions[location.id][0].caseId),
    isFinalConfrontation: false, finalConfrontationRound: 1,
    optionOrder: [0,1,2,3], wrongOptions: [], activeTab: 'dossier', warrantSelection: {},
    quizStyle: 'classic', activityProgress: null, activityCatalogVersion: schemaVersion === 8 ? 3 : 2,
    assisted: false, supportEnabled: false, challenge: 'standard', episodeId: null,
    evidenceMarks: [], scoringHintsUsedInRound: 0
  };
  if (schemaVersion < 8) for (const key of ['assisted','supportEnabled','challenge','episodeId','evidenceMarks','scoringHintsUsedInRound']) delete save[key];
  if (schemaVersion < 7) {delete save.routeStart; delete save.activityCatalogVersion;}
  if (schemaVersion === 5) {delete save.quizStyle; delete save.activityProgress;}
  return save;
}

test('schema 8 preserves exact historical save contracts and accepts zero-life recovery decisions', () => {
  for (const version of [5,6,7,8]) {
    const saved = savedCase(version);
    assert.equal(core.validateSave(saved, pack), true, `schema ${version}`);
    saved.lives = 0;
    assert.equal(core.validateSave(saved, pack), true, `zero-life schema ${version}`);
    if (version < 8) {
      saved.assisted = false;
      assert.equal(core.validateSave(saved, pack), false, 'new fields cannot change historical semantics');
    }
  }
  assert.equal(core.validateSave({...savedCase(7), activityCatalogVersion:3}, pack), false);
  assert.equal(core.validateSave({...savedCase(7), schemaVersion:8}, pack), false);
});

test('assistance and evidence marks are strict persisted state, not unchecked import flags', () => {
  for (const change of [
    saved => {delete saved.assisted;},
    saved => {saved.supportEnabled = true;},
    saved => {saved.challenge = 'impossible';},
    saved => {saved.episodeId = 'not-an-episode';},
    saved => {saved.evidenceMarks = [1,1];},
    saved => {saved.evidenceMarks = [3];},
    saved => {saved.evidenceMarks = ['1'];},
    saved => {saved.scoringHintsUsedInRound = 1;},
    saved => {saved.hintsUsedInRound = 1; saved.totalHintsUsed = 1;}
  ]) {
    const saved = savedCase(); change(saved);
    assert.equal(core.validateSave(saved, pack), false);
  }
  const supported = {...savedCase(), difficulty:'inspector', lives:1, assisted:true, supportEnabled:true,
    hintsUsedInRound:3, totalHintsUsed:3, evidenceMarks:[0,2]};
  assert.equal(core.validateSave(supported, pack), true);
  assert.equal(core.validateSave({...supported,hintsUsedInRound:4,totalHintsUsed:4}, pack), false);
});

test('enabling assistance preserves points earned before it and waives only subsequent hint costs', () => {
  const saved = {...savedCase(), assisted:true, supportEnabled:true, puzzleSolved:true,
    hintsUsedInRound:2, scoringHintsUsedInRound:1, totalHintsUsed:2};
  saved.score = core.getPuzzleScore(0, 1);
  saved.roundScore = {puzzle:saved.score,warrant:0,streak:0,total:saved.score};
  assert.equal(core.validateSave(saved, pack), true);
  assert.equal(core.validateSave({...saved,scoringHintsUsedInRound:0}, pack), false, 'cannot retroactively increase earned points');
  const allSupported = {...saved,scoringHintsUsedInRound:0,score:100,
    roundScore:{puzzle:100,warrant:0,streak:0,total:100}};
  assert.equal(core.validateSave(allSupported, pack), true);
});

test('assisted multi-part retries survive resume beyond the original life allowance', () => {
  const saved = {...savedCase(), quizStyle:'mixed',activityCatalogVersion:2,
    assisted:true,supportEnabled:true,lives:1,puzzleAttempts:7};
  const activity = core.resolveActivity(saved, pack);
  assert.equal(activity.kind, 'match');
  saved.activityProgress = {activityId:activity.id,selections:[],rejected:[
    [1,0,2,3],[1,2,0,3],[1,2,3,0],[2,0,1,3],[2,1,0,3],[2,1,3,0],[3,0,1,2]
  ]};
  assert.equal(core.validateSave(saved, pack), true);
  assert.equal(core.validateSave({...saved,assisted:false,supportEnabled:false}, pack), false);
  saved.activityProgress.rejected[6] = [1,0,2,3];
  assert.equal(core.validateSave(saved, pack), false, 'duplicate rejected answers remain invalid');
});

test('market activity progress validates before, during, and after solving under each saved catalog', () => {
  for (const catalogVersion of [1,2,3]) {
    const saved = {...savedCase(), quizStyle:'mixed', activityCatalogVersion:catalogVersion};
    saved.caseVariantIds[0] = 'classic-downtown-square';
    const activity = core.resolveActivity(saved, pack);
    saved.activityProgress = {activityId:activity.id, selections:[], rejected:[]};
    assert.equal(core.validateSave(saved, pack), true, `catalog ${catalogVersion}: opened`);
    saved.activityProgress.selections = core.activitySolution(activity).slice(0,1);
    assert.equal(core.validateSave(saved, pack), true, `catalog ${catalogVersion}: selected`);
    saved.activityProgress.selections = core.activitySolution(activity);
    saved.puzzleSolved = true;
    saved.score = core.getPuzzleScore(0);
    saved.roundScore = {puzzle:saved.score, warrant:0, streak:0, total:saved.score};
    assert.equal(core.validateSave(saved, pack), true, `catalog ${catalogVersion}: solved`);
    saved.activityProgress.activityId = 'untrusted-activity';
    assert.equal(core.validateSave(saved, pack), false, 'saved work must match the trusted task');
  }
});

test('episode saves pin authored cases and use their synthesis finale in both formats', () => {
  const episode = design.getEpisode(pack, 'bentonville-paper-trail-v1');
  assert.ok(episode);
  const saved = {...savedCase(), episodeId:episode.id,routeStart:episode.routeStart,
    stopCount:episode.stopCount,caseVariantIds:[...episode.caseVariantIds]};
  assert.equal(core.validateSave(saved, pack), true);
  assert.equal(core.validateSave({...saved,routeStart:1}, pack), false);
  assert.equal(core.validateSave({...saved,activityCatalogVersion:2}, pack), false);
  const changed = structuredClone(saved);
  changed.caseVariantIds[0] = pack.questions[pack.locations[0].id].find(item => item.caseId !== changed.caseVariantIds[0]).caseId;
  assert.equal(core.validateSave(changed, pack), false);
  const route = core.savedRouteLocations(saved, pack);
  const final = core.finalRounds(pack,route,saved.caseVariantIds,3,episode.id);
  assert.deepEqual(final, design.getEpisodeFinalRounds(pack,episode.id));
  for (const style of ['classic','mixed']) for (const round of [1,2,3]) {
    assert.equal(core.getActivity(pack,route,saved.caseVariantIds,'final',3,round,style,3,episode.id), null);
  }
  const finaleSave = {...saved,phase:'final',isFinalConfrontation:true,currentLocationIndex:3,
    finalConfrontationRound:3,activeTab:'puzzle',quizStyle:'mixed',assisted:true,supportEnabled:true,
    hintsUsedInRound:3,totalHintsUsed:21,clueTokens:route.map(location=>location.id),score:600,
    history:route.map((location,index)=>({location:location.name,caseId:saved.caseVariantIds[index],success:true,attempts:1,points:150}))};
  assert.equal(core.validateSave(finaleSave,pack),true,'final support and exact episode answer survive backup/resume');
  assert.equal(core.validateSave({...finaleSave,totalHintsUsed:22},pack),false);
  assert.equal(core.validateSave({...finaleSave,wrongOptions:[final[2].correctIndex]},pack),false);
  const historical = core.finalRounds(pack,route,saved.caseVariantIds,2);
  assert.equal(historical[0].title,'First-stop evidence review');
  assert.equal(historical[2].question,'Which token did you collect at the last stop of your selected route?');
  assert.equal(core.finalRounds(pack,route,saved.caseVariantIds,3)[2].title,'Last-stop evidence review');
});

test('commendations recognize accuracy equally on short and long completed routes', () => {
  const history = count => Array.from({length:count},()=>({success:true,attempts:1}));
  assert.equal(core.getCompletionRank({history:history(4),stopCount:4}), core.getCompletionRank({history:history(8),stopCount:8}));
  assert.match(core.getCompletionRank({history:history(4),stopCount:4}),/Chief Inspector/);
  assert.match(core.getCompletionRank({history:history(4),stopCount:4,assisted:true}),/Chief Inspector.*assistance/);
  assert.equal(core.getCompletionRank({history:history(3),stopCount:4}),'Case in progress');
});

test('reasoning selection is independent of assistance and preserves fallback content', () => {
  const pool = [{caseId:'basic',difficulty:'rookie'},{caseId:'medium',difficulty:'detective'},{caseId:'deep',difficulty:'inspector'}];
  assert.equal(generator.challengeCasePool(pool,'standard'),pool);
  assert.deepEqual(generator.challengeCasePool(pool,'advanced'),[pool[2]]);
  assert.deepEqual(generator.challengeCasePool(pool.slice(0,2),'advanced'),[pool[1]]);
  assert.deepEqual(generator.challengeCasePool(pool.slice(0,1),'advanced'),[pool[0]]);
  assert.deepEqual(generator.challengeCasePool([],'advanced'),[]);
});

test('records separate assisted, reasoning, episode, and redesigned Classic scores from legacy boards', () => {
  const backing = new Map();
  const context = vm.createContext({QUIZ_PACK:pack,state:{quizStyle:'classic',activityCatalogVersion:3,
    difficulty:'rookie',stopCount:4,routeStart:0,caseSeed:'standard',assisted:false,challenge:'standard',episodeId:null},
    storage:{getItem:key=>backing.get(key) ?? null,setItem:(key,value)=>backing.set(key,value)}});
  vm.runInContext(fs.readFileSync(path.join(__dirname,'../game-records.js'),'utf8'),context);
  assert.equal(vm.runInContext("saveHighScore(100,'Rank').previousBest",context),0);
  vm.runInContext("state.assisted=true;state.caseSeed='assisted'",context);
  assert.equal(vm.runInContext("saveHighScore(500,'Rank').previousBest",context),0);
  vm.runInContext("state.assisted=false;state.challenge='advanced';state.caseSeed='advanced'",context);
  assert.equal(vm.runInContext("saveHighScore(200,'Rank').previousBest",context),0);
  vm.runInContext("state.challenge='standard';state.episodeId='bentonville-paper-trail-v1';state.caseSeed='episode'",context);
  assert.equal(vm.runInContext("saveHighScore(300,'Rank').previousBest",context),0);
  vm.runInContext("state.episodeId=null;state.activityCatalogVersion=2;state.caseSeed='legacy'",context);
  assert.equal(vm.runInContext("saveHighScore(400,'Rank').previousBest",context),0);
  vm.runInContext("state.activityCatalogVersion=3;state.caseSeed='standard-again'",context);
  assert.equal(vm.runInContext("saveHighScore(150,'Rank').previousBest",context),100);
  assert.equal(vm.runInContext('readScoreRecords().length',context),6);
});
