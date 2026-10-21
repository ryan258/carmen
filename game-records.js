// Browser records adapter. Uses the shared game state and storage facade.
function saveHighScore(finalScore, rank) {
  const highScores = readScoreRecords();
  const quizStyle = state.quizStyle === 'mixed' ? 'mixed' : 'classic';
  const activityCatalogVersion = state.activityCatalogVersion >= 3 ? 3 : quizStyle === 'mixed' ? state.activityCatalogVersion : 1;
  const designVersion = activityCatalogVersion >= 3 ? 2 : 1;
  const assisted = state.assisted === true;
  const challenge = state.challenge === 'advanced' ? 'advanced' : 'standard';
  const episodeId = state.episodeId || null;
  const routeStart = state.routeStart || 0;
  const sameBoard = e => e.quizPackId === QUIZ_PACK.id && e.contentVersion === QUIZ_PACK.contentVersion && e.difficulty === state.difficulty && e.stopCount === state.stopCount && e.routeStart === routeStart && e.quizStyle === quizStyle && e.activityCatalogVersion === activityCatalogVersion
    && e.designVersion === designVersion && e.assisted === assisted && e.challenge === challenge && e.episodeId === episodeId;
  const previousBest = highScores.filter(sameBoard).reduce((best,e)=>Math.max(best,e.score),0);
  if (!highScores.some(e=>sameBoard(e) && e.caseSeed === state.caseSeed)) {
    const entry={quizPackId:QUIZ_PACK.id,contentVersion:QUIZ_PACK.contentVersion,score:finalScore,rank,difficulty:state.difficulty,stopCount:state.stopCount,routeStart,quizStyle,activityCatalogVersion,designVersion,assisted,challenge,episodeId,caseSeed:state.caseSeed,date:new Date().toISOString()};
    const board=[...highScores.filter(sameBoard),entry].sort((a,b)=>b.score-a.score).slice(0,10);
    storage.setItem('carmen_highScores',JSON.stringify([...highScores.filter(e=>!sameBoard(e)),...board]));
  }
  return {previousBest,isHighScore:finalScore>previousBest};
}

function getHighScores() {
  return readScoreRecords().filter(e=>e.quizPackId===QUIZ_PACK.id && e.contentVersion===QUIZ_PACK.contentVersion).sort((a,b)=>b.score-a.score);
}

function getAllStats() {
  try {
    const parsed = JSON.parse(storage.getItem('carmen_stats')) || {};
    // Legacy flat stats (no byPack) were the old Argentina game's aggregate; ignore
    // them rather than mislabel them as the active pack. The next write overwrites them.
    return parsed?.byPack && typeof parsed.byPack === 'object' && !Array.isArray(parsed.byPack) ? parsed : { byPack: {} };
  } catch(e) {
    return { byPack: {} };
  }
}

function getStats() {
  const stats = getAllStats().byPack[QUIZ_PACK.id] || {};
  return {
    gamesPlayed: cleanStat(stats.gamesPlayed),
    totalArrests: cleanStat(stats.totalArrests),
    totalEscapes: cleanStat(stats.totalEscapes),
    perfectGames: cleanStat(stats.perfectGames)
  };
}

function showRecordsModal() {
  sound.click();
  const records = getHighScores();
  const stats = getStats();
  const profiles = [...new Map(records.map(entry => {
    const {quizStyle,activityCatalogVersion,designVersion,assisted,challenge,episodeId} = entry;
    const profile = {quizStyle,activityCatalogVersion,designVersion,assisted,challenge,episodeId};
    return [JSON.stringify(profile), profile];
  })).values()];
  const grouped = profiles.map(profile => {
    const {quizStyle,activityCatalogVersion,designVersion,assisted,challenge,episodeId} = profile;
    const format = quizStyle === 'mixed' ? 'Mixed quizzes' : 'Classic choices';
    const versionLabel = designVersion >= 2 ? 'current cases' : activityCatalogVersion === 1 ? 'original catalog' : 'previous catalog';
    const episode = episodeId && typeof CarmenCaseDesign !== 'undefined' ? CarmenCaseDesign.getEpisode(QUIZ_PACK, episodeId) : null;
    const label = `${format} — ${versionLabel} · ${assisted ? 'with assistance' : 'standard life allowance'} · ${challenge === 'advanced' ? 'deeper reasoning' : 'varied reasoning'}${episodeId ? ` · ${episode?.title || episodeId}` : ''}`;
    const rows = CarmenCore.stopCounts(QUIZ_PACK.locations.length).flatMap(count =>
      Array.from({length: QUIZ_PACK.locations.length - count + 1}, (_, routeStart) => {
        const routeRecords = records.filter(e => e.stopCount === count && e.routeStart === routeStart && e.quizStyle === quizStyle && e.activityCatalogVersion === activityCatalogVersion
          && e.designVersion === designVersion && e.assisted === assisted && e.challenge === challenge && e.episodeId === episodeId);
        if (!routeRecords.length) return '';
        const label = `${QUIZ_PACK.locations[routeStart].name} → ${QUIZ_PACK.locations[routeStart + count - 1].name}`;
        return `<div class="record-route"><p class="font-bold mt-3">${count} stops · ${escapeHtml(label)}</p>${['rookie','detective','inspector'].map(difficulty => {
          const best = routeRecords.find(e => e.difficulty === difficulty);
          return `<div class="record-row"><span>${difficulty}</span><span>${best ? `${best.score} — ${escapeHtml(best.rank)}` : 'No score yet'}</span></div>`;
        }).join('')}</div>`;
      })).join('') || '<p>No scores yet.</p>';
    return `<section><h3 class="font-bold mt-4 mb-2">${escapeHtml(label)}</h3>${rows}</section>`;
  }).join('') || '<p>No completed case records yet. Short and long routes can earn the same commendation.</p>';
  document.getElementById('recordsContent').innerHTML = `
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
      <div class="bg-white/50 p-3 border border-black/10"><strong class="block text-lg">${stats.gamesPlayed}</strong><span class="text-xs uppercase">Games</span></div>
      <div class="bg-white/50 p-3 border border-black/10"><strong class="block text-lg">${stats.totalArrests}</strong><span class="text-xs uppercase">Arrests</span></div>
      <div class="bg-white/50 p-3 border border-black/10"><strong class="block text-lg">${stats.totalEscapes}</strong><span class="text-xs uppercase">Escapes</span></div>
      <div class="bg-white/50 p-3 border border-black/10"><strong class="block text-lg">${stats.perfectGames}</strong><span class="text-xs uppercase">Perfect</span></div>
    </div>
    <div class="space-y-2">${grouped}</div>
  `;
  openModal('recordsModal');
}

function hideRecordsModal() {
  sound.click();
  closeModal('recordsModal');
}

function updateStats(outcome) {
  const allStats = getAllStats();
  const stats = getStats();
  const completed = Array.isArray(allStats.completedRuns) ? allStats.completedRuns.filter(id=>typeof id==='string') : [];
  const runId = `${QUIZ_PACK.id}:${state.caseSeed}`;
  if (completed.includes(runId)) return;
  allStats.completedRuns = [...completed,runId].slice(-1000);
  stats.gamesPlayed++;
  if (outcome === 'arrest') stats.totalArrests++;
  if (outcome === 'escape') stats.totalEscapes++;
  if (outcome === 'perfect') {
    stats.totalArrests++;
    stats.perfectGames++;
  }
  
  allStats.byPack[QUIZ_PACK.id] = stats;
  storage.setItem('carmen_stats', JSON.stringify(allStats));
}

function readScoreRecords() {
  try {
    const parsed=JSON.parse(storage.getItem('carmen_highScores'));
    return Array.isArray(parsed) ? parsed.filter(e=>e && typeof e.quizPackId==='string' && typeof e.caseSeed==='string' && Number.isSafeInteger(e.score) && e.score>=0 && e.score<=1000000 && ['rookie','detective','inspector'].includes(e.difficulty) && Number.isSafeInteger(e.stopCount) && e.stopCount>=3 && e.stopCount<=100 && Number.isSafeInteger(e.contentVersion) && e.contentVersion>0 && typeof e.date==='string' && Number.isFinite(Date.parse(e.date)) && typeof e.rank==='string' && (e.quizStyle === undefined || ['classic','mixed'].includes(e.quizStyle)) && (e.activityCatalogVersion === undefined || [1,2,3].includes(e.activityCatalogVersion)) && (e.routeStart === undefined || Number.isSafeInteger(e.routeStart) && e.routeStart >= 0 && e.routeStart + e.stopCount <= 100)
      && (e.designVersion === undefined || [1,2].includes(e.designVersion))
      && (e.assisted === undefined || typeof e.assisted === 'boolean')
      && (e.challenge === undefined || ['standard','advanced'].includes(e.challenge))
      && (e.episodeId === undefined || e.episodeId === null || typeof e.episodeId === 'string' && e.episodeId.length > 0 && e.episodeId.length <= 200)
      && (e.activityCatalogVersion === 3 ? e.designVersion === 2 && typeof e.assisted === 'boolean' && ['standard','advanced'].includes(e.challenge) && Object.hasOwn(e,'episodeId') : e.designVersion !== 2))
      .map(e=>({...e,quizStyle:e.quizStyle || 'classic',routeStart:e.routeStart ?? 0,
        activityCatalogVersion:e.activityCatalogVersion === 3 ? 3 : e.quizStyle === 'mixed' ? e.activityCatalogVersion ?? 1 : 1,
        designVersion:e.designVersion ?? 1,assisted:e.assisted ?? false,challenge:e.challenge ?? 'standard',episodeId:e.episodeId ?? null})) : [];
  } catch {return [];}
}

function cleanStat(value) { return Number.isSafeInteger(value) && value>=0 ? value : 0; }
