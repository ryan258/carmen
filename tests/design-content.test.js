const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const design = require('../case-design.js');
const activities = require('../quiz-activities.js');
const practice = require('../quiz-practice.js');

const pack = name => JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'packs', `${name}.json`), 'utf8'));
const findCase = (value, id) => Object.values(value.questions).flat().find(item => item.caseId === id);
const copy = value => JSON.parse(JSON.stringify(value));
const episodeId = 'bentonville-paper-trail-v1';

test('reasoning overlays preserve catalog-1/2 saves and the original source-review record', () => {
  for (const [name, id] of [
    ['ozark-waterways', 'ozark-waterways-buffalo-classification'],
    ['museums-missing-labels', 'museums-missing-labels-henry-ford-provenance']
  ]) {
    const originalPack = pack(name), snapshot = copy(originalPack), item = findCase(originalPack, id);
    for (const version of [1, 2, 99]) assert.strictEqual(design.resolveCase(originalPack, item, version), item);
    const revised = design.resolveCase(originalPack, item, 3);
    assert.notDeepEqual(revised.puzzle.options, item.puzzle.options);
    assert.equal(revised.clues[0], item.clues[0], 'historical source note is unchanged');
    assert.deepEqual(revised.reviewEvidence, item.reviewEvidence);
    assert.deepEqual(revised.sources, item.sources);
    assert.deepEqual(revised.warrantAnswers, item.warrantAnswers);
    assert.match(revised.designRevision.note, /not received human acceptance/);
    assert.deepEqual(originalPack, snapshot, 'resolving presentation must not mutate the source pack');
    const forged = {...item, clues: ['untrusted replacement'], puzzle: {...item.puzzle, correctIndex: 3}};
    assert.deepEqual(design.resolveCase(originalPack, forged, 3), revised, 'known IDs resolve owned evidence');
    revised.puzzle.options[0] = 'caller edit';
    assert.notEqual(design.resolveCase(originalPack, item, 3).puzzle.options[0], 'caller edit');
    assert.strictEqual(design.resolveCase({...originalPack, contentVersion: originalPack.contentVersion + 1}, item, 3), item);
  }
});

test('Buffalo requires the two supported fields and diagnoses which field was changed', () => {
  const value = pack('ozark-waterways'), base = findCase(value, 'ozark-waterways-buffalo-classification');
  const item = design.resolveCase(value, base, 3);
  assert.match(item.clues[0], /free-flowing Buffalo River/);
  assert.match(item.clues[0], /Only part of its watershed is managed by the National Park Service/);
  assert.equal(item.puzzle.options[item.puzzle.correctIndex], 'Free-flowing river; only part of its watershed is managed by the National Park Service');
  assert.match(item.puzzle.optionFeedback[0], /“entire”.*expands/);
  assert.match(item.puzzle.optionFeedback[2], /not a storage reservoir/);
  assert.match(item.puzzle.optionFeedback[3], /“none”.*contradicts/);
  assert.equal(activities.getCaseActivity(value, base, 3), null, 'a legacy activity must not replace the improved question');
  assert.equal(practice.getCasePractice(value, base, 2).description, `Case task: ${base.puzzle.question}`);
  assert.equal(practice.getCasePractice(value, base, 3).description, `Case task: ${item.puzzle.question}`);
  const presented = practice.presentCaseText(value, item, item.clues[1], 3);
  assert.match(presented, /ACME River Class Desk/);
  assert.equal(practice.warrantLabel(value, 'ozark-waterways-buffalo', 'hideout', base.warrantAnswers.hideout, 3), 'ACME River Class Desk');
});

test('corroboration requires independent and relevant evidence with all file relationships visible', () => {
  const value = pack('museums-missing-labels'), base = findCase(value, 'museums-missing-labels-henry-ford-provenance');
  const item = design.resolveCase(value, base, 3);
  assert.match(item.clues[1], /File A adds an independently created contemporary archival note matched to the same bus/);
  assert.match(item.clues[1], /File B adds a second copy/);
  assert.match(item.clues[1], /File C adds an independent contemporary note about a different bus/);
  assert.match(item.clues[1], /File D adds a later summary derived only from the owner’s story/);
  assert.match(item.clues[1], /invented comparison files, not invented real testimony/);
  assert.equal(item.puzzle.options[item.puzzle.correctIndex], 'File A: the story plus a matched independent contemporary note');
  assert.match(item.puzzle.optionFeedback[1], /not an independent source/);
  assert.match(item.puzzle.optionFeedback[2], /different bus/);
  assert.match(item.puzzle.optionFeedback[3], /derived from the same story/);
  assert.equal(activities.getCaseActivity(value, base, 3), null);
});

test('catalog 3 market activity asks for the seller satisfying both conditions without changing older matching work', () => {
  const value = pack('bentonville'), item = findCase(value, 'classic-downtown-square');
  const previous = activities.getCaseActivity(value, item, 2);
  assert.equal(previous.kind, 'match');
  assert.deepEqual(activities.getCaseActivity(value, item, 1), previous);
  assert.deepEqual(activities.getCaseActivity(value, item), previous);
  const current = activities.getCaseActivity(value, item, 3);
  assert.equal(current.kind, 'filter');
  assert.notEqual(current.id, previous.id);
  assert.deepEqual(current.answer, [0]);
  assert.equal(current.items[current.answer[0]], 'Fern, stall 12');
  assert.match(item.clues[0], /cut flowers, bought directly from the grower/);
  assert.match(item.clues[1], /Fern grows cut flowers at stall 12/);
  assert.match(item.clues[1], /Reed resells cut flowers/);
  current.answer[0] = 2;
  assert.deepEqual(activities.getCaseActivity(value, item, 3).answer, [0]);
  assert.deepEqual(activities.getCaseActivity(value, item, 2), previous);
});

test('episode is anchored to exactly four current cases and reveals only recovered records', () => {
  const value = pack('bentonville'), episode = design.getEpisode(value, episodeId);
  assert.equal(episode.routeStart, 0);
  assert.equal(episode.stopCount, 4);
  assert.deepEqual(episode.caseVariantIds, ['classic-downtown-square', 'classic-walmart-museum', 'classic-walmart-home-office', 'classic-crystal-bridges']);
  for (const [index, stop] of episode.stops.entries()) {
    assert.equal(value.locations[index].id, stop.locationId);
    assert.ok(value.questions[stop.locationId].some(item => item.caseId === stop.caseId));
    assert.ok(stop.result && stop.nextLead && stop.evidence);
  }
  assert.equal(design.getEpisodeEvidence(value, episodeId, -1), '');
  const first = design.getEpisodeEvidence(value, episodeId, 0);
  assert.match(first, /P7.*VIOLET/);
  assert.doesNotMatch(first, /record A|ORANGE|Entrance–Gallery/);
  const second = design.getEpisodeEvidence(value, episodeId, 1);
  assert.match(second, /record A lists parcel P7, seal VIOLET, destination Studio/);
  assert.doesNotMatch(second, /After that handoff|Entrance–Gallery/);
  assert.match(design.getEpisodeEvidence(value, episodeId, 3), /not the museum floor plan or a visitor route/);
  episode.stops[0].evidence = 'caller edit';
  assert.notEqual(design.getEpisode(value, episodeId).stops[0].evidence, 'caller edit');
  assert.equal(design.getEpisode({...value, contentVersion: value.contentVersion + 1}, episodeId), null);
  assert.equal(design.getEpisode(value, 'unknown-episode'), null);
  assert.equal(design.getEpisode(pack('argentina'), episodeId), null);
});

test('episode finale synthesizes receipt identity, overwrite timing, and an open route with all evidence present', () => {
  const value = pack('bentonville'), rounds = design.getEpisodeFinalRounds(value, episodeId);
  assert.equal(rounds.length, 3);
  const expected = ['Record A: P7 / VIOLET / Studio',
    'P7 originally went to Studio; its destination was changed to Gallery after handoff',
    'P7: Entrance → Gallery → Bridge pavilion → Studio; deliver to Studio'];
  rounds.forEach((round, index) => {
    assert.equal(round.options.length, 4);
    assert.equal(new Set(round.options).size, 4);
    assert.equal(round.options[round.correctIndex], expected[index]);
    assert.equal(round.description, design.getEpisodeEvidence(value, episodeId, 3));
    assert.equal(round.hints.length, 3);
    assert.equal(round.optionFeedback.length, 4);
    round.optionFeedback.forEach((feedback, optionIndex) => {
      if (optionIndex !== round.correctIndex) assert.ok(feedback.trim());
    });
  });
  assert.match(rounds[1].description, /After that handoff.*ORANGE.*Gallery/);
  assert.match(rounds[2].description, /Entrance–Studio is closed/);
  assert.match(rounds[2].explanation, /receipt identifies P7.*Studio.*Entrance → Gallery → Bridge pavilion → Studio/);
  assert.deepEqual(design.getEpisodeFinalRounds(value, 'unknown-episode'), []);
});
