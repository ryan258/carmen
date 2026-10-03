// Personal preview checks are structural. --release is optional editorial sign-off
// for sharing; it never equates source links with verified factual accuracy.
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const {validateManifest,validatePack,hasReviewEvidence}=require('../game-core.js');
function inspectContent(root) {
  const manifest=validateManifest(JSON.parse(fs.readFileSync(path.join(root,'data/quiz-packs.json'),'utf8')));
  let cases=0, pending=0;
  const packs=manifest.packs.map(entry=>{
    const pack=validatePack(JSON.parse(fs.readFileSync(path.join(root,entry.path),'utf8')));
    if(pack.id!==entry.id || pack.title!==entry.title) throw new Error(`${entry.id}: manifest identity mismatch`);
    for(const item of Object.values(pack.questions).flat()) {
      cases++;
      if(!hasReviewEvidence(item,pack.sources)) pending++;
    }
    return pack;
  });
  const fallback=packs.find(pack=>pack.id==='bentonville-carmen');
  if(!fallback) throw new Error('Built-in Bentonville pack is missing from the manifest.');
  const context=vm.createContext({});
  vm.runInContext(fs.readFileSync(path.join(root,'builtin-pack.js'),'utf8'),context,{timeout:1000});
  if(vm.runInContext('JSON.stringify(CarmenBuiltinPack)',context)!==JSON.stringify(fallback)) throw new Error('Built-in fallback differs from the canonical pack. Run npm run build:content.');
  return {packs:packs.map(pack=>pack.id),cases,pending};
}
if(require.main===module) {
  try {
    const result=inspectContent(path.join(__dirname,'..'));
    console.log(`${result.packs.join(', ')}: structural contracts and fallback accepted.`);
    console.log(`${result.cases} cases; ${result.pending} still need factual/editorial sign-off. The route-based finale inherits those case reviews; its token question uses only the collected inventory.`);
    if(process.argv.includes('--release') && result.pending) throw new Error('Optional sharing gate not met: claim-level editorial evidence is still pending. Personal preview use does not require this sign-off.');
  } catch(error) { console.error(error.message); process.exitCode=1; }
}
module.exports={inspectContent};
