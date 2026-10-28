const test = require('node:test');
const assert = require('node:assert/strict');
const bank = require('../trivia-bank.js');
const t = require('../trivia.js');

const TODAY = '2026-10-28';
const pack = bank.packs[0];
const clone = value => JSON.parse(JSON.stringify(value));

test('every clue is a sourced fact that does not name its own place', () => {
  const placeIds = new Set(), factIds = new Set();
  for (const p of bank.packs) {
    assert.ok(p.places.length >= 4, `${p.id} needs four places for four choices`);
    for (const place of p.places) {
      assert.ok(!placeIds.has(place.id), `duplicate place ${place.id}`); placeIds.add(place.id);
      assert.ok(place.name && place.region && place.suspect?.alias && place.facts.length, place.id);
      for (const fact of place.facts) {
        assert.ok(!factIds.has(fact.id), `duplicate fact ${fact.id}`); factIds.add(fact.id);
        assert.ok(fact.clue && fact.fact && fact.sources.length, fact.id);
        assert.ok(fact.sources.every(s => /^https:\/\//.test(s.url) && s.title), fact.id);
        assert.ok(!fact.clue.toLowerCase().includes(place.name.toLowerCase()), `${fact.id} names its answer`);
      }
    }
  }
});

test('right answers space reviews out; a miss comes back today', () => {
  const progress = t.emptyProgress();
  t.grade(progress, 'f', true, TODAY);
  assert.deepEqual(progress.cards.f, {box: 1, due: '2026-10-29', seen: 1, right: 1});
  t.grade(progress, 'f', true, '2026-10-29');
  assert.deepEqual(progress.cards.f, {box: 2, due: '2026-11-01', seen: 2, right: 2});
  t.grade(progress, 'f', false, '2026-11-01');
  assert.deepEqual(progress.cards.f, {box: 0, due: '2026-11-01', seen: 3, right: 2});
  for (let i = 0; i < 9; i++) t.grade(progress, 'f', true, TODAY);
  assert.equal(progress.cards.f.box, t.BOX_DAYS.length - 1);
});

test('a chase is seeded, visits distinct places, and offers four choices including the answer', () => {
  const progress = t.emptyProgress();
  const run = t.createChase(bank, pack.id, 6, 'seed', progress, TODAY);
  assert.deepEqual(run, t.createChase(bank, pack.id, 6, 'seed', progress, TODAY));
  assert.equal(new Set(run.legs.map(leg => leg.place)).size, 6);
  for (const leg of run.legs) {
    assert.equal(new Set(leg.options).size, 4);
    assert.ok(leg.options.includes(leg.place));
    assert.ok(pack.places.find(place => place.id === leg.place).facts.some(fact => fact.id === leg.fact));
  }
  assert.ok(t.validRun(run, bank));
});

test('due facts are asked before new ones', () => {
  const place = pack.places.find(item => item.facts.length > 1);
  const progress = t.emptyProgress();
  const target = place.facts[place.facts.length - 1].id;
  progress.cards[target] = {box: 2, due: '2026-10-01', seen: 2, right: 2};
  for (let i = 0; i < 10; i++) assert.equal(t.pickFact(place, progress, TODAY, t.seeded(String(i))).id, target);
});

test('each clue is graded once, and the last answer closes the case with an outcome', () => {
  const progress = t.emptyProgress();
  progress.run = t.createChase(bank, pack.id, 4, 'daily', progress, TODAY, 'daily');
  const legs = progress.run.legs;
  assert.equal(t.advance(progress, TODAY), null, 'cannot skip an unanswered clue');
  const wrong = legs[0].options.find(id => id !== legs[0].place);
  assert.equal(t.answer(progress, wrong, TODAY), false);
  assert.equal(t.answer(progress, legs[0].place, TODAY), null, 'no second try on the same clue');
  assert.equal(progress.cards[legs[0].fact].box, 0);
  let result = t.advance(progress, TODAY);
  for (const leg of legs.slice(1)) { t.answer(progress, leg.place, TODAY); result = t.advance(progress, TODAY); }
  assert.equal(result.misses, 1);
  assert.equal(result.caught, true, 'one miss is allowed on four stops');
  assert.equal(progress.run, null);
  assert.deepEqual(progress.dailies[TODAY], {packId: pack.id, caught: true});
  assert.equal(t.streak(progress, TODAY), 1);
  progress.dailies['2026-10-27'] = {packId: pack.id, caught: false};
  assert.equal(t.streak(progress, TODAY), 2);
  assert.equal(t.streak(progress, '2026-10-29'), 2, 'a streak survives until the next day ends');
});

test('review asks only facts that are due', () => {
  const progress = t.emptyProgress();
  assert.equal(t.createReview(bank, pack.id, 's', progress, TODAY), null);
  const [due, later] = pack.places[0].facts;
  progress.cards[due.id] = {box: 0, due: TODAY, seen: 1, right: 0};
  progress.cards[later.id] = {box: 3, due: '2026-11-05', seen: 3, right: 3};
  const review = t.createReview(bank, pack.id, 's', progress, TODAY);
  assert.deepEqual(review.legs.map(leg => leg.fact), [due.id]);
  assert.deepEqual(t.mastery(pack, progress, TODAY).due, 1);
});

test('saved progress survives a round trip, drops retired facts, and rejects damaged backups', () => {
  const progress = t.emptyProgress();
  progress.run = t.createChase(bank, pack.id, 4, 'x', progress, TODAY);
  t.answer(progress, progress.run.legs[0].place, TODAY);
  progress.lastPack = pack.id;
  const saved = clone(progress);
  assert.deepEqual(t.normalizeProgress(saved, bank), progress);
  assert.deepEqual(t.normalizeProgress({...saved, cards: {...saved.cards, 'retired-fact': {box: 1, due: TODAY, seen: 1, right: 1}}}, bank), progress);
  assert.equal(t.normalizeProgress({...saved, version: 2}, bank), null);
  assert.equal(t.normalizeProgress({...saved, cards: {x: {box: 9, due: TODAY, seen: 1, right: 1}}}, bank), null);
  assert.equal(t.normalizeProgress(null, bank), null);
  const skipped = clone(saved); skipped.run.index = 2;
  assert.equal(t.normalizeProgress(skipped, bank).run, null, 'a case with an unanswered earlier clue is dropped, history kept');
});
