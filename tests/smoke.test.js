const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');

test('html references the split production assets in dependency order', () => {
  const html = fs.readFileSync(path.join(root, 'carmen-sandiego-argentina.html'), 'utf8');
  const stylesIndex = html.indexOf('href="./styles.css"');
  const generatorIndex = html.indexOf('src="./run-generator.js"');
  const gameIndex = html.indexOf('src="./game.js"');

  assert.ok(stylesIndex > -1, 'styles.css is linked');
  assert.ok(generatorIndex > -1, 'run-generator.js is loaded');
  assert.ok(gameIndex > -1, 'game.js is loaded');
  assert.ok(generatorIndex < gameIndex, 'run-generator.js must load before game.js');
});

test('referenced local assets exist', () => {
  ['styles.css', 'run-generator.js', 'game.js', 'question-bank.json', 'data/argentina-regions.json', 'data/sources.json'].forEach((fileName) => {
    assert.ok(fs.existsSync(path.join(root, fileName)), `${fileName} exists`);
  });
});
