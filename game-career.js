/* Career layer: daily case, XP levels, and badges across runs. Uses its own
   storage key, so saves, records, and stats keep their existing contracts. */
const CAREER_KEY = 'carmen_career';
const CAREER_LEVELS = ['Desk Trainee','Gumshoe','Tail Agent','Field Agent','Case Cracker','Shadow Hunter','Gadget Ace','Globe Trotter','ACME Legend',"Carmen's Nemesis"];
const CAREER_BADGES = [
  ['first-collar','🔖','First Collar','Close your first case.'],
  ['daily-first','☕','Morning Briefing','Solve a daily case.'],
  ['habit','🔥','Habit Forming','Reach a 3-day daily streak.'],
  ['week','📅','Week on the Beat','Reach a 7-day daily streak.'],
  ['clean-sweep','✨','Clean Sweep','Finish a perfect case: every stop first try, no lives lost.'],
  ['no-hints','🧠','No Help Needed','Close a case without hints or assistance.'],
  ['last-life','💓','Last Life','Close a case with exactly one life left.'],
  ['hard-boiled','🎩','Hard Boiled','Close an inspector case without assistance.'],
  ['deep-thinker','🧩','Deep Thinker','Close a case with deeper reasoning.'],
  ['long-haul','🛤️','Long Haul','Close the longest route a pack offers.'],
  ['dispatch','📦','Dispatch Repaired','Complete The Swapped Dispatch.'],
  ['globe','🌎','Globe Trotter','Close cases in five different packs.'],
  ['every-beat','🗺️','Every Beat Covered','Close a case in every pack.'],
  ['field-notes','📓','Field Notes','Finish your first Study review.'],
  ['bookworm','📚','Bookworm','Finish 25 Study reviews.'],
  ['long-memory','🧭','Long Memory','Remember a case well enough to push its review 8+ days out.']
];

// ponytail: quadratic curve, ~1 case to level 2 and ~35 to level 10; retune if play feels slow.
function careerLevelXp(level) { return 400 * level * (level - 1); }
function careerLevel(xp) { let level = 1; while (xp >= careerLevelXp(level + 1)) level++; return level; }
function careerTitle(level) { return CAREER_LEVELS[Math.min(level, CAREER_LEVELS.length) - 1]; }
function careerDay(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
function dailySeed(day = careerDay()) { return `daily-${day}`; }

function readCareer() {
  let raw = {};
  try { raw = JSON.parse(storage.getItem(CAREER_KEY)) || {}; } catch { /* Start fresh on unreadable data. */ }
  const strings = value => Array.isArray(value) ? value.filter(item => typeof item === 'string') : [];
  const daily = {};
  if (raw.daily && typeof raw.daily === 'object') for (const [day, entry] of Object.entries(raw.daily)) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(day) && ['solved','escaped'].includes(entry?.outcome)) daily[day] = {outcome: entry.outcome, share: String(entry.share || '').slice(0, 300)};
  }
  return {xp: Number.isSafeInteger(raw.xp) && raw.xp >= 0 ? raw.xp : 0, runs: strings(raw.runs), badges: strings(raw.badges), packs: strings(raw.packs),
    daily, bestStreak: Number.isSafeInteger(raw.bestStreak) && raw.bestStreak >= 0 ? raw.bestStreak : 0,
    reviews: Number.isSafeInteger(raw.reviews) && raw.reviews >= 0 ? raw.reviews : 0, studied: strings(raw.studied)};
}

function dailyStreak(career, today = careerDay()) {
  const day = new Date(`${today}T12:00:00`);
  if (career.daily[today]?.outcome !== 'solved') day.setDate(day.getDate() - 1);
  let streak = 0;
  while (career.daily[careerDay(day)]?.outcome === 'solved') { streak++; day.setDate(day.getDate() - 1); }
  return streak;
}

function dailyShareText(day, outcome, streak) {
  const place = QUIZ_PACK.title.match(/^Where in (.+?) is/)?.[1] || QUIZ_PACK.title;
  const grid = LOCATIONS.map((_, index) => { const entry = state.history[index]; return entry ? entry.attempts === 1 ? '🟩' : '🟨' : '⬛'; }).join('');
  return `Carmen Daily ${day} · ${place}\n${grid}${state.assisted ? '🛟' : ''} ${outcome === 'solved' ? 'Case closed' : 'Escaped'}${streak ? ` · 🔥${streak}` : ''}`;
}

// Called once from each terminal handler, after stats. Returns a result summary, or null if already counted.
function recordCareerCase(outcome) {
  const career = readCareer();
  const runId = `${QUIZ_PACK.id}:${state.caseSeed}`;
  if (career.runs.includes(runId)) return null;
  const closed = outcome !== 'escape';
  const fair = !state.assisted;
  const before = career.xp;
  let xp = closed ? state.score : Math.max(50, Math.round(state.score / 2));
  const dailyDay = /^daily-(\d{4}-\d{2}-\d{2})$/.exec(state.caseSeed)?.[1];
  let streak = dailyStreak(career), share = '';
  if (dailyDay && !career.daily[dailyDay]) {
    career.daily[dailyDay] = {outcome: closed ? 'solved' : 'escaped', share: ''};
    streak = dailyStreak(career);
    if (closed) xp += 250 + 50 * Math.min(Math.max(streak - 1, 0), 5);
    share = career.daily[dailyDay].share = dailyShareText(dailyDay, career.daily[dailyDay].outcome, closed ? streak : 0);
    // ponytail: keep ~2 months of daily history; streaks longer than that stop counting back.
    career.daily = Object.fromEntries(Object.entries(career.daily).sort().slice(-60));
  }
  career.xp += xp;
  career.runs = [...career.runs, runId].slice(-500);
  career.bestStreak = Math.max(career.bestStreak, streak);
  if (closed && !career.packs.includes(QUIZ_PACK.id)) career.packs.push(QUIZ_PACK.id);
  const longest = Math.max(...CarmenCore.stopCounts(QUIZ_PACK.locations.length));
  const earned = {
    'first-collar': closed,
    'daily-first': closed && Boolean(dailyDay),
    habit: streak >= 3,
    week: streak >= 7,
    'clean-sweep': outcome === 'perfect',
    'no-hints': closed && fair && state.totalHintsUsed === 0,
    'last-life': closed && fair && state.lives === 1,
    'hard-boiled': closed && fair && state.difficulty === 'inspector',
    'deep-thinker': closed && state.challenge === 'advanced',
    'long-haul': closed && state.stopCount === longest,
    dispatch: closed && Boolean(state.episodeId),
    globe: career.packs.length >= 5,
    'every-beat': QUIZ_PACK_MANIFEST.packs.length > 1 && QUIZ_PACK_MANIFEST.packs.every(entry => career.packs.includes(entry.id))
  };
  const newBadges = CAREER_BADGES.filter(([id]) => earned[id] && !career.badges.includes(id));
  career.badges.push(...newBadges.map(([id]) => id));
  storage.setItem(CAREER_KEY, JSON.stringify(career));
  renderCareerCard();
  return {xp, before, after: career.xp, levelUp: careerLevel(career.xp) > careerLevel(before), newBadges, daily: Boolean(dailyDay), closed, streak, share};
}

// Study reviews earn XP once per case per day, so spaced recall is part of the career loop.
function recordCareerStudy(rating, entry) {
  const career = readCareer(), mark = `${careerDay()}|${CarmenStudy.entryKey(entry)}`;
  if (career.studied.includes(mark)) return 'Already counted toward your career today.';
  const xp = rating === 'got-it' ? 40 : 15;
  career.xp += xp; career.reviews++;
  career.studied = [...career.studied, mark].slice(-500);
  const earned = {'field-notes': true, bookworm: career.reviews >= 25, 'long-memory': entry.intervalDays >= 8};
  const newBadges = CAREER_BADGES.filter(([id]) => earned[id] && !career.badges.includes(id));
  career.badges.push(...newBadges.map(([id]) => id));
  storage.setItem(CAREER_KEY, JSON.stringify(career));
  renderCareerCard();
  return `+${xp} career XP.${newBadges.map(([, icon, name]) => ` ${icon} New badge: ${name}!`).join('')}`;
}

// Stops solved after a mistake, plus an unsolved stop on escape, map to pack case IDs by route index.
function missedCaseIds() {
  const ids = state.history.map((entry, index) => entry.attempts > 1 ? state.caseVariantIds[index] : null);
  if (state.history.length < LOCATIONS.length) ids.push(state.caseVariantIds[state.history.length]);
  return [...new Set(ids.filter(Boolean))];
}

function readNotebookForCareer() {
  const raw = storage.getItem(CarmenStudy.NOTEBOOK_KEY);
  try { const notebook = raw === null ? CarmenStudy.emptyNotebook() : JSON.parse(raw); return CarmenStudy.validateNotebook(notebook) ? notebook : null; }
  catch { return null; }
}

function queueMissedForReview() {
  const ids = missedCaseIds(), status = document.getElementById('careerQueueStatus');
  let notebook = readNotebookForCareer();
  // Never overwrite an unreadable notebook; Study owns its recovery path.
  if (!notebook) { status.textContent = 'Your notebook is unreadable, so nothing was added. Open Study to restore a backup.'; return; }
  try {
    for (const caseId of ids) notebook = CarmenStudy.updateEntry(notebook, {packId: QUIZ_PACK.id, contentVersion: QUIZ_PACK.contentVersion, caseId}, {rating: 'again'});
  } catch (error) { status.textContent = error.message; return; }
  storage.setItem(CarmenStudy.NOTEBOOK_KEY, JSON.stringify(notebook));
  document.getElementById('careerQueueButton').disabled = true;
  status.textContent = `${ids.length} stop${ids.length === 1 ? '' : 's'} added to Study and due now. Review them from the menu for career XP.`;
  renderCareerCard();
}

function dueReviewCount() {
  const notebook = readNotebookForCareer();
  // ponytail: counts the selected pack only, matching what Study shows; refreshes on career events, not on pack switch.
  return notebook ? CarmenStudy.dueEntries(notebook).filter(entry => entry.packId === QUIZ_PACK.id && entry.contentVersion === QUIZ_PACK.contentVersion).length : 0;
}

function openDueReviews() {
  openStudy();
  if (activeModal !== 'studyModal') return;
  document.getElementById('studyFilter').value = 'due';
  renderStudyLocations();
}

function careerProgressHtml(xp) {
  const level = careerLevel(xp), floor = careerLevelXp(level), next = careerLevelXp(level + 1);
  return `<p class="career-level">Level ${level} · ${escapeHtml(careerTitle(level))}</p>
    <progress class="career-bar" max="${next - floor}" value="${xp - floor}" aria-label="Progress to level ${level + 1}"></progress>
    <p class="career-next">${next - xp} XP to level ${level + 1}${level < CAREER_LEVELS.length ? ` · ${escapeHtml(careerTitle(level + 1))}` : ''}</p>`;
}

function renderCareerResult(summary) {
  if (!summary) return '';
  const level = careerLevel(summary.after);
  const earned = readCareer().badges, next = CAREER_BADGES.find(([id]) => !earned.includes(id));
  return `<section class="career-result" aria-labelledby="careerResultHeading">
    <h4 id="careerResultHeading">Career +${summary.xp} XP</h4>
    ${summary.levelUp ? `<p class="career-promotion">Promoted to level ${level} · ${escapeHtml(careerTitle(level))}!</p>` : ''}
    ${careerProgressHtml(summary.after)}
    ${summary.daily ? `<p>${summary.closed ? `Daily case solved${summary.streak ? ` · 🔥 ${summary.streak}-day streak` : ''}` : 'Daily case escaped. A new one opens tomorrow.'}</p>
      <pre class="career-share">${escapeHtml(summary.share)}</pre>
      <button onclick="copyDailyResult()" class="secondary-action">Copy daily result</button>` : ''}
    ${summary.newBadges.map(([, icon, name, text]) => `<p class="career-badge-new">${icon} New badge: <strong>${escapeHtml(name)}</strong> — ${escapeHtml(text)}</p>`).join('')}
    ${missedCaseIds().length ? `<button id="careerQueueButton" onclick="queueMissedForReview()" class="secondary-action">Review the ${missedCaseIds().length} stop${missedCaseIds().length === 1 ? '' : 's'} you missed in Study</button>
      <p id="careerQueueStatus" aria-live="polite"></p>` : ''}
    ${next ? `<p class="career-next-goal">Next badge: <strong>${escapeHtml(next[2])}</strong> — ${escapeHtml(next[3])}</p>` : ''}
    <button onclick="playAnotherCase()" class="primary-action">Play another quick case</button>
  </section>`;
}

function renderCareerCard() {
  const card = document.getElementById('careerCard');
  if (!card) return;
  const career = readCareer(), today = careerDay(), played = career.daily[today], streak = dailyStreak(career);
  document.getElementById('careerProgress').innerHTML = careerProgressHtml(career.xp);
  document.getElementById('careerDaily').textContent = `Daily streak: ${streak} day${streak === 1 ? '' : 's'}${career.bestStreak > streak ? ` · best ${career.bestStreak}` : ''}`
    + (played ? ` · today's case ${played.outcome}. Next case in about ${Math.ceil((new Date().setHours(24, 0, 0, 0) - Date.now()) / 3600000)}h.` : streak ? ' · keep it alive today.' : '');
  const button = document.getElementById('dailyCaseButton');
  button.textContent = played ? (played.outcome === 'solved' ? "Today's case solved ✓" : "Today's case escaped") : "Play today's case";
  button.disabled = Boolean(played);
  const due = dueReviewCount(), review = document.getElementById('careerReviewButton');
  review.hidden = !due;
  review.textContent = `Review ${due} due case${due === 1 ? '' : 's'} (+XP)`;
  document.getElementById('careerBadgeSummary').textContent = `Badges ${career.badges.length} of ${CAREER_BADGES.length}`;
  document.getElementById('careerBadges').innerHTML = CAREER_BADGES.map(([id, icon, name, text]) => {
    const has = career.badges.includes(id);
    return `<li class="${has ? 'earned' : 'locked'}"><span aria-hidden="true">${has ? icon : '🔒'}</span> <strong>${escapeHtml(name)}</strong>${has ? '' : ' (locked)'} — ${escapeHtml(text)}</li>`;
  }).join('');
}

function startDailyCase() {
  if (packLoading || activeModal) return;
  if (readCareer().daily[careerDay()]) { renderCareerCard(); return; }
  // Today's daily already in progress: continue it rather than offering a fresh retry.
  if (readSavedGame()?.caseSeed === dailySeed()) { resumeGame(); return; }
  state.stopCount = CarmenCore.stopCounts(QUIZ_PACK.locations.length)[0];
  document.getElementById('stopCountSelect').value = String(state.stopCount);
  document.getElementById('quizStyleSelect').value = 'mixed';
  document.getElementById('challengeSelect').value = 'standard';
  selectDifficulty('detective', null, true);
}

function createDailyRun() {
  const seed = dailySeed();
  const routeStart = CarmenRunGenerator.chooseRouteStart(QUIZ_PACK.locations.length, state.stopCount, seed);
  LOCATIONS = getRunLocationsForStopCount(state.stopCount, routeStart);
  return {seed, routeStart, caseVariantIds: createRunCaseVariantIds(seed)};
}

// The results screen's "one more case" path: back to the title, then the existing Quick case entry.
function playAnotherCase() {
  goToTitle();
  startQuickCase();
}

function copyDailyResult() {
  const text = readCareer().daily[careerDay()]?.share || document.querySelector('.career-share')?.textContent || '';
  if (!text) return;
  const clipboard = typeof navigator !== 'undefined' && navigator.clipboard;
  if (!clipboard) { announce('Copy is unavailable here. Select the result text to copy it.'); return; }
  clipboard.writeText(text).then(() => announce('Daily result copied.'), () => announce('Copy failed. Select the result text to copy it.'));
}

document.addEventListener('DOMContentLoaded', renderCareerCard);
