const fs = require('node:fs');
const path = require('node:path');
const {randomUUID} = require('node:crypto');

// A failed write cannot leave a half-written pack in place.
function writeAtomic(destination, content) {
  fs.mkdirSync(path.dirname(destination), {recursive:true});
  const temporary = `${destination}.${randomUUID()}.tmp`;
  try {
    fs.writeFileSync(temporary, content, {flag:'wx'});
    fs.renameSync(temporary, destination);
  } finally {
    fs.rmSync(temporary, {force:true});
  }
}
module.exports = {writeAtomic};
