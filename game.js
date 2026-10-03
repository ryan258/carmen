// ============================================================
// GAME DATA & LOCATIONS
// ============================================================
let LOCATIONS = [];

const DEFAULT_QUIZ_PACK = CarmenBuiltinPack;
const LOCATION_SYMBOLS = Object.fromEntries(DEFAULT_QUIZ_PACK.locations.map(loc => [loc.id, loc.token]));
const storage = CarmenCore.createStorage(() => window.localStorage, () => {
  const el = document.getElementById('storageStatus');
  if (el) { el.hidden = false; el.textContent = 'Browser storage is unavailable. Progress and records last only until this page closes.'; }
});
const sessionScheduler = CarmenCore.createScheduler();
const schedule = (callback, delay) => sessionScheduler.schedule(function deliver() {
  if (activeModal) sessionScheduler.schedule(deliver, 100);
  else callback();
}, delay);
const escapeHtml = CarmenCore.escapeHtml;
let packLoading = true;
let packRequest = 0;
let activeModal = null;
let modalReturnFocus = null;
let resetSaveSnapshot;
let sessionSaveSnapshot = null;

const DEFAULT_QUIZ_PACK_ENTRY = {
  id: DEFAULT_QUIZ_PACK.id,
  title: DEFAULT_QUIZ_PACK.title,
  description: 'Built-in fallback quiz pack.',
  path: ''
};

const DEFAULT_QUIZ_PACK_MANIFEST = {
  schemaVersion: 1,
  defaultPackId: DEFAULT_QUIZ_PACK.id,
  packs: [DEFAULT_QUIZ_PACK_ENTRY]
};

let QUIZ_PACK = DEFAULT_QUIZ_PACK;
let QUIZ_PACK_MANIFEST = DEFAULT_QUIZ_PACK_MANIFEST;
let ACTIVE_PACK_ENTRY = QUIZ_PACK_MANIFEST.packs[0];
let QUESTION_BANK = DEFAULT_QUIZ_PACK.questions;
const SAVE_SCHEMA_VERSION = CarmenCore.SAVE_VERSION;
const SAVE_KEY = 'carmen_save';
const LAST_RUN_KEY = 'carmen_lastCaseVariantIds';
const SETTINGS_KEY = 'carmen_settings';
const PACK_SELECTION_KEY = 'carmen_selectedQuizPackId';





function normalizeMapCenter(center) {
  if (Array.isArray(center) && center.length === 2) {
    return {
      lat: Number(center[0]),
      lng: Number(center[1])
    };
  }
  if (center && typeof center === 'object') {
    return {
      lat: Number(center.lat),
      lng: Number(center.lng)
    };
  }
  return DEFAULT_QUIZ_PACK.map.center;
}

function validateQuizPack(pack) { return CarmenCore.validatePack(pack); }

function validateQuizPackManifest(manifest) { return CarmenCore.validateManifest(manifest); }

function applyQuizPack(pack) {
  const normalizedPack = pack;
  validateQuizPack(normalizedPack);
  QUIZ_PACK = normalizedPack;
  LOCATIONS = normalizedPack.locations;
  QUESTION_BANK = normalizedPack.questions;
  applyQuizPackMetadata();
}

function setTextIfPresent(id, value) {
  const element = document.getElementById(id);
  if (element && typeof value === 'string') {
    element.textContent = value;
  }
}

function applyQuizPackMetadata() {
  document.title = QUIZ_PACK.title;
  setTextIfPresent('packSubtitle', QUIZ_PACK.subtitle);
  setTextIfPresent('packHeroLocation', QUIZ_PACK.heroLocation);
  setTextIfPresent('packIntro', QUIZ_PACK.intro);
  setTextIfPresent('packFooterTitle', QUIZ_PACK.title);
  updateStopCountOptions();
}

function updateStopCountOptions() {
  const select = document.getElementById('stopCountSelect');
  if (!select) return;
  const total = QUIZ_PACK.locations.length;
  const options = CarmenRunGenerator.computeStopCountOptions(total);
  select.innerHTML = options
    .map((count) => `<option value="${count}">${count} Stop${count === 1 ? '' : 's'}${count === total ? ' (All)' : ''}</option>`)
    .join('');
  const preferred = options.includes(state.stopCount) ? state.stopCount : total;
  select.value = preferred;
  state.stopCount = preferred;
}

function selectStopCount(value) {
  const count = Number(value);
  if (!CarmenCore.stopCounts(QUIZ_PACK.locations.length).includes(count)) return;
  state.stopCount = count;
  sound.click();
}

function getPreferredPackId() {
  const savedPackId = storage.getItem(PACK_SELECTION_KEY);
  const savedPack = QUIZ_PACK_MANIFEST.packs.find((entry) => entry.id === savedPackId);
  return savedPack?.id || QUIZ_PACK_MANIFEST.defaultPackId;
}

function getPackEntry(packId) {
  return QUIZ_PACK_MANIFEST.packs.find((entry) => entry.id === packId) ||
    QUIZ_PACK_MANIFEST.packs.find((entry) => entry.id === QUIZ_PACK_MANIFEST.defaultPackId) ||
    QUIZ_PACK_MANIFEST.packs[0];
}

function updatePackSelectorUi(selectedPackId) {
  const selector = document.getElementById('packSelector');
  if (!selector) return;

  selector.innerHTML = '';
  QUIZ_PACK_MANIFEST.packs.forEach((entry) => {
    const option = document.createElement('option');
    option.value = entry.id;
    option.textContent = entry.title;
    selector.appendChild(option);
  });
  selector.value = selectedPackId;
  selector.disabled = QUIZ_PACK_MANIFEST.packs.length <= 1;
}

function setPackSelectorStatus(message) {
  setTextIfPresent('packSelectorStatus', message);
}

async function fetchJson(path) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch(path, { signal: controller.signal });
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    return await response.json();
  } finally { clearTimeout(timeout); }
}

async function selectQuizPackById(packId, options = {}) {
  const entry = getPackEntry(packId);
  const request = ++packRequest;
  setPackLoading(true);
  setPackSelectorStatus(`Loading ${entry.title}…`);
  try {
    const pack = entry.path ? await fetchJson(entry.path) : DEFAULT_QUIZ_PACK;
    if (request !== packRequest) return;
    validateQuizPack(pack);
    if (pack.id !== entry.id) throw new Error('Pack identity does not match the manifest.');
    cancelSession();
    resetMapForPackChange();
    applyQuizPack(pack);
    ACTIVE_PACK_ENTRY = entry;
    if (options.persist !== false) storage.setItem(PACK_SELECTION_KEY, entry.id);
    updatePackSelectorUi(entry.id);
    setPackSelectorStatus(`${entry.description || entry.title} Preview content: factual line review is pending.`);
  } catch (error) {
    if (request !== packRequest) return;
    cancelSession();
    resetMapForPackChange();
    applyQuizPack(DEFAULT_QUIZ_PACK);
    ACTIVE_PACK_ENTRY = DEFAULT_QUIZ_PACK_ENTRY;
    updatePackSelectorUi(DEFAULT_QUIZ_PACK.id);
    setPackSelectorStatus('Requested pack unavailable. Using the built-in Bentonville preview.');
    console.warn('Quiz pack could not load.', error);
  } finally {
    if (request === packRequest) { setPackLoading(false); checkResumeState(); }
  }
}

async function selectQuizPackFromControl(packId) {
  sound.click();
  await selectQuizPackById(packId);
}

async function loadQuizPack() {
  try {
    const manifest = await fetchJson('./data/quiz-packs.json');
    validateQuizPackManifest(manifest);
    QUIZ_PACK_MANIFEST = manifest;
    const preferredPackId = getPreferredPackId();
    updatePackSelectorUi(preferredPackId);
    await selectQuizPackById(preferredPackId, { persist: false });
  } catch (error) {
    QUIZ_PACK_MANIFEST = DEFAULT_QUIZ_PACK_MANIFEST;
    ACTIVE_PACK_ENTRY = DEFAULT_QUIZ_PACK_ENTRY;
    applyQuizPack(DEFAULT_QUIZ_PACK);
    updatePackSelectorUi(DEFAULT_QUIZ_PACK.id);
    setPackSelectorStatus('Pack manifest unavailable; using the built-in fallback quiz.');
    console.warn('Quiz pack manifest unavailable; using built-in fallback cases.', error);
    setPackLoading(false);
  }
}

const SCORE_RULES = CarmenCore.SCORE_RULES;

function getPuzzleScore(attemptsBeforeSolve, hintsUsed = 0) { return CarmenCore.getPuzzleScore(attemptsBeforeSolve, hintsUsed); }

function getStreakBonus(streak) { return CarmenCore.getStreakBonus(streak); }

function createRoundScore() {
  return { puzzle: 0, warrant: 0, streak: 0, total: 0 };
}

function addRoundPoints(kind, points) {
  state.roundScore[kind] += points;
  state.roundScore.total += points;
  state.score += points;
  updateHUD();
}

function isPerfectGame() {
  return state.history.length === LOCATIONS.length &&
         state.history.every(result => result.success && result.attempts === 1) &&
         state.lives === getStartingLives(state.difficulty);
}

function getStartingLives(difficulty) { return CarmenCore.getStartingLives(difficulty); }



function getLocationCasePool(location) {
  return QUESTION_BANK[location.id];
}

function createCaseSeed() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function createRunCaseVariantIds(seed = createCaseSeed()) {
  return CarmenRunGenerator.createRunCaseVariantIds(LOCATIONS, getLocationCasePool, seed);
}

function readLastRunCaseVariantIds() {
  try {
    const parsed = JSON.parse(storage.getItem(LAST_RUN_KEY));
    return Array.isArray(parsed) ? parsed : [];
  } catch(e) {
    return [];
  }
}

function createDistinctRun() {
  const lastRun = readLastRunCaseVariantIds();
  let seed = createCaseSeed();
  let caseVariantIds = createRunCaseVariantIds(seed);
  
  for (let attempt = 0; attempt < 5 && CarmenRunGenerator.arraysMatch(caseVariantIds, lastRun); attempt++) {
    seed = createCaseSeed();
    caseVariantIds = createRunCaseVariantIds(seed);
  }
  
  return { seed, caseVariantIds };
}

function ensureRunCaseVariants() {
  if (!Array.isArray(state.caseVariantIds) || state.caseVariantIds.length !== LOCATIONS.length) {
    state.caseSeed = state.caseSeed || createCaseSeed();
    state.caseVariantIds = createRunCaseVariantIds(state.caseSeed);
  }
}

function getLocationCase(locationIndex) {
  ensureRunCaseVariants();
  const location = LOCATIONS[locationIndex];
  const pool = getLocationCasePool(location);
  const selectedCase = pool.find(item => item.caseId === state.caseVariantIds[locationIndex]) || pool[0];

  return { ...location, ...selectedCase };
}

function getSuspect(loc) {
  return (loc.briefing && loc.briefing.suspect) || loc.henchman || null;
}

function renderSuspectCard(loc) {
  const card = document.getElementById('suspectCard');
  if (!card) return;
  const suspect = getSuspect(loc);
  if (!suspect) {
    card.classList.add('hidden');
    return;
  }
  card.classList.remove('hidden');
  document.getElementById('suspectMugshot').textContent = suspect.emoji || '🕵️';
  document.getElementById('suspectName').textContent = suspect.name || 'Unknown accomplice';
  const aliasWrapper = document.getElementById('suspectAliasWrapper');
  const aliasNode = document.getElementById('suspectAlias');
  if (suspect.alias) {
    aliasNode.textContent = suspect.alias;
    aliasWrapper.classList.remove('hidden');
  } else {
    aliasNode.textContent = '';
    aliasWrapper.classList.add('hidden');
  }
  document.getElementById('suspectRole').textContent = suspect.role || '';
  document.getElementById('suspectDossier').textContent = suspect.dossierNote || '';
}

function getAllWarrantChoices(field) {
  // Only this stop's suspects are relevant. Location is already established.
  const location = LOCATIONS[state.currentLocationIndex];
  return [...new Set(getLocationCasePool(location).map(item=>item.warrantAnswers[field]))].sort();
}

// ============================================================
// GAME STATE MANAGEMENT
// ============================================================
let state = {
  phase: 'idle',
  inputLocked: false,
  optionOrder: [],
  wrongOptions: [],
  warrantSelection: {},
  difficulty: 'detective',
  currentLocationIndex: 0,
  score: 0,
  lives: 5,
  streak: 0,
  puzzleSolved: false,
  puzzleAttempts: 0,
  hintsUsedInRound: 0,
  totalHintsUsed: 0,
  roundScore: createRoundScore(),
  warrantIssued: false,
  clueTokens: [],
  history: [],
  stopCount: null,
  caseSeed: '',
  caseVariantIds: [],
  activeTab: 'dossier',
  finalConfrontationRound: 1,
  activePuzzleCorrectIndex: 0,
  activeFinalCorrectIndex: 0,
  isFinalConfrontation: false,
  settings: {
    sound: true,
    reducedMotion: false,
    highContrast: false,
    textRoute: false
  }
};

// ============================================================
// AUDIO SYNTHESIZER (Web Audio API)
// ============================================================
const sound = {
  ctx: null,
  init() {
    if (this.ctx || !state.settings.sound) return;
    try { const Audio = window.AudioContext || window.webkitAudioContext; if (Audio) this.ctx = new Audio(); } catch { this.ctx = null; }
  },
  playTone(freq, type, duration, delay = 0) {
    this.init();
    if (!state.settings.sound || !this.ctx) return;
    
    schedule(() => {
      if (!state.settings.sound) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
        
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        console.error(e);
      }
    }, delay);
  },
  click() { this.playTone(600, 'sine', 0.05); },
  success() {
    this.playTone(523.25, 'triangle', 0.12, 0); // C5
    this.playTone(659.25, 'triangle', 0.12, 80); // E5
    this.playTone(783.99, 'triangle', 0.25, 160); // G5
  },
  fail() {
    this.playTone(220, 'sawtooth', 0.25, 0); // A3
    this.playTone(180, 'sawtooth', 0.35, 150); // F#3
  },
  stamp() {
    this.playTone(130, 'triangle', 0.1, 0);
    this.playTone(90, 'sine', 0.15, 40);
  },
  travel() {
    this.init();
    if (!state.settings.sound || !this.ctx) return;
    try {
      const bufferSize = this.ctx.sampleRate * 0.8;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(150, this.ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(1500, this.ctx.currentTime + 0.3);
      filter.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.8);
      
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
      
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start();
    } catch(e) {}
  }
};

// ============================================================
// SYSTEM BOOT & MAIN NAV
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
  loadSettings();
  initBgParticles();
  window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', initBgParticles);
  window.addEventListener('storage', handleSaveChange);
  initializeAccessibility();
  
  // Keyboard Event Listeners
  document.addEventListener('keydown', (e) => {
    if (activeModal || e.ctrlKey || e.metaKey || e.altKey || e.target.closest('input, select, textarea, button, [contenteditable]')) return;
    const key = e.key.toLowerCase();
    const puzzleTabActive = (state.activeTab === 'puzzle' && !document.getElementById('gameScreen').classList.contains('hidden'));
    
    if (puzzleTabActive && !state.puzzleSolved && !state.inputLocked) {
      const indexByKey = { a: 0, 1: 0, b: 1, 2: 1, c: 2, 3: 2, d: 3, 4: 3 };
      if (key in indexByKey) {
        const idx = indexByKey[key];
        const buttons = document.querySelectorAll('.option-btn');
        if (buttons[idx] && buttons[idx].disabled) return; // respect locked buttons during answer timeout
        if (state.isFinalConfrontation) {
          selectFinalChoice(idx, state.activeFinalCorrectIndex);
        } else {
          selectChoice(idx);
        }
      }
    }
  });
  await loadQuizPack();
  checkResumeState();
});

function handleSaveChange(event) {
  if (event.key !== SAVE_KEY && event.key !== null) return;
  const running = ['investigation','between','final'].includes(state.phase);
  if (activeModal) closeModal(activeModal);
  resetSaveSnapshot = undefined;
  if (running) { cancelSession(); showScreen('titleScreen'); }
  checkResumeState();
  announce('Progress changed in another tab. Resume the latest save or start a new case.');
}

function checkResumeState() {
  const rawSave = readSavedGame();
  const hasSave = storage.getItem(SAVE_KEY) !== null;
  const validSave = getValidSave();
  const saveBelongsToOtherPack = Boolean(rawSave?.quizPackId && rawSave.quizPackId !== QUIZ_PACK.id);
  if (validSave && !packLoading) {
    document.getElementById('resumeButton').classList.remove('hidden');
  } else {
    document.getElementById('resumeButton').classList.add('hidden');
  }
  const clearButton = document.getElementById('clearBrokenSaveButton');
  if (clearButton) {
    clearButton.classList.toggle('hidden', !hasSave || Boolean(validSave) || saveBelongsToOtherPack);
  }
}

function clearBrokenSave() {
  const raw = storage.getItem(SAVE_KEY);
  const saved = readSavedGame();
  if (getValidSave() || (saved?.quizPackId && saved.quizPackId !== QUIZ_PACK.id)) { checkResumeState(); return; }
  if (storage.getItem(SAVE_KEY) === raw) storage.removeItem(SAVE_KEY);
  checkResumeState();
}

function loadSettings() {
  const localSettings = storage.getItem(SETTINGS_KEY);
  if (localSettings) {
    try {
      const parsed = JSON.parse(localSettings);
      state.settings.sound = typeof parsed?.sound === 'boolean' ? parsed.sound : true;
      state.settings.reducedMotion = parsed.reducedMotion === true;
      state.settings.highContrast = parsed.highContrast === true;
      state.settings.textRoute = parsed.textRoute === true;
    } catch(e) {}
  }
  applySettings();
}

function saveSettings() {
  storage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
}

function applySettings() {
  document.body.classList.toggle('reduced-motion', state.settings.reducedMotion);
  document.body.classList.toggle('high-contrast', state.settings.highContrast);
  updateSoundIcon();
  updateMotionIcon();
  updateContrastIcon();
  const routeButton=document.getElementById('routeToggle');
  routeButton.setAttribute('aria-pressed',String(state.settings.textRoute));
  routeButton.textContent=state.settings.textRoute ? 'Text route: on' : 'Text route: off';
  initBgParticles();
}

function toggleAudio() {
  state.settings.sound = !state.settings.sound;
  saveSettings();
  applySettings();
  sound.click();
}

function updateSoundIcon() {
  const icon = document.getElementById('soundToggle');
  icon.textContent = state.settings.sound ? '🔊' : '🔇';
  icon.setAttribute('aria-label', state.settings.sound ? 'Turn sound off' : 'Turn sound on');
  icon.classList.toggle('text-slate-400', !state.settings.sound);
  icon.classList.toggle('text-white', state.settings.sound);
}

function toggleReducedMotion() {
  state.settings.reducedMotion = !state.settings.reducedMotion;
  saveSettings();
  applySettings();
  sound.click();
}

function updateMotionIcon() {
  const icon = document.getElementById('motionToggle');
  if (!icon) return;
  icon.textContent = state.settings.reducedMotion ? 'NO MOT' : 'MOT';
  icon.setAttribute('aria-label', state.settings.reducedMotion ? 'Turn reduced motion off' : 'Turn reduced motion on');
  icon.classList.toggle('text-amber-400', state.settings.reducedMotion);
  icon.classList.toggle('text-slate-400', !state.settings.reducedMotion);
}

function toggleHighContrast() {
  state.settings.highContrast = !state.settings.highContrast;
  saveSettings();
  applySettings();
  sound.click();
}

function updateContrastIcon() {
  const icon = document.getElementById('contrastToggle');
  if (!icon) return;
  icon.textContent = state.settings.highContrast ? 'HC ON' : 'HC';
  icon.setAttribute('aria-label', state.settings.highContrast ? 'Turn high contrast off' : 'Turn high contrast on');
  icon.classList.toggle('text-amber-400', state.settings.highContrast);
  icon.classList.toggle('text-slate-400', !state.settings.highContrast);
}

function shouldReduceMotion() {
  return state.settings.reducedMotion || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function showScreen(screenId) {
  ['titleScreen','difficultyScreen','gameScreen','betweenScreen','resultsScreen'].forEach(id => document.getElementById(id).classList.toggle('hidden',id !== screenId));
  const target = document.getElementById(screenId);
  target.tabIndex = -1;
  if (!activeModal) target.focus({preventScroll: true});
  if (screenId === 'gameScreen') schedule(invalidateMapSize, 100);
}

function goToTitle() {
  cancelSession();
  sound.click();
  showScreen('titleScreen');
  checkResumeState();
}

function goToDifficultySelect() {
  if (packLoading) return;
  cancelSession();
  updateStopCountOptions();
  sound.click();
  showScreen('difficultyScreen');
}

// ============================================================
// GAME FLOW INITIATION
// ============================================================
function selectDifficulty(diff) {
  if (packLoading || !['rookie','detective','inspector'].includes(diff)) return;
  cancelSession();
  sessionSaveSnapshot=storage.getItem(SAVE_KEY);
  sound.success();
  state.stopCount = state.stopCount || QUIZ_PACK.locations.length;
  LOCATIONS = getRunLocationsForStopCount(state.stopCount);
  const run = createDistinctRun();
  state.difficulty = diff;
  state.currentLocationIndex = 0;
  state.score = 0;
  state.streak = 0;
  state.hintsUsedInRound = 0;
  state.totalHintsUsed = 0;
  state.roundScore = createRoundScore();
  state.clueTokens = [];
  state.history = [];
  state.caseSeed = run.seed;
  state.caseVariantIds = run.caseVariantIds;
  state.isFinalConfrontation = false;
  state.finalConfrontationRound = 1;
  
  state.lives = getStartingLives(diff);
  
  startLocation();
}

function resumeGame() {
  if (packLoading) return;
  const snapshot = storage.getItem(SAVE_KEY);
  let parsed;
  try { parsed = JSON.parse(snapshot); } catch { checkResumeState(); return; }
  if (!CarmenCore.validateSave(parsed, QUIZ_PACK)) { checkResumeState(); return; }
  cancelSession();
  sessionSaveSnapshot=snapshot;
  if (!ownsCurrentSave()) return;
  // Only copy persisted game fields, never settings or runtime handles.
  SAVE_FIELDS.forEach(key => { state[key] = parsed[key]; });
  LOCATIONS = getRunLocationsForStopCount(state.stopCount);
  state.inputLocked = false;
  if (state.lives === 0) { triggerGameOver(); return; }
  if (state.phase === 'between') { triggerTransitionRound(); return; }
  if (state.phase === 'final') {
    startFinalConfrontationRound(true);
  } else startLocation(true);
}

function readSavedGame() {
  try {
    return JSON.parse(storage.getItem(SAVE_KEY));
  } catch(e) {
    return null;
  }
}



function getRunLocationsForStopCount(stopCount) {
  if (!CarmenCore.stopCounts(QUIZ_PACK.locations.length).includes(stopCount)) throw new Error('Invalid run length.');
  return QUIZ_PACK.locations.slice(0, stopCount);
}

function getValidSave() {
  const parsed = readSavedGame();
  return CarmenCore.validateSave(parsed, QUIZ_PACK) ? parsed : null;
}



const SAVE_FIELDS = ['phase','difficulty','currentLocationIndex','score','lives','streak','puzzleSolved','puzzleAttempts',
  'hintsUsedInRound','totalHintsUsed','roundScore','warrantIssued','clueTokens','history','stopCount','caseSeed',
  'caseVariantIds','isFinalConfrontation','finalConfrontationRound','optionOrder','wrongOptions','activeTab','warrantSelection'];

function ownsCurrentSave() {
  if (storage.getItem(SAVE_KEY) === sessionSaveSnapshot) return true;
  handleSaveChange({key:SAVE_KEY});
  return false;
}

function saveGame() {
  if (!['investigation','between','final'].includes(state.phase) || !ownsCurrentSave()) return false;
  const saved = {schemaVersion: SAVE_SCHEMA_VERSION, quizPackId: QUIZ_PACK.id, contentVersion: QUIZ_PACK.contentVersion};
  SAVE_FIELDS.forEach(key => { saved[key] = state[key]; });
  sessionSaveSnapshot=JSON.stringify(saved);
  storage.setItem(SAVE_KEY, sessionSaveSnapshot);
  return true;
}


function renderCaseHistorySummary() {
  if (!state.history.length) return '';
  return `
    <div class="glass rounded-2xl p-5 border border-white/10 mt-6 max-w-2xl mx-auto text-left shadow-2xl">
      <p class="text-xs uppercase tracking-wider font-black text-slate-400 mb-3">Case History</p>
      <div class="grid gap-2">
        ${state.history.map((entry, index) => `
          <div class="flex justify-between gap-3 text-xs bg-white/10 p-2 border border-white/10">
            <span class="font-bold">${index + 1}. ${escapeHtml(entry.location)}</span>
            <span>${entry.attempts} attempt${entry.attempts === 1 ? '' : 's'} / +${entry.points}</span>
          </div>
          ${renderExplanation(getLocationCase(index))}
        `).join('')}
      </div>
    </div>
  `;
}

// ============================================================
// ROUND SETUP & INITIALIZATION
// ============================================================
function startLocation(restoring = false) {
  const restoredTab = state.activeTab;
  if (!restoring) resetRound('investigation');
  document.getElementById('submitWarrantBtn').disabled = false;
  document.getElementById('finalContinueBtn').hidden = true;
  document.getElementById('puzzleFeedback').textContent = '';
  document.getElementById('warrantFeedback').textContent = '';
  document.getElementById('beginInvestigationBtn').disabled = false;
  updateHUD(); drawMapGrid();
  ['Dossier','Clues','Puzzle'].forEach(name => document.getElementById(`tab${name}`).disabled = false);
  document.getElementById('tabWarrant').disabled = !state.puzzleSolved;
  document.getElementById('reviewCluesBtn').disabled = false;
  document.getElementById('goToPuzzleBtn').disabled = false;
  const warrantBtn = document.getElementById('goToWarrantBtn');
  warrantBtn.hidden = false;
  warrantBtn.disabled = !state.puzzleSolved;
  warrantBtn.classList.toggle('opacity-50', !state.puzzleSolved);
  warrantBtn.classList.toggle('cursor-not-allowed', !state.puzzleSolved);
  resetHintPanel();
  const loc = getLocationCase(state.currentLocationIndex);
  document.getElementById('caseCityNumber').textContent = `Location ${state.currentLocationIndex+1} of ${LOCATIONS.length}`;
  document.getElementById('briefingHeadline').textContent = loc.briefing.headline;
  document.getElementById('briefingReport').textContent = loc.briefing.report;
  document.getElementById('callingCardNote').textContent = loc.briefing.callingCard;
  renderSuspectCard(loc);
  loc.clues.forEach((clue,i) => document.getElementById(`clueText${i}`).textContent = clue);
  document.getElementById('puzzleTitleText').textContent = loc.puzzle.title;
  document.getElementById('puzzleDescription').textContent = loc.puzzle.description;
  document.getElementById('puzzleQuestionText').textContent = loc.puzzle.question;
  renderPuzzleVisual(loc); buildPuzzleOptions(loc.puzzle); updateHintButton(); buildWarrantDropdowns(loc);
  document.getElementById('warrantStampOverlay').classList.add('hidden');
  if (state.hintsUsedInRound) showUsedHints(loc);
  renderTokenGrid(); showScreen('gameScreen'); switchTab(restoring ? restoredTab : 'dossier');
  if (state.puzzleSolved) document.getElementById('puzzleFeedback').textContent='Puzzle solved. '+loc.puzzle.explanation+' Choose Continue to prepare the warrant.';
  if (!saveGame()) return;
}

function updateHUD() {
  document.getElementById('hudRank').textContent = getRankString(state.score);
  document.getElementById('hudScore').innerHTML = `Score: <span class="text-amber-400 font-extrabold">${String(state.score).padStart(4, '0')}</span>`;
  
  const container = document.getElementById('livesContainer');
  container.innerHTML = '';
  container.setAttribute('aria-label', `${state.lives} lives remaining`);
  for (let i = 0; i < state.lives; i++) {
    const magnifier = document.createElement('span');
    magnifier.className = 'text-amber-400 text-sm';
    magnifier.textContent = '🔍';
    magnifier.setAttribute('aria-hidden','true');
    container.appendChild(magnifier);
  }
}

function getRankString(score) {
  if (score >= 2000) return '🏆 Chief Inspector';
  if (score >= 1500) return '⭐ Senior Detective';
  if (score >= 1000) return '🔍 Detective';
  if (score >= 500) return '🕵️ Rookie Detective';
  return '📋 Rookie';
}

// ============================================================
// TAB NAVIGATION SKELETON
// ============================================================
function unlockAndGoToPuzzle() {
  sound.success();
  switchTab('puzzle');
}

function switchTab(tabName) {
  const button = document.getElementById(`tab${tabName.charAt(0).toUpperCase()+tabName.slice(1)}`);
  if (!button || button.disabled || !['investigation','final'].includes(state.phase)) return;
  sound.click();
  state.activeTab = tabName;
  if (!saveGame()) return;
  
  ['dossier', 'clues', 'puzzle', 'warrant'].forEach(name => {
    const tabBtn = document.getElementById(`tab${name.charAt(0).toUpperCase() + name.slice(1)}`);
    const content = document.getElementById(`content${name.charAt(0).toUpperCase() + name.slice(1)}`);
    
    tabBtn.setAttribute('aria-selected', String(name === tabName));
    tabBtn.tabIndex = name === tabName ? 0 : -1;
    if (name === tabName) {
      tabBtn.classList.add('active');
      content.classList.remove('hidden');
    } else {
      tabBtn.classList.remove('active');
      content.classList.add('hidden');
    }
  });
  if (!activeModal) button.focus({preventScroll: true});
}

// ============================================================
// PUZZLE ENGINE DECORATORS (TAB 3)
// ============================================================
function renderPuzzleVisual(loc) {
  const container = document.getElementById('puzzleVisualContainer');
  container.innerHTML = '';
  container.setAttribute('role', 'group');
  container.setAttribute('aria-label', 'Puzzle evidence');
  
  if (loc.puzzle.visualHtml) {
    container.innerHTML = loc.puzzle.visualHtml;
    return;
  }
  
  const symbol = loc.token || LOCATION_SYMBOLS[loc.id] || { char: '📍', name: loc.name };
  container.innerHTML = `
    <div class="w-full text-center space-y-2">
      <div class="text-5xl" aria-hidden="true">${symbol.char}</div>
      <div class="typewriter-font text-[10px] bg-slate-950 text-amber-400 p-2 rounded border border-slate-700 leading-tight uppercase font-bold text-left shadow-inner">
        ${QUIZ_PACK.evidenceLabel}<br>
        STOP: ${loc.name}<br>
        TOKEN: ${symbol.name}
      </div>
      <div class="typewriter-font text-xs font-bold border-2 border-dashed border-red-700 p-3 rounded text-red-900 bg-red-50 inline-block rotate-[-2deg]">
        ${loc.puzzle.title}
      </div>
    </div>
  `;
  return;
}

function getHintLimit() {
  if (state.difficulty === 'rookie') return 3;
  if (state.difficulty === 'detective') return 2;
  return 0;
}

function getHintTexts(loc) {
  if (Array.isArray(loc.puzzle.hints) && loc.puzzle.hints.length > 0) {
    return loc.puzzle.hints;
  }
  
  const correctOption = loc.puzzle.options[loc.puzzle.correctIndex];
  return [
    loc.learningObjective || 'Use at least two evidence clues together before choosing an answer.',
    `Focus on evidence pointing to ${loc.warrantAnswers.hideout} and the ${loc.warrantAnswers.disguise} disguise.`,
    `The strongest match is ${correctOption}.`
  ];
}

function resetHintPanel() {
  const panel = document.getElementById('hintPanel');
  if (panel) {
    panel.classList.add('hidden');
    panel.textContent = '';
  }
}

function updateHintButton() {
  const hintButton = document.getElementById('hintButton');
  if (!hintButton) return;
  
  if (state.isFinalConfrontation) {
    hintButton.disabled = true;
    hintButton.textContent = 'No Hints In Final';
    hintButton.classList.add('opacity-50', 'cursor-not-allowed');
    return;
  }
  
  const limit = getHintLimit();
  const hintsRemaining = Math.max(0, limit - state.hintsUsedInRound);
  hintButton.disabled = limit === 0 || state.puzzleSolved || hintsRemaining === 0;
  hintButton.textContent = limit === 0
    ? 'Hint: unavailable in Inspector'
    : `Hint (${hintsRemaining}/${limit})`;
  hintButton.classList.toggle('opacity-50', hintButton.disabled);
  hintButton.classList.toggle('cursor-not-allowed', hintButton.disabled);
  hintButton.setAttribute('aria-label', `Hint. ${hintsRemaining} hints remaining. Each hint costs ${SCORE_RULES.hintPenalty} points.`);
}

function requestHint() {
  if (state.phase !== 'investigation' || state.inputLocked || state.puzzleSolved || state.isFinalConfrontation) return;
  
  const limit = getHintLimit();
  if (state.hintsUsedInRound >= limit) {
    updateHintButton();
    return;
  }
  
  sound.click();
  const loc = getLocationCase(state.currentLocationIndex);
  const hints = getHintTexts(loc);
  const hintText = hints[Math.min(state.hintsUsedInRound, hints.length - 1)];
  
  state.hintsUsedInRound++;
  state.totalHintsUsed++;
  if (!saveGame()) return;
  
  const panel = document.getElementById('hintPanel');
  panel.classList.remove('hidden');
  panel.innerHTML = `<strong>Hint ${state.hintsUsedInRound}:</strong> ${escapeHtml(hintText)} <span class="block mt-1 text-[10px] uppercase font-bold text-red-800">-${SCORE_RULES.hintPenalty} potential puzzle points</span>`;
  announce(`Hint ${state.hintsUsedInRound}: ${hintText}`);
  updateHintButton();
}

// Fisher-Yates: return options reordered with the new index of the correct answer.
// Authored packs almost always list the answer first; without this the game is
// beatable by always pressing A.
function shuffleOptions(options, correctIndex) {
  if (state.optionOrder.length !== options.length) {
    const random = CarmenRunGenerator.createSeededRandom(`${state.caseSeed}:${state.currentLocationIndex}:${state.isFinalConfrontation ? state.finalConfrontationRound : 'case'}`);
    state.optionOrder = options.map((_,i) => i);
    for (let i=options.length-1;i>0;i--) { const j=Math.floor(random()*(i+1)); [state.optionOrder[i],state.optionOrder[j]]=[state.optionOrder[j],state.optionOrder[i]]; }
  }
  return {options: state.optionOrder.map(i => options[i]), correctIndex: state.optionOrder.indexOf(correctIndex)};
}

function buildPuzzleOptions(puzzle) {
  const container = document.getElementById('puzzleOptionsGrid');
  container.innerHTML = '';

  const shuffled = shuffleOptions(puzzle.options, puzzle.correctIndex);
  state.activePuzzleCorrectIndex = shuffled.correctIndex;
  shuffled.options.forEach((opt, idx) => {
    const letters = ['A', 'B', 'C', 'D'];
    const btn = document.createElement('button');
    btn.className = 'option-btn w-full text-left p-3 border border-slate-300 bg-white/70 hover:bg-white text-slate-900 rounded-lg text-xs md:text-sm font-semibold flex items-center shadow-sm';
    btn.onclick = () => selectChoice(idx);
    btn.setAttribute('aria-label', `Answer ${letters[idx]}: ${opt}`);
    btn.innerHTML = `<span class="bg-slate-950 text-white font-bold rounded-full answer-key mr-3">Answer ${letters[idx]}</span> <span class="flex-grow">${escapeHtml(opt)}</span>`;
    btn.disabled = state.puzzleSolved || state.wrongOptions.includes(idx);
    btn.classList.toggle('wrong',state.wrongOptions.includes(idx));
    btn.classList.toggle('correct',state.puzzleSolved && idx === shuffled.correctIndex);
    container.appendChild(btn);
  });
}

function selectChoice(index) {
  const buttons = document.querySelectorAll('.option-btn');
  if (state.phase !== 'investigation' || state.inputLocked || state.puzzleSolved || !buttons[index] || buttons[index].disabled) return;
  state.inputLocked = true;
  buttons.forEach(btn => btn.disabled = true);
  if (index === state.activePuzzleCorrectIndex) {
    sound.success(); buttons[index].classList.add('correct'); state.puzzleSolved = true;
    addRoundPoints('puzzle',getPuzzleScore(state.puzzleAttempts,state.hintsUsedInRound)); updateHintButton();
    document.getElementById('tabWarrant').disabled = false;
    const btn = document.getElementById('goToWarrantBtn'); btn.disabled = false; btn.classList.remove('opacity-50','cursor-not-allowed');
    state.inputLocked=false; if (!saveGame()) return;
    const message='Puzzle solved. '+getLocationCase(state.currentLocationIndex).puzzle.explanation+' Choose Continue to prepare the warrant.';
    document.getElementById('puzzleFeedback').textContent=message; announce(message);
  } else {
    sound.fail(); buttons[index].classList.add('wrong'); state.wrongOptions.push(index); state.puzzleAttempts++; state.lives--;
    updateHUD(); if (!saveGame()) return; announce(`Incorrect answer. ${state.lives} lives remaining.`);
    schedule(() => { if (state.lives === 0) triggerGameOver(); else { state.inputLocked=false; buttons.forEach((btn,i) => btn.disabled=state.wrongOptions.includes(i)); } },650);
  }
}

// ============================================================
// WARRANT DATABASE (TAB 4)
// ============================================================
function buildWarrantDropdowns(currentLoc) {
  ['city','hideout','disguise'].forEach(field => {
    const select = document.getElementById(`warrant${field[0].toUpperCase()+field.slice(1)}`);
    select.innerHTML = '';
    const placeholder = document.createElement('option'); placeholder.value=''; placeholder.textContent=`Select ${field}`; select.appendChild(placeholder);
    getAllWarrantChoices(field).forEach(value => { const option=document.createElement('option'); option.value=value; option.textContent=value; select.appendChild(option); });
    select.disabled=field === 'city';
    select.value=select.disabled ? currentLoc.warrantAnswers.city : state.warrantSelection[field] || '';
    if (select.disabled) state.warrantSelection[field]=select.value;
    select.onchange=() => {state.warrantSelection[field]=select.value; if (!saveGame()) return;};
  });
}

function submitWarrant() {
  if (state.phase !== 'investigation' || state.isFinalConfrontation || !state.puzzleSolved || state.warrantIssued || state.inputLocked) return;
  const cityVal = document.getElementById('warrantCity').value;
  const hideoutVal = document.getElementById('warrantHideout').value;
  const disguiseVal = document.getElementById('warrantDisguise').value;
  
  const currentLoc = getLocationCase(state.currentLocationIndex);
  
  if (!cityVal || !hideoutVal || !disguiseVal) {
    sound.fail();
    announce('Complete all three warrant fields before submitting.');
    return;
  }
  
  state.inputLocked = true;
  document.getElementById('submitWarrantBtn').disabled = true;
  const matches = (cityVal === currentLoc.warrantAnswers.city &&
                   hideoutVal === currentLoc.warrantAnswers.hideout &&
                   disguiseVal === currentLoc.warrantAnswers.disguise);
                   
  const overlay = document.getElementById('warrantStampOverlay');
  const stamp = document.getElementById('warrantStamp');
  
  if (matches) {
    sound.stamp();
    overlay.classList.remove('hidden');
    stamp.className = 'stamp text-5xl font-black px-8 py-3 rounded-xl border-4 transform -rotate-12 bg-white/95 shadow-2xl border-emerald-600 text-emerald-600 stamp-anim';
    stamp.textContent = 'APPROVED';
    
    addRoundPoints('warrant', SCORE_RULES.warrant);
    state.streak++;
    const streakBonus = getStreakBonus(state.streak);
    if (streakBonus > 0) {
      addRoundPoints('streak', streakBonus);
    }
    state.warrantIssued = true;
    document.getElementById('submitWarrantBtn').disabled = true;

    if (!state.clueTokens.includes(currentLoc.id)) {
      state.clueTokens.push(currentLoc.id);
    }
    
    state.history.push({
      location: currentLoc.name,
      caseId: currentLoc.caseId,
      success: true,
      attempts: state.puzzleAttempts + 1,
      points: state.roundScore.total
    });
    
    state.phase = 'between';
    if (!saveGame()) return;
    announce('Warrant approved. Accomplice captured.');

    state.inputLocked=false;
    document.getElementById('warrantStampOverlay').classList.add('hidden');
    triggerTransitionRound();
  } else {
    sound.fail();
    overlay.classList.remove('hidden');
    stamp.className = 'stamp text-5xl font-black px-8 py-3 rounded-xl border-4 transform -rotate-12 bg-white/95 shadow-2xl border-red-600 text-red-600 stamp-anim';
    stamp.textContent = 'REJECTED';
    announce('Warrant rejected. One life lost. Review the evidence.');
    
    state.lives--;
    state.streak = 0;
    updateHUD();
    if (!saveGame()) return;

    if (state.lives <= 0) {
      schedule(() => {
        triggerGameOver();
      }, 1500);
    } else {
      schedule(() => {
        overlay.classList.add('hidden');
        state.inputLocked = false;
        document.getElementById('submitWarrantBtn').disabled = false;
      }, 1500);
    }
  }
}

// ============================================================
// TRANSITIONS AND ROUND OVER FLOWS
// ============================================================
function triggerTransitionRound() {
  if (state.phase !== 'between') return;
  state.inputLocked = false;
  const currentLoc = getLocationCase(state.currentLocationIndex);
  const container = document.getElementById('betweenContent');

  sound.travel();

  const detailRows = [
    ['Puzzle', state.roundScore.puzzle],
    ['Warrant', state.roundScore.warrant],
    ['Streak', state.roundScore.streak]
  ].filter(([, points]) => points > 0);

  const scoreDetails = `<div class="glass rounded-xl p-4 inline-block mx-auto text-center border border-white/10 shadow-lg">
    <p class="text-slate-400 text-xs uppercase tracking-wider font-semibold">ACME Merits Awarded</p>
    <p class="text-3xl font-black text-amber-400">+${state.roundScore.total} Points</p>
    <div class="mt-2 space-y-1 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
      ${detailRows.map(([label, points]) => `<div>${label}: +${points}</div>`).join('')}
    </div>
    ${state.streak > 1 ? `<p class="text-emerald-400 text-xs font-bold mt-2">${state.streak}x Capture Streak</p>` : ''}
  </div>`;

  const suspect = getSuspect(currentLoc);
  const headline = suspect ? `${suspect.alias || suspect.name} APPREHENDED!` : 'ACCOMPLICE BOOKED!';
  const successCopy = suspect
    ? `<span class="text-amber-400 font-extrabold">${escapeHtml(suspect.name)}</span> is in ACME custody. Carmen's network in <span class="text-amber-400 font-extrabold">${escapeHtml(currentLoc.name)}</span> just lost an operative.`
    : `Excellent work! You cornered and detained the suspect in <span class="text-amber-400 font-extrabold">${escapeHtml(currentLoc.name)}</span>!`;
  const nextLeadBlock = (currentLoc.briefing && currentLoc.briefing.nextLead)
    ? `<div class="glass rounded-xl p-4 text-left max-w-md mx-auto shadow-xl">
        <p class="text-[10px] uppercase tracking-widest font-black text-amber-700 mb-1">Seized From Suspect — Next Lead</p>
        <p class="text-slate-900 text-xs leading-relaxed italic">${state.currentLocationIndex === LOCATIONS.length-1 ? 'Your selected route is complete. Return to ACME headquarters for the final report.' : escapeHtml(currentLoc.briefing.nextLead)}</p>
      </div>`
    : '';

  container.innerHTML = `
    <div class="text-6xl mb-4">🎉</div>
    <h3 class="title-font text-4xl font-extrabold text-emerald-400 leading-tight tracking-wide">
      ${escapeHtml(headline)}
    </h3>
    <p class="text-slate-200 text-lg">
      ${successCopy}
    </p>

    ${scoreDetails}

    ${nextLeadBlock}
    ${renderExplanation(currentLoc)}

    <div class="glass rounded-xl p-5 border border-white/10 text-left max-w-md mx-auto shadow-xl">
      <div class="flex items-center gap-2 border-b border-white/5 pb-2 mb-2">
        <span class="text-lg">Did You Know? 🎓</span>
      </div>
      <p class="text-slate-300 text-xs leading-relaxed italic">"${escapeHtml(currentLoc.funFact)}"</p>
    </div>
  `;
  
  {
    showScreen('betweenScreen');
    
    const nextBtn = document.getElementById('nextRoundBtn');
    if (state.currentLocationIndex >= LOCATIONS.length - 1) {
      nextBtn.textContent = 'Continue: final report';
      nextBtn.onclick = triggerFinalConfrontationFlow;
    } else {
      nextBtn.textContent = 'Continue: next location';
      nextBtn.onclick = nextRound;
    }
  }
}

function nextRound() {
  if (state.phase !== 'between' || state.currentLocationIndex >= LOCATIONS.length-1) return;
  sessionScheduler.cancel();
  state.currentLocationIndex++;
  startLocation();
}

function triggerFinalConfrontationFlow() {
  if (state.phase !== 'between' || state.currentLocationIndex !== LOCATIONS.length-1) return;
  sessionScheduler.cancel();
  state.isFinalConfrontation = true;
  state.finalConfrontationRound = 1;
  startFinalConfrontationRound();
}

function startFinalConfrontationRound(restoring = false) {
  if (!restoring) resetRound('final');
  state.activeTab = 'puzzle';
  updateHUD();
  drawMapGrid();
  renderTokenGrid();

  const suspectCard = document.getElementById('suspectCard');
  if (suspectCard) suspectCard.classList.add('hidden');

  document.getElementById('finalContinueBtn').hidden = !state.puzzleSolved;
  document.getElementById('goToWarrantBtn').hidden = true;
  document.getElementById('goToWarrantBtn').disabled = true;
  document.getElementById('beginInvestigationBtn').disabled = true;
  document.getElementById('reviewCluesBtn').disabled = true;
  document.getElementById('tabDossier').disabled = true;
  document.getElementById('tabClues').disabled = true;
  document.getElementById('tabPuzzle').disabled = false;
  document.getElementById('tabWarrant').disabled = true;
  
  showScreen('gameScreen');
  switchTab('puzzle');
  resetHintPanel();
  updateHintButton();
  
  const container = document.getElementById('puzzleVisualContainer');
  container.innerHTML = '';
  
  const puzzleTitle = document.getElementById('puzzleTitleText');
  const puzzleQuestion = document.getElementById('puzzleQuestionText');
  const rounds = getFinalConfrontationRounds();
  const round = rounds[state.finalConfrontationRound - 1] || rounds[0];
  const finalTitle = QUIZ_PACK.finalConfrontation.title;
  
  puzzleTitle.textContent = `${finalTitle} - Round ${state.finalConfrontationRound} of ${rounds.length}`;
  container.setAttribute('role','group');
  container.setAttribute('aria-label', 'Final report evidence');
  document.getElementById('puzzleDescription').textContent = round.description;
  container.innerHTML = round.visualHtml || '';
  puzzleQuestion.textContent = round.question;
  buildCustomOptions(round.options, round.correctIndex);
  document.getElementById('puzzleFeedback').textContent=state.puzzleSolved ? round.explanation+' Choose Continue when ready.' : '';
  if (!saveGame()) return;
}

function getFinalConfrontationRounds() {
  return CarmenCore.finalRounds(QUIZ_PACK, LOCATIONS, state.caseVariantIds);
}

function buildCustomOptions(options, correctIdx) {
  const container = document.getElementById('puzzleOptionsGrid');
  container.innerHTML = '';

  const shuffled = shuffleOptions(options, correctIdx);
  state.activeFinalCorrectIndex = shuffled.correctIndex;
  shuffled.options.forEach((opt, idx) => {
    const letters = ['A', 'B', 'C', 'D'];
    const btn = document.createElement('button');
    btn.className = 'option-btn w-full text-left p-3 border border-slate-300 bg-white/70 hover:bg-white text-slate-900 rounded-lg text-xs md:text-sm font-semibold flex items-center shadow-sm';
    btn.onclick = () => selectFinalChoice(idx, shuffled.correctIndex);
    btn.setAttribute('aria-label', `Answer ${letters[idx]}: ${opt}`);
    btn.innerHTML = `<span class="bg-slate-950 text-white font-bold rounded-full answer-key mr-3">Answer ${letters[idx]}</span> <span class="flex-grow">${escapeHtml(opt)}</span>`;
    btn.disabled = state.puzzleSolved || state.wrongOptions.includes(idx);
    btn.classList.toggle('wrong',state.wrongOptions.includes(idx));
    btn.classList.toggle('correct',state.puzzleSolved && idx === shuffled.correctIndex);
    container.appendChild(btn);
  });
}

function selectFinalChoice(index, correctIdx) {
  const buttons=document.querySelectorAll('.option-btn');
  if (state.phase !== 'final' || state.puzzleSolved || state.inputLocked || !buttons[index] || buttons[index].disabled) return;
  state.inputLocked=true; buttons.forEach(btn=>btn.disabled=true);
  if (index === state.activeFinalCorrectIndex) {
    sound.success(); buttons[index].classList.add('correct'); state.puzzleSolved=true; if (!saveGame()) return;
    announce(getFinalConfrontationRounds()[state.finalConfrontationRound-1].explanation);
    state.inputLocked=false;
    document.getElementById('puzzleFeedback').textContent=getFinalConfrontationRounds()[state.finalConfrontationRound-1].explanation+' Choose Continue when ready.';
    document.getElementById('finalContinueBtn').hidden=false;
  } else {
    sound.fail(); buttons[index].classList.add('wrong'); state.wrongOptions.push(index); state.lives--; updateHUD(); if (!saveGame()) return;
    announce(`Incorrect answer. ${state.lives} lives remaining.`);
    schedule(() => { if (state.lives === 0) triggerGameOver(); else { state.inputLocked=false; buttons.forEach((btn,i)=>btn.disabled=state.wrongOptions.includes(i)); } },650);
  }
}

function triggerGameSuccess() {
  if (state.phase !== 'final' || !state.puzzleSolved || state.finalConfrontationRound !== getFinalConfrontationRounds().length || !ownsCurrentSave()) return;
  sessionScheduler.cancel();
  state.phase = 'complete';
  sound.success();
  emitConfetti(50);
  
  const total = LOCATIONS.length;
  const pct = Math.round(state.history.filter(e => e.attempts === 1).length / total * 100);
  const perfectGame = isPerfectGame();
  const finalBonus = SCORE_RULES.finalConfrontation;
  const lifeBonus = state.lives * SCORE_RULES.remainingLife;
  const perfectBonus = perfectGame ? SCORE_RULES.perfectGame : 0;
  const bonusTotal = finalBonus + lifeBonus + perfectBonus;
  state.score += bonusTotal;
  const rank = getRankString(state.score);
  const scoreRecord = saveHighScore(state.score, rank);
  updateStats(perfectGame ? 'perfect' : 'arrest');
  storage.setItem(LAST_RUN_KEY, JSON.stringify(state.caseVariantIds));
  storage.removeItem(SAVE_KEY);
  
  const container = document.getElementById('resultsContent');
  container.innerHTML = `
    <div class="text-7xl mb-4">🏆</div>
    <h3 class="title-font text-5xl font-black text-amber-400 uppercase tracking-wide">CASE CLOSED</h3>
    <p class="text-slate-200 text-lg mt-2">${escapeHtml(QUIZ_PACK.successMessage)}</p>
    <p class="text-2xl font-bold text-sky-400 mt-4">${rank}</p>
    <p class="text-sm font-bold ${scoreRecord.isHighScore ? 'text-emerald-400' : 'text-slate-400'} mt-2">
      ${scoreRecord.isHighScore ? 'New high score for this difficulty and route length' : `Best ${state.difficulty}, ${state.stopCount}-stop score remains ${scoreRecord.previousBest}`}
    </p>
    <p class="typewriter-font text-[10px] text-slate-400 uppercase tracking-widest mt-3">Case ID: ${escapeHtml(state.caseSeed)}</p>

    <div class="glass rounded-2xl p-6 border border-white/10 mt-8 max-w-md mx-auto shadow-2xl">
      <div class="grid grid-cols-3 gap-4 text-center">
        <div>
          <p class="text-3xl font-black text-amber-400">${state.score}</p>
          <p class="text-slate-400 text-[9px] uppercase tracking-wider font-extrabold mt-1">ACME Score</p>
        </div>
        <div>
          <p class="text-3xl font-black text-emerald-400">${state.clueTokens.length}/${total}</p>
          <p class="text-slate-400 text-[9px] uppercase tracking-wider font-extrabold mt-1">Stolen Items</p>
        </div>
        <div>
          <p class="text-3xl font-black text-sky-400">${pct}%</p>
          <p class="text-slate-400 text-[9px] uppercase tracking-wider font-extrabold mt-1">First-Try Puzzles</p>
        </div>
      </div>
      <div class="mt-5 border-t border-white/10 pt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px] text-slate-400 uppercase tracking-wider font-bold">
        <div>Final: +${finalBonus}</div>
        <div>Lives: +${lifeBonus}</div>
        <div>Perfect: +${perfectBonus}</div>
      </div>
    </div>
    ${renderCaseHistorySummary()}
  `;
  
  showScreen('resultsScreen');
}

function triggerGameOver() {
  if (!['investigation','between','final'].includes(state.phase) || state.lives !== 0 || !ownsCurrentSave()) return;
  sessionScheduler.cancel();
  state.phase = 'complete';
  sound.fail();
  const rank = getRankString(state.score);
  const scoreRecord = saveHighScore(state.score, rank);
  updateStats('escape');
  storage.setItem(LAST_RUN_KEY, JSON.stringify(state.caseVariantIds));
  storage.removeItem(SAVE_KEY);

  const container = document.getElementById('resultsContent');
  container.innerHTML = `
    <div class="text-7xl mb-4">🚨</div>
    <h3 class="title-font text-5xl font-black text-red-500 uppercase tracking-wide">CASE ESCAPED</h3>
    <p class="text-slate-200 text-lg mt-2">Carmen Sandiego slipped past your perimeter. You ran out of backup lives!</p>
    <p class="text-sm text-slate-400 mt-2">Better luck next time, detective.</p>
    <p class="text-sm font-bold ${scoreRecord.isHighScore ? 'text-emerald-400' : 'text-slate-400'} mt-2">
      ${scoreRecord.isHighScore ? 'New high score for this difficulty and route length' : `Best ${state.difficulty}, ${state.stopCount}-stop score remains ${scoreRecord.previousBest}`}
    </p>
    <p class="typewriter-font text-[10px] text-slate-400 uppercase tracking-widest mt-3">Case ID: ${escapeHtml(state.caseSeed)}</p>

    <div class="glass rounded-2xl p-6 border border-white/10 mt-8 max-w-sm mx-auto shadow-2xl">
      <div class="flex justify-between items-center text-center">
        <div class="flex-grow">
          <p class="text-3xl font-black text-amber-400">${state.score}</p>
          <p class="text-slate-400 text-xs uppercase tracking-wider mt-1">Final Score</p>
        </div>
        <div class="border-l border-white/10 h-8"></div>
        <div class="flex-grow">
          <p class="text-3xl font-black text-red-400">${state.clueTokens.length}/${LOCATIONS.length}</p>
          <p class="text-slate-400 text-xs uppercase tracking-wider mt-1">Captures Made</p>
        </div>
      </div>
    </div>

    ${renderEscapedAnswersPanel()}
  `;

  showScreen('resultsScreen');
}

function renderEscapedAnswersPanel() {
  if (state.isFinalConfrontation) {
    const round = getFinalConfrontationRounds()[state.finalConfrontationRound-1];
    return `<div class="glass p-5 mt-6"><h4>Final report — round ${state.finalConfrontationRound}</h4><p>${escapeHtml(round.options[round.correctIndex])}</p><p>${escapeHtml(round.explanation)}</p></div>`;
  }
  const loc = getLocationCase(state.currentLocationIndex);
  if (!loc || !loc.warrantAnswers) return '';

  const puzzleAnswer = (loc.puzzle && Array.isArray(loc.puzzle.options))
    ? loc.puzzle.options[loc.puzzle.correctIndex]
    : '';

  const rows = [
    ['Stop', loc.warrantAnswers.city],
    ['Hideout', loc.warrantAnswers.hideout],
    ['Disguise', loc.warrantAnswers.disguise]
  ];

  return `
    <div class="glass rounded-2xl p-5 mt-6 max-w-md mx-auto text-left shadow-2xl">
      <p class="text-[10px] uppercase tracking-widest font-black text-amber-700 mb-1">Case File — Correct Answers</p>
      <p class="text-xs text-slate-700 mb-3">The accomplice escaped in <span class="font-bold">${escapeHtml(loc.name)}</span>. Here's what the warrant should have read:</p>
      <dl class="grid grid-cols-1 gap-2 text-xs">
        ${rows.map(([label, value]) => `
          <div class="flex justify-between gap-3 border-b border-slate-900/10 pb-1">
            <dt class="font-bold uppercase tracking-wider text-slate-700">${label}</dt>
            <dd class="text-slate-900 text-right">${escapeHtml(value)}</dd>
          </div>
        `).join('')}
      </dl>
      ${puzzleAnswer ? `
        <div class="mt-3 pt-3 border-t border-slate-900/10">
          <p class="text-[10px] uppercase tracking-widest font-bold text-slate-700 mb-1">Puzzle Answer</p>
          <p class="text-xs italic text-slate-900">${escapeHtml(puzzleAnswer)}</p>
        </div>
      ` : ''}
      ${renderExplanation(loc)}
    </div>
  `;
}

function restartGameFlow() {
  sound.click();
  goToDifficultySelect();
}

// ============================================================
// RESET MODAL MANAGEMENT
// ============================================================
function showResetModal() {
  if (activeModal) return;
  resetSaveSnapshot=storage.getItem(SAVE_KEY);
  sound.click();
  openModal('resetModal');
}

function hideResetModal() {
  sound.click();
  closeModal('resetModal');
}

function confirmReset() {
  if (activeModal !== 'resetModal' || resetSaveSnapshot === undefined) return;
  if (storage.getItem(SAVE_KEY) !== resetSaveSnapshot) {
    handleSaveChange({key:SAVE_KEY});
    return;
  }
  cancelSession();
  storage.removeItem(SAVE_KEY);
  hideResetModal();
  goToTitle();
}

// ============================================================
// INVENTORY TILE RENDER
// ============================================================
function renderTokenGrid() {
  const container=document.getElementById('tokenGrid'); container.innerHTML='';
  LOCATIONS.forEach(loc=>{
    const earned=state.clueTokens.includes(loc.id), sym=loc.token || LOCATION_SYMBOLS[loc.id] || {char:loc.emoji,name:loc.name};
    const tile=document.createElement('div'); tile.className=`token-tile ${earned ? 'earned' : 'locked'}`;
    tile.innerHTML=`<span aria-hidden="true">${earned ? escapeHtml(sym.char) : '🔒'}</span><strong>${escapeHtml(loc.name)}</strong><span>${earned ? escapeHtml(sym.name) : 'Not collected'}</span>`;
    container.appendChild(tile);
  });
}

// ============================================================
// CONFETTI PARTICLE SYSTEM
// ============================================================
function emitConfetti(count) {
  if (shouldReduceMotion()) return;
  const colors = ['#fbbf24', '#f59e0b', '#34d399', '#38bdf8', '#ef4444', '#ec4899'];
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'confetti absolute rounded-full pointer-events-none z-50';
    p.style.width = `${5 + Math.random() * 8}px`;
    p.style.height = `${5 + Math.random() * 8}px`;
    p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    p.style.left = `${Math.random() * 100}vw`;
    p.style.top = `-20px`;
    
    p.style.animation = `confetti-fall ${2 + Math.random() * 2}s linear forwards`;
    p.style.animationDelay = `${Math.random() * 0.5}s`;
    
    document.body.appendChild(p);
    schedule(() => p.remove(), 4000);
  }
}

// Falling confetti stylesheet
const styleSheet = document.createElement('style');
styleSheet.innerText = `
  @keyframes confetti-fall {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(105vh) rotate(360deg); opacity: 0; }
  }
`;
document.head.appendChild(styleSheet);

// ============================================================
// BACKGROUND GLOW PARTICLES
// ============================================================
function initBgParticles() {
  const container = document.getElementById('bgParticles');
  if (!container) return;
  container.innerHTML = '';
  // Decorative particles use CSS only; no background intervals survive a preference change.
  if (shouldReduceMotion()) return;
  for (let i=0;i<12;i++) { const p=document.createElement('span'); p.className='ambient-particle'; p.style.left=`${Math.random()*100}%`; p.style.top=`${Math.random()*100}%`; container.appendChild(p); }
}

// Session lifecycle: all delayed game work belongs to a cancellable generation.
function cancelSession() {
  sessionScheduler.cancel();
  state.phase = 'idle';
  state.inputLocked = false;
  announce('');
  document.querySelectorAll('.confetti').forEach(el => el.remove());
  resetMapForPackChange();
}
function resetRound(phase) {
  state.phase=phase; state.inputLocked=false; state.puzzleSolved=false;
  state.puzzleAttempts=0; state.hintsUsedInRound=0; state.roundScore=createRoundScore();
  state.warrantIssued=false; state.optionOrder=[]; state.wrongOptions=[]; state.warrantSelection={};
  state.activeTab=phase === 'final' ? 'puzzle' : 'dossier';
  state.isFinalConfrontation=phase === 'final';
}
function advanceFinalRound() {
  if (state.phase !== 'final' || !state.puzzleSolved) return;
  if (state.finalConfrontationRound === getFinalConfrontationRounds().length) triggerGameSuccess();
  else { state.finalConfrontationRound++; startFinalConfrontationRound(); }
}
function setPackLoading(loading) {
  packLoading=loading;
  ['startButton','resumeButton','recordsButton'].forEach(id => { const el=document.getElementById(id); if(el) el.disabled=loading; });
  const select=document.getElementById('packSelector');
  if(select) select.disabled=loading || QUIZ_PACK_MANIFEST.packs.length <= 1;
}
function announce(message) {
  document.getElementById('gameStatus').textContent=message;
  if (state.activeTab === 'warrant') document.getElementById('warrantFeedback').textContent=message;
  else if (state.activeTab === 'puzzle') document.getElementById('puzzleFeedback').textContent=message;
}
function showUsedHints(loc) {
  const panel=document.getElementById('hintPanel'); panel.classList.remove('hidden');
  panel.textContent=getHintTexts(loc).slice(0,state.hintsUsedInRound).map((hint,i)=>`Hint ${i+1}: ${hint}`).join(' ');
}
function renderExplanation(loc) {
  const links=(loc.sources || []).map(id=>QUIZ_PACK.sources[id]).filter(Boolean).map(source => `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title)}</a>`).join(' · ');
  return `<section class="glass p-5 text-left explanation"><h4>Evidence review</h4><p>${escapeHtml(loc.puzzle.explanation)}</p><p>Sources: ${links}</p><p class="review-note">${CarmenCore.hasReviewEvidence(loc, QUIZ_PACK.sources) ? 'Editorial review recorded.' : 'Preview: source links are provided; factual line review is pending.'}</p></section>`;
}
function openModal(id) {
  if(activeModal) return;
  modalReturnFocus=document.activeElement; activeModal=id;
  const modal=document.getElementById(id); modal.classList.remove('hidden');
  [...document.body.children].forEach(el => {if(el!==modal && !['SCRIPT','STYLE'].includes(el.tagName)) el.inert=true;});
  (modal.querySelector('[data-initial-focus]') || modal.querySelector('button'))?.focus();
}
function closeModal(id) {
  if (id === 'resetModal') resetSaveSnapshot=undefined;
  document.getElementById(id).classList.add('hidden'); activeModal=null;
  [...document.body.children].forEach(el=>el.inert=false);
  if(modalReturnFocus?.isConnected && !modalReturnFocus.closest('.hidden')) modalReturnFocus.focus();
  else document.querySelector('#app > :not(.hidden)')?.focus();
}
function initializeAccessibility() {
  document.addEventListener('keydown',event=>{
    if(activeModal) {
      if(event.key==='Escape') {event.preventDefault(); closeModal(activeModal); return;}
      if(event.key==='Tab') {
        const buttons=[...document.getElementById(activeModal).querySelectorAll('button, a[href], input, select, [tabindex="0"]')].filter(el=>!el.disabled);
        const first=buttons[0], last=buttons[buttons.length-1];
        if(event.shiftKey && document.activeElement===first) {event.preventDefault(); last.focus();}
        else if(!event.shiftKey && document.activeElement===last) {event.preventDefault(); first.focus();}
      }
      return;
    }
    if(event.target.getAttribute('role')==='tab' && ['ArrowLeft','ArrowRight','Home','End'].includes(event.key)) {
      event.preventDefault();
      const tabs=[...document.querySelectorAll('[role="tab"]')].filter(tab=>!tab.disabled);
      const i=tabs.indexOf(event.target);
      const next=event.key==='Home' ? 0 : event.key==='End' ? tabs.length-1 : (i+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;
      tabs[next].click(); tabs[next].focus();
    }
  });
}
