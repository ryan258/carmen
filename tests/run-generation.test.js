const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const { arraysMatch, createRunCaseVariantIds } = require('../run-generator.js');

const root = path.resolve(__dirname, '..');
const questionBank = JSON.parse(fs.readFileSync(path.join(root, 'question-bank.json'), 'utf8'));

const locations = Object.keys(questionBank).map((id) => ({ id }));
const getCasePool = (location) => questionBank[location.id];

test('seeded case generation is deterministic', () => {
  const first = createRunCaseVariantIds(locations, getCasePool, 'acme-test-seed');
  const second = createRunCaseVariantIds(locations, getCasePool, 'acme-test-seed');
  assert.deepEqual(first, second);
});

test('different seeds can produce different case routes', () => {
  const first = createRunCaseVariantIds(locations, getCasePool, 'acme-test-seed-a');
  const second = createRunCaseVariantIds(locations, getCasePool, 'acme-test-seed-b');
  assert.equal(first.length, locations.length);
  assert.equal(second.length, locations.length);
  assert.equal(arraysMatch(first, second), false);
});

test('generated case ids always exist in their location pool', () => {
  const route = createRunCaseVariantIds(locations, getCasePool, 'acme-route-validity');
  route.forEach((caseId, index) => {
    const poolIds = questionBank[locations[index].id].map((caseData) => caseData.caseId);
    assert.ok(poolIds.includes(caseId), `${caseId} must exist in ${locations[index].id}`);
  });
});
