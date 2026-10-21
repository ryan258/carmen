const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const {spawnSync} = require('node:child_process');
const activities = require('../quiz-activities.js');
const practice = require('../quiz-practice.js');

const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'data/quiz-packs.json'), 'utf8'));
const packs = manifest.packs.map(entry => JSON.parse(fs.readFileSync(path.resolve(root, entry.path), 'utf8')));
function findCase(caseId) {
  for (const pack of packs) {
    const item = Object.values(pack.questions).flat().find(candidate => candidate.caseId === caseId);
    if (item) return {pack, item};
  }
  throw new Error(`Missing fixture case ${caseId}`);
}

test('catalog versions preserve all twenty original activities and keep older choice cases unchanged', () => {
  let original = 0, expanded = 0;
  for (const pack of packs) {
    for (const item of Object.values(pack.questions).flat()) {
      const oldActivity = activities.getCaseActivity(pack, item, 1);
      const newActivity = activities.getCaseActivity(pack, item, 2);
      if (newActivity) expanded++;
      if (oldActivity) {
        original++;
        assert.deepEqual(oldActivity, newActivity, item.caseId);
      }
      assert.equal(activities.getCaseActivity(pack, item, 999), null);
    }
  }
  assert.equal(original, 20);
  assert.equal(expanded, 47);
  const {pack, item} = findCase('arkansas-delta-cultural-center-broadcast');
  assert.equal(activities.getCaseActivity(pack, item, 1), null);
  assert.equal(activities.getCaseActivity(pack, item, 2).kind, 'sequence');
});

test('filtering preserves separate observations rather than forcing every card into an answer', () => {
  const {pack, item} = findCase('american-national-parks-everglades-season');
  const activity = activities.getCaseActivity(pack, item);
  assert.equal(activity.kind, 'filter');
  assert.deepEqual(activity.answer.map(index => activity.items[index]), [
    'Shallow habitat dries', 'A deeper slough pool retains water'
  ]);
  assert.ok(activity.items.includes('Every pool must be dry'));
  assert.ok(activity.items.includes('Every habitat remains equally wet'));
  assert.match(activity.instruction, /fictional/);
  activity.answer.reverse();
  assert.deepEqual(activities.getCaseActivity(pack, item).answer, [0, 1]);
});

test('fragment assembly follows the authored nonnumeric key and leaves an unused card', () => {
  const {pack, item} = findCase('nwa-atalanta');
  const activity = activities.getCaseActivity(pack, item);
  assert.equal(activity.kind, 'assemble');
  assert.deepEqual(activity.answer.map(index => activity.items[index]), ['1: Lake', '3: Atalanta', '2: Park']);
  assert.ok(!activity.answer.includes(3));
  assert.match(item.clues.join(' '), /1-3-2/);
});

test('early Delta cases provide three distinct interaction kinds without changing source answers', () => {
  const ids = [
    'arkansas-delta-cultural-center-broadcast',
    'arkansas-delta-hampson-places',
    'arkansas-delta-lakeport-scope'
  ];
  const before = ids.map(id => JSON.stringify(findCase(id).item));
  const descriptors = ids.map(id => {
    const {pack, item} = findCase(id);
    return activities.getCaseActivity(pack, item);
  });
  assert.deepEqual(descriptors.map(activity => activity.kind), ['sequence', 'match', 'filter']);
  assert.deepEqual(descriptors[0].items, ['Record the interview', 'Make the transcript', 'Approve the transcript']);
  assert.deepEqual(descriptors[1].items, [
    {prompt: 'Nodena', answer: 'Collection origin'}, {prompt: 'Wilson', answer: 'Museum location'}
  ]);
  assert.ok(descriptors[2].answer.map(index => descriptors[2].items[index]).includes('Enslaved people’s lives and labor'));
  assert.deepEqual(ids.map(id => JSON.stringify(findCase(id).item)), before);
});

test('all 48 companion activities preserve their ledger prompt and expected reasoning', () => {
  const ledger = fs.readFileSync(path.join(root, 'docs/remaining-packs-review.md'), 'utf8');
  const all = packs.flatMap(pack => practice.getTransferActivities(pack));
  assert.equal(all.length, 48);
  assert.equal(new Set(all.map(activity => activity.id)).size, 48);
  for (const activity of all) {
    assert.ok(ledger.includes(`**Transfer:** ${activity.prompt}`), activity.id);
    assert.ok(ledger.includes(`**Expected reasoning:** ${activity.answer}`), activity.id);
    assert.equal(activity.source, 'docs/remaining-packs-review.md');
  }
  for (const pack of packs) {
    const transferList = practice.getTransferActivities(pack);
    if (!transferList.length) continue;
    assert.equal(transferList.length, 8, pack.id);
    for (const location of pack.locations) {
      for (const item of pack.questions[location.id]) {
        assert.equal(practice.getCasePractice(pack, item).transfer.locationId, location.id);
      }
    }
    assert.deepEqual(practice.getTransferActivities({...pack, contentVersion: pack.contentVersion + 1}), []);
    transferList[0].answer = 'Changed outside the catalog';
    assert.notEqual(practice.getTransferActivities(pack)[0].answer, transferList[0].answer);
  }
});

test('condensed narrative retains case identity and fiction boundaries without mutating evidence', () => {
  const {pack, item} = findCase('arkansas-delta-cultural-center-subject');
  const original = JSON.stringify(item);
  const value = practice.getCasePractice(pack, item);
  assert.equal(value.compact, true);
  assert.match(value.briefing, /Delta Cultural Center/);
  assert.ok(value.briefing.includes(item.puzzle.title));
  assert.ok(value.description.includes(item.puzzle.question));
  assert.match(value.fictionNotice, /fictional training material/);
  assert.equal(value.callingCard, '');
  assert.equal(JSON.stringify(item), original);
  const forged = {...item, puzzle: {...item.puzzle, title: 'Injected alternate title'}};
  assert.deepEqual(practice.getCasePractice(pack, forged), value);
  value.transfer.answer = 'Changed outside the catalog';
  assert.notEqual(practice.getCasePractice(pack, item).transfer.answer, value.transfer.answer);
  assert.equal(practice.getCasePractice({...pack, contentVersion: pack.contentVersion + 1}, item), null);
  assert.equal(practice.getCasePractice(pack, {caseId: 'not-a-case'}), null);
});

test('original narrative packs retain their authored briefing and instructions', () => {
  const {pack, item} = findCase('classic-downtown-square');
  const value = practice.getCasePractice(pack, item);
  assert.equal(value.compact, false);
  assert.equal(value.briefing, item.briefing.report);
  assert.equal(value.description, item.puzzle.description);
  assert.equal(value.callingCard, item.briefing.callingCard);
  assert.equal(value.transfer, null);
});

test('all 192 templated cases use distinct fictional warrant labels while preserving canonical answers', () => {
  let adapted = 0;
  for (const pack of packs) {
    for (const location of pack.locations) {
      const pool = pack.questions[location.id];
      const original = JSON.stringify(pool);
      const labels = {hideout: [], disguise: []};
      for (const item of pool) {
        const hideout = practice.warrantLabel(pack, location.id, 'hideout', item.warrantAnswers.hideout, 2);
        const disguise = practice.warrantLabel(pack, location.id, 'disguise', item.warrantAnswers.disguise, 2);
        if (hideout === item.warrantAnswers.hideout) continue;
        adapted++;
        labels.hideout.push(hideout); labels.disguise.push(disguise);
        assert.notEqual(disguise, item.warrantAnswers.disguise, item.caseId);
        assert.match(hideout, /^ACME .+ Desk$/);
        const witness = practice.presentCaseText(pack, item, item.clues[2], 2);
        assert.ok(witness.includes(hideout), item.caseId);
        assert.ok(witness.includes(disguise), item.caseId);
        const explanation = practice.presentCaseText(pack, item, item.puzzle.explanation, 2);
        assert.ok(explanation.includes(hideout), item.caseId);
        assert.ok(explanation.includes(disguise), item.caseId);
        assert.equal(practice.presentCaseText(pack, item, item.clues[0], 2), item.clues[0], `${item.caseId}: factual source note`);
        assert.equal(practice.warrantLabel(pack, location.id, 'city', item.warrantAnswers.city, 2), item.warrantAnswers.city);
        for (const field of ['hideout', 'disguise']) {
          assert.equal(practice.warrantLabel(pack, location.id, field, item.warrantAnswers[field], 1), item.warrantAnswers[field]);
        }
        for (const text of [...item.clues, ...item.puzzle.hints, item.puzzle.explanation]) {
          assert.equal(practice.presentCaseText(pack, item, text, 1), text, `${item.caseId}: original catalog`);
        }
      }
      for (const field of ['hideout', 'disguise']) {
        assert.equal(new Set(labels[field]).size, labels[field].length, `${location.id}: unique ${field} labels`);
      }
      assert.equal(JSON.stringify(pool), original, `${location.id}: source answers unchanged`);
    }
  }
  assert.equal(adapted, 192);
});

test('warrant presentation changes only exact known labels for the owning location and supported version', () => {
  const {pack, item} = findCase('arkansas-delta-cultural-center-broadcast');
  const locationId = pack.locations[0].id;
  const text = "1936; ACME Dispatch Desk; Dispatch clerk; Dispatch clerkship; $& $` $' <not-markup>.";
  const desk = practice.warrantLabel(pack, locationId, 'hideout', 'ACME Dispatch Desk');
  const costume = practice.warrantLabel(pack, locationId, 'disguise', 'Dispatch clerk');
  assert.equal(practice.presentCaseText(pack, item, text), `1936; ${desk}; ${costume}; Dispatch clerkship; $& $\` $' <not-markup>.`);
  assert.equal(practice.warrantLabel(pack, locationId, 'hideout', 'A different real place'), 'A different real place');
  assert.equal(practice.presentCaseText(pack, {caseId: 'unknown'}, text), text);
  assert.equal(practice.presentCaseText({...pack, contentVersion: pack.contentVersion + 1}, item, text), text);
  assert.equal(practice.presentCaseText(pack, item, text, 999), text);
  const original = findCase('classic-downtown-square');
  assert.equal(practice.presentCaseText(original.pack, original.item, text), text);
});

test('henchman maintenance preserves an unrelated legacy temp path and cleans its unique temp file', () => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'carmen-henchmen-'));
  try {
    const pack = structuredClone(packs.find(item => item.id === 'arkansas-delta-carmen'));
    const item = pack.questions[pack.locations[0].id][0];
    delete item.briefing.nextLead;
    const destination = path.join(directory, 'pack.json');
    const legacyTemporary = `${destination}.tmp`;
    fs.writeFileSync(destination, JSON.stringify(pack));
    fs.writeFileSync(legacyTemporary, 'Unrelated work must remain intact.');
    const result = spawnSync(process.execPath, [path.join(root, 'scripts/apply-henchmen.js'), destination], {encoding: 'utf8'});
    assert.equal(result.status, 0, result.stderr || result.stdout);
    const written = JSON.parse(fs.readFileSync(destination, 'utf8'));
    assert.equal(written.contentVersion, pack.contentVersion + 1);
    assert.ok(written.questions[pack.locations[0].id][0].briefing.nextLead);
    assert.equal(fs.readFileSync(legacyTemporary, 'utf8'), 'Unrelated work must remain intact.');
    assert.deepEqual(fs.readdirSync(directory).sort(), ['pack.json', 'pack.json.tmp']);
  } finally {
    fs.rmSync(directory, {recursive: true, force: true});
  }
});
