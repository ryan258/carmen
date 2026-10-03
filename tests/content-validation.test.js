const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const test=require('node:test');
const core=require('../game-core.js');
const root=path.join(__dirname,'..');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'data/quiz-packs.json'),'utf8'));

test('manifest and all authored packs satisfy the production loader contract',()=>{
  core.validateManifest(manifest);
  for(const entry of manifest.packs){
    const pack=JSON.parse(fs.readFileSync(path.join(root,entry.path),'utf8'));
    core.validatePack(pack);assert.equal(pack.id,entry.id);assert.equal(pack.title,entry.title);
  }
});
test('a new location needs a nonempty pool, not a classic-named case or five variants',()=>{
  const pack=structuredClone(require('../data/packs/bentonville.json'));
  pack.questions[pack.locations[0].id]=[pack.questions[pack.locations[0].id][1]];
  assert.equal(core.validatePack(pack),pack);
  pack.questions[pack.locations[0].id]=[];assert.throws(()=>core.validatePack(pack));
});
test('every current case has progressive hints and the authored packs remain available',()=>{
  assert.deepEqual(manifest.packs.map(p=>p.id).sort(),['argentina-carmen','bentonville-carmen']);
  for(const entry of manifest.packs){
    const pack=JSON.parse(fs.readFileSync(path.join(root,entry.path),'utf8'));
    for(const item of Object.values(pack.questions).flat())assert.equal(item.puzzle.hints.length,3,item.caseId);
  }
});
test('equivalent Argentina sites share a canonical warrant label',()=>{
  const pool=require('../data/packs/argentina.json').questions['el-calafate'];
  const find=id=>pool.find(c=>c.caseId===id).warrantAnswers.hideout;
  assert.equal(find('glaciarium'),find('glaciarium-lab'));
  assert.equal(find('lago-argentino'),find('lago-argentino-ferry'));
});
