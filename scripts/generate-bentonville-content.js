const fs = require('node:fs');
const path = require('node:path');
const {validatePack, escapeHtml} = require('../game-core.js');
const {writeAtomic} = require('./content-io.cjs');

const root = path.resolve(__dirname, '..');

const sources = {
  visit_bentonville: {
    title: 'Things to Do in Bentonville AR',
    publisher: 'Visit Bentonville',
    url: 'https://www.visitbentonville.com/things-to-do/',
    reviewed: false
  },
  visit_bentonville_square: {
    title: 'Downtown Square',
    publisher: 'Visit Bentonville',
    url: 'https://www.visitbentonville.com/things-to-do/parks-trails-lakes/downtown-square/',
    reviewed: false
  },
  walmart_museum: {
    title: 'Walmart Museum & History',
    publisher: 'Walmart',
    url: 'https://corporate.walmart.com/about/walmart-museum/',
    reviewed: false
  },
  walmart_home_office: {
    title: 'New Home Office',
    publisher: 'Walmart',
    url: 'https://corporate.walmart.com/about/newhomeoffice',
    reviewed: false
  },
  crystal_bridges: {
    title: 'About Crystal Bridges Museum of American Art',
    publisher: 'Crystal Bridges Museum of American Art',
    url: 'https://crystalbridges.org/about',
    reviewed: false
  },
  momentary: {
    title: 'About the Momentary',
    publisher: 'The Momentary',
    url: 'https://themomentary.org/about/',
    reviewed: false
  },
  compton_gardens: {
    title: 'Compton Gardens & Arboretum',
    publisher: 'Peel Compton Foundation',
    url: 'https://peelcompton.org/compton-gardens-arboretum/',
    reviewed: false
  },
  coler_preserve: {
    title: 'Things to do at Coler Mountain Bike Preserve',
    publisher: 'Visit Bentonville',
    url: 'https://www.visitbentonville.com/things-to-do/parks-trails-lakes/coler/',
    reviewed: false
  },
  osage_park: {
    title: 'Osage Park',
    publisher: 'Peel Compton Foundation',
    url: 'https://peelcompton.org/osage-park/',
    reviewed: false
  }
};

const locations = [
  {
    id: 'downtown-square',
    token: {"char": "🏛️", "name": "Square"},
    name: 'Downtown Square',
    province: 'Historic Downtown',
    emoji: '🏛️',
    tagline: 'The civic heart of Bentonville',
    lat: 36.3729,
    lng: -94.2088,
    source: 'visit_bentonville_square',
    henchman: {
      name: 'Dottie Ledger',
      alias: 'The Square Dealer',
      emoji: '🧾',
      role: 'Receipt forger hiding in market-day crowds',
      dossierNote: 'Knows every vendor tent, bench, and side street around the Square. Uses event flyers as coded delivery slips.'
    }
  },
  {
    id: 'walmart-museum',
    token: {"char": "🏷️", "name": "Price Tag"},
    name: 'Walmart Museum',
    province: 'Downtown Bentonville',
    emoji: '🛒',
    tagline: "Walton's 5&10 and retail history",
    lat: 36.3727,
    lng: -94.2092,
    source: 'walmart_museum',
    henchman: {
      name: 'Marty Markup',
      alias: 'The Price Roller',
      emoji: '🏷️',
      role: 'Archive thief swapping labels and display tags',
      dossierNote: "Former exhibit installer. Hides microfilm behind old price cards and knows the Spark Cafe closing routine."
    }
  },
  {
    id: 'walmart-home-office',
    token: {"char": "🧭", "name": "Campus"},
    name: 'Walmart Home Office',
    province: '8th Street Campus',
    emoji: '🏢',
    tagline: 'A 350-acre campus built for Bentonville work life',
    lat: 36.3599,
    lng: -94.2054,
    source: 'walmart_home_office',
    henchman: {
      name: 'Hollis Hallway',
      alias: 'The Wayfinder',
      emoji: '🧭',
      role: 'Campus-route fixer with a doctored tour map',
      dossierNote: 'Moves through public tour routes with a lanyard, a tablet, and a habit of relabeling meeting rooms.'
    }
  },
  {
    id: 'crystal-bridges',
    token: {"char": "🖼️", "name": "Gallery"},
    name: 'Crystal Bridges',
    province: 'Museum Way',
    emoji: '🎨',
    tagline: 'American art in an Ozark ravine',
    lat: 36.3812,
    lng: -94.2037,
    source: 'crystal_bridges',
    henchman: {
      name: 'Clara Glaze',
      alias: 'The Varnish',
      emoji: '🖼️',
      role: 'Art handler forging gallery transfer slips',
      dossierNote: 'Studies sightlines between the pavilions and ponds. Carries decoy crate labels in a conservation folder.'
    }
  },
  {
    id: 'the-momentary',
    token: {"char": "🎭", "name": "Stage"},
    name: 'The Momentary',
    province: '8th Street Market District',
    emoji: '🎭',
    tagline: 'A former cheese factory turned contemporary art space',
    lat: 36.3653,
    lng: -94.2028,
    source: 'momentary',
    henchman: {
      name: 'Mina Flux',
      alias: 'The Pop-Up',
      emoji: '🎛️',
      role: 'Performance tech rerouting props through back-of-house',
      dossierNote: 'Times escapes to show changeovers. Her favorite hiding places are the Tower stairs and Fermentation Hall cases.'
    }
  },
  {
    id: 'compton-gardens',
    token: {"char": "🌿", "name": "Leaf"},
    name: 'Compton Gardens',
    province: 'North Main Greenway',
    emoji: '🌿',
    tagline: 'Native Ozark plants in a seven-acre downtown haven',
    lat: 36.3766,
    lng: -94.2082,
    source: 'compton_gardens',
    henchman: {
      name: 'Fern Compton',
      alias: 'The Understory',
      emoji: '🍃',
      role: 'Botanical courier marking trails with plant tags',
      dossierNote: 'Can vanish behind native shrubs without snapping a twig. Leaves route notes in seed packets.'
    }
  },
  {
    id: 'coler-preserve',
    token: {"char": "🚵", "name": "Trail"},
    name: 'Coler Mountain Bike Preserve',
    province: 'West Bentonville Trails',
    emoji: '🚵',
    tagline: 'Trailhead, Hub, campground, and deep-woods rides',
    lat: 36.3807,
    lng: -94.2328,
    source: 'coler_preserve',
    henchman: {
      name: 'Ridge Reilly',
      alias: 'The Dropper',
      emoji: '🛞',
      role: 'Bike courier using trail names as dead-drop codes',
      dossierNote: 'Rides with a silent freehub and a false-bottom repair kit. Knows every connector between the Hub and camp.'
    }
  },
  {
    id: 'osage-park',
    token: {"char": "🏹", "name": "Arrow"},
    name: 'Osage Park',
    province: 'Southwest Bentonville Wetlands',
    emoji: '🦆',
    tagline: 'Wetlands, boardwalks, archery, art, and play',
    lat: 36.3545,
    lng: -94.2224,
    source: 'osage_park',
    henchman: {
      name: 'Ozzie Quill',
      alias: 'The Fletching',
      emoji: '🏹',
      role: 'Lookout hiding evidence among wetland programs',
      dossierNote: 'Uses archery scorecards for cipher keys and knows which boardwalk turns are quiet after sunset.'
    }
  }
];

const nextLeadById = {
  'downtown-square': 'A dime-store receipt points across the Square to the museum where the price tags do not add up.',
  'walmart-museum': 'A campus visitor badge lists an 8th Street meeting room and a tour time in the margin.',
  'walmart-home-office': 'A gallery crate label names a bridge, a spring, and a museum trail north of downtown.',
  'crystal-bridges': 'A black-box theater cue sheet sends the trail toward a former cheese factory near 8th Street Market.',
  'the-momentary': 'A seed packet marked North Main says the next handoff is hiding among native Ozark plants.',
  'compton-gardens': 'A bike repair ticket lists the Hub, a campground, and a westside trail code.',
  'coler-preserve': 'A wetland map and an archery scorecard point south to Osage Park.',
  'osage-park': 'The last scorecard directs ACME to headquarters for the closing report.'
};

const casesByLocation = {
  'downtown-square': [
    {
      slug: 'classic',
      headline: 'SQUARE MARKET SWAP!',
      scene: 'a farmers market stall on the Bentonville Square',
      item: 'a brass market bell',
      hideout: 'Farmers Market stalls',
      disguise: 'Farmers market vendor',
      clues: [
        'A canvas tote is stamped with Bentonville Farmers Market and a sketch of the Square fountain.',
        'The receipt lists local honey, flowers, and a booth number facing Central Avenue.',
        'A witness saw the courier fold a tent beside boutiques, bakeries, and public art.'
      ],
      puzzle: {
        hints: ["Separate food sales from civic records and park lighting.", "Honey, flowers, and numbered stalls point to an outdoor market.", "Answer: Farmers Market stalls. Honey, flowers, and numbered stalls point to an outdoor market."],
        title: 'Market Map Match',
        question: 'Which Square activity matches the stall, receipt, and tent clues?',
        options: ['Farmers Market stalls', 'County records desk', 'Museum gallery', 'Winter lights display']
      },
      funFact: 'The Bentonville Square hosts community programs including First Fridays, farmers markets, and art markets.'
    },
    {
      slug: 'first-friday',
      headline: 'FIRST FRIDAY FLYER FORGERY!',
      scene: 'the First Friday event route downtown',
      item: 'the master event flyer plate',
      hideout: 'A Street Promenade',
      disguise: 'Event volunteer',
      clues: [
        'The flyer says First Friday and routes visitors toward the Square.',
        'A volunteer vest has chalk dust from a temporary street mural.',
        'The torn corner shows restaurants, bars, and boutiques around one downtown block.'
      ],
      puzzle: {
        hints: ["Use the event route and street art together.", "Look for the pedestrian street space, rather than a permanent museum or civic building.", "Answer: A Street Promenade. Look for the pedestrian street space, rather than a permanent museum or civic building."],
        title: 'Event Route Deduction',
        question: 'Where should ACME close the event route?',
        options: ['A Street Promenade', 'The Momentary Tower', 'Coler campground', 'Osage dog park']
      },
      funFact: 'Visit Bentonville describes the Square as a year-round gathering place for community programs.'
    },
    {
      slug: 'courthouse',
      headline: 'COURTHOUSE SEAL CAPER!',
      scene: 'the east side of the historic Square',
      item: 'a replica courthouse seal',
      hideout: 'Benton County Courthouse',
      disguise: 'Records clerk',
      clues: [
        'A notary stamp mentions the county seat and a stone building on the Square.',
        'The suspect asked for a records-room badge instead of a museum ticket.',
        'A coffee receipt points to the east side of the downtown plaza.'
      ],
      puzzle: {
        hints: ["The type of public records matters more than the building material.", "A county seat, notary stamp, and records room point to county government.", "Answer: Benton County Courthouse. A county seat, notary stamp, and records room point to county government."],
        title: 'Civic Landmark Check',
        question: 'Which hideout fits the county-seat evidence?',
        options: ['Benton County Courthouse', 'Walmart Museum galleries', 'Compton Gardens house', 'The Quiver Archery Range']
      },
      funFact: 'The Square is the heart of Bentonville historic downtown and sits among civic, dining, shopping, and public art destinations.'
    },
    {
      slug: 'winter-lights',
      headline: 'HOLIDAY LIGHTS GO DARK!',
      scene: 'a winter light display around the downtown plaza',
      item: 'the timer key for the Square lights',
      hideout: 'Square Park',
      disguise: 'Holiday-light electrician',
      clues: [
        'The evidence bag contains zip ties, light clips, and a winter event schedule.',
        'A witness heard the courier say the community gathers here when the Square is illuminated.',
        'The footprint trail circles the central park instead of leaving downtown.'
      ],
      puzzle: {
        hints: ["Consider where public lights and a community gathering would be managed.", "The light clips and central green-space clue identify the park on the Square.", "Answer: Square Park. The light clips and central green-space clue identify the park on the Square."],
        title: 'Light Timer Logic',
        question: 'Where did the courier hide the timer key?',
        options: ['Square Park', 'Sam Walton Hall', 'Momentary Green', 'Crystal Bridges library']
      },
      funFact: 'The Square is illuminated with holiday lights each winter.'
    },
    {
      slug: 'art-market',
      headline: 'ART MARKET STENCIL STOLEN!',
      scene: 'a temporary art market tent near public artwork downtown',
      item: 'a copper mural stencil',
      hideout: 'Art Market booth',
      disguise: 'Mural installer',
      clues: [
        'A paint rag has a booth tag from the Square Art Market.',
        'The courier carried a ladder but never left the block of shops and bakeries.',
        'A public-art walking map is folded to the downtown Square.'
      ],
      puzzle: {
        hints: ["The booth tag identifies the event; the paint rag identifies the activity.", "Find the art-selling booth rather than a whole museum.", "Answer: Art Market booth. Find the art-selling booth rather than a whole museum."],
        title: 'Public Art Trail',
        question: 'Which warrant hideout matches the stencil trail?',
        options: ['Art Market booth', 'Coler Hub', 'Osage wetland dock', 'Museum Way library']
      },
      funFact: 'Downtown Square is known for unique public artwork as well as restaurants, bars, boutiques, bakeries, and coffee shops.'
    }
  ],
  'walmart-museum': [
    {
      slug: 'classic',
      headline: 'FIVE AND DIME FILE VANISHES!',
      scene: "Walton's 5&10",
      item: "a copy of Mr. Sam's first price ledger",
      hideout: "Walton's 5&10",
      disguise: 'Dime-store clerk',
      clues: [
        'The shelf tag says this humble dime store is where the story began.',
        'A red price roller marked every label 5 and 10.',
        'The suspect asked how to get from classic finds to the museum galleries.'
      ],
      puzzle: {
        hints: ["The two prices are a store-name clue, not an encrypted message.", "A dime is ten cents. Look for the historic shop whose name includes 5 and 10.", "Answer: Walton's 5&10. A dime is ten cents. Look for the historic shop whose name includes 5 and 10."],
        title: 'Dime Store Evidence',
        question: 'Which museum space is tied to the 5&10 clues?',
        options: ["Walton's 5&10", 'The Quiver', 'Momentary Green', 'The Hub']
      },
      funFact: "The Walmart Museum presents Walton's 5&10 as the small dime store where Walmart's story began."
    },
    {
      slug: 'spark-cafe',
      headline: 'BUTTER PECAN BLACKOUT!',
      scene: 'The Spark Cafe',
      item: "Sam's favorite flavor card",
      hideout: 'The Spark Cafe',
      disguise: 'Soda fountain server',
      clues: [
        'A menu card mentions butter pecan and Walmart-themed sundaes.',
        'The courier carried an apron dusted with malt powder.',
        'The calling card says the coldest clue is beside the museum sweets.'
      ],
      puzzle: {
        hints: ["Use the food on the receipt to narrow the venue type.", "Sundaes and malt powder belong to the museum cafe, not its archives.", "Answer: The Spark Cafe. Sundaes and malt powder belong to the museum cafe, not its archives."],
        title: 'Cafe Receipt Match',
        question: 'Where does the dessert evidence point?',
        options: ['The Spark Cafe', 'Eleven at Crystal Bridges', 'Airship Coffee', '8th & Plate']
      },
      funFact: 'The Spark Cafe serves Sam Walton themed treats, including butter pecan as a signature reference.'
    },
    {
      slug: 'galleries',
      headline: 'GALLERY TIMELINE TAMPERED!',
      scene: 'the Walmart Museum galleries',
      item: 'a decade marker from the exhibit timeline',
      hideout: 'Museum galleries',
      disguise: 'Archive docent',
      clues: [
        'The report says visitors can discover the journey from small-town store to global retailer.',
        'The timeline case is missing one decade label.',
        'A docent badge was scanned at the gallery entrance, not the cafe.'
      ],
      puzzle: {
        hints: ["Ask which museum area presents its history to visitors.", "A displayed decade marker belongs in the galleries.", "Answer: Museum galleries. A displayed decade marker belongs in the galleries."],
        title: 'Timeline Stop',
        question: 'Which place holds the missing decade marker?',
        options: ['Museum galleries', 'Downtown Square fountain', 'Compton Exhibit Room', 'Osage boardwalk']
      },
      funFact: 'The museum galleries trace Walmart history from a small-town store to a global retailer.'
    },
    {
      slug: 'archive-keys',
      headline: 'ARCHIVE KEYS MISLABELED!',
      scene: 'the museum archive display',
      item: 'a ring of display-case keys',
      hideout: 'From the archives wall',
      disguise: 'Display technician',
      clues: [
        'The suspect left a key tag behind an archival photo.',
        'A museum floor card reads From the archives.',
        'The fake technician knew which display cases used vintage product labels.'
      ],
      puzzle: {
        hints: ["Read the key tag and floor card as labels.", "The archive-wall label is more specific than the general galleries.", "Answer: From the archives wall. The archive-wall label is more specific than the general galleries."],
        title: 'Archive Key Sort',
        question: 'Which hideout fits the key-tag evidence?',
        options: ['From the archives wall', 'The Momentary Box Office', 'Crystal Bridges trailhead', 'Coler Westside']
      },
      funFact: 'The Walmart Museum includes archive-focused exhibits alongside the 5&10 and cafe experiences.'
    },
    {
      slug: 'free-admission',
      headline: 'ADMISSION STAMP COUNTERFEIT!',
      scene: 'the museum entry desk',
      item: 'a counterfeit admission stamper',
      hideout: 'Museum welcome desk',
      disguise: 'Greeter',
      clues: [
        'The forged stamp says Free Admission in blue ink.',
        'The suspect quoted the museum hours but mixed up the Sunday opening.',
        'A welcome desk map circles the galleries, 5&10, and Spark Cafe.'
      ],
      puzzle: {
        hints: ["A visitor admission stamp belongs at an arrival point.", "Look for the museum welcome desk rather than a cafe or trail.", "Answer: Museum welcome desk. Look for the museum welcome desk rather than a cafe or trail."],
        title: 'Welcome Desk Check',
        question: 'Where did the counterfeit stamp belong?',
        options: ['Museum welcome desk', 'Fictional campus map desk', 'Compton Gardens trailhead', 'Osage pavilion']
      },
      funFact: 'The Walmart Museum lists free admission and includes galleries, Walton\'s 5&10, and The Spark Cafe.'
    }
  ],
  'walmart-home-office': [
    {
      slug: 'classic',
      headline: 'CAMPUS MAP MISDIRECT!',
      scene: 'the new Walmart Home Office visitor route',
      item: 'an interactive campus map chip',
      hideout: 'Fictional campus map desk',
      disguise: 'Campus wayfinder',
      clues: [
        'The map chip shows 350 acres and a zoom button.',
        'The courier kept saying the whole campus could be checked from one screen.',
        'A visitor badge points to 8th Street and a public tour.'
      ],
      puzzle: {
        hints: ["The screen describes the whole campus rather than one building.", "This fictional map desk is the place for a campus-wide overview.", "Answer: Fictional campus map desk. This fictional map desk is the place for a campus-wide overview."],
        title: 'Campus Scale Match',
        question: 'Which Home Office stop matches the 350-acre clue?',
        options: ['Fictional campus map desk', 'Walton\'s 5&10', 'Crystal Spring pond', 'Osage wetland boardwalk']
      },
      funFact: 'Walmart describes the new Home Office as a 350-acre campus with an interactive map.'
    },
    {
      slug: 'sam-walton-hall',
      headline: 'HALL PLAQUE SWITCHED!',
      scene: 'Sam Walton Hall',
      item: 'a polished hall plaque',
      hideout: 'Sam Walton Hall',
      disguise: 'Campus tour guide',
      clues: [
        'A tour card lists Sam Walton Hall between the food hall and fitness center.',
        'The suspect carried a lanyard that said Proud Past, Bright Future.',
        'The replacement plaque was wrapped in a campus wayfinding map.'
      ],
      puzzle: {
        hints: ["Treat the hall name on the tour card as the strongest clue.", "The campus lanyard supports the named hall rather than a downtown stop.", "Answer: Sam Walton Hall. The campus lanyard supports the named hall rather than a downtown stop."],
        title: 'Public Space Route',
        question: 'Which campus place is named in the tour-card clues?',
        options: ['Sam Walton Hall', 'The Spark Cafe', 'The Momentary Tower', 'The Coler Hub']
      },
      funFact: 'The Home Office public-space list includes Sam Walton Hall.'
    },
    {
      slug: '8th-plate',
      headline: 'FOOD HALL TOKEN TAKEN!',
      scene: '8th & Plate',
      item: 'a brass food hall token',
      hideout: '8th & Plate',
      disguise: 'Food hall cashier',
      clues: [
        'A lunch receipt reads 8th & Plate in block letters.',
        'The courier moved through a campus food hall, not a downtown cafe.',
        'The badge scanner logged a stop between office spaces and public tour routes.'
      ],
      puzzle: {
        hints: ["The receipt names the venue directly.", "Match 8th & Plate with the campus food hall.", "Answer: 8th & Plate. Match 8th & Plate with the campus food hall."],
        title: 'Lunch Trail',
        question: 'Which Home Office hideout matches the lunch receipt?',
        options: ['8th & Plate', 'The Spark Cafe', 'Eleven', 'Airship Coffee']
      },
      funFact: 'Walmart lists 8th & Plate among the new Home Office spaces where campus ideas and public visits meet.'
    },
    {
      slug: 'whole-health',
      headline: 'FITNESS FOB FAKED!',
      scene: 'Walton Family Whole Health & Fitness',
      item: 'a cloned fitness center fob',
      hideout: 'Walton Family Whole Health & Fitness',
      disguise: 'Trainer',
      clues: [
        'The access card uses the phrase Whole Health & Fitness.',
        'The suspect wore running shoes but never left the Home Office campus.',
        'A campus map circles a fitness building near the public spaces list.'
      ],
      puzzle: {
        hints: ["Pair the access-card wording with the running shoes.", "Whole Health & Fitness identifies a fitness space rather than an office.", "Answer: Walton Family Whole Health & Fitness. Whole Health & Fitness identifies a fitness space rather than an office."],
        title: 'Access Card Audit',
        question: 'Which space should ACME check for the cloned fob?',
        options: ['Walton Family Whole Health & Fitness', 'Osage pickleball courts', 'Compton Exhibit Room', 'Crystal Bridges library']
      },
      funFact: 'The new Home Office includes Walton Family Whole Health & Fitness as a named campus destination.'
    },
    {
      slug: 'office-buildings',
      headline: 'BUILDING STORYBOARDS STOLEN!',
      scene: 'the campus office buildings',
      item: 'a set of office-story plaques',
      hideout: 'Office Spaces',
      disguise: 'Facilities planner',
      clues: [
        'The missing plaques describe history, culture, and leaders who shaped the company.',
        'The suspect had keys marked for twelve office buildings.',
        'A storyboard mockup says every building tells a unique story.'
      ],
      puzzle: {
        hints: ["Distinguish ordinary workplaces from public recreation spaces.", "Keys for twelve office buildings support the office-space option.", "Answer: Office Spaces. Keys for twelve office buildings support the office-space option."],
        title: 'Office Story Match',
        question: 'Which campus hideout fits the twelve-building evidence?',
        options: ['Office Spaces', 'Museum galleries', 'The Momentary galleries', 'Peel Museum']
      },
      funFact: 'Walmart says the 12 office buildings on the new Home Office each tell a unique story through design and identity.'
    }
  ],
  'crystal-bridges': [
    {
      slug: 'classic',
      headline: 'GLASS BRIDGE GETAWAY!',
      scene: 'the bridge overlooking the ponds',
      item: 'a gallery transfer slip',
      hideout: 'Glass bridge',
      disguise: 'Art handler',
      clues: [
        'The witness saw a crate cross a glass-enclosed bridge over water.',
        'The transfer slip mentions American art and a museum in an Ozark setting.',
        'The suspect headed toward pavilions around two spring-fed ponds.'
      ],
      puzzle: {
        hints: ["Look for a structure crossing water.", "Glass enclosure and an art transfer identify the bridge.", "Answer: Glass bridge. Glass enclosure and an art transfer identify the bridge."],
        title: 'Bridge Evidence',
        question: 'Which Crystal Bridges location matches the water-and-glass clues?',
        options: ['Glass bridge', 'Momentary Green', 'Square Park', 'Osage boardwalk']
      },
      funFact: 'Crystal Bridges takes its name from a nearby natural spring and bridge construction in the building.'
    },
    {
      slug: 'trails',
      headline: 'SCULPTURE TRAIL SWITCH!',
      scene: 'the sculpture and walking trails',
      item: 'a trail sculpture label',
      hideout: 'Sculpture trail',
      disguise: 'Trail docent',
      clues: [
        'A boot print leads away from the galleries onto a walking trail.',
        'The stolen label names outdoor sculpture and a path to downtown Bentonville.',
        'The courier carried a docent clipboard instead of a gallery crate.'
      ],
      puzzle: {
        hints: ["Follow the boot prints out of the indoor galleries.", "An outdoor sculpture label belongs along a sculpture trail.", "Answer: Sculpture trail. An outdoor sculpture label belongs along a sculpture trail."],
        title: 'Trail Label Check',
        question: 'Where is the missing sculpture label likely hidden?',
        options: ['Sculpture trail', 'The Hub', 'A Street Promenade', 'The Quiver']
      },
      funFact: 'Five miles of sculpture and walking trails connect Crystal Bridges to downtown Bentonville.'
    },
    {
      slug: 'library',
      headline: 'REFERENCE VOLUME REMOVED!',
      scene: 'the Crystal Bridges library',
      item: 'a rare art-reference index',
      hideout: 'Library',
      disguise: 'Art researcher',
      clues: [
        'The card catalog notes more than 50,000 art reference volumes.',
        'The suspect asked for a quiet table instead of an exhibit map.',
        'A library pencil is tucked into a gallery transfer envelope.'
      ],
      puzzle: {
        hints: ["Reference books and a quiet table identify a type of room.", "A catalog of art volumes belongs in a library.", "Answer: Library. A catalog of art volumes belongs in a library."],
        title: 'Reference Room Riddle',
        question: 'Which hideout matches the catalog clues?',
        options: ['Library', 'Museum welcome desk', 'Compton Exhibit Room', 'Home Office media hub']
      },
      funFact: 'Crystal Bridges has a library with more than 50,000 art reference volumes.'
    },
    {
      slug: 'pavilions',
      headline: 'PAVILION BLUEPRINT PINCHED!',
      scene: 'the museum pavilions',
      item: 'a pavilion section drawing',
      hideout: 'Museum pavilions',
      disguise: 'Architecture intern',
      clues: [
        'The blueprint shows pavilions nestled around two ponds.',
        'The suspect knew the architect and kept muttering about bridge construction.',
        'A gallery guard saw an intern badge near a classroom wing.'
      ],
      puzzle: {
        hints: ["The layout around ponds is architectural evidence.", "Look for the museum pavilions rather than a single gallery.", "Answer: Museum pavilions. Look for the museum pavilions rather than a single gallery."],
        title: 'Architecture Deduction',
        question: 'Which Crystal Bridges area fits the blueprint?',
        options: ['Museum pavilions', 'Downtown Square', 'Coler campground', 'Osage dog park']
      },
      funFact: 'The museum building was designed by architect Moshe Safdie with pavilions around spring-fed ponds.'
    },
    {
      slug: 'collection',
      headline: 'COLLECTION CARD CAPER!',
      scene: 'the permanent collection galleries',
      item: 'a collection object card',
      hideout: 'Permanent collection',
      disguise: 'Gallery guide',
      clues: [
        'The missing card says the collection spans five centuries of American artworks.',
        'The courier wore a gallery-guide pin and carried a folded floor plan.',
        'A note compares early American works with contemporary artists.'
      ],
      puzzle: {
        hints: ["A span of centuries describes a collection.", "The gallery-guide pin and collection card fit the permanent collection.", "Answer: Permanent collection. The gallery-guide pin and collection card fit the permanent collection."],
        title: 'Collection Span',
        question: 'Where should the guide be stopped?',
        options: ['Permanent collection', 'The Momentary Tower', 'Walmart archive wall', 'Compton native plant beds']
      },
      funFact: 'Crystal Bridges permanent collection spans five centuries of American art and is free to view.'
    }
  ],
  'the-momentary': [
    {
      slug: 'classic',
      headline: 'CHEESE FACTORY CUE SHEET!',
      scene: 'the repurposed factory floor',
      item: 'a performance cue sheet',
      hideout: 'Fermentation Hall',
      disguise: 'Stage technician',
      clues: [
        'The clue names a former cheese factory and a black-box theater.',
        'The suspect carried gaffer tape and a cue sheet marked Fermentation Hall.',
        'A floor plan points to a multidisciplinary art space near 8th Street Market.'
      ],
      puzzle: {
        hints: ["A cue sheet and gaffer tape suggest a performance venue.", "Match the named hall to the black-box theater clue.", "Answer: Fermentation Hall. Match the named hall to the black-box theater clue."],
        title: 'Backstage Venue Match',
        question: 'Which Momentary space fits the theater evidence?',
        options: ['Fermentation Hall', 'Square Park', 'Walton\'s 5&10', 'Crystal Bridges library']
      },
      funFact: 'The Momentary transformed a decommissioned 63,000-square-foot cheese factory into a contemporary art space.'
    },
    {
      slug: 'tower',
      headline: 'TOWER LIGHTS TAMPERED!',
      scene: 'the 70-foot Tower',
      item: 'a lighting patch sheet',
      hideout: 'The Tower',
      disguise: 'Lighting technician',
      clues: [
        'The patch sheet lists mezzanines and a tall vertical room.',
        'The courier was last seen behind glass with an arrow pattern.',
        'A technician badge says Tower access only.'
      ],
      puzzle: {
        hints: ["Vertical height and mezzanines distinguish the space.", "Find the Tower rather than the outdoor Green.", "Answer: The Tower. Find the Tower rather than the outdoor Green."],
        title: 'Tower Level Check',
        question: 'Where is the lighting patch sheet hidden?',
        options: ['The Tower', 'The Hub', 'Sam Walton Hall', 'Compton Gardens trail']
      },
      funFact: 'The Momentary Tower is a 70-foot-tall space with multiple mezzanines for art, performance, and social events.'
    },
    {
      slug: 'green',
      headline: 'FESTIVAL PASS FORGED!',
      scene: 'Momentary Green',
      item: 'a festival access pass',
      hideout: 'Momentary Green',
      disguise: 'Festival vendor',
      clues: [
        'The pass describes a spacious outdoor area for picnics, gatherings, and music festivals.',
        'Grass stains cover the bottom of the forged vendor permit.',
        'The courier parked a bike near the outdoor space before entering the crowd.'
      ],
      puzzle: {
        hints: ["Grass stains rule out an indoor gallery.", "Picnics and outdoor music gatherings fit the Green.", "Answer: Momentary Green. Picnics and outdoor music gatherings fit the Green."],
        title: 'Outdoor Pass',
        question: 'Which outdoor venue matches the forged pass?',
        options: ['Momentary Green', 'Osage wetland dock', 'Square fountain', 'Crystal Spring pond']
      },
      funFact: 'Momentary Green is an outdoor gathering area used for picnics, social events, art exploration, and music festivals.'
    },
    {
      slug: 'galleries',
      headline: 'GALLERY WALL SWITCHED!',
      scene: 'the changing visual arts galleries',
      item: 'an exhibition wall label',
      hideout: 'The Galleries',
      disguise: 'Installation artist',
      clues: [
        'The label says exhibitions change throughout the year.',
        'A roll of artist tape was found beside an open gallery wall.',
        'The suspect said the place is for contemporary art in everyday life.'
      ],
      puzzle: {
        hints: ["Changing exhibitions need display walls.", "The gallery wall and artist tape identify the Galleries.", "Answer: The Galleries. The gallery wall and artist tape identify the Galleries."],
        title: 'Changing Exhibit',
        question: 'Which hideout fits the changing-exhibition clue?',
        options: ['The Galleries', 'Walmart Museum galleries', 'Compton Exhibit Room', 'Peel Museum parlor']
      },
      funFact: 'The Momentary galleries feature art and exhibitions that change throughout the year.'
    },
    {
      slug: 'box-office',
      headline: 'BOX OFFICE BADGE DOUBLE!',
      scene: 'the Momentary Box Office',
      item: 'a duplicate event badge',
      hideout: 'Box Office',
      disguise: 'Ticket clerk',
      clues: [
        'The duplicate badge was printed at the main entrance.',
        'The suspect knew ticket schedules and program details.',
        'A note says the Box Office is the place to ask for event information.'
      ],
      puzzle: {
        hints: ["Badge printing and ticket schedules point to visitor admission.", "Search the ticket desk at the Box Office.", "Answer: Box Office. Search the ticket desk at the Box Office."],
        title: 'Ticket Desk Trail',
        question: 'Where should ACME compare the duplicate badge?',
        options: ['Box Office', 'Downtown visitor center', 'Coler campground', 'Crystal Bridges Coffee Bar']
      },
      funFact: 'The Momentary Box Office handles tickets, schedules, program details, and visitor information.'
    }
  ],
  'compton-gardens': [
    {
      slug: 'classic',
      headline: 'NATIVE PLANT TAG THEFT!',
      scene: 'the native plant collection',
      item: 'a set of hand-lettered plant tags',
      hideout: 'Native plant beds',
      disguise: 'Botanist',
      clues: [
        'The stolen tags name native trees, grasses, vines, shrubs, and perennials.',
        'A seed packet points to North Main Street and a seven-acre greenspace.',
        'The suspect wore garden gloves and quoted Dr. Neil Compton.'
      ],
      puzzle: {
        hints: ["The missing objects are labels for living plants.", "Native plant beds fit the seed packet and planting tags.", "Answer: Native plant beds. Native plant beds fit the seed packet and planting tags."],
        title: 'Plant Tag Sort',
        question: 'Which Compton Gardens hideout matches the native-plant clues?',
        options: ['Native plant beds', 'The Hub', 'Momentary Green', 'Square Park']
      },
      funFact: 'Compton Gardens & Arboretum showcases native Ozark plants in a seven-acre downtown greenspace.'
    },
    {
      slug: 'exhibit-room',
      headline: 'EXHIBIT ROOM MAP MISSING!',
      scene: 'the Compton Gardens Exhibit Room',
      item: 'a trail interpretation map',
      hideout: 'Exhibit Room',
      disguise: 'Garden docent',
      clues: [
        'The room hours are marked Monday through Friday, 8am to 5pm.',
        'A docent badge references Arkansas native plants and history.',
        'The courier never crossed the trail; the map disappeared indoors.'
      ],
      puzzle: {
        hints: ["The docent badge points to an indoor interpretation space.", "Use the exhibit-room clue rather than guessing from visitor hours alone.", "Answer: Exhibit Room. Use the exhibit-room clue rather than guessing from visitor hours alone."],
        title: 'Exhibit Hours',
        question: 'Where did the map vanish?',
        options: ['Exhibit Room', 'The Spark Cafe', 'Sam Walton Hall', 'Osage pickleball courts']
      },
      funFact: 'The Compton Gardens Exhibit Room is listed at 312 N. Main Street with weekday hours.'
    },
    {
      slug: 'trails',
      headline: 'TRAIL MARKERS TURNED!',
      scene: 'the garden walking trails',
      item: 'three brass trail markers',
      hideout: 'Garden trails',
      disguise: 'Arborist',
      clues: [
        'The path is lined with native plants, towering trees, and seasonal blooms.',
        'A bicycle bell was found beside a downtown garden trail.',
        'The suspect carried an arborist clipboard and pruning twine.'
      ],
      puzzle: {
        hints: ["A bicycle bell and path markings indicate a route.", "The garden trails connect the native plant areas.", "Answer: Garden trails. The garden trails connect the native plant areas."],
        title: 'Trail Marker Check',
        question: 'Which path did the arborist tamper with?',
        options: ['Garden trails', 'Coler Eastside', 'Razorback Greenway by The Momentary', 'Square event route']
      },
      funFact: 'Visitors can walk or bike through trails lined with native plants and trees at Compton Gardens.'
    },
    {
      slug: 'dr-compton',
      headline: 'CONSERVATION QUOTE CUT OUT!',
      scene: 'the Dr. Neil Compton display',
      item: 'a framed conservation quote',
      hideout: 'Dr. Compton display',
      disguise: 'Conservation volunteer',
      clues: [
        'The missing frame carried a quote challenging visitors to protect wild places.',
        'A volunteer badge says Step Forward.',
        'The courier underlined Ozark landscape preservation twice.'
      ],
      puzzle: {
        hints: ["Use the subject of the quote rather than the building type.", "The conservation note points to the Dr. Compton display.", "Answer: Dr. Compton display. The conservation note points to the Dr. Compton display."],
        title: 'Conservation Note',
        question: 'Which exhibit should ACME inspect?',
        options: ['Dr. Compton display', 'Walmart timeline', 'Crystal Bridges pavilions', 'The Momentary Box Office']
      },
      funFact: 'Compton Gardens honors Dr. Neil Compton and his passion for preserving the Ozark landscape.'
    },
    {
      slug: 'house',
      headline: 'HOUSE RENTAL LEDGER LIFTED!',
      scene: 'the mid-century modern home',
      item: 'a private-event rental ledger',
      hideout: 'Compton house',
      disguise: 'Event planner',
      clues: [
        'The ledger mentions a private rental house at the garden.',
        'The suspect measured table layouts but ignored the plant beds.',
        'A floor plan says the mid-century modern home can host events.'
      ],
      puzzle: {
        hints: ["A rental floor plan serves a different purpose from a garden map.", "Tables and a private rental identify the house.", "Answer: Compton house. Tables and a private rental identify the house."],
        title: 'Rental Ledger',
        question: 'Where does the floor plan point?',
        options: ['Compton house', 'Peel Museum parlor', 'Sam Walton Hall', 'Momentary Green']
      },
      funFact: 'The Compton Gardens house is a mid-century modern space used for private rentals.'
    }
  ],
  'coler-preserve': [
    {
      slug: 'classic',
      headline: 'HUB TRAIL TOKEN LIFTED!',
      scene: 'the top of Coler Mountain',
      item: 'a steel trail-launch token',
      hideout: 'The Hub',
      disguise: 'Bike mechanic',
      clues: [
        'The clue names a 20-foot steel and wood launch structure.',
        'Three downhill run names are scratched into a tire lever.',
        'The courier carried a repair stand tag marked Fire Line.'
      ],
      puzzle: {
        hints: ["The object is a launch structure, not a whole trail network.", "Three downhill runs leave from the Hub.", "Answer: The Hub. Three downhill runs leave from the Hub."],
        title: 'Trail Launch Deduction',
        question: 'Which Coler feature is the launch point?',
        options: ['The Hub', 'Momentary Tower', 'Downtown Square', 'Osage pavilion']
      },
      funFact: 'At the top of Coler Mountain, The Hub launches riders toward three downhill runs.'
    },
    {
      slug: 'campground',
      headline: 'CAMPSITE PASS COUNTERFEIT!',
      scene: 'the Coler campground',
      item: 'a forged campsite pass',
      hideout: 'Coler campground',
      disguise: 'Camp host',
      clues: [
        'The pass mentions 16 hike-in sites, 5 camper van spots, and 1 ADA site.',
        'The suspect hauled gear with a wagon instead of a getaway car.',
        'A repair ticket says ride straight from camp onto the trail.'
      ],
      puzzle: {
        hints: ["Site types and hauling gear describe an overnight area.", "Hike-in and camper-van pitches identify the campground; no addition is needed.", "Answer: Coler campground. Hike-in and camper-van pitches identify the campground; no addition is needed."],
        title: 'Camp Pass Match',
        question: 'Where did the forged pass belong?',
        options: ['Coler campground', 'Osage dog park', 'Compton house', 'The Spark Cafe']
      },
      funFact: 'Coler campground offers hike-in, camper van, and ADA sites with trail access.'
    },
    {
      slug: 'westside',
      headline: 'WESTSIDE SIGN SPUN!',
      scene: 'the beginner and intermediate trail area',
      item: 'a Westside trail sign',
      hideout: 'Westside trails',
      disguise: 'Ride coach',
      clues: [
        'The sign points beginners away from the more advanced Eastside.',
        'A coaching whistle and green trail marker were found together.',
        'The suspect changed arrows before a skills class rolled through.'
      ],
      puzzle: {
        hints: ["Beginner-friendly and advanced routes are contrasted.", "Choose the Westside option for beginner and intermediate riders.", "Answer: Westside trails. Choose the Westside option for beginner and intermediate riders."],
        title: 'Trail Level Logic',
        question: 'Which trail area matches beginner and intermediate riders?',
        options: ['Westside trails', 'Eastside trails', 'Momentary Green', 'Square Park']
      },
      funFact: 'Coler is divided into Westside trails for beginner and intermediate riders and Eastside trails for more experienced riders.'
    },
    {
      slug: 'eastside',
      headline: 'ROCKY LINE ROUTE STOLEN!',
      scene: 'the advanced Eastside trails',
      item: 'a technical trail route card',
      hideout: 'Eastside trails',
      disguise: 'Downhill spotter',
      clues: [
        'The route card mentions technical rocky sections and massive gap jumps.',
        'The suspect wore full-face gear and ignored the walking trail.',
        'A red arrow points from The Hub toward the more advanced side.'
      ],
      puzzle: {
        hints: ["Technical terrain and protective gear indicate advanced riding.", "The Eastside option fits rocky sections and gap jumps.", "Answer: Eastside trails. The Eastside option fits rocky sections and gap jumps."],
        title: 'Advanced Route',
        question: 'Where is the route card hidden?',
        options: ['Eastside trails', 'Westside trails', 'Downtown Square', 'Compton Exhibit Room']
      },
      funFact: 'Coler trails include flowy jump lines, technical rocky sections, and large gap jumps.'
    },
    {
      slug: 'airship',
      headline: 'TRAIL CAFE RECEIPT CODED!',
      scene: 'the coffee stop along Coler trails',
      item: 'a coded cafe receipt',
      hideout: 'Airship Coffee at Coler',
      disguise: 'Trail barista',
      clues: [
        'The receipt names a coffee stop inside the preserve.',
        'Bike tire mud marked the receipt, but no car tracks led to the handoff.',
        'A note says the next clue is brewed between trail segments.'
      ],
      puzzle: {
        hints: ["Use the named business on the receipt.", "Coffee inside the preserve identifies Airship Coffee at Coler.", "Answer: Airship Coffee at Coler. Coffee inside the preserve identifies Airship Coffee at Coler."],
        title: 'Trail Cafe Trail',
        question: 'Which Coler stop matches the receipt?',
        options: ['Airship Coffee at Coler', 'The Spark Cafe', 'Crystal Bridges Coffee Bar', '8th & Plate']
      },
      funFact: 'Visit Bentonville lists Airship Coffee at Coler among the preserve stops.'
    }
  ],
  'osage-park': [
    {
      slug: 'classic',
      headline: 'BOARDWALK BEARING STOLEN!',
      scene: 'the Osage Park wetland boardwalks',
      item: 'a final compass bearing',
      hideout: 'Floating boardwalks',
      disguise: 'Wetland guide',
      clues: [
        'The map circles floating boardwalks around a wetland ecosystem.',
        'The suspect carried binoculars and a sunrise-to-sunset park note.',
        'A muddy arrow points from the pavilion toward the water.'
      ],
      puzzle: {
        hints: ["Look for a route built over water.", "Floating boardwalks provide the wetland path described by the map.", "Answer: Floating boardwalks. Floating boardwalks provide the wetland path described by the map."],
        title: 'Wetland Route',
        question: 'Where does the final compass bearing point?',
        options: ['Floating boardwalks', 'The Hub', 'Crystal Bridges pavilions', 'Downtown Square']
      },
      funFact: 'Osage Park includes floating boardwalks around a wetland ecosystem.'
    },
    {
      slug: 'quiver',
      headline: 'ARCHERY SCORECARD ALTERED!',
      scene: 'The Quiver Archery Range',
      item: 'a scored archery target card',
      hideout: 'The Quiver Archery Range',
      disguise: 'Range marshal',
      clues: [
        'The scorecard shows arrows with feathered ends, beside a target with concentric rings.',
        'A range marshal vest was found near Osage Park.',
        'The clue says beginners and seasoned archers can both take aim there.'
      ],
      puzzle: {
        hints: ["Identify the sport from the equipment rather than treating it as a code.", "Fletching and targets point to archery, at The Quiver.", "Answer: The Quiver Archery Range. Fletching and targets point to archery, at The Quiver."],
        title: 'Archery Equipment Match',
        question: 'Which Osage Park feature matches the scorecard?',
        options: ['The Quiver Archery Range', 'Coler Hub', 'Momentary Box Office', 'Museum welcome desk']
      },
      funFact: 'The Quiver is an outdoor archery range nestled in Osage Park.'
    },
    {
      slug: 'pickleball',
      headline: 'PICKLEBALL SCOREBOARD SWIPE!',
      scene: 'the Osage Park pickleball courts',
      item: 'a tournament scoreboard tile',
      hideout: 'Pickleball courts',
      disguise: 'Scorekeeper',
      clues: [
        'The score tile says court 8 in green marker.',
        'A paddle grip and tournament bracket were left near the pavilion parking lot.',
        'The suspect counted courts before cutting across the park.'
      ],
      puzzle: {
        hints: ["The paddle and tournament bracket identify the sport.", "Match pickleball courts; the court number is a label, not a counting problem.", "Answer: Pickleball courts. Match pickleball courts; the court number is a label, not a counting problem."],
        title: 'Court Equipment Match',
        question: 'Where should the scorekeeper be stopped?',
        options: ['Pickleball courts', 'Walton Family Whole Health & Fitness', 'The Momentary galleries', 'Garden trails']
      },
      funFact: 'Osage Park has an eight-court outdoor pickleball facility.'
    },
    {
      slug: 'art-park',
      headline: 'PARK ART LABEL LIFTED!',
      scene: 'an art installation inside Osage Park',
      item: 'a public-art label',
      hideout: 'Art in the Park',
      disguise: 'Public art docent',
      clues: [
        'The label describes art installations located throughout the park.',
        'The courier followed a path between recreation areas instead of a museum gallery.',
        'A docent badge reads Art in the Park.'
      ],
      puzzle: {
        hints: ["The label describes art distributed outdoors.", "Art in the Park fits the recreation-area path.", "Answer: Art in the Park. Art in the Park fits the recreation-area path."],
        title: 'Park Art Match',
        question: 'Which Osage destination fits the lifted label?',
        options: ['Art in the Park', 'Crystal Bridges permanent collection', 'Downtown Art Market booth', 'Momentary galleries']
      },
      funFact: 'Osage Park includes art installations throughout the park.'
    },
    {
      slug: 'dog-park',
      headline: 'DOG PARK PERMIT DISAPPEARS!',
      scene: 'the Osage Park dog park',
      item: 'a laminated dog park permit',
      hideout: 'Dog park',
      disguise: 'Park volunteer',
      clues: [
        'The permit says Park & Play and is clipped to a leash hook.',
        'The suspect was steps from the pavilion parking lot.',
        'A volunteer vest has wetland mud on one side and paw prints on the other.'
      ],
      puzzle: {
        hints: ["Paw prints and a leash hook point to an animal recreation area.", "The dog park fits the permit and volunteer evidence.", "Answer: Dog park. The dog park fits the permit and volunteer evidence."],
        title: 'Park Permit Trail',
        question: 'Which Osage Park feature matches the paw-print clues?',
        options: ['Dog park', 'The Quiver', 'Coler campground', 'Compton house']
      },
      funFact: 'Osage Park combines wetland access, recreation areas, pickleball, dog park space, archery, and public art.'
    }
  ]
};

function createVisual(title, detail) {
  return `<div class="cutout-evidence text-center"><div class="text-4xl">📍</div><p class="mt-2 typewriter-font text-xs bg-white/70 p-2 rounded">${escapeHtml(title)}</p><p class="mt-2 text-[10px] font-bold uppercase tracking-wider text-red-800">${escapeHtml(detail)}</p></div>`;
}

function createCase(location, variant, index) {
  const caseId = variant.slug === 'classic' ? `classic-${location.id}` : `${location.id}-${variant.slug}`;
  const correctIndex = variant.puzzle.correctIndex ?? 0;
  const mechanic = 'deduction-choice';

  return {
    caseId,
    briefing: {
      headline: variant.headline,
      report: `In this fictional training case, ${variant.item} vanished from ${variant.scene}. Carmen is already gone, but ${location.henchman.alias} is still in Bentonville, leaving the evidence below for ACME to examine.`,
      callingCard: `A red card reads: "I left the hard part local. Follow the evidence to find ${location.henchman.alias}."`,
      suspect: { ...location.henchman },
      nextLead: variant.nextLead ?? location.nextLead ?? nextLeadById[location.id]
    },
    clues: variant.clues.map((clue, i) => i === 2 && !clue.toLowerCase().includes(variant.disguise.toLowerCase()) ? `${clue} Witness identification: ${variant.disguise}.` : clue),
    puzzle: {
      title: variant.puzzle.title,
      description: variant.puzzle.description ?? `Use the three written clues to identify the ${location.name} hideout.`,
      question: variant.puzzle.question,
      options: variant.puzzle.options,
      correctIndex,
      visualHtml: variant.puzzle.visualHtml ?? createVisual(location.name, 'Compare the three clue sheets'),
      hints: variant.puzzle.hints ?? [
        `Start with this evidence: ${variant.clues[0]}`,
        `Narrow the choices using a second clue: ${variant.clues[1]}`,
        `The matching answer is ${variant.puzzle.options[correctIndex]}. ${variant.clues[0]}`
      ],
      explanation: variant.puzzle.explanation ?? `${variant.puzzle.options[correctIndex]} matches the evidence: ${variant.clues.join(' ')} The witness evidence identifies the ${variant.disguise} disguise.`
    },
    warrantAnswers: {
      city: location.name,
      hideout: variant.hideout,
      disguise: variant.disguise
    },
    funFact: variant.funFact,
    learningObjective: variant.learningObjective ?? `Identify a real Bentonville landmark or district feature from connected clues about ${location.name}.`,
    sources: variant.sources ?? [location.source],
    difficulty: variant.difficulty ?? (index === 0 ? 'detective' : ['rookie', 'detective', 'inspector', 'detective'][(index - 1) % 4]),
    mechanic,
    regionTags: [...new Set([location.province, location.name])],
    visualType: 'inline-html-cutout',
    accessibilityDescription: `Evidence card for ${location.name}. Use the three clue sheets to solve the case.`,
    reviewStatus: variant.reviewStatus ?? 'source-linked-needs-line-review',
    ...(variant.reviewEvidence ? {reviewEvidence: {...variant.reviewEvidence}} : {})
  };
}

const questionBank = Object.fromEntries(
  locations.map((location) => [
    location.id,
    casesByLocation[location.id].map((variant, index) => createCase(location, variant, index))
  ])
);

const regionData = {
  locations: locations.map(({ source, ...location }) => location)
};

const quizPack = {
  schemaVersion: 1,
  contentVersion: 3,
  id: 'bentonville-carmen',
  title: 'Where in Bentonville is Carmen Sandiego?',
  subtitle: 'Bentonville Division',
  heroLocation: 'BENTONVILLE',
  intro: 'A fictional ACME training mystery across Bentonville landmarks. Compare clue sheets, answer multiple-choice puzzles, and arrest fictional accomplices. Choose 4, 6, or all 8 stops; finish with a report at headquarters.',
  evidenceLabel: 'ACME BENTONVILLE EVIDENCE',
  successMessage: 'Your selected route is complete. The evidence from your captured accomplices has helped ACME close the case.',
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
    title: 'Final Report',
    rounds: require('./final-rounds.cjs')()
  },
  locations: regionData.locations,
  questions: questionBank,
  sources
};

// Importing the authoring source is read-only; only the CLI writes generated content.
if (require.main === module) {
  validatePack(quizPack);
  writeAtomic(path.join(root, 'data/packs/bentonville.json'), `${JSON.stringify(quizPack, null, 2)}\n`);
}
module.exports = {createCase, quizPack, locations, casesByLocation};
