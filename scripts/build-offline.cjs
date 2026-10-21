// Build a portable local edition from the checked-in assets. No downloads,
// service worker, map tiles, or remote executable resources are included.
const fs = require('node:fs');
const path = require('node:path');
const {writeAtomic} = require('./content-io.cjs');
const {validateManifest, validatePack} = require('../game-core.js');

function buildOffline(root = path.resolve(__dirname, '..')) {
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'data/quiz-packs.json'), 'utf8'));
  validateManifest(manifest);
  const resources = {'data/quiz-packs.json': manifest};
  for (const entry of manifest.packs) {
    const resource = entry.path.replace(/^\.\//, '');
    const pack = JSON.parse(fs.readFileSync(path.join(root, resource), 'utf8'));
    validatePack(pack);
    if (pack.id !== entry.id) throw new Error(`Pack identity mismatch: ${entry.id}`);
    resources[resource] = pack;
  }
  let html = fs.readFileSync(path.join(root, 'carmen-sandiego-bentonville.html'), 'utf8');
  html = html.replace(/<link\b[^>]*href="https?:[^>]*>/gi, '');
  html = html.replace(/<script\b[^>]*src="https?:[^>]*>[\s\S]*?<\/script>/gi, '');
  html = html.replace(/<link\b[^>]*href="\.\/([^"?]+\.css)"[^>]*>/gi, (_, file) => {
    const css = fs.readFileSync(path.join(root, file), 'utf8').replace(/<\/style/gi, '<\\/style');
    if (/@import\b|url\(\s*['"]?https?:/i.test(css)) throw new Error(`External CSS resource in ${file}`);
    return `<style data-source="${file}">${css}</style>`;
  });
  html = html.replace(/<script\b[^>]*src="\.\/([^"?]+\.js)"[^>]*><\/script>/gi, (_, file) => {
    const js = fs.readFileSync(path.join(root, file), 'utf8').replace(/<\/script/gi, '<\\/script');
    return `<script data-source="${file}">${js}</script>`;
  });
  const payload = JSON.stringify(resources).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
  html = html.replace('</head>', () => `<script>window.CarmenOfflinePacks=${payload};</script>\n</head>`);
  html = html.replace(/<body\b[^>]*>/i, tag => `${tag}<p class="offline-notice">Offline edition. All packs are included; maps use the text route. Source links open only when you choose them. Use Study / Notebook to back up your work.</p>`);
  if (/<(?:script|link)\b[^>]*(?:src|href)="(?:\.\/|https?:)/i.test(html)) throw new Error('Unbundled runtime resource remains.');
  return html;
}

if (require.main === module) {
  const root = path.resolve(__dirname, '..');
  const destination = path.join(root, 'dist/carmen-offline.html');
  writeAtomic(destination, buildOffline(root));
  console.log(`Offline edition: ${destination}`);
}
module.exports = {buildOffline};
