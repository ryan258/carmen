// Trivia bank: real, source-reviewed facts per place, extracted from the retired case packs on 2026-10-28.
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
       "id": "downtown-square-1",
       "clue": "____ Bentonville Inc. describes its Farmers Market as a place to buy goods from the people who grow, raise, or make them. Offerings vary by season.",
       "fact": "Downtown Bentonville Inc. describes its Farmers Market as a place to buy goods from the people who grow, raise, or make them. Offerings vary by season.",
       "sources": [
        {
         "title": "Bentonville Farmers Market — location and producer policy",
         "publisher": "Downtown Bentonville Inc.",
         "url": "https://downtownbentonville.org/events/farmers-market"
        }
       ]
      },
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
       "clue": "The ____ is the heart of Bentonville historic downtown and sits among civic, dining, shopping, and public art destinations.",
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
       "clue": "Walton's 5&10 in Bentonville and the first Walmart in Rogers are distinct stores in Walmart's historical account.",
       "fact": "Walton's 5&10 in Bentonville and the first Walmart in Rogers are distinct stores in Walmart's historical account.",
       "sources": [
        {
         "title": "Sam Walton — The Road to Walmart",
         "publisher": "Walmart",
         "url": "https://corporate.walmart.com/about/sam-walton"
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
       "clue": "The museum galleries trace Walmart history from a small-town store to a global retailer.",
       "fact": "The museum galleries trace Walmart history from a small-town store to a global retailer.",
       "sources": [
        {
         "title": "Walmart Museum & History",
         "publisher": "Walmart",
         "url": "https://corporate.walmart.com/about/walmart-museum/"
        }
       ]
      },
      {
       "id": "walmart-museum-4",
       "clue": "The ____ includes archive-focused exhibits alongside the 5&10 and cafe experiences.",
       "fact": "The Walmart Museum includes archive-focused exhibits alongside the 5&10 and cafe experiences.",
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
       "clue": "The ____ lists free admission and includes galleries, Walton's 5&10, and The Spark Cafe.",
       "fact": "The Walmart Museum lists free admission and includes galleries, Walton's 5&10, and The Spark Cafe.",
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
       "clue": "Walmart describes the new ____ as a 350-acre campus with an interactive map.",
       "fact": "Walmart describes the new Home Office as a 350-acre campus with an interactive map.",
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
       "clue": "Walmart lists 8th & Plate among the new ____ spaces where campus ideas and public visits meet.",
       "fact": "Walmart lists 8th & Plate among the new Home Office spaces where campus ideas and public visits meet.",
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
       "clue": "Walmart says the 12 office buildings on the new ____ each tell a unique story through design and identity.",
       "fact": "Walmart says the 12 office buildings on the new Home Office each tell a unique story through design and identity.",
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
       "id": "crystal-bridges-4",
       "clue": "The museum building was designed by architect Moshe Safdie with pavilions around spring-fed ponds.",
       "fact": "The museum building was designed by architect Moshe Safdie with pavilions around spring-fed ponds.",
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
      },
      {
       "id": "coler-preserve-5",
       "clue": "Visit Bentonville lists Airship Coffee at ____ among the preserve stops.",
       "fact": "Visit Bentonville lists Airship Coffee at Coler among the preserve stops.",
       "sources": [
        {
         "title": "Coler Campground",
         "publisher": "Peel Compton Foundation",
         "url": "https://www.peelcompton.org/coler-mountain-bike-preserve/coler-campground/"
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
       "id": "mendoza-3",
       "clue": "The government visitor account describes Puente del Inca using natural processes. Establishing its full formation history would require more detailed geological evidence.",
       "fact": "The government visitor account describes Puente del Inca using natural processes. Establishing its full formation history would require more detailed geological evidence.",
       "sources": [
        {
         "title": "Uspallata, Mendoza — Qué visitar: Puente del Inca",
         "publisher": "Government of Argentina",
         "url": "https://www.argentina.gob.ar/node/465223"
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
       "clue": "The operator itinerary separates road and train legs: rail boarding at San Antonio de los Cobres, a visit to La Polvorilla, and a return to that station.",
       "fact": "The operator itinerary separates road and train legs: rail boarding at San Antonio de los Cobres, a visit to La Polvorilla, and a return to that station.",
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
       "id": "cordoba-2",
       "clue": "UNESCO lists the Jesuit Block and five estancias together. Its account also recognizes Indigenous people and enslaved Africans in the labor and knowledge behind this history.",
       "fact": "UNESCO lists the Jesuit Block and five estancias together. Its account also recognizes Indigenous people and enslaved Africans in the labor and knowledge behind this history.",
       "sources": [
        {
         "title": "Jesuit Block and Estancias of Córdoba — Brief synthesis",
         "publisher": "UNESCO World Heritage Centre",
         "url": "https://whc.unesco.org/en/list/995/"
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
       "id": "iguazu-4",
       "clue": "____ is near the meeting area of Argentina, Brazil, and Paraguay.",
       "fact": "Puerto Iguazu is near the meeting area of Argentina, Brazil, and Paraguay.",
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
      },
      {
       "id": "bariloche-5",
       "clue": "Nahuel Huapi Lake is central to ____ scenery and national-park tourism.",
       "fact": "Nahuel Huapi Lake is central to Bariloche scenery and national-park tourism.",
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
       "id": "ushuaia-4",
       "clue": "____ is strongly associated with the End of the World identity and Tierra del Fuego landscapes.",
       "fact": "Ushuaia is strongly associated with the End of the World identity and Tierra del Fuego landscapes.",
       "sources": [
        {
         "title": "End of the World Train",
         "publisher": "Municipality of Ushuaia Tourism",
         "url": "https://turismoushuaia.com/prestador/tren-del-fin-del-mundo/"
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
       "id": "el-calafate-2",
       "clue": "____ is a gateway for visitors learning about and visiting Patagonian glaciers.",
       "fact": "El Calafate is a gateway for visitors learning about and visiting Patagonian glaciers.",
       "sources": [
        {
         "title": "Glaciarium Ice Museum and Glaciological Interpretation Centre",
         "publisher": "Glaciarium",
         "url": "https://www.glaciarium.com/"
        },
        {
         "title": "Puerto Pañuelo",
         "publisher": "Municipality of San Carlos de Bariloche Tourism",
         "url": "https://www.barilocheturismo.gob.ar/es/puerto-panuelo"
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
      },
      {
       "id": "el-calafate-5",
       "clue": "Glacier museums and park exhibits help visitors understand ice, climate, and Patagonian landscapes.",
       "fact": "Glacier museums and park exhibits help visitors understand ice, climate, and Patagonian landscapes.",
       "sources": [
        {
         "title": "Glaciers: Water of the Future — snow accumulation and glacier ice formation",
         "publisher": "Government of Argentina educational resource",
         "url": "https://www.argentina.gob.ar/sites/default/files/secuencia_didactica._glaciares_agua_del_futuro.pdf"
        },
        {
         "title": "Glaciarium Ice Museum and Glaciological Interpretation Centre",
         "publisher": "Glaciarium",
         "url": "https://www.glaciarium.com/"
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
       "clue": "____ describes a paved connection from The Railyard Bike Park to Lake Atalanta Park.",
       "fact": "Rogers describes a paved connection from The Railyard Bike Park to Lake Atalanta Park.",
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
      },
      {
       "id": "nwa-rogers-3",
       "clue": "Lake Atalanta Park is connected to The Railyard Bike Park by a paved trail.",
       "fact": "Lake Atalanta Park is connected to The Railyard Bike Park by a paved trail.",
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
       "id": "nwa-fayetteville-2",
       "clue": "Senior Walk records University of Arkansas graduates’ names across campus.",
       "fact": "Senior Walk records University of Arkansas graduates’ names across campus.",
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
       "clue": "The University of Arkansas lists Chi Omega Greek Theatre as a place for concerts and rallies.",
       "fact": "The University of Arkansas lists Chi Omega Greek Theatre as a place for concerts and rallies.",
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
       "clue": "The NPS describes a Williams Hollow hiking loop that returns to Elkhorn Tavern.",
       "fact": "The NPS describes a Williams Hollow hiking loop that returns to Elkhorn Tavern.",
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
       "clue": "Airship at ____ is an open-air cafe within the preserve.",
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
      },
      {
       "id": "mtb-coler-3",
       "clue": "____ includes a campground as well as its riding trails.",
       "fact": "Coler includes a campground as well as its riding trails.",
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
      },
      {
       "id": "mtb-slaughter-3",
       "clue": "Medusa is a trail name on Bentonville’s July 2020 ____ map.",
       "fact": "Medusa is a trail name on Bentonville’s July 2020 Slaughter Pen map.",
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
       "clue": "____ reference places Metfield Skills Park along Rago.",
       "fact": "The Back 40 reference places Metfield Skills Park along Rago.",
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
      },
      {
       "id": "arkansas-state-parks-petit-jean-3",
       "clue": "At ____, Mather Lodge serves lodging, the rock dam forms Lake Bailey, and Cedar Falls is a waterfall.",
       "fact": "At Petit Jean, Mather Lodge serves lodging, the rock dam forms Lake Bailey, and Cedar Falls is a waterfall.",
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
       "clue": "____ reaches 2,753 feet above sea level, Arkansas’s highest point. The lodge overlooks the Petit Jean River Valley and Blue Mountain Lake.",
       "fact": "Mount Magazine reaches 2,753 feet above sea level, Arkansas’s highest point. The lodge overlooks the Petit Jean River Valley and Blue Mountain Lake.",
       "sources": [
        {
         "title": "Mount Magazine State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/explore/parks/mount-magazine-state-park"
        }
       ]
      },
      {
       "id": "arkansas-state-parks-mount-magazine-2",
       "clue": "The official summit elevation for ____ is 2,753 feet above sea level.",
       "fact": "The official summit elevation for Mount Magazine is 2,753 feet above sea level.",
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
      },
      {
       "id": "arkansas-state-parks-crater-of-diamonds-3",
       "clue": "The park’s diamond-bearing volcanic pipe is near Murfreesboro. The geological description does not identify it as a river gravel deposit.",
       "fact": "The park’s diamond-bearing volcanic pipe is near Murfreesboro. The geological description does not identify it as a river gravel deposit.",
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
      "alias": "The Misprint",
      "emoji": "🏛️"
     },
     "facts": [
      {
       "id": "arkansas-state-parks-historic-washington-1",
       "clue": "____’s 1874 Courthouse serves as the park visitor center. The park also interprets printing and blacksmithing through a Print Museum and Blacksmith Shop.",
       "fact": "Historic Washington’s 1874 Courthouse serves as the park visitor center. The park also interprets printing and blacksmithing through a Print Museum and Blacksmith Shop.",
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
       "clue": "____ includes a Print Museum interpreting printing.",
       "fact": "Historic Washington includes a Print Museum interpreting printing.",
       "sources": [
        {
         "title": "Historic Washington State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/explore/parks/historic-washington-state-park"
        }
       ]
      },
      {
       "id": "arkansas-state-parks-historic-washington-3",
       "clue": "____ includes the 1874 Courthouse visitor center and a Print Museum.",
       "fact": "Historic Washington includes the 1874 Courthouse visitor center and a Print Museum.",
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
       "clue": "____ is an oxbow lake. USGS explains that an oxbow forms when a river takes a shortcut and the old bend becomes a separate water body.",
       "fact": "Lake Chicot is an oxbow lake. USGS explains that an oxbow forms when a river takes a shortcut and the old bend becomes a separate water body.",
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
      },
      {
       "id": "arkansas-state-parks-lake-chicot-2",
       "clue": "In the general oxbow process, a river bend precedes a shortcut that leaves the old bend separated from the main channel.",
       "fact": "In the general oxbow process, a river bend precedes a shortcut that leaves the old bend separated from the main channel.",
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
      },
      {
       "id": "arkansas-state-parks-lake-chicot-3",
       "clue": "____ is an oxbow lake; a cutoff can leave an old river bend as a lake.",
       "fact": "Lake Chicot is an oxbow lake; a cutoff can leave an old river bend as a lake.",
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
      },
      {
       "id": "arkansas-state-parks-jacksonport-3",
       "clue": "____’s history includes a steamboat port where the White and Black rivers meet.",
       "fact": "Jacksonport’s history includes a steamboat port where the White and Black rivers meet.",
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
       "clue": "Water from ____ forms a lake and then flows south as the Spring River.",
       "fact": "Water from Mammoth Spring forms a lake and then flows south as the Spring River.",
       "sources": [
        {
         "title": "Mammoth Spring State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/explore/parks/mammoth-spring-state-park"
        }
       ]
      },
      {
       "id": "arkansas-state-parks-mammoth-spring-3",
       "clue": "The park contains remnants of both a mill and a hydroelectric plant, separate from its Frisco train depot.",
       "fact": "The park contains remnants of both a mill and a hydroelectric plant, separate from its Frisco train depot.",
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
       "clue": "The ____’s Craft Village presents artisans demonstrating crafts. Its Heritage Herb Garden is a living classroom, and the Ozark Highlands Theater presents music.",
       "fact": "The Ozark Folk Center’s Craft Village presents artisans demonstrating crafts. Its Heritage Herb Garden is a living classroom, and the Ozark Highlands Theater presents music.",
       "sources": [
        {
         "title": "Ozark Folk Center State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/parks/ozark-folk-center-state-park/music/about"
        }
       ]
      },
      {
       "id": "arkansas-state-parks-ozark-folk-center-2",
       "clue": "The ____ interprets crafts, plants and music through its village, garden and theater.",
       "fact": "The Ozark Folk Center interprets crafts, plants and music through its village, garden and theater.",
       "sources": [
        {
         "title": "Ozark Folk Center State Park",
         "publisher": "Arkansas State Parks",
         "url": "https://www.arkansas.com/state-parks/parks/ozark-folk-center-state-park/music/about"
        }
       ]
      },
      {
       "id": "arkansas-state-parks-ozark-folk-center-3",
       "clue": "The Heritage Herb Garden at the ____ serves as a living classroom; the Craft Village emphasizes making demonstrations and the theater presents music.",
       "fact": "The Heritage Herb Garden at the Ozark Folk Center serves as a living classroom; the Craft Village emphasizes making demonstrations and the theater presents music.",
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
      },
      {
       "id": "route-66-dwight-3",
       "clue": "At Ambler’s, the original office used wood clapboard; the later service bay used concrete block.",
       "fact": "At Ambler’s, the original office used wood clapboard; the later service bay used concrete block.",
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
       "id": "route-66-springfield-2",
       "clue": "Rock Fountain Court was built in 1945, using a freestanding cabin layout associated with earlier roadside lodging.",
       "fact": "Rock Fountain Court was built in 1945, using a freestanding cabin layout associated with earlier roadside lodging.",
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
       "clue": "NPS describes Rock Fountain Court as frame cabins with Ozark sandstone veneer. A veneer is a facing, not a statement that every wall is solid stone.",
       "fact": "NPS describes Rock Fountain Court as frame cabins with Ozark sandstone veneer. A veneer is a facing, not a statement that every wall is solid stone.",
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
       "clue": "____ is a built reinforced-concrete bridge with paired arches, associated with James Barney Marsh’s design.",
       "fact": "Brush Creek Bridge is a built reinforced-concrete bridge with paired arches, associated with James Barney Marsh’s design.",
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
       "clue": "Marsh patented his bridge design in 1912. ____ was constructed in 1923.",
       "fact": "Marsh patented his bridge design in 1912. Brush Creek Bridge was constructed in 1923.",
       "sources": [
        {
         "title": "Brush Creek Bridge",
         "publisher": "National Park Service",
         "url": "https://www.nps.gov/places/brush-creek-bridge.htm"
        }
       ]
      },
      {
       "id": "route-66-brush-creek-3",
       "clue": "____ uses paired arches and reinforced concrete. Reinforced concrete combines concrete with embedded reinforcement; a silhouette alone does not expose that reinforcement.",
       "fact": "Brush Creek Bridge uses paired arches and reinforced concrete. Reinforced concrete combines concrete with embedded reinforcement; a silhouette alone does not expose that reinforcement.",
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
       "id": "route-66-shamrock-2",
       "clue": "A third space at Tower Station and U-Drop Inn was planned for retail but was used for overflow cafe seating.",
       "fact": "A third space at Tower Station and U-Drop Inn was planned for retail but was used for overflow cafe seating.",
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
      },
      {
       "id": "route-66-tucumcari-3",
       "clue": "The Blue Swallow’s documented plan is L-shaped, with garages located between sleeping units.",
       "fact": "The Blue Swallow’s documented plan is L-shaped, with garages located between sleeping units.",
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
      "alias": "The Watermark",
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
       "clue": "____ used spring water for power. The present building dates to 1893–1894 and replaced an earlier mill; it was initially unpainted, later white with green trim, and later red.",
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
       "clue": "The ____ interprets regional history in A Heritage of Determination at its Depot Museum, and Delta music through Delta Sounds at its Visitors Center.",
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
       "clue": "____’s house dates to 1859. The museum interprets enslaved people’s lives as well as plantation owners and later sharecropping; the property was given to Arkansas State University in 2001.",
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
      "alias": "The Backdate",
      "emoji": "🎸"
     },
     "facts": [
      {
       "id": "arkansas-delta-dyess-1",
       "clue": "____ was established in 1934 as an agricultural resettlement colony. The Cash family arrived in 1935; the planned layout combined a town center with surrounding farmsteads.",
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
       "clue": "In 1686 de Tonti established a French trading post at the existing Quapaw village of Osotouy. The post later relocated because of flooding; it became a US possession in 1803 and territorial capital in 1819.",
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
       "clue": "The NPS comparison describes salamanders with moist smooth skin and jelly-encased eggs, versus lizards with scaly skin and leathery eggs. Lungless salamanders exchange gases through skin and mouth/throat tissues.",
       "fact": "The NPS comparison describes salamanders with moist smooth skin and jelly-encased eggs, versus lizards with scaly skin and leathery eggs. Lungless salamanders exchange gases through skin and mouth/throat tissues.",
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
       "clue": "The Colorado River eroded uplifted layered rock at ____. Many of its layered rocks formed long before the canyon’s later incision; resistant layers commonly form cliffs and softer layers slopes.",
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
       "clue": "Water is a major shaping force at ____. In one pathway described by NPS, fractured sandstone is shaped into fins and then arches; continuing erosion can eventually cause collapse.",
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
       "clue": "Volcanic activity has built the Hawaiian island chain. The park interprets Kīlauea and Mauna Loa; heat melts rock into magma that can rise and erupt at the surface.",
       "fact": "Volcanic activity has built the Hawaiian island chain. The park interprets Kīlauea and Mauna Loa; heat melts rock into magma that can rise and erupt at the surface.",
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
       "clue": "____’s collection reference includes steam and diesel-electric locomotives, passenger cars and freight cars. Some equipment listed in its 1991 historical study later left the collection.",
       "fact": "Steamtown’s collection reference includes steam and diesel-electric locomotives, passenger cars and freight cars. Some equipment listed in its 1991 historical study later left the collection.",
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
       "clue": "The historic campus lists Mt. ____ Station (1851), Baldwin Roundhouse (1884) and Annex (1891). The Tender Kitchen nickname belonged to a repair shed used mainly for freight cars, not a food kitchen.",
       "fact": "The historic campus lists Mt. Clare Station (1851), Baldwin Roundhouse (1884) and Annex (1891). The Tender Kitchen nickname belonged to a repair shed used mainly for freight cars, not a food kitchen.",
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
       "clue": "The park’s Jupiter and No. 119 replicas were completed in 1979 to represent historic locomotives. Historical black-and-white photographs and later replicas are different kinds of evidence.",
       "fact": "The park’s Jupiter and No. 119 replicas were completed in 1979 to represent historic locomotives. Historical black-and-white photographs and later replicas are different kinds of evidence.",
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
       "clue": "Eero Saarinen’s stainless steel ____ design was selected in 1947–1948. Construction ran from 1963 to 1965; the arch is 630 feet tall.",
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
       "clue": "____ commissioned Wright’s ____ in 1957; its initial opening was in 1962. The county describes it as a public architectural project.",
       "fact": "Marin County commissioned Wright’s Civic Center in 1957; its initial opening was in 1962. The county describes it as a public architectural project.",
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
       "clue": "The ____ is documented for its skylit atrium and intricate ironwork. Its source page also describes workspace and filming uses.",
       "fact": "The Bradbury Building is documented for its skylit atrium and intricate ironwork. Its source page also describes workspace and filming uses.",
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
       "clue": "The museum’s 1903 Wright Flyer record concerns the aircraft’s North Carolina flights in 1903. The collection record and display institution are distinct from the historical flight location.",
       "fact": "The museum’s 1903 Wright Flyer record concerns the aircraft’s North Carolina flights in 1903. The collection record and display institution are distinct from the historical flight location.",
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
       "clue": "The ____’s SUE specimen record describes its body mounted with a cast skull. The original specimen, a cast component and the assembled display are distinct categories.",
       "fact": "The Field Museum’s SUE specimen record describes its body mounted with a cast skull. The original specimen, a cast component and the assembled display are distinct categories.",
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
       "clue": "The museum interprets Rosa Parks’s 1955 resistance to segregation on a Montgomery bus. Archived information helped identify bus 2857; its restoration retained original material where possible and used matching replacement parts.",
       "fact": "The museum interprets Rosa Parks’s 1955 resistance to segregation on a Montgomery bus. Archived information helped identify bus 2857; its restoration retained original material where possible and used matching replacement parts.",
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
       "clue": "Babbage designed Difference Engine No.2 in 1847–1849 but did not complete it in his lifetime. Modern working reconstructions followed; the museum’s referenced exhibit is dated May 2008–January 2016.",
       "fact": "Babbage designed Difference Engine No.2 in 1847–1849 but did not complete it in his lifetime. Modern working reconstructions followed; the museum’s referenced exhibit is dated May 2008–January 2016.",
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
      "alias": "The Lifespan Slip",
      "emoji": "🛫"
     },
     "facts": [
      {
       "id": "museums-missing-labels-flight-1",
       "clue": "The museum’s archive describes the Red Barn’s 1909 shipyard origins and aircraft production there from 1917. William E. Boeing lived 1881–1956; his papers include material with wider date coverage.",
       "fact": "The museum’s archive describes the Red Barn’s 1909 shipyard origins and aircraft production there from 1917. William E. Boeing lived 1881–1956; his papers include material with wider date coverage.",
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
  }
 ]
};
if (typeof module !== 'undefined') module.exports = TRIVIA_BANK;
