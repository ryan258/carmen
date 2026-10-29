// Where in the World: Carmen-flavored place trivia with spaced review.
// Pure rules come first so tests can require this file; page wiring runs only in a browser.
(function (root) {
  'use strict';
  const STORE_KEY = 'carmen_trivia_v1';
  const BOX_DAYS = [0, 1, 3, 7, 16, 35]; // Leitner review gaps in days, by box
  const MASTERED_BOX = 4;
  const REVIEW_LIMIT = 10;
  const DAY = /^\d{4}-\d{2}-\d{2}$/;

  // mulberry32 seeded from an FNV-1a hash, so a seed always builds the same case.
  function seeded(seed) {
    let a = 2166136261;
    for (const ch of String(seed)) a = Math.imul(a ^ ch.charCodeAt(0), 16777619);
    return () => {
      a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function shuffle(list, rand) {
    const out = [...list];
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }
  function dayKey(date = new Date()) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }
  function addDays(day, n) {
    const [y, m, d] = day.split('-').map(Number);
    return dayKey(new Date(y, m - 1, d + n));
  }
  const isRecord = value => Boolean(value) && typeof value === 'object' && !Array.isArray(value);
  const int = (value, min, max) => Number.isInteger(value) && value >= min && value <= max;
  const findPack = (bank, id) => bank.packs.find(pack => pack.id === id) || null;
  const placeOf = (pack, id) => pack.places.find(place => place.id === id) || null;
  const allowedMisses = legs => Math.floor(legs / 4);

  function emptyProgress() { return {version: 1, cards: {}, run: null, dailies: {}, lastPack: null}; }

  // A right answer moves the fact up one box and spaces its next review; a miss brings it back today.
  // A right answer before the fact is due counts but keeps its box and date: spacing needs the gap.
  function grade(progress, factId, correct, today) {
    const card = progress.cards[factId] || {box: 0, due: today, seen: 0, right: 0};
    const early = correct && card.due > today;
    const box = early ? card.box : correct ? Math.min(card.box + 1, BOX_DAYS.length - 1) : 0;
    progress.cards[factId] = {box, due: early ? card.due : addDays(today, BOX_DAYS[box]), seen: card.seen + 1, right: card.right + (correct ? 1 : 0)};
  }

  // Due reviews first, then unseen facts, then whatever comes due soonest.
  function pickFact(place, progress, today, rand) {
    const rank = card => !card ? 1 : card.due <= today ? 0 : 2;
    return shuffle(place.facts, rand)
      .map(fact => ({fact, card: progress.cards[fact.id]}))
      .sort((a, b) => rank(a.card) - rank(b.card) || (a.card?.due || '').localeCompare(b.card?.due || ''))[0].fact;
  }
  function makeLeg(pack, place, fact, rand) {
    const others = shuffle(pack.places.filter(other => other.id !== place.id), rand).slice(0, 3);
    return {place: place.id, fact: fact.id, options: shuffle([place, ...others], rand).map(option => option.id), choice: null};
  }

  // A chase visits distinct places; each clue is a real fact about the next stop.
  function createChase(bank, packId, stops, seed, progress, today, kind = 'chase') {
    const pack = findPack(bank, packId), rand = seeded(seed);
    const route = shuffle(pack.places, rand).slice(0, Math.min(stops, pack.places.length));
    return {kind, packId, seed, index: 0, legs: route.map(place => makeLeg(pack, place, pickFact(place, progress, today, rand), rand))};
  }
  function dueFacts(pack, progress, today) {
    return pack.places.flatMap(place => place.facts.filter(fact => progress.cards[fact.id]?.due <= today).map(fact => ({place, fact})));
  }
  function createReview(bank, packId, seed, progress, today) {
    const pack = findPack(bank, packId), rand = seeded(seed);
    const due = shuffle(dueFacts(pack, progress, today), rand)
      .sort((a, b) => progress.cards[a.fact.id].box - progress.cards[b.fact.id].box)
      .slice(0, REVIEW_LIMIT);
    return due.length ? {kind: 'review', packId, seed, index: 0, legs: due.map(({place, fact}) => makeLeg(pack, place, fact, rand))} : null;
  }

  function answer(progress, placeId, today) {
    const run = progress.run, leg = run && run.legs[run.index];
    if (!leg || leg.choice !== null || !leg.options.includes(placeId)) return null;
    leg.choice = placeId;
    grade(progress, leg.fact, placeId === leg.place, today);
    return placeId === leg.place;
  }
  function summarize(run) {
    const misses = run.legs.filter(leg => leg.choice !== leg.place).length;
    return {kind: run.kind, packId: run.packId, legs: run.legs, misses, caught: misses <= allowedMisses(run.legs.length)};
  }
  // A daily belongs to the day in its seed, even when it is finished after midnight.
  const dailyDay = (run, today) => DAY.test(run.seed.slice(6)) ? run.seed.slice(6) : today;
  // Returns the finished summary after the last leg, otherwise null.
  function advance(progress, today) {
    const run = progress.run;
    if (!run || run.legs[run.index].choice === null) return null;
    if (++run.index < run.legs.length) return null;
    const result = summarize(run);
    if (run.kind === 'daily') progress.dailies[dailyDay(run, today)] = {packId: run.packId, caught: result.caught};
    progress.run = null;
    return result;
  }
  // Leaving a daily closes it as got away, so it can't be replayed once its answers have been seen.
  function abandon(progress, today) {
    const run = progress.run;
    if (run?.kind === 'daily') progress.dailies[dailyDay(run, today)] = {packId: run.packId, caught: false};
    progress.run = null;
  }

  function streak(progress, today) {
    let day = progress.dailies[today] ? today : addDays(today, -1), count = 0;
    while (progress.dailies[day]) { count++; day = addDays(day, -1); }
    return count;
  }
  function mastery(pack, progress, today) {
    const facts = pack.places.flatMap(place => place.facts);
    return {
      mastered: facts.filter(fact => (progress.cards[fact.id]?.box || 0) >= MASTERED_BOX).length,
      due: dueFacts(pack, progress, today).length,
      total: facts.length
    };
  }

  function validRun(run, bank) {
    if (!isRecord(run) || !['chase', 'daily', 'review'].includes(run.kind) || typeof run.seed !== 'string') return false;
    const pack = findPack(bank, run.packId);
    if (!pack || !Array.isArray(run.legs) || !run.legs.length || !int(run.index, 0, run.legs.length - 1)) return false;
    return run.legs.every((leg, i) => {
      const place = isRecord(leg) && placeOf(pack, leg.place);
      return place && place.facts.some(fact => fact.id === leg.fact)
        && Array.isArray(leg.options) && leg.options.length === 4 && new Set(leg.options).size === 4
        && leg.options.includes(leg.place) && leg.options.every(id => placeOf(pack, id))
        && (i < run.index ? leg.choice !== null : i > run.index ? leg.choice === null : true)
        && (leg.choice === null || leg.options.includes(leg.choice));
    });
  }
  // Returns clean progress, or null when the shape is wrong. Facts later removed from the bank
  // are dropped rather than failing the whole history; a damaged case in progress is dropped too.
  function normalizeProgress(value, bank) {
    if (!isRecord(value) || value.version !== 1 || !isRecord(value.cards) || !isRecord(value.dailies)) return null;
    const out = emptyProgress();
    const factIds = new Set(bank.packs.flatMap(pack => pack.places.flatMap(place => place.facts.map(fact => fact.id))));
    for (const [id, card] of Object.entries(value.cards)) {
      if (!isRecord(card) || !int(card.box, 0, BOX_DAYS.length - 1) || !DAY.test(card.due)
        || !int(card.seen, 0, 1e6) || !int(card.right, 0, card.seen)) return null;
      if (factIds.has(id)) out.cards[id] = {box: card.box, due: card.due, seen: card.seen, right: card.right};
    }
    for (const [day, entry] of Object.entries(value.dailies)) {
      if (!DAY.test(day) || !isRecord(entry) || typeof entry.packId !== 'string' || typeof entry.caught !== 'boolean') return null;
      out.dailies[day] = {packId: entry.packId, caught: entry.caught};
    }
    if (validRun(value.run, bank)) out.run = value.run;
    if (findPack(bank, value.lastPack)) out.lastPack = value.lastPack;
    return out;
  }

  const api = {STORE_KEY, BOX_DAYS, MASTERED_BOX, seeded, shuffle, dayKey, addDays, emptyProgress, grade, pickFact,
    createChase, createReview, dueFacts, answer, advance, abandon, summarize, allowedMisses, streak, mastery, validRun, normalizeProgress};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof document === 'undefined') return;

  // ---------------------------------------------------------------- page
  const bank = TRIVIA_BANK; // global binding from trivia-bank.js (a top-level const is not a window property)
  const $ = id => document.getElementById(id);
  const LETTERS = ['A', 'B', 'C', 'D'];
  let progress = emptyProgress();
  let canSave = true;

  function storage() { return root.localStorage; }
  function notify(text) { $('notice').textContent = text; $('notice').hidden = !text; }
  function save() {
    if (!canSave) return;
    try { storage().setItem(STORE_KEY, JSON.stringify(progress)); }
    catch { canSave = false; notify('This browser will not save progress. Use Export to keep it.'); }
  }
  function load() {
    let raw;
    try { raw = storage().getItem(STORE_KEY); }
    catch { canSave = false; notify('This browser will not save progress. Use Export to keep it.'); return; }
    if (raw === null) return;
    let parsed = null;
    try { parsed = normalizeProgress(JSON.parse(raw), bank); } catch { parsed = null; }
    if (parsed) { progress = parsed; return; }
    // Never overwrite unreadable progress without an explicit choice.
    canSave = false; $('freshBtn').hidden = false;
    notify('Saved progress could not be read and has been left as it is. Import a backup, or choose Start fresh to replace it.');
  }

  const escapeHtml = value => String(value).replace(/[&<>"']/g, ch => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[ch]));
  const clueHtml = text => escapeHtml(text).replace(/_{4}/g, '<span class="blank" aria-hidden="true">____</span><span class="sr">blank</span>');
  const currentPack = () => findPack(bank, $('packSelect').value);
  function show(id) { for (const screen of ['home', 'play', 'results']) $(screen).hidden = screen !== id; }

  function renderHome() {
    const today = dayKey(), pack = currentPack();
    const stats = mastery(pack, progress, today);
    $('packTitle').textContent = pack.title;
    $('mastery').textContent = `${stats.mastered} of ${stats.total} clues mastered · ${stats.due} due for review`;
    $('reviewBtn').disabled = stats.due === 0;
    const reviewCount = Math.min(stats.due, REVIEW_LIMIT);
    $('reviewBtn').textContent = stats.due ? `Review ${reviewCount} due clue${reviewCount === 1 ? '' : 's'}` : 'No clues due';
    const doneToday = Boolean(progress.dailies[today]);
    $('dailyBtn').disabled = doneToday;
    $('dailyBtn').textContent = doneToday ? "Today's case is closed" : "Today's case";
    const days = streak(progress, today);
    $('streak').textContent = days ? `Daily streak: ${days} day${days === 1 ? '' : 's'}` : 'Play today\'s case to start a streak.';
    const run = progress.run;
    $('continueBtn').hidden = !run;
    if (run) $('continueBtn').textContent = `Continue ${run.kind === 'review' ? 'review' : 'case'} (${findPack(bank, run.packId).title}, ${run.index + 1} of ${run.legs.length})`;
    show('home');
  }

  function renderLeg() {
    const run = progress.run, pack = findPack(bank, run.packId), leg = run.legs[run.index];
    const place = placeOf(pack, leg.place), fact = place.facts.find(item => item.id === leg.fact);
    const review = run.kind === 'review';
    $('lead').textContent = review ? 'Which place does this clue describe?' : 'A witness saw the suspect leave. Their note describes the next stop:';
    $('clue').innerHTML = clueHtml(fact.clue);
    $('question').textContent = review ? 'Which place is this?' : 'Where did the suspect go?';
    $('choices').innerHTML = '';
    leg.options.forEach((id, i) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'choice';
      button.dataset.place = id;
      button.setAttribute('aria-label', `Answer ${LETTERS[i]}: ${placeOf(pack, id).name}`);
      button.innerHTML = `<span class="key">${LETTERS[i]}</span> ${escapeHtml(placeOf(pack, id).name)}`;
      button.addEventListener('click', () => choose(id));
      $('choices').appendChild(button);
    });
    renderFeedback();
    show('play');
    $(leg.choice === null ? 'question' : 'nextBtn').focus();
  }
  const misses = run => run.legs.slice(0, run.index + 1).filter(leg => leg.choice !== null && leg.choice !== leg.place).length;

  function renderFeedback() {
    const run = progress.run, pack = findPack(bank, run.packId), leg = run.legs[run.index];
    const answered = leg.choice !== null;
    $('stopHeading').textContent = run.kind === 'review' ? `Review ${run.index + 1} of ${run.legs.length}`
      : `Stop ${run.index + 1} of ${run.legs.length} · misses ${misses(run)} of ${allowedMisses(run.legs.length)} allowed`;
    for (const button of $('choices').children) {
      button.disabled = answered;
      button.classList.toggle('right', answered && button.dataset.place === leg.place);
      button.classList.toggle('wrong', answered && button.dataset.place === leg.choice && leg.choice !== leg.place);
    }
    $('nextBtn').hidden = !answered;
    if (!answered) { $('feedback').innerHTML = ''; return; }
    const place = placeOf(pack, leg.place), fact = place.facts.find(item => item.id === leg.fact);
    const right = leg.choice === leg.place;
    const sources = fact.sources.map(s => `<li><a href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(s.title)}</a> — ${escapeHtml(s.publisher)}</li>`).join('');
    $('feedback').innerHTML = `<p class="verdict ${right ? 'right' : 'wrong'}">${right ? 'Right' : 'Not quite'}: it's ${escapeHtml(place.emoji)} ${escapeHtml(place.name)}, ${escapeHtml(place.region)}.</p>`
      + `<p class="fact">${escapeHtml(fact.fact)}</p>${sources ? `<ul class="sources">${sources}</ul>` : ''}`
      + (right ? '' : '<p class="note">This clue comes back in your review today.</p>');
    $('nextBtn').textContent = run.index === run.legs.length - 1 ? (run.kind === 'review' ? 'Finish review' : 'Make the arrest') : 'Continue';
  }

  function choose(placeId) {
    if (answer(progress, placeId, dayKey()) === null) return;
    save(); renderFeedback(); $('nextBtn').focus();
  }
  function next() {
    const result = advance(progress, dayKey());
    save();
    if (result) renderResults(result); else renderLeg();
  }

  function renderResults(result) {
    const pack = findPack(bank, result.packId), total = result.legs.length, right = total - result.misses;
    const suspect = placeOf(pack, result.legs[total - 1].place).suspect;
    $('resultHeading').textContent = result.kind === 'review' ? 'Review complete'
      : result.caught ? `Case closed: ${suspect.alias} is in custody` : `${suspect.alias} got away this time`;
    $('resultSummary').textContent = `You placed ${right} of ${total} clues.` + (result.misses ? ' Missed clues are due for review today.' : '')
      + (result.kind === 'review' ? '' : ` (${suspect.name} is a fictional suspect.)`);
    $('resultList').innerHTML = result.legs.map(leg => {
      const place = placeOf(pack, leg.place), fact = place.facts.find(item => item.id === leg.fact);
      return `<li class="${leg.choice === leg.place ? 'right' : 'wrong'}"><strong>${leg.choice === leg.place ? '✓' : '✗'} ${escapeHtml(place.name)}</strong> — ${escapeHtml(fact.fact)}</li>`;
    }).join('');
    $('againBtn').textContent = result.kind === 'review' ? 'Back to cases' : 'Start another case';
    $('againBtn').onclick = result.kind === 'review' ? goHome : startChase;
    show('results');
    $('resultHeading').focus();
  }
  // Navigation home moves focus to the page heading, so it isn't lost on a hidden button.
  function goHome() { renderHome(); $('packTitle').focus(); }

  function begin(run) {
    if (!run) return;
    if (progress.run) {
      const daily = progress.run.kind === 'daily';
      if (!root.confirm(daily ? 'Replace the daily case in progress? It will close as got away.' : 'Replace the case you have in progress?')) return;
      abandon(progress, dayKey());
    }
    progress.run = run;
    save(); renderLeg();
  }
  function startChase() {
    const today = dayKey();
    begin(createChase(bank, currentPack().id, Number($('stopSelect').value), `${today}-${Date.now()}`, progress, today));
  }
  function startDaily() {
    const today = dayKey();
    if (progress.dailies[today]) return;
    if (progress.run?.seed === `daily-${today}`) { renderLeg(); return; }
    begin(createChase(bank, currentPack().id, 6, `daily-${today}`, progress, today, 'daily'));
  }
  function startReview() {
    const today = dayKey();
    begin(createReview(bank, currentPack().id, `review-${today}-${Date.now()}`, progress, today));
  }

  function exportProgress() {
    const blob = new Blob([JSON.stringify(progress, null, 1)], {type: 'application/json'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `carmen-trivia-backup-${dayKey()}.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 0);
  }
  async function importProgress(event) {
    const file = event.target.files[0];
    event.target.value = '';
    if (!file) return;
    let parsed = null;
    try { parsed = normalizeProgress(JSON.parse(await file.text()), bank); } catch { parsed = null; }
    if (!parsed) { notify('That file is not a Carmen trivia backup. Nothing was changed.'); return; }
    if (!root.confirm('Replace your current progress with this backup?')) return;
    progress = parsed; canSave = true; $('freshBtn').hidden = true;
    notify('Backup restored.'); save(); renderHome();
  }
  function startFresh() {
    if (!root.confirm('Replace the unreadable saved progress with a fresh start?')) return;
    progress = emptyProgress(); canSave = true; $('freshBtn').hidden = true;
    notify(''); save(); goHome();
  }

  function onKey(event) {
    if ($('play').hidden || event.ctrlKey || event.metaKey || event.altKey || event.repeat) return;
    if (event.target.closest && event.target.closest('input, select, textarea')) return;
    const index = '1234'.indexOf(event.key) >= 0 ? '1234'.indexOf(event.key) : 'abcd'.indexOf(event.key.toLowerCase());
    const button = index >= 0 && $('choices').children[index];
    if (button && !button.disabled) { event.preventDefault(); button.click(); }
  }

  function boot() {
    for (const pack of bank.packs) $('packSelect').add(new Option(pack.title, pack.id));
    load();
    $('packSelect').value = progress.lastPack || bank.packs[0].id;
    $('packSelect').addEventListener('change', () => { progress.lastPack = $('packSelect').value; save(); renderHome(); });
    $('continueBtn').addEventListener('click', renderLeg);
    $('dailyBtn').addEventListener('click', startDaily);
    $('reviewBtn').addEventListener('click', startReview);
    $('chaseBtn').addEventListener('click', startChase);
    $('nextBtn').addEventListener('click', next);
    $('homeBtn').addEventListener('click', goHome);
    $('resultsHomeBtn').addEventListener('click', goHome);
    $('exportBtn').addEventListener('click', exportProgress);
    $('importInput').addEventListener('change', importProgress);
    $('freshBtn').addEventListener('click', startFresh);
    document.addEventListener('keydown', onKey);
    renderHome();
  }
  document.addEventListener('DOMContentLoaded', boot);
})(typeof window !== 'undefined' ? window : globalThis);
