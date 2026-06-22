const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'data/quiz-packs.json'), 'utf8'));
const quizPacks = manifest.packs.map((entry) => ({
  manifestEntry: entry,
  pack: JSON.parse(fs.readFileSync(path.join(root, entry.path.replace(/^\.\//, '')), 'utf8'))
}));

const requiredMetadataFields = [
  'learningObjective',
  'sources',
  'difficulty',
  'mechanic',
  'regionTags',
  'visualType',
  'accessibilityDescription'
];

function validatePackMetadata(quizPack) {
  assert.equal(quizPack.schemaVersion, 1);
  ['id', 'title', 'subtitle', 'heroLocation', 'intro', 'evidenceLabel', 'successMessage'].forEach((field) => {
    assert.equal(typeof quizPack[field], 'string', `${field} must be a string`);
    assert.ok(quizPack[field].length > 0, `${field} cannot be empty`);
  });

  assert.ok(quizPack.map && typeof quizPack.map === 'object', 'map block is required');
  assert.equal(typeof quizPack.map.center?.lat, 'number', 'map center latitude');
  assert.equal(typeof quizPack.map.center?.lng, 'number', 'map center longitude');
  ['zoom', 'minZoom', 'maxZoom'].forEach((field) => {
    assert.equal(typeof quizPack.map[field], 'number', `map ${field}`);
  });
  assert.ok(quizPack.map.minZoom <= quizPack.map.zoom, 'minZoom cannot exceed zoom');
  assert.ok(quizPack.map.zoom <= quizPack.map.maxZoom, 'zoom cannot exceed maxZoom');
}

function validateFinalConfrontation(quizPack) {
  const rounds = quizPack.finalConfrontation?.rounds;
  assert.equal(typeof quizPack.finalConfrontation?.title, 'string', 'final confrontation title');
  assert.ok(Array.isArray(rounds), 'final confrontation rounds must be an array');
  assert.ok(rounds.length > 0, 'final confrontation needs at least one round');
  rounds.forEach((round, index) => {
    assert.equal(typeof round.description, 'string', `final round ${index + 1} description`);
    assert.equal(typeof round.question, 'string', `final round ${index + 1} question`);
    assert.ok(Array.isArray(round.options), `final round ${index + 1} options`);
    assert.equal(round.options.length, 4, `final round ${index + 1} needs 4 options`);
    assert.ok(Number.isInteger(round.correctIndex), `final round ${index + 1} correctIndex`);
    assert.ok(round.correctIndex >= 0 && round.correctIndex < 4, `final round ${index + 1} correctIndex in range`);
  });
}

test('quiz pack manifest lists Bentonville and Argentina packs', () => {
  assert.equal(manifest.schemaVersion, 1);
  assert.equal(typeof manifest.defaultPackId, 'string');
  assert.ok(Array.isArray(manifest.packs), 'manifest packs must be an array');
  assert.ok(manifest.packs.length >= 2, 'manifest must list multiple quiz packs');

  const ids = manifest.packs.map((entry) => entry.id);
  assert.ok(ids.includes('bentonville-carmen'), 'Bentonville pack remains available');
  assert.ok(ids.includes('argentina-carmen'), 'Argentina pack remains available');
  assert.ok(ids.includes(manifest.defaultPackId), 'defaultPackId must match a listed pack');

  manifest.packs.forEach((entry) => {
    ['id', 'title', 'description', 'path'].forEach((field) => {
      assert.equal(typeof entry[field], 'string', `${entry.id} ${field}`);
      assert.ok(entry[field].length > 0, `${entry.id} ${field} cannot be empty`);
    });
    assert.match(entry.path, /^\.\/data\/packs\/.+\.json$/, `${entry.id} path should point at a pack file`);
    assert.ok(fs.existsSync(path.join(root, entry.path.replace(/^\.\//, ''))), `${entry.id} pack file exists`);
  });
});

test('manifest entries match their quiz pack metadata', () => {
  quizPacks.forEach(({ manifestEntry, pack }) => {
    assert.equal(pack.id, manifestEntry.id, `${manifestEntry.id} pack id`);
    assert.equal(pack.title, manifestEntry.title, `${manifestEntry.id} pack title`);
  });
});

test('every quiz pack exposes reusable metadata and map defaults', () => {
  quizPacks.forEach(({ pack }) => validatePackMetadata(pack));
});

test('every quiz pack owns final confrontation rounds', () => {
  quizPacks.forEach(({ pack }) => validateFinalConfrontation(pack));
});

function validateQuestionPools(quizPack) {
  const questionBank = quizPack.questions;
  const locationIds = quizPack.locations.map((location) => location.id);
  assert.ok(Array.isArray(quizPack.locations), 'locations must be an array');
  assert.ok(quizPack.locations.length >= 2, 'a quiz pack needs at least two map stops');
  assert.deepEqual(Object.keys(questionBank).sort(), locationIds.toSorted());
  locationIds.forEach((locationId) => {
    assert.ok(Array.isArray(questionBank[locationId]), `${locationId} must be an array`);
    assert.ok(questionBank[locationId].length >= 5, `${locationId} needs at least 5 cases for beta breadth`);
    assert.equal(questionBank[locationId][0].caseId, `classic-${locationId}`);
  });
}

test('every quiz pack has one randomized pool per packed location', () => {
  quizPacks.forEach(({ pack }) => validateQuestionPools(pack));
});

function validateLocations(quizPack) {
  const questionBank = quizPack.questions;
  const regionIds = quizPack.locations.map((location) => location.id).sort();
  assert.deepEqual(regionIds, Object.keys(questionBank).sort());
  quizPack.locations.forEach((location) => {
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
}

test('location metadata covers every active case pool in every pack', () => {
  quizPacks.forEach(({ pack }) => validateLocations(pack));
});

test('case ids are unique across each full bank', () => {
  quizPacks.forEach(({ pack }) => {
    const allIds = Object.values(pack.questions).flat().map((caseData) => caseData.caseId);
    assert.equal(new Set(allIds).size, allIds.length, `${pack.id} case ids must be unique`);
  });
});

function validateCases(quizPack) {
  const questionBank = quizPack.questions;
  const sourceRegistry = quizPack.sources;
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
}

test('every case in every pack satisfies the content schema contract', () => {
  quizPacks.forEach(({ pack }) => validateCases(pack));
});

test('runtime does not require code changes for new location token symbols', () => {
  const gameSource = fs.readFileSync(path.join(root, 'game.js'), 'utf8');
  assert.match(gameSource, /LOCATION_SYMBOLS\[loc\.id\]\s*\|\|/, 'token rendering needs a generic symbol fallback');
});

test('source registry entries are usable in every pack', () => {
  quizPacks.forEach(({ pack }) => {
    Object.entries(pack.sources).forEach(([sourceId, source]) => {
      assert.equal(typeof source.title, 'string', `${pack.id} ${sourceId} title`);
      assert.equal(typeof source.publisher, 'string', `${pack.id} ${sourceId} publisher`);
      assert.match(source.url, /^https:\/\//, `${pack.id} ${sourceId} URL`);
      assert.equal(typeof source.reviewed, 'boolean', `${pack.id} ${sourceId} reviewed`);
    });
  });
});
