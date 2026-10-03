const test=require('node:test'), assert=require('node:assert/strict');
const core=require('../game-core.js');
const pack=require('../data/packs/bentonville.json');

test('runtime pack validator rejects malformed options, sources, identities, coordinates and markup',()=>{
  assert.equal(core.validatePack(pack),pack);
  for(const change of [p=>p.contentVersion=0,p=>p.locations[0].lat=91,p=>p.questions[p.locations[0].id][0].puzzle.correctIndex=4,p=>p.questions[p.locations[0].id][0].sources=['missing'],p=>p.locations[1].id=p.locations[0].id,p=>p.questions[p.locations[0].id][0].puzzle.visualHtml='<img src=x onerror="alert(1)">']){
    const p=structuredClone(pack);change(p);assert.throws(()=>core.validatePack(p));
  }
});
test('storage denial preserves the current session without crashing',()=>{
  let notices=0;const storage=core.createStorage(()=>{throw new Error('Denied');},()=>notices++);
  assert.equal(storage.getItem('save'),null);storage.setItem('save','value');assert.equal(storage.getItem('save'),'value');storage.removeItem('save');assert.equal(storage.getItem('save'),null);assert.equal(notices,1);
});
test('storage observes external changes instead of caching stale saves',()=>{
  let value='first';const storage=core.createStorage(()=>({getItem:()=>value,setItem:(k,v)=>{value=v;}}));
  assert.equal(storage.getItem('save'),'first');value='other tab';assert.equal(storage.getItem('save'),'other tab');
});
test('cancelled callbacks cannot revive an old session even if the platform delivers them',()=>{
  let fn;const scheduler=core.createScheduler(callback=>{fn=callback;return 1;},()=>{});let called=0;scheduler.schedule(()=>called++,100);scheduler.cancel();fn();assert.equal(called,0);
});
test('generated fallback exactly matches the canonical Bentonville pack',()=>{
  const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
  const context=vm.createContext({});vm.runInContext(fs.readFileSync(path.join(__dirname,'../builtin-pack.js'),'utf8'),context);
  assert.deepEqual(JSON.parse(vm.runInContext('JSON.stringify(CarmenBuiltinPack)',context)),pack);
});
test('Bentonville visuals and calling cards do not print the puzzle answer',()=>{
  for(const c of Object.values(pack.questions).flat()) {
    const answer=c.warrantAnswers.hideout.toLowerCase();
    assert.ok(!c.briefing.callingCard.toLowerCase().includes(answer),c.caseId);
    // Location headings may name the stop; visual detail must not reveal its hideout.
    assert.ok(!c.puzzle.visualHtml.includes(`<p class="mt-2 text-[10px] font-bold uppercase tracking-wider text-red-800">${c.warrantAnswers.hideout}</p>`),c.caseId);
  }
});
