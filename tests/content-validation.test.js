const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const questionBank = JSON.parse(fs.readFileSync(path.join(root, 'question-bank.json'), 'utf8'));
const sourceRegistry = JSON.parse(fs.readFileSync(path.join(root, 'data/sources.json'), 'utf8'));
const regionData = JSON.parse(fs.readFileSync(path.join(root, 'data/argentina-regions.json'), 'utf8'));

const expectedLocationIds = [
  'buenos-aires',
  'mendoza',
  'salta',
  'cordoba',
  'iguazu',
  'bariloche',
  'ushuaia',
  'el-calafate'
];

const requiredMetadataFields = [
  'learningObjective',
  'sources',
  'difficulty',
  'mechanic',
  'regionTags',
  'visualType',
  'accessibilityDescription'
];

test('question bank has the expected location pools', () => {
  assert.deepEqual(Object.keys(questionBank).sort(), expectedLocationIds.toSorted());
  expectedLocationIds.forEach((locationId) => {
    assert.ok(Array.isArray(questionBank[locationId]), `${locationId} must be an array`);
    assert.ok(questionBank[locationId].length >= 5, `${locationId} needs at least 5 cases for beta breadth`);
    assert.equal(questionBank[locationId][0].caseId, `classic-${locationId}`);
  });
});

test('region metadata covers every active case pool', () => {
  const regionIds = regionData.locations.map((location) => location.id).sort();
  assert.deepEqual(regionIds, expectedLocationIds.toSorted());
  regionData.locations.forEach((location) => {
    assert.equal(typeof location.name, 'string', `${location.id} name`);
    assert.equal(typeof location.province, 'string', `${location.id} province`);
    assert.equal(typeof location.lat, 'number', `${location.id} latitude`);
    assert.equal(typeof location.lng, 'number', `${location.id} longitude`);
    assert.ok(location.henchman && typeof location.henchman === 'object', `${location.id} canon henchman`);
    ['name', 'alias', 'emoji', 'role', 'dossierNote'].forEach((field) => {
      assert.ok(typeof location.henchman[field] === 'string' && location.henchman[field].length > 0,
        `${location.id} henchman ${field}`);
    });
  });
});

test('case ids are unique across the full bank', () => {
  const allIds = Object.values(questionBank).flat().map((caseData) => caseData.caseId);
  assert.equal(new Set(allIds).size, allIds.length);
});

test('every case satisfies the content schema contract', () => {
  Object.entries(questionBank).forEach(([locationId, cases]) => {
    cases.forEach((caseData) => {
      assert.equal(typeof caseData.caseId, 'string', `${locationId} caseId`);
      assert.ok(caseData.caseId.length > 0, `${locationId} caseId cannot be empty`);

      assert.equal(typeof caseData.briefing?.headline, 'string', `${caseData.caseId} briefing headline`);
      assert.equal(typeof caseData.briefing?.report, 'string', `${caseData.caseId} briefing report`);
      assert.equal(typeof caseData.briefing?.callingCard, 'string', `${caseData.caseId} calling card`);
      const suspect = caseData.briefing?.suspect;
      assert.ok(suspect && typeof suspect === 'object', `${caseData.caseId} suspect block`);
      ['name', 'alias', 'emoji', 'role', 'dossierNote'].forEach((field) => {
        assert.ok(typeof suspect[field] === 'string' && suspect[field].length > 0, `${caseData.caseId} suspect ${field}`);
      });
      if (caseData.briefing.nextLead !== undefined) {
        assert.equal(typeof caseData.briefing.nextLead, 'string', `${caseData.caseId} nextLead`);
        assert.ok(caseData.briefing.nextLead.length > 0, `${caseData.caseId} nextLead cannot be empty`);
      }

      assert.ok(Array.isArray(caseData.clues), `${caseData.caseId} clues must be an array`);
      assert.equal(caseData.clues.length, 3, `${caseData.caseId} must have exactly 3 clues`);
      caseData.clues.forEach((clue, index) => {
        assert.equal(typeof clue, 'string', `${caseData.caseId} clue ${index + 1}`);
        assert.ok(clue.length > 0, `${caseData.caseId} clue ${index + 1} cannot be empty`);
      });

      assert.equal(typeof caseData.puzzle?.title, 'string', `${caseData.caseId} puzzle title`);
      assert.equal(typeof caseData.puzzle?.description, 'string', `${caseData.caseId} puzzle description`);
      assert.equal(typeof caseData.puzzle?.question, 'string', `${caseData.caseId} puzzle question`);
      assert.ok(Array.isArray(caseData.puzzle?.options), `${caseData.caseId} puzzle options`);
      assert.equal(caseData.puzzle.options.length, 4, `${caseData.caseId} must have 4 options`);
      assert.ok(Number.isInteger(caseData.puzzle.correctIndex), `${caseData.caseId} correctIndex must be an integer`);
      assert.ok(caseData.puzzle.correctIndex >= 0 && caseData.puzzle.correctIndex < 4, `${caseData.caseId} correctIndex in range`);

      ['city', 'hideout', 'disguise'].forEach((field) => {
        assert.equal(typeof caseData.warrantAnswers?.[field], 'string', `${caseData.caseId} warrant ${field}`);
        assert.ok(caseData.warrantAnswers[field].length > 0, `${caseData.caseId} warrant ${field} cannot be empty`);
      });

      assert.equal(typeof caseData.funFact, 'string', `${caseData.caseId} fun fact`);
      assert.ok(caseData.funFact.length > 0, `${caseData.caseId} fun fact cannot be empty`);

      requiredMetadataFields.forEach((field) => {
        assert.ok(Object.hasOwn(caseData, field), `${caseData.caseId} missing ${field}`);
      });
      assert.ok(Array.isArray(caseData.sources), `${caseData.caseId} sources must be an array`);
      assert.ok(caseData.sources.length > 0, `${caseData.caseId} sources cannot be empty`);
      caseData.sources.forEach((sourceId) => {
        assert.ok(sourceRegistry[sourceId], `${caseData.caseId} references unknown source ${sourceId}`);
      });
      assert.ok(Array.isArray(caseData.regionTags), `${caseData.caseId} regionTags must be an array`);
      assert.ok(caseData.regionTags.length > 0, `${caseData.caseId} regionTags cannot be empty`);
    });
  });
});

test('every location has a final-puzzle token symbol', () => {
  // LOCATION_SYMBOLS is hard-coded in game.js; renderTokenGrid() crashes if a location id is missing.
  const gameSource = fs.readFileSync(path.join(root, 'game.js'), 'utf8');
  const block = gameSource.match(/const LOCATION_SYMBOLS\s*=\s*\{([\s\S]*?)\};/);
  assert.ok(block, 'LOCATION_SYMBOLS object not found in game.js');
  const symbolIds = [...block[1].matchAll(/'([^']+)'\s*:/g)].map((m) => m[1]);
  regionData.locations.forEach((loc) => {
    assert.ok(symbolIds.includes(loc.id), `LOCATION_SYMBOLS missing entry for location "${loc.id}"`);
  });
});

test('source registry entries are usable', () => {
  Object.entries(sourceRegistry).forEach(([sourceId, source]) => {
    assert.equal(typeof source.title, 'string', `${sourceId} title`);
    assert.equal(typeof source.publisher, 'string', `${sourceId} publisher`);
    assert.match(source.url, /^https:\/\//, `${sourceId} URL`);
    assert.equal(typeof source.reviewed, 'boolean', `${sourceId} reviewed`);
  });
});
