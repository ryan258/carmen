/* Authored alternatives to the original four-choice cases.
 * Every correspondence and sequence below comes from the named case's existing
 * written evidence. These are presentation/reasoning adaptations, not a new
 * factual review. Exact pack content versions prevent a revised case silently
 * inheriting an activity whose answer may no longer fit its evidence.
 */
(function exposeActivities(root) {
  'use strict';

  function sequence(caseId, title, instruction, items, hints) {
    return {
      id: `${caseId}:sequence:v1`, version: 1, kind: 'sequence', title,
      instruction, items,
      hints: [...hints, `Worked order: ${items.join(' → ')}.`]
    };
  }

  function match(caseId, title, instruction, items, hints) {
    return {
      id: `${caseId}:match:v1`, version: 1, kind: 'match', title,
      instruction, items,
      hints: [...hints, `Worked matches: ${items.map(item => `${item.prompt} — ${item.answer}`).join('; ')}.`]
    };
  }

  function filter(caseId, title, instruction, items, answer, hints) {
    return {
      id: `${caseId}:filter:v1`, version: 1, kind: 'filter', title,
      instruction, items, answer,
      hints: [...hints, `Keep: ${answer.map(index => items[index]).join('; ')}.`]
    };
  }

  function assemble(caseId, title, instruction, items, answer, hints) {
    return {
      id: `${caseId}:assemble:v1`, version: 1, kind: 'assemble', title,
      instruction, items, answer,
      hints: [...hints, `Assemble: ${answer.map(index => items[index]).join(' → ')}.`]
    };
  }

  const catalog = {
    // data/packs/bentonville.json: fictional stall register and open-link sheet.
    'bentonville-carmen': {
      contentVersion: 5,
      cases: {
        'classic-downtown-square': match('classic-downtown-square', 'Rebuild the market register',
          'Match each fictional seller to the goods and producer relationship recorded in the clues.', [
            {prompt: 'Fern, stall 12', answer: 'Grows cut flowers'},
            {prompt: 'Basil, stall 18', answer: 'Grows herbs'},
            {prompt: 'Reed, stall 24', answer: 'Resells another grower’s cut flowers'},
            {prompt: 'Iris, stall 30', answer: 'Makes pressed-flower cards'}
          ], ['Track both the item and who produced it; flowers alone are not enough.',
            'Fern and Reed both offer cut flowers, but only Fern grew them. Basil and Iris produce different goods.']),
        'classic-crystal-bridges': sequence('classic-crystal-bridges', 'Build the open route',
          'Arrange all four rooms from Entrance to Studio, using only open links and visiting Bridge pavilion. This is the fictional exercise network, not a visitor route.',
          ['Entrance', 'Gallery', 'Bridge pavilion', 'Studio'],
          ['Check every neighboring pair against the written open links.',
            'Entrance can reach Gallery first. Gallery has no direct link to Studio.'])
      }
    },

    // data/packs/northwest-arkansas.json: explicit reference-card assignments
    // and fictional Arrival/Interview/Filing dependencies.
    'northwest-arkansas-carmen': {
      contentVersion: 3,
      cases: {
        'nwa-bridges': match('nwa-bridges', 'Restore the venue reference card',
          'Match each reference-card subject to its assigned venue using the written clues.', [
            {prompt: 'Moshe Safdie architecture', answer: 'Crystal Bridges'},
            {prompt: 'Factory reuse', answer: 'The Momentary'},
            {prompt: 'Plants', answer: 'Compton Gardens'},
            {prompt: 'Retail history', answer: 'The Walmart Museum'}
          ], ['Use the four assignments on ACME’s reference card.',
            'The Safdie envelope belongs with Crystal Bridges; factory reuse belongs with the Momentary.']),
        'nwa-museum': sequence('nwa-museum', 'Rebuild the archive stack',
          'Arrange the three fictional folders so Interview follows Arrival and precedes Filing. These are exercise steps, not museum procedures.',
          ['Arrival', 'Interview', 'Filing'],
          ['Translate both before-and-after constraints into positions.',
            'Arrival must be first and Filing last; the remaining folder belongs between them.'])
      }
    },

    // data/packs/argentina.json: same-day fictional log and museum-exercise labels.
    'argentina-carmen': {
      contentVersion: 6,
      cases: {
        'classic-salta': sequence('classic-salta', 'Reconstruct the rail log',
          'Arrange the three events by their timestamps in the written clues. The log is fictional and does not describe a real timetable.',
          ['Depart San Antonio de los Cobres', 'Visit La Polvorilla Viaduct', 'Return to San Antonio de los Cobres'],
          ['The departure and return share a station name but are different events.',
            'The departure is recorded at 09:00, the visit at 11:00, and the return at 13:00 on the same day.']),
        'glaciarium-lab': sequence('glaciarium-lab', 'Restore the exhibit labels',
          'Arrange the labels in the order stated by this fictional museum exercise.',
          ['Snow accumulation', 'Burial and compression', 'Glacier ice'],
          ['Use the words first, follow, and final in the written evidence.',
            'Snow accumulation starts the exercise and glacier ice is the final label.'])
      }
    },

    // data/packs/nwa-mountain-biking.json: fictional scheduling constraints;
    // explicitly no physical connection among the named trails is implied.
    'nwa-mountain-biking-carmen': {
      contentVersion: 2,
      cases: {
        'mtb-slaughter-medusa': sequence('mtb-slaughter-medusa', 'Arrange the dispatch labels',
          'Build the three-name delivery list using its before-and-after rules. This is an archive exercise, not a riding route.',
          ['Blackbird', 'Medusa', 'Warthog'],
          ['Keep the two constraints together; Ozone is the unused spare label.',
            'Blackbird must be before Medusa, and Warthog must be after Medusa.'])
      }
    },

    // data/packs/arkansas-state-parks.json: fictional printing demonstration
    // and the labeled, undated oxbow teaching sheets.
    'arkansas-state-parks-carmen': {
      contentVersion: 1,
      cases: {
        'arkansas-state-parks-historic-washington-printing': sequence('arkansas-state-parks-historic-washington-printing', 'Rebuild the print process',
          'Arrange the four steps of the fictional demonstration so each prerequisite is complete before the next step.',
          ['Arrange the type', 'Ink the type', 'Press paper against the type', 'Inspect the printed page'],
          ['A printed page must exist before it can be inspected.',
            'Arrange and ink the type before pressing paper; inspect only after pressing.']),
        'arkansas-state-parks-lake-chicot-sequence': sequence('arkansas-state-parks-lake-chicot-sequence', 'Restore the teaching sheets',
          'Arrange the three undated teaching sheets by the process they show. They are not dated surveys of Lake Chicot.',
          ['R: river follows a loop', 'S: a shortcut cuts across the loop', 'T: the old loop is a separate lake'],
          ['A shortcut requires an existing loop; separation comes after the shortcut.',
            'R establishes the bend and T shows the result. Put the intervening change between them.'])
      }
    },

    // data/packs/route-66.json: original office/later bay material pairs and
    // explicitly supplied purchase/remodeling milestones.
    'route-66-carmen': {
      contentVersion: 2,
      cases: {
        'route-66-dwight-materials': match('route-66-dwight-materials', 'Match the building phases',
          'Restore the two building-and-material pairs recorded in the source note; the invented repair orders may contain mismatches.', [
            {prompt: 'Original office', answer: 'Wood clapboard'},
            {prompt: 'Later service bay', answer: 'Concrete block'}
          ], ['Keep the original office separate from the later addition.',
            'The original office is paired with wood; the later service bay is paired with block.']),
        'route-66-painted-desert-chronology': sequence('route-66-painted-desert-chronology', 'Restore the remodeling timeline',
          'Arrange the three milestones using the dates supplied in the clues. A purchase and a completed remodel are different events.',
          ['NPS purchase', 'CCC remodeling starts', 'CCC remodeling completes'],
          ['Check which event belongs to each supplied year.',
            'The purchase is 1936; work begins in 1937 and finishes in 1940.'])
      }
    },

    // data/packs/architecture-hidden-details.json: selection precedes
    // construction start and completion in the supplied milestone record.
    'architecture-hidden-details-carmen': {
      contentVersion: 1,
      cases: {
        'architecture-hidden-details-gateway-arch-phases': sequence('architecture-hidden-details-gateway-arch-phases', 'Rebuild the arch milestones',
          'Arrange design selection, construction start, and completion according to the written record.',
          ['Design selected', 'Construction starts', 'Construction completes'],
          ['Selecting a design does not mean the structure has already been built.',
            'Selection is dated 1947–1948; construction begins in 1963 and completes in 1965.'])
      }
    },

    // data/packs/arkansas-delta.json: preserve the existing Quapaw settlement
    // context instead of treating the French trading post as the first settlement.
    'arkansas-delta-carmen': {
      contentVersion: 1,
      cases: {
        'arkansas-delta-arkansas-post-timeline': sequence('arkansas-delta-arkansas-post-timeline', 'Restore the post’s milestones',
          'Arrange the three recorded events by date. The trading post was established at the existing Quapaw village of Osotouy.',
          ['French trading post established', 'US acquisition', 'Territorial-capital role'],
          ['Preserve the event attached to each year instead of moving the years alone.',
            'The post record is 1686, US acquisition is 1803, and the capital role is 1819.'])
      }
    },

    // data/packs/american-national-parks.json: three explicitly simplified
    // teaching models, not full geological histories or operating forecasts.
    'american-national-parks-carmen': {
      contentVersion: 1,
      cases: {
        'american-national-parks-grand-canyon-model': sequence('american-national-parks-grand-canyon-model', 'Build the canyon model',
          'Arrange the three stages of ACME’s stated model. This is a simplified dependency exercise, not a full geological timeline.',
          ['Deposit the layer', 'Lift the layer', 'Cut the channel'],
          ['The model layer must exist before later changes can affect it.',
            'Establish the layer first, lift it next, and only then cut into it.']),
        'american-national-parks-yellowstone-circulation': sequence('american-national-parks-yellowstone-circulation', 'Rebuild the circulation model',
          'Track one parcel through the simplified groundwater sequence stated in the case.',
          ['Enter the rock', 'Heat at depth', 'Rise toward the surface'],
          ['Follow the same model parcel through every stage.',
            'The parcel must enter and become heated before it returns toward the surface.']),
        'american-national-parks-hawaii-sequence': sequence('american-national-parks-hawaii-sequence', 'Rebuild the magma model',
          'Arrange the four stages in ACME’s simplified model. This exercise does not predict real volcanic activity.',
          ['Heating', 'Melting into magma', 'Magma ascent', 'Eruption'],
          ['A later stage requires the material produced by the earlier stages.',
            'The model forms magma through heating and melting before ascent and eruption.'])
      }
    },

    // data/packs/railroads-depots.json: the three building/date pairs appear
    // explicitly in both named cases' source note.
    'railroads-depots-carmen': {
      contentVersion: 2,
      cases: {
        'railroads-depots-mount-clare-pair': match('railroads-depots-mount-clare-pair', 'Restore the campus date index',
          'Match each building to the year listed in the source note. Use the note to correct the copied records.', [
            {prompt: 'Mt. Clare Station', answer: '1851'},
            {prompt: 'Baldwin Roundhouse', answer: '1884'},
            {prompt: 'Annex', answer: '1891'}
          ], ['Treat each building name and date as a pair.',
            'Station is the earliest entry, and the Roundhouse is paired with 1884.']),
        'railroads-depots-mount-clare-buildings': sequence('railroads-depots-mount-clare-buildings', 'Rebuild the campus chronology',
          'Arrange the buildings from earliest to latest using their paired years in the source note.',
          ['Mt. Clare Station', 'Baldwin Roundhouse', 'Annex'],
          ['Keep each date attached to its building as you compare the years.',
            'Station is paired with 1851, Roundhouse with 1884, and Annex with 1891.'])
      }
    },

    // data/packs/museums-missing-labels.json: invented reference→scan→cast
    // chain, expressly not a claim about SUE's actual casting process.
    'museums-missing-labels-carmen': {
      contentVersion: 2,
      cases: {
        'museums-missing-labels-field-process': sequence('museums-missing-labels-field-process', 'Rebuild the representation chain',
          'Arrange ACME’s invented model so each derived item follows its source. This is not the manufacture history of SUE’s actual cast.',
          ['Reference specimen', 'Scan from the specimen', 'Cast from the scan'],
          ['Trace each derived item back to the source the exercise specifies.',
            'The scan needs the reference specimen, and the scan-derived cast needs the scan.'])
      }
    },

    // data/packs/ozark-waterways.json: four fictional index cards whose exact
    // dam/river fields are enumerated in the case. Hill Dam is invented.
    'ozark-waterways-carmen': {
      contentVersion: 2,
      cases: {
        'ozark-waterways-norfork-matching': match('ozark-waterways-norfork-matching', 'Rebuild the engineering index',
          'Match each fictional card to its recorded dam-and-river fields. These include deliberate mismatches; Hill Dam is invented.', [
            {prompt: 'Card P', answer: 'Norfork / North Fork'},
            {prompt: 'Card Q', answer: 'Norfork / White'},
            {prompt: 'Card R', answer: 'Hill Dam / North Fork'},
            {prompt: 'Card S', answer: 'Hill Dam / White'}
          ], ['Copy both fields together instead of matching only a familiar name.',
            'P and Q carry Norfork; R and S carry the invented Hill Dam. P and R carry North Fork.'])
      }
    }
  };

  // Additional interactions are individually authored from the named case's
  // clue sheet. Existing v1 descriptors above remain unchanged for saved work.
  const additions = {
    'bentonville-carmen': {
      'classic-walmart-museum': match('classic-walmart-museum', 'Keep the stores distinct',
        'Match each store to its opening year and city from the historical fact card. These are opening years, not exact anniversary dates.', [
          {prompt: 'Walton’s 5&10', answer: '1950 — Bentonville'},
          {prompt: 'First Walmart', answer: '1962 — Rogers'}
        ], ['Keep each store identity with both its city and year.', 'The earlier store is the Bentonville store; the later store is in Rogers.']),
      'classic-the-momentary': filter('classic-the-momentary', 'Keep the reuse requirements',
        'Select every requirement in the fictional adaptive-reuse brief. Leave out changes that conflict with that brief.',
        ['Retain the existing factory structure', 'Give the building a different use', 'Demolish the existing factory', 'Build a replica elsewhere'], [0, 1],
        ['The brief has two independent requirements.', 'One concerns the existing structure; the other concerns its use.'])
    },
    'argentina-carmen': {
      'triple-frontier-marker': sequence('triple-frontier-marker', 'Rebuild the sightings log',
        'Order the three fictional sightings using the 09:00, 10:00, and 11:00 entries. This is a case log, not a travel timetable.',
        ['Collect the map at the harbor', 'Check the river junction', 'Wait at the Triple Frontier viewpoint'],
        ['Keep each action attached to its logged time.', 'The harbor entry is first and the viewpoint entry last.']),
      'obelisco-avenida': match('obelisco-avenida', 'Restore the monument record',
        'Match each field to the detail supplied by the city fact cards. Incorrect copied records are exercise errors, not alternative histories.', [
          {prompt: 'Intersection', answer: 'Avenida Corrientes and Avenida 9 de Julio'},
          {prompt: 'Year erected', answer: '1936'},
          {prompt: 'Designer', answer: 'Alberto Prebisch'}
        ], ['Check location, date, and attribution independently.', 'The intersection needs both avenues; 1936 is the year, not an address.'])
    },
    'northwest-arkansas-carmen': {
      'nwa-atalanta': assemble('nwa-atalanta', 'Assemble the dispatch destination',
        'Use the fictional 1–3–2 key to select three word cards in order. Card 4 is unused.',
        ['1: Lake', '2: Park', '3: Atalanta', '4: Railyard'], [0, 2, 1],
        ['Read the card numbers as ordering instructions.', 'Take Lake first, Atalanta second, and Park last.']),
      'nwa-old-main': match('nwa-old-main', 'Restore the campus date labels',
        'Match the two event descriptions to their recorded years. The class year does not date construction of Senior Walk.', [
          {prompt: 'Old Main', answer: '1875'},
          {prompt: 'First graduating class represented on Senior Walk', answer: '1876'}
        ], ['The building and the graduating class are different subjects.', 'Old Main has the earlier year, one year before the class.'])
    },
    'nwa-mountain-biking-carmen': {
      'mtb-slaughter-american': assemble('mtb-slaughter-american', 'Repair the nameplate',
        'Select the two required fragments in the order specified by the fictional repair kit. Leave the spare fragments unused.',
        ['All', 'American', 'Creek', 'Blackbird'], [0, 1],
        ['The kit specifies the first two fragments, in order.', 'All comes before American; Creek and Blackbird are spares.']),
      'mtb-sugar-tunnel': assemble('mtb-sugar-tunnel', 'Restore the two-slot label',
        'Fill the fictional label with the required first word, then the supplied word for sight. Leave the decoys unused.',
        ['Tunnel', 'Vision', 'Sugar', 'Bamboozled'], [0, 1],
        ['Slot one requires Tunnel.', 'Vision supplies the word for sight; the other two scraps are decoys.'])
    },
    'arkansas-state-parks-carmen': {
      'arkansas-state-parks-crater-of-diamonds-dates': match('arkansas-state-parks-crater-of-diamonds-dates', 'Separate discovery and acquisition',
        'Match each historical event to the year in the source note. A discovery and a park acquisition are different records.', [
          {prompt: 'Diamond discovery', answer: '1906'},
          {prompt: 'State-park acquisition', answer: '1972'}
        ], ['Attach the event before comparing the years.', 'Discovery is the earlier event; acquisition is the later one.']),
      'arkansas-state-parks-mammoth-spring-flow': sequence('arkansas-state-parks-mammoth-spring-flow', 'Restore the water-flow chain',
        'Order the three named features from water source to receiving river. The arrows show water flow, not roads or walking directions.',
        ['Mammoth Spring', 'Lake', 'Spring River'],
        ['Begin with the spring that supplies the water.', 'The lake lies between the spring and the river in the source note.'])
    },
    'route-66-carmen': {
      'route-66-brush-creek-patent': match('route-66-brush-creek-patent', 'Separate design and construction',
        'Match each event to its year. A patent for a design does not date every bridge built from it.', [
          {prompt: 'Marsh design patent', answer: '1912'},
          {prompt: 'Brush Creek Bridge construction', answer: '1923'}
        ], ['Keep the design paperwork separate from this structure.', 'The design patent comes eleven years before this bridge’s construction.']),
      'route-66-tucumcari-preservation': filter('route-66-tucumcari-preservation', 'Keep supported preservation entries',
        'Select every entry established by the source note. Leave out construction or completion claims that the note does not establish.',
        ['National Register listing in 1993', 'Restoration grant in 2007', 'Building construction in 1993', 'Restoration work completed in 2007'], [0, 1],
        ['The note dates two preservation events.', 'A grant is not itself proof of completed work; a listing is not a construction certificate.'])
    },
    'ozark-waterways-carmen': {
      'ozark-waterways-beaver-label': filter('ozark-waterways-beaver-label', 'Keep the complete custody label',
        'Select every card that preserves both White River and above-dam position. These invented labels establish no water-quality conclusion.',
        ['J: White River, below dam', 'K: White River, above dam', 'L: East Fork, below dam', 'M: East Fork, above dam'], [1],
        ['Test the river and the sampling side separately.', 'A match on only one field is insufficient; East Fork is an invented distractor.']),
      'ozark-waterways-bull-shoals-purpose': filter('ozark-waterways-bull-shoals-purpose', 'Retain every documented purpose',
        'Select the project purposes stated in the source note. Leave out claims that the note does not support.',
        ['Flood control', 'Hydroelectric generation', 'Ocean navigation', 'A project with neither stated purpose'], [0, 1],
        ['Check whether the two documented functions actually conflict.', 'The source lists flood control and power generation together.']),
      'ozark-waterways-bull-shoals-sequence': sequence('ozark-waterways-bull-shoals-sequence', 'Restore the dispatch stages',
        'Arrange the three logged steps for the same reading on one model clock/day. This is a tabletop exercise, not a dam operating schedule.',
        ['Record the reading', 'Check the reading', 'Dispatch the checked reading'],
        ['A checked reading must exist before a checked dispatch can leave.', 'The log records 09:00, checks 09:10, and dispatches 09:20.'])
    },
    'arkansas-delta-carmen': {
      'arkansas-delta-cultural-center-broadcast': sequence('arkansas-delta-cultural-center-broadcast', 'Rebuild the radio record',
        'Order the three recorded stages within the fictional exercise week. An approved version cannot predate its approval.',
        ['Record the interview', 'Make the transcript', 'Approve the transcript'],
        ['Separate a draft transcript from its approved version.', 'The interview is Monday, transcription Tuesday, and approval Wednesday.']),
      'arkansas-delta-hampson-places': match('arkansas-delta-hampson-places', 'Restore the provenance fields',
        'Match each location to its role in the supplied record. A museum address is not automatically an excavation location.', [
          {prompt: 'Nodena', answer: 'Collection origin'},
          {prompt: 'Wilson', answer: 'Museum location'}
        ], ['Track where the material came from and where it is displayed separately.', 'The source identifies material from Nodena and the museum in Wilson.']),
      'arkansas-delta-lakeport-scope': filter('arkansas-delta-lakeport-scope', 'Restore the missing historical scope',
        'Select all subjects included in the source note’s description of the museum. No fictional testimony is attributed to historical people.',
        ['The house and its owners', 'Enslaved people’s lives and labor', 'Later sharecropping history', 'An unrelated transport history'], [0, 1, 2],
        ['The house is part of the record, but it is not the whole record.', 'Preserve both the building history and the people and labor systems the source identifies.']),
      'arkansas-delta-purchase-axes': match('arkansas-delta-purchase-axes', 'Repair the survey legend',
        'Match each surveyor to the historical line assignment in the source note. This is not property-boundary guidance.', [
          {prompt: 'Robbins', answer: 'North–south meridian'},
          {prompt: 'Brown', answer: 'Westward baseline'}
        ], ['Each assignment has a direction and line type.', 'Robbins belongs with the meridian; Brown belongs with the baseline.'])
    },
    'american-national-parks-carmen': {
      'american-national-parks-everglades-season': filter('american-national-parks-everglades-season', 'Keep both habitat observations',
        'Select the observations stated by ACME’s fictional dry-season model. Do not infer a universal condition from a seasonal label.',
        ['Shallow habitat dries', 'A deeper slough pool retains water', 'Every pool must be dry', 'Every habitat remains equally wet'], [0, 1],
        ['Compare the two locations rather than treating every depth alike.', 'The model explicitly records shallow drying and deeper water remaining.']),
      'american-national-parks-yosemite-measurements': match('american-national-parks-yosemite-measurements', 'Repair the model survey table',
        'Match the two model observations and their calculated change. Both observations use one fixed reference and unit; these are not current Yosemite measurements.', [
          {prompt: 'Earlier measured extent', answer: '100 units'},
          {prompt: 'Later measured extent', answer: '80 units'},
          {prompt: 'Later minus earlier', answer: '−20 units'}
        ], ['Keep observations separate from the calculated difference.', 'Subtract 100 from 80; a negative result describes the model’s decrease.'])
    },
    'railroads-depots-carmen': {
      'railroads-depots-steamtown-manifest': match('railroads-depots-steamtown-manifest', 'Restore the load classifications',
        'Match the two car types to their definitions in the fictional sorting exercise.', [
          {prompt: 'Passenger car', answer: 'Carries people'},
          {prompt: 'Freight car', answer: 'Carries goods'}
        ], ['The exercise states both definitions explicitly.', 'Crates belong with goods; people belong with the passenger definition.']),
      'railroads-depots-cass-arrival': sequence('railroads-depots-cass-arrival', 'Restore the model itinerary',
        'Order the three entries for the same through-load on the model clock/day. No actual Cass route or service time is represented.',
        ['Model Depot departure', 'Model Siding passage', 'Model Mill arrival'],
        ['Follow the same load rather than mixing different movements.', 'Departure is 09:00, siding passage 09:20, and arrival 09:45.'])
    },
    'architecture-hidden-details-carmen': {
      'architecture-hidden-details-taliesin-materials': match('architecture-hidden-details-taliesin-materials', 'Separate credit from materials',
        'Match each field to its recorded value. A material’s place of origin is not the designer’s identity.', [
          {prompt: 'Design credit', answer: 'Wright'},
          {prompt: 'Stone named on the slip', answer: 'Local limestone'},
          {prompt: 'Sand named on the slip', answer: 'Wisconsin River sand'}
        ], ['Read the design credit and material slip as different kinds of record.', 'Wright is the person credited; limestone and sand are materials.']),
      'architecture-hidden-details-glass-house-design': filter('architecture-hidden-details-glass-house-design', 'Keep the dated event claims',
        'Select every claim supported by the copied record. Leave out conclusions that turn a design period into a completed building.',
        ['Design work in 1945–1948', 'Completion in 1949', 'The finished house existed throughout 1945–1948', 'Completion predates the design period'], [0, 1],
        ['Design and completion are separate events.', 'The record gives a design period first and a later completion year.'])
    },
    'museums-missing-labels-carmen': {
      'museums-missing-labels-air-space-places': match('museums-missing-labels-air-space-places', 'Separate flight and museum locations',
        'Match each place to the context supplied in the case. Holding an object later does not move its historical event.', [
          {prompt: 'North Carolina', answer: 'Historical flight context'},
          {prompt: 'Washington', answer: 'Museum context'}
        ], ['An event location and a later display location can differ.', 'The flight record belongs with North Carolina; the museum context belongs with Washington.']),
      'museums-missing-labels-exploratorium-credits': match('museums-missing-labels-exploratorium-credits', 'Rebuild the catalogue entry',
        'Match all four fields to the details supplied by the catalogue note. No image or outside recognition is required.', [
          {prompt: 'Title', answer: 'Fog Bridge'},
          {prompt: 'Number', answer: '#72494'},
          {prompt: 'Year', answer: '2013'},
          {prompt: 'Artist', answer: 'Fujiko Nakaya'}
        ], ['Check identity, number, date, and attribution independently.', 'The record gives #72494 and 2013, with Fujiko Nakaya credited.'])
    }
  };
  Object.entries(additions).forEach(([packId, cases]) => Object.assign(catalog[packId].cases, cases));

  // Catalog 3 preserves the receipt's two-condition deduction. The original
  // catalog-1/2 matching activity remains stable for existing saved work.
  const producerDeduction = {
    // The ID versions the authored task; version describes the descriptor format.
    id: 'classic-downtown-square:filter:v2', version: 1, kind: 'filter',
    title: 'Find the receipt’s stall',
    instruction: 'Keep the one seller who satisfies both receipt conditions: cut flowers, bought directly from their grower. Use the fictional stall register in the case file.',
    items: ['Fern, stall 12', 'Basil, stall 18', 'Reed, stall 24', 'Iris, stall 30'],
    answer: [0],
    hints: ['Check the item and who produced it independently.',
      'Reed has cut flowers but did not grow them. Basil and Iris produce different goods.',
      'Keep: Fern, stall 12. Fern grew the cut flowers on the receipt.']
  };

  function getCaseActivity(pack, item, catalogVersion = 2) {
    if (!pack || !item || ![1, 2, 3].includes(catalogVersion)) return null;
    const entry = Object.hasOwn(catalog, pack.id) ? catalog[pack.id] : null;
    if (!entry || pack.contentVersion !== entry.contentVersion || !Object.hasOwn(entry.cases, item.caseId)) return null;
    // A schema-6 Mixed save used the original twenty-case catalog. Its other
    // cases must stay four-choice, including any saved eliminations or score.
    if (catalogVersion === 1 && Object.hasOwn(additions, pack.id) && Object.hasOwn(additions[pack.id], item.caseId)) return null;
    const activity = catalogVersion === 3 && pack.id === 'bentonville-carmen' && item.caseId === 'classic-downtown-square'
      ? producerDeduction : entry.cases[item.caseId];
    // Return a fresh descriptor so presentation shuffles cannot mutate answers.
    return {
      ...activity,
      items: activity.items.map(value => typeof value === 'string' ? value : {...value}),
      ...(activity.answer ? {answer: [...activity.answer]} : {}),
      hints: [...activity.hints]
    };
  }

  const api = {getCaseActivity};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.CarmenActivities = api;
})(typeof globalThis !== 'undefined' ? globalThis : window);
