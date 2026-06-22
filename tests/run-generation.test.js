const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const { arraysMatch, createRunCaseVariantIds } = require('../run-generator.js');

const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'data/quiz-packs.json'), 'utf8'));
const quizPacks = manifest.packs.map((entry) => JSON.parse(fs.readFileSync(path.join(root, entry.path.replace(/^\.\//, '')), 'utf8')));

function createPackFixture(quizPack) {
  const questionBank = quizPack.questions;
  const locations = quizPack.locations.map((location) => ({ id: location.id }));
  const getCasePool = (location) => questionBank[location.id];
  return { questionBank, locations, getCasePool };
}

test('seeded case generation is deterministic', () => {
  quizPacks.forEach((quizPack) => {
    const { locations, getCasePool } = createPackFixture(quizPack);
    const first = createRunCaseVariantIds(locations, getCasePool, 'acme-test-seed');
    const second = createRunCaseVariantIds(locations, getCasePool, 'acme-test-seed');
    assert.deepEqual(first, second, `${quizPack.id} seeded route`);
  });
});

test('different seeds can produce different case routes', () => {
  quizPacks.forEach((quizPack) => {
    const { locations, getCasePool } = createPackFixture(quizPack);
    const first = createRunCaseVariantIds(locations, getCasePool, 'acme-test-seed-a');
    const second = createRunCaseVariantIds(locations, getCasePool, 'acme-test-seed-b');
    assert.equal(first.length, locations.length, `${quizPack.id} first route length`);
    assert.equal(second.length, locations.length, `${quizPack.id} second route length`);
    assert.equal(arraysMatch(first, second), false, `${quizPack.id} seed variation`);
  });
});

test('generated case ids always exist in their location pool', () => {
  quizPacks.forEach((quizPack) => {
    const { questionBank, locations, getCasePool } = createPackFixture(quizPack);
    const route = createRunCaseVariantIds(locations, getCasePool, 'acme-route-validity');
    route.forEach((caseId, index) => {
      const poolIds = questionBank[locations[index].id].map((caseData) => caseData.caseId);
      assert.ok(poolIds.includes(caseId), `${quizPack.id} ${caseId} must exist in ${locations[index].id}`);
    });
  });
});
