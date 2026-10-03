const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');

test('html references the split production assets in dependency order', () => {
  const html = fs.readFileSync(path.join(root, 'carmen-sandiego-bentonville.html'), 'utf8');
  const stylesIndex = html.indexOf('href="./styles.css"');
  const generatorIndex = html.indexOf('src="./run-generator.js"');
  const gameIndex = html.indexOf('src="./game.js"');

  assert.ok(stylesIndex > -1, 'styles.css is linked');
  assert.ok(generatorIndex > -1, 'run-generator.js is loaded');
  assert.ok(gameIndex > -1, 'game.js is loaded');
  for (const asset of ['game-core.js','builtin-pack.js','map-config.js','game-map.js','game-records.js']) {
    const index = html.indexOf(`src="./${asset}"`);
    assert.ok(index >= 0 && index < gameIndex, `${asset} exists and loads before game`);
  }
  assert.ok(generatorIndex < gameIndex, 'run-generator.js must load before game.js');
});

test('referenced local assets exist', () => {
  ['styles.css', 'tailwind.build.css', 'game-core.js', 'builtin-pack.js', 'map-config.js', 'game-map.js', 'game-records.js', 'run-generator.js', 'game.js', 'data/quiz-packs.json'].forEach((fileName) => {
    assert.ok(fs.existsSync(path.join(root, fileName)), `${fileName} exists`);
  });
});

test('runtime loads the quiz pack manifest instead of a single active pack', () => {
  const gameSource = fs.readFileSync(path.join(root, 'game.js'), 'utf8');

  assert.ok(gameSource.includes('./data/quiz-packs.json'), 'game.js loads data/quiz-packs.json');
  assert.ok(!gameSource.includes('./question-bank.json'), 'game.js should not fetch the legacy question bank directly');
  assert.ok(!gameSource.includes('./data/bentonville-regions.json'), 'game.js should not fetch Bentonville-only region data directly');
});

test('built-in fallback pack id remains selectable from the manifest', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'data/quiz-packs.json'), 'utf8'));
  const fallbackId = JSON.parse(fs.readFileSync(path.join(root, 'data/packs/bentonville.json'), 'utf8')).id;

  assert.ok(fallbackId, 'DEFAULT_QUIZ_PACK id found');
  assert.ok(manifest.packs.some((entry) => entry.id === fallbackId), `${fallbackId} is listed in the manifest`);
});

test('puzzle answers are shuffled so the correct option is not always first', () => {
  // Authored packs list the answer at correctIndex (usually 0); the runtime must
  // randomize display order so the game is not beatable by always pressing A.
  const gameSource = fs.readFileSync(path.join(root, 'game.js'), 'utf8');
  assert.ok(/function shuffleOptions\(/.test(gameSource), 'game.js defines shuffleOptions');
  assert.ok(/buildPuzzleOptions[\s\S]*?shuffleOptions/.test(gameSource), 'buildPuzzleOptions shuffles');
  assert.ok(/buildCustomOptions[\s\S]*?shuffleOptions/.test(gameSource), 'buildCustomOptions shuffles');
});

test('html exposes a quiz pack selector before starting a new investigation', () => {
  const html = fs.readFileSync(path.join(root, 'carmen-sandiego-bentonville.html'), 'utf8');

  assert.ok(html.includes('id="packSelector"'), 'pack selector exists');
  assert.ok(html.includes('id="packSelectorStatus"'), 'pack selector status exists');
});

test('production html does not depend on the Tailwind CDN', () => {
  const html = fs.readFileSync(path.join(root, 'carmen-sandiego-bentonville.html'), 'utf8');
  assert.ok(!html.includes('cdn.tailwindcss.com'), 'Tailwind CDN must not be referenced; use tailwind.build.css');
  assert.ok(html.includes('tailwind.build.css'), 'local Tailwind build is linked');
});


test('optional Leaflet cannot block DOM-ready game startup', () => {
  const html=fs.readFileSync(path.join(root,'carmen-sandiego-bentonville.html'),'utf8');
  const game=fs.readFileSync(path.join(root,'game.js'),'utf8');
  assert.match(html, /<script async src="https:\/\/unpkg.com\/leaflet/);
  assert.match(game, /document.addEventListener\('DOMContentLoaded'/);
  assert.ok(!game.includes('window.onload ='));
  assert.match(html, /leaflet\.css" media="print" onload=/);
});
