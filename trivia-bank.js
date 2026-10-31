// Trivia bank: real, sourced facts per place. The first 12 packs are source-reviewed facts from the retired case packs (2026-10-28).
// The 11 Quiznauts packs from capitals-africa-carmen on were source-reviewed and cleaned on 2026-10-30; see docs/provenance/2026-10-30-quiznauts-fact-check.md.
// Edit clues here directly; keep fact ids stable so review progress survives.
const TRIVIA_BANK = {
 "version": 1,
 "packs": [
  {
   "id": "bentonville-carmen",
   "title": "Where in Bentonville is Carmen Sandiego?",
   "places": [
    {
     "id": "downtown-square",
     "name": "Downtown Square",
     "region": "Historic Downtown",
     "lat": 36.3729,
     "lng": -94.2088,
     "emoji": "🏛️",
     "suspect": {
      "name": "Dottie Ledger",
      "alias": "The Square Dealer",
      "emoji": "🧾"
     },
     "facts": [
      {
       "id": "downtown-square-2",
       "clue": "Visit Bentonville describes the ____ as a year-round gathering place for community programs.",
       "fact": "Visit Bentonville describes the Square as a year-round gathering place for community programs.",
       "sources": [
        {
         "title": "Downtown Square",
         "publisher": "Visit Bentonville",
         "url": "https://www.visitbentonville.com/things-to-do/parks-trails-lakes/downtown-square/"
        },
        {
         "title": "A Street Promenade & outdoor dining",
         "publisher": "Visit Bentonville",
         "url": "https://www.visitbentonville.com/blog/stories/post/outdoor-dining-patios-around-bentonville/"
        }
       ]
      },
      {
       "id": "downtown-square-3",
       "clue": "The ____ is the heart of Bentonville's historic center and sits among civic, dining, shopping, and public art destinations.",
       "fact": "The Square is the heart of Bentonville historic downtown and sits among civic, dining, shopping, and public art destinations.",
       "sources": [
        {
         "title": "Downtown Square",
         "publisher": "Visit Bentonville",
         "url": "https://www.visitbentonville.com/things-to-do/parks-trails-lakes/downtown-square/"
        },
        {
         "title": "Benton County Government contact and locations",
         "publisher": "Benton County Government",
         "url": "https://bentoncountyar.gov/contact/"
        }
       ]
      },
      {
       "id": "downtown-square-4",
       "clue": "The ____ is illuminated with holiday lights each winter.",
       "fact": "The Square is illuminated with holiday lights each winter.",
       "sources": [
        {
         "title": "Downtown Square",
         "publisher": "Visit Bentonville",
         "url": "https://www.visitbentonville.com/things-to-do/parks-trails-lakes/downtown-square/"
        }
       ]
      },
      {
       "id": "downtown-square-5",
       "clue": "____ is known for unique public artwork as well as restaurants, bars, boutiques, bakeries, and coffee shops.",
       "fact": "Downtown Square is known for unique public artwork as well as restaurants, bars, boutiques, bakeries, and coffee shops.",
       "sources": [
        {
         "title": "Downtown Square",
         "publisher": "Visit Bentonville",
         "url": "https://www.visitbentonville.com/things-to-do/parks-trails-lakes/downtown-square/"
        }
       ]
      }
     ]
    },
    {
     "id": "walmart-museum",
     "name": "Walmart Museum",
     "region": "Downtown Bentonville",
     "lat": 36.3727,
     "lng": -94.2092,
     "emoji": "🛒",
     "suspect": {
      "name": "Marty Markup",
      "alias": "The Price Roller",
      "emoji": "🏷️"
     },
     "facts": [
      {
       "id": "walmart-museum-1",
       "clue": "Walton's 5&10, now part of the ____, was a different store from the first Walmart, which opened in Rogers.",
       "fact": "Walton's 5&10, now part of the Walmart Museum, was a different store from the first Walmart, which opened in Rogers.",
       "sources": [
        {
         "title": "Sam Walton — The Road to Walmart",
         "publisher": "Walmart",
         "url": "https://corporate.walmart.com/about/sam-walton"
        },
        {
         "title": "Walmart Museum & History",
         "publisher": "Walmart",
         "url": "https://corporate.walmart.com/about/walmart-museum/"
        }
       ]
      },
      {
       "id": "walmart-museum-2",
       "clue": "The Spark Cafe serves Sam Walton themed treats, including butter pecan as a signature reference.",
       "fact": "The Spark Cafe serves Sam Walton themed treats, including butter pecan as a signature reference.",
       "sources": [
        {
         "title": "Walmart Museum & History",
         "publisher": "Walmart",
         "url": "https://corporate.walmart.com/about/walmart-museum/"
        }
       ]
      },
      {
       "id": "walmart-museum-3",
       "clue": "The ____ galleries trace the company's history from a small-town store to a global retailer.",
       "fact": "The Walmart Museum galleries trace Walmart history from a small-town store to a global retailer.",
       "sources": [
        {
         "title": "Walmart Museum & History",
         "publisher": "Walmart",
         "url": "https://corporate.walmart.com/about/walmart-museum/"
        }
       ]
      },
      {
       "id": "walmart-museum-5",
       "clue": "The ____ has free admission and includes galleries, Walton's 5&10, and The Spark Cafe.",
       "fact": "The Walmart Museum has free admission and includes galleries, Walton's 5&10, and The Spark Cafe.",
       "sources": [
        {
         "title": "Walmart Museum & History",
         "publisher": "Walmart",
         "url": "https://corporate.walmart.com/about/walmart-museum/"
        }
       ]
      }
     ]
    },
    {
     "id": "walmart-home-office",
     "name": "Walmart Home Office",
     "region": "8th Street Campus",
     "lat": 36.3599,
     "lng": -94.2054,
     "emoji": "🏢",
     "suspect": {
      "name": "Hollis Hallway",
      "alias": "The Wayfinder",
      "emoji": "🧭"
     },
     "facts": [
      {
       "id": "walmart-home-office-1",
       "clue": "The new ____ is a 350-acre campus.",
       "fact": "The new Home Office is a 350-acre campus.",
       "sources": [
        {
         "title": "New Home Office",
         "publisher": "Walmart",
         "url": "https://corporate.walmart.com/about/newhomeoffice"
        }
       ]
      },
      {
       "id": "walmart-home-office-2",
       "clue": "The ____ public-space list includes Sam Walton Hall.",
       "fact": "The Home Office public-space list includes Sam Walton Hall.",
       "sources": [
        {
         "title": "New Home Office",
         "publisher": "Walmart",
         "url": "https://corporate.walmart.com/about/newhomeoffice"
        }
       ]
      },
      {
       "id": "walmart-home-office-3",
       "clue": "8th & Plate is one of the new ____'s public spaces.",
       "fact": "8th & Plate is one of the new Home Office's public spaces.",
       "sources": [
        {
         "title": "New Home Office",
         "publisher": "Walmart",
         "url": "https://corporate.walmart.com/about/newhomeoffice"
        }
       ]
      },
      {
       "id": "walmart-home-office-4",
       "clue": "The new ____ includes Walton Family Whole Health & Fitness as a named campus destination.",
       "fact": "The new Home Office includes Walton Family Whole Health & Fitness as a named campus destination.",
       "sources": [
        {
         "title": "New Home Office",
         "publisher": "Walmart",
         "url": "https://corporate.walmart.com/about/newhomeoffice"
        }
       ]
      },
      {
       "id": "walmart-home-office-5",
       "clue": "The new ____ campus has 12 workplace buildings, each designed with its own identity.",
       "fact": "The new Home Office campus has 12 workplace buildings, each designed with its own identity.",
       "sources": [
        {
         "title": "New Home Office",
         "publisher": "Walmart",
         "url": "https://corporate.walmart.com/about/newhomeoffice"
        }
       ]
      }
     ]
    },
    {
     "id": "crystal-bridges",
     "name": "Crystal Bridges",
     "region": "Museum Way",
     "lat": 36.3812,
     "lng": -94.2037,
     "emoji": "🎨",
     "suspect": {
      "name": "Clara Glaze",
      "alias": "The Varnish",
      "emoji": "🖼️"
     },
     "facts": [
      {
       "id": "crystal-bridges-1",
       "clue": "Architect Moshe Safdie designed ____ to relate to its Ozark setting; the museum describes ponds, bridges and pavilions as parts of that design.",
       "fact": "Architect Moshe Safdie designed Crystal Bridges to relate to its Ozark setting; the museum describes ponds, bridges and pavilions as parts of that design.",
       "sources": [
        {
         "title": "Architecture — Moshe Safdie",
         "publisher": "Crystal Bridges Museum of American Art",
         "url": "https://crystalbridges.org/architecture"
        }
       ]
      },
      {
       "id": "crystal-bridges-2",
       "clue": "Five miles of sculpture and walking trails connect ____ to downtown Bentonville.",
       "fact": "Five miles of sculpture and walking trails connect Crystal Bridges to downtown Bentonville.",
       "sources": [
        {
         "title": "About Crystal Bridges Museum of American Art",
         "publisher": "Crystal Bridges Museum of American Art",
         "url": "https://crystalbridges.org/about"
        }
       ]
      },
      {
       "id": "crystal-bridges-3",
       "clue": "____ has a library with more than 50,000 art reference volumes.",
       "fact": "Crystal Bridges has a library with more than 50,000 art reference volumes.",
       "sources": [
        {
         "title": "About Crystal Bridges Museum of American Art",
         "publisher": "Crystal Bridges Museum of American Art",
         "url": "https://crystalbridges.org/about"
        }
       ]
      },
      {
       "id": "crystal-bridges-5",
       "clue": "____ permanent collection spans five centuries of American art and is free to view.",
       "fact": "Crystal Bridges permanent collection spans five centuries of American art and is free to view.",
       "sources": [
        {
         "title": "About Crystal Bridges Museum of American Art",
         "publisher": "Crystal Bridges Museum of American Art",
         "url": "https://crystalbridges.org/about"
        }
       ]
      }
     ]
    },
    {
     "id": "the-momentary",
     "name": "The Momentary",
     "region": "8th Street Market District",
     "lat": 36.3653,
     "lng": -94.2028,
     "emoji": "🎭",
     "suspect": {
      "name": "Mina Flux",
      "alias": "The Pop-Up",
      "emoji": "🎛️"
     },
     "facts": [
      {
       "id": "the-momentary-1",
       "clue": "____ names its conversion from a cheese plant to an arts space as an adaptive reuse project by Wheeler Kearns Architects.",
       "fact": "The Momentary names its conversion from a cheese plant to an arts space as an adaptive reuse project by Wheeler Kearns Architects.",
       "sources": [
        {
         "title": "About the Momentary — Our Space and Fermentation Hall",
         "publisher": "The Momentary",
         "url": "https://themomentary.org/about/"
        }
       ]
      },
      {
       "id": "the-momentary-2",
       "clue": "____ Tower is a 70-foot-tall space with multiple mezzanines for art, performance, and social events.",
       "fact": "The Momentary Tower is a 70-foot-tall space with multiple mezzanines for art, performance, and social events.",
       "sources": [
        {
         "title": "About the Momentary",
         "publisher": "The Momentary",
         "url": "https://themomentary.org/about/"
        }
       ]
      },
      {
       "id": "the-momentary-3",
       "clue": "____ Green is an outdoor gathering area used for picnics, social events, art exploration, and music festivals.",
       "fact": "Momentary Green is an outdoor gathering area used for picnics, social events, art exploration, and music festivals.",
       "sources": [
        {
         "title": "About the Momentary",
         "publisher": "The Momentary",
         "url": "https://themomentary.org/about/"
        }
       ]
      },
      {
       "id": "the-momentary-4",
       "clue": "____ galleries feature art and exhibitions that change throughout the year.",
       "fact": "The Momentary galleries feature art and exhibitions that change throughout the year.",
       "sources": [
        {
         "title": "About the Momentary",
         "publisher": "The Momentary",
         "url": "https://themomentary.org/about/"
        }
       ]
      },
      {
       "id": "the-momentary-5",
       "clue": "____ Box Office handles tickets, schedules, program details, and visitor information.",
       "fact": "The Momentary Box Office handles tickets, schedules, program details, and visitor information.",
       "sources": [
        {
         "title": "About the Momentary",
         "publisher": "The Momentary",
         "url": "https://themomentary.org/about/"
        }
       ]
      }
     ]
    },
    {
     "id": "compton-gardens",
     "name": "Compton Gardens",
     "region": "North Main Greenway",
     "lat": 36.3766,
     "lng": -94.2082,
     "emoji": "🌿",
     "suspect": {
      "name": "Fern Compton",
      "alias": "The Understory",
      "emoji": "🍃"
     },
     "facts": [
      {
       "id": "compton-gardens-1",
       "clue": "____ & Arboretum showcases native Ozark plants in a seven-acre downtown greenspace.",
       "fact": "Compton Gardens & Arboretum showcases native Ozark plants in a seven-acre downtown greenspace.",
       "sources": [
        {
         "title": "Compton Gardens & Arboretum",
         "publisher": "Peel Compton Foundation",
         "url": "https://peelcompton.org/compton-gardens-arboretum/"
        }
       ]
      },
      {
       "id": "compton-gardens-2",
       "clue": "The ____ Exhibit Room is listed at 312 N. Main Street with weekday hours.",
       "fact": "The Compton Gardens Exhibit Room is listed at 312 N. Main Street with weekday hours.",
       "sources": [
        {
         "title": "Compton Gardens & Arboretum",
         "publisher": "Peel Compton Foundation",
         "url": "https://peelcompton.org/compton-gardens-arboretum/"
        }
       ]
      },
      {
       "id": "compton-gardens-3",
       "clue": "Visitors can walk or bike through trails lined with native plants and trees at ____.",
       "fact": "Visitors can walk or bike through trails lined with native plants and trees at Compton Gardens.",
       "sources": [
        {
         "title": "Compton Gardens & Arboretum",
         "publisher": "Peel Compton Foundation",
         "url": "https://peelcompton.org/compton-gardens-arboretum/"
        }
       ]
      },
      {
       "id": "compton-gardens-4",
       "clue": "____ honors Dr. Neil ____ and his passion for preserving the Ozark landscape.",
       "fact": "Compton Gardens honors Dr. Neil Compton and his passion for preserving the Ozark landscape.",
       "sources": [
        {
         "title": "Compton Gardens & Arboretum",
         "publisher": "Peel Compton Foundation",
         "url": "https://peelcompton.org/compton-gardens-arboretum/"
        }
       ]
      },
      {
       "id": "compton-gardens-5",
       "clue": "The ____ house is a mid-century modern space used for private rentals.",
       "fact": "The Compton Gardens house is a mid-century modern space used for private rentals.",
       "sources": [
        {
         "title": "Compton Gardens & Arboretum",
         "publisher": "Peel Compton Foundation",
         "url": "https://peelcompton.org/compton-gardens-arboretum/"
        }
       ]
      }
     ]
    },
    {
     "id": "coler-preserve",
     "name": "Coler Mountain Bike Preserve",
     "region": "West Bentonville Trails",
     "lat": 36.3807,
     "lng": -94.2328,
     "emoji": "🚵",
     "suspect": {
      "name": "Ridge Reilly",
      "alias": "The Dropper",
      "emoji": "🛞"
     },
     "facts": [
      {
       "id": "coler-preserve-1",
       "clue": "At the top of ____, The Hub is an elevated launch point for downhill trails.",
       "fact": "At the top of Coler Mountain, The Hub is an elevated launch point for downhill trails.",
       "sources": [
        {
         "title": "Coler Mountain Bike Preserve: The Hub",
         "publisher": "Walton Family Foundation",
         "url": "https://www.waltonfamilyfoundation.org/stories/home-region/coler-mountain-bike-preserve-set-to-soar"
        },
        {
         "title": "Mountain Biking at Coler Mountain Bike Preserve",
         "publisher": "Peel Compton Foundation",
         "url": "https://peelcompton.org/coler-mountain-bike-preserve/mountain-biking/"
        }
       ]
      },
      {
       "id": "coler-preserve-2",
       "clue": "____ campground offers hike-in, camper van, and ADA sites with trail access.",
       "fact": "Coler campground offers hike-in, camper van, and ADA sites with trail access.",
       "sources": [
        {
         "title": "Coler Mountain Bike Preserve",
         "publisher": "Visit Bentonville",
         "url": "https://www.visitbentonville.com/things-to-do/parks-trails-lakes/coler/"
        },
        {
         "title": "Coler Campground",
         "publisher": "Peel Compton Foundation",
         "url": "https://www.peelcompton.org/coler-mountain-bike-preserve/coler-campground/"
        }
       ]
      },
      {
       "id": "coler-preserve-3",
       "clue": "____ is divided into Westside trails for beginner and intermediate riders and Eastside trails for more experienced riders.",
       "fact": "Coler is divided into Westside trails for beginner and intermediate riders and Eastside trails for more experienced riders.",
       "sources": [
        {
         "title": "Mountain Biking at Coler Mountain Bike Preserve",
         "publisher": "Peel Compton Foundation",
         "url": "https://peelcompton.org/coler-mountain-bike-preserve/mountain-biking/"
        }
       ]
      },
      {
       "id": "coler-preserve-4",
       "clue": "____ trails include flowy jump lines, technical rocky sections, and large gap jumps.",
       "fact": "Coler trails include flowy jump lines, technical rocky sections, and large gap jumps.",
       "sources": [
        {
         "title": "Mountain Biking at Coler Mountain Bike Preserve",
         "publisher": "Peel Compton Foundation",
         "url": "https://peelcompton.org/coler-mountain-bike-preserve/mountain-biking/"
        }
       ]
      }
     ]
    },
    {
     "id": "osage-park",
     "name": "Osage Park",
     "region": "Southwest Bentonville Wetlands",
     "lat": 36.3545,
     "lng": -94.2224,
     "emoji": "🦆",
     "suspect": {
      "name": "Ozzie Quill",
      "alias": "The Fletching",
      "emoji": "🏹"
     },
     "facts": [
      {
       "id": "osage-park-1",
       "clue": "____ includes floating boardwalks around a wetland ecosystem.",
       "fact": "Osage Park includes floating boardwalks around a wetland ecosystem.",
       "sources": [
        {
         "title": "Osage Park",
         "publisher": "Peel Compton Foundation",
         "url": "https://peelcompton.org/osage-park/"
        }
       ]
      },
      {
       "id": "osage-park-2",
       "clue": "The Quiver is an outdoor archery range nestled in ____.",
       "fact": "The Quiver is an outdoor archery range nestled in Osage Park.",
       "sources": [
        {
         "title": "Osage Park",
         "publisher": "Peel Compton Foundation",
         "url": "https://peelcompton.org/osage-park/"
        }
       ]
      },
      {
       "id": "osage-park-3",
       "clue": "____ has an eight-court outdoor pickleball facility.",
       "fact": "Osage Park has an eight-court outdoor pickleball facility.",
       "sources": [
        {
         "title": "Osage Park",
         "publisher": "Peel Compton Foundation",
         "url": "https://peelcompton.org/osage-park/"
        }
       ]
      },
      {
       "id": "osage-park-4",
       "clue": "____ includes art installations throughout the park.",
       "fact": "Osage Park includes art installations throughout the park.",
       "sources": [
        {
         "title": "Osage Park",
         "publisher": "Peel Compton Foundation",
         "url": "https://peelcompton.org/osage-park/"
        }
       ]
      },
      {
       "id": "osage-park-5",
       "clue": "____ combines wetland access, recreation areas, pickleball, dog park space, archery, and public art.",
       "fact": "Osage Park combines wetland access, recreation areas, pickleball, dog park space, archery, and public art.",
       "sources": [
        {
         "title": "Osage Park",
         "publisher": "Peel Compton Foundation",
         "url": "https://peelcompton.org/osage-park/"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "argentina-carmen",
   "title": "Where in Argentina is Carmen Sandiego?",
   "places": [
    {
     "id": "buenos-aires",
     "name": "Buenos Aires",
     "region": "Capital Federal",
     "lat": -34.6037,
     "lng": -58.3816,
     "emoji": "🏛️",
     "suspect": {
      "name": "Tito Trapaza",
      "alias": "El Tanguero",
      "emoji": "🎻"
     },
     "facts": [
      {
       "id": "buenos-aires-1",
       "clue": "____ is known for its bookstores, literary culture, and historic neighborhoods.",
       "fact": "Buenos Aires is known for its bookstores, literary culture, and historic neighborhoods.",
       "sources": [
        {
         "title": "Caminito",
         "publisher": "Government of the City of Buenos Aires",
         "url": "https://turismo.buenosaires.gob.ar/en/otros-establecimientos/caminito"
        },
        {
         "title": "A city of theatre, film, literature and music",
         "publisher": "Government of the City of Buenos Aires",
         "url": "https://turismo.buenosaires.gob.ar/en/article/city-theatre-film-literature-and-music"
        }
       ]
      },
      {
       "id": "buenos-aires-2",
       "clue": "The ____ city tourism account credits the Obelisco to architect Alberto Prebisch and dates it to 1936.",
       "fact": "The Buenos Aires city tourism account credits the Obelisco to architect Alberto Prebisch and dates it to 1936.",
       "sources": [
        {
         "title": "Obelisco (the obelisk) — location and architect",
         "publisher": "Buenos Aires City tourism",
         "url": "https://turismo.buenosaires.gob.ar/en/atractivo/obelisco-obelisk"
        }
       ]
      },
      {
       "id": "buenos-aires-3",
       "clue": "Café Tortoni is one of ____ most famous historic cafes and has long been associated with writers and artists.",
       "fact": "Café Tortoni is one of Buenos Aires most famous historic cafes and has long been associated with writers and artists.",
       "sources": [
        {
         "title": "Café Tortoni",
         "publisher": "Government of the City of Buenos Aires",
         "url": "https://turismo.buenosaires.gob.ar/en/node/41006"
        }
       ]
      },
      {
       "id": "buenos-aires-4",
       "clue": "Teatro Colón is one of ____ most important performance landmarks and is internationally known for opera and classical music.",
       "fact": "Teatro Colón is one of Buenos Aires most important performance landmarks and is internationally known for opera and classical music.",
       "sources": [
        {
         "title": "Teatro Colón",
         "publisher": "Government of the City of Buenos Aires",
         "url": "https://turismo.buenosaires.gob.ar/en/otros-establecimientos/teatro-col%C3%B3n"
        }
       ]
      },
      {
       "id": "buenos-aires-5",
       "clue": "Recoleta Cemetery is known for elaborate mausoleums and is one of ____ best-known heritage sites.",
       "fact": "Recoleta Cemetery is known for elaborate mausoleums and is one of Buenos Aires best-known heritage sites.",
       "sources": [
        {
         "title": "Recoleta Cemetery",
         "publisher": "Government of the City of Buenos Aires",
         "url": "https://turismo.buenosaires.gob.ar/en/otros-establecimientos/recoleta-cemetery"
        }
       ]
      }
     ]
    },
    {
     "id": "mendoza",
     "name": "Mendoza",
     "region": "Mendoza",
     "lat": -32.8902,
     "lng": -68.8458,
     "emoji": "🍷",
     "suspect": {
      "name": "Vera Vicario",
      "alias": "La Vendimia",
      "emoji": "🍇"
     },
     "facts": [
      {
       "id": "mendoza-1",
       "clue": "____ is home to Aconcagua, the highest mountain in both the Western and Southern Hemispheres at roughly 6,960 m (published surveys differ by a few metres).",
       "fact": "Mendoza is home to Aconcagua, the highest mountain in both the Western and Southern Hemispheres at roughly 6,960 m (published surveys differ by a few metres).",
       "sources": [
        {
         "title": "Aconcagua Provincial Park",
         "publisher": "Government of Mendoza, Ministry of Energy and Environment",
         "url": "https://informacionoficial.mendoza.gob.ar/energiayambiente/aconcagua/"
        }
       ]
      },
      {
       "id": "mendoza-2",
       "clue": "____ is closely associated with Argentina wine country and the annual grape harvest festival, Vendimia.",
       "fact": "Mendoza is closely associated with Argentina wine country and the annual grape harvest festival, Vendimia.",
       "sources": [
        {
         "title": "Fiesta Nacional de la Vendimia",
         "publisher": "Government of Mendoza",
         "url": "https://www.mendoza.gob.ar/vendimia/"
        },
        {
         "title": "Vendimia visitor activities at Plaza Independencia",
         "publisher": "Government of Mendoza, EMETUR",
         "url": "https://prensa.mendoza.gob.ar/el-emetur-recibe-a-los-turistas-que-nos-visitan-en-vendimia/"
        }
       ]
      },
      {
       "id": "mendoza-4",
       "clue": "____ wine regions use Andes snowmelt and irrigation canals to support vineyards in an otherwise dry climate.",
       "fact": "Mendoza wine regions use Andes snowmelt and irrigation canals to support vineyards in an otherwise dry climate.",
       "sources": [
        {
         "title": "Valle de Uco irrigation modernization",
         "publisher": "Government of Mendoza",
         "url": "https://prensa.mendoza.gob.ar/510260-2/"
        },
        {
         "title": "Mendoza rivers and water distribution",
         "publisher": "Mendoza Department General of Irrigation",
         "url": "https://www.irrigacion.gov.ar/archivo_historico/2022/12/14/mendoza-sus-rios-y-la-red-de-distribucion-que-origina-nuestros-oasis/"
        }
       ]
      },
      {
       "id": "mendoza-5",
       "clue": "General San Martín Park is a major public green space in ____ city.",
       "fact": "General San Martín Park is a major public green space in Mendoza city.",
       "sources": [
        {
         "title": "General San Martín Park entrance gates",
         "publisher": "Government of Mendoza",
         "url": "https://www.mendoza.gov.ar/prensa/los-emblematicos-portones-del-parque-general-san-martin-ya-estan-restaurados/"
        }
       ]
      }
     ]
    },
    {
     "id": "salta",
     "name": "Salta",
     "region": "Salta",
     "lat": -24.7821,
     "lng": -65.4232,
     "emoji": "🏔️",
     "suspect": {
      "name": "Saúl Sandoval",
      "alias": "El Salteño",
      "emoji": "🐎"
     },
     "facts": [
      {
       "id": "salta-1",
       "clue": "The Tren a las Nubes trip combines a road leg with a rail leg that boards at San Antonio de los Cobres, visits La Polvorilla, and returns to that station.",
       "fact": "The Tren a las Nubes trip combines a road leg with a rail leg that boards at San Antonio de los Cobres, visits La Polvorilla, and returns to that station.",
       "sources": [
        {
         "title": "Recorrido — San Antonio de los Cobres and La Polvorilla",
         "publisher": "Tren a las Nubes, Servicio Ferroviario Turístico Sociedad del Estado",
         "url": "https://trenalasnubes.com.ar/recorrido-es/"
        }
       ]
      },
      {
       "id": "salta-2",
       "clue": "Cafayate is known for dramatic valley landscapes and high-altitude wine production.",
       "fact": "Cafayate is known for dramatic valley landscapes and high-altitude wine production.",
       "sources": [
        {
         "title": "Cafayate",
         "publisher": "Government of Salta Tourism",
         "url": "https://visit.turismosalta.gov.ar/post/cafayate/"
        }
       ]
      },
      {
       "id": "salta-3",
       "clue": "____ preserves notable colonial architecture around its central square.",
       "fact": "Salta preserves notable colonial architecture around its central square.",
       "sources": [
        {
         "title": "The history of Salta Cabildo",
         "publisher": "Argentina National Ministry of Culture, Museum of the North",
         "url": "https://museodelnorte.cultura.gob.ar/noticia/la-historia-del-cabildo-de-salta/"
        }
       ]
      },
      {
       "id": "salta-4",
       "clue": "Cerro San Bernardo is a well-known viewpoint above ____ city.",
       "fact": "Cerro San Bernardo is a well-known viewpoint above Salta city.",
       "sources": [
        {
         "title": "Teleférico San Bernardo",
         "publisher": "Government of Salta Tourism",
         "url": "https://visit.turismosalta.gov.ar/post/teleferico-san-bernardo/"
        }
       ]
      },
      {
       "id": "salta-5",
       "clue": "The high Andean northwest includes striking salt-flat landscapes that are commonly visited from ____ and Jujuy routes.",
       "fact": "The high Andean northwest includes striking salt-flat landscapes that are commonly visited from Salta and Jujuy routes.",
       "sources": [
        {
         "title": "Salinas Grandes guide and regional location",
         "publisher": "Government of Jujuy Tourism",
         "url": "https://www.turismo.jujuy.gob.ar/wp-content/uploads/Manual-para-Guias-Idoneos_v5.pdf"
        }
       ]
      }
     ]
    },
    {
     "id": "cordoba",
     "name": "Córdoba",
     "region": "Córdoba",
     "lat": -31.4201,
     "lng": -64.1888,
     "emoji": "🎸",
     "suspect": {
      "name": "Clara Cortázar",
      "alias": "La Cátedra",
      "emoji": "📚"
     },
     "facts": [
      {
       "id": "cordoba-1",
       "clue": "The National University of ____ was founded in 1613 and is one of the oldest universities in the Americas.",
       "fact": "The National University of Córdoba was founded in 1613 and is one of the oldest universities in the Americas.",
       "sources": [
        {
         "title": "Historical Overview",
         "publisher": "National University of Córdoba",
         "url": "https://www.unc.edu.ar/english/historical-overview"
        },
        {
         "title": "Barrio Nueva Córdoba",
         "publisher": "Government of Córdoba Tourism",
         "url": "https://cordobaturismo.gov.ar/experiencias/barrio-nueva-cordoba/"
        }
       ]
      },
      {
       "id": "cordoba-3",
       "clue": "The Sierras de ____ are a defining landscape around the province.",
       "fact": "The Sierras de Córdoba are a defining landscape around the province.",
       "sources": [
        {
         "title": "Bosque Alegre Astrophysical Station visits",
         "publisher": "National University of Córdoba Astronomical Observatory",
         "url": "https://oac.unc.edu.ar/actividades-para-todo-publico/visitas-guiadas/"
        }
       ]
      },
      {
       "id": "cordoba-4",
       "clue": "The Jesuit Block and Estancias of ____ are recognized by UNESCO for their historical and architectural significance.",
       "fact": "The Jesuit Block and Estancias of Córdoba are recognized by UNESCO for their historical and architectural significance.",
       "sources": [
        {
         "title": "Jesuit Block and Estancias of Córdoba",
         "publisher": "UNESCO World Heritage Centre",
         "url": "https://whc.unesco.org/en/list/995/"
        }
       ]
      },
      {
       "id": "cordoba-5",
       "clue": "Nueva ____ is associated with student life and cultural activity near the city center.",
       "fact": "Nueva Córdoba is associated with student life and cultural activity near the city center.",
       "sources": [
        {
         "title": "Media Legua de Oro Cultural: Paseo del Buen Pastor",
         "publisher": "Government of Córdoba Tourism",
         "url": "https://cordobaturismo.gov.ar/experiencias/media-legua-de-oro-cultural/"
        },
        {
         "title": "Barrio Nueva Córdoba",
         "publisher": "Government of Córdoba Tourism",
         "url": "https://cordobaturismo.gov.ar/experiencias/barrio-nueva-cordoba/"
        }
       ]
      }
     ]
    },
    {
     "id": "iguazu",
     "name": "Puerto Iguazú",
     "region": "Misiones",
     "lat": -25.5991,
     "lng": -54.5736,
     "emoji": "🌊",
     "suspect": {
      "name": "Iván Irala",
      "alias": "El Iguazuano",
      "emoji": "🚤"
     },
     "facts": [
      {
       "id": "iguazu-1",
       "clue": "The ____ Falls consist of roughly 275 waterfalls on the ____ River.",
       "fact": "The Iguazú Falls consist of roughly 275 waterfalls on the Iguazú River.",
       "sources": [
        {
         "title": "Iguazú National Park activities",
         "publisher": "Argentina National Parks Administration",
         "url": "https://www.argentina.gob.ar/parquesnacionales/nea/parque-nacional-iguazu/actividades"
        },
        {
         "title": "Iguazú Falls: location and waterfall count",
         "publisher": "Government of Argentina Tourism",
         "url": "https://www.argentina.gob.ar/jefatura/turismo/viaja-por-argentina/conocer-las-cataratas-del-iguazu"
        }
       ]
      },
      {
       "id": "iguazu-2",
       "clue": "____ National Park has multiple walkways that reveal the falls from different levels.",
       "fact": "Iguazú National Park has multiple walkways that reveal the falls from different levels.",
       "sources": [
        {
         "title": "Iguazú National Park activities",
         "publisher": "Argentina National Parks Administration",
         "url": "https://www.argentina.gob.ar/parquesnacionales/nea/parque-nacional-iguazu/actividades"
        }
       ]
      },
      {
       "id": "iguazu-3",
       "clue": "____ sits near the border area shared by Argentina, Brazil, and Paraguay.",
       "fact": "Puerto Iguazú sits near the border area shared by Argentina, Brazil, and Paraguay.",
       "sources": [
        {
         "title": "Triple Frontier viewpoint",
         "publisher": "Visit Iguazú",
         "url": "https://visitiguazu.travel/atractivos/paseo-artesanal-hito-tres-fronteras/"
        }
       ]
      },
      {
       "id": "iguazu-5",
       "clue": "____ National Park protects subtropical forest around one of the world's great waterfall systems.",
       "fact": "Iguazu National Park protects subtropical forest around one of the world's great waterfall systems.",
       "sources": [
        {
         "title": "Iguazú National Park activities",
         "publisher": "Argentina National Parks Administration",
         "url": "https://www.argentina.gob.ar/parquesnacionales/nea/parque-nacional-iguazu/actividades"
        }
       ]
      }
     ]
    },
    {
     "id": "bariloche",
     "name": "San Carlos de Bariloche",
     "region": "Río Negro",
     "lat": -41.1335,
     "lng": -71.3103,
     "emoji": "🏔️",
     "suspect": {
      "name": "Berta Brügger",
      "alias": "La Bombonera",
      "emoji": "🍫"
     },
     "facts": [
      {
       "id": "bariloche-1",
       "clue": "____ lies beside Nahuel Huapi Lake in the Argentine Andes.",
       "fact": "San Carlos de Bariloche lies beside Nahuel Huapi Lake in the Argentine Andes.",
       "sources": [
        {
         "title": "Cerro Otto",
         "publisher": "Municipality of San Carlos de Bariloche Tourism",
         "url": "https://www.barilocheturismo.gob.ar/es/actividades-cerro-otto"
        },
        {
         "title": "Lake excursions on Nahuel Huapi",
         "publisher": "Municipality of San Carlos de Bariloche Tourism",
         "url": "https://www.barilocheturismo.gob.ar/es/excursiones-lacustres"
        }
       ]
      },
      {
       "id": "bariloche-2",
       "clue": "Nahuel Huapi Lake is central to ____ scenery and tourism.",
       "fact": "Nahuel Huapi Lake is central to Bariloche scenery and tourism.",
       "sources": [
        {
         "title": "Puerto Pañuelo",
         "publisher": "Municipality of San Carlos de Bariloche Tourism",
         "url": "https://www.barilocheturismo.gob.ar/es/puerto-panuelo"
        },
        {
         "title": "Lake excursions on Nahuel Huapi",
         "publisher": "Municipality of San Carlos de Bariloche Tourism",
         "url": "https://www.barilocheturismo.gob.ar/es/excursiones-lacustres"
        }
       ]
      },
      {
       "id": "bariloche-3",
       "clue": "____ civic architecture is known for its alpine-inspired stone and timber character.",
       "fact": "Bariloche civic architecture is known for its alpine-inspired stone and timber character.",
       "sources": [
        {
         "title": "Civic Center",
         "publisher": "Municipality of San Carlos de Bariloche Tourism",
         "url": "https://www.barilocheturismo.gob.ar/es/centro-civico"
        }
       ]
      },
      {
       "id": "bariloche-4",
       "clue": "____ Civic Center is a recognizable stone-and-wood landmark in the city center.",
       "fact": "Bariloche Civic Center is a recognizable stone-and-wood landmark in the city center.",
       "sources": [
        {
         "title": "Civic Center",
         "publisher": "Municipality of San Carlos de Bariloche Tourism",
         "url": "https://www.barilocheturismo.gob.ar/es/centro-civico"
        }
       ]
      }
     ]
    },
    {
     "id": "ushuaia",
     "name": "Ushuaia",
     "region": "Tierra del Fuego",
     "lat": -54.8019,
     "lng": -68.303,
     "emoji": "🚢",
     "suspect": {
      "name": "Ulises Urrutia",
      "alias": "El Austral",
      "emoji": "⚓"
     },
     "facts": [
      {
       "id": "ushuaia-1",
       "clue": "____ is a city on the Beagle Channel in Tierra del Fuego, in southern Argentina.",
       "fact": "Ushuaia is a city on the Beagle Channel in Tierra del Fuego, in southern Argentina.",
       "sources": [
        {
         "title": "Les Eclaireurs Lighthouse",
         "publisher": "Municipality of Ushuaia Tourism",
         "url": "https://turismoushuaia.com/actividad/faro-les-eclaireurs/"
        },
        {
         "title": "Beagle Channel",
         "publisher": "Municipality of Ushuaia Tourism",
         "url": "https://turismoushuaia.com/zonas/canal-beagle/"
        }
       ]
      },
      {
       "id": "ushuaia-2",
       "clue": "The Beagle Channel is one of ____ most recognizable maritime settings.",
       "fact": "The Beagle Channel is one of Ushuaia most recognizable maritime settings.",
       "sources": [
        {
         "title": "Beagle Channel",
         "publisher": "Municipality of Ushuaia Tourism",
         "url": "https://turismoushuaia.com/zonas/canal-beagle/"
        }
       ]
      },
      {
       "id": "ushuaia-3",
       "clue": "____ is strongly associated with the phrase Fin del Mundo, or End of the World.",
       "fact": "Ushuaia is strongly associated with the phrase Fin del Mundo, or End of the World.",
       "sources": [
        {
         "title": "End of the World Post Office location",
         "publisher": "Municipality of Ushuaia Tourism",
         "url": "https://turismoushuaia.com/wp-content/uploads/2021/07/PDF-UNIFICADO-ESP-11.03.24.pdf"
        }
       ]
      },
      {
       "id": "ushuaia-5",
       "clue": "Martial Glacier sits above ____ and is associated with mountain views over the city and Beagle Channel.",
       "fact": "Martial Glacier sits above Ushuaia and is associated with mountain views over the city and Beagle Channel.",
       "sources": [
        {
         "title": "Martial Glacier",
         "publisher": "Municipality of Ushuaia Tourism",
         "url": "https://turismoushuaia.com/actividad/glaciar-martial/"
        }
       ]
      }
     ]
    },
    {
     "id": "el-calafate",
     "name": "El Calafate",
     "region": "Santa Cruz",
     "lat": -50.3381,
     "lng": -72.2648,
     "emoji": "🧊",
     "suspect": {
      "name": "Eva Errázuriz",
      "alias": "La Esmeralda",
      "emoji": "🥽"
     },
     "facts": [
      {
       "id": "el-calafate-1",
       "clue": "Perito Moreno is one of the glaciers in Los Glaciares National Park, a UNESCO World Heritage site.",
       "fact": "Perito Moreno is one of the glaciers in Los Glaciares National Park, a UNESCO World Heritage site.",
       "sources": [
        {
         "title": "Los Glaciares National Park activities",
         "publisher": "Argentina National Parks Administration",
         "url": "https://www.argentina.gob.ar/parquesnacionales/patagonia-austral/parque-nacional-los-glaciares/actividades"
        }
       ]
      },
      {
       "id": "el-calafate-3",
       "clue": "Lago Argentino is the large lake associated with glacier routes near ____.",
       "fact": "Lago Argentino is the large lake associated with glacier routes near El Calafate.",
       "sources": [
        {
         "title": "Los Glaciares National Park activities",
         "publisher": "Argentina National Parks Administration",
         "url": "https://www.argentina.gob.ar/parquesnacionales/patagonia-austral/parque-nacional-los-glaciares/actividades"
        },
        {
         "title": "Los Glaciares National Park concessionaires and boat departures",
         "publisher": "Argentina National Parks Administration",
         "url": "https://www.argentina.gob.ar/parquesnacionales/patagonia-austral/parque-nacional-los-glaciares/concesionarios"
        }
       ]
      },
      {
       "id": "el-calafate-4",
       "clue": "____ is a gateway for visits to Lago Argentino and the glaciers of Los Glaciares National Park.",
       "fact": "El Calafate is a gateway for visits to Lago Argentino and the glaciers of Los Glaciares National Park.",
       "sources": [
        {
         "title": "Los Glaciares National Park concessionaires and boat departures",
         "publisher": "Argentina National Parks Administration",
         "url": "https://www.argentina.gob.ar/parquesnacionales/patagonia-austral/parque-nacional-los-glaciares/concesionarios"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "northwest-arkansas-carmen",
   "title": "Where in Northwest Arkansas is Carmen Sandiego?",
   "places": [
    {
     "id": "nwa-bentonville",
     "name": "Bentonville",
     "region": "Benton County",
     "lat": 36.3729,
     "lng": -94.2088,
     "emoji": "🎨",
     "suspect": {
      "name": "Vera Vellum",
      "alias": "The Redactor",
      "emoji": "🎨"
     },
     "facts": [
      {
       "id": "nwa-bentonville-1",
       "clue": "Moshe Safdie designed Crystal Bridges Museum of American Art.",
       "fact": "Moshe Safdie designed Crystal Bridges Museum of American Art.",
       "sources": [
        {
         "title": "Architecture",
         "publisher": "Crystal Bridges Museum of American Art",
         "url": "https://crystalbridges.org/architecture"
        },
        {
         "title": "About the Momentary",
         "publisher": "The Momentary",
         "url": "https://themomentary.org/about/"
        },
        {
         "title": "Compton Gardens & Arboretum",
         "publisher": "Peel Compton Foundation",
         "url": "https://peelcompton.org/compton-gardens-arboretum/visit-us/"
        },
        {
         "title": "Walmart Museum history mission (2022 announcement)",
         "publisher": "Walmart",
         "url": "https://corporate.walmart.com/news/2022/10/07/the-walmart-museum-undergoes-renovation-moves-to-temporary-new-space"
        }
       ]
      },
      {
       "id": "nwa-bentonville-2",
       "clue": "The Momentary occupies a former cheese factory.",
       "fact": "The Momentary occupies a former cheese factory.",
       "sources": [
        {
         "title": "About the Momentary",
         "publisher": "The Momentary",
         "url": "https://themomentary.org/about/"
        }
       ]
      },
      {
       "id": "nwa-bentonville-3",
       "clue": "Compton Gardens & Arboretum is a ____ site operated by the Peel Compton Foundation.",
       "fact": "Compton Gardens & Arboretum is a Bentonville site operated by the Peel Compton Foundation.",
       "sources": [
        {
         "title": "Compton Gardens & Arboretum",
         "publisher": "Peel Compton Foundation",
         "url": "https://peelcompton.org/compton-gardens-arboretum/visit-us/"
        }
       ]
      }
     ]
    },
    {
     "id": "nwa-rogers",
     "name": "Rogers",
     "region": "Benton County",
     "lat": 36.332,
     "lng": -94.1185,
     "emoji": "🚂",
     "suspect": {
      "name": "Dexter Switch",
      "alias": "The Sidetrack",
      "emoji": "🚂"
     },
     "facts": [
      {
       "id": "nwa-rogers-1",
       "clue": "Daisy relocated manufacturing from Plymouth, Michigan, to ____ in 1958.",
       "fact": "Daisy relocated manufacturing from Plymouth, Michigan, to Rogers in 1958.",
       "sources": [
        {
         "title": "The Daisy Story",
         "publisher": "The Rogers Daisy Airgun Museum",
         "url": "https://daisymuseum.com/history/"
        }
       ]
      },
      {
       "id": "nwa-rogers-2",
       "clue": "A paved trail in ____ connects The Railyard Bike Park to Lake Atalanta Park.",
       "fact": "A paved trail in Rogers connects The Railyard Bike Park to Lake Atalanta Park.",
       "sources": [
        {
         "title": "Rogers’ Premier Bike Park — The Railyard",
         "publisher": "Destination Rogers",
         "url": "https://www.destinationrogers.com/uncategorized/rogers-premier-bike-park-railyard/"
        },
        {
         "title": "Railyard Park",
         "publisher": "Destination Rogers",
         "url": "https://www.destinationrogers.com/listings/railyard-park/907/"
        }
       ]
      }
     ]
    },
    {
     "id": "nwa-springdale",
     "name": "Springdale",
     "region": "Washington County",
     "lat": 36.1867,
     "lng": -94.1288,
     "emoji": "📚",
     "suspect": {
      "name": "Nell Carbon",
      "alias": "The Duplicate",
      "emoji": "📚"
     },
     "facts": [
      {
       "id": "nwa-springdale-1",
       "clue": "The Shiloh Museum’s name honors the community that preceded modern ____.",
       "fact": "The Shiloh Museum’s name honors the community that preceded modern Springdale.",
       "sources": [
        {
         "title": "History of the Museum",
         "publisher": "Shiloh Museum of Ozark History",
         "url": "https://shilohmuseum.org/history-of-the-museum/"
        }
       ]
      },
      {
       "id": "nwa-springdale-2",
       "clue": "The Arkansas & Missouri Railroad operates passenger excursions from ____.",
       "fact": "The Arkansas & Missouri Railroad operates passenger excursions from Springdale.",
       "sources": [
        {
         "title": "Railroad History",
         "publisher": "Arkansas & Missouri Railroad",
         "url": "https://www.amrailroad.com/about/railroad-history"
        }
       ]
      },
      {
       "id": "nwa-springdale-3",
       "clue": "The Northwest Arkansas Naturals play at Arvest Ballpark in ____.",
       "fact": "The Northwest Arkansas Naturals play at Arvest Ballpark in Springdale.",
       "sources": [
        {
         "title": "Arvest Ballpark Guide",
         "publisher": "Northwest Arkansas Naturals / MiLB",
         "url": "https://www.milb.com/northwest-arkansas/ballpark/ballpark-guide"
        }
       ]
      }
     ]
    },
    {
     "id": "nwa-fayetteville",
     "name": "Fayetteville",
     "region": "Washington County",
     "lat": 36.0626,
     "lng": -94.1574,
     "emoji": "🎓",
     "suspect": {
      "name": "Ada Margin",
      "alias": "The Footnote",
      "emoji": "🎓"
     },
     "facts": [
      {
       "id": "nwa-fayetteville-1",
       "clue": "Old Main dates to 1875; Senior Walk includes the names of the first graduating class of 1876.",
       "fact": "Old Main dates to 1875; Senior Walk includes the names of the first graduating class of 1876.",
       "sources": [
        {
         "title": "Visit & Explore",
         "publisher": "University of Arkansas",
         "url": "https://www.uark.edu/about/explore.php"
        }
       ]
      },
      {
       "id": "nwa-fayetteville-3",
       "clue": "The University of Arkansas's Chi Omega Greek Theatre hosts concerts and rallies.",
       "fact": "The University of Arkansas's Chi Omega Greek Theatre hosts concerts and rallies.",
       "sources": [
        {
         "title": "Visit & Explore",
         "publisher": "University of Arkansas",
         "url": "https://www.uark.edu/about/explore.php"
        }
       ]
      }
     ]
    },
    {
     "id": "nwa-siloam",
     "name": "Siloam Springs",
     "region": "Benton County",
     "lat": 36.1881,
     "lng": -94.5405,
     "emoji": "💧",
     "suspect": {
      "name": "Milo Ripple",
      "alias": "The Watermark",
      "emoji": "💧"
     },
     "facts": [
      {
       "id": "nwa-siloam-1",
       "clue": "Sager Creek flows through downtown ____.",
       "fact": "Sager Creek flows through downtown Siloam Springs.",
       "sources": [
        {
         "title": "History of Siloam Springs",
         "publisher": "City of Siloam Springs",
         "url": "https://www.siloamsprings.gov/211/History"
        },
        {
         "title": "Play in Siloam Springs",
         "publisher": "Discover Siloam Springs",
         "url": "https://discoversiloam.com/play/"
        }
       ]
      },
      {
       "id": "nwa-siloam-2",
       "clue": "____ Kayak Park is on the Illinois River.",
       "fact": "Siloam Springs Kayak Park is on the Illinois River.",
       "sources": [
        {
         "title": "Play in Siloam Springs",
         "publisher": "Discover Siloam Springs",
         "url": "https://discoversiloam.com/play/"
        },
        {
         "title": "History of Siloam Springs",
         "publisher": "City of Siloam Springs",
         "url": "https://www.siloamsprings.gov/211/History"
        }
       ]
      },
      {
       "id": "nwa-siloam-3",
       "clue": "The ____ Museum focuses on the area’s local heritage.",
       "fact": "The Siloam Springs Museum focuses on the area’s local heritage.",
       "sources": [
        {
         "title": "Play in Siloam Springs",
         "publisher": "Discover Siloam Springs",
         "url": "https://discoversiloam.com/play/"
        }
       ]
      }
     ]
    },
    {
     "id": "nwa-bella-vista",
     "name": "Bella Vista",
     "region": "Benton County",
     "lat": 36.468,
     "lng": -94.254,
     "emoji": "🌲",
     "suspect": {
      "name": "Cora Canopy",
      "alias": "The Silhouette",
      "emoji": "🌲"
     },
     "facts": [
      {
       "id": "nwa-bella-vista-1",
       "clue": "Cooper Chapel in ____ combines steel arches with glass.",
       "fact": "Cooper Chapel in Bella Vista combines steel arches with glass.",
       "sources": [
        {
         "title": "The Chapel",
         "publisher": "Mildred B. Cooper Memorial Chapel",
         "url": "https://www.cooperchapel.com/chapel"
        },
        {
         "title": "Architecture",
         "publisher": "Mildred B. Cooper Memorial Chapel",
         "url": "https://www.cooperchapel.com/architecture"
        }
       ]
      },
      {
       "id": "nwa-bella-vista-2",
       "clue": "____’s museum traces the community’s resort era and later village development.",
       "fact": "Bella Vista’s museum traces the community’s resort era and later village development.",
       "sources": [
        {
         "title": "Bella Vista Historical Museum",
         "publisher": "Discover Bella Vista",
         "url": "https://www.discoverbellavistaar.com/attractions/bella-vista-museum"
        }
       ]
      },
      {
       "id": "nwa-bella-vista-3",
       "clue": "Blowing Springs Park combines camping and trails in ____.",
       "fact": "Blowing Springs Park combines camping and trails in Bella Vista.",
       "sources": [
        {
         "title": "Bella Vista visitor FAQ",
         "publisher": "Discover Bella Vista",
         "url": "https://www.discoverbellavistaar.com/faq"
        }
       ]
      }
     ]
    },
    {
     "id": "nwa-pea-ridge",
     "name": "Pea Ridge National Military Park",
     "region": "Benton County",
     "lat": 36.453,
     "lng": -94.034,
     "emoji": "🗂️",
     "suspect": {
      "name": "Ellis Folio",
      "alias": "The Misprint",
      "emoji": "🗂️"
     },
     "facts": [
      {
       "id": "nwa-pea-ridge-1",
       "clue": "Elkhorn Tavern was reconstructed using historical photographs and retains its original south fireplace and foundations.",
       "fact": "Elkhorn Tavern was reconstructed using historical photographs and retains its original south fireplace and foundations.",
       "sources": [
        {
         "title": "Stop 8: Elkhorn Tavern",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/peri/planyourvisit/stop-7-elkhorn-tavern.htm"
        }
       ]
      },
      {
       "id": "nwa-pea-ridge-2",
       "clue": "East Overlook is a named tour stop at ____.",
       "fact": "East Overlook is a named tour stop at Pea Ridge National Military Park.",
       "sources": [
        {
         "title": "Stop 7: East Overlook — Day 2",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/peri/planyourvisit/stop-7-east-overlook-day-2.htm"
        }
       ]
      },
      {
       "id": "nwa-pea-ridge-3",
       "clue": "The Williams Hollow hiking loop returns to Elkhorn Tavern.",
       "fact": "The Williams Hollow hiking loop at Pea Ridge returns to Elkhorn Tavern.",
       "sources": [
        {
         "title": "Williams Hollow Loop Hike",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/thingstodo/williams-hollow-loop-hike.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "nwa-eureka",
     "name": "Eureka Springs",
     "region": "Carroll County",
     "lat": 36.4012,
     "lng": -93.7379,
     "emoji": "🔎",
     "suspect": {
      "name": "June Facet",
      "alias": "The Reflection",
      "emoji": "🔎"
     },
     "facts": [
      {
       "id": "nwa-eureka-1",
       "clue": "E. Fay Jones designed Thorncrown Chapel near ____.",
       "fact": "E. Fay Jones designed Thorncrown Chapel near Eureka Springs.",
       "sources": [
        {
         "title": "Thorncrown Architecture",
         "publisher": "Thorncrown Chapel",
         "url": "https://www.thorncrown.com/architecture"
        },
        {
         "title": "Architecture",
         "publisher": "Mildred B. Cooper Memorial Chapel",
         "url": "https://www.cooperchapel.com/architecture"
        },
        {
         "title": "Eureka Springs Photo Landmarks",
         "publisher": "Visit Eureka Springs",
         "url": "https://www.visiteurekasprings.com/13-must-post-instagrammable-spots-in-eureka-springs/"
        },
        {
         "title": "Visit & Explore",
         "publisher": "University of Arkansas",
         "url": "https://www.uark.edu/about/explore.php"
        }
       ]
      },
      {
       "id": "nwa-eureka-2",
       "clue": "Basin Spring Park is a downtown ____ landmark.",
       "fact": "Basin Spring Park is a downtown Eureka Springs landmark.",
       "sources": [
        {
         "title": "Eureka Springs Photo Landmarks",
         "publisher": "Visit Eureka Springs",
         "url": "https://www.visiteurekasprings.com/13-must-post-instagrammable-spots-in-eureka-springs/"
        }
       ]
      },
      {
       "id": "nwa-eureka-3",
       "clue": "Lake Leatherwood City Park is one of ____’ outdoor destinations.",
       "fact": "Lake Leatherwood City Park is one of Eureka Springs’ outdoor destinations.",
       "sources": [
        {
         "title": "Eureka Springs Photo Landmarks",
         "publisher": "Visit Eureka Springs",
         "url": "https://www.visiteurekasprings.com/13-must-post-instagrammable-spots-in-eureka-springs/"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "nwa-mountain-biking-carmen",
   "title": "Where on the NWA Trails is Carmen Sandiego?",
   "places": [
    {
     "id": "mtb-coler",
     "name": "Coler Mountain Bike Preserve",
     "region": "Bentonville",
     "lat": 36.384,
     "lng": -94.239,
     "emoji": "☕",
     "suspect": {
      "name": "Piper Spoke",
      "alias": "The Freewheel",
      "emoji": "☕"
     },
     "facts": [
      {
       "id": "mtb-coler-1",
       "clue": "Airship at ____ is an open-air cafe.",
       "fact": "Airship at Coler is an open-air cafe within the preserve.",
       "sources": [
        {
         "title": "Visit Coler",
         "publisher": "Peel Compton Foundation",
         "url": "https://peelcompton.org/coler-mountain-bike-preserve/visit-us/"
        }
       ]
      },
      {
       "id": "mtb-coler-2",
       "clue": "Applegate Trail is the paved corridor through ____.",
       "fact": "Applegate Trail is the paved corridor through Coler.",
       "sources": [
        {
         "title": "Visit Coler",
         "publisher": "Peel Compton Foundation",
         "url": "https://peelcompton.org/coler-mountain-bike-preserve/visit-us/"
        }
       ]
      }
     ]
    },
    {
     "id": "mtb-slaughter",
     "name": "Slaughter Pen",
     "region": "Bentonville",
     "lat": 36.396,
     "lng": -94.206,
     "emoji": "🚵",
     "suspect": {
      "name": "Rory Ratchet",
      "alias": "The False Gear",
      "emoji": "🚵"
     },
     "facts": [
      {
       "id": "mtb-slaughter-1",
       "clue": "All-American is part of Bentonville’s ____ trail network.",
       "fact": "All-American is part of Bentonville’s Slaughter Pen trail network.",
       "sources": [
        {
         "title": "The Unique Experience of Bentonville Trails",
         "publisher": "Visit Bentonville",
         "url": "https://www.visitbentonville.com/blog/stories/post/the-unique-experience-of-bentonville-trails/"
        }
       ]
      },
      {
       "id": "mtb-slaughter-2",
       "clue": "Bentonville’s July 2020 ____ map includes Blackbird, Medusa, Warthog, and Ozone.",
       "fact": "Bentonville’s July 2020 Slaughter Pen map includes Blackbird, Medusa, Warthog, and Ozone.",
       "sources": [
        {
         "title": "Slaughter Pen trail map — names only, July 2020",
         "publisher": "City of Bentonville",
         "url": "https://www.bentonville.ar.gov/DocumentCenter/View/6103/SLAUGHTER-PEN_Update_7-22-2020"
        }
       ]
      }
     ]
    },
    {
     "id": "mtb-back40",
     "name": "The Back 40",
     "region": "Bella Vista",
     "lat": 36.479,
     "lng": -94.214,
     "emoji": "🪨",
     "suspect": {
      "name": "Gwen Gravel",
      "alias": "The Switchback",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "mtb-back40-1",
       "clue": "The Ledges is a technical trail within ____ system.",
       "fact": "The Ledges is a technical trail within the Back 40 system.",
       "sources": [
        {
         "title": "Back 40 Trail Maps and Stats",
         "publisher": "Discover Bella Vista",
         "url": "https://www.discoverbellavistaar.com/post/back-40-trail-maps-and-stats"
        }
       ]
      },
      {
       "id": "mtb-back40-2",
       "clue": "In ____ trail system, Metfield Skills Park sits along the Rago trail.",
       "fact": "In the Back 40 trail system, Metfield Skills Park sits along the Rago trail.",
       "sources": [
        {
         "title": "Back 40 Trail Maps and Stats",
         "publisher": "Discover Bella Vista",
         "url": "https://www.discoverbellavistaar.com/post/back-40-trail-maps-and-stats"
        }
       ]
      },
      {
       "id": "mtb-back40-3",
       "clue": "Mulligan connects portions of ____ system, including ____ Loop and Rago.",
       "fact": "Mulligan connects portions of the Back 40 system, including the Back 40 Loop and Rago.",
       "sources": [
        {
         "title": "Back 40 Trail Maps and Stats",
         "publisher": "Discover Bella Vista",
         "url": "https://www.discoverbellavistaar.com/post/back-40-trail-maps-and-stats"
        }
       ]
      }
     ]
    },
    {
     "id": "mtb-little-sugar",
     "name": "Little Sugar",
     "region": "Bella Vista",
     "lat": 36.468,
     "lng": -94.279,
     "emoji": "🛞",
     "suspect": {
      "name": "Tessa Tread",
      "alias": "The Detour",
      "emoji": "🛞"
     },
     "facts": [
      {
       "id": "mtb-little-sugar-1",
       "clue": "The ____ building account discusses adapting Tweety Bird Loop for hand cyclists.",
       "fact": "The Little Sugar building account discusses adapting Tweety Bird Loop for hand cyclists.",
       "sources": [
        {
         "title": "The Building of Little Sugar",
         "publisher": "Discover Bella Vista",
         "url": "https://www.discoverbellavistaar.com/post/the-building-of-little-sugar"
        }
       ]
      },
      {
       "id": "mtb-little-sugar-2",
       "clue": "Tunnel Vision is among the trails discussed in the ____ building account.",
       "fact": "Tunnel Vision is among the trails discussed in the Little Sugar building account.",
       "sources": [
        {
         "title": "The Building of Little Sugar",
         "publisher": "Discover Bella Vista",
         "url": "https://www.discoverbellavistaar.com/post/the-building-of-little-sugar"
        }
       ]
      },
      {
       "id": "mtb-little-sugar-3",
       "clue": "Bamboozled is a named trail in the ____ network.",
       "fact": "Bamboozled is a named trail in the Little Sugar network.",
       "sources": [
        {
         "title": "The Building of Little Sugar",
         "publisher": "Discover Bella Vista",
         "url": "https://www.discoverbellavistaar.com/post/the-building-of-little-sugar"
        }
       ]
      }
     ]
    },
    {
     "id": "mtb-railyard",
     "name": "The Railyard Bike Park",
     "region": "Rogers",
     "lat": 36.328,
     "lng": -94.115,
     "emoji": "⚙️",
     "suspect": {
      "name": "Benny Bearing",
      "alias": "The Loose Bolt",
      "emoji": "⚙️"
     },
     "facts": [
      {
       "id": "mtb-railyard-1",
       "clue": "____ has a paved connection to Lake Atalanta Park.",
       "fact": "The Railyard Bike Park has a paved connection to Lake Atalanta Park.",
       "sources": [
        {
         "title": "Rogers’ Premier Bike Park — The Railyard",
         "publisher": "Destination Rogers",
         "url": "https://www.destinationrogers.com/uncategorized/rogers-premier-bike-park-railyard/"
        }
       ]
      },
      {
       "id": "mtb-railyard-2",
       "clue": "____ is a Rogers bike park with off-road riding features.",
       "fact": "The Railyard is a Rogers bike park with off-road riding features.",
       "sources": [
        {
         "title": "Rogers’ Premier Bike Park — The Railyard",
         "publisher": "Destination Rogers",
         "url": "https://www.destinationrogers.com/uncategorized/rogers-premier-bike-park-railyard/"
        }
       ]
      },
      {
       "id": "mtb-railyard-3",
       "clue": "____ is part of Rogers’ park facilities.",
       "fact": "The Railyard Bike Park is part of Rogers’ park facilities.",
       "sources": [
        {
         "title": "Rogers’ Premier Bike Park — The Railyard",
         "publisher": "Destination Rogers",
         "url": "https://www.destinationrogers.com/uncategorized/rogers-premier-bike-park-railyard/"
        }
       ]
      }
     ]
    },
    {
     "id": "mtb-fitzgerald",
     "name": "Fitzgerald Mountain",
     "region": "Springdale",
     "lat": 36.208,
     "lng": -94.104,
     "emoji": "🧱",
     "suspect": {
      "name": "Frankie Flint",
      "alias": "The Stone Copy",
      "emoji": "🧱"
     },
     "facts": [
      {
       "id": "mtb-fitzgerald-1",
       "clue": "Best Trail Ever is a named trail at ____.",
       "fact": "Best Trail Ever is a named trail at Fitzgerald Mountain.",
       "sources": [
        {
         "title": "Fitzgerald Mountain",
         "publisher": "Explore Springdale",
         "url": "https://explorespringdale.com/fitzgerald-mountain/"
        }
       ]
      },
      {
       "id": "mtb-fitzgerald-2",
       "clue": "Stage Coach is among the trails named by Explore Springdale at ____.",
       "fact": "Stage Coach is among the trails named by Explore Springdale at Fitzgerald Mountain.",
       "sources": [
        {
         "title": "Fitzgerald Mountain",
         "publisher": "Explore Springdale",
         "url": "https://explorespringdale.com/fitzgerald-mountain/"
        }
       ]
      },
      {
       "id": "mtb-fitzgerald-3",
       "clue": "Explore Springdale lists Coyote Cave as a ____ trail.",
       "fact": "Explore Springdale lists Coyote Cave as a Fitzgerald Mountain trail.",
       "sources": [
        {
         "title": "Fitzgerald Mountain",
         "publisher": "Explore Springdale",
         "url": "https://explorespringdale.com/fitzgerald-mountain/"
        }
       ]
      }
     ]
    },
    {
     "id": "mtb-kessler",
     "name": "Kessler Mountain",
     "region": "Fayetteville",
     "lat": 36.019,
     "lng": -94.216,
     "emoji": "🍃",
     "suspect": {
      "name": "Sylvie Switch",
      "alias": "The Vanishing Line",
      "emoji": "🍃"
     },
     "facts": [
      {
       "id": "mtb-kessler-1",
       "clue": "Experience Fayetteville describes Spellbound on ____ as a technical trail with rock formations.",
       "fact": "Experience Fayetteville describes Spellbound on Kessler Mountain as a technical trail with rock formations.",
       "sources": [
        {
         "title": "Mythical Creatures — Kessler Mountain",
         "publisher": "Experience Fayetteville",
         "url": "https://www.experiencefayetteville.com/mountain-biking/mythical-creatures"
        }
       ]
      },
      {
       "id": "mtb-kessler-2",
       "clue": "Western Myth is one of ____’s named trails.",
       "fact": "Western Myth is one of Kessler Mountain’s named trails.",
       "sources": [
        {
         "title": "Mythical Creatures — Kessler Mountain",
         "publisher": "Experience Fayetteville",
         "url": "https://www.experiencefayetteville.com/mountain-biking/mythical-creatures"
        }
       ]
      },
      {
       "id": "mtb-kessler-3",
       "clue": "Flight Training is an advanced downhill trail on ____.",
       "fact": "Flight Training is an advanced downhill trail on Kessler Mountain.",
       "sources": [
        {
         "title": "Down Mountains — Centennial and Kessler",
         "publisher": "Experience Fayetteville",
         "url": "https://www.experiencefayetteville.com/mountain-biking/down-mountains"
        }
       ]
      }
     ]
    },
    {
     "id": "mtb-centennial",
     "name": "Centennial Park",
     "region": "Fayetteville",
     "lat": 36.05,
     "lng": -94.207,
     "emoji": "🏁",
     "suspect": {
      "name": "Casey Cadence",
      "alias": "The False Finish",
      "emoji": "🏁"
     },
     "facts": [
      {
       "id": "mtb-centennial-1",
       "clue": "World Cup is a cross-country mountain-bike racecourse at ____.",
       "fact": "World Cup is a cross-country mountain-bike racecourse at Centennial Park.",
       "sources": [
        {
         "title": "Chasing Rainbows — Centennial Park",
         "publisher": "Experience Fayetteville",
         "url": "https://www.experiencefayetteville.com/mountain-biking/chasing-rainbows"
        }
       ]
      },
      {
       "id": "mtb-centennial-2",
       "clue": "Junk Drawer at ____ includes a feature incorporating an old pickup truck.",
       "fact": "Junk Drawer at Centennial Park includes a feature incorporating an old pickup truck.",
       "sources": [
        {
         "title": "Chasing Rainbows — Centennial Park",
         "publisher": "Experience Fayetteville",
         "url": "https://www.experiencefayetteville.com/mountain-biking/chasing-rainbows"
        }
       ]
      },
      {
       "id": "mtb-centennial-3",
       "clue": "Learners Permit is included in Experience Fayetteville’s ____ trail description.",
       "fact": "Learners Permit is included in Experience Fayetteville’s Centennial Park trail description.",
       "sources": [
        {
         "title": "Chasing Rainbows — Centennial Park",
         "publisher": "Experience Fayetteville",
         "url": "https://www.experiencefayetteville.com/mountain-biking/chasing-rainbows"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "arkansas-state-parks-carmen",
   "title": "Where in Arkansas State Parks is Carmen Sandiego?",
   "places": [
    {
     "id": "arkansas-state-parks-petit-jean",
     "name": "Petit Jean State Park",
     "region": "Central Arkansas",
     "lat": 35.128,
     "lng": -92.923,
     "emoji": "🏞️",
     "suspect": {
      "name": "Nora Notch",
      "alias": "The Splicer",
      "emoji": "🏞️"
     },
     "facts": [
      {
       "id": "arkansas-state-parks-petit-jean-1",
       "clue": "Mather Lodge is a CCC-built lodge overlooking Cedar Creek Canyon. Cedar Falls is a waterfall; a CCC rock dam created Lake Bailey.",
       "fact": "Mather Lodge is a CCC-built lodge overlooking Cedar Creek Canyon. Cedar Falls is a waterfall; a CCC rock dam created Lake Bailey.",
       "sources": [
        {
         "title": "Petit Jean State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/explore/parks/petit-jean-state-park"
        }
       ]
      },
      {
       "id": "arkansas-state-parks-petit-jean-2",
       "clue": "The CCC used logs and stone for facilities at ____, including Mather Lodge.",
       "fact": "The CCC used logs and stone for facilities at Petit Jean, including Mather Lodge.",
       "sources": [
        {
         "title": "Petit Jean State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/explore/parks/petit-jean-state-park"
        }
       ]
      }
     ]
    },
    {
     "id": "arkansas-state-parks-mount-magazine",
     "name": "Mount Magazine State Park",
     "region": "Western Arkansas",
     "lat": 35.168,
     "lng": -93.644,
     "emoji": "⛰️",
     "suspect": {
      "name": "Felix Contour",
      "alias": "The Leveler",
      "emoji": "⛰️"
     },
     "facts": [
      {
       "id": "arkansas-state-parks-mount-magazine-1",
       "clue": "____ reaches 2,753 feet above sea level, Arkansas’s highest point.",
       "fact": "Mount Magazine reaches 2,753 feet above sea level, Arkansas’s highest point.",
       "sources": [
        {
         "title": "Mount Magazine State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/explore/parks/mount-magazine-state-park"
        }
       ]
      },
      {
       "id": "arkansas-state-parks-mount-magazine-3",
       "clue": "The lodge at ____ has views of the Petit Jean River Valley and Blue Mountain Lake.",
       "fact": "The lodge at Mount Magazine has views of the Petit Jean River Valley and Blue Mountain Lake.",
       "sources": [
        {
         "title": "Mount Magazine State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/explore/parks/mount-magazine-state-park"
        }
       ]
      }
     ]
    },
    {
     "id": "arkansas-state-parks-crater-of-diamonds",
     "name": "Crater of Diamonds State Park",
     "region": "Southwestern Arkansas",
     "lat": 34.033,
     "lng": -93.671,
     "emoji": "💎",
     "suspect": {
      "name": "Iris Inclusion",
      "alias": "The Polisher",
      "emoji": "💎"
     },
     "facts": [
      {
       "id": "arkansas-state-parks-crater-of-diamonds-1",
       "clue": "The diamond-bearing Prairie Creek site near Murfreesboro is a volcanic pipe. The site became ____ in 1972.",
       "fact": "The diamond-bearing Prairie Creek site near Murfreesboro is a volcanic pipe. The site became Crater of Diamonds State Park in 1972.",
       "sources": [
        {
         "title": "Diamond (Industrial): Arkansas deposits",
         "publisher": "Arkansas Office of the State Geologist",
         "url": "https://geology.arkansas.gov/minerals/industrial/diamond-industrial.html"
        }
       ]
      },
      {
       "id": "arkansas-state-parks-crater-of-diamonds-2",
       "clue": "The State Geologist records diamond discovery here in 1906 and acquisition as a state park in 1972.",
       "fact": "The State Geologist records diamond discovery here in 1906 and acquisition as a state park in 1972.",
       "sources": [
        {
         "title": "Diamond (Industrial): Arkansas deposits",
         "publisher": "Arkansas Office of the State Geologist",
         "url": "https://geology.arkansas.gov/minerals/industrial/diamond-industrial.html"
        }
       ]
      }
     ]
    },
    {
     "id": "arkansas-state-parks-historic-washington",
     "name": "Historic Washington State Park",
     "region": "Southwestern Arkansas",
     "lat": 33.774,
     "lng": -93.684,
     "emoji": "🏛️",
     "suspect": {
      "name": "Tess Typeset",
      "alias": "The Typo",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "arkansas-state-parks-historic-washington-1",
       "clue": "____’s 1874 Courthouse serves as the park visitor center.",
       "fact": "Historic Washington’s 1874 Courthouse serves as the park visitor center.",
       "sources": [
        {
         "title": "Historic Washington State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/explore/parks/historic-washington-state-park"
        }
       ]
      },
      {
       "id": "arkansas-state-parks-historic-washington-2",
       "clue": "____ interprets printing and blacksmithing through a Print Museum and Blacksmith Shop.",
       "fact": "Historic Washington interprets printing and blacksmithing through a Print Museum and Blacksmith Shop.",
       "sources": [
        {
         "title": "Historic Washington State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/explore/parks/historic-washington-state-park"
        }
       ]
      }
     ]
    },
    {
     "id": "arkansas-state-parks-lake-chicot",
     "name": "Lake Chicot State Park",
     "region": "Southeastern Arkansas",
     "lat": 33.35,
     "lng": -91.28,
     "emoji": "🌊",
     "suspect": {
      "name": "Basil Bend",
      "alias": "The Cutoff",
      "emoji": "🌊"
     },
     "facts": [
      {
       "id": "arkansas-state-parks-lake-chicot-1",
       "clue": "____ is an oxbow lake. An oxbow forms when a river takes a shortcut and the old bend becomes a separate water body.",
       "fact": "Lake Chicot is an oxbow lake. An oxbow forms when a river takes a shortcut and the old bend becomes a separate water body.",
       "sources": [
        {
         "title": "Lake Chicot State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/explore/parks/lake-chicot-state-park"
        },
        {
         "title": "Oxbow Lakes",
         "publisher": "USGS EROS",
         "url": "https://eros.usgs.gov/earthshots/oxbow-lakes"
        }
       ]
      }
     ]
    },
    {
     "id": "arkansas-state-parks-jacksonport",
     "name": "Jacksonport State Park",
     "region": "Northeastern Arkansas",
     "lat": 35.641,
     "lng": -91.314,
     "emoji": "🚢",
     "suspect": {
      "name": "Calder Quay",
      "alias": "The Backdate",
      "emoji": "🚢"
     },
     "facts": [
      {
       "id": "arkansas-state-parks-jacksonport-1",
       "clue": "____ developed as a steamboat port at the meeting of the White and Black rivers.",
       "fact": "Jacksonport developed as a steamboat port at the meeting of the White and Black rivers.",
       "sources": [
        {
         "title": "Jacksonport State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/explore/parks/jacksonport-state-park"
        }
       ]
      },
      {
       "id": "arkansas-state-parks-jacksonport-2",
       "clue": "____ became the county seat in 1852. Its restored courthouse is now interpreted as a museum.",
       "fact": "Jacksonport became the county seat in 1852. Its restored courthouse is now interpreted as a museum.",
       "sources": [
        {
         "title": "Jacksonport State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/explore/parks/jacksonport-state-park"
        }
       ]
      }
     ]
    },
    {
     "id": "arkansas-state-parks-mammoth-spring",
     "name": "Mammoth Spring State Park",
     "region": "Northern Arkansas",
     "lat": 36.497,
     "lng": -91.535,
     "emoji": "💧",
     "suspect": {
      "name": "Willa Waters",
      "alias": "The Reverser",
      "emoji": "💧"
     },
     "facts": [
      {
       "id": "arkansas-state-parks-mammoth-spring-1",
       "clue": "____ preserves an 1886 Frisco train depot as well as remnants of a mill and hydroelectric plant.",
       "fact": "Mammoth Spring State Park preserves an 1886 Frisco train depot as well as remnants of a mill and hydroelectric plant.",
       "sources": [
        {
         "title": "Mammoth Spring State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/explore/parks/mammoth-spring-state-park"
        }
       ]
      },
      {
       "id": "arkansas-state-parks-mammoth-spring-2",
       "clue": "Water from ____ forms a lake and then flows south as a river.",
       "fact": "Water from Mammoth Spring forms a lake and then flows south as the Spring River.",
       "sources": [
        {
         "title": "Mammoth Spring State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/explore/parks/mammoth-spring-state-park"
        }
       ]
      }
     ]
    },
    {
     "id": "arkansas-state-parks-ozark-folk-center",
     "name": "Ozark Folk Center State Park",
     "region": "Mountain View, Arkansas",
     "lat": 35.881,
     "lng": -92.112,
     "emoji": "🎻",
     "suspect": {
      "name": "Penny Pattern",
      "alias": "The Refrain",
      "emoji": "🎻"
     },
     "facts": [
      {
       "id": "arkansas-state-parks-ozark-folk-center-1",
       "clue": "The ____’s Craft Village presents artisans demonstrating crafts. Its Heritage Herb Garden is a living classroom, and its theater presents music.",
       "fact": "The Ozark Folk Center’s Craft Village presents artisans demonstrating crafts. Its Heritage Herb Garden is a living classroom, and the Ozark Highlands Theater presents music.",
       "sources": [
        {
         "title": "Ozark Folk Center State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/parks/ozark-folk-center-state-park/music/about"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "route-66-carmen",
   "title": "Where on Route 66 is Carmen Sandiego?",
   "places": [
    {
     "id": "route-66-dwight",
     "name": "Dwight",
     "region": "Illinois",
     "lat": 41.095,
     "lng": -88.426,
     "emoji": "⛽",
     "suspect": {
      "name": "Vince Veneer",
      "alias": "The Facade",
      "emoji": "⛽"
     },
     "facts": [
      {
       "id": "route-66-dwight-1",
       "clue": "Ambler’s Texaco in ____ combined a house-like office with a canopy over fuel pumps. Its early-1940s service bay used concrete block.",
       "fact": "Ambler’s Texaco in Dwight combined a house-like office with a canopy over fuel pumps. Its early-1940s service bay used concrete block.",
       "sources": [
        {
         "title": "Ambler’s Texaco Gas Station",
         "publisher": "National Park Service",
         "url": "https://home.nps.gov/places/amblers-texaco-gas-station.htm"
        }
       ]
      },
      {
       "id": "route-66-dwight-2",
       "clue": "Ambler’s original office and canopy date to 1933; the concrete-block service bay was added in the early 1940s.",
       "fact": "Ambler’s original office and canopy date to 1933; the concrete-block service bay was added in the early 1940s.",
       "sources": [
        {
         "title": "Ambler’s Texaco Gas Station",
         "publisher": "National Park Service",
         "url": "https://home.nps.gov/places/amblers-texaco-gas-station.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "route-66-springfield",
     "name": "Springfield",
     "region": "Missouri",
     "lat": 37.209,
     "lng": -93.326,
     "emoji": "🪨",
     "suspect": {
      "name": "Opal Overlay",
      "alias": "The Veneer",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "route-66-springfield-1",
       "clue": "Rock Fountain Court was built in 1945 with nine freestanding cabins arranged around a semicircular court.",
       "fact": "Rock Fountain Court was built in 1945 with nine freestanding cabins arranged around a semicircular court.",
       "sources": [
        {
         "title": "Rock Fountain Court",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/places/rock-fountain-court.htm"
        }
       ]
      },
      {
       "id": "route-66-springfield-3",
       "clue": "NPS describes Rock Fountain Court as frame cabins with Ozark sandstone veneer.",
       "fact": "NPS describes Rock Fountain Court as frame cabins with Ozark sandstone veneer.",
       "sources": [
        {
         "title": "Rock Fountain Court",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/places/rock-fountain-court.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "route-66-brush-creek",
     "name": "Brush Creek Bridge",
     "region": "Kansas",
     "lat": 37.074,
     "lng": -94.742,
     "emoji": "🌉",
     "suspect": {
      "name": "Marsh Margin",
      "alias": "The Arch Rival",
      "emoji": "🌉"
     },
     "facts": [
      {
       "id": "route-66-brush-creek-1",
       "clue": "____ is a reinforced-concrete span with paired arches, associated with James Barney Marsh’s design.",
       "fact": "Brush Creek Bridge is a reinforced-concrete bridge with paired arches, associated with James Barney Marsh’s design.",
       "sources": [
        {
         "title": "Brush Creek Bridge",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/places/brush-creek-bridge.htm"
        }
       ]
      },
      {
       "id": "route-66-brush-creek-2",
       "clue": "Marsh patented his arch design in 1912. ____ was constructed in 1923.",
       "fact": "Marsh patented his bridge design in 1912. Brush Creek Bridge was constructed in 1923.",
       "sources": [
        {
         "title": "Brush Creek Bridge",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/places/brush-creek-bridge.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "route-66-arcadia",
     "name": "Arcadia",
     "region": "Oklahoma",
     "lat": 35.659,
     "lng": -97.326,
     "emoji": "🔴",
     "suspect": {
      "name": "Oakley Curve",
      "alias": "The Bender",
      "emoji": "🔴"
     },
     "facts": [
      {
       "id": "route-66-arcadia-1",
       "clue": "____’s Round Barn was completed in 1898. It served agricultural purposes and also hosted dances and community gatherings.",
       "fact": "Arcadia’s Round Barn was completed in 1898. It served agricultural purposes and also hosted dances and community gatherings.",
       "sources": [
        {
         "title": "Arcadia Round Barn",
         "publisher": "National Park Service",
         "url": "https://home.nps.gov/places/arcadia-round-barn.htm"
        }
       ]
      },
      {
       "id": "route-66-arcadia-2",
       "clue": "The Round Barn was completed in 1898. Route 66’s alignment through ____ dates to 1928.",
       "fact": "The Round Barn was completed in 1898. Route 66’s alignment through Arcadia dates to 1928.",
       "sources": [
        {
         "title": "Arcadia Round Barn",
         "publisher": "National Park Service",
         "url": "https://home.nps.gov/places/arcadia-round-barn.htm"
        }
       ]
      },
      {
       "id": "route-66-arcadia-3",
       "clue": "The barn’s curved rafters were made by soaking burr oak timbers and bending them into a mold.",
       "fact": "The barn’s curved rafters were made by soaking burr oak timbers and bending them into a mold.",
       "sources": [
        {
         "title": "Arcadia Round Barn",
         "publisher": "National Park Service",
         "url": "https://home.nps.gov/places/arcadia-round-barn.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "route-66-shamrock",
     "name": "Shamrock",
     "region": "Texas",
     "lat": 35.225,
     "lng": -100.249,
     "emoji": "🏮",
     "suspect": {
      "name": "Della Draft",
      "alias": "The Revision",
      "emoji": "🏮"
     },
     "facts": [
      {
       "id": "route-66-shamrock-1",
       "clue": "____’s 1936 Art Deco landmark combined Tower Station’s fuel service with the U-Drop Inn Cafe’s food service.",
       "fact": "Shamrock’s 1936 Art Deco landmark combined Tower Station’s fuel service with the U-Drop Inn Cafe’s food service.",
       "sources": [
        {
         "title": "Tower Station and U-Drop Inn Cafe",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/places/tower-station-and-u-drop-inn-cafe.htm"
        }
       ]
      },
      {
       "id": "route-66-shamrock-3",
       "clue": "The third space in the ____ landmark was intended for retail, then used for additional cafe seating.",
       "fact": "The third space in the Shamrock landmark was intended for retail, then used for additional cafe seating.",
       "sources": [
        {
         "title": "Tower Station and U-Drop Inn Cafe",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/places/tower-station-and-u-drop-inn-cafe.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "route-66-tucumcari",
     "name": "Tucumcari",
     "region": "New Mexico",
     "lat": 35.172,
     "lng": -103.718,
     "emoji": "🛎️",
     "suspect": {
      "name": "Lena Lantern",
      "alias": "The Glow",
      "emoji": "🛎️"
     },
     "facts": [
      {
       "id": "route-66-tucumcari-1",
       "clue": "NPS describes the Blue Swallow Motel’s L-shaped plan with garages between sleeping units.",
       "fact": "NPS describes the Blue Swallow Motel’s L-shaped plan with garages between sleeping units.",
       "sources": [
        {
         "title": "Blue Swallow Motel",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/places/blue-swallow-motel.htm"
        }
       ]
      },
      {
       "id": "route-66-tucumcari-2",
       "clue": "The Blue Swallow was listed in the National Register of Historic Places in 1993 and received an NPS restoration grant in 2007.",
       "fact": "The Blue Swallow was listed in the National Register of Historic Places in 1993 and received an NPS restoration grant in 2007.",
       "sources": [
        {
         "title": "Blue Swallow Motel",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/places/blue-swallow-motel.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "route-66-painted-desert",
     "name": "Painted Desert Inn",
     "region": "Arizona",
     "lat": 35.084,
     "lng": -109.79,
     "emoji": "🏜️",
     "suspect": {
      "name": "Stucco Scribe",
      "alias": "The Overcoat",
      "emoji": "🏜️"
     },
     "facts": [
      {
       "id": "route-66-painted-desert-1",
       "clue": "The CCC remodeled an existing stone ____, adding stucco and wooden roof beams called vigas.",
       "fact": "The CCC remodeled an existing stone Painted Desert Inn, adding stucco and wooden roof beams called vigas.",
       "sources": [
        {
         "title": "Civilian Conservation Corps at Petrified Forest",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/pefo/learn/historyculture/civilian-conservation-corps.htm"
        }
       ]
      },
      {
       "id": "route-66-painted-desert-2",
       "clue": "NPS purchased the ____ in 1936. CCC remodeling work took place from 1937 through 1940.",
       "fact": "NPS purchased the Painted Desert Inn in 1936. CCC remodeling work took place from 1937 through 1940.",
       "sources": [
        {
         "title": "Civilian Conservation Corps at Petrified Forest",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/pefo/learn/historyculture/civilian-conservation-corps.htm"
        }
       ]
      },
      {
       "id": "route-66-painted-desert-3",
       "clue": "CCC workers made punched-tin lanterns for the ____.",
       "fact": "CCC workers made punched-tin lanterns for the Painted Desert Inn.",
       "sources": [
        {
         "title": "Civilian Conservation Corps at Petrified Forest",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/pefo/learn/historyculture/civilian-conservation-corps.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "route-66-barstow",
     "name": "Barstow",
     "region": "California",
     "lat": 34.904,
     "lng": -117.024,
     "emoji": "🚂",
     "suspect": {
      "name": "Harper Handoff",
      "alias": "The Late Arrival",
      "emoji": "🚂"
     },
     "facts": [
      {
       "id": "route-66-barstow-1",
       "clue": "____’s Harvey House Railroad Depot, called Casa del Desierto, served railway travelers. Route 66’s 1926 alignment ran beside it.",
       "fact": "Barstow’s Harvey House Railroad Depot, called Casa del Desierto, served railway travelers. Route 66’s 1926 alignment ran beside it.",
       "sources": [
        {
         "title": "Harvey House Railroad Depot",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/places/harvey-house-railroad-depot.htm"
        },
        {
         "title": "Route 66 Overview",
         "publisher": "National Park Service",
         "url": "https://home.nps.gov/articles/route-66-overview.htm"
        }
       ]
      },
      {
       "id": "route-66-barstow-2",
       "clue": "The National Park Service dates the earlier ____ Harvey House fire to 1908 and describes replacement construction as 1910–1913.",
       "fact": "The National Park Service dates the earlier Barstow Harvey House fire to 1908 and describes replacement construction as 1910–1913.",
       "sources": [
        {
         "title": "Harvey House Railroad Depot",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/places/harvey-house-railroad-depot.htm"
        },
        {
         "title": "Route 66 Overview",
         "publisher": "National Park Service",
         "url": "https://home.nps.gov/articles/route-66-overview.htm"
        }
       ]
      },
      {
       "id": "route-66-barstow-3",
       "clue": "Harvey House operations used telegrams sent ahead from approaching trains so staff could prepare for arriving passengers.",
       "fact": "Harvey House operations used telegrams sent ahead from approaching trains so staff could prepare for arriving passengers.",
       "sources": [
        {
         "title": "Harvey House Railroad Depot",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/places/harvey-house-railroad-depot.htm"
        },
        {
         "title": "Route 66 Overview",
         "publisher": "National Park Service",
         "url": "https://home.nps.gov/articles/route-66-overview.htm"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "ozark-waterways-carmen",
   "title": "Where in the Ozark Waterways is Carmen Sandiego?",
   "places": [
    {
     "id": "ozark-waterways-buffalo",
     "name": "Buffalo National River",
     "region": "Arkansas",
     "lat": 35.985,
     "lng": -92.758,
     "emoji": "🛶",
     "suspect": {
      "name": "Mira Margin",
      "alias": "The Undertow",
      "emoji": "🛶"
     },
     "facts": [
      {
       "id": "ozark-waterways-buffalo-1",
       "clue": "The free-flowing ____ River begins in the Boston Mountains and joins the White River. Only part of its watershed is managed by the National Park Service.",
       "fact": "The free-flowing Buffalo River begins in the Boston Mountains and joins the White River. Only part of its watershed is managed by the National Park Service.",
       "sources": [
        {
         "title": "Buffalo National River: Learn About the Park",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/buff/learn/index.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "ozark-waterways-beaver",
     "name": "Beaver Lake",
     "region": "Arkansas",
     "lat": 36.421,
     "lng": -93.85,
     "emoji": "🏞️",
     "suspect": {
      "name": "Dax Draft",
      "alias": "The Impounder",
      "emoji": "🏞️"
     },
     "facts": [
      {
       "id": "ozark-waterways-beaver-1",
       "clue": "____ Dam impounds the White River. Its construction ran from 1960 through 1966.",
       "fact": "Beaver Dam impounds the White River. Its construction ran from 1960 through 1966.",
       "sources": [
        {
         "title": "White River dams: Table Rock Lake FAQs",
         "publisher": "US Army Corps of Engineers",
         "url": "https://www.swl.usace.army.mil/Missions/Recreation/Lakes/Table-Rock-Lake/FAQs/"
        }
       ]
      }
     ]
    },
    {
     "id": "ozark-waterways-bull-shoals",
     "name": "Bull Shoals Lake",
     "region": "Arkansas and Missouri",
     "lat": 36.365,
     "lng": -92.578,
     "emoji": "⚙️",
     "suspect": {
      "name": "Vera Valve",
      "alias": "The Spillover",
      "emoji": "⚙️"
     },
     "facts": [
      {
       "id": "ozark-waterways-bull-shoals-1",
       "clue": "____ is a White River reservoir project in Arkansas and Missouri, serving flood control and hydroelectric generation.",
       "fact": "Bull Shoals is a White River reservoir project in Arkansas and Missouri, serving flood control and hydroelectric generation.",
       "sources": [
        {
         "title": "Bull Shoals Lake master plan",
         "publisher": "US Army Corps of Engineers",
         "url": "https://www.swl.usace.army.mil/LinkClick.aspx?fileticket=rU9Qz5W47OM%3D&portalid=50&tabid=18088"
        }
       ]
      }
     ]
    },
    {
     "id": "ozark-waterways-norfork",
     "name": "Norfork Lake",
     "region": "Arkansas",
     "lat": 36.25,
     "lng": -92.24,
     "emoji": "🔎",
     "suspect": {
      "name": "Nell Notation",
      "alias": "The Splitter",
      "emoji": "🔎"
     },
     "facts": [
      {
       "id": "ozark-waterways-norfork-1",
       "clue": "____ Dam is on the North Fork River. Dam construction began in 1941 and finished in 1944.",
       "fact": "Norfork Dam is on the North Fork River. Dam construction began in 1941 and finished in 1944.",
       "sources": [
        {
         "title": "Norfork Lake: Dam and Lake",
         "publisher": "US Army Corps of Engineers",
         "url": "https://www.swl.usace.army.mil/Missions/Recreation/Lakes/Norfork-Lake/Dam-and-Lake/"
        }
       ]
      }
     ]
    },
    {
     "id": "ozark-waterways-mammoth",
     "name": "Mammoth Spring",
     "region": "Arkansas",
     "lat": 36.497,
     "lng": -91.535,
     "emoji": "💧",
     "suspect": {
      "name": "Wade Wells",
      "alias": "The Refill",
      "emoji": "💧"
     },
     "facts": [
      {
       "id": "ozark-waterways-mammoth-1",
       "clue": "____ feeds a lake and then the Spring River. The park’s Frisco train depot dates to 1886.",
       "fact": "Mammoth Spring feeds a lake and then the Spring River. The park’s Frisco train depot dates to 1886.",
       "sources": [
        {
         "title": "Mammoth Spring State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/explore/parks/mammoth-spring-state-park"
        }
       ]
      }
     ]
    },
    {
     "id": "ozark-waterways-greer",
     "name": "Greer Spring",
     "region": "Missouri",
     "lat": 36.793,
     "lng": -91.332,
     "emoji": "🌿",
     "suspect": {
      "name": "Reed Ripple",
      "alias": "The Connector",
      "emoji": "🌿"
     },
     "facts": [
      {
       "id": "ozark-waterways-greer-1",
       "clue": "____’s branch flows into the Eleven Point River in Missouri.",
       "fact": "Greer Spring’s branch flows into the Eleven Point River in Missouri.",
       "sources": [
        {
         "title": "Greer Spring Natural Area",
         "publisher": "Missouri Department of Conservation",
         "url": "https://mdc.mo.gov/discover-nature/places/natural-areas/greer-spring"
        }
       ]
      }
     ]
    },
    {
     "id": "ozark-waterways-big-spring",
     "name": "Big Spring",
     "region": "Missouri",
     "lat": 36.952,
     "lng": -90.995,
     "emoji": "🫧",
     "suspect": {
      "name": "Lena Ledger",
      "alias": "The Mean Streak",
      "emoji": "🫧"
     },
     "facts": [
      {
       "id": "ozark-waterways-big-spring-1",
       "clue": "____ contributes groundwater to the Current River. NPS describes dye-tracing evidence for connections through underground passages.",
       "fact": "Big Spring contributes groundwater to the Current River. NPS describes dye-tracing evidence for connections through underground passages.",
       "sources": [
        {
         "title": "Springs and Seeps",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/ozar/learn/nature/springs.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "ozark-waterways-alley",
     "name": "Alley Spring and Mill",
     "region": "Missouri",
     "lat": 37.153,
     "lng": -91.444,
     "emoji": "🛞",
     "suspect": {
      "name": "Millie Millrace",
      "alias": "The Repaint",
      "emoji": "🛞"
     },
     "facts": [
      {
       "id": "ozark-waterways-alley-1",
       "clue": "____ used spring water for power. The present building dates to 1893–1894 and replaced an earlier one; it was initially unpainted, later white with green trim, and later red.",
       "fact": "Alley Mill used spring water for power. The present building dates to 1893–1894 and replaced an earlier mill; it was initially unpainted, later white with green trim, and later red.",
       "sources": [
        {
         "title": "Alley Mill",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/ozar/learn/historyculture/alley-mill.htm"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "arkansas-delta-carmen",
   "title": "Where in the Arkansas Delta is Carmen Sandiego?",
   "places": [
    {
     "id": "arkansas-delta-cultural-center",
     "name": "Delta Cultural Center",
     "region": "Helena-West Helena, Arkansas",
     "lat": 34.525,
     "lng": -90.585,
     "emoji": "📻",
     "suspect": {
      "name": "Cora Carbon",
      "alias": "The Crossfade",
      "emoji": "📻"
     },
     "facts": [
      {
       "id": "arkansas-delta-cultural-center-1",
       "clue": "The ____ interprets regional history in A Heritage of Determination at its Depot Museum, and the region’s music at its Visitors Center.",
       "fact": "The Delta Cultural Center interprets regional history in A Heritage of Determination at its Depot Museum, and Delta music through Delta Sounds at its Visitors Center.",
       "sources": [
        {
         "title": "Delta Cultural Center permanent exhibits",
         "publisher": "Arkansas Heritage",
         "url": "https://www.arkansasheritage.com/delta-cultural-center/exhibits/permanent-exhibits"
        }
       ]
      }
     ]
    },
    {
     "id": "arkansas-delta-hampson",
     "name": "Hampson Archeological Museum",
     "region": "Wilson, Arkansas",
     "lat": 35.568,
     "lng": -90.042,
     "emoji": "🏺",
     "suspect": {
      "name": "Nadine Notch",
      "alias": "The Mislabel",
      "emoji": "🏺"
     },
     "facts": [
      {
       "id": "arkansas-delta-hampson-1",
       "clue": "____’s museum in Wilson exhibits material from the Nodena site, interpreting a farming and trading community of the 1400–1650 period.",
       "fact": "Hampson’s museum in Wilson exhibits material from the Nodena site, interpreting a farming and trading community of the 1400–1650 period.",
       "sources": [
        {
         "title": "Hampson Archeological Museum State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/explore/parks/hampson-archeological-museum-state-park"
        }
       ]
      }
     ]
    },
    {
     "id": "arkansas-delta-parkin",
     "name": "Parkin Archeological State Park",
     "region": "Parkin, Arkansas",
     "lat": 35.267,
     "lng": -90.554,
     "emoji": "📜",
     "suspect": {
      "name": "Perry Perhaps",
      "alias": "The Certifier",
      "emoji": "📜"
     },
     "facts": [
      {
       "id": "arkansas-delta-parkin-1",
       "clue": "____ preserves a Mississippian-period village site. Archeologists report evidence that de Soto may have visited in 1541; the site also has later lumber-company and African American school history.",
       "fact": "Parkin preserves a Mississippian-period village site. Archeologists report evidence that de Soto may have visited in 1541; the site also has later lumber-company and African American school history.",
       "sources": [
        {
         "title": "Parkin Archeological State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/explore/parks/parkin-archeological-state-park"
        }
       ]
      }
     ]
    },
    {
     "id": "arkansas-delta-lakeport",
     "name": "Lakeport Plantation Museum",
     "region": "Chicot County, Arkansas",
     "lat": 33.256,
     "lng": -91.154,
     "emoji": "🏠",
     "suspect": {
      "name": "Sage Sidebar",
      "alias": "The Omission",
      "emoji": "🏠"
     },
     "facts": [
      {
       "id": "arkansas-delta-lakeport-1",
       "clue": "____’s house dates to 1859. The museum interprets enslaved people’s lives as well as the owners and later sharecropping; the property was given to Arkansas State University in 2001.",
       "fact": "Lakeport’s house dates to 1859. The museum interprets enslaved people’s lives as well as plantation owners and later sharecropping; the property was given to Arkansas State University in 2001.",
       "sources": [
        {
         "title": "Lakeport Plantation Museum",
         "publisher": "Arkansas State University",
         "url": "https://www.astate.edu/outreach/history-and-heritage/heritage-sites/lakeport-plantation-museum/"
        }
       ]
      }
     ]
    },
    {
     "id": "arkansas-delta-dyess",
     "name": "Historic Dyess Colony",
     "region": "Dyess, Arkansas",
     "lat": 35.598,
     "lng": -90.215,
     "emoji": "🎸",
     "suspect": {
      "name": "Della Date",
      "alias": "The Homesteader",
      "emoji": "🎸"
     },
     "facts": [
      {
       "id": "arkansas-delta-dyess-1",
       "clue": "____ was established in 1934 as an agricultural resettlement community. The Cash family arrived in 1935; the planned layout combined a town center with surrounding farmsteads.",
       "fact": "Dyess was established in 1934 as an agricultural resettlement colony. The Cash family arrived in 1935; the planned layout combined a town center with surrounding farmsteads.",
       "sources": [
        {
         "title": "History of Dyess Colony",
         "publisher": "Arkansas State University",
         "url": "https://www.astate.edu/outreach/history-and-heritage/heritage-sites/dyess-cash/history.html"
        }
       ]
      }
     ]
    },
    {
     "id": "arkansas-delta-arkansas-post",
     "name": "Arkansas Post National Memorial",
     "region": "Arkansas",
     "lat": 34.023,
     "lng": -91.349,
     "emoji": "🗺️",
     "suspect": {
      "name": "Quinn Quarto",
      "alias": "The Relocator",
      "emoji": "🗺️"
     },
     "facts": [
      {
       "id": "arkansas-delta-arkansas-post-1",
       "clue": "In 1686 de Tonti established a French trading settlement at the existing Quapaw village of Osotouy. It later relocated because of flooding; it became a US possession in 1803 and territorial capital in 1819.",
       "fact": "In 1686 de Tonti established a French trading post at the existing Quapaw village of Osotouy. The post later relocated because of flooding; it became a US possession in 1803 and territorial capital in 1819.",
       "sources": [
        {
         "title": "Arkansas Post: History and Culture",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/arpo/learn/historyculture/index.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "arkansas-delta-mississippi-river",
     "name": "Mississippi River State Park",
     "region": "Marianna area, Arkansas",
     "lat": 34.722,
     "lng": -90.695,
     "emoji": "🌳",
     "suspect": {
      "name": "Ridge Redline",
      "alias": "The Divider",
      "emoji": "🌳"
     },
     "facts": [
      {
       "id": "arkansas-delta-mississippi-river-1",
       "clue": "____ works in partnership with the St. Francis National Forest. The interpreted landscape includes the river, Crowley’s Ridge and the Arkansas Delta.",
       "fact": "Mississippi River State Park works in partnership with the St. Francis National Forest. The interpreted landscape includes the river, Crowley’s Ridge and the Arkansas Delta.",
       "sources": [
        {
         "title": "Mississippi River State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/explore/parks/mississippi-river-state-park"
        }
       ]
      }
     ]
    },
    {
     "id": "arkansas-delta-purchase",
     "name": "Louisiana Purchase State Park",
     "region": "Eastern Arkansas",
     "lat": 34.645,
     "lng": -91.051,
     "emoji": "📐",
     "suspect": {
      "name": "Basil Baseline",
      "alias": "The Axis Swap",
      "emoji": "📐"
     },
     "facts": [
      {
       "id": "arkansas-delta-purchase-1",
       "clue": "The ____ occurred in 1803. In 1815 Robbins surveyed a north–south meridian and Brown a westward baseline; their intersection established an initial survey point.",
       "fact": "The Louisiana Purchase occurred in 1803. In 1815 Robbins surveyed a north–south meridian and Brown a westward baseline; their intersection established an initial survey point.",
       "sources": [
        {
         "title": "Louisiana Purchase survey boardwalk guide",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/sites/default/files/2025-12/4d4ecb59e64ea6fd04ccc8f688879d23_louisianapurchaseboardwalkguidebook.pdf"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "american-national-parks-carmen",
   "title": "Where in American National Parks is Carmen Sandiego?",
   "places": [
    {
     "id": "american-national-parks-acadia",
     "name": "Acadia National Park",
     "region": "Maine",
     "lat": 44.35,
     "lng": -68.22,
     "emoji": "🪨",
     "suspect": {
      "name": "Ivy Icefield",
      "alias": "The Striation",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "american-national-parks-acadia-1",
       "clue": "____’s granite formed before later glaciers shaped the landscape. Ice cut U-shaped valleys and left polish, striations and transported boulders.",
       "fact": "Acadia’s granite formed before later glaciers shaped the landscape. Ice cut U-shaped valleys and left polish, striations and transported boulders.",
       "sources": [
        {
         "title": "Acadia: Geology",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/acad/learn/nature/geology.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "american-national-parks-smokies",
     "name": "Great Smoky Mountains National Park",
     "region": "Tennessee and North Carolina",
     "lat": 35.611,
     "lng": -83.489,
     "emoji": "🦎",
     "suspect": {
      "name": "Sylvia Scale",
      "alias": "The Mixer",
      "emoji": "🦎"
     },
     "facts": [
      {
       "id": "american-national-parks-smokies-1",
       "clue": "This park’s amphibians include lungless salamanders, which exchange gases through their skin and the tissues of the mouth and throat.",
       "fact": "Great Smoky Mountains National Park’s amphibians include lungless salamanders, which exchange gases through their skin and the tissues of the mouth and throat.",
       "sources": [
        {
         "title": "Great Smoky Mountains: Amphibians",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/grsm/learn/nature/amphibians.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "american-national-parks-everglades",
     "name": "Everglades National Park",
     "region": "Florida",
     "lat": 25.312,
     "lng": -80.936,
     "emoji": "🌾",
     "suspect": {
      "name": "Fern Footnote",
      "alias": "The Still Frame",
      "emoji": "🌾"
     },
     "facts": [
      {
       "id": "american-national-parks-everglades-1",
       "clue": "An ____ freshwater slough contains slow-moving water, with deeper areas retaining water during the dry season. The reference links Shark River Slough with Shark Valley and Taylor Slough with Royal Palm.",
       "fact": "An Everglades freshwater slough contains slow-moving water, with deeper areas retaining water during the dry season. The reference links Shark River Slough with Shark Valley and Taylor Slough with Royal Palm.",
       "sources": [
        {
         "title": "Everglades: Freshwater Slough",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/ever/learn/kidsyouth/freshwater-slough.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "american-national-parks-grand-canyon",
     "name": "Grand Canyon National Park",
     "region": "Arizona",
     "lat": 36.057,
     "lng": -112.14,
     "emoji": "🏜️",
     "suspect": {
      "name": "Canyon Carbon",
      "alias": "The Time Slip",
      "emoji": "🏜️"
     },
     "facts": [
      {
       "id": "american-national-parks-grand-canyon-1",
       "clue": "The Colorado River eroded uplifted layered rock at ____. Many of its layered rocks formed long before the gorge’s later incision; resistant layers commonly form cliffs and softer layers slopes.",
       "fact": "The Colorado River eroded uplifted layered rock at Grand Canyon. Many of its layered rocks formed long before the canyon’s later incision; resistant layers commonly form cliffs and softer layers slopes.",
       "sources": [
        {
         "title": "Grand Canyon: Geologic Formations",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/grca/learn/nature/geologicformations.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "american-national-parks-yellowstone",
     "name": "Yellowstone National Park",
     "region": "Wyoming",
     "lat": 44.46,
     "lng": -110.828,
     "emoji": "♨️",
     "suspect": {
      "name": "Gale Geyser",
      "alias": "The Clock Setter",
      "emoji": "♨️"
     },
     "facts": [
      {
       "id": "american-national-parks-yellowstone-1",
       "clue": "____’s hydrothermal system requires heat, groundwater and underground pathways. Groundwater heats at depth and can return toward the surface through this natural plumbing.",
       "fact": "Yellowstone’s hydrothermal system requires heat, groundwater and underground pathways. Groundwater heats at depth and can return toward the surface through this natural plumbing.",
       "sources": [
        {
         "title": "Yellowstone: Hydrothermal Systems",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/yell/learn/nature/hydrothermal-systems.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "american-national-parks-arches",
     "name": "Arches National Park",
     "region": "Utah",
     "lat": 38.733,
     "lng": -109.593,
     "emoji": "🪟",
     "suspect": {
      "name": "Archie Aperture",
      "alias": "The Wind Edit",
      "emoji": "🪟"
     },
     "facts": [
      {
       "id": "american-national-parks-arches-1",
       "clue": "Water is a major shaping force here. In one pathway described by NPS, fractured sandstone is shaped into fins and then into ____; continuing erosion can eventually cause collapse.",
       "fact": "Water is a major shaping force at Arches. In one pathway described by NPS, fractured sandstone is shaped into fins and then arches; continuing erosion can eventually cause collapse.",
       "sources": [
        {
         "title": "Arches: Geologic Formations",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/arch/learn/nature/geologicformations.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "american-national-parks-yosemite",
     "name": "Yosemite National Park",
     "region": "California",
     "lat": 37.745,
     "lng": -119.594,
     "emoji": "🧊",
     "suspect": {
      "name": "Lyra Lens",
      "alias": "The Scale Shift",
      "emoji": "🧊"
     },
     "facts": [
      {
       "id": "american-national-parks-yosemite-1",
       "clue": "Ice Age glaciers helped shape ____. Historical surveys and repeat photography provide records of glacier extent through time.",
       "fact": "Ice Age glaciers helped shape Yosemite. Historical surveys and repeat photography provide records of glacier extent through time.",
       "sources": [
        {
         "title": "Yosemite: Glaciers",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/yose/learn/nature/glaciers.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "american-national-parks-hawaii",
     "name": "Hawaiʻi Volcanoes National Park",
     "region": "Hawaiʻi",
     "lat": 19.419,
     "lng": -155.288,
     "emoji": "🌋",
     "suspect": {
      "name": "Margo Magma",
      "alias": "The Double Entry",
      "emoji": "🌋"
     },
     "facts": [
      {
       "id": "american-national-parks-hawaii-1",
       "clue": "Volcanic activity built this island chain. The park interprets Kīlauea and Mauna Loa, where magma can rise and erupt at the surface.",
       "fact": "Volcanic activity built the Hawaiian island chain. Hawaiʻi Volcanoes National Park interprets Kīlauea and Mauna Loa, where magma can rise and erupt at the surface.",
       "sources": [
        {
         "title": "Hawaiʻi Volcanoes: Volcanoes",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/havo/learn/nature/volcanoes.htm"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "railroads-depots-carmen",
   "title": "Where on the Railroads is Carmen Sandiego?",
   "places": [
    {
     "id": "railroads-depots-steamtown",
     "name": "Steamtown National Historic Site",
     "region": "Scranton, Pennsylvania",
     "lat": 41.408,
     "lng": -75.671,
     "emoji": "🚂",
     "suspect": {
      "name": "Porter Paper",
      "alias": "The Steam Screen",
      "emoji": "🚂"
     },
     "facts": [
      {
       "id": "railroads-depots-steamtown-1",
       "clue": "____’s collection includes steam and diesel-electric locomotives, passenger cars and freight cars.",
       "fact": "Steamtown’s collection includes steam and diesel-electric locomotives, passenger cars and freight cars.",
       "sources": [
        {
         "title": "Steamtown’s Locomotives and Cars",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/stea/planyourvisit/steamtowncollection.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "railroads-depots-horseshoe",
     "name": "Horseshoe Curve",
     "region": "Altoona, Pennsylvania",
     "lat": 40.498,
     "lng": -78.483,
     "emoji": "🧲",
     "suspect": {
      "name": "Grady Gauge",
      "alias": "The Shortcut",
      "emoji": "🧲"
     },
     "facts": [
      {
       "id": "railroads-depots-horseshoe-1",
       "clue": "____ opened in 1854. Its curved route helped the railroad overcome the steep grade of a direct route across the Allegheny front.",
       "fact": "Horseshoe Curve opened in 1854. Its curved route helped the railroad overcome the steep grade of a direct route across the Allegheny front.",
       "sources": [
        {
         "title": "Horseshoe Curve, Pennsylvania Railroad",
         "publisher": "American Society of Civil Engineers",
         "url": "https://www.asce.org/about-civil-engineering/history-and-heritage/historic-landmarks/horseshoe-curve-pennsylvania-railroad"
        }
       ]
      }
     ]
    },
    {
     "id": "railroads-depots-mount-clare",
     "name": "Mount Clare Rail Campus",
     "region": "Baltimore, Maryland",
     "lat": 39.285,
     "lng": -76.632,
     "emoji": "🏭",
     "suspect": {
      "name": "Clara Carbon",
      "alias": "The Nickname",
      "emoji": "🏭"
     },
     "facts": [
      {
       "id": "railroads-depots-mount-clare-1",
       "clue": "This historic campus includes an 1851 station, the Baldwin Roundhouse (1884) and the Annex (1891). A repair shed there, used mainly for freight cars, was nicknamed the Tender Kitchen.",
       "fact": "The historic campus includes Mt. Clare Station (1851), the Baldwin Roundhouse (1884) and the Annex (1891). A repair shed there, used mainly for freight cars, was nicknamed the Tender Kitchen.",
       "sources": [
        {
         "title": "Mount Clare historic rail campus",
         "publisher": "National Museum of Railroad History & Innovation",
         "url": "https://www.borail.org/explore-learn/historic-site/"
        }
       ]
      }
     ]
    },
    {
     "id": "railroads-depots-cass",
     "name": "Cass Scenic Railroad",
     "region": "West Virginia",
     "lat": 38.396,
     "lng": -79.915,
     "emoji": "🪵",
     "suspect": {
      "name": "Timber Tess",
      "alias": "The Through Load",
      "emoji": "🪵"
     },
     "facts": [
      {
       "id": "railroads-depots-cass-1",
       "clue": "____’s town and railroad construction began in 1901 for the timber industry; the railroad carried cut timber down to the mill. It later became a heritage railroad.",
       "fact": "Cass’s town and railroad construction began in 1901 for the timber industry; the railroad carried cut timber down to the mill. It later became a heritage railroad.",
       "sources": [
        {
         "title": "Cass Scenic Railroad: Park History",
         "publisher": "Cass Scenic Railroad State Park",
         "url": "https://cassscenicrailroad.com/park-history/"
        }
       ]
      }
     ]
    },
    {
     "id": "railroads-depots-tennessee-valley",
     "name": "Tennessee Valley Railroad Museum",
     "region": "Chattanooga, Tennessee",
     "lat": 35.066,
     "lng": -85.206,
     "emoji": "🎟️",
     "suspect": {
      "name": "Connie Connector",
      "alias": "The Missed Link",
      "emoji": "🎟️"
     },
     "facts": [
      {
       "id": "railroads-depots-tennessee-valley-1",
       "clue": "____ was founded in 1961 to preserve historical railway equipment. Its mission includes restoration and operation as well as preservation.",
       "fact": "Tennessee Valley Railroad Museum was founded in 1961 to preserve historical railway equipment. Its mission includes restoration and operation as well as preservation.",
       "sources": [
        {
         "title": "Tennessee Valley Railroad Museum: About Us",
         "publisher": "Tennessee Valley Railroad Museum",
         "url": "https://www.tvrail.com/about-us/"
        }
       ]
      }
     ]
    },
    {
     "id": "railroads-depots-union-station",
     "name": "Union Station Kansas City",
     "region": "Missouri",
     "lat": 39.086,
     "lng": -94.585,
     "emoji": "🧳",
     "suspect": {
      "name": "Casey Claim",
      "alias": "The Baggage Swap",
      "emoji": "🧳"
     },
     "facts": [
      {
       "id": "railroads-depots-union-station-1",
       "clue": "This rail station was built in 1914. Its later renovation was completed in 1999.",
       "fact": "Kansas City’s Union Station was built in 1914. Its later renovation was completed in 1999.",
       "sources": [
        {
         "title": "About Union Station Kansas City",
         "publisher": "Union Station Kansas City",
         "url": "https://unionstation.org/about-union-station-kansas-city/"
        }
       ]
      }
     ]
    },
    {
     "id": "railroads-depots-golden-spike",
     "name": "Golden Spike National Historical Park",
     "region": "Utah",
     "lat": 41.618,
     "lng": -112.551,
     "emoji": "🔩",
     "suspect": {
      "name": "Jules Junction",
      "alias": "The Replica",
      "emoji": "🔩"
     },
     "facts": [
      {
       "id": "railroads-depots-golden-spike-1",
       "clue": "The park’s Jupiter and No. 119 locomotive replicas were completed in 1979.",
       "fact": "The park’s Jupiter and No. 119 locomotive replicas were completed in 1979.",
       "sources": [
        {
         "title": "Golden Spike: Horse of a Different Color",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/gosp/learn/historyculture/horse-of-a-different-color.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "railroads-depots-railtown",
     "name": "Railtown 1897",
     "region": "Jamestown, California",
     "lat": 37.951,
     "lng": -120.424,
     "emoji": "🚃",
     "suspect": {
      "name": "Carrie Carriage",
      "alias": "The Return Label",
      "emoji": "🚃"
     },
     "facts": [
      {
       "id": "railroads-depots-railtown-1",
       "clue": "California State Parks records Coach No. 6 as built in 1902, moved to Sacramento for the 1981 railroad-museum opening and returned to ____ in 1989.",
       "fact": "California State Parks records Coach No. 6 as built in 1902, moved to Sacramento for the 1981 railroad-museum opening and returned to Railtown in 1989.",
       "sources": [
        {
         "title": "Railtown 1897 locomotives and train cars",
         "publisher": "California State Parks",
         "url": "https://www.parks.ca.gov/?page_id=24429"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "architecture-hidden-details-carmen",
   "title": "Where in the Blueprints is Carmen Sandiego?",
   "places": [
    {
     "id": "architecture-hidden-details-robie",
     "name": "Frederick C. Robie House",
     "region": "Chicago, Illinois",
     "lat": 41.79,
     "lng": -87.596,
     "emoji": "🧱",
     "suspect": {
      "name": "Rowan Roofline",
      "alias": "The Vertical Edit",
      "emoji": "🧱"
     },
     "facts": [
      {
       "id": "architecture-hidden-details-robie-1",
       "clue": "Frank Lloyd Wright’s ____ was completed in 1910. Its Prairie design emphasizes horizontal lines, brick and limestone, with projecting cantilevered roofs.",
       "fact": "Frank Lloyd Wright’s Robie House was completed in 1910. Its Prairie design emphasizes horizontal lines, brick and limestone, with projecting cantilevered roofs.",
       "sources": [
        {
         "title": "Frederick C. Robie House",
         "publisher": "Frank Lloyd Wright Trust",
         "url": "https://www.flwright.org/explore/frederick-c-robie-house"
        }
       ]
      }
     ]
    },
    {
     "id": "architecture-hidden-details-taliesin",
     "name": "Taliesin",
     "region": "Spring Green, Wisconsin",
     "lat": 43.142,
     "lng": -90.07,
     "emoji": "🏡",
     "suspect": {
      "name": "Bryn Brow",
      "alias": "The First Draft",
      "emoji": "🏡"
     },
     "facts": [
      {
       "id": "architecture-hidden-details-taliesin-1",
       "clue": "____’s first house dates to 1911 and evolved through three iterations. Wright used it as home and studio, with local limestone and Wisconsin River sand among its materials.",
       "fact": "Taliesin’s first house dates to 1911 and evolved through three iterations. Wright used it as home and studio, with local limestone and Wisconsin River sand among its materials.",
       "sources": [
        {
         "title": "Taliesin History",
         "publisher": "Taliesin Preservation",
         "url": "https://www.taliesinpreservation.org/taliesin-history"
        }
       ]
      }
     ]
    },
    {
     "id": "architecture-hidden-details-fallingwater",
     "name": "Fallingwater",
     "region": "Mill Run, Pennsylvania",
     "lat": 39.906,
     "lng": -79.468,
     "emoji": "🌊",
     "suspect": {
      "name": "Faye Facade",
      "alias": "The Distant View",
      "emoji": "🌊"
     },
     "facts": [
      {
       "id": "architecture-hidden-details-fallingwater-1",
       "clue": "Wright designed ____ in 1935 above a waterfall, using native sandstone. Construction of the main house, guest house and service wing was complete as a group by 1939.",
       "fact": "Wright designed Fallingwater in 1935 above a waterfall, using native sandstone. Construction of the main house, guest house and service wing was complete as a group by 1939.",
       "sources": [
        {
         "title": "What is Fallingwater?",
         "publisher": "Western Pennsylvania Conservancy",
         "url": "https://fallingwater.org/what-is-fallingwater/"
        }
       ]
      }
     ]
    },
    {
     "id": "architecture-hidden-details-gateway-arch",
     "name": "Gateway Arch",
     "region": "St. Louis, Missouri",
     "lat": 38.625,
     "lng": -90.185,
     "emoji": "🌉",
     "suspect": {
      "name": "Elias Elevation",
      "alias": "The Reference Shift",
      "emoji": "🌉"
     },
     "facts": [
      {
       "id": "architecture-hidden-details-gateway-arch-1",
       "clue": "Eero Saarinen’s stainless steel ____ design was selected in 1947–1948. Construction ran from 1963 to 1965; it is 630 feet tall.",
       "fact": "Eero Saarinen’s stainless steel Gateway Arch design was selected in 1947–1948. Construction ran from 1963 to 1965; the arch is 630 feet tall.",
       "sources": [
        {
         "title": "Gateway Arch: History and Culture",
         "publisher": "National Park Service",
         "url": "https://home.nps.gov/jeff/learn/historyculture/index.htm"
        }
       ]
      }
     ]
    },
    {
     "id": "architecture-hidden-details-gamble",
     "name": "Gamble House",
     "region": "Pasadena, California",
     "lat": 34.152,
     "lng": -118.161,
     "emoji": "🪚",
     "suspect": {
      "name": "Willa Woodgrain",
      "alias": "The Credit Swap",
      "emoji": "🪚"
     },
     "facts": [
      {
       "id": "architecture-hidden-details-gamble-1",
       "clue": "The 1908 ____ was designed by Charles and Henry Greene. Its Arts and Crafts architecture emphasizes wood, expressed structure and joinery.",
       "fact": "The 1908 Gamble House was designed by Charles and Henry Greene. Its Arts and Crafts architecture emphasizes wood, expressed structure and joinery.",
       "sources": [
        {
         "title": "About the Gamble House",
         "publisher": "Gamble House Conservancy",
         "url": "https://gamblehouse.org/about/"
        }
       ]
      }
     ]
    },
    {
     "id": "architecture-hidden-details-glass-house",
     "name": "The Glass House",
     "region": "New Canaan, Connecticut",
     "lat": 41.141,
     "lng": -73.53,
     "emoji": "🪟",
     "suspect": {
      "name": "Pip Pane",
      "alias": "The Universal",
      "emoji": "🪟"
     },
     "facts": [
      {
       "id": "architecture-hidden-details-glass-house-1",
       "clue": "Philip Johnson’s ____ was designed in 1945–1948 and completed in 1949. Its transparency contrasts with the companion Brick House; they were conceived as a paired composition.",
       "fact": "Philip Johnson’s Glass House was designed in 1945–1948 and completed in 1949. Its transparency contrasts with the companion Brick House; they were conceived as a paired composition.",
       "sources": [
        {
         "title": "The Glass House",
         "publisher": "The Glass House, National Trust for Historic Preservation",
         "url": "https://theglasshouse.org/explore/the-glass-house/"
        },
        {
         "title": "The Brick House",
         "publisher": "The Glass House, National Trust for Historic Preservation",
         "url": "https://theglasshouse.org/explore/brick-house/"
        }
       ]
      }
     ]
    },
    {
     "id": "architecture-hidden-details-marin",
     "name": "Marin County Civic Center",
     "region": "San Rafael, California",
     "lat": 38.003,
     "lng": -122.531,
     "emoji": "🏛️",
     "suspect": {
      "name": "Civic Cypher",
      "alias": "The Commission",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "architecture-hidden-details-marin-1",
       "clue": "____ commissioned Wright’s ____ in 1957; its initial opening was in 1962.",
       "fact": "Marin County commissioned Wright’s Civic Center in 1957; its initial opening was in 1962.",
       "sources": [
        {
         "title": "Civic Center’s 60th Anniversary",
         "publisher": "County of Marin",
         "url": "https://www.marincounty.gov/news-releases/county-mark-civic-centers-60th-anniversary"
        }
       ]
      }
     ]
    },
    {
     "id": "architecture-hidden-details-bradbury",
     "name": "Bradbury Building",
     "region": "Los Angeles, California",
     "lat": 34.051,
     "lng": -118.248,
     "emoji": "🏢",
     "suspect": {
      "name": "Atrium Ada",
      "alias": "The Screen Role",
      "emoji": "🏢"
     },
     "facts": [
      {
       "id": "architecture-hidden-details-bradbury-1",
       "clue": "The ____ is documented for its skylit atrium and intricate ironwork. It is also used as workspace and as a filming location.",
       "fact": "The Bradbury Building is documented for its skylit atrium and intricate ironwork. It is also used as workspace and as a filming location.",
       "sources": [
        {
         "title": "Bradbury Building",
         "publisher": "Bradbury Building ownership and management",
         "url": "https://thebradburybuilding.com/"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "museums-missing-labels-carmen",
   "title": "Where in the Museum Files is Carmen Sandiego?",
   "places": [
    {
     "id": "museums-missing-labels-air-space",
     "name": "National Air and Space Museum",
     "region": "Washington, DC",
     "lat": 38.888,
     "lng": -77.02,
     "emoji": "🛩️",
     "suspect": {
      "name": "Avery Accession",
      "alias": "The Copy Count",
      "emoji": "🛩️"
     },
     "facts": [
      {
       "id": "museums-missing-labels-air-space-1",
       "clue": "The ____’s collection includes the 1903 Wright Flyer, the aircraft of the Wright brothers’ 1903 flights in North Carolina.",
       "fact": "The National Air and Space Museum’s collection includes the 1903 Wright Flyer, the aircraft of the Wright brothers’ 1903 flights in North Carolina.",
       "sources": [
        {
         "title": "1903 Wright Flyer",
         "publisher": "Smithsonian National Air and Space Museum",
         "url": "https://airandspace.si.edu/collection-objects/1903-wright-flyer/nasm_A19610048000"
        }
       ]
      }
     ]
    },
    {
     "id": "museums-missing-labels-field",
     "name": "Field Museum",
     "region": "Chicago, Illinois",
     "lat": 41.867,
     "lng": -87.617,
     "emoji": "🦖",
     "suspect": {
      "name": "Fossil Finn",
      "alias": "The Whole Cast",
      "emoji": "🦖"
     },
     "facts": [
      {
       "id": "museums-missing-labels-field-1",
       "clue": "The ____’s SUE specimen is mounted with a cast skull.",
       "fact": "The Field Museum’s SUE specimen is mounted with a cast skull.",
       "sources": [
        {
         "title": "SUE collection record",
         "publisher": "Field Museum",
         "url": "https://www.fieldmuseum.org/collection-item-iconic/sue"
        }
       ]
      }
     ]
    },
    {
     "id": "museums-missing-labels-henry-ford",
     "name": "The Henry Ford",
     "region": "Dearborn, Michigan",
     "lat": 42.303,
     "lng": -83.234,
     "emoji": "🚌",
     "suspect": {
      "name": "Rory Record",
      "alias": "The Untouched Label",
      "emoji": "🚌"
     },
     "facts": [
      {
       "id": "museums-missing-labels-henry-ford-1",
       "clue": "The museum interprets Rosa Parks’s 1955 resistance to segregation on a Montgomery bus. It restored that bus, number 2857, keeping original material where possible.",
       "fact": "The museum interprets Rosa Parks’s 1955 resistance to segregation on a Montgomery bus. It restored that bus, number 2857, keeping original material where possible.",
       "sources": [
        {
         "title": "Rosa Parks Bus: Curating and Preserving",
         "publisher": "The Henry Ford",
         "url": "https://corporate.thehenryford.org/explore/inside/rosa-parks-bus"
        }
       ]
      }
     ]
    },
    {
     "id": "museums-missing-labels-computer-history",
     "name": "Computer History Museum",
     "region": "Mountain View, California",
     "lat": 37.414,
     "lng": -122.077,
     "emoji": "⚙️",
     "suspect": {
      "name": "Dot Difference",
      "alias": "The Antique Claim",
      "emoji": "⚙️"
     },
     "facts": [
      {
       "id": "museums-missing-labels-computer-history-1",
       "clue": "Babbage designed Difference Engine No. 2 in 1847–1849 but did not complete it in his lifetime. This museum exhibited a modern working reconstruction from May 2008 to January 2016.",
       "fact": "Babbage designed Difference Engine No. 2 in 1847–1849 but did not complete it in his lifetime. The Computer History Museum exhibited a modern working reconstruction from May 2008 to January 2016.",
       "sources": [
        {
         "title": "The Babbage Engine historical exhibit",
         "publisher": "Computer History Museum",
         "url": "https://computerhistory.org/exhibits/babbage/"
        }
       ]
      }
     ]
    },
    {
     "id": "museums-missing-labels-exploratorium",
     "name": "Exploratorium",
     "region": "San Francisco, California",
     "lat": 37.801,
     "lng": -122.397,
     "emoji": "🌫️",
     "suspect": {
      "name": "Fia Focus",
      "alias": "The Credit Merger",
      "emoji": "🌫️"
     },
     "facts": [
      {
       "id": "museums-missing-labels-exploratorium-1",
       "clue": "The ____’s catalogue identifies Fog Bridge #72494 (2013) as an artwork by Fujiko Nakaya. It interprets perception and physical experience through an art installation.",
       "fact": "The Exploratorium’s catalogue identifies Fog Bridge #72494 (2013) as an artwork by Fujiko Nakaya. It interprets perception and physical experience through an art installation.",
       "sources": [
        {
         "title": "Over the Water: Fujiko Nakaya",
         "publisher": "Exploratorium",
         "url": "https://www.exploratorium.edu/sites/default/files/pdfs/over-the-water-catalog-nakaya.pdf"
        }
       ]
      }
     ]
    },
    {
     "id": "museums-missing-labels-science-minnesota",
     "name": "Science Museum of Minnesota",
     "region": "St. Paul, Minnesota",
     "lat": 44.942,
     "lng": -93.098,
     "emoji": "🔬",
     "suspect": {
      "name": "Merriam Memo",
      "alias": "The New Beginning",
      "emoji": "🔬"
     },
     "facts": [
      {
       "id": "museums-missing-labels-science-minnesota-1",
       "clue": "The institution was founded in 1907 as the St. Paul Institute of Science and Letters, has used the ____ name since 1970, and opened its riverfront facility in 1999.",
       "fact": "The institution was founded in 1907 as the St. Paul Institute of Science and Letters, has used the Science Museum of Minnesota name since 1970, and opened its riverfront facility in 1999.",
       "sources": [
        {
         "title": "About the Science Museum of Minnesota",
         "publisher": "Science Museum of Minnesota",
         "url": "https://smm.org/about/"
        }
       ]
      }
     ]
    },
    {
     "id": "museums-missing-labels-jazz",
     "name": "American Jazz Museum",
     "region": "Kansas City, Missouri",
     "lat": 39.089,
     "lng": -94.562,
     "emoji": "🎷",
     "suspect": {
      "name": "Jazzy Jules",
      "alias": "The Complete List",
      "emoji": "🎷"
     },
     "facts": [
      {
       "id": "museums-missing-labels-jazz-1",
       "clue": "The ____’s permanent-gallery reference features Louis Armstrong, Charlie Parker, Ella Fitzgerald and Duke Ellington through artifacts, photographs and listening stations.",
       "fact": "The American Jazz Museum’s permanent-gallery reference features Louis Armstrong, Charlie Parker, Ella Fitzgerald and Duke Ellington through artifacts, photographs and listening stations.",
       "sources": [
        {
         "title": "American Jazz Museum exhibits",
         "publisher": "American Jazz Museum",
         "url": "https://americanjazzmuseum.org/exhibits/"
        }
       ]
      }
     ]
    },
    {
     "id": "museums-missing-labels-flight",
     "name": "The Museum of Flight",
     "region": "Seattle, Washington",
     "lat": 47.518,
     "lng": -122.296,
     "emoji": "🛫",
     "suspect": {
      "name": "Boe Beacon",
      "alias": "The Tailwind",
      "emoji": "🛫"
     },
     "facts": [
      {
       "id": "museums-missing-labels-flight-1",
       "clue": "The museum’s Red Barn began as a 1909 shipyard building, and aircraft were built there from 1917.",
       "fact": "The museum’s Red Barn began as a 1909 shipyard building, and aircraft were built there from 1917.",
       "sources": [
        {
         "title": "Heath Shipyard archive scope note",
         "publisher": "The Museum of Flight Archives",
         "url": "https://archives.museumofflight.org/subjects/45"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "capitals-africa-carmen",
   "title": "Where in Africa's Capitals is Carmen Sandiego?",
   "places": [
    {
     "id": "cap-porto-novo",
     "name": "Porto-Novo",
     "region": "Benin",
     "lat": 6.5,
     "lng": 2.6,
     "emoji": "🇧🇯",
     "suspect": {
      "name": "Cora Capitol",
      "alias": "The Seat Warmer",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "cap-porto-novo-1",
       "clue": "____ is the official capital of Benin.",
       "fact": "Porto-Novo is the official capital of Benin.",
       "sources": [
        {
         "title": "Porto-Novo",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Porto-Novo"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-gitega",
     "name": "Gitega",
     "region": "Burundi",
     "lat": -3.43,
     "lng": 29.92,
     "emoji": "🇧🇮",
     "suspect": {
      "name": "Rex Regalia",
      "alias": "The Crown Jewel",
      "emoji": "👑"
     },
     "facts": [
      {
       "id": "cap-gitega-1",
       "clue": "____ became the political capital of Burundi by parliamentary vote in January 2019, while Bujumbura remains the economic center.",
       "fact": "Gitega became the political capital of Burundi by parliamentary vote in January 2019, while Bujumbura remains the economic center.",
       "sources": [
        {
         "title": "Gitega",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Gitega"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-abuja",
     "name": "Abuja",
     "region": "Nigeria",
     "lat": 9.08,
     "lng": 7.4,
     "emoji": "🇳🇬",
     "suspect": {
      "name": "Polly Ticks",
      "alias": "The Filibuster",
      "emoji": "🗳️"
     },
     "facts": [
      {
       "id": "cap-abuja-1",
       "clue": "____ has been the capital of Nigeria since 1991.",
       "fact": "Abuja has been the capital of Nigeria since 1991.",
       "sources": [
        {
         "title": "Abuja",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Abuja"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-lagos",
     "name": "Lagos",
     "region": "Nigeria",
     "lat": 6.52,
     "lng": 3.38,
     "emoji": "🇳🇬",
     "suspect": {
      "name": "Max Mapleton",
      "alias": "The Border Hopper",
      "emoji": "🗺️"
     },
     "facts": [
      {
       "id": "cap-lagos-1",
       "clue": "____ was the capital of Nigeria until 1991.",
       "fact": "Lagos was the capital of Nigeria until 1991.",
       "sources": [
        {
         "title": "Lagos",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Lagos"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-yamoussoukro",
     "name": "Yamoussoukro",
     "region": "Ivory Coast",
     "lat": 6.82,
     "lng": -5.28,
     "emoji": "🇨🇮",
     "suspect": {
      "name": "Dee Plomat",
      "alias": "The Envoy",
      "emoji": "🎩"
     },
     "facts": [
      {
       "id": "cap-yamoussoukro-1",
       "clue": "____ became the legal capital of Ivory Coast in 1983, although former capital Abidjan retains many political and economic functions.",
       "fact": "Yamoussoukro became the legal capital of Ivory Coast in 1983, although former capital Abidjan retains many political and economic functions.",
       "sources": [
        {
         "title": "Yamoussoukro",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Yamoussoukro"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-rabat",
     "name": "Rabat",
     "region": "Morocco",
     "lat": 34.02,
     "lng": -6.84,
     "emoji": "🇲🇦",
     "suspect": {
      "name": "Ann Exe",
      "alias": "The Annexer",
      "emoji": "📜"
     },
     "facts": [
      {
       "id": "cap-rabat-1",
       "clue": "____ is the capital of Morocco.",
       "fact": "Rabat is the capital of Morocco.",
       "sources": [
        {
         "title": "Rabat",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Rabat"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-dodoma",
     "name": "Dodoma",
     "region": "Tanzania",
     "lat": -6.16,
     "lng": 35.75,
     "emoji": "🇹🇿",
     "suspect": {
      "name": "Cora Capitol",
      "alias": "The Seat Warmer",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "cap-dodoma-1",
       "clue": "____ is the capital of Tanzania.",
       "fact": "Dodoma is the capital of Tanzania.",
       "sources": [
        {
         "title": "Dodoma",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Dodoma"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-antananarivo",
     "name": "Antananarivo",
     "region": "Madagascar",
     "lat": -18.88,
     "lng": 47.51,
     "emoji": "🇲🇬",
     "suspect": {
      "name": "Rex Regalia",
      "alias": "The Crown Jewel",
      "emoji": "👑"
     },
     "facts": [
      {
       "id": "cap-antananarivo-1",
       "clue": "____ is the capital of Madagascar.",
       "fact": "Antananarivo is the capital of Madagascar.",
       "sources": [
        {
         "title": "Antananarivo",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Antananarivo"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-ouagadougou",
     "name": "Ouagadougou",
     "region": "Burkina Faso",
     "lat": 12.37,
     "lng": -1.52,
     "emoji": "🇧🇫",
     "suspect": {
      "name": "Polly Ticks",
      "alias": "The Filibuster",
      "emoji": "🗳️"
     },
     "facts": [
      {
       "id": "cap-ouagadougou-1",
       "clue": "____ is the capital of Burkina Faso.",
       "fact": "Ouagadougou is the capital of Burkina Faso.",
       "sources": [
        {
         "title": "Ouagadougou",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Ouagadougou"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-yaounde",
     "name": "Yaoundé",
     "region": "Cameroon",
     "lat": 3.87,
     "lng": 11.52,
     "emoji": "🇨🇲",
     "suspect": {
      "name": "Max Mapleton",
      "alias": "The Border Hopper",
      "emoji": "🗺️"
     },
     "facts": [
      {
       "id": "cap-yaounde-1",
       "clue": "____ is the capital of Cameroon.",
       "fact": "Yaoundé is the capital of Cameroon.",
       "sources": [
        {
         "title": "Yaoundé",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Yaound%C3%A9"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-lilongwe",
     "name": "Lilongwe",
     "region": "Malawi",
     "lat": -13.96,
     "lng": 33.79,
     "emoji": "🇲🇼",
     "suspect": {
      "name": "Dee Plomat",
      "alias": "The Envoy",
      "emoji": "🎩"
     },
     "facts": [
      {
       "id": "cap-lilongwe-1",
       "clue": "____ has been the capital of Malawi since 1975.",
       "fact": "Lilongwe has been the capital of Malawi since 1975.",
       "sources": [
        {
         "title": "Lilongwe",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Lilongwe"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-n-djamena",
     "name": "N'Djamena",
     "region": "Chad",
     "lat": 12.13,
     "lng": 15.06,
     "emoji": "🇹🇩",
     "suspect": {
      "name": "Ann Exe",
      "alias": "The Annexer",
      "emoji": "📜"
     },
     "facts": [
      {
       "id": "cap-n-djamena-1",
       "clue": "____ is the capital of Chad.",
       "fact": "N'Djamena is the capital of Chad.",
       "sources": [
        {
         "title": "N'Djamena",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/N%27Djamena"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-niamey",
     "name": "Niamey",
     "region": "Niger",
     "lat": 13.51,
     "lng": 2.11,
     "emoji": "🇳🇪",
     "suspect": {
      "name": "Cora Capitol",
      "alias": "The Seat Warmer",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "cap-niamey-1",
       "clue": "____ is the capital of Niger.",
       "fact": "Niamey is the capital of Niger.",
       "sources": [
        {
         "title": "Niamey",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Niamey"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-nairobi",
     "name": "Nairobi",
     "region": "Kenya",
     "lat": -1.29,
     "lng": 36.82,
     "emoji": "🇰🇪",
     "suspect": {
      "name": "Rex Regalia",
      "alias": "The Crown Jewel",
      "emoji": "👑"
     },
     "facts": [
      {
       "id": "cap-nairobi-1",
       "clue": "____ is the capital of Kenya.",
       "fact": "Nairobi is the capital of Kenya.",
       "sources": [
        {
         "title": "Nairobi",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Nairobi"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-mbabane",
     "name": "Mbabane",
     "region": "Eswatini",
     "lat": -26.32,
     "lng": 31.14,
     "emoji": "🇸🇿",
     "suspect": {
      "name": "Polly Ticks",
      "alias": "The Filibuster",
      "emoji": "🗳️"
     },
     "facts": [
      {
       "id": "cap-mbabane-1",
       "clue": "____ is the executive capital of Eswatini, while Lobamba serves as the royal and legislative capital.",
       "fact": "Mbabane is the executive capital of Eswatini, while Lobamba serves as the royal and legislative capital.",
       "sources": [
        {
         "title": "Mbabane",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Mbabane"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-kampala",
     "name": "Kampala",
     "region": "Uganda",
     "lat": 0.35,
     "lng": 32.58,
     "emoji": "🇺🇬",
     "suspect": {
      "name": "Max Mapleton",
      "alias": "The Border Hopper",
      "emoji": "🗺️"
     },
     "facts": [
      {
       "id": "cap-kampala-1",
       "clue": "____ is the capital of Uganda.",
       "fact": "Kampala is the capital of Uganda.",
       "sources": [
        {
         "title": "Kampala",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Kampala"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-dakar",
     "name": "Dakar",
     "region": "Senegal",
     "lat": 14.72,
     "lng": -17.47,
     "emoji": "🇸🇳",
     "suspect": {
      "name": "Dee Plomat",
      "alias": "The Envoy",
      "emoji": "🎩"
     },
     "facts": [
      {
       "id": "cap-dakar-1",
       "clue": "____ is the capital of Senegal.",
       "fact": "Dakar is the capital of Senegal.",
       "sources": [
        {
         "title": "Dakar",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Dakar"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-nouakchott",
     "name": "Nouakchott",
     "region": "Mauritania",
     "lat": 18.08,
     "lng": -15.98,
     "emoji": "🇲🇷",
     "suspect": {
      "name": "Ann Exe",
      "alias": "The Annexer",
      "emoji": "📜"
     },
     "facts": [
      {
       "id": "cap-nouakchott-1",
       "clue": "____, the capital of Mauritania, was built from a small fishing village around independence in 1960.",
       "fact": "Nouakchott, the capital of Mauritania, was built from a small fishing village around independence in 1960.",
       "sources": [
        {
         "title": "Nouakchott",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Nouakchott"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-asmara",
     "name": "Asmara",
     "region": "Eritrea",
     "lat": 15.32,
     "lng": 38.93,
     "emoji": "🇪🇷",
     "suspect": {
      "name": "Cora Capitol",
      "alias": "The Seat Warmer",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "cap-asmara-1",
       "clue": "____, the capital of Eritrea, is known for its 1930s modernist buildings.",
       "fact": "Asmara, the capital of Eritrea, is known for its 1930s modernist buildings.",
       "sources": [
        {
         "title": "Asmara",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Asmara"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-libreville",
     "name": "Libreville",
     "region": "Gabon",
     "lat": 0.39,
     "lng": 9.45,
     "emoji": "🇬🇦",
     "suspect": {
      "name": "Rex Regalia",
      "alias": "The Crown Jewel",
      "emoji": "👑"
     },
     "facts": [
      {
       "id": "cap-libreville-1",
       "clue": "____ is the capital of Gabon.",
       "fact": "Libreville is the capital of Gabon.",
       "sources": [
        {
         "title": "Libreville",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Libreville"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-kinshasa",
     "name": "Kinshasa",
     "region": "DR Congo",
     "lat": -4.32,
     "lng": 15.31,
     "emoji": "🇨🇩",
     "suspect": {
      "name": "Polly Ticks",
      "alias": "The Filibuster",
      "emoji": "🗳️"
     },
     "facts": [
      {
       "id": "cap-kinshasa-1",
       "clue": "____, the capital of DR Congo, faces Brazzaville, the capital of the Republic of the Congo, across the Congo River.",
       "fact": "Kinshasa, the capital of DR Congo, faces Brazzaville, the capital of the Republic of the Congo, across the Congo River.",
       "sources": [
        {
         "title": "Kinshasa",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Kinshasa"
        },
        {
         "title": "Brazzaville",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Brazzaville"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-praia",
     "name": "Praia",
     "region": "Cape Verde",
     "lat": 14.93,
     "lng": -23.51,
     "emoji": "🇨🇻",
     "suspect": {
      "name": "Max Mapleton",
      "alias": "The Border Hopper",
      "emoji": "🗺️"
     },
     "facts": [
      {
       "id": "cap-praia-1",
       "clue": "____ is the capital of Cape Verde.",
       "fact": "Praia is the capital of Cape Verde.",
       "sources": [
        {
         "title": "Praia",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Praia"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-gaborone",
     "name": "Gaborone",
     "region": "Botswana",
     "lat": -24.65,
     "lng": 25.91,
     "emoji": "🇧🇼",
     "suspect": {
      "name": "Dee Plomat",
      "alias": "The Envoy",
      "emoji": "🎩"
     },
     "facts": [
      {
       "id": "cap-gaborone-1",
       "clue": "____ is the capital of Botswana.",
       "fact": "Gaborone is the capital of Botswana.",
       "sources": [
        {
         "title": "Gaborone",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Gaborone"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-moroni",
     "name": "Moroni",
     "region": "Comoros",
     "lat": -11.7,
     "lng": 43.26,
     "emoji": "🇰🇲",
     "suspect": {
      "name": "Ann Exe",
      "alias": "The Annexer",
      "emoji": "📜"
     },
     "facts": [
      {
       "id": "cap-moroni-1",
       "clue": "____ is the capital of Comoros.",
       "fact": "Moroni is the capital of Comoros.",
       "sources": [
        {
         "title": "Moroni, Comoros",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Moroni,_Comoros"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "capitals-americas-carmen",
   "title": "Where in the Capitals of the Americas is Carmen Sandiego?",
   "places": [
    {
     "id": "cap-ottawa",
     "name": "Ottawa",
     "region": "Canada",
     "lat": 45.42,
     "lng": -75.7,
     "emoji": "🇨🇦",
     "suspect": {
      "name": "Cora Capitol",
      "alias": "The Seat Warmer",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "cap-ottawa-1",
       "clue": "____, the capital of Canada, was chosen by Queen Victoria in 1857 as capital of the colonial Province of Canada, a decade before Confederation.",
       "fact": "Ottawa, the capital of Canada, was chosen by Queen Victoria in 1857 as capital of the colonial Province of Canada, a decade before Confederation.",
       "sources": [
        {
         "title": "Ottawa",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Ottawa"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-brasilia",
     "name": "Brasília",
     "region": "Brazil",
     "lat": -15.79,
     "lng": -47.88,
     "emoji": "🇧🇷",
     "suspect": {
      "name": "Rex Regalia",
      "alias": "The Crown Jewel",
      "emoji": "👑"
     },
     "facts": [
      {
       "id": "cap-brasilia-1",
       "clue": "____, the capital of Brazil, was built from scratch and opened in 1960.",
       "fact": "Brasília, the capital of Brazil, was built from scratch and opened in 1960.",
       "sources": [
        {
         "title": "Brasília",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Bras%C3%ADlia"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-rio-de-janeiro",
     "name": "Rio de Janeiro",
     "region": "Brazil",
     "lat": -22.91,
     "lng": -43.17,
     "emoji": "🇧🇷",
     "suspect": {
      "name": "Polly Ticks",
      "alias": "The Filibuster",
      "emoji": "🗳️"
     },
     "facts": [
      {
       "id": "cap-rio-de-janeiro-1",
       "clue": "____ served as the colonial, royal, and national capital of Brazil from 1763 to 1960, after Salvador and before Brasília.",
       "fact": "Rio de Janeiro served as the colonial, royal, and national capital of Brazil from 1763 to 1960, after Salvador and before Brasília.",
       "sources": [
        {
         "title": "Rio de Janeiro",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Rio_de_Janeiro"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-sucre",
     "name": "Sucre",
     "region": "Bolivia",
     "lat": -19.05,
     "lng": -65.26,
     "emoji": "🇧🇴",
     "suspect": {
      "name": "Max Mapleton",
      "alias": "The Border Hopper",
      "emoji": "🗺️"
     },
     "facts": [
      {
       "id": "cap-sucre-1",
       "clue": "____ is the constitutional capital of Bolivia and home to its Supreme Court, while the executive and legislature sit in La Paz.",
       "fact": "Sucre is the constitutional capital of Bolivia and home to its Supreme Court, while the executive and legislature sit in La Paz.",
       "sources": [
        {
         "title": "Sucre",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Sucre"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-la-paz",
     "name": "La Paz",
     "region": "Bolivia",
     "lat": -16.5,
     "lng": -68.15,
     "emoji": "🇧🇴",
     "suspect": {
      "name": "Dee Plomat",
      "alias": "The Envoy",
      "emoji": "🎩"
     },
     "facts": [
      {
       "id": "cap-la-paz-1",
       "clue": "____, Bolivia, is the highest seat of government in the world, about 3,600 meters up.",
       "fact": "La Paz, Bolivia, is the highest seat of government in the world, about 3,600 meters up.",
       "sources": [
        {
         "title": "La Paz",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/La_Paz"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-quito",
     "name": "Quito",
     "region": "Ecuador",
     "lat": -0.18,
     "lng": -78.47,
     "emoji": "🇪🇨",
     "suspect": {
      "name": "Ann Exe",
      "alias": "The Annexer",
      "emoji": "📜"
     },
     "facts": [
      {
       "id": "cap-quito-1",
       "clue": "____ is the capital of Ecuador.",
       "fact": "Quito is the capital of Ecuador.",
       "sources": [
        {
         "title": "Quito",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Quito"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-belmopan",
     "name": "Belmopan",
     "region": "Belize",
     "lat": 17.25,
     "lng": -88.76,
     "emoji": "🇧🇿",
     "suspect": {
      "name": "Cora Capitol",
      "alias": "The Seat Warmer",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "cap-belmopan-1",
       "clue": "____, the capital of Belize, was built inland after a 1961 hurricane hit Belize City.",
       "fact": "Belmopan, the capital of Belize, was built inland after a 1961 hurricane hit Belize City.",
       "sources": [
        {
         "title": "Belmopan",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Belmopan"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-tegucigalpa",
     "name": "Tegucigalpa",
     "region": "Honduras",
     "lat": 14.07,
     "lng": -87.19,
     "emoji": "🇭🇳",
     "suspect": {
      "name": "Rex Regalia",
      "alias": "The Crown Jewel",
      "emoji": "👑"
     },
     "facts": [
      {
       "id": "cap-tegucigalpa-1",
       "clue": "____, together with its sister city Comayagüela, forms the constitutional capital of Honduras.",
       "fact": "Tegucigalpa, together with its sister city Comayagüela, forms the constitutional capital of Honduras.",
       "sources": [
        {
         "title": "Tegucigalpa",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Tegucigalpa"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-buenos-aires",
     "name": "Buenos Aires",
     "region": "Argentina",
     "lat": -34.6,
     "lng": -58.38,
     "emoji": "🇦🇷",
     "suspect": {
      "name": "Polly Ticks",
      "alias": "The Filibuster",
      "emoji": "🗳️"
     },
     "facts": [
      {
       "id": "cap-buenos-aires-1",
       "clue": "____ is the capital of Argentina.",
       "fact": "Buenos Aires is the capital of Argentina.",
       "sources": [
        {
         "title": "Buenos Aires",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Buenos_Aires"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-mexico-city",
     "name": "Mexico City",
     "region": "Mexico",
     "lat": 19.43,
     "lng": -99.13,
     "emoji": "🇲🇽",
     "suspect": {
      "name": "Max Mapleton",
      "alias": "The Border Hopper",
      "emoji": "🗺️"
     },
     "facts": [
      {
       "id": "cap-mexico-city-1",
       "clue": "____ was built on the site of the Aztec capital Tenochtitlan.",
       "fact": "Mexico City was built on the site of the Aztec capital Tenochtitlan.",
       "sources": [
        {
         "title": "Mexico City",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Mexico_City"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-lima",
     "name": "Lima",
     "region": "Peru",
     "lat": -12.05,
     "lng": -77.04,
     "emoji": "🇵🇪",
     "suspect": {
      "name": "Dee Plomat",
      "alias": "The Envoy",
      "emoji": "🎩"
     },
     "facts": [
      {
       "id": "cap-lima-1",
       "clue": "____ is the capital of Peru.",
       "fact": "Lima is the capital of Peru.",
       "sources": [
        {
         "title": "Lima",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Lima"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-valparaiso",
     "name": "Valparaíso",
     "region": "Chile",
     "lat": -33.05,
     "lng": -71.62,
     "emoji": "🇨🇱",
     "suspect": {
      "name": "Ann Exe",
      "alias": "The Annexer",
      "emoji": "📜"
     },
     "facts": [
      {
       "id": "cap-valparaiso-1",
       "clue": "Chile's National Congress has met in ____ since 1990. Santiago is the capital.",
       "fact": "Chile's National Congress has met in Valparaíso since 1990. Santiago is the capital.",
       "sources": [
        {
         "title": "National Congress of Chile",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/National_Congress_of_Chile"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-santo-domingo",
     "name": "Santo Domingo",
     "region": "Dominican Republic",
     "lat": 18.49,
     "lng": -69.93,
     "emoji": "🇩🇴",
     "suspect": {
      "name": "Cora Capitol",
      "alias": "The Seat Warmer",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "cap-santo-domingo-1",
       "clue": "____, the capital of the Dominican Republic, is the oldest continuously inhabited European-founded city in the Americas.",
       "fact": "Santo Domingo, the capital of the Dominican Republic, is the oldest continuously inhabited European-founded city in the Americas.",
       "sources": [
        {
         "title": "Santo Domingo",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Santo_Domingo"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-bogota",
     "name": "Bogotá",
     "region": "Colombia",
     "lat": 4.71,
     "lng": -74.07,
     "emoji": "🇨🇴",
     "suspect": {
      "name": "Rex Regalia",
      "alias": "The Crown Jewel",
      "emoji": "👑"
     },
     "facts": [
      {
       "id": "cap-bogota-1",
       "clue": "____ is the capital of Colombia.",
       "fact": "Bogotá is the capital of Colombia.",
       "sources": [
        {
         "title": "Bogotá",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Bogot%C3%A1"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-port-of-spain",
     "name": "Port of Spain",
     "region": "Trinidad and Tobago",
     "lat": 10.66,
     "lng": -61.51,
     "emoji": "🇹🇹",
     "suspect": {
      "name": "Polly Ticks",
      "alias": "The Filibuster",
      "emoji": "🗳️"
     },
     "facts": [
      {
       "id": "cap-port-of-spain-1",
       "clue": "____ is the capital of Trinidad and Tobago.",
       "fact": "Port of Spain is the capital of Trinidad and Tobago.",
       "sources": [
        {
         "title": "Port of Spain",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Port_of_Spain"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-kingston",
     "name": "Kingston",
     "region": "Jamaica",
     "lat": 17.97,
     "lng": -76.79,
     "emoji": "🇯🇲",
     "suspect": {
      "name": "Max Mapleton",
      "alias": "The Border Hopper",
      "emoji": "🗺️"
     },
     "facts": [
      {
       "id": "cap-kingston-1",
       "clue": "____ is the capital of Jamaica.",
       "fact": "Kingston is the capital of Jamaica.",
       "sources": [
        {
         "title": "Kingston, Jamaica",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Kingston,_Jamaica"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "capitals-asia-carmen",
   "title": "Where in Asia's Capitals is Carmen Sandiego?",
   "places": [
    {
     "id": "cap-manila",
     "name": "Manila",
     "region": "Philippines",
     "lat": 14.6,
     "lng": 120.98,
     "emoji": "🇵🇭",
     "suspect": {
      "name": "Cora Capitol",
      "alias": "The Seat Warmer",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "cap-manila-1",
       "clue": "____ is the capital of the Philippines.",
       "fact": "Manila is the capital of the Philippines.",
       "sources": [
        {
         "title": "Manila",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Manila"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-ankara",
     "name": "Ankara",
     "region": "Turkey",
     "lat": 39.93,
     "lng": 32.86,
     "emoji": "🇹🇷",
     "suspect": {
      "name": "Rex Regalia",
      "alias": "The Crown Jewel",
      "emoji": "👑"
     },
     "facts": [
      {
       "id": "cap-ankara-1",
       "clue": "____ has been the capital of Turkey since 1923.",
       "fact": "Ankara has been the capital of Turkey since 1923.",
       "sources": [
        {
         "title": "Ankara",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Ankara"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-istanbul",
     "name": "Istanbul",
     "region": "Turkey",
     "lat": 41.01,
     "lng": 28.98,
     "emoji": "🇹🇷",
     "suspect": {
      "name": "Polly Ticks",
      "alias": "The Filibuster",
      "emoji": "🗳️"
     },
     "facts": [
      {
       "id": "cap-istanbul-1",
       "clue": "____, once Constantinople, was the capital of the Ottoman Empire. Ankara became the capital of Turkey in 1923.",
       "fact": "Istanbul, once Constantinople, was the capital of the Ottoman Empire. Ankara became the capital of Turkey in 1923.",
       "sources": [
        {
         "title": "Istanbul",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Istanbul"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-astana",
     "name": "Astana",
     "region": "Kazakhstan",
     "lat": 51.17,
     "lng": 71.45,
     "emoji": "🇰🇿",
     "suspect": {
      "name": "Max Mapleton",
      "alias": "The Border Hopper",
      "emoji": "🗺️"
     },
     "facts": [
      {
       "id": "cap-astana-1",
       "clue": "____ is the capital of Kazakhstan. It was called Nur-Sultan from 2019 to 2022.",
       "fact": "Astana is the capital of Kazakhstan. It was called Nur-Sultan from 2019 to 2022.",
       "sources": [
        {
         "title": "Astana",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Astana"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-naypyidaw",
     "name": "Naypyidaw",
     "region": "Myanmar",
     "lat": 19.76,
     "lng": 96.08,
     "emoji": "🇲🇲",
     "suspect": {
      "name": "Dee Plomat",
      "alias": "The Envoy",
      "emoji": "🎩"
     },
     "facts": [
      {
       "id": "cap-naypyidaw-1",
       "clue": "____ replaced Yangon as the administrative capital of Myanmar in November 2005 and received its official name in March 2006.",
       "fact": "Naypyidaw replaced Yangon as the administrative capital of Myanmar in November 2005 and received its official name in March 2006.",
       "sources": [
        {
         "title": "Naypyidaw",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Naypyidaw"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-thimphu",
     "name": "Thimphu",
     "region": "Bhutan",
     "lat": 27.47,
     "lng": 89.64,
     "emoji": "🇧🇹",
     "suspect": {
      "name": "Ann Exe",
      "alias": "The Annexer",
      "emoji": "📜"
     },
     "facts": [
      {
       "id": "cap-thimphu-1",
       "clue": "____ is the capital of Bhutan.",
       "fact": "Thimphu is the capital of Bhutan.",
       "sources": [
        {
         "title": "Thimphu",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Thimphu"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-hanoi",
     "name": "Hanoi",
     "region": "Vietnam",
     "lat": 21.03,
     "lng": 105.85,
     "emoji": "🇻🇳",
     "suspect": {
      "name": "Cora Capitol",
      "alias": "The Seat Warmer",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "cap-hanoi-1",
       "clue": "____ is the capital of Vietnam.",
       "fact": "Hanoi is the capital of Vietnam.",
       "sources": [
        {
         "title": "Hanoi",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Hanoi"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-islamabad",
     "name": "Islamabad",
     "region": "Pakistan",
     "lat": 33.68,
     "lng": 73.05,
     "emoji": "🇵🇰",
     "suspect": {
      "name": "Rex Regalia",
      "alias": "The Crown Jewel",
      "emoji": "👑"
     },
     "facts": [
      {
       "id": "cap-islamabad-1",
       "clue": "____, the capital of Pakistan, is a planned city built in the 1960s.",
       "fact": "Islamabad, the capital of Pakistan, is a planned city built in the 1960s.",
       "sources": [
        {
         "title": "Islamabad",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Islamabad"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-karachi",
     "name": "Karachi",
     "region": "Pakistan",
     "lat": 24.86,
     "lng": 67.01,
     "emoji": "🇵🇰",
     "suspect": {
      "name": "Polly Ticks",
      "alias": "The Filibuster",
      "emoji": "🗳️"
     },
     "facts": [
      {
       "id": "cap-karachi-1",
       "clue": "____ served as the first federal capital of Pakistan starting in 1947; Rawalpindi later served as interim capital while Islamabad was built.",
       "fact": "Karachi served as the first federal capital of Pakistan starting in 1947; Rawalpindi later served as interim capital while Islamabad was built.",
       "sources": [
        {
         "title": "Karachi",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Karachi"
        },
        {
         "title": "Islamabad",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Islamabad"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-kuala-lumpur",
     "name": "Kuala Lumpur",
     "region": "Malaysia",
     "lat": 3.14,
     "lng": 101.69,
     "emoji": "🇲🇾",
     "suspect": {
      "name": "Max Mapleton",
      "alias": "The Border Hopper",
      "emoji": "🗺️"
     },
     "facts": [
      {
       "id": "cap-kuala-lumpur-1",
       "clue": "____ is the capital of Malaysia, though most government offices moved to Putrajaya.",
       "fact": "Kuala Lumpur is the capital of Malaysia, though most government offices moved to Putrajaya.",
       "sources": [
        {
         "title": "Kuala Lumpur",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Kuala_Lumpur"
        },
        {
         "title": "Putrajaya",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Putrajaya"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-sri-jayawardenepura-kotte",
     "name": "Sri Jayawardenepura Kotte",
     "region": "Sri Lanka",
     "lat": 6.89,
     "lng": 79.92,
     "emoji": "🇱🇰",
     "suspect": {
      "name": "Dee Plomat",
      "alias": "The Envoy",
      "emoji": "🎩"
     },
     "facts": [
      {
       "id": "cap-sri-jayawardenepura-kotte-1",
       "clue": "____, a city bordering Colombo where parliament sits, became the island nation's official capital in 1982.",
       "fact": "Sri Jayawardenepura Kotte, a city bordering Colombo where parliament sits, became the official capital of Sri Lanka in 1982.",
       "sources": [
        {
         "title": "Sri Jayawardenepura Kotte",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Sri_Jayawardenepura_Kotte"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-new-delhi",
     "name": "New Delhi",
     "region": "India",
     "lat": 28.61,
     "lng": 77.21,
     "emoji": "🇮🇳",
     "suspect": {
      "name": "Ann Exe",
      "alias": "The Annexer",
      "emoji": "📜"
     },
     "facts": [
      {
       "id": "cap-new-delhi-1",
       "clue": "____ is the capital of India.",
       "fact": "New Delhi is the capital of India.",
       "sources": [
        {
         "title": "New Delhi",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/New_Delhi"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-beijing",
     "name": "Beijing",
     "region": "China",
     "lat": 39.9,
     "lng": 116.41,
     "emoji": "🇨🇳",
     "suspect": {
      "name": "Cora Capitol",
      "alias": "The Seat Warmer",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "cap-beijing-1",
       "clue": "____ is the capital of China.",
       "fact": "Beijing is the capital of China.",
       "sources": [
        {
         "title": "Beijing",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Beijing"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-vientiane",
     "name": "Vientiane",
     "region": "Laos",
     "lat": 17.98,
     "lng": 102.63,
     "emoji": "🇱🇦",
     "suspect": {
      "name": "Rex Regalia",
      "alias": "The Crown Jewel",
      "emoji": "👑"
     },
     "facts": [
      {
       "id": "cap-vientiane-1",
       "clue": "____ is the capital of Laos.",
       "fact": "Vientiane is the capital of Laos.",
       "sources": [
        {
         "title": "Vientiane",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Vientiane"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-tashkent",
     "name": "Tashkent",
     "region": "Uzbekistan",
     "lat": 41.3,
     "lng": 69.24,
     "emoji": "🇺🇿",
     "suspect": {
      "name": "Polly Ticks",
      "alias": "The Filibuster",
      "emoji": "🗳️"
     },
     "facts": [
      {
       "id": "cap-tashkent-1",
       "clue": "____ is the capital of Uzbekistan.",
       "fact": "Tashkent is the capital of Uzbekistan.",
       "sources": [
        {
         "title": "Tashkent",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Tashkent"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-bishkek",
     "name": "Bishkek",
     "region": "Kyrgyzstan",
     "lat": 42.87,
     "lng": 74.59,
     "emoji": "🇰🇬",
     "suspect": {
      "name": "Max Mapleton",
      "alias": "The Border Hopper",
      "emoji": "🗺️"
     },
     "facts": [
      {
       "id": "cap-bishkek-1",
       "clue": "____ is the capital of Kyrgyzstan.",
       "fact": "Bishkek is the capital of Kyrgyzstan.",
       "sources": [
        {
         "title": "Bishkek",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Bishkek"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-seoul",
     "name": "Seoul",
     "region": "South Korea",
     "lat": 37.57,
     "lng": 126.98,
     "emoji": "🇰🇷",
     "suspect": {
      "name": "Dee Plomat",
      "alias": "The Envoy",
      "emoji": "🎩"
     },
     "facts": [
      {
       "id": "cap-seoul-1",
       "clue": "____ is the capital of South Korea.",
       "fact": "Seoul is the capital of South Korea.",
       "sources": [
        {
         "title": "Seoul",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Seoul"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-tokyo",
     "name": "Tokyo",
     "region": "Japan",
     "lat": 35.68,
     "lng": 139.69,
     "emoji": "🇯🇵",
     "suspect": {
      "name": "Ann Exe",
      "alias": "The Annexer",
      "emoji": "📜"
     },
     "facts": [
      {
       "id": "cap-tokyo-1",
       "clue": "____ is the capital of Japan.",
       "fact": "Tokyo is the capital of Japan.",
       "sources": [
        {
         "title": "Tokyo",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Tokyo"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-kyoto",
     "name": "Kyoto",
     "region": "Japan",
     "lat": 35.01,
     "lng": 135.77,
     "emoji": "🇯🇵",
     "suspect": {
      "name": "Cora Capitol",
      "alias": "The Seat Warmer",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "cap-kyoto-1",
       "clue": "____ was the imperial capital of Japan from 794 until the emperor moved to Tokyo in 1869.",
       "fact": "Kyoto was the imperial capital of Japan from 794 until the emperor moved to Tokyo in 1869.",
       "sources": [
        {
         "title": "Kyoto",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Kyoto"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-tbilisi",
     "name": "Tbilisi",
     "region": "Georgia",
     "lat": 41.72,
     "lng": 44.79,
     "emoji": "🇬🇪",
     "suspect": {
      "name": "Rex Regalia",
      "alias": "The Crown Jewel",
      "emoji": "👑"
     },
     "facts": [
      {
       "id": "cap-tbilisi-1",
       "clue": "____ is the capital of Georgia, the country.",
       "fact": "Tbilisi is the capital of Georgia, the country.",
       "sources": [
        {
         "title": "Tbilisi",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Tbilisi"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-dushanbe",
     "name": "Dushanbe",
     "region": "Tajikistan",
     "lat": 38.56,
     "lng": 68.79,
     "emoji": "🇹🇯",
     "suspect": {
      "name": "Polly Ticks",
      "alias": "The Filibuster",
      "emoji": "🗳️"
     },
     "facts": [
      {
       "id": "cap-dushanbe-1",
       "clue": "____ is the capital of Tajikistan.",
       "fact": "Dushanbe is the capital of Tajikistan.",
       "sources": [
        {
         "title": "Dushanbe",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Dushanbe"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-ashgabat",
     "name": "Ashgabat",
     "region": "Turkmenistan",
     "lat": 37.96,
     "lng": 58.33,
     "emoji": "🇹🇲",
     "suspect": {
      "name": "Max Mapleton",
      "alias": "The Border Hopper",
      "emoji": "🗺️"
     },
     "facts": [
      {
       "id": "cap-ashgabat-1",
       "clue": "____ is the capital of Turkmenistan.",
       "fact": "Ashgabat is the capital of Turkmenistan.",
       "sources": [
        {
         "title": "Ashgabat",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Ashgabat"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-bandar-seri-begawan",
     "name": "Bandar Seri Begawan",
     "region": "Brunei",
     "lat": 4.89,
     "lng": 114.94,
     "emoji": "🇧🇳",
     "suspect": {
      "name": "Dee Plomat",
      "alias": "The Envoy",
      "emoji": "🎩"
     },
     "facts": [
      {
       "id": "cap-bandar-seri-begawan-1",
       "clue": "____ is the capital of Brunei.",
       "fact": "Bandar Seri Begawan is the capital of Brunei.",
       "sources": [
        {
         "title": "Bandar Seri Begawan",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Bandar_Seri_Begawan"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-damascus",
     "name": "Damascus",
     "region": "Syria",
     "lat": 33.51,
     "lng": 36.29,
     "emoji": "🇸🇾",
     "suspect": {
      "name": "Ann Exe",
      "alias": "The Annexer",
      "emoji": "📜"
     },
     "facts": [
      {
       "id": "cap-damascus-1",
       "clue": "____, the capital of Syria, is one of the oldest continuously inhabited cities.",
       "fact": "Damascus, the capital of Syria, is one of the oldest continuously inhabited cities.",
       "sources": [
        {
         "title": "Damascus",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Damascus"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-abu-dhabi",
     "name": "Abu Dhabi",
     "region": "United Arab Emirates",
     "lat": 24.45,
     "lng": 54.38,
     "emoji": "🇦🇪",
     "suspect": {
      "name": "Cora Capitol",
      "alias": "The Seat Warmer",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "cap-abu-dhabi-1",
       "clue": "____ is the capital of the United Arab Emirates.",
       "fact": "Abu Dhabi is the capital of the United Arab Emirates.",
       "sources": [
        {
         "title": "Abu Dhabi",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Abu_Dhabi"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-riyadh",
     "name": "Riyadh",
     "region": "Saudi Arabia",
     "lat": 24.71,
     "lng": 46.68,
     "emoji": "🇸🇦",
     "suspect": {
      "name": "Rex Regalia",
      "alias": "The Crown Jewel",
      "emoji": "👑"
     },
     "facts": [
      {
       "id": "cap-riyadh-1",
       "clue": "____ is the capital of Saudi Arabia.",
       "fact": "Riyadh is the capital of Saudi Arabia.",
       "sources": [
        {
         "title": "Riyadh",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Riyadh"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "capitals-europe-carmen",
   "title": "Where in Europe's Capitals is Carmen Sandiego?",
   "places": [
    {
     "id": "cap-bern",
     "name": "Bern",
     "region": "Switzerland",
     "lat": 46.95,
     "lng": 7.45,
     "emoji": "🇨🇭",
     "suspect": {
      "name": "Cora Capitol",
      "alias": "The Seat Warmer",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "cap-bern-1",
       "clue": "____ is the seat of government of Switzerland. The Swiss call it the \"federal city\"; the constitution names no capital.",
       "fact": "Bern is the seat of government of Switzerland. The Swiss call it the \"federal city\"; the constitution names no capital.",
       "sources": [
        {
         "title": "Bern",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Bern"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-amsterdam",
     "name": "Amsterdam",
     "region": "Netherlands",
     "lat": 52.37,
     "lng": 4.9,
     "emoji": "🇳🇱",
     "suspect": {
      "name": "Rex Regalia",
      "alias": "The Crown Jewel",
      "emoji": "👑"
     },
     "facts": [
      {
       "id": "cap-amsterdam-1",
       "clue": "____ is the capital of the Netherlands, though the government and king work in The Hague.",
       "fact": "Amsterdam is the capital of the Netherlands, though the government and king work in The Hague.",
       "sources": [
        {
         "title": "Amsterdam",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Amsterdam"
        },
        {
         "title": "The Hague",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/The_Hague"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-skopje",
     "name": "Skopje",
     "region": "North Macedonia",
     "lat": 42,
     "lng": 21.43,
     "emoji": "🇲🇰",
     "suspect": {
      "name": "Polly Ticks",
      "alias": "The Filibuster",
      "emoji": "🗳️"
     },
     "facts": [
      {
       "id": "cap-skopje-1",
       "clue": "____ is the capital of North Macedonia.",
       "fact": "Skopje is the capital of North Macedonia.",
       "sources": [
        {
         "title": "Skopje",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Skopje"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-chisinau",
     "name": "Chișinău",
     "region": "Moldova",
     "lat": 47.01,
     "lng": 28.86,
     "emoji": "🇲🇩",
     "suspect": {
      "name": "Max Mapleton",
      "alias": "The Border Hopper",
      "emoji": "🗺️"
     },
     "facts": [
      {
       "id": "cap-chisinau-1",
       "clue": "____ is the capital of Moldova.",
       "fact": "Chișinău is the capital of Moldova.",
       "sources": [
        {
         "title": "Chișinău",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Chi%C8%99in%C4%83u"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-edinburgh",
     "name": "Edinburgh",
     "region": "Scotland",
     "lat": 55.95,
     "lng": -3.19,
     "emoji": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
     "suspect": {
      "name": "Dee Plomat",
      "alias": "The Envoy",
      "emoji": "🎩"
     },
     "facts": [
      {
       "id": "cap-edinburgh-1",
       "clue": "____ is the capital of Scotland.",
       "fact": "Edinburgh is the capital of Scotland.",
       "sources": [
        {
         "title": "Edinburgh",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Edinburgh"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-berlin",
     "name": "Berlin",
     "region": "Germany",
     "lat": 52.52,
     "lng": 13.4,
     "emoji": "🇩🇪",
     "suspect": {
      "name": "Ann Exe",
      "alias": "The Annexer",
      "emoji": "📜"
     },
     "facts": [
      {
       "id": "cap-berlin-1",
       "clue": "____ is the capital of Germany. Bonn was West Germany's capital until reunification.",
       "fact": "Berlin is the capital of Germany. Bonn was West Germany's capital until reunification.",
       "sources": [
        {
         "title": "Berlin",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Berlin"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-ljubljana",
     "name": "Ljubljana",
     "region": "Slovenia",
     "lat": 46.06,
     "lng": 14.51,
     "emoji": "🇸🇮",
     "suspect": {
      "name": "Cora Capitol",
      "alias": "The Seat Warmer",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "cap-ljubljana-1",
       "clue": "____ is the capital of Slovenia.",
       "fact": "Ljubljana is the capital of Slovenia.",
       "sources": [
        {
         "title": "Ljubljana",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Ljubljana"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-zagreb",
     "name": "Zagreb",
     "region": "Croatia",
     "lat": 45.81,
     "lng": 15.98,
     "emoji": "🇭🇷",
     "suspect": {
      "name": "Rex Regalia",
      "alias": "The Crown Jewel",
      "emoji": "👑"
     },
     "facts": [
      {
       "id": "cap-zagreb-1",
       "clue": "____ is the capital of Croatia.",
       "fact": "Zagreb is the capital of Croatia.",
       "sources": [
        {
         "title": "Zagreb",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Zagreb"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-sarajevo",
     "name": "Sarajevo",
     "region": "Bosnia and Herzegovina",
     "lat": 43.86,
     "lng": 18.41,
     "emoji": "🇧🇦",
     "suspect": {
      "name": "Polly Ticks",
      "alias": "The Filibuster",
      "emoji": "🗳️"
     },
     "facts": [
      {
       "id": "cap-sarajevo-1",
       "clue": "____ is the capital of Bosnia and Herzegovina.",
       "fact": "Sarajevo is the capital of Bosnia and Herzegovina.",
       "sources": [
        {
         "title": "Sarajevo",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Sarajevo"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-moscow",
     "name": "Moscow",
     "region": "Russia",
     "lat": 55.76,
     "lng": 37.62,
     "emoji": "🇷🇺",
     "suspect": {
      "name": "Max Mapleton",
      "alias": "The Border Hopper",
      "emoji": "🗺️"
     },
     "facts": [
      {
       "id": "cap-moscow-1",
       "clue": "____ is the capital of Russia.",
       "fact": "Moscow is the capital of Russia.",
       "sources": [
        {
         "title": "Moscow",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Moscow"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-madrid",
     "name": "Madrid",
     "region": "Spain",
     "lat": 40.42,
     "lng": -3.7,
     "emoji": "🇪🇸",
     "suspect": {
      "name": "Dee Plomat",
      "alias": "The Envoy",
      "emoji": "🎩"
     },
     "facts": [
      {
       "id": "cap-madrid-1",
       "clue": "____ is the capital of Spain.",
       "fact": "Madrid is the capital of Spain.",
       "sources": [
        {
         "title": "Madrid",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Madrid"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-vilnius",
     "name": "Vilnius",
     "region": "Lithuania",
     "lat": 54.69,
     "lng": 25.28,
     "emoji": "🇱🇹",
     "suspect": {
      "name": "Ann Exe",
      "alias": "The Annexer",
      "emoji": "📜"
     },
     "facts": [
      {
       "id": "cap-vilnius-1",
       "clue": "____ is the capital of Lithuania.",
       "fact": "Vilnius is the capital of Lithuania.",
       "sources": [
        {
         "title": "Vilnius",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Vilnius"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-helsinki",
     "name": "Helsinki",
     "region": "Finland",
     "lat": 60.17,
     "lng": 24.94,
     "emoji": "🇫🇮",
     "suspect": {
      "name": "Cora Capitol",
      "alias": "The Seat Warmer",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "cap-helsinki-1",
       "clue": "____ became capital of the Grand Duchy of Finland in 1812 and has remained the capital of independent Finland since 1917.",
       "fact": "Helsinki became capital of the Grand Duchy of Finland in 1812 and has remained the capital of independent Finland since 1917.",
       "sources": [
        {
         "title": "Helsinki",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Helsinki"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-bucharest",
     "name": "Bucharest",
     "region": "Romania",
     "lat": 44.43,
     "lng": 26.1,
     "emoji": "🇷🇴",
     "suspect": {
      "name": "Rex Regalia",
      "alias": "The Crown Jewel",
      "emoji": "👑"
     },
     "facts": [
      {
       "id": "cap-bucharest-1",
       "clue": "____ is the capital of Romania.",
       "fact": "Bucharest is the capital of Romania.",
       "sources": [
        {
         "title": "Bucharest",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Bucharest"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-sofia",
     "name": "Sofia",
     "region": "Bulgaria",
     "lat": 42.7,
     "lng": 23.32,
     "emoji": "🇧🇬",
     "suspect": {
      "name": "Polly Ticks",
      "alias": "The Filibuster",
      "emoji": "🗳️"
     },
     "facts": [
      {
       "id": "cap-sofia-1",
       "clue": "____ is the capital of Bulgaria.",
       "fact": "Sofia is the capital of Bulgaria.",
       "sources": [
        {
         "title": "Sofia",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Sofia"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-athens",
     "name": "Athens",
     "region": "Greece",
     "lat": 37.98,
     "lng": 23.73,
     "emoji": "🇬🇷",
     "suspect": {
      "name": "Max Mapleton",
      "alias": "The Border Hopper",
      "emoji": "🗺️"
     },
     "facts": [
      {
       "id": "cap-athens-1",
       "clue": "____ is the capital of Greece.",
       "fact": "Athens is the capital of Greece.",
       "sources": [
        {
         "title": "Athens",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Athens"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-lisbon",
     "name": "Lisbon",
     "region": "Portugal",
     "lat": 38.72,
     "lng": -9.14,
     "emoji": "🇵🇹",
     "suspect": {
      "name": "Dee Plomat",
      "alias": "The Envoy",
      "emoji": "🎩"
     },
     "facts": [
      {
       "id": "cap-lisbon-1",
       "clue": "____ is the capital of Portugal.",
       "fact": "Lisbon is the capital of Portugal.",
       "sources": [
        {
         "title": "Lisbon",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Lisbon"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-valletta",
     "name": "Valletta",
     "region": "Malta",
     "lat": 35.9,
     "lng": 14.51,
     "emoji": "🇲🇹",
     "suspect": {
      "name": "Ann Exe",
      "alias": "The Annexer",
      "emoji": "📜"
     },
     "facts": [
      {
       "id": "cap-valletta-1",
       "clue": "____, the capital of Malta, covers 0.61 km², making it the smallest capital city in the European Union by area.",
       "fact": "Valletta, the capital of Malta, covers 0.61 km², making it the smallest capital city in the European Union by area.",
       "sources": [
        {
         "title": "Valletta",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Valletta"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-podgorica",
     "name": "Podgorica",
     "region": "Montenegro",
     "lat": 42.44,
     "lng": 19.26,
     "emoji": "🇲🇪",
     "suspect": {
      "name": "Cora Capitol",
      "alias": "The Seat Warmer",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "cap-podgorica-1",
       "clue": "____ is the capital of Montenegro.",
       "fact": "Podgorica is the capital of Montenegro.",
       "sources": [
        {
         "title": "Podgorica",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Podgorica"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-reykjavik",
     "name": "Reykjavík",
     "region": "Iceland",
     "lat": 64.15,
     "lng": -21.94,
     "emoji": "🇮🇸",
     "suspect": {
      "name": "Rex Regalia",
      "alias": "The Crown Jewel",
      "emoji": "👑"
     },
     "facts": [
      {
       "id": "cap-reykjavik-1",
       "clue": "____, the capital of Iceland, is the northernmost capital of a sovereign state in the world, at about 64° north.",
       "fact": "Reykjavík, the capital of Iceland, is the northernmost capital of a sovereign state in the world, at about 64° north.",
       "sources": [
        {
         "title": "Reykjavík",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Reykjav%C3%ADk"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-dublin",
     "name": "Dublin",
     "region": "Ireland",
     "lat": 53.35,
     "lng": -6.26,
     "emoji": "🇮🇪",
     "suspect": {
      "name": "Polly Ticks",
      "alias": "The Filibuster",
      "emoji": "🗳️"
     },
     "facts": [
      {
       "id": "cap-dublin-1",
       "clue": "____ is the capital of Ireland.",
       "fact": "Dublin is the capital of Ireland.",
       "sources": [
        {
         "title": "Dublin",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Dublin"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-warsaw",
     "name": "Warsaw",
     "region": "Poland",
     "lat": 52.23,
     "lng": 21.01,
     "emoji": "🇵🇱",
     "suspect": {
      "name": "Max Mapleton",
      "alias": "The Border Hopper",
      "emoji": "🗺️"
     },
     "facts": [
      {
       "id": "cap-warsaw-1",
       "clue": "____ is the capital of Poland.",
       "fact": "Warsaw is the capital of Poland.",
       "sources": [
        {
         "title": "Warsaw",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Warsaw"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "capitals-oceania-carmen",
   "title": "Where in Oceania's Capitals is Carmen Sandiego?",
   "places": [
    {
     "id": "cap-canberra",
     "name": "Canberra",
     "region": "Australia",
     "lat": -35.28,
     "lng": 149.13,
     "emoji": "🇦🇺",
     "suspect": {
      "name": "Cora Capitol",
      "alias": "The Seat Warmer",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "cap-canberra-1",
       "clue": "____, the capital of Australia, was built as a compromise between rivals Sydney and Melbourne.",
       "fact": "Canberra, the capital of Australia, was built as a compromise between rivals Sydney and Melbourne.",
       "sources": [
        {
         "title": "Canberra",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Canberra"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-wellington",
     "name": "Wellington",
     "region": "New Zealand",
     "lat": -41.29,
     "lng": 174.78,
     "emoji": "🇳🇿",
     "suspect": {
      "name": "Rex Regalia",
      "alias": "The Crown Jewel",
      "emoji": "👑"
     },
     "facts": [
      {
       "id": "cap-wellington-1",
       "clue": "____ has been the capital of New Zealand since 1865.",
       "fact": "Wellington has been the capital of New Zealand since 1865.",
       "sources": [
        {
         "title": "Wellington",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Wellington"
        }
       ]
      },
      {
       "id": "cap-wellington-2",
       "clue": "____ is the southernmost capital of a sovereign state in the world, at about 41° south.",
       "fact": "Wellington is the southernmost capital of a sovereign state in the world, at about 41° south.",
       "sources": [
        {
         "title": "Wellington",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Wellington"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-suva",
     "name": "Suva",
     "region": "Fiji",
     "lat": -18.14,
     "lng": 178.44,
     "emoji": "🇫🇯",
     "suspect": {
      "name": "Polly Ticks",
      "alias": "The Filibuster",
      "emoji": "🗳️"
     },
     "facts": [
      {
       "id": "cap-suva-1",
       "clue": "____ is the capital of Fiji.",
       "fact": "Suva is the capital of Fiji.",
       "sources": [
        {
         "title": "Suva",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Suva"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-port-moresby",
     "name": "Port Moresby",
     "region": "Papua New Guinea",
     "lat": -9.44,
     "lng": 147.18,
     "emoji": "🇵🇬",
     "suspect": {
      "name": "Max Mapleton",
      "alias": "The Border Hopper",
      "emoji": "🗺️"
     },
     "facts": [
      {
       "id": "cap-port-moresby-1",
       "clue": "____ is the capital of Papua New Guinea.",
       "fact": "Port Moresby is the capital of Papua New Guinea.",
       "sources": [
        {
         "title": "Port Moresby",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Port_Moresby"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-ngerulmud",
     "name": "Ngerulmud",
     "region": "Palau",
     "lat": 7.5,
     "lng": 134.62,
     "emoji": "🇵🇼",
     "suspect": {
      "name": "Dee Plomat",
      "alias": "The Envoy",
      "emoji": "🎩"
     },
     "facts": [
      {
       "id": "cap-ngerulmud-1",
       "clue": "____ has been the capital of Palau since 2006.",
       "fact": "Ngerulmud has been the capital of Palau since 2006.",
       "sources": [
        {
         "title": "Ngerulmud",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Ngerulmud"
        }
       ]
      }
     ]
    },
    {
     "id": "cap-palikir",
     "name": "Palikir",
     "region": "Federated States of Micronesia",
     "lat": 6.92,
     "lng": 158.16,
     "emoji": "🇫🇲",
     "suspect": {
      "name": "Ann Exe",
      "alias": "The Annexer",
      "emoji": "📜"
     },
     "facts": [
      {
       "id": "cap-palikir-1",
       "clue": "____ is the capital of the Federated States of Micronesia.",
       "fact": "Palikir is the capital of the Federated States of Micronesia.",
       "sources": [
        {
         "title": "Palikir",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Palikir"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "dish-origins-carmen",
   "title": "Where in the World's Kitchens is Carmen Sandiego?",
   "places": [
    {
     "id": "dish-japan",
     "name": "Japan",
     "region": "Asia",
     "lat": 36.2,
     "lng": 138.3,
     "emoji": "🇯🇵",
     "suspect": {
      "name": "Sal Monella",
      "alias": "The Leftover",
      "emoji": "🥡"
     },
     "facts": [
      {
       "id": "dish-japan-1",
       "clue": "Sushi comes from ____.",
       "fact": "Sushi comes from Japan.",
       "sources": [
        {
         "title": "Sushi",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Sushi"
        }
       ]
      },
      {
       "id": "dish-japan-2",
       "clue": "Tempura comes from ____. Portuguese missionaries brought the frying style there in the 1500s.",
       "fact": "Tempura comes from Japan. Portuguese missionaries brought the frying style there in the 1500s.",
       "sources": [
        {
         "title": "Tempura",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Tempura"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-thailand",
     "name": "Thailand",
     "region": "Asia",
     "lat": 15.9,
     "lng": 101,
     "emoji": "🇹🇭",
     "suspect": {
      "name": "Basil Thyme",
      "alias": "The Garnish",
      "emoji": "🌿"
     },
     "facts": [
      {
       "id": "dish-thailand-2",
       "clue": "Massaman curry comes from ____. Its name and spices show Persian and Malay influence.",
       "fact": "Massaman curry comes from Thailand. Its name and spices show Persian and Malay influence.",
       "sources": [
        {
         "title": "Massaman curry",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Massaman_curry"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-korea",
     "name": "Korea",
     "region": "Asia",
     "lat": 36.5,
     "lng": 127.9,
     "emoji": "🇰🇷",
     "suspect": {
      "name": "Ginger Snapp",
      "alias": "The Pastry Thief",
      "emoji": "🥐"
     },
     "facts": [
      {
       "id": "dish-korea-1",
       "clue": "Kimchi comes from ____.",
       "fact": "Kimchi comes from Korea.",
       "sources": [
        {
         "title": "Kimchi",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Kimchi"
        }
       ]
      },
      {
       "id": "dish-korea-2",
       "clue": "Bibimbap comes from ____.",
       "fact": "Bibimbap comes from Korea.",
       "sources": [
        {
         "title": "Bibimbap",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Bibimbap"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-mexico",
     "name": "Mexico",
     "region": "North America",
     "lat": 23.6,
     "lng": -102.6,
     "emoji": "🇲🇽",
     "suspect": {
      "name": "Mack Aroni",
      "alias": "The Noodle Bandit",
      "emoji": "🍝"
     },
     "facts": [
      {
       "id": "dish-mexico-1",
       "clue": "The Caesar salad comes from ____. Italian-born chef Caesar Cardini created it in Tijuana in the 1920s.",
       "fact": "The Caesar salad comes from Mexico. Italian-born chef Caesar Cardini created it in Tijuana in the 1920s.",
       "sources": [
        {
         "title": "Caesar salad",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Caesar_salad"
        }
       ]
      },
      {
       "id": "dish-mexico-2",
       "clue": "Nachos come from ____. Ignacio \"Nacho\" Anaya made them in Piedras Negras in 1943.",
       "fact": "Nachos come from Mexico. Ignacio \"Nacho\" Anaya made them in Piedras Negras in 1943.",
       "sources": [
        {
         "title": "Nachos",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Nachos"
        }
       ]
      },
      {
       "id": "dish-mexico-3",
       "clue": "Tacos come from ____.",
       "fact": "Tacos come from Mexico.",
       "sources": [
        {
         "title": "Taco",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Taco"
        }
       ]
      },
      {
       "id": "dish-mexico-4",
       "clue": "Mole poblano comes from Puebla, ____.",
       "fact": "Mole poblano comes from Puebla, Mexico.",
       "sources": [
        {
         "title": "Mole (sauce)",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Mole_(sauce)"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-canada",
     "name": "Canada",
     "region": "North America",
     "lat": 56.1,
     "lng": -106.3,
     "emoji": "🇨🇦",
     "suspect": {
      "name": "Penny Rolls",
      "alias": "The Doughnapper",
      "emoji": "🥯"
     },
     "facts": [
      {
       "id": "dish-canada-1",
       "clue": "Hawaiian pizza comes from ____. Greek-born Sam Panopoulos invented it in Ontario in 1962.",
       "fact": "Hawaiian pizza comes from Canada. Greek-born Sam Panopoulos invented it in Ontario in 1962.",
       "sources": [
        {
         "title": "Hawaiian pizza",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Hawaiian_pizza"
        }
       ]
      },
      {
       "id": "dish-canada-2",
       "clue": "Poutine, fries with cheese curds and gravy, comes from Quebec, ____.",
       "fact": "Poutine, fries with cheese curds and gravy, comes from Quebec, Canada.",
       "sources": [
        {
         "title": "Poutine",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Poutine"
        }
       ]
      },
      {
       "id": "dish-canada-3",
       "clue": "Butter tarts come from ____.",
       "fact": "Butter tarts come from Canada.",
       "sources": [
        {
         "title": "Butter tart",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Butter_tart"
        }
       ]
      },
      {
       "id": "dish-canada-4",
       "clue": "Nanaimo bars come from ____. They are named after Nanaimo, British Columbia.",
       "fact": "Nanaimo bars come from Canada. They are named after Nanaimo, British Columbia.",
       "sources": [
        {
         "title": "Nanaimo bar",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Nanaimo_bar"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-united-states",
     "name": "United States",
     "region": "North America",
     "lat": 37.1,
     "lng": -95.7,
     "emoji": "🇺🇸",
     "suspect": {
      "name": "Curry Favour",
      "alias": "The Spice Runner",
      "emoji": "🌶️"
     },
     "facts": [
      {
       "id": "dish-united-states-4",
       "clue": "Eggs Benedict originated in New York City, in the ____, with rival accounts crediting Delmonico’s in 1860 and the Waldorf Hotel in 1894.",
       "fact": "Eggs Benedict originated in New York City, in the United States, with rival accounts crediting Delmonico’s in 1860 and the Waldorf Hotel in 1894.",
       "sources": [
        {
         "title": "Eggs Benedict",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Eggs_Benedict"
        }
       ]
      },
      {
       "id": "dish-united-states-7",
       "clue": "German chocolate cake comes from the ____. It is named after Samuel German, who developed a baking chocolate.",
       "fact": "German chocolate cake comes from the United States. It is named after Samuel German, who developed a baking chocolate.",
       "sources": [
        {
         "title": "German chocolate cake",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/German_chocolate_cake"
        }
       ]
      },
      {
       "id": "dish-united-states-8",
       "clue": "Clam chowder comes from the ____, especially New England.",
       "fact": "Clam chowder comes from the United States, especially New England.",
       "sources": [
        {
         "title": "Clam chowder",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Clam_chowder"
        }
       ]
      },
      {
       "id": "dish-united-states-9",
       "clue": "Gumbo comes from Louisiana, in the ____.",
       "fact": "Gumbo comes from Louisiana, in the United States.",
       "sources": [
        {
         "title": "Gumbo",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Gumbo"
        }
       ]
      },
      {
       "id": "dish-united-states-10",
       "clue": "The Philly cheesesteak originated in Philadelphia, in the ____, starting as a 1930s chopped-steak sandwich before cheese was added around mid-century.",
       "fact": "The Philly cheesesteak originated in Philadelphia, in the United States, starting as a 1930s chopped-steak sandwich before cheese was added around mid-century.",
       "sources": [
        {
         "title": "Cheesesteak",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Cheesesteak"
        }
       ]
      },
      {
       "id": "dish-united-states-11",
       "clue": "Poke originated in pre-contact Native Hawaiian cuisine in Hawaii, now part of the ____.",
       "fact": "Poke originated in pre-contact Native Hawaiian cuisine in Hawaii, now part of the United States.",
       "sources": [
        {
         "title": "Poke (dish)",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Poke_(dish)"
        }
       ]
      },
      {
       "id": "dish-united-states-12",
       "clue": "Fajitas trace their first culinary evidence to the 1930s ranch lands of South and West Texas, in the ____, along the Rio Grande borderlands.",
       "fact": "Fajitas trace their first culinary evidence to the 1930s ranch lands of South and West Texas, in the United States, along the Rio Grande borderlands.",
       "sources": [
        {
         "title": "Fajita",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Fajita"
        }
       ]
      },
      {
       "id": "dish-united-states-13",
       "clue": "Russian dressing originated in the ____, appearing in print by 1900 before a mayonnaise-based version was popularized in Nashua, New Hampshire, in the 1910s.",
       "fact": "Russian dressing originated in the United States, appearing in print by 1900 before a mayonnaise-based version was popularized in Nashua, New Hampshire, in the 1910s.",
       "sources": [
        {
         "title": "Russian dressing",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Russian_dressing"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-spain",
     "name": "Spain",
     "region": "Europe",
     "lat": 40.5,
     "lng": -3.7,
     "emoji": "🇪🇸",
     "suspect": {
      "name": "Sal Monella",
      "alias": "The Leftover",
      "emoji": "🥡"
     },
     "facts": [
      {
       "id": "dish-spain-1",
       "clue": "Paella comes from Valencia, in ____.",
       "fact": "Paella comes from Valencia, in Spain.",
       "sources": [
        {
         "title": "Paella",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Paella"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-hungary",
     "name": "Hungary",
     "region": "Europe",
     "lat": 47.2,
     "lng": 19.5,
     "emoji": "🇭🇺",
     "suspect": {
      "name": "Basil Thyme",
      "alias": "The Garnish",
      "emoji": "🌿"
     },
     "facts": [
      {
       "id": "dish-hungary-1",
       "clue": "Goulash comes from ____.",
       "fact": "Goulash comes from Hungary.",
       "sources": [
        {
         "title": "Goulash",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Goulash"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-senegal",
     "name": "Senegal",
     "region": "Africa",
     "lat": 14.5,
     "lng": -14.5,
     "emoji": "🇸🇳",
     "suspect": {
      "name": "Ginger Snapp",
      "alias": "The Pastry Thief",
      "emoji": "🥐"
     },
     "facts": [
      {
       "id": "dish-senegal-1",
       "clue": "Jollof rice comes from ____, from the Wolof people's Jolof Empire. Ghana and Nigeria argue over the best version.",
       "fact": "Jollof rice comes from Senegal, from the Wolof people's Jolof Empire. Ghana and Nigeria argue over the best version.",
       "sources": [
        {
         "title": "Jollof rice",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Jollof_rice"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-scotland",
     "name": "Scotland",
     "region": "Europe",
     "lat": 56.5,
     "lng": -4.2,
     "emoji": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
     "suspect": {
      "name": "Mack Aroni",
      "alias": "The Noodle Bandit",
      "emoji": "🍝"
     },
     "facts": [
      {
       "id": "dish-scotland-1",
       "clue": "Haggis, a savory pudding of sheep offal, oatmeal, and spices, is traditionally traced to ____ and considered its national dish, despite early English recipes.",
       "fact": "Haggis, a savory pudding of sheep offal, oatmeal, and spices, is traditionally traced to Scotland and considered its national dish, despite early English recipes.",
       "sources": [
        {
         "title": "Haggis",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Haggis"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-switzerland",
     "name": "Switzerland",
     "region": "Europe",
     "lat": 46.8,
     "lng": 8.2,
     "emoji": "🇨🇭",
     "suspect": {
      "name": "Penny Rolls",
      "alias": "The Doughnapper",
      "emoji": "🥯"
     },
     "facts": [
      {
       "id": "dish-switzerland-1",
       "clue": "Fondue comes from ____.",
       "fact": "Fondue comes from Switzerland.",
       "sources": [
        {
         "title": "Fondue",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Fondue"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-austria",
     "name": "Austria",
     "region": "Europe",
     "lat": 47.5,
     "lng": 14.6,
     "emoji": "🇦🇹",
     "suspect": {
      "name": "Curry Favour",
      "alias": "The Spice Runner",
      "emoji": "🌶️"
     },
     "facts": [
      {
       "id": "dish-austria-2",
       "clue": "Wiener schnitzel comes from ____. \"Wiener\" means \"from Vienna.\"",
       "fact": "Wiener schnitzel comes from Austria. \"Wiener\" means \"from Vienna.\"",
       "sources": [
        {
         "title": "Wiener schnitzel",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Wiener_schnitzel"
        }
       ]
      },
      {
       "id": "dish-austria-3",
       "clue": "Sachertorte comes from Vienna, in ____, where Franz Sacher created it in 1832 decades before his son opened the Hotel Sacher in 1876.",
       "fact": "Sachertorte comes from Vienna, in Austria, where Franz Sacher created it in 1832 decades before his son opened the Hotel Sacher in 1876.",
       "sources": [
        {
         "title": "Sachertorte",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Sachertorte"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-belgium",
     "name": "Belgium",
     "region": "Europe",
     "lat": 50.5,
     "lng": 4.5,
     "emoji": "🇧🇪",
     "suspect": {
      "name": "Sal Monella",
      "alias": "The Leftover",
      "emoji": "🥡"
     },
     "facts": [
      {
       "id": "dish-belgium-1",
       "clue": "Brussels waffles from ____ were showcased at Expo 58 and popularized in the United States at the 1962 Seattle and 1964 New York World's Fairs.",
       "fact": "Brussels waffles from Belgium were showcased at Expo 58 and popularized in the United States at the 1962 Seattle and 1964 New York World's Fairs, becoming known there as Belgian waffles.",
       "sources": [
        {
         "title": "Belgian waffle",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Belgian_waffle"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-england",
     "name": "England",
     "region": "Europe",
     "lat": 52.4,
     "lng": -1.5,
     "emoji": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
     "suspect": {
      "name": "Basil Thyme",
      "alias": "The Garnish",
      "emoji": "🌿"
     },
     "facts": [
      {
       "id": "dish-england-1",
       "clue": "The Scotch egg comes from ____. London's Fortnum & Mason claims to have invented it in 1738.",
       "fact": "The Scotch egg comes from England. London's Fortnum & Mason claims to have invented it in 1738.",
       "sources": [
        {
         "title": "Scotch egg",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Scotch_egg"
        }
       ]
      },
      {
       "id": "dish-england-2",
       "clue": "Yorkshire pudding comes from ____.",
       "fact": "Yorkshire pudding comes from England.",
       "sources": [
        {
         "title": "Yorkshire pudding",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Yorkshire_pudding"
        }
       ]
      },
      {
       "id": "dish-england-3",
       "clue": "The Cornish pasty comes from ____.",
       "fact": "The Cornish pasty comes from England.",
       "sources": [
        {
         "title": "Pasty",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Pasty"
        }
       ]
      },
      {
       "id": "dish-england-4",
       "clue": "Fish and chips come from ____.",
       "fact": "Fish and chips come from England.",
       "sources": [
        {
         "title": "Fish and chips",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Fish_and_chips"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-vietnam",
     "name": "Vietnam",
     "region": "Asia",
     "lat": 14.1,
     "lng": 108.3,
     "emoji": "🇻🇳",
     "suspect": {
      "name": "Mack Aroni",
      "alias": "The Noodle Bandit",
      "emoji": "🍝"
     },
     "facts": [
      {
       "id": "dish-vietnam-1",
       "clue": "Pho comes from ____.",
       "fact": "Pho comes from Vietnam.",
       "sources": [
        {
         "title": "Pho",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Pho"
        }
       ]
      },
      {
       "id": "dish-vietnam-2",
       "clue": "Bánh mì comes from ____. It uses a French-style baguette.",
       "fact": "Bánh mì comes from Vietnam. It uses a French-style baguette.",
       "sources": [
        {
         "title": "Bánh mì",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/B%C3%A1nh_m%C3%AC"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-france",
     "name": "France",
     "region": "Europe",
     "lat": 46.6,
     "lng": 2.2,
     "emoji": "🇫🇷",
     "suspect": {
      "name": "Penny Rolls",
      "alias": "The Doughnapper",
      "emoji": "🥯"
     },
     "facts": [
      {
       "id": "dish-france-1",
       "clue": "The croque monsieur comes from ____.",
       "fact": "The croque monsieur comes from France.",
       "sources": [
        {
         "title": "Croque monsieur",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Croque_monsieur"
        }
       ]
      },
      {
       "id": "dish-france-2",
       "clue": "Bouillabaisse comes from Marseille, in ____.",
       "fact": "Bouillabaisse comes from Marseille, in France.",
       "sources": [
        {
         "title": "Bouillabaisse",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Bouillabaisse"
        }
       ]
      },
      {
       "id": "dish-france-3",
       "clue": "Coq au vin comes from ____.",
       "fact": "Coq au vin comes from France.",
       "sources": [
        {
         "title": "Coq au vin",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Coq_au_vin"
        }
       ]
      },
      {
       "id": "dish-france-4",
       "clue": "Cassoulet comes from southern ____, around Castelnaudary.",
       "fact": "Cassoulet comes from southern France, around Castelnaudary.",
       "sources": [
        {
         "title": "Cassoulet",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Cassoulet"
        }
       ]
      },
      {
       "id": "dish-france-5",
       "clue": "Quiche Lorraine comes from the Lorraine region of ____, where the word quiche was attested by 1605.",
       "fact": "Quiche Lorraine comes from the Lorraine region of France, where the word quiche was attested by 1605.",
       "sources": [
        {
         "title": "Quiche",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Quiche"
        }
       ]
      },
      {
       "id": "dish-france-6",
       "clue": "Ratatouille comes from Nice, in ____.",
       "fact": "Ratatouille comes from Nice, in France.",
       "sources": [
        {
         "title": "Ratatouille",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Ratatouille"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-italy",
     "name": "Italy",
     "region": "Europe",
     "lat": 41.9,
     "lng": 12.6,
     "emoji": "🇮🇹",
     "suspect": {
      "name": "Curry Favour",
      "alias": "The Spice Runner",
      "emoji": "🌶️"
     },
     "facts": [
      {
       "id": "dish-italy-1",
       "clue": "Pesto comes from Genoa, in ____.",
       "fact": "Pesto comes from Genoa, in Italy.",
       "sources": [
        {
         "title": "Pesto",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Pesto"
        }
       ]
      },
      {
       "id": "dish-italy-2",
       "clue": "Carbonara is typical of the Lazio region of ____, including Rome, and took its modern form and name in the mid-20th century.",
       "fact": "Carbonara is typical of the Lazio region of Italy, including Rome, and took its modern form and name in the mid-20th century.",
       "sources": [
        {
         "title": "Carbonara",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Carbonara"
        }
       ]
      },
      {
       "id": "dish-italy-3",
       "clue": "Cannoli come from Sicily, in ____.",
       "fact": "Cannoli come from Sicily, in Italy.",
       "sources": [
        {
         "title": "Cannoli",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Cannoli"
        }
       ]
      },
      {
       "id": "dish-italy-4",
       "clue": "Risotto comes from ____.",
       "fact": "Risotto comes from Italy.",
       "sources": [
        {
         "title": "Risotto",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Risotto"
        }
       ]
      },
      {
       "id": "dish-italy-5",
       "clue": "Tiramisu comes from ____.",
       "fact": "Tiramisu comes from Italy.",
       "sources": [
        {
         "title": "Tiramisu",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Tiramisu"
        }
       ]
      },
      {
       "id": "dish-italy-6",
       "clue": "Pizza Margherita comes from Naples, in ____.",
       "fact": "Pizza Margherita comes from Naples, in Italy.",
       "sources": [
        {
         "title": "Pizza Margherita",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Pizza_Margherita"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-argentina",
     "name": "Argentina",
     "region": "South America",
     "lat": -38.4,
     "lng": -63.6,
     "emoji": "🇦🇷",
     "suspect": {
      "name": "Sal Monella",
      "alias": "The Leftover",
      "emoji": "🥡"
     },
     "facts": [
      {
       "id": "dish-argentina-1",
       "clue": "Chimichurri comes from ____.",
       "fact": "Chimichurri comes from Argentina.",
       "sources": [
        {
         "title": "Chimichurri",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Chimichurri"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-turkey",
     "name": "Turkey",
     "region": "Asia",
     "lat": 39,
     "lng": 35.2,
     "emoji": "🇹🇷",
     "suspect": {
      "name": "Basil Thyme",
      "alias": "The Garnish",
      "emoji": "🌿"
     },
     "facts": [
      {
       "id": "dish-turkey-2",
       "clue": "Lokum, a gel confection of starch and sugar often flavored with rosewater, is popularly linked to 1770s confectioner Hacı Bekir in Istanbul, ____, though similar Persian and Arab sweets are older.",
       "fact": "Lokum, or Turkish delight, a gel confection of starch and sugar often flavored with rosewater, is popularly linked to 1770s confectioner Hacı Bekir in Istanbul, Turkey, though similar Persian and Arab sweets are older.",
       "sources": [
        {
         "title": "Turkish delight",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Turkish_delight"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-morocco",
     "name": "Morocco",
     "region": "Africa",
     "lat": 31.8,
     "lng": -7.1,
     "emoji": "🇲🇦",
     "suspect": {
      "name": "Ginger Snapp",
      "alias": "The Pastry Thief",
      "emoji": "🥐"
     },
     "facts": [
      {
       "id": "dish-morocco-1",
       "clue": "The cone-lidded clay tagine cooking pot originated in Tafraout, ____, and gives its name to a slow-cooked Maghrebi stew.",
       "fact": "The cone-lidded clay tagine cooking pot originated in Tafraout, Morocco, and gives its name to a slow-cooked Maghrebi stew.",
       "sources": [
        {
         "title": "Tagine",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Tagine"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-peru",
     "name": "Peru",
     "region": "South America",
     "lat": -9.2,
     "lng": -75,
     "emoji": "🇵🇪",
     "suspect": {
      "name": "Mack Aroni",
      "alias": "The Noodle Bandit",
      "emoji": "🍝"
     },
     "facts": [
      {
       "id": "dish-peru-1",
       "clue": "Historians trace the modern form of ceviche to colonial-era ____, where it is considered the national dish.",
       "fact": "Historians trace the modern form of ceviche to colonial-era Peru, where it is considered the national dish.",
       "sources": [
        {
         "title": "Ceviche",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Ceviche"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-brazil",
     "name": "Brazil",
     "region": "South America",
     "lat": -14.2,
     "lng": -51.9,
     "emoji": "🇧🇷",
     "suspect": {
      "name": "Penny Rolls",
      "alias": "The Doughnapper",
      "emoji": "🥯"
     },
     "facts": [
      {
       "id": "dish-brazil-1",
       "clue": "Feijoada à brasileira, a stew of black beans with pork and beef first documented in Recife in 1827, is considered a national dish of ____.",
       "fact": "Feijoada à brasileira, a stew of black beans with pork and beef first documented in Recife in 1827, is considered a national dish of Brazil.",
       "sources": [
        {
         "title": "Feijoada (Brazilian dish)",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Feijoada_(Brazilian_dish)"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-germany",
     "name": "Germany",
     "region": "Europe",
     "lat": 51.2,
     "lng": 10.5,
     "emoji": "🇩🇪",
     "suspect": {
      "name": "Curry Favour",
      "alias": "The Spice Runner",
      "emoji": "🌶️"
     },
     "facts": [
      {
       "id": "dish-germany-1",
       "clue": "The döner kebab sandwich was popularized in Berlin, ____, by Turkish immigrants.",
       "fact": "The döner kebab sandwich was popularized in Berlin, Germany, by Turkish immigrants.",
       "sources": [
        {
         "title": "Doner kebab",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Doner_kebab"
        }
       ]
      },
      {
       "id": "dish-germany-2",
       "clue": "Black Forest gateau is traditionally associated with ____, where the earliest archived recipe appeared in 1927, though its exact origin is disputed.",
       "fact": "Black Forest gateau is traditionally associated with Germany, where the earliest archived recipe appeared in 1927, though its exact origin is disputed.",
       "sources": [
        {
         "title": "Black Forest gateau",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Black_Forest_gateau"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-lebanon",
     "name": "Lebanon",
     "region": "Asia",
     "lat": 33.9,
     "lng": 35.9,
     "emoji": "🇱🇧",
     "suspect": {
      "name": "Sal Monella",
      "alias": "The Leftover",
      "emoji": "🥡"
     },
     "facts": [
      {
       "id": "dish-lebanon-1",
       "clue": "Tabbouleh comes from the mountains of ____ and Syria.",
       "fact": "Tabbouleh comes from the mountains of Lebanon and Syria.",
       "sources": [
        {
         "title": "Tabbouleh",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Tabbouleh"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-philippines",
     "name": "Philippines",
     "region": "Asia",
     "lat": 12.9,
     "lng": 121.8,
     "emoji": "🇵🇭",
     "suspect": {
      "name": "Basil Thyme",
      "alias": "The Garnish",
      "emoji": "🌿"
     },
     "facts": [
      {
       "id": "dish-philippines-2",
       "clue": "In the ____, adobo is a dish of meat or seafood braised in vinegar, soy sauce, garlic, bay leaves, and black peppercorns; Spanish colonists gave an indigenous cooking method that name.",
       "fact": "In the Philippines, adobo is a dish of meat or seafood braised in vinegar, soy sauce, garlic, bay leaves, and black peppercorns; Spanish colonists gave an indigenous cooking method that name.",
       "sources": [
        {
         "title": "Adobo (Filipino dish)",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Adobo_(Filipino_dish)"
        }
       ]
      },
      {
       "id": "dish-philippines-3",
       "clue": "Balut, a fertilized duck egg incubated and steamed in the shell, was localized into a signature street food in the ____.",
       "fact": "Balut, a fertilized duck egg incubated and steamed in the shell, was localized into a signature street food in the Philippines.",
       "sources": [
        {
         "title": "Balut (food)",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Balut_(food)"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-russia",
     "name": "Russia",
     "region": "Europe",
     "lat": 55.75,
     "lng": 37.62,
     "emoji": "🇷🇺",
     "suspect": {
      "name": "Ginger Snapp",
      "alias": "The Pastry Thief",
      "emoji": "🥐"
     },
     "facts": [
      {
       "id": "dish-russia-1",
       "clue": "Pelmeni became a staple of ____ during expansion into the Urals and Siberia, the two regions most often linked to their origin.",
       "fact": "Pelmeni became a staple of Russia during expansion into the Urals and Siberia, the two regions most often linked to their origin.",
       "sources": [
        {
         "title": "Pelmeni",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Pelmeni"
        }
       ]
      },
      {
       "id": "dish-russia-2",
       "clue": "Beef stroganoff comes from ____.",
       "fact": "Beef stroganoff comes from Russia.",
       "sources": [
        {
         "title": "Beef Stroganoff",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Beef_Stroganoff"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-poland",
     "name": "Poland",
     "region": "Europe",
     "lat": 51.9,
     "lng": 19.1,
     "emoji": "🇵🇱",
     "suspect": {
      "name": "Mack Aroni",
      "alias": "The Noodle Bandit",
      "emoji": "🍝"
     },
     "facts": [
      {
       "id": "dish-poland-1",
       "clue": "Pierogi are traditional filled dumplings of ____ documented since the 17th century, though their exact origin is unknown.",
       "fact": "Pierogi are traditional filled dumplings of Poland documented since the 17th century, though their exact origin is unknown.",
       "sources": [
        {
         "title": "Pierogi",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Pierogi"
        }
       ]
      },
      {
       "id": "dish-poland-2",
       "clue": "Bigos, a hunter's stew of cabbage and meat, comes from ____.",
       "fact": "Bigos, a hunter's stew of cabbage and meat, comes from Poland.",
       "sources": [
        {
         "title": "Bigos",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Bigos"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-greece",
     "name": "Greece",
     "region": "Europe",
     "lat": 39.1,
     "lng": 21.8,
     "emoji": "🇬🇷",
     "suspect": {
      "name": "Penny Rolls",
      "alias": "The Doughnapper",
      "emoji": "🥯"
     },
     "facts": [
      {
       "id": "dish-greece-1",
       "clue": "While moussaka has older Arab and Ottoman roots, chef Nikolaos Tselementes created the modern baked version topped with béchamel sauce in ____ in the 1920s.",
       "fact": "While moussaka has older Arab and Ottoman roots, chef Nikolaos Tselementes created the modern baked version topped with béchamel sauce in Greece in the 1920s.",
       "sources": [
        {
         "title": "Moussaka",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Moussaka"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-india",
     "name": "India",
     "region": "Asia",
     "lat": 20.6,
     "lng": 79,
     "emoji": "🇮🇳",
     "suspect": {
      "name": "Curry Favour",
      "alias": "The Spice Runner",
      "emoji": "🌶️"
     },
     "facts": [
      {
       "id": "dish-india-1",
       "clue": "Butter chicken is closely associated with the Moti Mahal restaurant in Delhi, ____, which popularized the dish in the 1950s.",
       "fact": "Butter chicken is closely associated with the Moti Mahal restaurant in Delhi, India, which popularized the dish in the 1950s.",
       "sources": [
        {
         "title": "Butter chicken",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Butter_chicken"
        }
       ]
      },
      {
       "id": "dish-india-2",
       "clue": "Masala dosa comes from ____.",
       "fact": "Masala dosa comes from India.",
       "sources": [
        {
         "title": "Masala dosa",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Masala_dosa"
        }
       ]
      },
      {
       "id": "dish-india-3",
       "clue": "Tandoori chicken originated in the pre-Partition Punjab and was popularized after independence at the Moti Mahal restaurant in New Delhi, ____.",
       "fact": "Tandoori chicken originated in the pre-Partition Punjab and was popularized after independence at the Moti Mahal restaurant in New Delhi, India.",
       "sources": [
        {
         "title": "Tandoori chicken",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Tandoori_chicken"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-denmark",
     "name": "Denmark",
     "region": "Europe",
     "lat": 56.3,
     "lng": 9.5,
     "emoji": "🇩🇰",
     "suspect": {
      "name": "Sal Monella",
      "alias": "The Leftover",
      "emoji": "🥡"
     },
     "facts": [
      {
       "id": "dish-denmark-1",
       "clue": "Smørrebrød, from smør og brød ('butter and bread'), is the open-faced sandwich of ____, served on dense, dark sourdough rye bread called rugbrød.",
       "fact": "Smørrebrød, from smør og brød ('butter and bread'), is the open-faced sandwich of Denmark, served on dense, dark sourdough rye bread called rugbrød.",
       "sources": [
        {
         "title": "Smørrebrød",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Sm%C3%B8rrebr%C3%B8d"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-sweden",
     "name": "Sweden",
     "region": "Europe",
     "lat": 60.1,
     "lng": 18.6,
     "emoji": "🇸🇪",
     "suspect": {
      "name": "Basil Thyme",
      "alias": "The Garnish",
      "emoji": "🌿"
     },
     "facts": [
      {
       "id": "dish-sweden-2",
       "clue": "Surströmming, fermented herring famous for its smell, comes from ____.",
       "fact": "Surströmming, fermented herring famous for its smell, comes from Sweden.",
       "sources": [
        {
         "title": "Surströmming",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Surstr%C3%B6mming"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-georgia",
     "name": "Georgia",
     "region": "Asia",
     "lat": 42.3,
     "lng": 43.4,
     "emoji": "🇬🇪",
     "suspect": {
      "name": "Ginger Snapp",
      "alias": "The Pastry Thief",
      "emoji": "🥐"
     },
     "facts": [
      {
       "id": "dish-georgia-1",
       "clue": "Khachapuri, a leavened cheese-filled bread, comes from ____.",
       "fact": "Khachapuri, a leavened cheese-filled bread, comes from Georgia.",
       "sources": [
        {
         "title": "Khachapuri",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Khachapuri"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-uzbekistan",
     "name": "Uzbekistan",
     "region": "Asia",
     "lat": 41.4,
     "lng": 64.6,
     "emoji": "🇺🇿",
     "suspect": {
      "name": "Mack Aroni",
      "alias": "The Noodle Bandit",
      "emoji": "🍝"
     },
     "facts": [
      {
       "id": "dish-uzbekistan-1",
       "clue": "Plov is the national dish of ____ and neighboring Tajikistan, recognized on UNESCO’s intangible cultural heritage list in 2016.",
       "fact": "Plov is the national dish of Uzbekistan and neighboring Tajikistan, recognized on UNESCO’s intangible cultural heritage list in 2016.",
       "sources": [
        {
         "title": "Pilaf",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Pilaf"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-new-zealand",
     "name": "New Zealand",
     "region": "Oceania",
     "lat": -40.9,
     "lng": 174.9,
     "emoji": "🇳🇿",
     "suspect": {
      "name": "Penny Rolls",
      "alias": "The Doughnapper",
      "emoji": "🥯"
     },
     "facts": [
      {
       "id": "dish-new-zealand-1",
       "clue": "Hāngī comes from ____. It is a Māori method of cooking in a pit oven.",
       "fact": "Hāngī comes from New Zealand. It is a Māori method of cooking in a pit oven.",
       "sources": [
        {
         "title": "Hāngī",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/H%C4%81ng%C4%AB"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-china",
     "name": "China",
     "region": "Asia",
     "lat": 35.9,
     "lng": 104.2,
     "emoji": "🇨🇳",
     "suspect": {
      "name": "Curry Favour",
      "alias": "The Spice Runner",
      "emoji": "🌶️"
     },
     "facts": [
      {
       "id": "dish-china-1",
       "clue": "Peking duck comes from ____.",
       "fact": "Peking duck comes from China.",
       "sources": [
        {
         "title": "Peking duck",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Peking_duck"
        }
       ]
      },
      {
       "id": "dish-china-2",
       "clue": "Dim sum comes from ____, from Cantonese teahouses.",
       "fact": "Dim sum comes from China, from Cantonese teahouses.",
       "sources": [
        {
         "title": "Dim sum",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Dim_sum"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-jamaica",
     "name": "Jamaica",
     "region": "North America",
     "lat": 18.1,
     "lng": -77.3,
     "emoji": "🇯🇲",
     "suspect": {
      "name": "Sal Monella",
      "alias": "The Leftover",
      "emoji": "🥡"
     },
     "facts": [
      {
       "id": "dish-jamaica-1",
       "clue": "Jerk chicken comes from ____.",
       "fact": "Jerk chicken comes from Jamaica.",
       "sources": [
        {
         "title": "Jerk (cooking)",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Jerk_(cooking)"
        }
       ]
      },
      {
       "id": "dish-jamaica-2",
       "clue": "Ackee and saltfish comes from ____.",
       "fact": "Ackee and saltfish comes from Jamaica.",
       "sources": [
        {
         "title": "Ackee and saltfish",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Ackee_and_saltfish"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-indonesia",
     "name": "Indonesia",
     "region": "Asia",
     "lat": -0.8,
     "lng": 113.9,
     "emoji": "🇮🇩",
     "suspect": {
      "name": "Basil Thyme",
      "alias": "The Garnish",
      "emoji": "🌿"
     },
     "facts": [
      {
       "id": "dish-indonesia-1",
       "clue": "Rendang is closely tied to the Minangkabau people of West Sumatra, in ____, having developed along the cultural crossroads of the Malacca Strait.",
       "fact": "Rendang is closely tied to the Minangkabau people of West Sumatra, in Indonesia, having developed along the cultural crossroads of the Malacca Strait.",
       "sources": [
        {
         "title": "Rendang",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Rendang"
        }
       ]
      },
      {
       "id": "dish-indonesia-2",
       "clue": "Satay developed in port cities of Java and Sumatra, in ____, as well as the Malay Peninsula, adapting Middle Eastern kebabs with local spices and skewering.",
       "fact": "Satay developed in port cities of Java and Sumatra, in Indonesia, as well as the Malay Peninsula, adapting Middle Eastern kebabs with local spices and skewering.",
       "sources": [
        {
         "title": "Satay",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Satay"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-south-africa",
     "name": "South Africa",
     "region": "Africa",
     "lat": -30.6,
     "lng": 22.9,
     "emoji": "🇿🇦",
     "suspect": {
      "name": "Ginger Snapp",
      "alias": "The Pastry Thief",
      "emoji": "🥐"
     },
     "facts": [
      {
       "id": "dish-south-africa-1",
       "clue": "Bobotie comes from ____.",
       "fact": "Bobotie comes from South Africa.",
       "sources": [
        {
         "title": "Bobotie",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Bobotie"
        }
       ]
      },
      {
       "id": "dish-south-africa-2",
       "clue": "Biltong, air-dried meat cured with vinegar, salt, black pepper, and coriander by 17th-century Dutch pioneers, is closely associated with ____.",
       "fact": "Biltong, air-dried meat cured with vinegar, salt, black pepper, and coriander in Southern Africa by 17th-century Dutch pioneers, is closely associated with South Africa.",
       "sources": [
        {
         "title": "Biltong",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Biltong"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-el-salvador",
     "name": "El Salvador",
     "region": "North America",
     "lat": 13.8,
     "lng": -88.9,
     "emoji": "🇸🇻",
     "suspect": {
      "name": "Mack Aroni",
      "alias": "The Noodle Bandit",
      "emoji": "🍝"
     },
     "facts": [
      {
       "id": "dish-el-salvador-1",
       "clue": "The pupusa, a thick stuffed griddle cake from Central America, is the national dish of ____.",
       "fact": "The pupusa, a thick stuffed griddle cake from El Salvador and Honduras, is the national dish of El Salvador.",
       "sources": [
        {
         "title": "Pupusa",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Pupusa"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-ethiopia",
     "name": "Ethiopia",
     "region": "Africa",
     "lat": 9.1,
     "lng": 40.5,
     "emoji": "🇪🇹",
     "suspect": {
      "name": "Penny Rolls",
      "alias": "The Doughnapper",
      "emoji": "🥯"
     },
     "facts": [
      {
       "id": "dish-ethiopia-1",
       "clue": "Injera, a spongy fermented flatbread made from teff, is a staple of ____ and neighboring Eritrea.",
       "fact": "Injera, a spongy fermented flatbread made from teff, is a staple of Ethiopia and neighboring Eritrea.",
       "sources": [
        {
         "title": "Injera",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Injera"
        }
       ]
      }
     ]
    },
    {
     "id": "dish-australia",
     "name": "Australia",
     "region": "Oceania",
     "lat": -25.3,
     "lng": 133.8,
     "emoji": "🇦🇺",
     "suspect": {
      "name": "Curry Favour",
      "alias": "The Spice Runner",
      "emoji": "🌶️"
     },
     "facts": [
      {
       "id": "dish-australia-1",
       "clue": "Vegemite comes from ____.",
       "fact": "Vegemite comes from Australia.",
       "sources": [
        {
         "title": "Vegemite",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Vegemite"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "world-almanac-carmen",
   "title": "Where in the World Almanac is Carmen Sandiego?",
   "places": [
    {
     "id": "world-france",
     "name": "France",
     "region": "Europe",
     "lat": 46.6,
     "lng": 2.2,
     "emoji": "🇫🇷",
     "suspect": {
      "name": "Rocky Ledge",
      "alias": "The Landslide",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "world-france-1",
       "clue": "____ spans 12 time zones—more than any other country—thanks to its overseas territories, or 13 including its Antarctic claim.",
       "fact": "France spans 12 time zones—more than any other country—thanks to its overseas territories, or 13 including its Antarctic claim.",
       "sources": [
        {
         "title": "Time in France",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Time_in_France"
        }
       ]
      }
     ]
    },
    {
     "id": "world-canada",
     "name": "Canada",
     "region": "North America",
     "lat": 56.1,
     "lng": -106.3,
     "emoji": "🇨🇦",
     "suspect": {
      "name": "Gale Forsythe",
      "alias": "The Squall",
      "emoji": "🌪️"
     },
     "facts": [
      {
       "id": "world-canada-1",
       "clue": "____ has the most lakes of any country, more than the rest of the world combined by some counts.",
       "fact": "Canada has the most lakes of any country, more than the rest of the world combined by some counts.",
       "sources": [
        {
         "title": "List of lakes of Canada",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/List_of_lakes_of_Canada"
        }
       ]
      }
     ]
    },
    {
     "id": "world-sweden",
     "name": "Sweden",
     "region": "Europe",
     "lat": 60.1,
     "lng": 18.6,
     "emoji": "🇸🇪",
     "suspect": {
      "name": "Terra Firma",
      "alias": "The Fault Line",
      "emoji": "🌋"
     },
     "facts": [
      {
       "id": "world-sweden-1",
       "clue": "____ tops international island rankings with 267,570 islands, though fewer than 1,000 are inhabited.",
       "fact": "Sweden tops international island rankings with 267,570 islands, though fewer than 1,000 are inhabited.",
       "sources": [
        {
         "title": "Sweden",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Sweden"
        },
        {
         "title": "List of countries by number of islands",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/List_of_countries_by_number_of_islands"
        }
       ]
      }
     ]
    },
    {
     "id": "world-indonesia",
     "name": "Indonesia",
     "region": "Asia",
     "lat": -0.8,
     "lng": 113.9,
     "emoji": "🇮🇩",
     "suspect": {
      "name": "Misty Banks",
      "alias": "The Fogbank",
      "emoji": "🌫️"
     },
     "facts": [
      {
       "id": "world-indonesia-1",
       "clue": "____ is the world's largest archipelagic state, spanning between 13,000 and 17,500 islands.",
       "fact": "Indonesia is the world's largest archipelagic state, spanning between 13,000 and 17,500 islands.",
       "sources": [
        {
         "title": "Indonesia",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Indonesia"
        }
       ]
      },
      {
       "id": "world-indonesia-2",
       "clue": "Sitting on the Pacific Ring of Fire and Alpide belt, ____ has 127 active volcanoes, including Krakatoa and Mount Merapi.",
       "fact": "Sitting on the Pacific Ring of Fire and Alpide belt, Indonesia has 127 active volcanoes, including Krakatoa and Mount Merapi.",
       "sources": [
        {
         "title": "List of volcanoes in Indonesia",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/List_of_volcanoes_in_Indonesia"
        }
       ]
      }
     ]
    },
    {
     "id": "world-uzbekistan",
     "name": "Uzbekistan",
     "region": "Asia",
     "lat": 41.4,
     "lng": 64.6,
     "emoji": "🇺🇿",
     "suspect": {
      "name": "Hal Stone",
      "alias": "The Hailstorm",
      "emoji": "🧊"
     },
     "facts": [
      {
       "id": "world-uzbekistan-1",
       "clue": "____ is doubly landlocked, like Liechtenstein: every neighbor is also landlocked.",
       "fact": "Uzbekistan is doubly landlocked, like Liechtenstein: every neighbor is also landlocked.",
       "sources": [
        {
         "title": "Landlocked country",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Landlocked_country"
        }
       ]
      }
     ]
    },
    {
     "id": "world-saudi-arabia",
     "name": "Saudi Arabia",
     "region": "Asia",
     "lat": 23.9,
     "lng": 45.1,
     "emoji": "🇸🇦",
     "suspect": {
      "name": "Del Ta",
      "alias": "The Silt Runner",
      "emoji": "🏞️"
     },
     "facts": [
      {
       "id": "world-saudi-arabia-1",
       "clue": "____ is the largest country with no permanent rivers.",
       "fact": "Saudi Arabia is the largest country with no permanent rivers.",
       "sources": [
        {
         "title": "Saudi Arabia",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Saudi_Arabia"
        }
       ]
      }
     ]
    },
    {
     "id": "world-italy",
     "name": "Italy",
     "region": "Europe",
     "lat": 41.9,
     "lng": 12.6,
     "emoji": "🇮🇹",
     "suspect": {
      "name": "Rocky Ledge",
      "alias": "The Landslide",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "world-italy-1",
       "clue": "____ and China sit atop the UNESCO World Heritage list, each home to more than 60 inscribed sites.",
       "fact": "Italy and China sit atop the UNESCO World Heritage list, each home to more than 60 inscribed sites.",
       "sources": [
        {
         "title": "World Heritage Site",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/World_Heritage_Site"
        }
       ]
      }
     ]
    },
    {
     "id": "world-south-sudan",
     "name": "South Sudan",
     "region": "Africa",
     "lat": 7.9,
     "lng": 30,
     "emoji": "🇸🇸",
     "suspect": {
      "name": "Gale Forsythe",
      "alias": "The Squall",
      "emoji": "🌪️"
     },
     "facts": [
      {
       "id": "world-south-sudan-1",
       "clue": "____, independent since 2011, is the youngest country in the world.",
       "fact": "South Sudan, independent since 2011, is the youngest country in the world.",
       "sources": [
        {
         "title": "South Sudan",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/South_Sudan"
        }
       ]
      }
     ]
    },
    {
     "id": "world-brazil",
     "name": "Brazil",
     "region": "South America",
     "lat": -14.2,
     "lng": -51.9,
     "emoji": "🇧🇷",
     "suspect": {
      "name": "Terra Firma",
      "alias": "The Fault Line",
      "emoji": "🌋"
     },
     "facts": [
      {
       "id": "world-brazil-1",
       "clue": "____ is the largest country in South America by area.",
       "fact": "Brazil is the largest country in South America by area.",
       "sources": [
        {
         "title": "Brazil",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Brazil"
        }
       ]
      },
      {
       "id": "world-brazil-2",
       "clue": "Most of the Pantanal is in ____. It extends into Bolivia and Paraguay.",
       "fact": "Most of the Pantanal is in Brazil. It extends into Bolivia and Paraguay.",
       "sources": [
        {
         "title": "Pantanal",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Pantanal"
        }
       ]
      }
     ]
    },
    {
     "id": "world-chile",
     "name": "Chile",
     "region": "South America",
     "lat": -35.7,
     "lng": -71.5,
     "emoji": "🇨🇱",
     "suspect": {
      "name": "Misty Banks",
      "alias": "The Fogbank",
      "emoji": "🌫️"
     },
     "facts": [
      {
       "id": "world-chile-1",
       "clue": "____ holds most of the Atacama Desert.",
       "fact": "Chile holds most of the Atacama Desert.",
       "sources": [
        {
         "title": "Atacama Desert",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Atacama_Desert"
        }
       ]
      }
     ]
    },
    {
     "id": "world-united-states",
     "name": "United States",
     "region": "North America",
     "lat": 37.1,
     "lng": -95.7,
     "emoji": "🇺🇸",
     "suspect": {
      "name": "Hal Stone",
      "alias": "The Hailstorm",
      "emoji": "🧊"
     },
     "facts": [
      {
       "id": "world-united-states-1",
       "clue": "The lowest point in the ____ is Badwater Basin in Death Valley, 86 m below sea level.",
       "fact": "The lowest point in the United States is Badwater Basin in Death Valley, 86 m below sea level.",
       "sources": [
        {
         "title": "Death Valley",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Death_Valley"
        }
       ]
      },
      {
       "id": "world-united-states-2",
       "clue": "The ____ has the most tornadoes of any country, over 1,000 a year.",
       "fact": "The United States has the most tornadoes of any country, over 1,000 a year.",
       "sources": [
        {
         "title": "Tornado",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Tornado"
        }
       ]
      }
     ]
    },
    {
     "id": "world-australia",
     "name": "Australia",
     "region": "Oceania",
     "lat": -25.3,
     "lng": 133.8,
     "emoji": "🇦🇺",
     "suspect": {
      "name": "Del Ta",
      "alias": "The Silt Runner",
      "emoji": "🏞️"
     },
     "facts": [
      {
       "id": "world-australia-1",
       "clue": "____ is the driest inhabited continent on Earth.",
       "fact": "Australia is the driest inhabited continent on Earth; only Antarctica is drier overall.",
       "sources": [
        {
         "title": "Australia",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Australia"
        }
       ]
      },
      {
       "id": "world-australia-2",
       "clue": "____ is the flattest continent.",
       "fact": "Australia is the flattest continent.",
       "sources": [
        {
         "title": "Geography of Australia",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Geography_of_Australia"
        }
       ]
      }
     ]
    },
    {
     "id": "world-antarctica",
     "name": "Antarctica",
     "region": "Southern Hemisphere",
     "lat": -82.9,
     "lng": 135,
     "emoji": "🇦🇶",
     "suspect": {
      "name": "Rocky Ledge",
      "alias": "The Landslide",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "world-antarctica-1",
       "clue": "____ holds the largest ice sheet on Earth.",
       "fact": "Antarctica holds the largest ice sheet on Earth.",
       "sources": [
        {
         "title": "Antarctic ice sheet",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Antarctic_ice_sheet"
        }
       ]
      },
      {
       "id": "world-antarctica-2",
       "clue": "____ has no natural fully terrestrial mammals, reptiles, or amphibians.",
       "fact": "Antarctica has no natural fully terrestrial mammals, reptiles, or amphibians.",
       "sources": [
        {
         "title": "Antarctica",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Antarctica"
        },
        {
         "title": "Wildlife of Antarctica",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Wildlife_of_Antarctica"
        }
       ]
      },
      {
       "id": "world-antarctica-3",
       "clue": "____ is the windiest continent.",
       "fact": "Antarctica is the windiest continent.",
       "sources": [
        {
         "title": "Antarctica",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Antarctica"
        }
       ]
      },
      {
       "id": "world-antarctica-4",
       "clue": "____ is the coldest continent.",
       "fact": "Antarctica is the coldest continent.",
       "sources": [
        {
         "title": "Antarctica",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Antarctica"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "earth-lands-carmen",
   "title": "Where on Earth's Extreme Lands is Carmen Sandiego?",
   "places": [
    {
     "id": "earth-denali",
     "name": "Denali",
     "region": "Alaska, US",
     "lat": 63.07,
     "lng": -151.01,
     "emoji": "⛰️",
     "suspect": {
      "name": "Rocky Ledge",
      "alias": "The Landslide",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "earth-denali-1",
       "clue": "____, in Alaska, is the highest mountain in North America, at 6,190 m.",
       "fact": "Denali, in Alaska, is the highest mountain in North America, at 6,190 m.",
       "sources": [
        {
         "title": "Denali",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Denali"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-aconcagua",
     "name": "Aconcagua",
     "region": "Argentina",
     "lat": -32.65,
     "lng": -70.01,
     "emoji": "⛰️",
     "suspect": {
      "name": "Gale Forsythe",
      "alias": "The Squall",
      "emoji": "🌪️"
     },
     "facts": [
      {
       "id": "earth-aconcagua-1",
       "clue": "____, in Argentina, is the highest mountain in South America and outside Asia, at about 6,967 m.",
       "fact": "Aconcagua, in Argentina, is the highest mountain in South America and outside Asia, at about 6,967 m.",
       "sources": [
        {
         "title": "Aconcagua",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Aconcagua"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-mount-elbrus",
     "name": "Mount Elbrus",
     "region": "Russia",
     "lat": 43.35,
     "lng": 42.44,
     "emoji": "⛰️",
     "suspect": {
      "name": "Terra Firma",
      "alias": "The Fault Line",
      "emoji": "🌋"
     },
     "facts": [
      {
       "id": "earth-mount-elbrus-1",
       "clue": "____, in the Caucasus of Russia, is the highest mountain in Russia and Europe, at 5,642 m.",
       "fact": "Mount Elbrus, in the Caucasus of Russia, is the highest mountain in Russia and Europe, at 5,642 m.",
       "sources": [
        {
         "title": "Mount Elbrus",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Mount_Elbrus"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-mount-vinson",
     "name": "Mount Vinson",
     "region": "Antarctica",
     "lat": -78.53,
     "lng": -85.62,
     "emoji": "⛰️",
     "suspect": {
      "name": "Misty Banks",
      "alias": "The Fogbank",
      "emoji": "🌫️"
     },
     "facts": [
      {
       "id": "earth-mount-vinson-1",
       "clue": "____ is the highest mountain in Antarctica, about 4,890 m.",
       "fact": "Mount Vinson is the highest mountain in Antarctica, about 4,890 m.",
       "sources": [
        {
         "title": "Vinson Massif",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Vinson_Massif"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-kilimanjaro",
     "name": "Kilimanjaro",
     "region": "Tanzania",
     "lat": -3.07,
     "lng": 37.35,
     "emoji": "⛰️",
     "suspect": {
      "name": "Hal Stone",
      "alias": "The Hailstorm",
      "emoji": "🧊"
     },
     "facts": [
      {
       "id": "earth-kilimanjaro-1",
       "clue": "____, in Tanzania, is the highest mountain in Africa, at 5,895 m.",
       "fact": "Kilimanjaro, in Tanzania, is the highest mountain in Africa, at 5,895 m.",
       "sources": [
        {
         "title": "Mount Kilimanjaro",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Mount_Kilimanjaro"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-puncak-jaya",
     "name": "Puncak Jaya",
     "region": "Indonesia",
     "lat": -4.08,
     "lng": 137.16,
     "emoji": "⛰️",
     "suspect": {
      "name": "Del Ta",
      "alias": "The Silt Runner",
      "emoji": "🏞️"
     },
     "facts": [
      {
       "id": "earth-puncak-jaya-1",
       "clue": "____, in Indonesian New Guinea, is the highest mountain in Oceania, about 4,880 m.",
       "fact": "Puncak Jaya, in Indonesian New Guinea, is the highest mountain in Oceania, about 4,880 m.",
       "sources": [
        {
         "title": "Puncak Jaya",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Puncak_Jaya"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-mount-kosciuszko",
     "name": "Mount Kosciuszko",
     "region": "Australia",
     "lat": -36.46,
     "lng": 148.26,
     "emoji": "⛰️",
     "suspect": {
      "name": "Rocky Ledge",
      "alias": "The Landslide",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "earth-mount-kosciuszko-1",
       "clue": "____ is the highest point on mainland Australia, at 2,228 m.",
       "fact": "Mount Kosciuszko is the highest point on mainland Australia, at 2,228 m.",
       "sources": [
        {
         "title": "Mount Kosciuszko",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Mount_Kosciuszko"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-mount-stanley",
     "name": "Mount Stanley",
     "region": "Uganda and DR Congo",
     "lat": 0.39,
     "lng": 29.87,
     "emoji": "⛰️",
     "suspect": {
      "name": "Gale Forsythe",
      "alias": "The Squall",
      "emoji": "🌪️"
     },
     "facts": [
      {
       "id": "earth-mount-stanley-1",
       "clue": "____, on the border of Uganda and DR Congo in the Rwenzori range, is Africa’s third-tallest independent mountain and fourth-highest peak, at 5,109 m.",
       "fact": "Mount Stanley, on the border of Uganda and DR Congo in the Rwenzori range, is Africa’s third-tallest independent mountain and fourth-highest peak, at 5,109 m.",
       "sources": [
        {
         "title": "Mount Stanley",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Mount_Stanley"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-gangkhar-puensum",
     "name": "Gangkhar Puensum",
     "region": "Bhutan",
     "lat": 28.05,
     "lng": 90.46,
     "emoji": "🏔️",
     "suspect": {
      "name": "Terra Firma",
      "alias": "The Fault Line",
      "emoji": "🌋"
     },
     "facts": [
      {
       "id": "earth-gangkhar-puensum-1",
       "clue": "____, in the Himalayas of Bhutan, is the highest mountain no one has climbed.",
       "fact": "Gangkhar Puensum, in the Himalayas of Bhutan, is the highest mountain no one has climbed.",
       "sources": [
        {
         "title": "Gangkhar Puensum",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Gangkhar_Puensum"
        }
       ]
      },
      {
       "id": "earth-gangkhar-puensum-2",
       "clue": "Bhutan banned climbing mountains above 6,000 m, including ____, in 1994 out of respect for local spiritual beliefs, and banned all mountaineering in 2003.",
       "fact": "Bhutan banned climbing mountains above 6,000 m, including Gangkhar Puensum, in 1994 out of respect for local spiritual beliefs, and banned all mountaineering in 2003.",
       "sources": [
        {
         "title": "Gangkhar Puensum",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Gangkhar_Puensum"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-ojos-del-salado",
     "name": "Ojos del Salado",
     "region": "Chile and Argentina",
     "lat": -27.11,
     "lng": -68.54,
     "emoji": "🌋",
     "suspect": {
      "name": "Misty Banks",
      "alias": "The Fogbank",
      "emoji": "🌫️"
     },
     "facts": [
      {
       "id": "earth-ojos-del-salado-1",
       "clue": "____, a dormant peak on the border of Chile and Argentina, is the highest volcano on Earth, at 6,893 m.",
       "fact": "Ojos del Salado, a dormant peak on the border of Chile and Argentina, is the highest volcano on Earth, at 6,893 m.",
       "sources": [
        {
         "title": "Ojos del Salado",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Ojos_del_Salado"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-mauna-loa",
     "name": "Mauna Loa",
     "region": "Hawaii, US",
     "lat": 19.48,
     "lng": -155.6,
     "emoji": "🌋",
     "suspect": {
      "name": "Hal Stone",
      "alias": "The Hailstorm",
      "emoji": "🧊"
     },
     "facts": [
      {
       "id": "earth-mauna-loa-1",
       "clue": "____, in Hawaii, is the largest active volcano on Earth.",
       "fact": "Mauna Loa, in Hawaii, is the largest active volcano on Earth.",
       "sources": [
        {
         "title": "Mauna Loa",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Mauna_Loa"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-andes",
     "name": "Andes",
     "region": "South America",
     "lat": -32,
     "lng": -70,
     "emoji": "🏔️",
     "suspect": {
      "name": "Del Ta",
      "alias": "The Silt Runner",
      "emoji": "🏞️"
     },
     "facts": [
      {
       "id": "earth-andes-1",
       "clue": "South America's western edge is lined by the ____, the longest continental mountain range on Earth, stretching 7,000 to 8,900 km.",
       "fact": "South America's western edge is lined by the Andes, the longest continental mountain range on Earth, stretching 7,000 to 8,900 km.",
       "sources": [
        {
         "title": "Andes",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Andes"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-tibetan-plateau",
     "name": "Tibetan Plateau",
     "region": "China",
     "lat": 33,
     "lng": 88,
     "emoji": "🏔️",
     "suspect": {
      "name": "Rocky Ledge",
      "alias": "The Landslide",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "earth-tibetan-plateau-1",
       "clue": "The ____, in Asia, is the highest and largest highland region on Earth, averaging over 4,500 m above sea level.",
       "fact": "The Tibetan Plateau is the highest and largest plateau on Earth, averaging over 4,500 m above sea level.",
       "sources": [
        {
         "title": "Tibetan Plateau",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Tibetan_Plateau"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-yarlung-tsangpo-grand-canyon",
     "name": "Yarlung Tsangpo Grand Canyon",
     "region": "Tibet, China",
     "lat": 29.8,
     "lng": 95,
     "emoji": "🏞️",
     "suspect": {
      "name": "Gale Forsythe",
      "alias": "The Squall",
      "emoji": "🌪️"
     },
     "facts": [
      {
       "id": "earth-yarlung-tsangpo-grand-canyon-1",
       "clue": "The ____, in Tibet, is the deepest gorge on land, reaching 6,009 m deep.",
       "fact": "The Yarlung Tsangpo Grand Canyon, in Tibet, is the deepest canyon on land, reaching 6,009 m deep.",
       "sources": [
        {
         "title": "Yarlung Tsangpo Grand Canyon",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Yarlung_Tsangpo_Grand_Canyon"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-mammoth-cave",
     "name": "Mammoth Cave",
     "region": "Kentucky, US",
     "lat": 37.19,
     "lng": -86.1,
     "emoji": "🕳️",
     "suspect": {
      "name": "Terra Firma",
      "alias": "The Fault Line",
      "emoji": "🌋"
     },
     "facts": [
      {
       "id": "earth-mammoth-cave-1",
       "clue": "____, in central Kentucky, is the longest known subterranean passage system in the world, with over 680 km mapped.",
       "fact": "Mammoth Cave, in central Kentucky, is the longest known cave system in the world, with over 680 km mapped.",
       "sources": [
        {
         "title": "Mammoth Cave National Park",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Mammoth_Cave_National_Park"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-hang-son-oong",
     "name": "Hang Sơn Đoòng",
     "region": "Vietnam",
     "lat": 17.46,
     "lng": 106.29,
     "emoji": "🕳️",
     "suspect": {
      "name": "Misty Banks",
      "alias": "The Fogbank",
      "emoji": "🌫️"
     },
     "facts": [
      {
       "id": "earth-hang-son-oong-1",
       "clue": "____, in Vietnam, contains the largest known subterranean passage in the world by volume, over 5 km long, 200 m high, and 150 m wide.",
       "fact": "Hang Sơn Đoòng, in Vietnam, contains the largest known cave passage in the world by volume, over 5 km long, 200 m high, and 150 m wide.",
       "sources": [
        {
         "title": "Hang Sơn Đoòng",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Hang_S%C6%A1n_%C4%90o%C3%B2ng"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-veryovkina-cave",
     "name": "Veryovkina Cave",
     "region": "Georgia",
     "lat": 43.41,
     "lng": 40.36,
     "emoji": "🕳️",
     "suspect": {
      "name": "Hal Stone",
      "alias": "The Hailstorm",
      "emoji": "🧊"
     },
     "facts": [
      {
       "id": "earth-veryovkina-cave-1",
       "clue": "____, in Abkhazia, Georgia, reaches 2,209 m underground, the second-deepest known subterranean system on Earth after nearby Krubera.",
       "fact": "Veryovkina Cave, in Abkhazia, Georgia, reaches 2,209 m underground, the second-deepest known cave on Earth after nearby Krubera Cave.",
       "sources": [
        {
         "title": "Veryovkina Cave",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Veryovkina_Cave"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-salar-de-uyuni",
     "name": "Salar de Uyuni",
     "region": "Bolivia",
     "lat": -20.13,
     "lng": -67.49,
     "emoji": "🧂",
     "suspect": {
      "name": "Del Ta",
      "alias": "The Silt Runner",
      "emoji": "🏞️"
     },
     "facts": [
      {
       "id": "earth-salar-de-uyuni-1",
       "clue": "____, in Bolivia, is the largest salt flat in the world, covering about 10,582 km².",
       "fact": "Salar de Uyuni, in Bolivia, is the largest salt flat in the world, covering about 10,582 km².",
       "sources": [
        {
         "title": "Salar de Uyuni",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Salar_de_Uyuni"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-atacama",
     "name": "Atacama",
     "region": "Chile",
     "lat": -24.5,
     "lng": -69.25,
     "emoji": "🏜️",
     "suspect": {
      "name": "Rocky Ledge",
      "alias": "The Landslide",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "earth-atacama-1",
       "clue": "The ____, in Chile, is the driest non-polar desert on Earth. Some weather stations there have never recorded rain.",
       "fact": "The Atacama, in Chile, is the driest non-polar desert on Earth. Some weather stations there have never recorded rain.",
       "sources": [
        {
         "title": "Atacama Desert",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Atacama_Desert"
        },
        {
         "title": "Records of Weather and Climate Extremes",
         "publisher": "World Meteorological Organization",
         "url": "https://wmo.int/files/records-of-weather-and-climate-extremes-table"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-yellowstone",
     "name": "Yellowstone",
     "region": "Wyoming, US",
     "lat": 44.43,
     "lng": -110.59,
     "emoji": "🏞️",
     "suspect": {
      "name": "Gale Forsythe",
      "alias": "The Squall",
      "emoji": "🌪️"
     },
     "facts": [
      {
       "id": "earth-yellowstone-1",
       "clue": "Signed into law in 1872 mainly in Wyoming, ____ was established as the first protected park of its kind in the world.",
       "fact": "Signed into law in 1872 mainly in Wyoming, Yellowstone became the first national park in the world.",
       "sources": [
        {
         "title": "Yellowstone National Park",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Yellowstone_National_Park"
        }
       ]
      },
      {
       "id": "earth-yellowstone-2",
       "clue": "Most of ____ is in Wyoming. Small parts are in Montana and Idaho.",
       "fact": "Most of Yellowstone is in Wyoming. Small parts are in Montana and Idaho.",
       "sources": [
        {
         "title": "Yellowstone National Park",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Yellowstone_National_Park"
        }
       ]
      },
      {
       "id": "earth-yellowstone-3",
       "clue": "Old Faithful, the geyser that erupts so regularly it was named for it, is in ____.",
       "fact": "Old Faithful, the geyser that erupts so regularly it was named for it, is in Yellowstone.",
       "sources": [
        {
         "title": "Old Faithful",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Old_Faithful"
        }
       ]
      },
      {
       "id": "earth-yellowstone-4",
       "clue": "Steamboat Geyser, in ____, is the tallest active geyser. It can shoot over 90 m.",
       "fact": "Steamboat Geyser, in Yellowstone, is the tallest active geyser. It can shoot over 90 m.",
       "sources": [
        {
         "title": "Steamboat Geyser",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Steamboat_Geyser"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-northeast-greenland-national-park",
     "name": "Northeast Greenland National Park",
     "region": "Greenland",
     "lat": 76,
     "lng": -30,
     "emoji": "🏞️",
     "suspect": {
      "name": "Terra Firma",
      "alias": "The Fault Line",
      "emoji": "🌋"
     },
     "facts": [
      {
       "id": "earth-northeast-greenland-national-park-1",
       "clue": "Established in 1974 on the world's largest island, ____ protects 972,000 km²—the largest protected land area of its kind, bigger than most countries.",
       "fact": "Established in 1974, Northeast Greenland National Park protects 972,000 km²—the world's largest national park, bigger than most countries.",
       "sources": [
        {
         "title": "Northeast Greenland National Park",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Northeast_Greenland_National_Park"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-general-sherman",
     "name": "General Sherman",
     "region": "California, US",
     "lat": 36.58,
     "lng": -118.75,
     "emoji": "🌲",
     "suspect": {
      "name": "Misty Banks",
      "alias": "The Fogbank",
      "emoji": "🌫️"
     },
     "facts": [
      {
       "id": "earth-general-sherman-1",
       "clue": "____, a giant sequoia in California, is the largest tree by volume.",
       "fact": "General Sherman, a giant sequoia in California, is the largest tree by volume.",
       "sources": [
        {
         "title": "General Sherman Tree",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/General_Sherman_Tree"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-blue-mountains-of-oregon",
     "name": "Blue Mountains of Oregon",
     "region": "Oregon, US",
     "lat": 44.82,
     "lng": -118.1,
     "emoji": "🍄",
     "suspect": {
      "name": "Hal Stone",
      "alias": "The Hailstorm",
      "emoji": "🧊"
     },
     "facts": [
      {
       "id": "earth-blue-mountains-of-oregon-1",
       "clue": "A honey fungus in Malheur National Forest in the ____ is widely called the largest living organism on Earth, covering about 9.1 km² underground.",
       "fact": "A honey fungus in Malheur National Forest in the Blue Mountains of Oregon is widely called the largest living organism on Earth, covering about 9.1 km² underground.",
       "sources": [
        {
         "title": "Armillaria ostoyae",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Armillaria_ostoyae"
        },
        {
         "title": "Blue Mountains (Pacific Northwest)",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Blue_Mountains_(Pacific_Northwest)"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-la-rinconada",
     "name": "La Rinconada",
     "region": "Peru",
     "lat": -14.63,
     "lng": -69.45,
     "emoji": "🏘️",
     "suspect": {
      "name": "Del Ta",
      "alias": "The Silt Runner",
      "emoji": "🏞️"
     },
     "facts": [
      {
       "id": "earth-la-rinconada-1",
       "clue": "____, a Peruvian gold-mining town at 4,900 to 5,100 m above sea level, is the highest larger permanent settlement in the world.",
       "fact": "La Rinconada, a Peruvian gold-mining town at 4,900 to 5,100 m above sea level, is the highest larger permanent settlement in the world.",
       "sources": [
        {
         "title": "La Rinconada, Peru",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/La_Rinconada,_Peru"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-ushuaia",
     "name": "Ushuaia",
     "region": "Argentina",
     "lat": -54.8,
     "lng": -68.3,
     "emoji": "🏘️",
     "suspect": {
      "name": "Rocky Ledge",
      "alias": "The Landslide",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "earth-ushuaia-1",
       "clue": "____, in Argentina, is often called the southernmost city in the world. Tiny Puerto Williams in Chile is farther south, but much smaller.",
       "fact": "Ushuaia, in Argentina, is often called the southernmost city in the world. Tiny Puerto Williams in Chile is farther south, but much smaller.",
       "sources": [
        {
         "title": "Ushuaia",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Ushuaia"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "earth-waters-carmen",
   "title": "Where in Earth's Extreme Waters is Carmen Sandiego?",
   "places": [
    {
     "id": "earth-pacific-ocean",
     "name": "Pacific Ocean",
     "region": "Ocean",
     "lat": 0,
     "lng": -160,
     "emoji": "🌊",
     "suspect": {
      "name": "Rocky Ledge",
      "alias": "The Landslide",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "earth-pacific-ocean-1",
       "clue": "The ____ is the largest and deepest of Earth’s oceanic divisions, averaging about 4,000 m deep.",
       "fact": "The Pacific Ocean is the largest and deepest of Earth’s oceanic divisions, averaging about 4,000 m deep.",
       "sources": [
        {
         "title": "Pacific Ocean",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Pacific_Ocean"
        }
       ]
      },
      {
       "id": "earth-pacific-ocean-2",
       "clue": "Challenger Deep, in the Mariana Trench of the ____, is the deepest known point in the seabed, nearly 11,000 m down.",
       "fact": "Challenger Deep, in the Mariana Trench of the Pacific Ocean, is the deepest known point in the seabed, nearly 11,000 m down.",
       "sources": [
        {
         "title": "Challenger Deep",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Challenger_Deep"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-atlantic-ocean",
     "name": "Atlantic Ocean",
     "region": "Ocean",
     "lat": 0,
     "lng": -30,
     "emoji": "🌊",
     "suspect": {
      "name": "Gale Forsythe",
      "alias": "The Squall",
      "emoji": "🌪️"
     },
     "facts": [
      {
       "id": "earth-atlantic-ocean-1",
       "clue": "Among Earth’s major oceans, the ____ is on average the saltiest.",
       "fact": "Among Earth’s major oceans, the Atlantic Ocean is on average the saltiest.",
       "sources": [
        {
         "title": "Atlantic Ocean",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Atlantic_Ocean"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-arctic-ocean",
     "name": "Arctic Ocean",
     "region": "Ocean",
     "lat": 90,
     "lng": 0,
     "emoji": "🌊",
     "suspect": {
      "name": "Terra Firma",
      "alias": "The Fault Line",
      "emoji": "🌋"
     },
     "facts": [
      {
       "id": "earth-arctic-ocean-1",
       "clue": "The ____ is the smallest ocean.",
       "fact": "The Arctic Ocean is the smallest ocean.",
       "sources": [
        {
         "title": "Arctic Ocean",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Arctic_Ocean"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-southern-ocean",
     "name": "Southern Ocean",
     "region": "Ocean",
     "lat": -60,
     "lng": 0,
     "emoji": "🌊",
     "suspect": {
      "name": "Misty Banks",
      "alias": "The Fogbank",
      "emoji": "🌫️"
     },
     "facts": [
      {
       "id": "earth-southern-ocean-1",
       "clue": "The ____, around Antarctica, is the most recently recognized ocean. National Geographic added it to its maps in 2021.",
       "fact": "The Southern Ocean, around Antarctica, is the most recently recognized ocean. National Geographic added it to its maps in 2021.",
       "sources": [
        {
         "title": "Southern Ocean",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Southern_Ocean"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-point-nemo",
     "name": "Point Nemo",
     "region": "South Pacific",
     "lat": -48.88,
     "lng": -123.39,
     "emoji": "📍",
     "suspect": {
      "name": "Hal Stone",
      "alias": "The Hailstorm",
      "emoji": "🧊"
     },
     "facts": [
      {
       "id": "earth-point-nemo-1",
       "clue": "____ is the spot in the ocean farthest from any land, about 2,700 km away. Space stations are retired near it.",
       "fact": "Point Nemo is the spot in the ocean farthest from any land, about 2,700 km away. Space stations are retired near it.",
       "sources": [
        {
         "title": "Pole of inaccessibility",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Pole_of_inaccessibility"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-red-sea",
     "name": "Red Sea",
     "region": "Africa and Asia",
     "lat": 20,
     "lng": 38,
     "emoji": "🌊",
     "suspect": {
      "name": "Del Ta",
      "alias": "The Silt Runner",
      "emoji": "🏞️"
     },
     "facts": [
      {
       "id": "earth-red-sea-1",
       "clue": "The ____, between Africa and Arabia, is one of the saltiest bodies of water in the world owing to high evaporation, low rainfall, and no major river inflow.",
       "fact": "The Red Sea, between Africa and Arabia, is one of the saltiest bodies of water in the world owing to high evaporation, low rainfall, and no major river inflow.",
       "sources": [
        {
         "title": "Red Sea",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Red_Sea"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-sargasso-sea",
     "name": "Sargasso Sea",
     "region": "North Atlantic",
     "lat": 28,
     "lng": -66,
     "emoji": "🌊",
     "suspect": {
      "name": "Rocky Ledge",
      "alias": "The Landslide",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "earth-sargasso-sea-1",
       "clue": "The ____ is the only sea on Earth bounded entirely by swirling ocean currents rather than land.",
       "fact": "The Sargasso Sea, in the North Atlantic, is the only sea on Earth bounded entirely by swirling ocean currents rather than land.",
       "sources": [
        {
         "title": "Sargasso Sea",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Sargasso_Sea"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-bay-of-bengal",
     "name": "Bay of Bengal",
     "region": "Indian Ocean",
     "lat": 15,
     "lng": 88,
     "emoji": "🌊",
     "suspect": {
      "name": "Gale Forsythe",
      "alias": "The Squall",
      "emoji": "🌪️"
     },
     "facts": [
      {
       "id": "earth-bay-of-bengal-1",
       "clue": "Covering 2.6 million km² in the northeastern Indian Ocean, the ____ is the largest marine embayment of its kind in the world.",
       "fact": "Covering 2.6 million km² in the northeastern Indian Ocean, the Bay of Bengal is the largest bay in the world.",
       "sources": [
        {
         "title": "Bay of Bengal",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Bay_of_Bengal"
        },
        {
         "title": "Bay",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Bay"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-bay-of-fundy",
     "name": "Bay of Fundy",
     "region": "Canada",
     "lat": 45,
     "lng": -65.8,
     "emoji": "🌊",
     "suspect": {
      "name": "Terra Firma",
      "alias": "The Fault Line",
      "emoji": "🌋"
     },
     "facts": [
      {
       "id": "earth-bay-of-fundy-1",
       "clue": "The ____, in Canada, has the highest tides in the world, rising about 16 m.",
       "fact": "The Bay of Fundy, in Canada, has the highest tides in the world, rising about 16 m.",
       "sources": [
        {
         "title": "Bay of Fundy",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Bay_of_Fundy"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-scoresby-sund",
     "name": "Scoresby Sound",
     "region": "Greenland",
     "lat": 70.4,
     "lng": -23,
     "emoji": "🧊",
     "suspect": {
      "name": "Misty Banks",
      "alias": "The Fogbank",
      "emoji": "🌫️"
     },
     "facts": [
      {
       "id": "earth-scoresby-sund-1",
       "clue": "____, in eastern Greenland, is one of the largest and longest fjord systems in the world, extending up to 350 km inland.",
       "fact": "Scoresby Sound, in eastern Greenland, is one of the largest and longest fjord systems in the world, extending up to 350 km inland.",
       "sources": [
        {
         "title": "Scoresby Sound",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Scoresby_Sound"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-dead-sea",
     "name": "Dead Sea",
     "region": "Israel, Jordan and the West Bank",
     "lat": 31.5,
     "lng": 35.5,
     "emoji": "🧂",
     "suspect": {
      "name": "Hal Stone",
      "alias": "The Hailstorm",
      "emoji": "🧊"
     },
     "facts": [
      {
       "id": "earth-dead-sea-1",
       "clue": "The shores of the ____ form the lowest dry land on Earth, nearly 440 m below sea level as of 2025.",
       "fact": "The shores of the Dead Sea form the lowest dry land on Earth, nearly 440 m below sea level as of 2025.",
       "sources": [
        {
         "title": "Dead Sea",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Dead_Sea"
        },
        {
         "title": "Records of Weather and Climate Extremes",
         "publisher": "World Meteorological Organization",
         "url": "https://wmo.int/files/records-of-weather-and-climate-extremes-table"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-don-juan-pond",
     "name": "Don Juan Pond",
     "region": "Antarctica",
     "lat": -77.56,
     "lng": 161.19,
     "emoji": "🧂",
     "suspect": {
      "name": "Del Ta",
      "alias": "The Silt Runner",
      "emoji": "🏞️"
     },
     "facts": [
      {
       "id": "earth-don-juan-pond-1",
       "clue": "____, in Antarctica, is the saltiest of the Antarctic lakes at over 45% salinity, rarely freezing even below −50 °C.",
       "fact": "Don Juan Pond, in Antarctica, is the saltiest of the Antarctic lakes at over 45% salinity, rarely freezing even below −50 °C.",
       "sources": [
        {
         "title": "Don Juan Pond",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Don_Juan_Pond"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-lake-baikal",
     "name": "Lake Baikal",
     "region": "Russia",
     "lat": 53.5,
     "lng": 108,
     "emoji": "💧",
     "suspect": {
      "name": "Rocky Ledge",
      "alias": "The Landslide",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "earth-lake-baikal-1",
       "clue": "____ is the largest lake by volume of fresh water, holding about a fifth of the world's unfrozen surface fresh water.",
       "fact": "Lake Baikal is the largest lake by volume of fresh water, holding about a fifth of the world's unfrozen surface fresh water.",
       "sources": [
        {
         "title": "Lake Baikal",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Lake_Baikal"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-lake-victoria",
     "name": "Lake Victoria",
     "region": "East Africa",
     "lat": -1,
     "lng": 33,
     "emoji": "💧",
     "suspect": {
      "name": "Gale Forsythe",
      "alias": "The Squall",
      "emoji": "🌪️"
     },
     "facts": [
      {
       "id": "earth-lake-victoria-1",
       "clue": "____ is the largest lake in Africa.",
       "fact": "Lake Victoria is the largest lake in Africa.",
       "sources": [
        {
         "title": "Lake Victoria",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Lake_Victoria"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-lake-ladoga",
     "name": "Lake Ladoga",
     "region": "Russia",
     "lat": 61,
     "lng": 31.5,
     "emoji": "💧",
     "suspect": {
      "name": "Terra Firma",
      "alias": "The Fault Line",
      "emoji": "🌋"
     },
     "facts": [
      {
       "id": "earth-lake-ladoga-1",
       "clue": "____, in northwestern Russia near St. Petersburg, is the largest lake located entirely in Europe.",
       "fact": "Lake Ladoga, in northwestern Russia near St. Petersburg, is the largest lake located entirely in Europe.",
       "sources": [
        {
         "title": "Lake Ladoga",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Lake_Ladoga"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-kati-thanda-lake-eyre",
     "name": "Kati Thanda–Lake Eyre",
     "region": "Australia",
     "lat": -28.4,
     "lng": 137.3,
     "emoji": "💧",
     "suspect": {
      "name": "Misty Banks",
      "alias": "The Fogbank",
      "emoji": "🌫️"
     },
     "facts": [
      {
       "id": "earth-kati-thanda-lake-eyre-1",
       "clue": "Usually a dry salt pan, ____ becomes the largest lake in Australia on the rare occasions when it fills completely.",
       "fact": "Usually a dry salt pan, Kati Thanda–Lake Eyre becomes the largest lake in Australia on the rare occasions when it fills completely.",
       "sources": [
        {
         "title": "Kati Thanda–Lake Eyre",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Kati_Thanda%E2%80%93Lake_Eyre"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-lake-hillier",
     "name": "Lake Hillier",
     "region": "Australia",
     "lat": -34.09,
     "lng": 123.2,
     "emoji": "💗",
     "suspect": {
      "name": "Hal Stone",
      "alias": "The Hailstorm",
      "emoji": "🧊"
     },
     "facts": [
      {
       "id": "earth-lake-hillier-1",
       "clue": "____, in Australia, is naturally bright pink, colored by salt-loving microorganisms, especially the alga Dunaliella salina.",
       "fact": "Lake Hillier, in Australia, is naturally bright pink, colored by salt-loving microorganisms, especially the alga Dunaliella salina.",
       "sources": [
        {
         "title": "Lake Hillier",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Lake_Hillier"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-lake-titicaca",
     "name": "Lake Titicaca",
     "region": "Peru and Bolivia",
     "lat": -15.8,
     "lng": -69.4,
     "emoji": "💧",
     "suspect": {
      "name": "Del Ta",
      "alias": "The Silt Runner",
      "emoji": "🏞️"
     },
     "facts": [
      {
       "id": "earth-lake-titicaca-1",
       "clue": "____, about 3,800 m up in the Andes, is often called the highest navigable lake.",
       "fact": "Lake Titicaca, about 3,800 m up in the Andes, is often called the highest navigable lake.",
       "sources": [
        {
         "title": "Lake Titicaca",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Lake_Titicaca"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-yangtze",
     "name": "Yangtze",
     "region": "China",
     "lat": 31.4,
     "lng": 121.5,
     "emoji": "🏞️",
     "suspect": {
      "name": "Rocky Ledge",
      "alias": "The Landslide",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "earth-yangtze-1",
       "clue": "The ____ is the longest river in Asia, about 6,300 km.",
       "fact": "The Yangtze is the longest river in Asia, about 6,300 km.",
       "sources": [
        {
         "title": "Yangtze",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Yangtze"
        }
       ]
      },
      {
       "id": "earth-yangtze-2",
       "clue": "The ____, in China, is the largest and longest river flowing entirely within a single country.",
       "fact": "The Yangtze, in China, is the largest and longest river flowing entirely within a single country.",
       "sources": [
        {
         "title": "Yangtze",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Yangtze"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-amazon",
     "name": "Amazon",
     "region": "South America",
     "lat": 0,
     "lng": -50,
     "emoji": "🏞️",
     "suspect": {
      "name": "Gale Forsythe",
      "alias": "The Squall",
      "emoji": "🌪️"
     },
     "facts": [
      {
       "id": "earth-amazon-1",
       "clue": "The ____ carries the most water of any river, about a fifth of all river water reaching the oceans.",
       "fact": "The Amazon carries the most water of any river, about a fifth of all river water reaching the oceans.",
       "sources": [
        {
         "title": "Amazon River",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Amazon_River"
        }
       ]
      },
      {
       "id": "earth-amazon-2",
       "clue": "The basin of the ____ holds the world's largest tropical rainforest, covering much of northern South America.",
       "fact": "The basin of the Amazon holds the world's largest tropical rainforest, covering much of northern South America.",
       "sources": [
        {
         "title": "Amazon rainforest",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Amazon_rainforest"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-congo-river",
     "name": "Congo River",
     "region": "Central Africa",
     "lat": -6,
     "lng": 12.4,
     "emoji": "🏞️",
     "suspect": {
      "name": "Terra Firma",
      "alias": "The Fault Line",
      "emoji": "🌋"
     },
     "facts": [
      {
       "id": "earth-congo-river-1",
       "clue": "The ____ crosses the equator twice as it curves through central Africa.",
       "fact": "The Congo River crosses the equator twice as it curves through central Africa.",
       "sources": [
        {
         "title": "Congo River",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Congo_River"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-danube",
     "name": "Danube",
     "region": "Europe",
     "lat": 45.2,
     "lng": 29.6,
     "emoji": "🏞️",
     "suspect": {
      "name": "Misty Banks",
      "alias": "The Fogbank",
      "emoji": "🌫️"
     },
     "facts": [
      {
       "id": "earth-danube-1",
       "clue": "The ____ flows through more countries than any other river: 10, from Germany to the Black Sea.",
       "fact": "The Danube flows through more countries than any other river: 10, from Germany to the Black Sea.",
       "sources": [
        {
         "title": "Danube",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Danube"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-murray",
     "name": "Murray",
     "region": "Australia",
     "lat": -35.56,
     "lng": 138.88,
     "emoji": "🏞️",
     "suspect": {
      "name": "Hal Stone",
      "alias": "The Hailstorm",
      "emoji": "🧊"
     },
     "facts": [
      {
       "id": "earth-murray-1",
       "clue": "The ____ is the longest river in Australia, about 2,500 km.",
       "fact": "The Murray is the longest river in Australia, about 2,500 km.",
       "sources": [
        {
         "title": "Murray River",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Murray_River"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-chicago-river",
     "name": "Chicago River",
     "region": "Illinois, US",
     "lat": 41.89,
     "lng": -87.62,
     "emoji": "🏙️",
     "suspect": {
      "name": "Del Ta",
      "alias": "The Silt Runner",
      "emoji": "🏞️"
     },
     "facts": [
      {
       "id": "earth-chicago-river-1",
       "clue": "The ____ was reversed by engineers in 1900 to carry sewage away from Lake Michigan.",
       "fact": "The Chicago River was reversed by engineers in 1900 to carry sewage away from Lake Michigan.",
       "sources": [
        {
         "title": "Chicago River",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Chicago_River"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-ganges-brahmaputra-delta",
     "name": "Ganges–Brahmaputra Delta",
     "region": "Bangladesh and India",
     "lat": 22.5,
     "lng": 89.5,
     "emoji": "🏞️",
     "suspect": {
      "name": "Rocky Ledge",
      "alias": "The Landslide",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "earth-ganges-brahmaputra-delta-1",
       "clue": "Predominantly in Bangladesh and West Bengal, India, the ____ is the largest river-mouth fan in the world.",
       "fact": "Predominantly in Bangladesh and West Bengal, India, the Ganges–Brahmaputra Delta is the largest river delta in the world.",
       "sources": [
        {
         "title": "Ganges Delta",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Ganges_Delta"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-pantanal",
     "name": "Pantanal",
     "region": "Brazil",
     "lat": -18,
     "lng": -57,
     "emoji": "🐊",
     "suspect": {
      "name": "Gale Forsythe",
      "alias": "The Squall",
      "emoji": "🌪️"
     },
     "facts": [
      {
       "id": "earth-pantanal-1",
       "clue": "The ____, mostly in Brazil, is the largest tropical wetland.",
       "fact": "The Pantanal, mostly in Brazil, is the largest tropical wetland.",
       "sources": [
        {
         "title": "Pantanal",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Pantanal"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-marajo",
     "name": "Marajó",
     "region": "Brazil",
     "lat": -1,
     "lng": -49.5,
     "emoji": "🏝️",
     "suspect": {
      "name": "Terra Firma",
      "alias": "The Fault Line",
      "emoji": "🌋"
     },
     "facts": [
      {
       "id": "earth-marajo-1",
       "clue": "____, a coastal delta landmass in Pará, Brazil, bordered by river mouths and the open ocean, covers about 40,100 km²—comparable in size to Switzerland.",
       "fact": "Marajó, a coastal delta island at the mouth of the Amazon in Pará, Brazil, bordered by river waters and the Atlantic Ocean, covers about 40,100 km²—comparable in size to Switzerland.",
       "sources": [
        {
         "title": "Marajó",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Maraj%C3%B3"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-manitoulin-island",
     "name": "Manitoulin Island",
     "region": "Ontario, Canada",
     "lat": 45.8,
     "lng": -82,
     "emoji": "🏝️",
     "suspect": {
      "name": "Misty Banks",
      "alias": "The Fogbank",
      "emoji": "🌫️"
     },
     "facts": [
      {
       "id": "earth-manitoulin-island-1",
       "clue": "Covering 2,766 km² in Ontario’s Lake Huron, ____ is the largest landmass inside a freshwater lake and holds over 100 lakes of its own.",
       "fact": "Covering 2,766 km² in Ontario’s Lake Huron, Manitoulin Island is the largest lake island in the world and holds over 100 lakes of its own.",
       "sources": [
        {
         "title": "Manitoulin Island",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Manitoulin_Island"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-sicily",
     "name": "Sicily",
     "region": "Italy",
     "lat": 37.6,
     "lng": 14,
     "emoji": "🏝️",
     "suspect": {
      "name": "Hal Stone",
      "alias": "The Hailstorm",
      "emoji": "🧊"
     },
     "facts": [
      {
       "id": "earth-sicily-1",
       "clue": "____ is the largest island in the Mediterranean.",
       "fact": "Sicily is the largest island in the Mediterranean.",
       "sources": [
        {
         "title": "Sicily",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Sicily"
        }
       ]
      }
     ]
    },
    {
     "id": "earth-tristan-da-cunha",
     "name": "Tristan da Cunha",
     "region": "South Atlantic",
     "lat": -37.11,
     "lng": -12.28,
     "emoji": "🏝️",
     "suspect": {
      "name": "Del Ta",
      "alias": "The Silt Runner",
      "emoji": "🏞️"
     },
     "facts": [
      {
       "id": "earth-tristan-da-cunha-1",
       "clue": "Accessible only by a six-day ship journey from Cape Town, South Africa, volcanic ____ is considered the most remote inhabited archipelago in the world.",
       "fact": "Accessible only by a six-day ship journey from Cape Town, South Africa, volcanic Tristan da Cunha in the South Atlantic is considered the most remote inhabited archipelago in the world.",
       "sources": [
        {
         "title": "Tristan da Cunha",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Tristan_da_Cunha"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "weather-records-carmen",
   "title": "Where in the Weather Records is Carmen Sandiego?",
   "places": [
    {
     "id": "weather-death-valley",
     "name": "Death Valley",
     "region": "California, US",
     "lat": 36.46,
     "lng": -116.87,
     "emoji": "🌡️",
     "suspect": {
      "name": "Rocky Ledge",
      "alias": "The Landslide",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "weather-death-valley-1",
       "clue": "____, in California, holds the official WMO record for highest air temperature on Earth: 56.7 °C on July 10, 1913, though some meteorologists question that reading.",
       "fact": "Death Valley, in California, holds the official WMO record for highest air temperature on Earth: 56.7 °C on July 10, 1913, though some meteorologists question that reading.",
       "sources": [
        {
         "title": "Highest temperature recorded on Earth",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Highest_temperature_recorded_on_Earth"
        },
        {
         "title": "Records of Weather and Climate Extremes",
         "publisher": "World Meteorological Organization",
         "url": "https://wmo.int/files/records-of-weather-and-climate-extremes-table"
        }
       ]
      },
      {
       "id": "weather-death-valley-2",
       "clue": "____ reclaimed the heat record in 2012 after the WMO disqualified Libya’s 57.8 °C reading from 1922, concluding an inexperienced observer likely misread a new replacement instrument.",
       "fact": "Death Valley reclaimed the heat record in 2012 after the WMO disqualified Libya’s 57.8 °C reading from 1922, concluding an inexperienced observer likely misread a new replacement instrument.",
       "sources": [
        {
         "title": "Highest temperature recorded on Earth",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Highest_temperature_recorded_on_Earth"
        },
        {
         "title": "Records of Weather and Climate Extremes",
         "publisher": "World Meteorological Organization",
         "url": "https://wmo.int/files/records-of-weather-and-climate-extremes-table"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-vostok-station",
     "name": "Vostok Station",
     "region": "Antarctica",
     "lat": -78.46,
     "lng": 106.84,
     "emoji": "🥶",
     "suspect": {
      "name": "Gale Forsythe",
      "alias": "The Squall",
      "emoji": "🌪️"
     },
     "facts": [
      {
       "id": "weather-vostok-station-1",
       "clue": "____, in Antarctica, recorded the lowest temperature on Earth: −89.2 °C on July 21, 1983.",
       "fact": "Vostok Station, in Antarctica, recorded the lowest temperature on Earth: −89.2 °C on July 21, 1983.",
       "sources": [
        {
         "title": "Lowest temperature recorded on Earth",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Lowest_temperature_recorded_on_Earth"
        },
        {
         "title": "Records of Weather and Climate Extremes",
         "publisher": "World Meteorological Organization",
         "url": "https://wmo.int/files/records-of-weather-and-climate-extremes-table"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-oymyakon",
     "name": "Oymyakon",
     "region": "Siberia, Russia",
     "lat": 63.46,
     "lng": 142.79,
     "emoji": "🥶",
     "suspect": {
      "name": "Terra Firma",
      "alias": "The Fault Line",
      "emoji": "🌋"
     },
     "facts": [
      {
       "id": "weather-oymyakon-1",
       "clue": "____, in Siberia, is often called the coldest inhabited town. It has dropped below −67 °C.",
       "fact": "Oymyakon, in Siberia, is often called the coldest inhabited town. It has dropped below −67 °C.",
       "sources": [
        {
         "title": "Oymyakon",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Oymyakon"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-klinck",
     "name": "Klinck",
     "region": "Greenland",
     "lat": 72.18,
     "lng": -40,
     "emoji": "🥶",
     "suspect": {
      "name": "Misty Banks",
      "alias": "The Fogbank",
      "emoji": "🌫️"
     },
     "facts": [
      {
       "id": "weather-klinck-1",
       "clue": "____, in Greenland, recorded the coldest temperature in the Northern Hemisphere: −69.6 °C in 1991.",
       "fact": "Klinck, in Greenland, recorded the coldest temperature in the Northern Hemisphere: −69.6 °C in 1991.",
       "sources": [
        {
         "title": "List of weather records",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/List_of_weather_records"
        },
        {
         "title": "Climate of Greenland",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Climate_of_Greenland"
        },
        {
         "title": "Records of Weather and Climate Extremes",
         "publisher": "World Meteorological Organization",
         "url": "https://wmo.int/files/records-of-weather-and-climate-extremes-table"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-prospect-creek",
     "name": "Prospect Creek",
     "region": "Alaska, US",
     "lat": 66.81,
     "lng": -150.67,
     "emoji": "🥶",
     "suspect": {
      "name": "Hal Stone",
      "alias": "The Hailstorm",
      "emoji": "🧊"
     },
     "facts": [
      {
       "id": "weather-prospect-creek-1",
       "clue": "____, Alaska, recorded the coldest temperature in the United States: −62.1 °C in 1971.",
       "fact": "Prospect Creek, Alaska, recorded the coldest temperature in the United States: −62.1 °C in 1971.",
       "sources": [
        {
         "title": "Prospect Creek, Alaska",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Prospect_Creek,_Alaska"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-mawsynram",
     "name": "Mawsynram",
     "region": "India",
     "lat": 25.3,
     "lng": 91.58,
     "emoji": "🌧️",
     "suspect": {
      "name": "Del Ta",
      "alias": "The Silt Runner",
      "emoji": "🏞️"
     },
     "facts": [
      {
       "id": "weather-mawsynram-1",
       "clue": "____, in Meghalaya, northeast India, averages about 11,872 mm of rain a year and is officially recognized as the wettest place on Earth, alongside rival claims in Colombia.",
       "fact": "Mawsynram, in Meghalaya, northeast India, averages about 11,872 mm of rain a year and is officially recognized as the wettest place on Earth, alongside rival claims in Colombia.",
       "sources": [
        {
         "title": "Mawsynram",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Mawsynram"
        },
        {
         "title": "Records of Weather and Climate Extremes",
         "publisher": "World Meteorological Organization",
         "url": "https://wmo.int/files/records-of-weather-and-climate-extremes-table"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-cherrapunji",
     "name": "Cherrapunji",
     "region": "India",
     "lat": 25.3,
     "lng": 91.7,
     "emoji": "🌧️",
     "suspect": {
      "name": "Rocky Ledge",
      "alias": "The Landslide",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "weather-cherrapunji-1",
       "clue": "____, in India, had the most rain ever in one year: about 26.5 m from August 1860 to July 1861.",
       "fact": "Cherrapunji, in India, had the most rain ever in one year: about 26.5 m from August 1860 to July 1861.",
       "sources": [
        {
         "title": "Cherrapunji",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Cherrapunji"
        },
        {
         "title": "Records of Weather and Climate Extremes",
         "publisher": "World Meteorological Organization",
         "url": "https://wmo.int/files/records-of-weather-and-climate-extremes-table"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-reunion",
     "name": "Réunion",
     "region": "Indian Ocean",
     "lat": -21.11,
     "lng": 55.53,
     "emoji": "🌧️",
     "suspect": {
      "name": "Gale Forsythe",
      "alias": "The Squall",
      "emoji": "🌪️"
     },
     "facts": [
      {
       "id": "weather-reunion-1",
       "clue": "____, in the Indian Ocean, recorded 1,825 mm of rain in 24 hours during Tropical Cyclone Denise in January 1966, the world 24-hour rainfall record.",
       "fact": "Réunion, in the Indian Ocean, recorded 1,825 mm of rain in 24 hours during Tropical Cyclone Denise in January 1966, the world 24-hour rainfall record.",
       "sources": [
        {
         "title": "List of weather records",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/List_of_weather_records"
        },
        {
         "title": "Records of Weather and Climate Extremes",
         "publisher": "World Meteorological Organization",
         "url": "https://wmo.int/files/records-of-weather-and-climate-extremes-table"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-arica",
     "name": "Arica",
     "region": "Chile",
     "lat": -18.48,
     "lng": -70.31,
     "emoji": "🏜️",
     "suspect": {
      "name": "Terra Firma",
      "alias": "The Fault Line",
      "emoji": "🌋"
     },
     "facts": [
      {
       "id": "weather-arica-1",
       "clue": "____, a port city in northern Chile with historical averages below 1 mm of rain a year—2.3 mm in 1991–2020 normals—is often called the driest city on Earth.",
       "fact": "Arica, a port city in northern Chile with historical averages below 1 mm of rain a year—2.3 mm in 1991–2020 normals—is often called the driest city on Earth.",
       "sources": [
        {
         "title": "Arica",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Arica"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-dallol",
     "name": "Dallol",
     "region": "Ethiopia",
     "lat": 14.24,
     "lng": 40.3,
     "emoji": "🌡️",
     "suspect": {
      "name": "Misty Banks",
      "alias": "The Fogbank",
      "emoji": "🌫️"
     },
     "facts": [
      {
       "id": "weather-dallol-1",
       "clue": "____, in Ethiopia, has the hottest year-round average temperature on record, about 35 °C over several years of records.",
       "fact": "Dallol, in Ethiopia, has the hottest year-round average temperature on record, about 35 °C over several years of records.",
       "sources": [
        {
         "title": "Dallol (ghost town)",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Dallol_(ghost_town)"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-lut-desert",
     "name": "Lut Desert",
     "region": "Iran",
     "lat": 30.5,
     "lng": 58.5,
     "emoji": "🌡️",
     "suspect": {
      "name": "Hal Stone",
      "alias": "The Hailstorm",
      "emoji": "🧊"
     },
     "facts": [
      {
       "id": "weather-lut-desert-1",
       "clue": "NASA satellites measured the hottest land surface on Earth in Iran's ____: 70.7 °C in 2005, later revised to 80.8 °C in higher-resolution data.",
       "fact": "NASA satellites measured the hottest land surface on Earth in Iran's Lut Desert: 70.7 °C in 2005, later revised to 80.8 °C in higher-resolution data.",
       "sources": [
        {
         "title": "Lut Desert",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Lut_Desert"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-mitribah",
     "name": "Mitribah",
     "region": "Kuwait",
     "lat": 29.82,
     "lng": 47.27,
     "emoji": "🌡️",
     "suspect": {
      "name": "Del Ta",
      "alias": "The Silt Runner",
      "emoji": "🏞️"
     },
     "facts": [
      {
       "id": "weather-mitribah-1",
       "clue": "____, Kuwait, recorded a WMO-verified 53.9 °C in July 2016, the highest modern instrumental temperature verified in Asia.",
       "fact": "Mitribah, Kuwait, recorded a WMO-verified 53.9 °C in July 2016, the highest modern instrumental temperature verified in Asia.",
       "sources": [
        {
         "title": "List of weather records",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/List_of_weather_records"
        },
        {
         "title": "Records of Weather and Climate Extremes",
         "publisher": "World Meteorological Organization",
         "url": "https://wmo.int/files/records-of-weather-and-climate-extremes-table"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-kebili",
     "name": "Kebili",
     "region": "Tunisia",
     "lat": 33.7,
     "lng": 8.97,
     "emoji": "🌡️",
     "suspect": {
      "name": "Rocky Ledge",
      "alias": "The Landslide",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "weather-kebili-1",
       "clue": "____, Tunisia, holds the WMO-listed temperature record for Africa at 55 °C in July 1931, though meteorologists have questioned colonial-era desert readings.",
       "fact": "Kebili, Tunisia, holds the WMO-listed temperature record for Africa at 55 °C in July 1931, though meteorologists have questioned colonial-era desert readings.",
       "sources": [
        {
         "title": "List of weather records",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/List_of_weather_records"
        },
        {
         "title": "Records of Weather and Climate Extremes",
         "publisher": "World Meteorological Organization",
         "url": "https://wmo.int/files/records-of-weather-and-climate-extremes-table"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-floridia",
     "name": "Floridia",
     "region": "Sicily, Italy",
     "lat": 37.08,
     "lng": 15.15,
     "emoji": "🌡️",
     "suspect": {
      "name": "Gale Forsythe",
      "alias": "The Squall",
      "emoji": "🌪️"
     },
     "facts": [
      {
       "id": "weather-floridia-1",
       "clue": "____, in Sicily, recorded the highest temperature in Europe: 48.8 °C in August 2021.",
       "fact": "Floridia, in Sicily, recorded the highest temperature in Europe: 48.8 °C in August 2021.",
       "sources": [
        {
         "title": "Floridia",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Floridia"
        },
        {
         "title": "Records of Weather and Climate Extremes",
         "publisher": "World Meteorological Organization",
         "url": "https://wmo.int/files/records-of-weather-and-climate-extremes-table"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-oodnadatta",
     "name": "Oodnadatta",
     "region": "South Australia",
     "lat": -27.55,
     "lng": 135.45,
     "emoji": "🌡️",
     "suspect": {
      "name": "Terra Firma",
      "alias": "The Fault Line",
      "emoji": "🌋"
     },
     "facts": [
      {
       "id": "weather-oodnadatta-1",
       "clue": "____, South Australia, recorded 50.7 °C in January 1960, Australia’s highest reliably measured temperature—a mark tied by Onslow in January 2022.",
       "fact": "Oodnadatta, South Australia, recorded 50.7 °C in January 1960, Australia’s highest reliably measured temperature—a mark tied by Onslow in January 2022.",
       "sources": [
        {
         "title": "Oodnadatta",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Oodnadatta"
        },
        {
         "title": "List of weather records",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/List_of_weather_records"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-lytton",
     "name": "Lytton",
     "region": "British Columbia, Canada",
     "lat": 50.23,
     "lng": -121.58,
     "emoji": "🌡️",
     "suspect": {
      "name": "Misty Banks",
      "alias": "The Fogbank",
      "emoji": "🌫️"
     },
     "facts": [
      {
       "id": "weather-lytton-1",
       "clue": "____, British Columbia, set the all-time heat record for Canada, 49.6 °C, in June 2021. A wildfire destroyed most of the village a day later.",
       "fact": "Lytton, British Columbia, set the all-time heat record for Canada, 49.6 °C, in June 2021. A wildfire destroyed most of the village a day later.",
       "sources": [
        {
         "title": "Lytton, British Columbia",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Lytton,_British_Columbia"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-coningsby",
     "name": "Coningsby",
     "region": "Lincolnshire, UK",
     "lat": 53.1,
     "lng": -0.17,
     "emoji": "🌡️",
     "suspect": {
      "name": "Hal Stone",
      "alias": "The Hailstorm",
      "emoji": "🧊"
     },
     "facts": [
      {
       "id": "weather-coningsby-1",
       "clue": "____, Lincolnshire, recorded the highest temperature in the UK: 40.3 °C in July 2022.",
       "fact": "Coningsby, Lincolnshire, recorded the highest temperature in the UK: 40.3 °C in July 2022.",
       "sources": [
        {
         "title": "2022 United Kingdom heatwaves",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/2022_United_Kingdom_heatwaves"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-verkhoyansk",
     "name": "Verkhoyansk",
     "region": "Siberia, Russia",
     "lat": 67.55,
     "lng": 133.39,
     "emoji": "🌡️",
     "suspect": {
      "name": "Del Ta",
      "alias": "The Silt Runner",
      "emoji": "🏞️"
     },
     "facts": [
      {
       "id": "weather-verkhoyansk-1",
       "clue": "____, in Siberia, recorded the highest temperature in the Arctic: 38 °C in June 2020.",
       "fact": "Verkhoyansk, in Siberia, recorded the highest temperature in the Arctic: 38 °C in June 2020.",
       "sources": [
        {
         "title": "Verkhoyansk",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Verkhoyansk"
        },
        {
         "title": "Records of Weather and Climate Extremes",
         "publisher": "World Meteorological Organization",
         "url": "https://wmo.int/files/records-of-weather-and-climate-extremes-table"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-esperanza-base",
     "name": "Esperanza Base",
     "region": "Antarctic Peninsula",
     "lat": -63.4,
     "lng": -56.99,
     "emoji": "🌡️",
     "suspect": {
      "name": "Rocky Ledge",
      "alias": "The Landslide",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "weather-esperanza-base-1",
       "clue": "____, on the Antarctic Peninsula, recorded the highest temperature in Antarctica: 18.3 °C in February 2020.",
       "fact": "Esperanza Base, on the Antarctic Peninsula, recorded the highest temperature in Antarctica: 18.3 °C in February 2020.",
       "sources": [
        {
         "title": "Esperanza Base",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Esperanza_Base"
        },
        {
         "title": "Records of Weather and Climate Extremes",
         "publisher": "World Meteorological Organization",
         "url": "https://wmo.int/files/records-of-weather-and-climate-extremes-table"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-loma",
     "name": "Loma",
     "region": "Montana, US",
     "lat": 47.94,
     "lng": -110.5,
     "emoji": "🌡️",
     "suspect": {
      "name": "Gale Forsythe",
      "alias": "The Squall",
      "emoji": "🌪️"
     },
     "facts": [
      {
       "id": "weather-loma-1",
       "clue": "____, Montana, had the biggest 24-hour temperature change in the United States in 1972: about 57 °C, from −48 °C to 9 °C.",
       "fact": "Loma, Montana, had the biggest 24-hour temperature change in the United States in 1972: about 57 °C, from −48 °C to 9 °C.",
       "sources": [
        {
         "title": "Loma, Montana",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Loma,_Montana"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-spearfish",
     "name": "Spearfish",
     "region": "South Dakota, US",
     "lat": 44.49,
     "lng": -103.86,
     "emoji": "🌡️",
     "suspect": {
      "name": "Terra Firma",
      "alias": "The Fault Line",
      "emoji": "🌋"
     },
     "facts": [
      {
       "id": "weather-spearfish-1",
       "clue": "In January 1943 the temperature in ____, South Dakota, rose about 27 °C in two minutes, from −20 °C to 7 °C, thanks to a warm chinook wind.",
       "fact": "In January 1943 the temperature in Spearfish, South Dakota, rose about 27 °C in two minutes, from −20 °C to 7 °C, thanks to a warm chinook wind.",
       "sources": [
        {
         "title": "Spearfish, South Dakota",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Spearfish,_South_Dakota"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-yuma",
     "name": "Yuma",
     "region": "Arizona, US",
     "lat": 32.69,
     "lng": -114.63,
     "emoji": "☀️",
     "suspect": {
      "name": "Misty Banks",
      "alias": "The Fogbank",
      "emoji": "🌫️"
     },
     "facts": [
      {
       "id": "weather-yuma-1",
       "clue": "____, Arizona, is often called the sunniest city in the world, with sun about 90 percent of daylight hours.",
       "fact": "Yuma, Arizona, is often called the sunniest city in the world, with sun about 90 percent of daylight hours.",
       "sources": [
        {
         "title": "Yuma, Arizona",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Yuma,_Arizona"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-grand-banks",
     "name": "Grand Banks",
     "region": "Newfoundland, Canada",
     "lat": 45,
     "lng": -51,
     "emoji": "🌫️",
     "suspect": {
      "name": "Hal Stone",
      "alias": "The Hailstorm",
      "emoji": "🧊"
     },
     "facts": [
      {
       "id": "weather-grand-banks-1",
       "clue": "Southeast of Newfoundland, the cold Labrador Current mixes with the warm Gulf Stream over the ____, causing frequent extreme fog over historic fishing grounds.",
       "fact": "Southeast of Newfoundland, the cold Labrador Current mixes with the warm Gulf Stream over the Grand Banks, causing frequent extreme fog over historic fishing grounds.",
       "sources": [
        {
         "title": "Grand Banks of Newfoundland",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Grand_Banks_of_Newfoundland"
        }
       ]
      }
     ]
    },
    {
     "id": "weather-mount-baker",
     "name": "Mt. Baker Ski Area",
     "region": "Washington, US",
     "lat": 48.86,
     "lng": -121.68,
     "emoji": "❄️",
     "suspect": {
      "name": "Del Ta",
      "alias": "The Silt Runner",
      "emoji": "🏞️"
     },
     "facts": [
      {
       "id": "weather-mount-baker-1",
       "clue": "In Washington's North Cascades near Mount Shuksan, ____ recorded 29 m (1,140 inches) of snow in 1998–99, the world single-season snowfall record.",
       "fact": "In Washington's North Cascades near Mount Shuksan, Mt. Baker Ski Area recorded 29 m (1,140 inches) of snow in 1998–99, the world single-season snowfall record.",
       "sources": [
        {
         "title": "Mt. Baker Ski Area",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Mt._Baker_Ski_Area"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "disaster-records-carmen",
   "title": "Where in the Disaster Records is Carmen Sandiego?",
   "places": [
    {
     "id": "disaster-vivian",
     "name": "Vivian",
     "region": "South Dakota, US",
     "lat": 43.93,
     "lng": -100.3,
     "emoji": "🧊",
     "suspect": {
      "name": "Rocky Ledge",
      "alias": "The Landslide",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "disaster-vivian-1",
       "clue": "The largest hailstone in the United States by diameter fell in ____, South Dakota, in 2010: about 20 cm across.",
       "fact": "The largest hailstone in the United States by diameter fell in Vivian, South Dakota, in 2010: about 20 cm across.",
       "sources": [
        {
         "title": "Hail",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Hail"
        }
       ]
      }
     ]
    },
    {
     "id": "disaster-barrow-island",
     "name": "Barrow Island",
     "region": "Australia",
     "lat": -20.8,
     "lng": 115.4,
     "emoji": "💨",
     "suspect": {
      "name": "Gale Forsythe",
      "alias": "The Squall",
      "emoji": "🌪️"
     },
     "facts": [
      {
       "id": "disaster-barrow-island-1",
       "clue": "____, Australia, recorded the strongest wind gust outside a tornado: about 408 km/h during Cyclone Olivia in 1996.",
       "fact": "Barrow Island, Australia, recorded the strongest wind gust outside a tornado: about 408 km/h during Cyclone Olivia in 1996.",
       "sources": [
        {
         "title": "List of weather records",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/List_of_weather_records"
        },
        {
         "title": "Records of Weather and Climate Extremes",
         "publisher": "World Meteorological Organization",
         "url": "https://wmo.int/files/records-of-weather-and-climate-extremes-table"
        }
       ]
      }
     ]
    },
    {
     "id": "disaster-mount-washington",
     "name": "Mount Washington",
     "region": "New Hampshire, US",
     "lat": 44.27,
     "lng": -71.3,
     "emoji": "💨",
     "suspect": {
      "name": "Terra Firma",
      "alias": "The Fault Line",
      "emoji": "🌋"
     },
     "facts": [
      {
       "id": "disaster-mount-washington-1",
       "clue": "____, in New Hampshire, measured a 372 km/h (231 mph) wind speed in April 1934, which stood as the world’s top non-tornadic wind record until 1996.",
       "fact": "Mount Washington, in New Hampshire, measured a 372 km/h (231 mph) wind speed in April 1934, which stood as the world’s top non-tornadic wind record until 1996.",
       "sources": [
        {
         "title": "Mount Washington",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Mount_Washington"
        }
       ]
      }
     ]
    },
    {
     "id": "disaster-lake-maracaibo",
     "name": "Lake Maracaibo",
     "region": "Venezuela",
     "lat": 9.8,
     "lng": -71.6,
     "emoji": "⚡",
     "suspect": {
      "name": "Misty Banks",
      "alias": "The Fogbank",
      "emoji": "🌫️"
     },
     "facts": [
      {
       "id": "disaster-lake-maracaibo-1",
       "clue": "____, in Venezuela, has the highest lightning density on Earth, with Catatumbo storms flashing 140 to 160 nights a year.",
       "fact": "Lake Maracaibo, in Venezuela, has the highest lightning density on Earth, with Catatumbo storms flashing 140 to 160 nights a year.",
       "sources": [
        {
         "title": "Catatumbo lightning",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Catatumbo_lightning"
        }
       ]
      }
     ]
    },
    {
     "id": "disaster-great-plains",
     "name": "Great Plains",
     "region": "Central US",
     "lat": 40,
     "lng": -100,
     "emoji": "🌪️",
     "suspect": {
      "name": "Hal Stone",
      "alias": "The Hailstorm",
      "emoji": "🧊"
     },
     "facts": [
      {
       "id": "disaster-great-plains-1",
       "clue": "Storm chasers recognize the tornado belt across the ____ of the central United States as Tornado Alley.",
       "fact": "Storm chasers recognize the tornado belt across the Great Plains of the central United States as Tornado Alley.",
       "sources": [
        {
         "title": "Tornado Alley",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Tornado_Alley"
        }
       ]
      }
     ]
    },
    {
     "id": "disaster-bangladesh",
     "name": "Bangladesh",
     "region": "South Asia",
     "lat": 23.7,
     "lng": 90.4,
     "emoji": "🌀",
     "suspect": {
      "name": "Del Ta",
      "alias": "The Silt Runner",
      "emoji": "🏞️"
     },
     "facts": [
      {
       "id": "disaster-bangladesh-1",
       "clue": "The heaviest known hailstone, about 1 kg, fell in Gopalganj, ____, in 1986.",
       "fact": "The heaviest known hailstone, about 1 kg, fell in Gopalganj, Bangladesh, in 1986.",
       "sources": [
        {
         "title": "List of weather records",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/List_of_weather_records"
        },
        {
         "title": "Records of Weather and Climate Extremes",
         "publisher": "World Meteorological Organization",
         "url": "https://wmo.int/files/records-of-weather-and-climate-extremes-table"
        }
       ]
      },
      {
       "id": "disaster-bangladesh-2",
       "clue": "The deadliest tornado on record struck ____ in 1989, killing about 1,300 people.",
       "fact": "The deadliest tornado on record struck Bangladesh in 1989, killing about 1,300 people.",
       "sources": [
        {
         "title": "Daulatpur–Saturia tornado",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Daulatpur%E2%80%93Saturia_tornado"
        },
        {
         "title": "Records of Weather and Climate Extremes",
         "publisher": "World Meteorological Organization",
         "url": "https://wmo.int/files/records-of-weather-and-climate-extremes-table"
        }
       ]
      },
      {
       "id": "disaster-bangladesh-3",
       "clue": "The Bhola cyclone of 1970, the deadliest tropical cyclone on record, struck what is now ____. Estimates of the dead range from about 300,000 to 500,000.",
       "fact": "The Bhola cyclone of 1970, the deadliest tropical cyclone on record, struck what is now Bangladesh. Estimates of the dead range from about 300,000 to 500,000.",
       "sources": [
        {
         "title": "1970 Bhola cyclone",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/1970_Bhola_cyclone"
        }
       ]
      }
     ]
    },
    {
     "id": "disaster-moradabad",
     "name": "Moradabad",
     "region": "India",
     "lat": 28.84,
     "lng": 78.77,
     "emoji": "🧊",
     "suspect": {
      "name": "Rocky Ledge",
      "alias": "The Landslide",
      "emoji": "🪨"
     },
     "facts": [
      {
       "id": "disaster-moradabad-1",
       "clue": "The deadliest hailstorm on record struck ____, India, in 1888, killing about 246 people.",
       "fact": "The deadliest hailstorm on record struck Moradabad, India, in 1888, killing about 246 people.",
       "sources": [
        {
         "title": "1888 Moradabad hailstorm",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/1888_Moradabad_hailstorm"
        },
        {
         "title": "Records of Weather and Climate Extremes",
         "publisher": "World Meteorological Organization",
         "url": "https://wmo.int/files/records-of-weather-and-climate-extremes-table"
        }
       ]
      }
     ]
    },
    {
     "id": "disaster-dronka",
     "name": "Durunka",
     "region": "Egypt",
     "lat": 27.15,
     "lng": 31.17,
     "emoji": "⚡",
     "suspect": {
      "name": "Gale Forsythe",
      "alias": "The Squall",
      "emoji": "🌪️"
     },
     "facts": [
      {
       "id": "disaster-dronka-1",
       "clue": "In ____, Egypt, in November 1994, lightning ignited fuel storage tanks whose floodwaters swept blazing fuel into town, the deadliest lightning disaster on record.",
       "fact": "In Durunka, Egypt, in November 1994, lightning ignited fuel storage tanks whose floodwaters swept blazing fuel into town, the deadliest lightning disaster on record.",
       "sources": [
        {
         "title": "Durunka",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Durunka"
        },
        {
         "title": "Records of Weather and Climate Extremes",
         "publisher": "World Meteorological Organization",
         "url": "https://wmo.int/files/records-of-weather-and-climate-extremes-table"
        }
       ]
      }
     ]
    },
    {
     "id": "disaster-tambora",
     "name": "Tambora",
     "region": "Indonesia",
     "lat": -8.25,
     "lng": 118,
     "emoji": "🌋",
     "suspect": {
      "name": "Terra Firma",
      "alias": "The Fault Line",
      "emoji": "🌋"
     },
     "facts": [
      {
       "id": "disaster-tambora-1",
       "clue": "The 1815 eruption of ____, in Indonesia, was the biggest in recorded history, rated 7 on the Volcanic Explosivity Index. Mount St. Helens in 1980 was a 5.",
       "fact": "The 1815 eruption of Tambora, in Indonesia, was the biggest in recorded history, rated 7 on the Volcanic Explosivity Index. Mount St. Helens in 1980 was a 5.",
       "sources": [
        {
         "title": "1815 eruption of Mount Tambora",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/1815_eruption_of_Mount_Tambora"
        }
       ]
      },
      {
       "id": "disaster-tambora-2",
       "clue": "Ash from the eruption of ____ cooled the planet, making 1816 \"the Year Without a Summer.\"",
       "fact": "Ash from the eruption of Tambora cooled the planet, making 1816 \"the Year Without a Summer.\"",
       "sources": [
        {
         "title": "Year Without a Summer",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/Year_Without_a_Summer"
        }
       ]
      }
     ]
    },
    {
     "id": "disaster-valdivia",
     "name": "Valdivia",
     "region": "Chile",
     "lat": -39.81,
     "lng": -73.25,
     "emoji": "🌐",
     "suspect": {
      "name": "Misty Banks",
      "alias": "The Fogbank",
      "emoji": "🌫️"
     },
     "facts": [
      {
       "id": "disaster-valdivia-1",
       "clue": "The strongest earthquake ever recorded, magnitude 9.5, struck near ____, Chile, in 1960.",
       "fact": "The strongest earthquake ever recorded, magnitude 9.5, struck near Valdivia, Chile, in 1960.",
       "sources": [
        {
         "title": "1960 Valdivia earthquake",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/1960_Valdivia_earthquake"
        }
       ]
      }
     ]
    },
    {
     "id": "disaster-shaanxi",
     "name": "Shaanxi",
     "region": "China",
     "lat": 34.5,
     "lng": 109.3,
     "emoji": "🌐",
     "suspect": {
      "name": "Hal Stone",
      "alias": "The Hailstorm",
      "emoji": "🧊"
     },
     "facts": [
      {
       "id": "disaster-shaanxi-1",
       "clue": "A catastrophic 1556 earthquake in ____, China, collapsed loess cave dwellings; imperial registers dropped by 830,000, with modern estimates citing about 100,000 direct deaths alongside famine, plague, and migration.",
       "fact": "A catastrophic 1556 earthquake in Shaanxi, China, collapsed loess cave dwellings; imperial registers dropped by 830,000, with modern estimates citing about 100,000 direct deaths alongside famine, plague, and migration.",
       "sources": [
        {
         "title": "1556 Shaanxi earthquake",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/1556_Shaanxi_earthquake"
        }
       ]
      }
     ]
    },
    {
     "id": "disaster-lituya-bay",
     "name": "Lituya Bay",
     "region": "Alaska, US",
     "lat": 58.64,
     "lng": -137.55,
     "emoji": "🌊",
     "suspect": {
      "name": "Del Ta",
      "alias": "The Silt Runner",
      "emoji": "🏞️"
     },
     "facts": [
      {
       "id": "disaster-lituya-bay-1",
       "clue": "In 1958 a rockslide into ____, Alaska, drove water to a run-up elevation of 524 m up the opposite slope, the highest tsunami wave run-up on record.",
       "fact": "In 1958 a rockslide into Lituya Bay, Alaska, drove water to a run-up elevation of 524 m up the opposite slope, the highest tsunami wave run-up on record.",
       "sources": [
        {
         "title": "1958 Lituya Bay earthquake and megatsunami",
         "publisher": "Wikipedia",
         "url": "https://en.wikipedia.org/wiki/1958_Lituya_Bay_earthquake_and_megatsunami"
        }
       ]
      }
     ]
    }
   ]
  }
 ]
};
if (typeof module !== 'undefined') module.exports = TRIVIA_BANK;
