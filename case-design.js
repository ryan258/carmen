/* Catalog-3 reasoning overlays and one authored fictional episode.
 * Source packs and their historical review records remain untouched. New story
 * evidence is explicitly invented; it supplies no real-world routes or claims.
 * Catalogs 1 and 2 keep their original questions, answers, and saved progress.
 */
(function exposeCaseDesign(root) {
  'use strict';

  const clone = value => JSON.parse(JSON.stringify(value));
  const episodeId = 'bentonville-paper-trail-v1';
  const episode = {
    id: episodeId,
    title: 'The Swapped Dispatch',
    routeStart: 0,
    stopCount: 4,
    caseVariantIds: ['classic-downtown-square', 'classic-walmart-museum', 'classic-walmart-home-office', 'classic-crystal-bridges'],
    intro: 'Four connected stops. Someone has changed the destination on ACME’s training parcel. Solve each local case to recover a receipt, archive copy, dispatch log, and route sheet. Use them together to repair the dispatch at headquarters. All parcel records, seals, couriers, and room connections in this episode are fictional.',
    successMessage: 'You restored parcel P7’s original Studio destination, rejected the later overwrite, and rebuilt its delivery through the open links. ACME’s fictional dispatch is repaired because you connected all four recovered records.',
    stops: [
      {
        locationId: 'downtown-square', caseId: 'classic-downtown-square',
        result: 'The market receipt is restored. You recover the parcel identity that the later records must match.',
        evidence: 'Market receipt: the training parcel is P7. Its original seal reads VIOLET. A parcel number and its original seal must both match before two records can be joined.',
        nextLead: 'A reference on the recovered receipt sends ACME to the Walmart Museum teaching archive for the matching dispatch copy.'
      },
      {
        locationId: 'walmart-museum', caseId: 'classic-walmart-museum',
        result: 'The two store records are separated correctly. Behind the teaching copy, you recover three dispatch entries.',
        evidence: 'Archive copies: record A lists parcel P7, seal VIOLET, destination Studio; record B lists parcel P9, seal VIOLET, destination Gallery; record C lists parcel P7, seal ORANGE, destination Gallery. These are ACME teaching records, not museum collection records.',
        nextLead: 'The archive entries disagree. A dispatch log at the fictional campus map desk records when the seals were applied.'
      },
      {
        locationId: 'walmart-home-office', caseId: 'classic-walmart-home-office',
        result: 'The campus clue identifies the fictional map desk. Its recovered log explains which dispatch entry was changed.',
        evidence: 'Dispatch log: P7 left with its VIOLET seal and a destination copied from the matching original archive entry. After that handoff, the courier applied an ORANGE seal and replaced the destination with Gallery. No authorized destination change appears in the exercise log.',
        nextLead: 'You can restore the original destination. The final teaching route sheet at Crystal Bridges shows which links can deliver the parcel there.'
      },
      {
        locationId: 'crystal-bridges', caseId: 'classic-crystal-bridges',
        result: 'The route sheet is repaired. All four recovered records are ready for one final dispatch decision.',
        evidence: 'Route sheet: in this invented exercise network, the open links are Entrance–Gallery, Gallery–Bridge pavilion, and Bridge pavilion–Studio, in both directions. Entrance–Studio is closed; no other links exist. Delivery starts at Entrance and must visit Bridge pavilion before reaching the original destination. This is not the museum floor plan or a visitor route.',
        nextLead: 'Bring the four recovered records to headquarters. Identify the original entry, explain the overwrite, and approve one corrected delivery.'
      }
    ]
  };

  function getEpisode(pack, id) {
    if (!pack || pack.id !== 'bentonville-carmen' || pack.contentVersion !== 5 || id !== episodeId) return null;
    const matches = episode.stops.every((stop, index) => pack.locations?.[index]?.id === stop.locationId
      && pack.questions?.[stop.locationId]?.some(item => item.caseId === stop.caseId));
    return matches ? clone(episode) : null;
  }

  function getEpisodeEvidence(pack, id, locationIndex) {
    const owned = getEpisode(pack, id);
    if (!owned || !Number.isInteger(locationIndex) || locationIndex < 0 || locationIndex >= owned.stopCount) return '';
    return 'Fictional ACME paper trail. ' + owned.stops.slice(0, locationIndex + 1)
      .map((stop, index) => `Record ${index + 1}. ${stop.evidence}`).join('\n\n');
  }

  function getEpisodeFinalRounds(pack, id) {
    if (!getEpisode(pack, id)) return [];
    const evidence = getEpisodeEvidence(pack, id, 3);
    return [
      {
        title: 'Recover the original destination', description: evidence,
        question: 'Which archive entry matches both identifiers on the market receipt?',
        options: ['Record B: P9 / VIOLET / Gallery', 'Record C: P7 / ORANGE / Gallery', 'Record A: P7 / VIOLET / Studio', 'Combine B’s parcel number with C’s seal'],
        correctIndex: 2,
        explanation: 'The market receipt supplies P7 and VIOLET together. Only record A preserves both, so Studio is the original destination. B matches only the seal; C matches only the parcel number.',
        hints: ['Keep the parcel number and original seal together.', 'The receipt names P7 and VIOLET. Reject any record that changes either field.', 'Answer: Record A: P7 / VIOLET / Studio.'],
        optionFeedback: ['B has the original seal but names a different parcel. Check both identifiers.', 'C has the right parcel number but a different seal. Check the receipt’s original seal.', '', 'Combining fields from different records creates a record that was never supplied. Find one entry matching both.']
      },
      {
        title: 'Explain the changed label', description: evidence,
        question: 'Which account is supported by the receipt, archive copies, and dispatch log together?',
        options: ['The ORANGE seal proves Gallery was P7’s original destination', 'P7 originally went to Studio; its destination was changed to Gallery after handoff', 'The two VIOLET records prove P7 and P9 are the same parcel', 'The archive proves an authorized change to Gallery happened before handoff'],
        correctIndex: 1,
        explanation: 'The receipt and archive A establish P7 / VIOLET / Studio. The log then places the ORANGE seal and Gallery overwrite after handoff, with no authorized change recorded. A later label does not replace the evidence of the original destination.',
        hints: ['Use the log to order the original record and the overwrite.', 'The VIOLET seal was present at handoff; ORANGE and Gallery were added later.', 'Answer: P7 originally went to Studio; its destination was changed to Gallery after handoff.'],
        optionFeedback: ['ORANGE is the later seal in the log. Compare its timing with the original receipt.', '', 'A shared seal does not erase the different parcel numbers. Both identifiers matter.', 'The supplied log places the overwrite after handoff and records no authorization.']
      },
      {
        title: 'Approve the repaired dispatch', description: evidence,
        question: 'Which delivery preserves the recovered parcel identity, original destination, and every route constraint?',
        options: ['P7: Entrance → Gallery; deliver to Gallery', 'P9: Entrance → Gallery → Bridge pavilion → Studio; deliver to Studio', 'P7: Entrance → Studio; deliver to Studio', 'P7: Entrance → Gallery → Bridge pavilion → Studio; deliver to Studio'],
        correctIndex: 3,
        explanation: 'The receipt identifies P7, the matching original archive entry identifies Studio, and the route sheet permits Entrance → Gallery → Bridge pavilion → Studio. This dispatch satisfies all three records and visits the required pavilion. You repaired the fictional delivery without inventing a real museum route.',
        hints: ['Check parcel, destination, and each consecutive route link independently.', 'P7 must reach Studio through Bridge pavilion. The direct Entrance–Studio link is closed.', 'Answer: P7: Entrance → Gallery → Bridge pavilion → Studio; deliver to Studio.'],
        optionFeedback: ['This keeps P7 but preserves the altered destination and omits Bridge pavilion. Recover the original destination.', 'The route works, but P9 is not the parcel identified by the market receipt.', 'The parcel and destination fit, but this uses the closed link and skips Bridge pavilion.', '']
      }
    ].map(round => ({...round, visualHtml: '', ariaLabel: 'Fictional evidence from the four recovered dispatch records'}));
  }

  const overlays = {
    'ozark-waterways-carmen': {
      contentVersion: 2,
      cases: {
        'ozark-waterways-buffalo-classification': {
          clueIndex: 1,
          clue: 'ACME exercise: a copied caption calls the Buffalo a storage reservoir and assigns the whole watershed to National Park Service management. Check both fields against the source note. This dossier is assigned to the fictional ACME Records Desk.',
          question: 'Which corrected caption preserves both the waterway type and the management scope?',
          options: ['Free-flowing river; its entire watershed is managed by the National Park Service', 'Free-flowing river; only part of its watershed is managed by the National Park Service', 'Storage reservoir; only part of its watershed is managed by the National Park Service', 'Free-flowing river; none of its watershed is managed by the National Park Service'],
          correctIndex: 1,
          explanation: 'The source note supplies two independent fields: a free-flowing river and National Park Service management of only part of its watershed. The correct caption preserves both. A correct river type does not justify changing the management boundary. The fictional dossier assignment and witness still identify the recorded desk and disguise.',
          hints: ['Check the river type and management coverage separately.', 'The source calls the Buffalo free-flowing and says only part of its watershed is managed by the National Park Service.', 'Answer: Free-flowing river; only part of its watershed is managed by the National Park Service.'],
          optionFeedback: ['The river type fits, but “entire” expands the management claim beyond the supplied source.', '', 'The management scope fits, but the source describes a free-flowing river, not a storage reservoir.', 'The river type fits, but “none” contradicts the source’s “only part.”']
        }
      }
    },
    'museums-missing-labels-carmen': {
      contentVersion: 2,
      cases: {
        'museums-missing-labels-henry-ford-provenance': {
          clueIndex: 1,
          clue: 'ACME exercise: four invented teaching files each contain the same owner’s identification story. File A adds an independently created contemporary archival note matched to the same bus. File B adds a second copy of the owner’s story. File C adds an independent contemporary note about a different bus. File D adds a later summary derived only from the owner’s story. Assume the supplied matches and document relationships are reliable. These are invented comparison files, not invented real testimony. This dossier is assigned to the fictional ACME Dispatch Desk.',
          question: 'Which file adds independent corroboration about the same bus?',
          options: ['File A: the story plus a matched independent contemporary note', 'File B: the story plus a second copy of that story', 'File C: the story plus an independent note about a different bus', 'File D: the story plus a later summary derived from that story'],
          correctIndex: 0,
          explanation: 'File A satisfies both conditions: its added note is independently created and matched to the same bus. B repeats one source, C concerns a different bus, and D derives from the original story. More pages alone do not establish independent corroboration. All four comparison files are fictional. The existing desk assignment and witness identify the warrant fields.',
          hints: ['Ask two questions: is the added record independent, and does it concern the same bus?', 'A copied story and a summary derived from it remain dependent on that story. A record about a different bus does not corroborate this identification.', 'Answer: File A: the story plus a matched independent contemporary note.'],
          optionFeedback: ['', 'Copying the same story adds a page, but not an independent source.', 'The note is independent, but it is about a different bus. Independence and relevance must both fit.', 'The summary is derived from the same story. A later document is not automatically an independent source.']
        }
      }
    }
  };

  function resolveCase(pack, item, catalogVersion = 3) {
    if (!pack || !item || catalogVersion !== 3) return item;
    const entry = Object.hasOwn(overlays, pack.id) ? overlays[pack.id] : null;
    if (!entry || pack.contentVersion !== entry.contentVersion || !Object.hasOwn(entry.cases, item.caseId)) return item;
    const owned = Object.values(pack.questions || {}).flat().find(candidate => candidate.caseId === item.caseId);
    if (!owned) return item;
    const {clueIndex, clue, ...puzzle} = entry.cases[item.caseId];
    const result = clone(owned);
    result.clues[clueIndex] = clue;
    result.puzzle = {...result.puzzle, ...clone(puzzle)};
    result.designRevision = {
      id: `${owned.caseId}:reasoning:v1`, catalogVersion: 3,
      note: 'New reasoning presentation using the existing source note and explicitly fictional records. Original review evidence belongs to the source pack; this presentation has not received human acceptance.'
    };
    return result;
  }

  const api = {getEpisode, getEpisodeEvidence, getEpisodeFinalRounds, resolveCase};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.CarmenCaseDesign = api;
})(typeof globalThis !== 'undefined' ? globalThis : window);
