const test=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),os=require('node:os');
const core=require('../game-core.js');
const {createCase,quizPack,locations,casesByLocation}=require('../scripts/generate-bentonville-content.js');
const {inspectContent}=require('../scripts/check-content.cjs');

test('generator preserves authored reasoning and review metadata',()=>{
  const location=locations[0],variant=structuredClone(casesByLocation[location.id][0]);
  variant.puzzle.hints=['First reasoning step','Second reasoning step','Worked answer'];
  variant.puzzle.explanation='A custom worked explanation.';
  variant.puzzle.description='Custom instructions.';
  variant.reviewStatus='reviewed';variant.reviewEvidence={reviewer:'Example reviewer',date:'2026-10-03',notes:'Example claim-by-claim notes.'};
  const generated=createCase(location,variant,0);
  assert.deepEqual(generated.puzzle.hints,variant.puzzle.hints);
  assert.equal(generated.puzzle.explanation,variant.puzzle.explanation);
  assert.equal(generated.puzzle.description,variant.puzzle.description);
  assert.deepEqual(generated.reviewEvidence,variant.reviewEvidence);assert.equal(generated.reviewStatus,'reviewed');
});

test('tokens belong to location records, so extending the list cannot exhaust an eight-item array',()=>{
  const extended={...locations[0],id:'ninth-stop',nextLead:'Return to headquarters.',token:{char:'🧩',name:'Puzzle'}};
  const item=createCase(extended,casesByLocation[locations[0].id][0],0);
  const expanded=structuredClone(quizPack);expanded.locations.push(extended);expanded.questions[extended.id]=[item];
  assert.equal(core.validatePack(expanded),expanded);assert.ok(item.caseId.endsWith('ninth-stop'));
  assert.deepEqual(quizPack.locations.map(l=>l.token),locations.map(l=>l.token));
});

test('manifest rejects an empty list, duplicate path and missing default',()=>{
  const valid={schemaVersion:1,defaultPackId:'one',packs:[{id:'one',title:'One',path:'./data/packs/one.json'}]};
  assert.equal(core.validateManifest(valid),valid);
  for(const change of [m=>m.packs=[],m=>m.defaultPackId='absent',m=>m.packs.push({...m.packs[0],id:'two'}),m=>m.packs[0].path='../external.json']) {
    const m=structuredClone(valid);change(m);assert.throws(()=>core.validateManifest(m));
  }
});

test('review claims need evidence, a real calendar date, and reviewed sources',()=>{
  const p=structuredClone(quizPack),item=p.questions[p.locations[0].id][0];item.reviewStatus='reviewed';
  assert.throws(()=>core.validatePack(p),/review evidence/);
  item.reviewEvidence={reviewer:'Example reviewer',date:'2026-02-30',notes:'Example notes'};
  item.sources.forEach(id=>p.sources[id].reviewed=true);
  assert.equal(core.hasReviewEvidence(item,p.sources),false);
  item.reviewEvidence.date='2026-10-03';assert.equal(core.hasReviewEvidence(item,p.sources),true);
  assert.equal(core.validatePack(p),p);
});

test('content checker detects manifest omissions and stale fallback content',()=>{
  const root=fs.mkdtempSync(path.join(os.tmpdir(),'carmen-content-'));
  try {
    fs.mkdirSync(path.join(root,'data/packs'),{recursive:true});
    const manifest={schemaVersion:1,defaultPackId:quizPack.id,packs:[{id:quizPack.id,title:quizPack.title,path:'./data/packs/bentonville.json'}]};
    fs.writeFileSync(path.join(root,'data/quiz-packs.json'),JSON.stringify(manifest));
    fs.writeFileSync(path.join(root,'data/packs/bentonville.json'),JSON.stringify(quizPack));
    fs.writeFileSync(path.join(root,'builtin-pack.js'),`const CarmenBuiltinPack=${JSON.stringify({...quizPack,contentVersion:999})};`);
    assert.throws(()=>inspectContent(root),/fallback differs/);
    fs.writeFileSync(path.join(root,'data/quiz-packs.json'),JSON.stringify({...manifest,packs:[]}));
    assert.throws(()=>inspectContent(root),/manifest/);
  } finally {fs.rmSync(root,{recursive:true,force:true});}
});

test('finale and save validation use the selected case answer, including nonzero correct indexes',()=>{
  const {createGame}=require('./helpers/game-harness.cjs');const g=createGame();g.start();
  for(let i=0;i<4;i++){g.solve();g.warrant();g.flush();g.run(i===3?'triggerFinalConfrontationFlow()':'nextRound()');}
  // Keep every choice distinct but move the correct answer away from authored slot zero.
  g.run('const chosen=QUESTION_BANK[LOCATIONS[0].id].find(c=>c.caseId===state.caseVariantIds[0]); [chosen.puzzle.options[0],chosen.puzzle.options[2]]=[chosen.puzzle.options[2],chosen.puzzle.options[0]]; chosen.puzzle.correctIndex=2; startFinalConfrontationRound();');
  assert.equal(g.run('getFinalConfrontationRounds()[0].correctIndex'),2);
  g.run('selectFinalChoice((state.activeFinalCorrectIndex+1)%4)');g.flush();
  assert.equal(g.run('Boolean(getValidSave())'),true);
  g.run('goToTitle();resumeGame()');assert.equal(g.state().wrongOptions.length,1);
});
