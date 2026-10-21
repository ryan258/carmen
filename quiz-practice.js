/* Companion prompts copied from docs/remaining-packs-review.md, with its
 * expected reasoning preserved. These are unscored practice, not new factual
 * review or replacement answers for the scored investigation.
 * Presentation condenses existing prose and names explicitly fictional props;
 * factual evidence and canonical scored answers remain unchanged. */
(function exposePractice(root) {
  'use strict';

  const transfers = {
  "ozark-waterways-carmen": {
    "contentVersion": 2,
    "locations": {
      "ozark-waterways-buffalo": {
        "id": "ozark-waterways-buffalo:transfer:v1",
        "locationId": "ozark-waterways-buffalo",
        "title": "Buffalo National River — try the idea elsewhere",
        "prompt": "A sample is collected outside a preserve but upstream of it. Can it still belong to the preserve’s watershed?",
        "answer": "Yes. Drainage and administrative boundaries need not coincide.",
        "source": "docs/remaining-packs-review.md"
      },
      "ozark-waterways-beaver": {
        "id": "ozark-waterways-beaver:transfer:v1",
        "locationId": "ozark-waterways-beaver",
        "title": "Beaver Lake — try the idea elsewhere",
        "prompt": "A bottle has the right river name but the wrong side of a dam. Is its provenance fully preserved?",
        "answer": "No. Both waterway and sampling position are needed.",
        "source": "docs/remaining-packs-review.md"
      },
      "ozark-waterways-bull-shoals": {
        "id": "ozark-waterways-bull-shoals:transfer:v1",
        "locationId": "ozark-waterways-bull-shoals",
        "title": "Bull Shoals Lake — try the idea elsewhere",
        "prompt": "Does a lake crossing a state line automatically become two unrelated lakes?",
        "answer": "No. A political border does not determine hydrological continuity.",
        "source": "docs/remaining-packs-review.md"
      },
      "ozark-waterways-norfork": {
        "id": "ozark-waterways-norfork:transfer:v1",
        "locationId": "ozark-waterways-norfork",
        "title": "Norfork Lake — try the idea elsewhere",
        "prompt": "A bridge and a town have slightly different spellings. Should a copy editor silently make them match?",
        "answer": "No. Preserve each documented proper name unless a source establishes an error.",
        "source": "docs/remaining-packs-review.md"
      },
      "ozark-waterways-mammoth": {
        "id": "ozark-waterways-mammoth:transfer:v1",
        "locationId": "ozark-waterways-mammoth",
        "title": "Mammoth Spring — try the idea elsewhere",
        "prompt": "Water from one source passes through several places. Does shared origin prove every bottle was filled at the same location?",
        "answer": "No. Source and actual collection point are different provenance fields.",
        "source": "docs/remaining-packs-review.md"
      },
      "ozark-waterways-greer": {
        "id": "ozark-waterways-greer:transfer:v1",
        "locationId": "ozark-waterways-greer",
        "title": "Greer Spring — try the idea elsewhere",
        "prompt": "Can a river-path length alone tell you when a tracer will arrive?",
        "answer": "No. Timing or speed evidence is also necessary.",
        "source": "docs/remaining-packs-review.md"
      },
      "ozark-waterways-big-spring": {
        "id": "ozark-waterways-big-spring:transfer:v1",
        "locationId": "ozark-waterways-big-spring",
        "title": "Big Spring — try the idea elsewhere",
        "prompt": "If two readings average to 12, must either individual reading equal 12?",
        "answer": "No. An average summarizes observations and does not overwrite them.",
        "source": "docs/remaining-packs-review.md"
      },
      "ozark-waterways-alley": {
        "id": "ozark-waterways-alley:transfer:v1",
        "locationId": "ozark-waterways-alley",
        "title": "Alley Spring and Mill — try the idea elsewhere",
        "prompt": "A building is blue in a recent photo. Does that prove its original paint was blue?",
        "answer": "No. Establish its paint sequence from dated records.",
        "source": "docs/remaining-packs-review.md"
      }
    }
  },
  "arkansas-delta-carmen": {
    "contentVersion": 1,
    "locations": {
      "arkansas-delta-cultural-center": {
        "id": "arkansas-delta-cultural-center:transfer:v1",
        "locationId": "arkansas-delta-cultural-center",
        "title": "Delta Cultural Center — try the idea elsewhere",
        "prompt": "Can an accurate description of a different exhibit answer a request for the music exhibit?",
        "answer": "No. Accuracy and relevance both matter; retain the requested identity.",
        "source": "docs/remaining-packs-review.md"
      },
      "arkansas-delta-hampson": {
        "id": "arkansas-delta-hampson:transfer:v1",
        "locationId": "arkansas-delta-hampson",
        "title": "Hampson Archeological Museum — try the idea elsewhere",
        "prompt": "A replica is registered in a museum this year. Does that registration date establish the age of the original it represents?",
        "answer": "No. Catalogue event, replica manufacture and represented historical period are separate fields.",
        "source": "docs/remaining-packs-review.md"
      },
      "arkansas-delta-parkin": {
        "id": "arkansas-delta-parkin:transfer:v1",
        "locationId": "arkansas-delta-parkin",
        "title": "Parkin Archeological State Park — try the idea elsewhere",
        "prompt": "If two reports both say possibly, may a summary silently change that to certainly?",
        "answer": "No. Preserve the uncertainty unless additional evidence justifies stronger wording.",
        "source": "docs/remaining-packs-review.md"
      },
      "arkansas-delta-lakeport": {
        "id": "arkansas-delta-lakeport:transfer:v1",
        "locationId": "arkansas-delta-lakeport",
        "title": "Lakeport Plantation Museum — try the idea elsewhere",
        "prompt": "A historic-house label lists rooms and owners but is asked to explain labor. What is missing?",
        "answer": "Evidence about the people and labor system; architecture alone does not answer that question.",
        "source": "docs/remaining-packs-review.md"
      },
      "arkansas-delta-dyess": {
        "id": "arkansas-delta-dyess:transfer:v1",
        "locationId": "arkansas-delta-dyess",
        "title": "Historic Dyess Colony — try the idea elsewhere",
        "prompt": "A person becomes famous after growing up in a town. Does that prove the town was founded to celebrate that person?",
        "answer": "No. Establish the founding date and original purpose independently.",
        "source": "docs/remaining-packs-review.md"
      },
      "arkansas-delta-arkansas-post": {
        "id": "arkansas-delta-arkansas-post:transfer:v1",
        "locationId": "arkansas-delta-arkansas-post",
        "title": "Arkansas Post National Memorial — try the idea elsewhere",
        "prompt": "Can a school retain its name after moving to another building?",
        "answer": "Yes. Institutional identity and physical location must be recorded separately.",
        "source": "docs/remaining-packs-review.md"
      },
      "arkansas-delta-mississippi-river": {
        "id": "arkansas-delta-mississippi-river:transfer:v1",
        "locationId": "arkansas-delta-mississippi-river",
        "title": "Mississippi River State Park — try the idea elsewhere",
        "prompt": "Two organizations cooperate on one site. Does that prove they own all its land in exactly the same way?",
        "answer": "No. Partnership and land ownership are separate claims.",
        "source": "docs/remaining-packs-review.md"
      },
      "arkansas-delta-purchase": {
        "id": "arkansas-delta-purchase:transfer:v1",
        "locationId": "arkansas-delta-purchase",
        "title": "Louisiana Purchase State Park — try the idea elsewhere",
        "prompt": "If a property is acquired in one year and surveyed later, which year belongs on its acquisition record?",
        "answer": "The acquisition year. The later survey needs its own event label.",
        "source": "docs/remaining-packs-review.md"
      }
    }
  },
  "american-national-parks-carmen": {
    "contentVersion": 1,
    "locations": {
      "american-national-parks-acadia": {
        "id": "american-national-parks-acadia:transfer:v1",
        "locationId": "american-national-parks-acadia",
        "title": "Acadia National Park — try the idea elsewhere",
        "prompt": "A rock bears an old inscription. Does the inscription date when the rock itself formed?",
        "answer": "No. Formation and later marking are different events.",
        "source": "docs/remaining-packs-review.md"
      },
      "american-national-parks-smokies": {
        "id": "american-national-parks-smokies:transfer:v1",
        "locationId": "american-national-parks-smokies",
        "title": "Great Smoky Mountains National Park — try the idea elsewhere",
        "prompt": "A study describes one subgroup of animals. What must a summary retain before applying its finding?",
        "answer": "The subgroup boundary; broader claims need separate evidence.",
        "source": "docs/remaining-packs-review.md"
      },
      "american-national-parks-everglades": {
        "id": "american-national-parks-everglades:transfer:v1",
        "locationId": "american-national-parks-everglades",
        "title": "Everglades National Park — try the idea elsewhere",
        "prompt": "Does a pond called Eagle Lake prove an eagle was observed there today?",
        "answer": "No. A place name does not establish a current wildlife observation.",
        "source": "docs/remaining-packs-review.md"
      },
      "american-national-parks-grand-canyon": {
        "id": "american-national-parks-grand-canyon:transfer:v1",
        "locationId": "american-national-parks-grand-canyon",
        "title": "Grand Canyon National Park — try the idea elsewhere",
        "prompt": "If a statue is carved from old stone, must the statue be as old as the stone?",
        "answer": "No. Stone formation and carving are separate events.",
        "source": "docs/remaining-packs-review.md"
      },
      "american-national-parks-yellowstone": {
        "id": "american-national-parks-yellowstone:transfer:v1",
        "locationId": "american-national-parks-yellowstone",
        "title": "Yellowstone National Park — try the idea elsewhere",
        "prompt": "Does one observation of a repeating process establish its repeat interval?",
        "answer": "No. A timing series is needed to estimate an interval.",
        "source": "docs/remaining-packs-review.md"
      },
      "american-national-parks-arches": {
        "id": "american-national-parks-arches:transfer:v1",
        "locationId": "american-national-parks-arches",
        "title": "Arches National Park — try the idea elsewhere",
        "prompt": "If one example follows a process, what evidence is needed before claiming all examples do?",
        "answer": "Evidence covering alternatives and the broader class, not just one pathway.",
        "source": "docs/remaining-packs-review.md"
      },
      "american-national-parks-yosemite": {
        "id": "american-national-parks-yosemite:transfer:v1",
        "locationId": "american-national-parks-yosemite",
        "title": "Yosemite National Park — try the idea elsewhere",
        "prompt": "Two photos make an object look different in size. What must be checked before calculating an exact change?",
        "answer": "Scale, viewpoint and a common reference, plus the dates and object identity.",
        "source": "docs/remaining-packs-review.md"
      },
      "american-national-parks-hawaii": {
        "id": "american-national-parks-hawaii:transfer:v1",
        "locationId": "american-national-parks-hawaii",
        "title": "Hawaiʻi Volcanoes National Park — try the idea elsewhere",
        "prompt": "A list needs two distinct places but contains one twice. Does having two rows make it complete?",
        "answer": "No. Count distinct identities as well as rows.",
        "source": "docs/remaining-packs-review.md"
      }
    }
  },
  "railroads-depots-carmen": {
    "contentVersion": 2,
    "locations": {
      "railroads-depots-steamtown": {
        "id": "railroads-depots-steamtown:transfer:v1",
        "locationId": "railroads-depots-steamtown",
        "title": "Steamtown National Historic Site — try the idea elsewhere",
        "prompt": "Does an object’s appearance in an old museum catalogue prove it is still there today?",
        "answer": "No. A dated catalogue needs later custody evidence for a current-location claim.",
        "source": "docs/remaining-packs-review.md"
      },
      "railroads-depots-horseshoe": {
        "id": "railroads-depots-horseshoe:transfer:v1",
        "locationId": "railroads-depots-horseshoe",
        "title": "Horseshoe Curve — try the idea elsewhere",
        "prompt": "Can a century-old road establish the manufacture year of a car photographed on it?",
        "answer": "No. Infrastructure and vehicles require separate dates.",
        "source": "docs/remaining-packs-review.md"
      },
      "railroads-depots-mount-clare": {
        "id": "railroads-depots-mount-clare:transfer:v1",
        "locationId": "railroads-depots-mount-clare",
        "title": "Mount Clare Rail Campus — try the idea elsewhere",
        "prompt": "If a building is nicknamed a kitchen, what would you need before calling it a restaurant?",
        "answer": "Evidence of dining use; the nickname alone is insufficient.",
        "source": "docs/remaining-packs-review.md"
      },
      "railroads-depots-cass": {
        "id": "railroads-depots-cass:transfer:v1",
        "locationId": "railroads-depots-cass",
        "title": "Cass Scenic Railroad — try the idea elsewhere",
        "prompt": "Does restoration as a visitor attraction prove a railway was originally built for tourism?",
        "answer": "No. Identify its original purpose from historical records.",
        "source": "docs/remaining-packs-review.md"
      },
      "railroads-depots-tennessee-valley": {
        "id": "railroads-depots-tennessee-valley:transfer:v1",
        "locationId": "railroads-depots-tennessee-valley",
        "title": "Tennessee Valley Railroad Museum — try the idea elsewhere",
        "prompt": "A museum founded in 1961 acquires a 1940 vehicle. Is that chronology impossible?",
        "answer": "No. The object can predate the institution.",
        "source": "docs/remaining-packs-review.md"
      },
      "railroads-depots-union-station": {
        "id": "railroads-depots-union-station:transfer:v1",
        "locationId": "railroads-depots-union-station",
        "title": "Union Station Kansas City — try the idea elsewhere",
        "prompt": "Does a station’s renovation date establish its original construction date?",
        "answer": "No. Keep the two events and their evidence separate.",
        "source": "docs/remaining-packs-review.md"
      },
      "railroads-depots-golden-spike": {
        "id": "railroads-depots-golden-spike:transfer:v1",
        "locationId": "railroads-depots-golden-spike",
        "title": "Golden Spike National Historical Park — try the idea elsewhere",
        "prompt": "Can a faithful replica and its original subject have different construction dates?",
        "answer": "Yes. Record representation and original subject as distinct objects/events.",
        "source": "docs/remaining-packs-review.md"
      },
      "railroads-depots-railtown": {
        "id": "railroads-depots-railtown:transfer:v1",
        "locationId": "railroads-depots-railtown",
        "title": "Railtown 1897 — try the idea elsewhere",
        "prompt": "Two dated catalogues place the same object in different cities. What should be checked before declaring a contradiction?",
        "answer": "Identity, dates and transfer history; the object may have moved.",
        "source": "docs/remaining-packs-review.md"
      }
    }
  },
  "architecture-hidden-details-carmen": {
    "contentVersion": 1,
    "locations": {
      "architecture-hidden-details-robie": {
        "id": "architecture-hidden-details-robie:transfer:v1",
        "locationId": "architecture-hidden-details-robie",
        "title": "Frederick C. Robie House — try the idea elsewhere",
        "prompt": "An unaltered photograph shows a completed building. Can its capture precede that building’s completion under reliable identification?",
        "answer": "No. Reconsider the conflicting date or an assumption if those are not reliable.",
        "source": "docs/remaining-packs-review.md"
      },
      "architecture-hidden-details-taliesin": {
        "id": "architecture-hidden-details-taliesin:transfer:v1",
        "locationId": "architecture-hidden-details-taliesin",
        "title": "Taliesin — try the idea elsewhere",
        "prompt": "Does the year a complex began prove every surviving wall has that same date?",
        "answer": "No. Later additions, rebuilding and repairs need component-specific evidence.",
        "source": "docs/remaining-packs-review.md"
      },
      "architecture-hidden-details-fallingwater": {
        "id": "architecture-hidden-details-fallingwater:transfer:v1",
        "locationId": "architecture-hidden-details-fallingwater",
        "title": "Fallingwater — try the idea elsewhere",
        "prompt": "If several buildings are complete by 1939, must every one have been finished in 1939?",
        "answer": "No. A group completion milestone does not date each individual phase.",
        "source": "docs/remaining-packs-review.md"
      },
      "architecture-hidden-details-gateway-arch": {
        "id": "architecture-hidden-details-gateway-arch:transfer:v1",
        "locationId": "architecture-hidden-details-gateway-arch",
        "title": "Gateway Arch — try the idea elsewhere",
        "prompt": "If a monument is 100 meters tall, does that establish its summit elevation above sea level?",
        "answer": "No. Height from its base and elevation from sea level need different references.",
        "source": "docs/remaining-packs-review.md"
      },
      "architecture-hidden-details-gamble": {
        "id": "architecture-hidden-details-gamble:transfer:v1",
        "locationId": "architecture-hidden-details-gamble",
        "title": "Gamble House — try the idea elsewhere",
        "prompt": "Does a photographer’s credit under a building image identify its architect?",
        "answer": "No. Image authorship and building design are different roles.",
        "source": "docs/remaining-packs-review.md"
      },
      "architecture-hidden-details-glass-house": {
        "id": "architecture-hidden-details-glass-house:transfer:v1",
        "locationId": "architecture-hidden-details-glass-house",
        "title": "The Glass House — try the idea elsewhere",
        "prompt": "Must two buildings look alike to belong to one designed composition?",
        "answer": "No. A documented relationship can deliberately use contrast.",
        "source": "docs/remaining-packs-review.md"
      },
      "architecture-hidden-details-marin": {
        "id": "architecture-hidden-details-marin:transfer:v1",
        "locationId": "architecture-hidden-details-marin",
        "title": "Marin County Civic Center — try the idea elsewhere",
        "prompt": "A campus opens in one year. Can that alone date every building later listed on its map?",
        "answer": "No. Check each building’s construction or addition record.",
        "source": "docs/remaining-packs-review.md"
      },
      "architecture-hidden-details-bradbury": {
        "id": "architecture-hidden-details-bradbury:transfer:v1",
        "locationId": "architecture-hidden-details-bradbury",
        "title": "Bradbury Building — try the idea elsewhere",
        "prompt": "A real building plays a hospital in a film. What evidence is needed to call it a historical hospital?",
        "answer": "A real use record; the screen role alone does not establish that history.",
        "source": "docs/remaining-packs-review.md"
      }
    }
  },
  "museums-missing-labels-carmen": {
    "contentVersion": 2,
    "locations": {
      "museums-missing-labels-air-space": {
        "id": "museums-missing-labels-air-space:transfer:v1",
        "locationId": "museums-missing-labels-air-space",
        "title": "National Air and Space Museum — try the idea elsewhere",
        "prompt": "Do two photographs of one object prove there are two objects?",
        "answer": "No. Compare represented identity and provenance rather than file count.",
        "source": "docs/remaining-packs-review.md"
      },
      "museums-missing-labels-field": {
        "id": "museums-missing-labels-field:transfer:v1",
        "locationId": "museums-missing-labels-field",
        "title": "Field Museum — try the idea elsewhere",
        "prompt": "If one component in a display is a reproduction, does that classify every other component?",
        "answer": "No. Material and provenance claims need component-specific scope.",
        "source": "docs/remaining-packs-review.md"
      },
      "museums-missing-labels-henry-ford": {
        "id": "museums-missing-labels-henry-ford:transfer:v1",
        "locationId": "museums-missing-labels-henry-ford",
        "title": "The Henry Ford — try the idea elsewhere",
        "prompt": "Does documented restoration require calling an object either wholly untouched or wholly new?",
        "answer": "No. A record can distinguish retained material, replacement parts and the object’s history.",
        "source": "docs/remaining-packs-review.md"
      },
      "museums-missing-labels-computer-history": {
        "id": "museums-missing-labels-computer-history:transfer:v1",
        "locationId": "museums-missing-labels-computer-history",
        "title": "Computer History Museum — try the idea elsewhere",
        "prompt": "A museum page dates an exhibition to 2008–2016. What would support a claim that it is open today?",
        "answer": "A current exhibit record, not that dated archive alone.",
        "source": "docs/remaining-packs-review.md"
      },
      "museums-missing-labels-exploratorium": {
        "id": "museums-missing-labels-exploratorium:transfer:v1",
        "locationId": "museums-missing-labels-exploratorium",
        "title": "Exploratorium — try the idea elsewhere",
        "prompt": "A copied catalogue entry has the right title and artist but the wrong year. Is it still accurate?",
        "answer": "No. Title, number, year and artist each need to match the source.",
        "source": "docs/remaining-packs-review.md"
      },
      "museums-missing-labels-science-minnesota": {
        "id": "museums-missing-labels-science-minnesota:transfer:v1",
        "locationId": "museums-missing-labels-science-minnesota",
        "title": "Science Museum of Minnesota — try the idea elsewhere",
        "prompt": "Can an institution be older than the name and building it uses today?",
        "answer": "Yes. Founding, name adoption and facility opening can be different milestones.",
        "source": "docs/remaining-packs-review.md"
      },
      "museums-missing-labels-jazz": {
        "id": "museums-missing-labels-jazz:transfer:v1",
        "locationId": "museums-missing-labels-jazz",
        "title": "American Jazz Museum — try the idea elsewhere",
        "prompt": "Does an exhibit featuring four artists prove no other artists contributed to the art form?",
        "answer": "No. A curated focus does not establish an exhaustive history.",
        "source": "docs/remaining-packs-review.md"
      },
      "museums-missing-labels-flight": {
        "id": "museums-missing-labels-flight:transfer:v1",
        "locationId": "museums-missing-labels-flight",
        "title": "The Museum of Flight — try the idea elsewhere",
        "prompt": "A person’s papers contain records from before birth and after death. Does that change the person’s lifespan?",
        "answer": "No. Collection coverage and a person’s life dates describe different subjects.",
        "source": "docs/remaining-packs-review.md"
      }
    }
  }
};
  const versions = {
    'bentonville-carmen': 5, 'argentina-carmen': 6, 'northwest-arkansas-carmen': 3,
    'nwa-mountain-biking-carmen': 2, 'arkansas-state-parks-carmen': 1, 'route-66-carmen': 2,
    'ozark-waterways-carmen': 2, 'arkansas-delta-carmen': 1, 'american-national-parks-carmen': 1,
    'railroads-depots-carmen': 2, 'architecture-hidden-details-carmen': 1, 'museums-missing-labels-carmen': 2
  };
  const compactPacks = new Set([
    'arkansas-state-parks-carmen', 'route-66-carmen', 'ozark-waterways-carmen',
    'arkansas-delta-carmen', 'american-national-parks-carmen', 'railroads-depots-carmen',
    'architecture-hidden-details-carmen', 'museums-missing-labels-carmen'
  ]);
  const fictionNotice = 'ACME suspects, witnesses, disputed records, and desk assignments are fictional training material. ACME desks are story props, not real park or business facilities. No real collection object is missing. Source notes identify historical context; model rules and measurements apply only to their stated exercise. All required evidence is written in the case.';

  // Fictional display aliases, authored per location. Canonical answers and
  // saved values remain the existing source strings. These are story props,
  // not claims about actual facilities, occupations, or historical people.
  const warrantThemes = {
    "arkansas-state-parks-petit-jean": [["Lodge Caption", "Caption retoucher"], ["Handoff Ledger", "Handoff courier"], ["View Folder", "Panorama sorter"]],
    "arkansas-state-parks-mount-magazine": [["Summit Measure", "Measuring-rod maker"], ["Reading Copy", "Survey copyist"], ["Valley View", "Panorama framer"]],
    "arkansas-state-parks-crater-of-diamonds": [["Origin Sheet", "Geology labeler"], ["Discovery Dates", "Date-stamp keeper"], ["Specimen Card", "Sample-card printer"]],
    "arkansas-state-parks-historic-washington": [["Building Directory", "Directory editor"], ["Print Sequence", "Press demonstrator"], ["Leaflet Register", "Leaflet binder"]],
    "arkansas-state-parks-lake-chicot": [["River Bend", "River-diagram cutter"], ["Oxbow Sheets", "Map-sheet collator"], ["Undated Survey", "Survey-folder keeper"]],
    "arkansas-state-parks-jacksonport": [["River Junction", "Confluence cartographer"], ["Event Stamp", "Event-card printer"], ["Port Index", "Port-file sorter"]],
    "arkansas-state-parks-mammoth-spring": [["Depot File", "Railway-label maker"], ["Water Arrows", "Diagram arrow painter"], ["Machine Register", "Machine-record copyist"]],
    "arkansas-state-parks-ozark-folk-center": [["Craft Demonstration", "Demonstration recorder"], ["Program Slots", "Program scheduler"], ["Classroom Notebook", "Notebook stitcher"]],
    "route-66-dwight": [["Canopy Caption", "Canopy-sign painter"], ["Addition Photos", "Photo-date retoucher"], ["Repair Materials", "Materials-slip keeper"]],
    "route-66-springfield": [["Roofline Drawing", "Roofline tracer"], ["Style Record", "Style-card cataloguer"], ["Stone Facing", "Facing-sample sorter"]],
    "route-66-brush-creek": [["Bridge Form", "Bridge-model maker"], ["Patent Dates", "Patent-file binder"], ["Construction Sketch", "Engineering sketcher"]],
    "route-66-arcadia": [["Barn Use", "Barn-label painter"], ["Road Chronology", "Road-record copyist"], ["Timber Notebook", "Timber-diagram drafter"]],
    "route-66-shamrock": [["Service Receipts", "Receipt compositor"], ["Unbuilt Plan", "Plan-folder clerk"], ["Room Uses", "Room-chart illustrator"]],
    "route-66-tucumcari": [["Room Count", "Room-card printer"], ["Preservation Record", "Grant-file keeper"], ["Courtyard Plan", "Floor-plan tracer"]],
    "route-66-painted-desert": [["Building Layers", "Surface-sample sorter"], ["Remodel Timeline", "Timeline cardmaker"], ["Lantern Copy", "Replica-label painter"]],
    "route-66-barstow": [["Railway Roots", "Transport-file curator"], ["Replacement Record", "Building-record binder"], ["Telegram Log", "Telegram copyist"]],
    "ozark-waterways-buffalo": [["River Class", "River-label printer"], ["Confluence Connector", "Connector-card maker"], ["Watershed Boundary", "Boundary-map tracer"]],
    "ozark-waterways-beaver": [["Reservoir Origin", "Reservoir-file keeper"], ["Dam Milestones", "Milestone-chart printer"], ["Custody Labels", "Bottle-label copyist"]],
    "ozark-waterways-bull-shoals": [["Project Purposes", "Project-card editor"], ["Reading Dispatch", "Dispatch-log checker"], ["State-Line Map", "Border-map illustrator"]],
    "ozark-waterways-norfork": [["Proper Names", "Nameplate engraver"], ["Construction Stages", "Construction-file binder"], ["Engineering Index", "Index-card assembler"]],
    "ozark-waterways-mammoth": [["Spring Source", "Spring-diagram painter"], ["Depot Date", "Depot-register keeper"], ["Bottle Receipt", "Receipt-folder sorter"]],
    "ozark-waterways-greer": [["Receiving River", "River-arrow maker"], ["Distance Record", "Distance-card copyist"], ["Regional Index", "Region-label printer"]],
    "ozark-waterways-big-spring": [["Groundwater Sheet", "Groundwater-chart tracer"], ["Tracer Results", "Result-slip keeper"], ["Reading Average", "Calculation-sheet editor"]],
    "ozark-waterways-alley": [["Mill Power", "Mill-diagram sketcher"], ["Successive Mills", "Building-sequence binder"], ["Paint Layers", "Paint-history labeler"]],
    "arkansas-delta-cultural-center": [["Music File", "Music-file cataloguer"], ["Radio Transcript", "Transcript editor"], ["Exhibit Venue", "Exhibit-card printer"]],
    "arkansas-delta-hampson": [["Collection Origin", "Provenance-card maker"], ["Catalogue Date", "Registration-log copyist"], ["Community Evidence", "Evidence-folder illustrator"]],
    "arkansas-delta-parkin": [["Qualified Wording", "Qualification-note editor"], ["History Layers", "History-sheet collator"], ["Source Summaries", "Summary-card binder"]],
    "arkansas-delta-lakeport": [["Historical Scope", "Scope-label editor"], ["Gift Record", "Gift-register copyist"], ["Interpretation File", "Interpretation-card illustrator"]],
    "arkansas-delta-dyess": [["Colony Origins", "Origin-file keeper"], ["Arrival Ledger", "Arrival-log printer"], ["Farmstead Plan", "Plan-card drafter"]],
    "arkansas-delta-arkansas-post": [["Community Context", "Context-card editor"], ["Post Milestones", "Milestone-strip binder"], ["Relocation Maps", "Relocation-sheet tracer"]],
    "arkansas-delta-mississippi-river": [["Partner Record", "Partnership-file keeper"], ["Revision Dispatch", "Revision-log copyist"], ["Landscape Notes", "Landscape-card illustrator"]],
    "arkansas-delta-purchase": [["Acquisition Record", "Acquisition-ledger binder"], ["Survey Intersection", "Intersection-diagram maker"], ["Survey Legend", "Legend-lettering artist"]],
    "american-national-parks-acadia": [["Rock Marks", "Rock-pattern tracer"], ["Formation Stages", "Stage-card binder"], ["Observation Scale", "Scale-label editor"]],
    "american-national-parks-smokies": [["Trait Drawing", "Trait-card illustrator"], ["Subgroup Scope", "Scope-note copyist"], ["Paired Traits", "Comparison-sheet printer"]],
    "american-national-parks-everglades": [["Water Motion", "Flow-arrow painter"], ["Dry-Season Model", "Habitat-model maker"], ["Place Names", "Place-name labeler"]],
    "american-national-parks-grand-canyon": [["Rock And Canyon", "Event-card cataloguer"], ["Layer Model", "Layer-model assembler"], ["Cliff And Slope", "Profile-diagram sketcher"]],
    "american-national-parks-yellowstone": [["System Ingredients", "System-chart maker"], ["Circulation Model", "Circulation-arrow painter"], ["Observation Clock", "Timing-log copyist"]],
    "american-national-parks-arches": [["Erosion Evidence", "Erosion-diagram tracer"], ["Process Pathways", "Pathway-card binder"], ["Opening Measures", "Measurement-sheet printer"]],
    "american-national-parks-yosemite": [["Glacial Landscape", "Landscape-model maker"], ["Model Surveys", "Survey-table editor"], ["Photo References", "Photo-scale retoucher"]],
    "american-national-parks-hawaii": [["Island Building", "Island-model assembler"], ["Magma Stages", "Magma-diagram painter"], ["Volcano Identities", "Identity-card printer"]],
    "railroads-depots-steamtown": [["Equipment Inventory", "Inventory-label maker"], ["Dated Catalogue", "Catalogue-date copyist"], ["Load Manifest", "Manifest sorter"]],
    "railroads-depots-horseshoe": [["Route Options", "Route-diagram drafter"], ["Gradient Table", "Gradient-chart editor"], ["Track And Vehicle", "Vehicle-date labeler"]],
    "railroads-depots-mount-clare": [["Workshop Nickname", "Workshop-sign painter"], ["Campus Dates", "Campus-ledger binder"], ["Building Index", "Building-card printer"]],
    "railroads-depots-cass": [["Timber History", "Timber-file cataloguer"], ["Construction Start", "Construction-log copyist"], ["Model Arrival", "Itinerary-card maker"]],
    "railroads-depots-tennessee-valley": [["Working Collection", "Collection-label editor"], ["Vehicle History", "Vehicle-register keeper"], ["Model Connection", "Connection-slip printer"]],
    "railroads-depots-union-station": [["Station Functions", "Station-chart illustrator"], ["Renovation Dates", "Renovation-file binder"], ["Baggage Tags", "Claim-tag copyist"]],
    "railroads-depots-golden-spike": [["Replica Identity", "Replica-label maker"], ["Ceremony Dates", "Ceremony-ledger keeper"], ["Color Record", "Color-note painter"]],
    "railroads-depots-railtown": [["Institution Dates", "Institution-card editor"], ["Journey Sequence", "Journey-log binder"], ["Coach Identity", "Coach-file copyist"]],
    "architecture-hidden-details-robie": [["Horizontal Form", "Elevation-diagram tracer"], ["Completion Photo", "Photo-caption retoucher"], ["Designer Record", "Credit-card printer"]],
    "architecture-hidden-details-taliesin": [["Home And Studio", "Use-chart illustrator"], ["Building Iterations", "Iteration-file binder"], ["Material Sources", "Materials-label maker"]],
    "architecture-hidden-details-fallingwater": [["Waterfall Setting", "Setting-diagram painter"], ["Group Completion", "Completion-ledger keeper"], ["Material And Site", "Site-card printer"]],
    "architecture-hidden-details-gateway-arch": [["Constructed Form", "Structure-model maker"], ["Design Milestones", "Milestone-file binder"], ["Height Reference", "Height-chart illustrator"]],
    "architecture-hidden-details-gamble": [["Craft Details", "Joinery-diagram tracer"], ["Repair History", "Repair-log keeper"], ["Image Credits", "Credit-line copyist"]],
    "architecture-hidden-details-glass-house": [["Material Names", "Material-label maker"], ["Design Period", "Design-file binder"], ["Paired Composition", "Composition-card illustrator"]],
    "architecture-hidden-details-marin": [["Civic Use", "Use-record editor"], ["Commission Record", "Commission-ledger keeper"], ["Campus Scope", "Campus-plan tracer"]],
    "architecture-hidden-details-bradbury": [["Daylight Notes", "Light-diagram sketcher"], ["Image Dates", "Image-register copyist"], ["Screen Roles", "Screen-caption editor"]],
    "museums-missing-labels-air-space": [["Flight Location", "Flight-map labeler"], ["Object Number", "Object-index keeper"], ["Image Copies", "Image-file sorter"]],
    "museums-missing-labels-field": [["Display Components", "Component-label maker"], ["Reference Chain", "Model-sequence binder"], ["Specimen Name", "Name-card copyist"]],
    "museums-missing-labels-henry-ford": [["Event Context", "Context-label editor"], ["Corroboration File", "Evidence-register keeper"], ["Restoration Record", "Restoration-card illustrator"]],
    "museums-missing-labels-computer-history": [["Design And Build", "Design-label maker"], ["Exhibit Timeline", "Exhibit-date binder"], ["Archive Status", "Archive-notice editor"]],
    "museums-missing-labels-exploratorium": [["Art And Perception", "Interpretation-card illustrator"], ["Proposal Sketch", "Sketch-file keeper"], ["Catalogue Credits", "Catalogue-lettering artist"]],
    "museums-missing-labels-science-minnesota": [["Institution Opening", "Opening-record editor"], ["Naming Milestones", "Name-history binder"], ["Continuity File", "Continuity-card printer"]],
    "museums-missing-labels-jazz": [["Exhibit Selection", "Selection-label maker"], ["Recording Stages", "Recording-log copyist"], ["Media Identity", "Media-card illustrator"]],
    "museums-missing-labels-flight": [["Building Reuse", "Reuse-diagram tracer"], ["Company Chronology", "Company-ledger keeper"], ["Archive Coverage", "Coverage-label editor"]]
  };
  const parkCanonical = [
    ['ACME Evidence Desk', 'Document photographer'],
    ['ACME Timeline Desk', 'Ledger binder'],
    ['ACME Comparison Desk', 'Map illustrator']
  ];
  const archiveCanonical = [
    ['ACME Records Desk', 'Archive photographer'],
    ['ACME Dispatch Desk', 'Dispatch clerk'],
    ['ACME Comparison Desk', 'Catalogue illustrator']
  ];

  function aliasPairs(pack, locationId, catalogVersion) {
    if (![2, 3].includes(catalogVersion) || !pack || !Object.hasOwn(versions, pack.id)
      || pack.contentVersion !== versions[pack.id] || !compactPacks.has(pack.id)
      || !Object.hasOwn(warrantThemes, locationId)
      || !pack.locations.some(location => location.id === locationId)) return [];
    const canonical = ['arkansas-state-parks-carmen', 'route-66-carmen'].includes(pack.id) ? parkCanonical : archiveCanonical;
    return warrantThemes[locationId].map(([desk, costume], index) => ({
      hideout: {canonical: canonical[index][0], label: `ACME ${desk} Desk`},
      disguise: {canonical: canonical[index][1], label: costume}
    }));
  }

  function warrantLabel(pack, locationId, field, canonical, catalogVersion = 2) {
    if (!['hideout', 'disguise'].includes(field)) return canonical;
    const pair = aliasPairs(pack, locationId, catalogVersion).find(value => value[field].canonical === canonical);
    return pair ? pair[field].label : canonical;
  }

  function presentCaseText(pack, item, text, catalogVersion = 2) {
    if (typeof text !== 'string' || !pack || !item || ![2, 3].includes(catalogVersion)) return text;
    const location = pack.locations.find(place => (pack.questions[place.id] || []).some(candidate => candidate.caseId === item.caseId));
    if (!location) return text;
    const replacements = new Map();
    aliasPairs(pack, location.id, catalogVersion).forEach(pair => {
      ['hideout', 'disguise'].forEach(field => replacements.set(pair[field].canonical, pair[field].label));
    });
    if (!replacements.size) return text;
    // One replacement pass: inserted labels are never interpreted again. Word
    // boundaries protect longer unrelated words; punctuation remains intact.
    const alternatives = [...replacements.keys()].sort((a, b) => b.length - a.length)
      .map(value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`(?<![\\p{L}\\p{N}_])(?:${alternatives.join('|')})(?![\\p{L}\\p{N}_])`, 'gu');
    return text.replace(pattern, canonical => replacements.get(canonical));
  }

  function getTransferActivities(pack) {
    const entry = pack && Object.hasOwn(transfers, pack.id) ? transfers[pack.id] : null;
    if (!entry || pack.contentVersion !== entry.contentVersion) return [];
    return pack.locations.flatMap(location => {
      const activity = entry.locations[location.id];
      return activity ? [{...activity}] : [];
    });
  }

  function getCasePractice(pack, item, catalogVersion = 2) {
    if (!pack || !item || !Object.hasOwn(versions, pack.id) || pack.contentVersion !== versions[pack.id]) return null;
    const location = pack.locations.find(place => (pack.questions[place.id] || []).some(candidate => candidate.caseId === item.caseId));
    if (!location) return null;
    // Resolve owned evidence; callers cannot inject a different answer under a
    // known case identity. A future content version gets no stale adaptation.
    const original = pack.questions[location.id].find(candidate => candidate.caseId === item.caseId);
    const design = typeof module !== 'undefined' && module.exports ? require('./case-design.js') : root.CarmenCaseDesign;
    if (catalogVersion === 3 && !design) throw new Error('Case design content is unavailable. Reload the game assets together.');
    const owned = catalogVersion === 3 ? design.resolveCase(pack, original, catalogVersion) : original;
    const compact = compactPacks.has(pack.id);
    const entry = Object.hasOwn(transfers, pack.id) ? transfers[pack.id] : null;
    const transfer = entry && entry.contentVersion === pack.contentVersion ? entry.locations[location.id] : null;
    return {
      briefing: compact ? `${owned.puzzle.title}. Investigate the ${location.name} teaching copy.` : owned.briefing.report,
      description: compact ? `Case task: ${owned.puzzle.question}` : owned.puzzle.description,
      callingCard: compact ? '' : owned.briefing.callingCard,
      fictionNotice: compact ? fictionNotice : '',
      compact,
      transfer: transfer ? {...transfer} : null
    };
  }

  const api = {getCasePractice, getTransferActivities, warrantLabel, presentCaseText};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.CarmenPractice = api;
})(typeof globalThis !== 'undefined' ? globalThis : window);
