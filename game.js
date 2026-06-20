// ============================================================
// GAME DATA & LOCATIONS
// ============================================================
let LOCATIONS = [
  {
    id: 'buenos-aires',
    name: 'Buenos Aires',
    province: 'Capital Federal',
    emoji: '🏛️',
    tagline: 'The Paris of South America',
    lat: -34.6037, lng: -58.3816,
    henchman: {
      name: 'Tito Trapaza',
      alias: 'El Tanguero',
      emoji: '🎻',
      role: 'Forger of opera scores and theater blueprints',
      dossierNote: "Former Teatro Colón sub-musician. Expelled for selling rehearsal tapes. Moves through stagehand crews and tango salons."
    },
    briefing: {
      headline: 'NATIONAL LIBRARY LARCENY!',
      report: 'A mysterious figure in a red trench coat broke into the National Library of Buenos Aires last night. She bypassed the security grid and stole the original manuscript of Jorge Luis Borges\' "Ficciones". A witness saw her fleeing towards a tango salon in La Boca.',
      callingCard: 'A card with a red silhouette. On the back, it says: "FDPLQLWR WDQJR RXWILW"'
    },
    clues: [
      'A restaurant receipt from "El Caminito" in the colorful La Boca neighborhood.',
      'A tango lyric sheet with the words "El Choclo" circled and a note: "Dress code: Tango Dancer."',
      'A metro ticket stub showing a trip ending at Plaza de Mayo, near the pink Casa Rosada presidential palace.'
    ],
    puzzle: {
      title: 'Tango Cipher Decode',
      description: 'Decipher Carmen\'s coded note. The thief left a message encoded with a Caesar cipher (shift left by 3 letters, e.g. D -> A, E -> B, F -> C, etc.). Use the Tango Substitution Guide.',
      question: 'What does the cipher "FDPLQLWR WDQJR RXWILW" decode to?',
      options: [
        'CAMINITO - TANGO OUTFIT',
        'OBELISK - SUIT AND TIE',
        'RECOLETA - DRESS AND HAT',
        'PALERMO - PONCHO AND PANTS'
      ],
      correctIndex: 0
    },
    warrantAnswers: {
      city: 'Buenos Aires',
      hideout: 'La Boca',
      disguise: 'Tango dancer'
    },
    funFact: 'Buenos Aires has more bookstores per capita than any other city in the world.'
  },
  {
    id: 'mendoza',
    name: 'Mendoza',
    province: 'Mendoza',
    emoji: '🍷',
    tagline: 'Wine country at the foot of the Andes',
    lat: -32.8902, lng: -68.8458,
    henchman: {
      name: 'Vera Vicario',
      alias: 'La Vendimia',
      emoji: '🍇',
      role: 'Label forger and irrigation-canal smuggler',
      dossierNote: "Trained sommelier. Forges vintage labels and uses high-Andean canal routes to move Carmen's contraband past customs."
    },
    briefing: {
      headline: 'VINTAGE MALBEC VANISHES!',
      report: 'The oldest bottle of Malbec wine in Argentina, dating back to the 19th century, was stolen from a historic winery cellar in Mendoza. The thief left behind coordinate details on an empty bottle label.',
      callingCard: 'A postcard of the Andes with coordinates written in red ink: "32°39\'S, 70°00\'W"'
    },
    clues: [
      'A winery flyer with a handwritten note: "Deliver grapes to the vineyard worker."',
      'A GPS unit tracking history ending at coordinates 32°39\'S, 70°00\'W.',
      'A mountaineering permit for Aconcagua base camp signed with a red \'C\'.'
    ],
    puzzle: {
      title: 'Triangulation Coordinates',
      description: 'Examine the topographic GPS coordinates left by the suspect. Match them to the Aconcagua Base Camp location on your detective coordinate grid.',
      question: 'Which coordinates pinpoint the Aconcagua Base Camp hideout?',
      options: [
        '32°53\'S, 68°49\'W (Mendoza City)',
        '32°39\'S, 70°00\'W (Aconcagua Base Camp)',
        '34°36\'S, 68°20\'W (San Rafael)',
        '31°32\'S, 68°31\'W (San Juan)'
      ],
      correctIndex: 1
    },
    warrantAnswers: {
      city: 'Mendoza',
      hideout: 'Aconcagua base camp',
      disguise: 'Vineyard worker'
    },
    funFact: 'Mendoza is home to Aconcagua, the highest mountain in both the Western and Southern Hemispheres at 6,961m.'
  },
  {
    id: 'salta',
    name: 'Salta',
    province: 'Salta',
    emoji: '🏔️',
    tagline: 'Colonial charm in the mountainous north',
    lat: -24.7821, lng: -65.4232,
    henchman: {
      name: 'Saúl Sandoval',
      alias: 'El Salteño',
      emoji: '🐎',
      role: 'Caravan smuggler trafficking colonial relics',
      dossierNote: "Former muleteer on the old salt caravans. Now runs Carmen's relic pipeline through the Quebrada de Humahuaca."
    },
    briefing: {
      headline: 'CLOUD TRAIN LOCOMOTIVE LOOTED!',
      report: 'A scale gold model of the Tren a las Nubes locomotive was stolen from the Salta Cathedral museum. The thief was seen fleeing towards the railway station.',
      callingCard: 'A boarding pass stub showing a flight from Buenos Aires and a train connection in Salta.'
    },
    clues: [
      'A jumbled train schedule showing a final stop near the colourful hills of Quebrada de Humahuaca.',
      'A witness statement: "She boarded the train wearing a train conductor\'s uniform at 08:00."',
      'A souvenir shop bag from the town of Humahuaca with a red hair thread.'
    ],
    puzzle: {
      title: 'Timeline Reconstruction',
      description: 'Reassemble the timeline logs to determine the final destination of the suspect.',
      question: 'What is the correct chronological sequence and final destination?',
      options: [
        '08:00 Depart Salta → 11:30 San Antonio de los Cobres → 14:00 La Polvorilla → 16:30 Quebrada de Humahuaca',
        '08:00 Quebrada de Humahuaca → 11:30 La Polvorilla → 14:00 San Antonio → 16:30 Depart Salta',
        '08:00 Depart Salta → 11:30 La Polvorilla → 14:00 Quebrada de Humahuaca → 16:30 San Antonio',
        '08:00 San Antonio → 11:30 Depart Salta → 14:00 La Polvorilla → 16:30 Quebrada de Humahuaca'
      ],
      correctIndex: 0
    },
    warrantAnswers: {
      city: 'Salta',
      hideout: 'Quebrada de Humahuaca',
      disguise: 'Train conductor'
    },
    funFact: 'The Tren a las Nubes reaches heights of 4,220 meters above sea level, making it one of the highest railways in the world.'
  },
  {
    id: 'cordoba',
    name: 'Córdoba',
    province: 'Córdoba',
    emoji: '🎸',
    tagline: 'Historic university town in the Sierras',
    lat: -31.4201, lng: -64.1888,
    henchman: {
      name: 'Clara Cortázar',
      alias: 'La Cátedra',
      emoji: '📚',
      role: 'Rare-book thief and Jesuit-archive impostor',
      dossierNote: "Dismissed university archivist with a key to half the Jesuit Block. Forges provenance papers for stolen manuscripts."
    },
    briefing: {
      headline: 'JESUIT TREASURE STOLEN!',
      report: 'An ancient 17th-century telescope was stolen from the National University of Córdoba. The thief left a series of logic riddles on a study desk.',
      callingCard: 'A library card for the National University of Córdoba under an alias.'
    },
    clues: [
      'A logic statement: "The thief wearing glasses was NOT in the Jesuit Quarter."',
      'A coffee shop receipt from the trendy Nueva Córdoba student district.',
      'A notebook scribble: "Blend in as a university student."'
    ],
    puzzle: {
      title: 'Logic Elimination Grid',
      description: 'Solve the detective logic grid. Match the suspect location and disguise using the notebook clues.',
      question: 'Which combination matches the suspect\'s profile in Córdoba?',
      options: [
        'Location: Jesuit Quarter | Disguise: Professor',
        'Location: Nueva Córdoba | Disguise: University student',
        'Location: Villa Belgrano | Disguise: Tourist',
        'Location: Alta Córdoba | Disguise: Musician'
      ],
      correctIndex: 1
    },
    warrantAnswers: {
      city: 'Córdoba',
      hideout: 'Nueva Córdoba',
      disguise: 'University student'
    },
    funFact: 'The National University of Córdoba, founded in 1613, is the third-oldest in the Americas.'
  },
  {
    id: 'iguazu',
    name: 'Puerto Iguazú',
    province: 'Misiones',
    emoji: '🌊',
    tagline: 'The Great Waters',
    lat: -25.5991, lng: -54.5736,
    henchman: {
      name: 'Iván Irala',
      alias: 'El Iguazuano',
      emoji: '🚤',
      role: 'Falls-boatman running goods across the triple frontier',
      dossierNote: "Ex-park boatman with a black-market ferry route under the Devil's Throat. Carries Carmen's couriers between three countries before dawn."
    },
    briefing: {
      headline: 'GUARANÍ CROWN JEWEL HEIST!',
      report: 'A sacred Guaraní golden jaguar pendant was stolen from the Misiones Rainforest Museum near Iguazú Falls. The thief escaped on a speed boat.',
      callingCard: 'A park ranger map with waypoint distances marked: 1km, 1km, 2km, 3km, 5km...'
    },
    clues: [
      'A trail guide mentioning: "Follow the Fibonacci progression of waypoints to the final viewpoint."',
      'A park ranger badge dropped on the catwalk leading to the Devil\'s Throat.',
      'A witness quote: "She was heading to Garganta del Diablo (Devil\'s Throat) next."'
    ],
    puzzle: {
      title: 'Fibonacci Waypoint Sequence',
      description: 'Analyze the trail map waypoint sequence: 1, 1, 2, 3, 5, ... Predict the next waypoint distance and identify the final waterfall hideout.',
      question: 'What is the next distance and final destination in the sequence?',
      options: [
        '7km — San Martin Falls',
        '8km — Garganta del Diablo (Devil\'s Throat)',
        '10km — Bosetti Falls',
        '13km — Brazil Border'
      ],
      correctIndex: 1
    },
    warrantAnswers: {
      city: 'Puerto Iguazú',
      hideout: 'Garganta del Diablo',
      disguise: 'Park ranger'
    },
    funFact: 'Iguazú Falls consists of 275 individual waterfalls spread across nearly 3 kilometers of the Iguazú River.'
  },
  {
    id: 'bariloche',
    name: 'San Carlos de Bariloche',
    province: 'Río Negro',
    emoji: '🏔️',
    tagline: 'Swiss alpine charm and glacial lakes',
    lat: -41.1335, lng: -71.3103,
    henchman: {
      name: 'Berta Brügger',
      alias: 'La Bombonera',
      emoji: '🍫',
      role: 'Chocolatier and forger of alpine permits',
      dossierNote: "Third-generation Swiss-Argentine chocolatier. Hides Carmen's microfilm in pralines bound for Nahuel Huapi tour boats."
    },
    briefing: {
      headline: 'CHOCOLATE SCULPTURE SWIPED!',
      report: 'A famous 50kg chocolate sculpture of Mount Fitz Roy was stolen from a chocolate shop on Mitre Street. The thief escaped into the Nahuel Huapi forest.',
      callingCard: 'A ski pass for Cerro Otto with the signature "Carmen".'
    },
    clues: [
      'A torn polaroid photo showing a cable car going up to a revolving cafeteria on Cerro Otto.',
      'A ski instructor\'s whistle with the initials \'C.S.\'',
      'A receipt for chocolate-covered raspberries from Rapa Nui on Mitre Street.'
    ],
    puzzle: {
      title: 'Visual Clue Identification',
      description: 'Examine the torn polaroid photo showing a cable car and a revolving summit building. Identify the alpine hideout.',
      question: 'Which landmark is pictured in the visual evidence?',
      options: [
        'Cerro Otto Viewpoint',
        'Cerro Catedral Ski Center',
        'Colonia Suiza Crafts Market',
        'Nahuel Huapi Lake House'
      ],
      correctIndex: 0
    },
    warrantAnswers: {
      city: 'San Carlos de Bariloche',
      hideout: 'Cerro Otto',
      disguise: 'Ski instructor'
    },
    funFact: 'Bariloche was founded by German and Swiss immigrants, and its architecture reflects that alpine heritage.'
  },
  {
    id: 'ushuaia',
    name: 'Ushuaia',
    province: 'Tierra del Fuego',
    emoji: '🚢',
    tagline: 'The End of the World',
    lat: -54.8019, lng: -68.3030,
    henchman: {
      name: 'Ulises Urrutia',
      alias: 'El Austral',
      emoji: '⚓',
      role: 'Disgraced expedition captain, polar relic smuggler',
      dossierNote: "Stripped of his master's license after a Beagle Channel scandal. Sells berth space on southern cruises to anyone with a forged research badge."
    },
    briefing: {
      headline: 'HISTORIC LIGHTHOUSE DIAL STOLEN!',
      report: 'The original brass lens rotation gear from the Les Eclaireurs Lighthouse was stolen in the dead of night. The thief escaped by sailboat into the Beagle Channel.',
      callingCard: 'A maritime map grid with compass commands: \'Start at Port. Go East 4, South 2.\''
    },
    clues: [
      'A lighthouse keeper\'s log noting: "A suspicious woman was asking for the key to the main beacon."',
      'A navigation route map showing a destination at the Les Eclaireurs Lighthouse in the Beagle Channel.',
      'A penguin colony report mentioning a woman in a red coat boarding a boat near the islands.'
    ],
    puzzle: {
      title: 'Compass Navigation Grid',
      description: 'Start at Port (Row 1, Col 1). Follow the directions: Go East 4 grid spaces, then South 2 grid spaces. What is your final destination?',
      question: 'Which landmark coordinate is the final destination?',
      options: [
        'Row 1, Col 5 — Martial Glacier',
        'Row 3, Col 5 — Les Eclaireurs Lighthouse',
        'Row 3, Col 1 — Port',
        'Row 5, Col 2 — Penguin Colony'
      ],
      correctIndex: 1
    },
    warrantAnswers: {
      city: 'Ushuaia',
      hideout: 'Les Eclaireurs Lighthouse',
      disguise: 'Lighthouse keeper'
    },
    funFact: 'Ushuaia is the only city in the world that lies below the 54th parallel south, earning its "End of the World" nickname.'
  },
  {
    id: 'el-calafate',
    name: 'El Calafate',
    province: 'Santa Cruz',
    emoji: '🧊',
    tagline: 'Gateway to the Perito Moreno Glacier',
    lat: -50.3381, lng: -72.2648,
    henchman: {
      name: 'Eva Errázuriz',
      alias: 'La Esmeralda',
      emoji: '🥽',
      role: "Carmen's local fixer, masquerading as a glaciologist",
      dossierNote: "Former Los Glaciares park scientist. Forges climate-research permits and books Carmen's escape routes across the ice field."
    },
    briefing: {
      headline: 'GLACIER ICE CORE PILFERED!',
      report: 'A scientific ice core sample representing 10,000 years of climate history was stolen from the Glaciarium Museum. The thief left a final note taunting the police.',
      callingCard: 'A letter: "You\'ve chased me far, detective. But my final hideout is locked behind the symbols of my journey."'
    },
    clues: [
      'A tour guide pamphlet: "Walk the Perito Moreno Glacier catwalks."',
      'A glacier trekking harness with red stitching.',
      'A final note mentioning: "Where the ice collapses, the journey ends."'
    ],
    puzzle: {
      title: 'Final Token Deduction',
      description: 'Examine the symbols on your collected clue tokens. Identify the 3 locations that contain the Sun, the Ice, and the Wind symbols to locate Carmen\'s final glacier hideout.',
      question: 'Which combination of clue tokens contains the Sun, Wind, and Ice symbols?',
      options: [
        'Mendoza (Sun) + Bariloche (Wind) + El Calafate (Ice)',
        'Buenos Aires (Tango) + Iguazú (Water) + Ushuaia (Light)',
        'Salta (Cloud) + Córdoba (Book) + Ushuaia (Light)',
        'Buenos Aires (Tango) + Mendoza (Sun) + Salta (Cloud)'
      ],
      correctIndex: 0
    },
    warrantAnswers: {
      city: 'El Calafate',
      hideout: 'Perito Moreno Glacier',
      disguise: 'Tour guide'
    },
    funFact: 'The Perito Moreno Glacier is 30km long and 70m tall, and periodically dams the lake before spectacularly collapsing.'
  }
];

const FALLBACK_LOCATIONS = LOCATIONS;

// Symbols assigned to locations for final puzzle
const LOCATION_SYMBOLS = {
  'buenos-aires': { char: '💃', name: 'Tango' },
  'mendoza': { char: '☀️', name: 'Sun' },
  'salta': { char: '☁️', name: 'Cloud' },
  'cordoba': { char: '📖', name: 'Book' },
  'iguazu': { char: '💧', name: 'Water' },
  'bariloche': { char: '💨', name: 'Wind' },
  'ushuaia': { char: '🚨', name: 'Light' },
  'el-calafate': { char: '❄️', name: 'Ice' }
};

let QUESTION_BANK = {};
const SAVE_SCHEMA_VERSION = 2;
const SAVE_KEY = 'carmen_save';
const LAST_RUN_KEY = 'carmen_lastCaseVariantIds';
const SETTINGS_KEY = 'carmen_settings';

async function loadRegionData() {
  try {
    const response = await fetch('./data/argentina-regions.json', { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Region data request failed: ${response.status}`);
    }
    const regionData = await response.json();
    if (Array.isArray(regionData.locations) && regionData.locations.length > 0) {
      LOCATIONS = regionData.locations;
    }
  } catch (error) {
    console.warn('Region metadata unavailable; using built-in fallback locations.', error);
  }
}

async function loadQuestionBank() {
  try {
    const response = await fetch('./question-bank.json', { cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Question bank request failed: ${response.status}`);
    }
    QUESTION_BANK = await response.json();
  } catch (error) {
    QUESTION_BANK = {};
    LOCATIONS = FALLBACK_LOCATIONS;
    console.warn('Question bank unavailable; using classic cases only.', error);
  }
}

const SCORE_RULES = {
  puzzleByAttempt: [100, 75, 50],
  laterAttempt: 25,
  hintPenalty: 15,
  warrant: 50,
  streakStep: 25,
  finalConfrontation: 200,
  remainingLife: 50,
  perfectGame: 500
};

function getPuzzleScore(attemptsBeforeSolve, hintsUsed = 0) {
  const baseScore = SCORE_RULES.puzzleByAttempt[attemptsBeforeSolve] ?? SCORE_RULES.laterAttempt;
  return Math.max(SCORE_RULES.laterAttempt, baseScore - (hintsUsed * SCORE_RULES.hintPenalty));
}

function getStreakBonus(streak) {
  return streak >= 3 ? (streak - 2) * SCORE_RULES.streakStep : 0;
}

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

function getStartingLives(difficulty) {
  if (difficulty === 'rookie') return 6;
  if (difficulty === 'inspector') return 4;
  return 5;
}

function createClassicCase(location) {
  return {
    caseId: `classic-${location.id}`,
    briefing: location.briefing,
    clues: location.clues,
    puzzle: location.puzzle,
    warrantAnswers: location.warrantAnswers,
    funFact: location.funFact
  };
}

function getLocationCasePool(location) {
  const bankCases = Array.isArray(QUESTION_BANK[location.id]) ? QUESTION_BANK[location.id] : [];
  if (bankCases.length > 0) return bankCases;
  if (location.briefing && location.clues && location.puzzle && location.warrantAnswers) {
    return [createClassicCase(location)];
  }
  return [];
}

function createCaseSeed() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function createRunCaseVariantIds(seed = createCaseSeed()) {
  return CarmenRunGenerator.createRunCaseVariantIds(LOCATIONS, getLocationCasePool, seed);
}

function readLastRunCaseVariantIds() {
  try {
    const parsed = JSON.parse(localStorage.getItem(LAST_RUN_KEY));
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
  const values = [];
  LOCATIONS.forEach((location) => {
    getLocationCasePool(location).forEach((caseData) => {
      values.push(caseData.warrantAnswers[field]);
    });
  });
  return [...new Set(values)].sort();
}

// ============================================================
// GAME STATE MANAGEMENT
// ============================================================
let state = {
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
  caseSeed: '',
  caseVariantIds: [],
  activeTab: 'dossier',
  finalConfrontationRound: 1,
  activeFinalCorrectIndex: 0,
  isFinalConfrontation: false,
  settings: {
    sound: true,
    reducedMotion: false,
    highContrast: false
  }
};

// ============================================================
// AUDIO SYNTHESIZER (Web Audio API)
// ============================================================
const sound = {
  ctx: null,
  init() {
    if (this.ctx) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
  },
  playTone(freq, type, duration, delay = 0) {
    this.init();
    if (!state.settings.sound || !this.ctx) return;
    
    setTimeout(() => {
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
window.onload = async () => {
  await loadRegionData();
  await loadQuestionBank();
  initBgParticles();
  loadSettings();
  checkResumeState();
  
  // Keyboard Event Listeners
  document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    const puzzleTabActive = (state.activeTab === 'puzzle' && !document.getElementById('gameScreen').classList.contains('hidden'));
    
    if (puzzleTabActive && !state.puzzleSolved) {
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
};

function checkResumeState() {
  const hasSave = localStorage.getItem(SAVE_KEY) !== null;
  const validSave = getValidSave();
  if (validSave) {
    document.getElementById('resumeButton').classList.remove('hidden');
  } else {
    document.getElementById('resumeButton').classList.add('hidden');
  }
  const clearButton = document.getElementById('clearBrokenSaveButton');
  if (clearButton) {
    clearButton.classList.toggle('hidden', !hasSave || Boolean(validSave));
  }
}

function clearBrokenSave() {
  localStorage.removeItem(SAVE_KEY);
  checkResumeState();
}

function loadSettings() {
  const localSettings = localStorage.getItem(SETTINGS_KEY);
  if (localSettings) {
    try {
      const parsed = JSON.parse(localSettings);
      state.settings.sound = parsed.sound !== undefined ? parsed.sound : true;
      state.settings.reducedMotion = parsed.reducedMotion === true;
      state.settings.highContrast = parsed.highContrast === true;
    } catch(e) {}
  }
  applySettings();
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
}

function applySettings() {
  document.body.classList.toggle('reduced-motion', state.settings.reducedMotion);
  document.body.classList.toggle('high-contrast', state.settings.highContrast);
  updateSoundIcon();
  updateMotionIcon();
  updateContrastIcon();
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
  const screens = ['titleScreen', 'difficultyScreen', 'gameScreen', 'betweenScreen', 'resultsScreen'];
  
  if (document.startViewTransition) {
    document.startViewTransition(() => {
      screens.forEach(id => {
        const el = document.getElementById(id);
        if (id === screenId) {
          el.classList.remove('hidden');
        } else {
          el.classList.add('hidden');
        }
      });
      // Force leaflet map update on visibility change
      if (screenId === 'gameScreen') {
        setTimeout(invalidateMapSize, 100);
      }
    });
  } else {
    screens.forEach(id => {
      const el = document.getElementById(id);
      if (id === screenId) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
    if (screenId === 'gameScreen') {
      setTimeout(invalidateMapSize, 100);
    }
  }
}

function goToTitle() {
  sound.click();
  showScreen('titleScreen');
  checkResumeState();
}

function goToDifficultySelect() {
  sound.click();
  showScreen('difficultyScreen');
}

// ============================================================
// GAME FLOW INITIATION
// ============================================================
function selectDifficulty(diff) {
  sound.success();
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
  sound.success();
  const parsed = getValidSave();
  if (!parsed) return;
  
  try {
    state.difficulty = parsed.difficulty || 'detective';
    state.currentLocationIndex = parsed.currentLocationIndex || 0;
    state.score = parsed.score || 0;
    state.lives = parsed.lives || 5;
    state.streak = parsed.streak || 0;
    state.hintsUsedInRound = parsed.hintsUsedInRound || 0;
    state.totalHintsUsed = parsed.totalHintsUsed || 0;
    state.roundScore = parsed.roundScore || createRoundScore();
    state.clueTokens = parsed.clueTokens || [];
    state.history = parsed.history || [];
    state.caseSeed = parsed.caseSeed || createCaseSeed();
    state.caseVariantIds = parsed.caseVariantIds || [];
    state.isFinalConfrontation = parsed.isFinalConfrontation || false;
    state.finalConfrontationRound = parsed.finalConfrontationRound || 1;
    
    if (state.isFinalConfrontation) {
      startFinalConfrontationRound();
    } else {
      startLocation();
    }
  } catch(e) {
    localStorage.removeItem(SAVE_KEY);
    goToDifficultySelect();
  }
}

function caseVariantIdsAreValid(ids) {
  if (!Array.isArray(ids) || ids.length !== LOCATIONS.length) return false;
  return ids.every((id, index) => {
    const pool = getLocationCasePool(LOCATIONS[index]);
    return pool.some((entry) => entry.caseId === id);
  });
}

function getValidSave() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (!parsed) return null;
    if (parsed.schemaVersion !== SAVE_SCHEMA_VERSION) {
      return migrateSave(parsed);
    }
    if (!LOCATIONS[parsed.currentLocationIndex] && !parsed.isFinalConfrontation) return null;
    if (!caseVariantIdsAreValid(parsed.caseVariantIds)) return null;
    return parsed;
  } catch(e) {
    return null;
  }
}

function migrateSave(parsed) {
  if (!parsed || typeof parsed !== 'object') return null;
  const currentLocationIndex = Number(parsed.currentLocationIndex ?? parsed.currentLocation ?? 0);
  if (!LOCATIONS[currentLocationIndex] && !parsed.isFinalConfrontation) return null;

  const caseSeed = parsed.caseSeed || createCaseSeed();
  const caseVariantIds = caseVariantIdsAreValid(parsed.caseVariantIds)
    ? parsed.caseVariantIds
    : createRunCaseVariantIds(caseSeed);
  
  const migrated = {
    schemaVersion: SAVE_SCHEMA_VERSION,
    difficulty: parsed.difficulty || 'detective',
    currentLocationIndex,
    score: Number(parsed.score) || 0,
    lives: Number(parsed.lives) || getStartingLives(parsed.difficulty || 'detective'),
    streak: Number(parsed.streak) || 0,
    hintsUsedInRound: Number(parsed.hintsUsedInRound) || 0,
    totalHintsUsed: Number(parsed.totalHintsUsed) || 0,
    roundScore: parsed.roundScore || createRoundScore(),
    clueTokens: Array.isArray(parsed.clueTokens) ? parsed.clueTokens : [],
    history: Array.isArray(parsed.history) ? parsed.history : [],
    caseSeed,
    caseVariantIds,
    isFinalConfrontation: parsed.isFinalConfrontation === true,
    finalConfrontationRound: Number(parsed.finalConfrontationRound) || 1
  };
  
  localStorage.setItem(SAVE_KEY, JSON.stringify(migrated));
  return migrated;
}

function saveGame(overrides = {}) {
  const saveObj = {
    schemaVersion: SAVE_SCHEMA_VERSION,
    difficulty: state.difficulty,
    currentLocationIndex: state.currentLocationIndex,
    score: state.score,
    lives: state.lives,
    streak: state.streak,
    hintsUsedInRound: state.hintsUsedInRound,
    totalHintsUsed: state.totalHintsUsed,
    roundScore: state.roundScore,
    clueTokens: state.clueTokens,
    history: state.history,
    caseSeed: state.caseSeed,
    caseVariantIds: state.caseVariantIds,
    isFinalConfrontation: state.isFinalConfrontation,
    finalConfrontationRound: state.finalConfrontationRound
  };
  localStorage.setItem(SAVE_KEY, JSON.stringify({ ...saveObj, ...overrides }));
}

function saveHighScore(finalScore, rank) {
  let highScores = [];
  try {
    highScores = JSON.parse(localStorage.getItem('carmen_highScores')) || [];
  } catch(e) {
    highScores = [];
  }
  
  const previousBest = highScores
    .filter(entry => entry.difficulty === state.difficulty)
    .reduce((best, entry) => Math.max(best, Number(entry.score) || 0), 0);
  
  highScores.push({
    score: finalScore,
    rank,
    difficulty: state.difficulty,
    caseSeed: state.caseSeed,
    caseVariantIds: state.caseVariantIds,
    date: new Date().toISOString()
  });
  
  highScores.sort((a, b) => b.score - a.score);
  localStorage.setItem('carmen_highScores', JSON.stringify(highScores.slice(0, 10)));
  
  return {
    previousBest,
    isHighScore: finalScore > previousBest
  };
}

function getHighScores() {
  try {
    return JSON.parse(localStorage.getItem('carmen_highScores')) || [];
  } catch(e) {
    return [];
  }
}

function getStats() {
  let stats = { gamesPlayed: 0, totalArrests: 0, totalEscapes: 0, perfectGames: 0 };
  try {
    stats = { ...stats, ...(JSON.parse(localStorage.getItem('carmen_stats')) || {}) };
  } catch(e) {}
  return stats;
}

function showRecordsModal() {
  sound.click();
  const records = getHighScores();
  const stats = getStats();
  const grouped = ['rookie', 'detective', 'inspector'].map((difficulty) => {
    const best = records.find((entry) => entry.difficulty === difficulty);
    return `<div class="flex justify-between gap-4 border-b border-black/10 pb-2">
      <span class="font-black uppercase">${difficulty}</span>
      <span>${best ? `${best.score} - ${best.rank}` : 'No score yet'}</span>
    </div>`;
  }).join('');
  
  document.getElementById('recordsContent').innerHTML = `
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
      <div class="bg-white/50 p-3 border border-black/10"><strong class="block text-lg">${stats.gamesPlayed}</strong><span class="text-xs uppercase">Games</span></div>
      <div class="bg-white/50 p-3 border border-black/10"><strong class="block text-lg">${stats.totalArrests}</strong><span class="text-xs uppercase">Arrests</span></div>
      <div class="bg-white/50 p-3 border border-black/10"><strong class="block text-lg">${stats.totalEscapes}</strong><span class="text-xs uppercase">Escapes</span></div>
      <div class="bg-white/50 p-3 border border-black/10"><strong class="block text-lg">${stats.perfectGames}</strong><span class="text-xs uppercase">Perfect</span></div>
    </div>
    <div class="space-y-2">${grouped}</div>
  `;
  document.getElementById('recordsModal').classList.remove('hidden');
}

function hideRecordsModal() {
  sound.click();
  document.getElementById('recordsModal').classList.add('hidden');
}

function updateStats(outcome) {
  const stats = getStats();
  
  stats.gamesPlayed++;
  if (outcome === 'arrest') stats.totalArrests++;
  if (outcome === 'escape') stats.totalEscapes++;
  if (outcome === 'perfect') {
    stats.totalArrests++;
    stats.perfectGames++;
  }
  
  localStorage.setItem('carmen_stats', JSON.stringify(stats));
}

function renderCaseHistorySummary() {
  if (!state.history.length) return '';
  return `
    <div class="glass rounded-2xl p-5 border border-white/10 mt-6 max-w-2xl mx-auto text-left shadow-2xl">
      <p class="text-xs uppercase tracking-wider font-black text-slate-400 mb-3">Case History</p>
      <div class="grid gap-2">
        ${state.history.map((entry, index) => `
          <div class="flex justify-between gap-3 text-xs bg-white/10 p-2 border border-white/10">
            <span class="font-bold">${index + 1}. ${entry.location}</span>
            <span>${entry.attempts} attempt${entry.attempts === 1 ? '' : 's'} / +${entry.points}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ============================================================
// ROUND SETUP & INITIALIZATION
// ============================================================
function startLocation() {
  state.puzzleSolved = false;
  state.puzzleAttempts = 0;
  state.hintsUsedInRound = 0;
  state.roundScore = createRoundScore();
  state.warrantIssued = false;
  document.getElementById('submitWarrantBtn').disabled = false;
  state.activeTab = 'dossier';

  saveGame();
  updateHUD();
  drawMapGrid();

  // Setup tabs — clues are always visible, so the puzzle tab is unlocked from the start
  document.getElementById('tabClues').disabled = false;
  document.getElementById('tabPuzzle').disabled = false;
  document.getElementById('tabWarrant').disabled = true;
  document.getElementById('goToPuzzleBtn').disabled = false;
  document.getElementById('goToPuzzleBtn').classList.remove('opacity-50', 'cursor-not-allowed');
  document.getElementById('goToWarrantBtn').disabled = true;
  document.getElementById('goToWarrantBtn').classList.add('opacity-50', 'cursor-not-allowed');
  resetHintPanel();
  
  // Populate Dossier Screen
  const loc = getLocationCase(state.currentLocationIndex);
  
  document.getElementById('caseCityNumber').textContent = `Location ${state.currentLocationIndex + 1} of 8`;
  document.getElementById('briefingHeadline').textContent = loc.briefing.headline;

  typeWriterEffect('briefingReport', loc.briefing.report);
  document.getElementById('callingCardNote').textContent = `"${loc.briefing.callingCard}"`;
  renderSuspectCard(loc);
  
  // Populate Clues Cards
  document.getElementById('clueText0').textContent = loc.clues[0];
  document.getElementById('clueText1').textContent = loc.clues[1];
  document.getElementById('clueText2').textContent = loc.clues[2];


  // Populate Puzzle Details
  document.getElementById('puzzleTitleText').textContent = loc.puzzle.title;
  document.getElementById('puzzleDescription').textContent = loc.puzzle.description;
  document.getElementById('puzzleQuestionText').textContent = loc.puzzle.question;
  
  renderPuzzleVisual(loc);
  buildPuzzleOptions(loc.puzzle);
  updateHintButton();
  buildWarrantDropdowns(loc);
  document.getElementById('warrantStampOverlay').classList.add('hidden');
  
  renderTokenGrid();
  showScreen('gameScreen');
  switchTab('dossier');
}

function updateHUD() {
  document.getElementById('hudRank').textContent = getRankString(state.score);
  document.getElementById('hudScore').innerHTML = `Score: <span class="text-amber-400 font-extrabold">${String(state.score).padStart(4, '0')}</span>`;
  
  const container = document.getElementById('livesContainer');
  container.innerHTML = '';
  for (let i = 0; i < state.lives; i++) {
    const magnifier = document.createElement('span');
    magnifier.className = 'text-amber-400 text-sm';
    magnifier.textContent = '🔍';
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

function typeWriterEffect(elementId, text) {
  const el = document.getElementById(elementId);
  if (shouldReduceMotion()) {
    el.textContent = text;
    return;
  }
  el.textContent = '';
  let i = 0;
  function walk() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(walk, 15);
    }
  }
  walk();
}

// ============================================================
// TAB NAVIGATION SKELETON
// ============================================================
function unlockAndGoToPuzzle() {
  sound.success();
  switchTab('puzzle');
}

function switchTab(tabName) {
  sound.click();
  state.activeTab = tabName;
  
  ['dossier', 'clues', 'puzzle', 'warrant'].forEach(name => {
    const tabBtn = document.getElementById(`tab${name.charAt(0).toUpperCase() + name.slice(1)}`);
    const content = document.getElementById(`content${name.charAt(0).toUpperCase() + name.slice(1)}`);
    
    if (name === tabName) {
      tabBtn.classList.add('active');
      content.classList.remove('hidden');
    } else {
      tabBtn.classList.remove('active');
      content.classList.add('hidden');
    }
  });
}

// ============================================================
// PUZZLE ENGINE DECORATORS (TAB 3)
// ============================================================
function renderPuzzleVisual(loc) {
  const container = document.getElementById('puzzleVisualContainer');
  container.innerHTML = '';
  container.setAttribute('role', 'img');
  container.setAttribute('aria-label', loc.accessibilityDescription || loc.puzzle.description || 'Puzzle visual evidence');
  
  if (loc.puzzle.visualHtml) {
    container.innerHTML = loc.puzzle.visualHtml;
    return;
  }
  
  const id = loc.id;
  
  if (id === 'buenos-aires') {
    container.innerHTML = `
      <div class="w-full text-center space-y-2">
        <div class="typewriter-font text-[10px] bg-slate-950 text-amber-400 p-2 rounded border border-slate-700 leading-tight uppercase font-bold text-left shadow-inner">
          GUIDE: SHIFT LEFT BY 3<br>
          (D-&gt;A, E-&gt;B, F-&gt;C...)
        </div>
        <div class="typewriter-font text-xs font-bold border-2 border-dashed border-red-700 p-4 rounded text-red-900 bg-red-50 inline-block rotate-[-2deg] mt-3">
          FDPLQLWR WDQJR RXWILW
        </div>
      </div>
    `;
  } else if (id === 'mendoza') {
    container.innerHTML = `
      <div class="w-full space-y-2 text-center text-xs">
        <div class="border border-slate-300 rounded p-2 bg-white/80">
          <p class="font-bold border-b border-slate-200 pb-1 mb-1">Mendoza Topo Chart</p>
          <div class="grid grid-cols-2 gap-1 text-[9px] text-left font-semibold">
            <div>📍 Mendoza: 32°53'S, 68°49'W</div>
            <div>🏔️ Aconcagua: 32°39'S, 70°00'W</div>
            <div>🍇 San Rafael: 34°36'S, 68°20'W</div>
            <div>🏔️ San Juan: 31°32'S, 68°31'W</div>
          </div>
        </div>
        <span class="text-xs text-red-600 font-bold bg-white px-2 py-0.5 rounded border border-slate-200 inline-block mt-1">Postcard target: "32°39'S, 70°00'W"</span>
      </div>
    `;
  } else if (id === 'salta') {
    container.innerHTML = `
      <div class="w-full space-y-1.5 text-left text-[9px] font-semibold">
        <div class="bg-white/80 border border-slate-200 rounded p-2">
          <p class="font-bold text-slate-700 border-b pb-1 mb-1 text-[10px]">Transit Timestamps</p>
          <div>⏰ 11:30 - Spied at San Antonio de los Cobres</div>
          <div>⏰ 08:00 - Train leaves Salta Cathedral</div>
          <div>⏰ 16:30 - Escaped into Quebrada Humahuaca</div>
          <div>⏰ 14:00 - Crosses La Polvorilla Viaduct</div>
        </div>
      </div>
    `;
  } else if (id === 'cordoba') {
    container.innerHTML = `
      <div class="w-full space-y-1 text-left text-[9px] leading-tight font-semibold">
        <div class="bg-white/80 border border-slate-200 rounded p-2">
          <p class="font-bold border-b border-slate-200 pb-1 mb-1 text-[10px]">Logic Case Notes</p>
          <div class="text-[8px] space-y-0.5 text-slate-800">
            • Suspect in Jesuit Quarter was NOT glasses.<br>
            • Nueva Córdoba target = University student.<br>
            • Red scarf wearer heading to Sierras.<br>
            • Target was confirmed in Nueva Córdoba.
          </div>
        </div>
      </div>
    `;
  } else if (id === 'iguazu') {
    container.innerHTML = `
      <div class="w-full space-y-2 text-center text-xs">
        <div class="bg-white/80 border border-slate-200 rounded p-2 text-left">
          <p class="font-bold border-b border-slate-200 pb-1 mb-1 text-[10px]">Trail Waypoint Distances</p>
          <p class="text-[10px] text-center font-bold tracking-widest text-emerald-800 bg-emerald-50 px-2 py-1 rounded">1km ➔ 1km ➔ 2km ➔ 3km ➔ 5km ➔ ?</p>
          <p class="text-[8px] text-slate-500 mt-1 text-center font-semibold">"Sum of the two preceding waypoints."</p>
        </div>
      </div>
    `;
  } else if (id === 'bariloche') {
    container.innerHTML = `
      <div class="w-full text-center">
        <div class="relative w-24 h-24 mx-auto border-4 border-white bg-slate-300 rounded shadow-md overflow-hidden flex items-center justify-center">
          <div class="text-3xl">🚠</div>
          <div class="absolute bottom-0 inset-x-0 bg-black/60 text-[7px] text-white py-0.5 tracking-wider uppercase font-bold">REVOLVING CAFE</div>
        </div>
        <p class="text-[8px] text-slate-500 mt-2 font-semibold italic">Torn polaroid shows summit cable car</p>
      </div>
    `;
  } else if (id === 'ushuaia') {
    container.innerHTML = `
      <div class="w-full text-xs">
        <div class="grid grid-cols-6 gap-0.5 border border-slate-400 p-1 bg-sky-950/20 rounded font-bold text-[8px] text-center">
          <div class="bg-slate-300 p-0.5 text-slate-800 rounded">Port</div>
          <div></div><div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div><div class="bg-amber-100 p-0.5 text-amber-900 rounded">Lighthouse</div><div></div>
          <div></div><div></div><div></div><div></div><div></div><div></div>
          <div></div><div class="bg-slate-300 p-0.5 text-slate-800 rounded">Penguin</div><div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
        <p class="text-[8px] text-slate-500 text-center mt-1 font-semibold">Start: Port (1,1). Go East 4, South 2.</p>
      </div>
    `;
  } else if (id === 'el-calafate') {
    container.innerHTML = `
      <div class="w-full space-y-1.5 text-[9px] font-semibold">
        <div class="bg-white/80 border border-slate-200 rounded p-2">
          <p class="font-bold border-b pb-0.5 mb-1 text-[10px]">Symbol Directory</p>
          <div class="grid grid-cols-3 gap-1 text-center font-bold text-[10px]">
            <div class="bg-amber-50 p-1 rounded">Mendoza<br>☀️</div>
            <div class="bg-sky-50 p-1 rounded">Bariloche<br>💨</div>
            <div class="bg-blue-50 p-1 rounded">Calafate<br>❄️</div>
          </div>
        </div>
      </div>
    `;
  }
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
    ? 'No Hints In Inspector'
    : `Request Hint (${hintsRemaining}/${limit})`;
  hintButton.classList.toggle('opacity-50', hintButton.disabled);
  hintButton.classList.toggle('cursor-not-allowed', hintButton.disabled);
  hintButton.setAttribute('aria-label', `Request puzzle hint. ${hintsRemaining} hints remaining. Each hint costs ${SCORE_RULES.hintPenalty} points.`);
}

function requestHint() {
  if (state.puzzleSolved || state.isFinalConfrontation) return;
  
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
  saveGame();
  
  const panel = document.getElementById('hintPanel');
  panel.classList.remove('hidden');
  panel.innerHTML = `<strong>Hint ${state.hintsUsedInRound}:</strong> ${hintText} <span class="block mt-1 text-[10px] uppercase font-bold text-red-800">-${SCORE_RULES.hintPenalty} potential puzzle points</span>`;
  updateHintButton();
}

function buildPuzzleOptions(puzzle) {
  const container = document.getElementById('puzzleOptionsGrid');
  container.innerHTML = '';
  
  puzzle.options.forEach((opt, idx) => {
    const letters = ['A', 'B', 'C', 'D'];
    const btn = document.createElement('button');
    btn.className = 'option-btn w-full text-left p-3 border border-slate-300 bg-white/70 hover:bg-white text-slate-900 rounded-lg text-xs md:text-sm font-semibold flex items-center shadow-sm';
    btn.onclick = () => selectChoice(idx);
    btn.innerHTML = `<span class="bg-slate-950 text-white font-bold rounded-full w-5 h-5 flex items-center justify-center text-[10px] mr-3">${letters[idx]}</span> <span class="flex-grow">${opt}</span>`;
    container.appendChild(btn);
  });
}

function selectChoice(index) {
  if (state.puzzleSolved) return;
  
  const loc = getLocationCase(state.currentLocationIndex);
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => btn.disabled = true);
  
  const isCorrect = (index === loc.puzzle.correctIndex);
  
  if (isCorrect) {
    sound.success();
    buttons[index].classList.add('correct');
    state.puzzleSolved = true;
    
    addRoundPoints('puzzle', getPuzzleScore(state.puzzleAttempts, state.hintsUsedInRound));
    updateHintButton();
    
    document.getElementById('tabWarrant').disabled = false;
    const warrantBtn = document.getElementById('goToWarrantBtn');
    warrantBtn.disabled = false;
    warrantBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    
    setTimeout(() => {
      switchTab('warrant');
    }, 1000);
  } else {
    sound.fail();
    buttons[index].classList.add('wrong');
    state.puzzleAttempts++;
    
    const col = document.getElementById('caseFileColumn');
    col.classList.add('shake-anim');
    setTimeout(() => col.classList.remove('shake-anim'), 400);
    
    state.lives--;
    updateHUD();
    saveGame();

    if (state.lives <= 0) {
      setTimeout(() => {
        triggerGameOver();
      }, 1000);
    } else {
      setTimeout(() => {
        buttons.forEach((btn, idx) => {
          if (idx !== index) btn.disabled = false;
        });
      }, 1000);
    }
  }
}

// ============================================================
// WARRANT DATABASE (TAB 4)
// ============================================================
function buildWarrantDropdowns(currentLoc) {
  const citySelect = document.getElementById('warrantCity');
  const hideoutSelect = document.getElementById('warrantHideout');
  const disguiseSelect = document.getElementById('warrantDisguise');
  
  citySelect.innerHTML = '<option value="">-- SELECT CITY --</option>';
  hideoutSelect.innerHTML = '<option value="">-- SELECT HIDEOUT --</option>';
  disguiseSelect.innerHTML = '<option value="">-- SELECT DISGUISE --</option>';
  
  const cities = getAllWarrantChoices('city');
  const hideouts = getAllWarrantChoices('hideout');
  const disguises = getAllWarrantChoices('disguise');
  
  cities.forEach(c => {
    citySelect.innerHTML += `<option value="${c}">${c}</option>`;
  });
  hideouts.forEach(h => {
    hideoutSelect.innerHTML += `<option value="${h}">${h}</option>`;
  });
  disguises.forEach(d => {
    disguiseSelect.innerHTML += `<option value="${d}">${d}</option>`;
  });
  
  if (state.difficulty === 'rookie') {
    citySelect.value = currentLoc.warrantAnswers.city;
    citySelect.disabled = true;
  } else {
    citySelect.disabled = false;
  }
}

function submitWarrant() {
  if (state.warrantIssued) return; // already approved this round; ignore repeat clicks during transition
  const cityVal = document.getElementById('warrantCity').value;
  const hideoutVal = document.getElementById('warrantHideout').value;
  const disguiseVal = document.getElementById('warrantDisguise').value;
  
  const currentLoc = getLocationCase(state.currentLocationIndex);
  
  if (!cityVal || !hideoutVal || !disguiseVal) {
    sound.fail();
    alert('Detective, ACME warrants require all fields to be populated.');
    return;
  }
  
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
      success: true,
      attempts: state.puzzleAttempts + 1,
      points: state.roundScore.total
    });
    
    const saveAfterSuccess = state.currentLocationIndex >= LOCATIONS.length - 1
      ? { isFinalConfrontation: true, finalConfrontationRound: 1 }
      : { currentLocationIndex: state.currentLocationIndex + 1 };
    saveGame(saveAfterSuccess);
    
    setTimeout(() => {
      triggerTransitionRound();
    }, 1800);
  } else {
    sound.fail();
    overlay.classList.remove('hidden');
    stamp.className = 'stamp text-5xl font-black px-8 py-3 rounded-xl border-4 transform -rotate-12 bg-white/95 shadow-2xl border-red-600 text-red-600 stamp-anim';
    stamp.textContent = 'REJECTED';
    
    state.lives--;
    state.streak = 0;
    updateHUD();
    saveGame();

    if (state.lives <= 0) {
      setTimeout(() => {
        triggerGameOver();
      }, 1500);
    } else {
      setTimeout(() => {
        overlay.classList.add('hidden');
      }, 1500);
    }
  }
}

// ============================================================
// TRANSITIONS AND ROUND OVER FLOWS
// ============================================================
function triggerTransitionRound() {
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
    ? `<span class="text-amber-400 font-extrabold">${suspect.name}</span> is in ACME custody. Carmen's network in <span class="text-amber-400 font-extrabold">${currentLoc.name}</span> just lost an operative.`
    : `Excellent work! You cornered and detained the suspect in <span class="text-amber-400 font-extrabold">${currentLoc.name}</span>!`;
  const nextLeadBlock = (currentLoc.briefing && currentLoc.briefing.nextLead)
    ? `<div class="glass rounded-xl p-4 text-left max-w-md mx-auto shadow-xl">
        <p class="text-[10px] uppercase tracking-widest font-black text-amber-700 mb-1">Seized From Suspect — Next Lead</p>
        <p class="text-slate-900 text-xs leading-relaxed italic">${currentLoc.briefing.nextLead}</p>
      </div>`
    : '';

  container.innerHTML = `
    <div class="text-6xl mb-4">🎉</div>
    <h3 class="title-font text-4xl font-extrabold text-emerald-400 leading-tight tracking-wide">
      ${headline}
    </h3>
    <p class="text-slate-200 text-lg">
      ${successCopy}
    </p>

    ${scoreDetails}

    ${nextLeadBlock}

    <div class="glass rounded-xl p-5 border border-white/10 text-left max-w-md mx-auto shadow-xl">
      <div class="flex items-center gap-2 border-b border-white/5 pb-2 mb-2">
        <span class="text-lg">Did You Know? 🎓</span>
      </div>
      <p class="text-slate-300 text-xs leading-relaxed italic">"${currentLoc.funFact}"</p>
    </div>
  `;
  
  animateTravelPath(() => {
    showScreen('betweenScreen');
    
    const nextBtn = document.getElementById('nextRoundBtn');
    if (state.currentLocationIndex >= LOCATIONS.length - 1) {
      nextBtn.textContent = '📋 COMPILE FINAL REPORT';
      nextBtn.onclick = triggerFinalConfrontationFlow;
    } else {
      nextBtn.textContent = 'TRAVEL TO NEXT LOCATION ✈️';
      nextBtn.onclick = nextRound;
    }
  });
}

function nextRound() {
  state.currentLocationIndex++;
  startLocation();
}

function triggerFinalConfrontationFlow() {
  state.isFinalConfrontation = true;
  state.finalConfrontationRound = 1;
  saveGame();
  startFinalConfrontationRound();
}

function startFinalConfrontationRound() {
  state.puzzleSolved = false;
  state.hintsUsedInRound = 0;
  state.activeTab = 'puzzle';
  updateHUD();
  drawMapGrid();
  renderTokenGrid();

  const suspectCard = document.getElementById('suspectCard');
  if (suspectCard) suspectCard.classList.add('hidden');

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
  
  puzzleTitle.textContent = `Boss Duel - Round ${state.finalConfrontationRound} of 3`;
  
  if (state.finalConfrontationRound === 1) {
    container.setAttribute('aria-label', 'Encrypted farewell note showing FDUPHQ for a Caesar cipher challenge.');
    document.getElementById('puzzleDescription').textContent = 'Crack Carmen\'s signature encrypted farewell note using Caesar cipher (shift left by 3).';
    container.innerHTML = `
      <div class="text-center">
        <span class="text-xs bg-slate-900 text-amber-400 px-3 py-1 rounded font-mono font-bold border border-slate-700">ENCRYPTED NOTE</span>
        <p class="typewriter-font text-lg font-bold border border-dashed border-red-700 bg-red-50 text-red-900 px-4 py-2 mt-4 rounded rotate-[-3deg]">FDUPHQ</p>
      </div>
    `;
    puzzleQuestion.textContent = 'What does "FDUPHQ" decode to?';
    
    buildCustomOptions([
      'CARMEN',
      'CAPER',
      'CHIEF',
      'CABIN'
    ], 0);
    
  } else if (state.finalConfrontationRound === 2) {
    container.setAttribute('aria-label', 'ACME intelligence list used to deduce Carmen getaway vehicle.');
    document.getElementById('puzzleDescription').textContent = 'Use process of elimination to deduce Carmen\'s getaway vehicle in El Calafate.';
    container.innerHTML = `
      <div class="text-left text-[9px] bg-white/80 p-3 rounded border border-slate-200 leading-tight space-y-1 font-semibold">
        <p class="font-bold border-b pb-0.5 text-red-800">ACME Intelligence Details</p>
        <p>• The suspect wears a red hat.</p>
        <p>• The suspect is not in Buenos Aires.</p>
        <p>• The suspect does not ride a train.</p>
        <p>• Hired a private tour guide in El Calafate.</p>
      </div>
    `;
    puzzleQuestion.textContent = 'Which getaway vehicle matches the profile?';
    
    buildCustomOptions([
      'Helicopter',
      'Bicycle',
      'Tour Boat',
      'Steam Locomotive'
    ], 2);
    
  } else if (state.finalConfrontationRound === 3) {
    container.setAttribute('aria-label', 'Compass grid starting at glacier row 3 column 3 and moving north 2 west 1.');
    document.getElementById('puzzleDescription').textContent = 'Solve the final compass tracking course on the Perito Moreno Glacier.';
    container.innerHTML = `
      <div class="w-full text-xs">
        <div class="grid grid-cols-6 gap-0.5 border border-slate-400 p-1 bg-blue-950/20 rounded font-bold text-[8px] text-center">
          <div></div><div class="bg-red-500/20 text-red-900 p-0.5 rounded">Ice Cave</div><div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div><div></div><div></div>
          <div></div><div></div><div class="bg-blue-300 p-0.5 rounded">Glacier</div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
        <p class="text-[8px] text-slate-500 text-center mt-2 font-semibold">Start: Glacier (3,3). Go North 2, West 1.</p>
      </div>
    `;
    puzzleQuestion.textContent = 'Which coordinate tile contains the escape portal?';
    
    buildCustomOptions([
      'Row 1, Col 2 (Ice Cave)',
      'Row 5, Col 4 (Crevasse)',
      'Row 3, Col 1 (Lagoon)',
      'Row 1, Col 4 (Forest Peak)'
    ], 0);
  }
}

function buildCustomOptions(options, correctIdx) {
  const container = document.getElementById('puzzleOptionsGrid');
  container.innerHTML = '';
  state.activeFinalCorrectIndex = correctIdx;
  
  options.forEach((opt, idx) => {
    const letters = ['A', 'B', 'C', 'D'];
    const btn = document.createElement('button');
    btn.className = 'option-btn w-full text-left p-3 border border-slate-300 bg-white/70 hover:bg-white text-slate-900 rounded-lg text-xs md:text-sm font-semibold flex items-center shadow-sm';
    btn.onclick = () => selectFinalChoice(idx, correctIdx);
    btn.innerHTML = `<span class="bg-slate-950 text-white font-bold rounded-full w-5 h-5 flex items-center justify-center text-[10px] mr-3">${letters[idx]}</span> <span class="flex-grow">${opt}</span>`;
    container.appendChild(btn);
  });
}

function selectFinalChoice(index, correctIdx) {
  if (state.puzzleSolved) return;
  
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => btn.disabled = true);
  
  const isCorrect = (index === correctIdx);
  
  if (isCorrect) {
    sound.success();
    buttons[index].classList.add('correct');
    state.puzzleSolved = true;
    
    setTimeout(() => {
      if (state.finalConfrontationRound < 3) {
        state.finalConfrontationRound++;
        saveGame();
        startFinalConfrontationRound();
      } else {
        triggerGameSuccess();
      }
    }, 1200);
  } else {
    sound.fail();
    buttons[index].classList.add('wrong');
    state.lives--;
    updateHUD();
    saveGame();

    if (state.lives <= 0) {
      setTimeout(() => {
        triggerGameOver();
      }, 1000);
    } else {
      setTimeout(() => {
        buttons.forEach((btn, idx) => {
          if (idx !== index) btn.disabled = false;
        });
      }, 1000);
    }
  }
}

function triggerGameSuccess() {
  sound.success();
  emitConfetti(50);
  
  const total = LOCATIONS.length;
  const pct = 100;
  const perfectGame = isPerfectGame();
  const finalBonus = SCORE_RULES.finalConfrontation;
  const lifeBonus = state.lives * SCORE_RULES.remainingLife;
  const perfectBonus = perfectGame ? SCORE_RULES.perfectGame : 0;
  const bonusTotal = finalBonus + lifeBonus + perfectBonus;
  state.score += bonusTotal;
  const rank = getRankString(state.score);
  const scoreRecord = saveHighScore(state.score, rank);
  updateStats(perfectGame ? 'perfect' : 'arrest');
  localStorage.setItem(LAST_RUN_KEY, JSON.stringify(state.caseVariantIds));
  localStorage.removeItem(SAVE_KEY);
  
  const container = document.getElementById('resultsContent');
  container.innerHTML = `
    <div class="text-7xl mb-4">🏆</div>
    <h3 class="title-font text-5xl font-black text-amber-400 uppercase tracking-wide">CASE CLOSED</h3>
    <p class="text-slate-200 text-lg mt-2">You arrested <span class="text-red-400 font-extrabold">Carmen Sandiego</span> in Patagonia and recovered all stolen treasures!</p>
    <p class="text-2xl font-bold text-sky-400 mt-4">${rank}</p>
    <p class="text-sm font-bold ${scoreRecord.isHighScore ? 'text-emerald-400' : 'text-slate-400'} mt-2">
      ${scoreRecord.isHighScore ? 'New high score for this difficulty' : `Best ${state.difficulty} score remains ${scoreRecord.previousBest}`}
    </p>
    <p class="typewriter-font text-[10px] text-slate-400 uppercase tracking-widest mt-3">Case ID: ${state.caseSeed}</p>

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
          <p class="text-slate-400 text-[9px] uppercase tracking-wider font-extrabold mt-1">Solve Rate</p>
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
  sound.fail();
  const rank = getRankString(state.score);
  const scoreRecord = saveHighScore(state.score, rank);
  updateStats('escape');
  localStorage.setItem(LAST_RUN_KEY, JSON.stringify(state.caseVariantIds));
  localStorage.removeItem(SAVE_KEY);

  const container = document.getElementById('resultsContent');
  container.innerHTML = `
    <div class="text-7xl mb-4">🚨</div>
    <h3 class="title-font text-5xl font-black text-red-500 uppercase tracking-wide">CASE ESCAPED</h3>
    <p class="text-slate-200 text-lg mt-2">Carmen Sandiego slipped past your perimeter. You ran out of backup lives!</p>
    <p class="text-sm text-slate-400 mt-2">Better luck next time, detective.</p>
    <p class="text-sm font-bold ${scoreRecord.isHighScore ? 'text-emerald-400' : 'text-slate-400'} mt-2">
      ${scoreRecord.isHighScore ? 'New high score for this difficulty' : `Best ${state.difficulty} score remains ${scoreRecord.previousBest}`}
    </p>
    <p class="typewriter-font text-[10px] text-slate-400 uppercase tracking-widest mt-3">Case ID: ${state.caseSeed}</p>

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
  const loc = getLocationCase(state.currentLocationIndex);
  if (!loc || !loc.warrantAnswers) return '';

  const puzzleAnswer = (loc.puzzle && Array.isArray(loc.puzzle.options))
    ? loc.puzzle.options[loc.puzzle.correctIndex]
    : '';

  const rows = [
    ['City', loc.warrantAnswers.city],
    ['Hideout', loc.warrantAnswers.hideout],
    ['Disguise', loc.warrantAnswers.disguise]
  ];

  return `
    <div class="glass rounded-2xl p-5 mt-6 max-w-md mx-auto text-left shadow-2xl">
      <p class="text-[10px] uppercase tracking-widest font-black text-amber-700 mb-1">Case File — Correct Answers</p>
      <p class="text-xs text-slate-700 mb-3">Carmen got away in <span class="font-bold">${loc.name}</span>. Here's what the warrant should have read:</p>
      <dl class="grid grid-cols-1 gap-2 text-xs">
        ${rows.map(([label, value]) => `
          <div class="flex justify-between gap-3 border-b border-slate-900/10 pb-1">
            <dt class="font-bold uppercase tracking-wider text-slate-700">${label}</dt>
            <dd class="text-slate-900 text-right">${value}</dd>
          </div>
        `).join('')}
      </dl>
      ${puzzleAnswer ? `
        <div class="mt-3 pt-3 border-t border-slate-900/10">
          <p class="text-[10px] uppercase tracking-widest font-bold text-slate-700 mb-1">Puzzle Answer</p>
          <p class="text-xs italic text-slate-900">${puzzleAnswer}</p>
        </div>
      ` : ''}
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
  sound.click();
  document.getElementById('resetModal').classList.remove('hidden');
}

function hideResetModal() {
  sound.click();
  document.getElementById('resetModal').classList.add('hidden');
}

function confirmReset() {
  localStorage.removeItem(SAVE_KEY);
  hideResetModal();
  goToTitle();
}

// ============================================================
// INTERACTIVE LEAFLET REAL-TIME MAP
// ============================================================
let map;
let mapMarkers = [];
let mapPolyline = null;

function initLeafletMap() {
  if (map) return;
  if (!window.L) {
    renderMapFallback();
    return;
  }
  
  // Center on central Argentina
  map = L.map('map', {
    center: [-38.4161, -63.6167],
    zoom: 3.5,
    zoomControl: false,
    attributionControl: false,
    dragging: false,
    touchZoom: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: false
  });
  
  // High-fidelity dark mode map tiles matching deep navy palette
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 10,
    minZoom: 3
  }).on('tileerror', renderMapFallback).addTo(map);
}

function invalidateMapSize() {
  if (map) {
    map.invalidateSize();
  }
}

function getMapTextAlternative() {
  const current = LOCATIONS[state.currentLocationIndex];
  const visited = LOCATIONS
    .slice(0, state.currentLocationIndex)
    .map((loc) => loc.name)
    .join(', ') || 'None yet';
  const next = LOCATIONS[state.currentLocationIndex + 1]?.name || 'Final report';
  return `Current city: ${current.name}. Province: ${current.province}. Visited cities: ${visited}. Next destination: ${next}.`;
}

function updateMapTextAlternative() {
  const text = getMapTextAlternative();
  const alt = document.getElementById('mapTextAlternative');
  if (alt) alt.textContent = text;
  return text;
}

function renderMapFallback() {
  const mapEl = document.getElementById('map');
  if (!mapEl) return;
  const current = LOCATIONS[state.currentLocationIndex];
  const text = updateMapTextAlternative();
  mapEl.innerHTML = `
    <div class="map-fallback" role="img" aria-label="${text}">
      <p class="text-xs uppercase font-black text-amber-400">Static Map Fallback</p>
      <p class="text-lg font-black">${current.emoji || '•'} ${current.name}</p>
      <p class="text-sm">${current.province}</p>
      <ol class="text-xs leading-relaxed">
        ${LOCATIONS.map((loc, index) => `<li>${index + 1}. ${loc.name} - ${index < state.currentLocationIndex ? 'visited' : index === state.currentLocationIndex ? 'current' : 'upcoming'}</li>`).join('')}
      </ol>
    </div>
  `;
}

function drawMapGrid() {
  initLeafletMap();
  updateMapTextAlternative();
  if (!map) {
    renderMapFallback();
    const cur = LOCATIONS[state.currentLocationIndex];
    document.getElementById('currentCityText').textContent = `${cur.emoji} ${cur.name} (${cur.province})`;
    return;
  }
  invalidateMapSize();
  
  // Remove existing markers
  mapMarkers.forEach(m => map.removeLayer(m));
  mapMarkers = [];
  
  LOCATIONS.forEach((loc, idx) => {
    const isCurrent = idx === state.currentLocationIndex;
    const isVisited = idx < state.currentLocationIndex;
    
    let color = '#38bdf8'; // Locked blue
    let radius = 4;
    let weight = 1;
    let opacity = 0.3;
    
    if (isCurrent) {
      color = '#fbbf24'; // Active gold
      radius = 7;
      weight = 3;
      opacity = 0.9;
    } else if (isVisited) {
      color = '#10b981'; // Visited green
      radius = 5;
      weight = 1;
      opacity = 0.7;
    }
    
    const marker = L.circleMarker([loc.lat, loc.lng], {
      color: color,
      fillColor: color,
      fillOpacity: opacity - 0.1,
      radius: radius,
      weight: weight,
      opacity: opacity
    }).addTo(map);
    
    if (isCurrent) {
      marker.bindTooltip(loc.name, {
        permanent: true,
        direction: 'top',
        className: 'leaflet-tooltip-carmen'
      }).openTooltip();
      
      // Pan to focus on active coordinate
      map.setView([loc.lat, loc.lng], 4.5, { animate: !shouldReduceMotion(), duration: shouldReduceMotion() ? 0 : 1.2 });
    }
    
    mapMarkers.push(marker);
  });
  
  const cur = LOCATIONS[state.currentLocationIndex];
  document.getElementById('currentCityText').textContent = `${cur.emoji} ${cur.name} (${cur.province})`;
}

function animateTravelPath(onComplete) {
  if (state.currentLocationIndex >= LOCATIONS.length - 1) {
    onComplete();
    return;
  }
  if (!map || shouldReduceMotion()) {
    onComplete();
    return;
  }
  
  const fromCity = LOCATIONS[state.currentLocationIndex];
  const toCity = LOCATIONS[state.currentLocationIndex + 1];
  
  if (mapPolyline) map.removeLayer(mapPolyline);
  
  mapPolyline = L.polyline([[fromCity.lat, fromCity.lng], [toCity.lat, toCity.lng]], {
    color: '#fbbf24',
    weight: 2,
    dashArray: '5, 5',
    opacity: 0.8
  }).addTo(map);
  
  // Focus bounds to fit the flight path segment
  map.fitBounds(mapPolyline.getBounds(), { padding: [40, 40], animate: true, duration: 1.0 });
  
  // Custom aircraft div icon
  const planeIcon = L.divIcon({
    html: '<div class="text-xl transform rotate-45 select-none pointer-events-none">✈️</div>',
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });
  
  const planeMarker = L.marker([fromCity.lat, fromCity.lng], { icon: planeIcon }).addTo(map);
  
  const steps = 40;
  let currentStep = 0;
  
  function step() {
    if (currentStep <= steps) {
      const t = currentStep / steps;
      // Linear interpolation between lat/lng coordinates
      const lat = fromCity.lat + (toCity.lat - fromCity.lat) * t;
      const lng = fromCity.lng + (toCity.lng - fromCity.lng) * t;
      planeMarker.setLatLng([lat, lng]);
      
      currentStep++;
      setTimeout(step, 25);
    } else {
      map.removeLayer(planeMarker);
      map.removeLayer(mapPolyline);
      mapPolyline = null;
      onComplete();
    }
  }
  
  // Start plane animation after map pan settles
  setTimeout(step, 1000);
}

// ============================================================
// INVENTORY TILE RENDER
// ============================================================
function renderTokenGrid() {
  const container = document.getElementById('tokenGrid');
  container.innerHTML = '';
  
  LOCATIONS.forEach((loc) => {
    const hasToken = state.clueTokens.includes(loc.id);
    const sym = LOCATION_SYMBOLS[loc.id];
    
    const tile = document.createElement('div');
    if (hasToken) {
      tile.className = 'bg-amber-500/10 border border-amber-500/30 rounded-xl p-2 text-center flex flex-col items-center justify-center aspect-square shadow-sm';
      tile.innerHTML = `
        <span class="text-lg" title="${sym.name} Symbol">${sym.char}</span>
        <span class="text-[7px] text-amber-400 mt-1 font-bold truncate max-w-full uppercase">${loc.name.split(' ')[0]}</span>
      `;
    } else {
      tile.className = 'bg-slate-900/40 border border-white/5 rounded-xl p-2 text-center flex flex-col items-center justify-center aspect-square opacity-30';
      tile.innerHTML = `
        <span class="text-lg text-slate-600">❓</span>
        <span class="text-[7px] text-slate-500 mt-1 font-bold truncate max-w-full uppercase">Locked</span>
      `;
    }
    container.appendChild(tile);
  });
}

// ============================================================
// CONFETTI PARTICLE SYSTEM
// ============================================================
function emitConfetti(count) {
  const colors = ['#fbbf24', '#f59e0b', '#34d399', '#38bdf8', '#ef4444', '#ec4899'];
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'absolute rounded-full pointer-events-none z-50';
    p.style.width = `${5 + Math.random() * 8}px`;
    p.style.height = `${5 + Math.random() * 8}px`;
    p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    p.style.left = `${Math.random() * 100}vw`;
    p.style.top = `-20px`;
    
    p.style.animation = `confetti-fall ${2 + Math.random() * 2}s linear forwards`;
    p.style.animationDelay = `${Math.random() * 0.5}s`;
    
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 4000);
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
  if (shouldReduceMotion()) return;
  const container = document.getElementById('bgParticles');
  container.innerHTML = '';
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    const size = 3 + Math.random() * 4;
    p.className = 'absolute rounded-full pointer-events-none';
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 100}%`;
    p.style.background = `rgba(56,189,248,${0.05 + Math.random() * 0.08})`;
    
    p.style.transition = 'transform 10s ease-in-out';
    container.appendChild(p);
    
    setInterval(() => {
      const dx = (Math.random() * 50 - 25);
      const dy = (Math.random() * 50 - 25);
      p.style.transform = `translate(${dx}px, ${dy}px)`;
    }, 4000 + Math.random() * 3000);
  }
}
