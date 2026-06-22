// ============================================================
// GAME DATA & LOCATIONS
// ============================================================
let LOCATIONS = [];

const FALLBACK_LOCATIONS = [
  {
    "id": "downtown-square",
    "name": "Downtown Square",
    "province": "Historic Downtown",
    "emoji": "🏛️",
    "tagline": "The civic heart of Bentonville",
    "lat": 36.3729,
    "lng": -94.2088,
    "henchman": {
      "name": "Dottie Ledger",
      "alias": "The Square Dealer",
      "emoji": "🧾",
      "role": "Receipt forger hiding in market-day crowds",
      "dossierNote": "Knows every vendor tent, bench, and side street around the Square. Uses event flyers as coded delivery slips."
    },
    "caseId": "classic-downtown-square",
    "briefing": {
      "headline": "SQUARE MARKET SWAP!",
      "report": "A brass market bell vanished from a farmers market stall on the Bentonville Square. Carmen is already gone, but The Square Dealer is still in Bentonville, blending in as a farmers market vendor.",
      "callingCard": "A red card reads: \"I left the hard part local. Ask The Square Dealer why Downtown Square mattered.\"",
      "suspect": {
        "name": "Dottie Ledger",
        "alias": "The Square Dealer",
        "emoji": "🧾",
        "role": "Receipt forger hiding in market-day crowds",
        "dossierNote": "Knows every vendor tent, bench, and side street around the Square. Uses event flyers as coded delivery slips."
      },
      "nextLead": "A dime-store receipt points across the Square to the museum where the price tags do not add up."
    },
    "clues": [
      "A canvas tote is stamped with Bentonville Farmers Market and a sketch of the Square fountain.",
      "The receipt lists local honey, flowers, and a booth number facing Central Avenue.",
      "A witness saw the courier fold a tent beside boutiques, bakeries, and public art."
    ],
    "puzzle": {
      "title": "Market Map Match",
      "description": "Use the Bentonville clues to identify the correct Downtown Square hideout.",
      "question": "Which stop matches the market clues?",
      "options": ["Downtown Square", "Osage Park", "Crystal Bridges", "Coler Mountain Bike Preserve"],
      "correctIndex": 0
    },
    "warrantAnswers": {
      "city": "Downtown Square",
      "hideout": "Downtown Square",
      "disguise": "Farmers market vendor"
    },
    "funFact": "The Bentonville Square hosts community programs including First Fridays, farmers markets, and art markets."
  },
  {
    "id": "walmart-museum",
    "name": "Walmart Museum",
    "province": "Downtown Bentonville",
    "emoji": "🛒",
    "tagline": "Walton's 5&10 and retail history",
    "lat": 36.3727,
    "lng": -94.2092,
    "henchman": {
      "name": "Marty Markup",
      "alias": "The Price Roller",
      "emoji": "🏷️",
      "role": "Archive thief swapping labels and display tags",
      "dossierNote": "Former exhibit installer. Hides microfilm behind old price cards and knows the Spark Cafe closing routine."
    },
    "caseId": "classic-walmart-museum",
    "briefing": {
      "headline": "FIVE AND DIME FILE VANISHES!",
      "report": "A copy of Mr. Sam's first price ledger vanished from Walton's 5&10. Carmen is already gone, but The Price Roller is still in Bentonville, blending in as a dime-store clerk.",
      "callingCard": "A red card reads: \"I left the hard part local. Ask The Price Roller why Walton's 5&10 mattered.\"",
      "suspect": {
        "name": "Marty Markup",
        "alias": "The Price Roller",
        "emoji": "🏷️",
        "role": "Archive thief swapping labels and display tags",
        "dossierNote": "Former exhibit installer. Hides microfilm behind old price cards and knows the Spark Cafe closing routine."
      },
      "nextLead": "A campus visitor badge lists an 8th Street meeting room and a tour time in the margin."
    },
    "clues": [
      "The shelf tag says this humble dime store is where the story began.",
      "A red price roller marked every label 5 and 10.",
      "The suspect asked how to get from classic finds to the museum galleries."
    ],
    "puzzle": {
      "title": "Price Tag Cipher",
      "description": "Use the Bentonville clues to identify the correct Walmart Museum hideout.",
      "question": "Which museum space is tied to the 5&10 clues?",
      "options": ["Walton's 5&10", "The Quiver", "Momentary Green", "The Hub"],
      "correctIndex": 0
    },
    "warrantAnswers": {
      "city": "Walmart Museum",
      "hideout": "Walton's 5&10",
      "disguise": "Dime-store clerk"
    },
    "funFact": "The Walmart Museum presents Walton's 5&10 as the small dime store where Walmart's story began."
  },
  {
    "id": "walmart-home-office",
    "name": "Walmart Home Office",
    "province": "8th Street Campus",
    "emoji": "🏢",
    "tagline": "A 350-acre campus built for Bentonville work life",
    "lat": 36.3599,
    "lng": -94.2054,
    "henchman": {
      "name": "Hollis Hallway",
      "alias": "The Wayfinder",
      "emoji": "🧭",
      "role": "Campus-route fixer with a doctored tour map",
      "dossierNote": "Moves through public tour routes with a lanyard, a tablet, and a habit of relabeling meeting rooms."
    },
    "caseId": "classic-walmart-home-office",
    "briefing": {
      "headline": "CAMPUS MAP MISDIRECT!",
      "report": "An interactive campus map chip vanished from the new Walmart Home Office visitor route. Carmen is already gone, but The Wayfinder is still in Bentonville, blending in as a campus wayfinder.",
      "callingCard": "A red card reads: \"I left the hard part local. Ask The Wayfinder why Interactive map kiosk mattered.\"",
      "suspect": {
        "name": "Hollis Hallway",
        "alias": "The Wayfinder",
        "emoji": "🧭",
        "role": "Campus-route fixer with a doctored tour map",
        "dossierNote": "Moves through public tour routes with a lanyard, a tablet, and a habit of relabeling meeting rooms."
      },
      "nextLead": "A gallery crate label names a bridge, a spring, and a museum trail north of downtown."
    },
    "clues": [
      "The map chip shows 350 acres and a zoom button.",
      "The courier kept saying the whole campus could be checked from one screen.",
      "A visitor badge points to 8th Street and a public tour."
    ],
    "puzzle": {
      "title": "Campus Scale Match",
      "description": "Use the Bentonville clues to identify the correct Walmart Home Office hideout.",
      "question": "Which Home Office stop matches the 350-acre clue?",
      "options": ["Interactive map kiosk", "Walton's 5&10", "Crystal Spring pond", "Osage wetland boardwalk"],
      "correctIndex": 0
    },
    "warrantAnswers": {
      "city": "Walmart Home Office",
      "hideout": "Interactive map kiosk",
      "disguise": "Campus wayfinder"
    },
    "funFact": "Walmart describes the new Home Office as a 350-acre campus with an interactive map."
  },
  {
    "id": "crystal-bridges",
    "name": "Crystal Bridges",
    "province": "Museum Way",
    "emoji": "🎨",
    "tagline": "American art in an Ozark ravine",
    "lat": 36.3812,
    "lng": -94.2037,
    "henchman": {
      "name": "Clara Glaze",
      "alias": "The Varnish",
      "emoji": "🖼️",
      "role": "Art handler forging gallery transfer slips",
      "dossierNote": "Studies sightlines between the pavilions and ponds. Carries decoy crate labels in a conservation folder."
    },
    "caseId": "classic-crystal-bridges",
    "briefing": {
      "headline": "GLASS BRIDGE GETAWAY!",
      "report": "A gallery transfer slip vanished from the bridge overlooking the ponds. Carmen is already gone, but The Varnish is still in Bentonville, blending in as an art handler.",
      "callingCard": "A red card reads: \"I left the hard part local. Ask The Varnish why Glass bridge mattered.\"",
      "suspect": {
        "name": "Clara Glaze",
        "alias": "The Varnish",
        "emoji": "🖼️",
        "role": "Art handler forging gallery transfer slips",
        "dossierNote": "Studies sightlines between the pavilions and ponds. Carries decoy crate labels in a conservation folder."
      },
      "nextLead": "A black-box theater cue sheet sends the trail toward a former cheese factory near 8th Street Market."
    },
    "clues": [
      "The witness saw a crate cross a glass-enclosed bridge over water.",
      "The transfer slip mentions American art and a museum in an Ozark setting.",
      "The suspect headed toward pavilions around two spring-fed ponds."
    ],
    "puzzle": {
      "title": "Bridge Evidence",
      "description": "Use the Bentonville clues to identify the correct Crystal Bridges hideout.",
      "question": "Which Crystal Bridges location matches the water-and-glass clues?",
      "options": ["Glass bridge", "Momentary Green", "Square Park", "Osage boardwalk"],
      "correctIndex": 0
    },
    "warrantAnswers": {
      "city": "Crystal Bridges",
      "hideout": "Glass bridge",
      "disguise": "Art handler"
    },
    "funFact": "Crystal Bridges takes its name from a nearby natural spring and bridge construction in the building."
  },
  {
    "id": "the-momentary",
    "name": "The Momentary",
    "province": "8th Street Market District",
    "emoji": "🎭",
    "tagline": "A former cheese factory turned contemporary art space",
    "lat": 36.3653,
    "lng": -94.2028,
    "henchman": {
      "name": "Mina Flux",
      "alias": "The Pop-Up",
      "emoji": "🎛️",
      "role": "Performance tech rerouting props through back-of-house",
      "dossierNote": "Times escapes to show changeovers. Her favorite hiding places are the Tower stairs and Fermentation Hall cases."
    },
    "caseId": "classic-the-momentary",
    "briefing": {
      "headline": "CHEESE FACTORY CUE SHEET!",
      "report": "A performance cue sheet vanished from the repurposed factory floor. Carmen is already gone, but The Pop-Up is still in Bentonville, blending in as a stage technician.",
      "callingCard": "A red card reads: \"I left the hard part local. Ask The Pop-Up why Fermentation Hall mattered.\"",
      "suspect": {
        "name": "Mina Flux",
        "alias": "The Pop-Up",
        "emoji": "🎛️",
        "role": "Performance tech rerouting props through back-of-house",
        "dossierNote": "Times escapes to show changeovers. Her favorite hiding places are the Tower stairs and Fermentation Hall cases."
      },
      "nextLead": "A seed packet marked North Main says the next handoff is hiding among native Ozark plants."
    },
    "clues": [
      "The clue names a former cheese factory and a black-box theater.",
      "The suspect carried gaffer tape and a cue sheet marked Fermentation Hall.",
      "A floor plan points to a multidisciplinary art space near 8th Street Market."
    ],
    "puzzle": {
      "title": "Backstage Venue Match",
      "description": "Use the Bentonville clues to identify the correct The Momentary hideout.",
      "question": "Which Momentary space fits the theater evidence?",
      "options": ["Fermentation Hall", "Square Park", "Walton's 5&10", "Crystal Bridges library"],
      "correctIndex": 0
    },
    "warrantAnswers": {
      "city": "The Momentary",
      "hideout": "Fermentation Hall",
      "disguise": "Stage technician"
    },
    "funFact": "The Momentary transformed a decommissioned 63,000-square-foot cheese factory into a contemporary art space."
  },
  {
    "id": "compton-gardens",
    "name": "Compton Gardens",
    "province": "North Main Greenway",
    "emoji": "🌿",
    "tagline": "Native Ozark plants in a seven-acre downtown haven",
    "lat": 36.3766,
    "lng": -94.2082,
    "henchman": {
      "name": "Fern Compton",
      "alias": "The Understory",
      "emoji": "🍃",
      "role": "Botanical courier marking trails with plant tags",
      "dossierNote": "Can vanish behind native shrubs without snapping a twig. Leaves route notes in seed packets."
    },
    "caseId": "classic-compton-gardens",
    "briefing": {
      "headline": "NATIVE PLANT TAG THEFT!",
      "report": "A set of hand-lettered plant tags vanished from the native plant collection. Carmen is already gone, but The Understory is still in Bentonville, blending in as a botanist.",
      "callingCard": "A red card reads: \"I left the hard part local. Ask The Understory why Native plant beds mattered.\"",
      "suspect": {
        "name": "Fern Compton",
        "alias": "The Understory",
        "emoji": "🍃",
        "role": "Botanical courier marking trails with plant tags",
        "dossierNote": "Can vanish behind native shrubs without snapping a twig. Leaves route notes in seed packets."
      },
      "nextLead": "A bike repair ticket lists the Hub, a campground, and a westside trail code."
    },
    "clues": [
      "The stolen tags name native trees, grasses, vines, shrubs, and perennials.",
      "A seed packet points to North Main Street and a seven-acre greenspace.",
      "The suspect wore garden gloves and quoted Dr. Neil Compton."
    ],
    "puzzle": {
      "title": "Plant Tag Sort",
      "description": "Use the Bentonville clues to identify the correct Compton Gardens hideout.",
      "question": "Which Compton Gardens hideout matches the native-plant clues?",
      "options": ["Native plant beds", "The Hub", "Momentary Green", "Square Park"],
      "correctIndex": 0
    },
    "warrantAnswers": {
      "city": "Compton Gardens",
      "hideout": "Native plant beds",
      "disguise": "Botanist"
    },
    "funFact": "Compton Gardens & Arboretum showcases native Ozark plants in a seven-acre downtown greenspace."
  },
  {
    "id": "coler-preserve",
    "name": "Coler Mountain Bike Preserve",
    "province": "West Bentonville Trails",
    "emoji": "🚵",
    "tagline": "Trailhead, Hub, campground, and deep-woods rides",
    "lat": 36.3807,
    "lng": -94.2328,
    "henchman": {
      "name": "Ridge Reilly",
      "alias": "The Dropper",
      "emoji": "🛞",
      "role": "Bike courier using trail names as dead-drop codes",
      "dossierNote": "Rides with a silent freehub and a false-bottom repair kit. Knows every connector between the Hub and camp."
    },
    "caseId": "classic-coler-preserve",
    "briefing": {
      "headline": "HUB TRAIL TOKEN LIFTED!",
      "report": "A steel trail-launch token vanished from the top of Coler Mountain. Carmen is already gone, but The Dropper is still in Bentonville, blending in as a bike mechanic.",
      "callingCard": "A red card reads: \"I left the hard part local. Ask The Dropper why The Hub mattered.\"",
      "suspect": {
        "name": "Ridge Reilly",
        "alias": "The Dropper",
        "emoji": "🛞",
        "role": "Bike courier using trail names as dead-drop codes",
        "dossierNote": "Rides with a silent freehub and a false-bottom repair kit. Knows every connector between the Hub and camp."
      },
      "nextLead": "A wetland map and an archery scorecard point south to Osage Park."
    },
    "clues": [
      "The clue names a 20-foot steel and wood launch structure.",
      "Three downhill run names are scratched into a tire lever.",
      "The courier carried a repair stand tag marked Fire Line."
    ],
    "puzzle": {
      "title": "Trail Launch Deduction",
      "description": "Use the Bentonville clues to identify the correct Coler Mountain Bike Preserve hideout.",
      "question": "Which Coler feature is the launch point?",
      "options": ["The Hub", "Momentary Tower", "Downtown Square", "Osage pavilion"],
      "correctIndex": 0
    },
    "warrantAnswers": {
      "city": "Coler Mountain Bike Preserve",
      "hideout": "The Hub",
      "disguise": "Bike mechanic"
    },
    "funFact": "At the top of Coler Mountain, The Hub launches riders toward three downhill runs."
  },
  {
    "id": "osage-park",
    "name": "Osage Park",
    "province": "Southwest Bentonville Wetlands",
    "emoji": "🦆",
    "tagline": "Wetlands, boardwalks, archery, art, and play",
    "lat": 36.3545,
    "lng": -94.2224,
    "henchman": {
      "name": "Ozzie Quill",
      "alias": "The Fletching",
      "emoji": "🏹",
      "role": "Lookout hiding evidence among wetland programs",
      "dossierNote": "Uses archery scorecards for cipher keys and knows which boardwalk turns are quiet after sunset."
    },
    "caseId": "classic-osage-park",
    "briefing": {
      "headline": "BOARDWALK BEARING STOLEN!",
      "report": "A final compass bearing vanished from the Osage Park wetland boardwalks. Carmen is already gone, but The Fletching is still in Bentonville, blending in as a wetland guide.",
      "callingCard": "A red card reads: \"I left the hard part local. Ask The Fletching why Floating boardwalks mattered.\"",
      "suspect": {
        "name": "Ozzie Quill",
        "alias": "The Fletching",
        "emoji": "🏹",
        "role": "Lookout hiding evidence among wetland programs",
        "dossierNote": "Uses archery scorecards for cipher keys and knows which boardwalk turns are quiet after sunset."
      },
      "nextLead": "The last scorecard has Carmen's red mark and three final coordinates for the closing chase."
    },
    "clues": [
      "The map circles floating boardwalks around a wetland ecosystem.",
      "The suspect carried binoculars and a sunrise-to-sunset park note.",
      "A muddy arrow points from the pavilion toward the water."
    ],
    "puzzle": {
      "title": "Wetland Route",
      "description": "Use the Bentonville clues to identify the correct Osage Park hideout.",
      "question": "Where does the final compass bearing point?",
      "options": ["Floating boardwalks", "The Hub", "Crystal Bridges pavilions", "Downtown Square"],
      "correctIndex": 0
    },
    "warrantAnswers": {
      "city": "Osage Park",
      "hideout": "Floating boardwalks",
      "disguise": "Wetland guide"
    },
    "funFact": "Osage Park includes floating boardwalks around a wetland ecosystem."
  }
];
LOCATIONS = FALLBACK_LOCATIONS;

const DEFAULT_FINAL_CONFRONTATION_ROUNDS = [
  {
    ariaLabel: 'Encrypted farewell note showing FDUPHQ for a Caesar cipher challenge.',
    description: 'Crack Carmen\'s signature encrypted farewell note using Caesar cipher (shift left by 3).',
    visualHtml: `
      <div class="text-center">
        <span class="text-xs bg-slate-900 text-amber-400 px-3 py-1 rounded font-mono font-bold border border-slate-700">ENCRYPTED NOTE</span>
        <p class="typewriter-font text-lg font-bold border border-dashed border-red-700 bg-red-50 text-red-900 px-4 py-2 mt-4 rounded rotate-[-3deg]">FDUPHQ</p>
      </div>
    `,
    question: 'What does "FDUPHQ" decode to?',
    options: ['CARMEN', 'CAPER', 'CHIEF', 'CABIN'],
    correctIndex: 0
  },
  {
    ariaLabel: 'ACME intelligence list used to deduce Carmen getaway vehicle.',
    description: 'Use process of elimination to deduce Carmen\'s getaway route through Bentonville.',
    visualHtml: `
      <div class="text-left text-[9px] bg-white/80 p-3 rounded border border-slate-200 leading-tight space-y-1 font-semibold">
        <p class="font-bold border-b pb-0.5 text-red-800">ACME Intelligence Details</p>
        <p>* The suspect wears a red hat.</p>
        <p>* The suspect is not at the Downtown Square.</p>
        <p>* The suspect does not drive a delivery truck.</p>
        <p>* Hired a trail guide near Osage Park.</p>
      </div>
    `,
    question: 'Which getaway vehicle matches the profile?',
    options: ['Helicopter', 'Bicycle', 'Tour Boat', 'Delivery Truck'],
    correctIndex: 1
  },
  {
    ariaLabel: 'Compass grid starting at wetland row 3 column 3 and moving north 2 west 1.',
    description: 'Solve the final compass tracking course through the Osage Park wetlands.',
    visualHtml: `
      <div class="w-full text-xs">
        <div class="grid grid-cols-6 gap-0.5 border border-slate-400 p-1 bg-blue-950/20 rounded font-bold text-[8px] text-center">
          <div></div><div class="bg-red-500/20 text-red-900 p-0.5 rounded">Boardwalk</div><div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div><div></div><div></div>
          <div></div><div></div><div class="bg-blue-300 p-0.5 rounded">Wetland</div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div><div></div><div></div>
        </div>
        <p class="text-[8px] text-slate-500 text-center mt-2 font-semibold">Start: Wetland (3,3). Go North 2, West 1.</p>
      </div>
    `,
    question: 'Which coordinate tile contains the escape portal?',
    options: [
      'Row 1, Col 2 (Boardwalk)',
      'Row 5, Col 4 (Dog Park)',
      'Row 3, Col 1 (Pond Dock)',
      'Row 1, Col 4 (Archery Range)'
    ],
    correctIndex: 0
  }
];

// Symbols assigned to locations for final puzzle
const LOCATION_SYMBOLS = {
  'downtown-square': { char: '🏛️', name: 'Square' },
  'walmart-museum': { char: '🏷️', name: 'Price Tag' },
  'walmart-home-office': { char: '🧭', name: 'Campus' },
  'crystal-bridges': { char: '🖼️', name: 'Gallery' },
  'the-momentary': { char: '🎭', name: 'Stage' },
  'compton-gardens': { char: '🌿', name: 'Leaf' },
  'coler-preserve': { char: '🚵', name: 'Trail' },
  'osage-park': { char: '🏹', name: 'Arrow' }
};

const DEFAULT_QUIZ_PACK = {
  schemaVersion: 1,
  id: 'bentonville-carmen',
  title: 'Where in Bentonville is Carmen Sandiego?',
  subtitle: 'Bentonville Division',
  heroLocation: 'BENTONVILLE',
  intro: 'The master thief Carmen Sandiego has scattered clues across Bentonville landmarks, trails, museums, and public spaces. Use your deductive wits, decode ciphers, and issue the correct arrest warrant before she slips away!',
  evidenceLabel: 'ACME BENTONVILLE EVIDENCE',
  successMessage: 'You arrested Carmen Sandiego in Bentonville and recovered every stolen clue.',
  map: {
    center: {
      lat: 36.3729,
      lng: -94.2088
    },
    zoom: 13,
    minZoom: 11,
    maxZoom: 17
  },
  finalConfrontation: {
    title: 'Boss Duel',
    rounds: DEFAULT_FINAL_CONFRONTATION_ROUNDS
  },
  locations: FALLBACK_LOCATIONS,
  questions: createFallbackQuestionBank(FALLBACK_LOCATIONS),
  sources: {}
};

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
const SAVE_SCHEMA_VERSION = 3;
const SAVE_KEY = 'carmen_save';
const LAST_RUN_KEY = 'carmen_lastCaseVariantIds';
const SETTINGS_KEY = 'carmen_settings';
const PACK_SELECTION_KEY = 'carmen_selectedQuizPackId';

function createFallbackQuestionBank(locations) {
  return Object.fromEntries(locations.map((location) => [location.id, [createClassicCase(location)]]));
}

function hasFiniteNumber(value) {
  return typeof value === 'number' && Number.isFinite(value);
}

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

function normalizeQuizPack(pack) {
  const nextPack = {
    ...DEFAULT_QUIZ_PACK,
    ...pack,
    map: {
      ...DEFAULT_QUIZ_PACK.map,
      ...(pack?.map || {})
    },
    finalConfrontation: {
      ...DEFAULT_QUIZ_PACK.finalConfrontation,
      ...(pack?.finalConfrontation || {})
    }
  };
  nextPack.map.center = normalizeMapCenter(nextPack.map.center);
  return nextPack;
}

function validateQuizPack(pack) {
  if (!pack || !Array.isArray(pack.locations) || pack.locations.length === 0) {
    throw new Error('Quiz pack must include at least one location.');
  }
  if (!pack.questions || typeof pack.questions !== 'object') {
    throw new Error('Quiz pack must include a questions object keyed by location id.');
  }
  if (!hasFiniteNumber(pack.map?.center?.lat) || !hasFiniteNumber(pack.map?.center?.lng)) {
    throw new Error('Quiz pack map.center must include numeric lat and lng values.');
  }

  pack.locations.forEach((location) => {
    if (!location.id || !hasFiniteNumber(location.lat) || !hasFiniteNumber(location.lng)) {
      throw new Error(`Quiz pack location "${location.id || 'unknown'}" must include id, lat, and lng.`);
    }
    if (!Array.isArray(pack.questions[location.id]) || pack.questions[location.id].length === 0) {
      throw new Error(`Quiz pack location "${location.id}" is missing a question pool.`);
    }
  });
}

function normalizeQuizPackManifest(manifest) {
  return {
    schemaVersion: 1,
    ...manifest,
    packs: Array.isArray(manifest?.packs) ? manifest.packs : []
  };
}

function validateQuizPackManifest(manifest) {
  if (!manifest || !Array.isArray(manifest.packs) || manifest.packs.length === 0) {
    throw new Error('Quiz pack manifest must include at least one pack.');
  }
  if (!manifest.defaultPackId) {
    throw new Error('Quiz pack manifest must include a defaultPackId.');
  }
  const ids = new Set();
  manifest.packs.forEach((entry) => {
    if (!entry.id || !entry.title || !entry.path) {
      throw new Error('Every quiz pack manifest entry needs id, title, and path.');
    }
    if (ids.has(entry.id)) {
      throw new Error(`Duplicate quiz pack id "${entry.id}".`);
    }
    ids.add(entry.id);
  });
  if (!ids.has(manifest.defaultPackId)) {
    throw new Error(`Default quiz pack "${manifest.defaultPackId}" is not listed.`);
  }
}

function applyQuizPack(pack) {
  const normalizedPack = normalizeQuizPack(pack);
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
}

function getPreferredPackId() {
  const savedPackId = localStorage.getItem(PACK_SELECTION_KEY);
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

function resetMapForPackChange() {
  if (map && typeof map.remove === 'function') {
    map.remove();
  }
  map = null;
  mapMarkers = [];
  mapPolyline = null;
  const mapEl = document.getElementById('map');
  if (mapEl) mapEl.innerHTML = '';
}

async function fetchJson(path) {
  const response = await fetch(path, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Request failed for ${path}: ${response.status}`);
  }
  return response.json();
}

async function selectQuizPackById(packId, options = {}) {
  const entry = getPackEntry(packId);
  if (!entry) {
    throw new Error('No quiz pack entry is available.');
  }

  const selector = document.getElementById('packSelector');
  if (selector) selector.disabled = true;
  setPackSelectorStatus(`Loading ${entry.title}...`);

  try {
    const pack = entry.path ? await fetchJson(entry.path) : DEFAULT_QUIZ_PACK;
    resetMapForPackChange();
    applyQuizPack(pack);
    ACTIVE_PACK_ENTRY = entry;
    if (options.persist !== false) {
      localStorage.setItem(PACK_SELECTION_KEY, entry.id);
    }
    updatePackSelectorUi(entry.id);
    setPackSelectorStatus(entry.description || `${entry.title} selected.`);
    checkResumeState();
  } catch (error) {
    if (options.allowFallback === false) throw error;
    const fallbackEntry = getPackEntry(DEFAULT_QUIZ_PACK.id);
    ACTIVE_PACK_ENTRY = fallbackEntry;
    applyQuizPack(DEFAULT_QUIZ_PACK);
    if (options.persist !== false) {
      localStorage.setItem(PACK_SELECTION_KEY, fallbackEntry.id);
    }
    updatePackSelectorUi(fallbackEntry.id);
    setPackSelectorStatus('Pack unavailable; using the built-in fallback quiz.');
    checkResumeState();
    console.warn('Quiz pack unavailable; using built-in fallback cases.', error);
  } finally {
    if (selector) selector.disabled = QUIZ_PACK_MANIFEST.packs.length <= 1;
  }
}

async function selectQuizPackFromControl(packId) {
  sound.click();
  await selectQuizPackById(packId);
}

async function loadQuizPack() {
  try {
    const manifest = normalizeQuizPackManifest(await fetchJson('./data/quiz-packs.json'));
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
  activePuzzleCorrectIndex: 0,
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
  await loadQuizPack();
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
  const rawSave = readSavedGame();
  const hasSave = rawSave !== null;
  const validSave = getValidSave();
  const saveBelongsToOtherPack = Boolean(rawSave?.quizPackId && rawSave.quizPackId !== QUIZ_PACK.id);
  if (validSave) {
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

function readSavedGame() {
  try {
    return JSON.parse(localStorage.getItem(SAVE_KEY));
  } catch(e) {
    return null;
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
    const parsed = readSavedGame();
    if (!parsed) return null;
    if (parsed.schemaVersion !== SAVE_SCHEMA_VERSION) {
      return migrateSave(parsed);
    }
    if (parsed.quizPackId !== QUIZ_PACK.id) return null;
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
    quizPackId: parsed.quizPackId || QUIZ_PACK.id,
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
    quizPackId: QUIZ_PACK.id,
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

  // Pre-pack scores have no quizPackId and belonged to the old Argentina game;
  // they are kept in storage but never count toward a pack's board.
  const isCurrentPackScore = (entry) => entry.quizPackId === QUIZ_PACK.id;
  
  const previousBest = highScores
    .filter(entry => isCurrentPackScore(entry) && entry.difficulty === state.difficulty)
    .reduce((best, entry) => Math.max(best, Number(entry.score) || 0), 0);
  
  const newEntry = {
    quizPackId: QUIZ_PACK.id,
    score: finalScore,
    rank,
    difficulty: state.difficulty,
    caseSeed: state.caseSeed,
    caseVariantIds: state.caseVariantIds,
    date: new Date().toISOString()
  };
  
  const nextScores = [...highScores, newEntry];
  const currentPackScores = nextScores
    .filter(isCurrentPackScore)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
  const otherPackScores = nextScores.filter((entry) => !isCurrentPackScore(entry));
  localStorage.setItem('carmen_highScores', JSON.stringify([...otherPackScores, ...currentPackScores]));
  
  return {
    previousBest,
    isHighScore: finalScore > previousBest
  };
}

function getHighScores() {
  try {
    const highScores = JSON.parse(localStorage.getItem('carmen_highScores')) || [];
    return highScores
      .filter((entry) => entry.quizPackId === QUIZ_PACK.id)
      .sort((a, b) => b.score - a.score);
  } catch(e) {
    return [];
  }
}

function getAllStats() {
  try {
    const parsed = JSON.parse(localStorage.getItem('carmen_stats')) || {};
    // Legacy flat stats (no byPack) were the old Argentina game's aggregate; ignore
    // them rather than mislabel them as the active pack. The next write overwrites them.
    return parsed.byPack && typeof parsed.byPack === 'object' ? parsed : { byPack: {} };
  } catch(e) {
    return { byPack: {} };
  }
}

function getStats() {
  const stats = getAllStats().byPack[QUIZ_PACK.id] || {};
  return {
    gamesPlayed: Number(stats.gamesPlayed) || 0,
    totalArrests: Number(stats.totalArrests) || 0,
    totalEscapes: Number(stats.totalEscapes) || 0,
    perfectGames: Number(stats.perfectGames) || 0
  };
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
  const allStats = getAllStats();
  const stats = getStats();
  
  stats.gamesPlayed++;
  if (outcome === 'arrest') stats.totalArrests++;
  if (outcome === 'escape') stats.totalEscapes++;
  if (outcome === 'perfect') {
    stats.totalArrests++;
    stats.perfectGames++;
  }
  
  allStats.byPack[QUIZ_PACK.id] = stats;
  localStorage.setItem('carmen_stats', JSON.stringify(allStats));
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
  
  const symbol = LOCATION_SYMBOLS[loc.id] || { char: '📍', name: loc.name };
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

// Fisher-Yates: return options reordered with the new index of the correct answer.
// Authored packs almost always list the answer first; without this the game is
// beatable by always pressing A.
function shuffleOptions(options, correctIndex) {
  const order = options.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return { options: order.map((i) => options[i]), correctIndex: order.indexOf(correctIndex) };
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
    btn.innerHTML = `<span class="bg-slate-950 text-white font-bold rounded-full w-5 h-5 flex items-center justify-center text-[10px] mr-3">${letters[idx]}</span> <span class="flex-grow">${opt}</span>`;
    container.appendChild(btn);
  });
}

function selectChoice(index) {
  if (state.puzzleSolved) return;

  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => btn.disabled = true);
  
  const isCorrect = (index === state.activePuzzleCorrectIndex);

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
  
  citySelect.innerHTML = '<option value="">-- SELECT STOP --</option>';
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
  const rounds = getFinalConfrontationRounds();
  const round = rounds[state.finalConfrontationRound - 1] || rounds[0];
  const finalTitle = QUIZ_PACK.finalConfrontation?.title || 'Boss Duel';
  
  puzzleTitle.textContent = `${finalTitle} - Round ${state.finalConfrontationRound} of ${rounds.length}`;
  container.setAttribute('aria-label', round.ariaLabel || round.description || round.question);
  document.getElementById('puzzleDescription').textContent = round.description;
  container.innerHTML = round.visualHtml || '';
  puzzleQuestion.textContent = round.question;
  buildCustomOptions(round.options, round.correctIndex);
}

function getFinalConfrontationRounds() {
  const rounds = QUIZ_PACK.finalConfrontation?.rounds;
  return Array.isArray(rounds) && rounds.length > 0 ? rounds : DEFAULT_FINAL_CONFRONTATION_ROUNDS;
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
      if (state.finalConfrontationRound < getFinalConfrontationRounds().length) {
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
    <p class="text-slate-200 text-lg mt-2">${QUIZ_PACK.successMessage}</p>
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
    ['Stop', loc.warrantAnswers.city],
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
  const mapConfig = QUIZ_PACK.map || DEFAULT_QUIZ_PACK.map;
  const mapCenter = normalizeMapCenter(mapConfig.center);
  
  map = L.map('map', {
    center: [mapCenter.lat, mapCenter.lng],
    zoom: mapConfig.zoom,
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
    maxZoom: mapConfig.maxZoom,
    minZoom: mapConfig.minZoom
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
  return `Current stop: ${current.name}. District: ${current.province}. Visited stops: ${visited}. Next destination: ${next}.`;
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
    const sym = LOCATION_SYMBOLS[loc.id] || { char: loc.emoji || '📍', name: loc.name };
    
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
