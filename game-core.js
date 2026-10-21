/* Pure game rules and persistence contracts. Shared by the browser and Node tests. */
(function exposeCore(root) {
  'use strict';
  const SAVE_VERSION = 8;
  const SCORE_RULES = Object.freeze({ puzzleByAttempt: [100, 75, 50], laterAttempt: 25,
    hintPenalty: 15, warrant: 50, streakStep: 25, finalConfrontation: 200,
    remainingLife: 50, perfectGame: 500 });
  const difficulties = ['rookie', 'detective', 'inspector'];
  const phases = ['investigation', 'between', 'final'];
  const text = value => typeof value === 'string' && value.trim().length > 0;
  const integer = (value, min, max = Number.MAX_SAFE_INTEGER) => Number.isSafeInteger(value) && value >= min && value <= max;
  const uniqueStrings = value => Array.isArray(value) && value.every(text) && new Set(value).size === value.length;
  function getPuzzleScore(attempts, hints = 0) {
    return Math.max(SCORE_RULES.laterAttempt, (SCORE_RULES.puzzleByAttempt[attempts] ?? SCORE_RULES.laterAttempt) - hints * SCORE_RULES.hintPenalty);
  }
  function getStreakBonus(streak) { return streak >= 3 ? (streak - 2) * SCORE_RULES.streakStep : 0; }
  function getStartingLives(difficulty) { return difficulty === 'rookie' ? 6 : difficulty === 'inspector' ? 4 : 5; }
  // Commendations describe this case, so a short route can earn the same result
  // as a long one. Assistance is acknowledged without lowering the rank.
  function getCompletionRank({history = [], stopCount = 0, assisted = false} = {}) {
    if (!integer(stopCount, 1) || history.length !== stopCount || history.some(entry => !entry?.success)) return 'Case in progress';
    const accuracy = history.filter(entry => entry.attempts === 1).length / stopCount;
    const rank = accuracy === 1 ? '🏆 Chief Inspector' : accuracy >= .75 ? '⭐ Senior Detective'
      : accuracy >= .5 ? '🔍 Detective' : '🕵️ Case Investigator';
    return assisted ? `${rank} · completed with assistance` : rank;
  }
  function caseDesign() {
    const design = typeof module !== 'undefined' && module.exports ? require('./case-design.js') : root.CarmenCaseDesign;
    if (!design) throw new Error('Case design is unavailable. Reload the game assets together.');
    return design;
  }
  function resolveCase(pack, item, catalogVersion) {
    return catalogVersion >= 3 ? caseDesign().resolveCase(pack, item, catalogVersion) : item;
  }
  function stopCounts(total) {
    // The inventory finale needs four distinct tokens, just like every other puzzle.
    if (!integer(total, 4, 100)) return [];
    return [...new Set([Math.ceil(total / 2), Math.ceil(total * .75), total])].filter(n => n >= 4).sort((a, b) => a - b);
  }
  function routeLocations(pack, stopCount, routeStart = 0) {
    if (!stopCounts(pack.locations.length).includes(stopCount)
      || !integer(routeStart, 0, pack.locations.length - stopCount)) throw new Error('Invalid saved route.');
    return pack.locations.slice(routeStart, routeStart + stopCount);
  }
  function savedRouteLocations(saved, pack) {
    if (saved.schemaVersion >= 8 && saved.episodeId) {
      const episode = caseDesign().getEpisode(pack, saved.episodeId);
      if (!episode || saved.routeStart !== episode.routeStart || saved.stopCount !== episode.stopCount) throw new Error('Invalid saved episode.');
    }
    return routeLocations(pack, saved.stopCount, saved.schemaVersion >= 7 ? saved.routeStart : 0);
  }
  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[c]));
  }
  function validateManifest(manifest) {
    const fail = () => { throw new Error('Invalid quiz pack manifest: require unique local pack paths, ids, titles, and a listed default.'); };
    if (!manifest || manifest.schemaVersion !== 1 || !Array.isArray(manifest.packs) || !manifest.packs.length) fail();
    const ids = new Set(), paths = new Set();
    for (const entry of manifest.packs) {
      if (!entry || !text(entry.id) || !text(entry.title) || !/^\.\/data\/packs\/[a-z0-9-]+\.json$/.test(entry.path) || ids.has(entry.id) || paths.has(entry.path)) fail();
      ids.add(entry.id); paths.add(entry.path);
    }
    if (!ids.has(manifest.defaultPackId)) fail();
    return manifest;
  }
  function hasReviewEvidence(item, sources) {
    const evidence = item?.reviewEvidence;
    const date = evidence?.date;
    return item?.reviewStatus === 'reviewed' && text(evidence?.reviewer) && text(evidence?.notes)
      && typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)
      && Number.isFinite(Date.parse(date)) && new Date(date).toISOString().slice(0,10) === date
      && uniqueStrings(item.sources) && item.sources.length > 0 && item.sources.every(id => sources[id]?.reviewed === true);
  }
  // The report reuses evidence from the selected cases, never a hard-coded answer.
  // Save validation calls this same resolver so displayed and persisted answers agree.
  function finalRounds(pack, locations, caseIds, catalogVersion = 2, episodeId = null) {
    if (catalogVersion >= 3 && episodeId) {
      const rounds = caseDesign().getEpisodeFinalRounds(pack, episodeId);
      if (!Array.isArray(rounds) || rounds.length !== 3) throw new Error('Invalid episode report.');
      return rounds;
    }
    const evidenceRound = (index, title) => {
      const location = locations[index];
      const item = resolveCase(pack, pack.questions[location.id].find(c => c.caseId === caseIds[index]), catalogVersion);
      return {...item.puzzle, title,
        description: `${item.puzzle.description} Review the case from ${location.name}. ${item.clues.join(' ')}`,
        visualHtml: '', ariaLabel: `Case evidence from ${location.name}`};
    };
    const last = locations[locations.length-1];
    return [evidenceRound(0, 'First-stop evidence review'),
      evidenceRound(Math.floor(locations.length / 2), 'Route evidence review'),
      {title:'Route inventory', description:'Use the collected tokens shown in your case inventory.',
        question:'Which token did you collect at the last stop of your selected route?',
        options:[last.token.name, ...locations.filter(loc=>loc.id!==last.id).slice(0,3).map(loc=>loc.token.name)],
        correctIndex:0, visualHtml:'',
        explanation:`Your route ended at ${last.name}, where you collected the ${last.token.name} token.`}];
  }
  function validatePack(pack) {
    const require = (ok, message) => { if (!ok) throw new Error(`Invalid quiz pack: ${message}`); };
    require(pack && pack.schemaVersion === 1 && integer(pack.contentVersion, 1), 'schema/content version');
    ['id', 'title', 'subtitle', 'heroLocation', 'intro', 'evidenceLabel', 'successMessage'].forEach(k => require(text(pack[k]), k));
    require(Array.isArray(pack.locations) && integer(pack.locations.length, 4, 100), 'locations');
    require(pack.questions && typeof pack.questions === 'object' && !Array.isArray(pack.questions), 'questions');
    require(pack.sources && typeof pack.sources === 'object' && !Array.isArray(pack.sources), 'sources');
    const coordinate = (v, max) => typeof v === 'number' && Number.isFinite(v) && Math.abs(v) <= max;
    require(coordinate(pack.map?.center?.lat, 90) && coordinate(pack.map?.center?.lng, 180), 'map center');
    require(['zoom','minZoom','maxZoom'].every(k => Number.isFinite(pack.map[k]) && pack.map[k] >= 0 && pack.map[k] <= 20)
      && pack.map.minZoom <= pack.map.zoom && pack.map.zoom <= pack.map.maxZoom, 'map zoom');
    const puzzle = (p, label) => {
      require(p && ['description', 'question'].every(k => text(p[k])), `${label} text`);
      require(uniqueStrings(p.options) && p.options.length === 4 && integer(p.correctIndex, 0, 3), `${label} options`);
      require(text(p.explanation), `${label} explanation`);
      if (p.hints !== undefined) require(Array.isArray(p.hints) && p.hints.length > 0 && p.hints.every(text), `${label} hints`);
      if (p.visualHtml !== undefined) require(typeof p.visualHtml === 'string', `${label} visual`);
      // Only repository-owned HTML is accepted. Never accept uploads or arbitrary remote packs.
      if (p.visualHtml) require(!/<\s*(script|iframe|object|embed|form|input|button|a|img|svg|link|style)\b|\bon\w+\s*=|javascript:/i.test(p.visualHtml), `${label} unsafe HTML`);
    };
    const ids = new Set(), caseIds = new Set();
    for (const loc of pack.locations) {
      require(text(loc.id) && !ids.has(loc.id), 'unique location id'); ids.add(loc.id);
      require(['name','province','emoji'].every(k => text(loc[k])) && coordinate(loc.lat,90) && coordinate(loc.lng,180), `${loc.id} location`);
      require(loc.henchman && ['name','alias','emoji','role','dossierNote'].every(k => text(loc.henchman[k])), `${loc.id} suspect`);
      require(loc.token && text(loc.token.name) && text(loc.token.char), `${loc.id} token`);
      const pool = pack.questions[loc.id]; require(Array.isArray(pool) && pool.length > 0 && pool.length <= 100, `${loc.id} pool`);
      for (const item of pool) {
        require(text(item.caseId) && !caseIds.has(item.caseId), 'unique case id'); caseIds.add(item.caseId);
        require(item.briefing && ['headline','report','callingCard','nextLead'].every(k => text(item.briefing[k])), `${item.caseId} briefing`);
        require(item.briefing.suspect && ['name','alias','emoji','role','dossierNote'].every(k=>text(item.briefing.suspect[k])), `${item.caseId} suspect`);
        require(Array.isArray(item.clues) && item.clues.length === 3 && item.clues.every(text), `${item.caseId} clues`);
        require(['city','hideout','disguise'].every(k => text(item.warrantAnswers?.[k])) && item.warrantAnswers.city === loc.name, `${item.caseId} warrant`);
        require(text(item.puzzle?.title), `${item.caseId} title`); puzzle(item.puzzle, item.caseId);
        require(text(item.funFact) && text(item.learningObjective) && text(item.accessibilityDescription), `${item.caseId} learning metadata`);
        require(difficulties.includes(item.difficulty) && item.mechanic === 'deduction-choice', `${item.caseId} mechanic/difficulty`);
        require(uniqueStrings(item.regionTags) && item.regionTags.length > 0 && text(item.visualType), `${item.caseId} tags/visual`);
        require(['source-linked-needs-line-review','reviewed'].includes(item.reviewStatus), `${item.caseId} review status`);
        require(uniqueStrings(item.sources) && item.sources.length > 0 && item.sources.every(id => Object.hasOwn(pack.sources,id)), `${item.caseId} sources`);
        if (item.reviewStatus === 'reviewed') require(hasReviewEvidence(item, pack.sources), `${item.caseId} review evidence`);
      }
    }
    require(new Set(pack.locations.map(loc=>loc.token.name)).size === pack.locations.length, 'unique token names');
    require(Object.keys(pack.questions).length === ids.size && Object.keys(pack.questions).every(id => ids.has(id)), 'question/location keys');
    for (const source of Object.values(pack.sources)) {
      require(text(source.title) && text(source.publisher) && typeof source.reviewed === 'boolean', 'source metadata');
      require(typeof source.url === 'string' && /^https:\/\/[^\s]+$/.test(source.url), 'source URL');
    }
    require(text(pack.finalConfrontation?.title) && Array.isArray(pack.finalConfrontation.rounds) && pack.finalConfrontation.rounds.length === 3, 'three final rounds');
    pack.finalConfrontation.rounds.forEach((p,i) => puzzle(p, `final ${i+1}`));
    pack.finalConfrontation.rounds.forEach((p,i) => {
      if (p.reviewStatus === 'reviewed') require(hasReviewEvidence(p, pack.sources), `final ${i+1} review evidence`);
    });
    return pack;
  }
  // Activity answers use canonical item indices, independent of the shuffled UI.
  // Resolve descriptors from trusted content; saves carry progress, never questions.
  function getActivity(pack, locations, caseIds, phase, locationIndex, finalRound, quizStyle, activityCatalogVersion = 2, episodeId = null) {
    if (quizStyle !== 'mixed') return null;
    if (phase === 'investigation' || phase === 'between') {
      const location = locations[locationIndex];
      const item = resolveCase(pack, pack.questions[location.id].find(c => c.caseId === caseIds[locationIndex]), activityCatalogVersion);
      const activities = typeof module !== 'undefined' && module.exports ? require('./quiz-activities.js') : root.CarmenActivities;
      if (!activities || typeof activities.getCaseActivity !== 'function') throw new Error('Quiz activities are unavailable. Reload the game assets together.');
      return activities.getCaseActivity(pack, item, activityCatalogVersion);
    }
    if (phase !== 'final' || ![2,3].includes(finalRound) || (activityCatalogVersion >= 3 && episodeId)) return null;
    const count = Math.min(4, locations.length);
    const route = Array.from({length: count}, (_, i) => locations[Math.round(i * (locations.length - 1) / (count - 1))]);
    const identity = `${pack.id}:${pack.contentVersion}:${locations.map(loc => loc.id).join(',')}`;
    if (finalRound === 2) return {
      id: `${identity}:route-sequence:v1`, version: 1, kind: 'sequence',
      title: 'Reconstruct your route',
      instruction: 'Put these stops in the order you visited them. Use your route and inventory as evidence.',
      items: route.map(loc => loc.name)
    };
    return {
      id: `${identity}:route-match:v1`, version: 1, kind: 'match',
      title: 'Return the evidence tokens',
      instruction: 'Match each stop with the token you collected there. Your case inventory remains available.',
      items: route.map(loc => ({prompt: loc.name, answer: loc.token.name}))
    };
  }
  function resolveActivity(saved, pack) {
    return getActivity(pack, savedRouteLocations(saved, pack), saved.caseVariantIds, saved.phase,
      saved.currentLocationIndex, saved.finalConfrontationRound, saved.schemaVersion === 5 ? 'classic' : saved.quizStyle,
      saved.schemaVersion < 7 ? 1 : saved.activityCatalogVersion, saved.schemaVersion >= 8 ? saved.episodeId : null);
  }
  function activitySolution(activity) {
    return activity.answer ? [...activity.answer] : activity.items.map((_, index) => index);
  }
  function activityComplete(activity, selections) {
    return activity.kind === 'filter' ? selections.length > 0 : selections.length === activitySolution(activity).length;
  }
  function activityCorrect(activity, selections) {
    const solution = activitySolution(activity);
    const actual = activity.kind === 'filter' ? [...selections].sort((a,b) => a-b) : selections;
    const expected = activity.kind === 'filter' ? [...solution].sort((a,b) => a-b) : solution;
    return actual.length === expected.length && actual.every((index, i) => index === expected[i]);
  }
  function activityAnswer(activity) {
    if (activity.kind === 'match') return activity.items.map(item => `${item.prompt}: ${item.answer}`).join('; ');
    return activitySolution(activity).map(index => activity.items[index]).join(activity.kind === 'filter' ? '; ' : ' → ');
  }
  function validActivityProgress(progress, activity, solved, difficulty, assisted = false) {
    if (!activity || !text(activity.id) || activity.version !== 1 || !['sequence','match','filter','assemble'].includes(activity.kind)
      || !Array.isArray(activity.items) || !integer(activity.items.length, 2, 4)) return false;
    const subset = ['filter','assemble'].includes(activity.kind);
    if (subset && (!Array.isArray(activity.answer) || !integer(activity.answer.length, 1, activity.items.length - 1)
      || new Set(activity.answer).size !== activity.answer.length || !activity.answer.every(i => integer(i, 0, activity.items.length - 1)))) return false;
    if (!subset && activity.answer !== undefined) return false;
    if (activity.kind === 'match' ? !activity.items.every(item => item && text(item.prompt) && text(item.answer))
      : !activity.items.every(text)) return false;
    if (!progress || typeof progress !== 'object' || Array.isArray(progress) || progress.activityId !== activity.id
      || Object.keys(progress).some(key => !['activityId','selections','rejected'].includes(key))) return false;
    const maxSelections = activity.kind === 'assemble' ? activity.answer.length : activity.items.length;
    const indices = value => Array.isArray(value) && value.length <= maxSelections
      && new Set(value).size === value.length && value.every(i => integer(i, 0, activity.items.length - 1));
    if (!indices(progress.selections) || (solved && !activityCorrect(activity, progress.selections))) return false;
    // Four cards permit at most 24 ordered permutations. Assisted retries are
    // bounded by the answer space rather than by the original life budget.
    if (!Array.isArray(progress.rejected) || progress.rejected.length > (assisted ? 24 : getStartingLives(difficulty))
      || !progress.rejected.every(attempt => indices(attempt) && activityComplete(activity, attempt) && !activityCorrect(activity, attempt))) return false;
    return new Set(progress.rejected.map(attempt => (activity.kind === 'filter' ? [...attempt].sort((a,b) => a-b) : attempt).join(','))).size === progress.rejected.length;
  }
  function validateSave(saved, pack) {
    if (!saved || ![5,6,7,SAVE_VERSION].includes(saved.schemaVersion) || saved.quizPackId !== pack.id || saved.contentVersion !== pack.contentVersion) return false;
    // Historical schema-5 saves have no modality fields and always resume Classic.
    // A new shape cannot be smuggled into the old contract by changing its version.
    const legacy = saved.schemaVersion === 5;
    const current = saved.schemaVersion >= 8;
    const designFields = ['assisted','supportEnabled','challenge','episodeId','evidenceMarks','scoringHintsUsedInRound'];
    if (!current && designFields.some(key => Object.hasOwn(saved, key))) return false;
    if (current && (typeof saved.assisted !== 'boolean' || typeof saved.supportEnabled !== 'boolean'
      || (saved.supportEnabled && !saved.assisted) || !['standard','advanced'].includes(saved.challenge)
      || !(saved.episodeId === null || text(saved.episodeId))
      || !Array.isArray(saved.evidenceMarks) || new Set(saved.evidenceMarks).size !== saved.evidenceMarks.length
      || !saved.evidenceMarks.every(index => integer(index, 0, 2))
      || !integer(saved.scoringHintsUsedInRound, 0, saved.hintsUsedInRound)
      || (!saved.supportEnabled && saved.scoringHintsUsedInRound !== saved.hintsUsedInRound))) return false;
    if (legacy ? Object.hasOwn(saved, 'quizStyle') || Object.hasOwn(saved, 'activityProgress')
      : !['classic','mixed'].includes(saved.quizStyle) || !Object.hasOwn(saved, 'activityProgress')) return false;
    if (!difficulties.includes(saved.difficulty) || !stopCounts(pack.locations.length).includes(saved.stopCount) || !phases.includes(saved.phase)) return false;
    // Older contracts always meant a prefix. Do not reinterpret an old save's
    // case identities as a different route, or accept a new offset under v5/6.
    if (saved.schemaVersion < 7 ? Object.hasOwn(saved, 'routeStart') || Object.hasOwn(saved, 'activityCatalogVersion')
      : !integer(saved.routeStart, 0, pack.locations.length - saved.stopCount) || !(current ? [1,2,3] : [1,2]).includes(saved.activityCatalogVersion)) return false;
    let locations, episode;
    try {
      locations = savedRouteLocations(saved, pack);
      if (current && saved.episodeId) {
        episode = caseDesign().getEpisode(pack, saved.episodeId);
        if (saved.activityCatalogVersion !== 3 || !episode) return false;
      }
    } catch { return false; }
    if (!integer(saved.currentLocationIndex, 0, locations.length - 1) || !text(saved.caseSeed) || saved.caseSeed.length > 200) return false;
    if (!Array.isArray(saved.caseVariantIds) || saved.caseVariantIds.length !== locations.length || !saved.caseVariantIds.every((id,i) => pack.questions[locations[i].id].some(c => c.caseId === id))) return false;
    if (episode && !saved.caseVariantIds.every((id, index) => id === episode.caseVariantIds[index])) return false;
    if (!integer(saved.score,0,1000000) || !integer(saved.lives,0,getStartingLives(saved.difficulty)) || !integer(saved.streak,0,locations.length)) return false;
    const assisted = current && saved.assisted;
    const scoringHints = current ? saved.scoringHintsUsedInRound : saved.hintsUsedInRound;
    const hintLimit = current && saved.supportEnabled ? 3 : saved.difficulty === 'rookie' ? 3 : saved.difficulty === 'detective' ? 2 : 0;
    if (!integer(saved.puzzleAttempts,0,assisted ? 24 : 6) || !integer(saved.hintsUsedInRound,0,hintLimit)
      || !integer(saved.totalHintsUsed,saved.hintsUsedInRound,(locations.length + (current ? 3 : 0))*3)) return false;
    if (typeof saved.puzzleSolved !== 'boolean' || typeof saved.warrantIssued !== 'boolean' || typeof saved.isFinalConfrontation !== 'boolean') return false;
    if (saved.isFinalConfrontation !== (saved.phase === 'final') || (saved.warrantIssued !== (saved.phase === 'between'))) return false;
    if (saved.phase === 'between' && !saved.puzzleSolved) return false;
    if (saved.phase === 'final' && saved.currentLocationIndex !== locations.length - 1) return false;
    if (!integer(saved.finalConfrontationRound,1,pack.finalConfrontation.rounds.length)) return false;
    const n = saved.phase === 'final' ? locations.length : saved.currentLocationIndex + (saved.phase === 'between' ? 1 : 0);
    if (!uniqueStrings(saved.clueTokens) || saved.clueTokens.length !== n || !saved.clueTokens.every((id,i) => id === locations[i].id)) return false;
    if (!Array.isArray(saved.history) || saved.history.length !== n || !saved.history.every((e,i) => e && e.location === locations[i].name && e.caseId === saved.caseVariantIds[i] && e.success === true && integer(e.attempts,1,assisted ? 25 : 7) && integer(e.points,0,10000))) return false;
    const r = saved.roundScore;
    if (!r || !['puzzle','warrant','streak','total'].every(k => integer(r[k],0,10000)) || r.total !== r.puzzle+r.warrant+r.streak || r.total > saved.score) return false;
    if (saved.phase !== 'final' && (r.puzzle !== (saved.puzzleSolved ? getPuzzleScore(saved.puzzleAttempts,scoringHints) : 0) || r.warrant !== (saved.warrantIssued ? SCORE_RULES.warrant : 0))) return false;
    if (saved.score !== saved.history.reduce((sum,e)=>sum+e.points,0) + (saved.phase === 'investigation' ? r.total : 0)) return false;
    if (!saved.warrantSelection || typeof saved.warrantSelection !== 'object' || Array.isArray(saved.warrantSelection) || Object.entries(saved.warrantSelection).some(([k,v])=>!['city','hideout','disguise'].includes(k) || typeof v !== 'string')) return false;
    if (!Array.isArray(saved.optionOrder) || saved.optionOrder.length !== 4 || new Set(saved.optionOrder).size !== 4 || !saved.optionOrder.every(i => integer(i,0,3))) return false;
    if (!Array.isArray(saved.wrongOptions) || new Set(saved.wrongOptions).size !== saved.wrongOptions.length || !saved.wrongOptions.every(i => integer(i,0,3))) return false;
    let activity;
    try { activity = resolveActivity(saved, pack); } catch { return false; }
    if (activity) {
      if (!validActivityProgress(saved.activityProgress, activity, saved.puzzleSolved, saved.difficulty, assisted) || saved.wrongOptions.length) return false;
      if (saved.phase !== 'final' && saved.puzzleAttempts !== saved.activityProgress.rejected.length) return false;
    } else {
      if (!legacy && saved.activityProgress !== null) return false;
      let p;
      try {
        const catalogVersion = saved.schemaVersion < 7 ? 1 : saved.activityCatalogVersion;
        p = saved.phase === 'final' ? finalRounds(pack, locations, saved.caseVariantIds, catalogVersion, current ? saved.episodeId : null)[saved.finalConfrontationRound-1]
          : resolveCase(pack, pack.questions[locations[saved.currentLocationIndex].id].find(c => c.caseId === saved.caseVariantIds[saved.currentLocationIndex]), catalogVersion).puzzle;
      } catch { return false; }
      if (saved.wrongOptions.length > 3 || (saved.phase !== 'final' && saved.puzzleAttempts !== saved.wrongOptions.length)) return false;
      if (saved.wrongOptions.includes(saved.optionOrder.indexOf(p.correctIndex))) return false;
    }
    if (!['dossier','clues','puzzle','warrant'].includes(saved.activeTab)) return false;
    if (saved.phase === 'final' && saved.activeTab !== 'puzzle') return false;
    if (saved.activeTab === 'warrant' && !saved.puzzleSolved) return false;
    return true;
  }
  function createStorage(getBackend, onUnavailable = () => {}) {
    const memory = new Map(); let unavailable = false;
    function backend() {
      if (unavailable) return null;
      try { return getBackend(); } catch { unavailable = true; onUnavailable(); return null; }
    }
    return {
      getItem(key) {
        if (unavailable) return memory.get(key) ?? null;
        try { const b=backend(); if (!b) return memory.get(key) ?? null; const value=b.getItem(key); memory.set(key,value); return value; } catch { unavailable=true; onUnavailable(); return memory.get(key) ?? null; }
      },
      setItem(key,value) {
        memory.set(key,String(value));
        try { const b=backend(); if(b) b.setItem(key,String(value)); } catch { unavailable=true; onUnavailable(); }
      },
      removeItem(key) {
        memory.set(key,null);
        try { backend()?.removeItem(key); } catch { unavailable=true; onUnavailable(); }
      }
    };
  }
  function createScheduler(set = setTimeout, clear = clearTimeout) {
    let generation = 0; const pending = new Set();
    return {
      schedule(callback,delay) {
        const current = generation;
        const id = set(() => { pending.delete(id); if (generation === current) callback(); },delay);
        pending.add(id); return id;
      },
      cancel() { generation++; pending.forEach(clear); pending.clear(); }
    };
  }
  const api = {SAVE_VERSION,SCORE_RULES,getPuzzleScore,getStreakBonus,getStartingLives,getCompletionRank,stopCounts,routeLocations,savedRouteLocations,escapeHtml,validateManifest,hasReviewEvidence,finalRounds,getActivity,resolveActivity,activitySolution,activityComplete,activityCorrect,activityAnswer,validatePack,validateSave,createStorage,createScheduler};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.CarmenCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : window);
