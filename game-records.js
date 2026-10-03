// Browser records adapter. Uses the shared game state and storage facade.
function saveHighScore(finalScore, rank) {
  const highScores = readScoreRecords();
  const sameBoard = e => e.quizPackId === QUIZ_PACK.id && e.contentVersion === QUIZ_PACK.contentVersion && e.difficulty === state.difficulty && e.stopCount === state.stopCount;
  const previousBest = highScores.filter(sameBoard).reduce((best,e)=>Math.max(best,e.score),0);
  if (!highScores.some(e=>sameBoard(e) && e.caseSeed === state.caseSeed)) {
    const entry={quizPackId:QUIZ_PACK.id,contentVersion:QUIZ_PACK.contentVersion,score:finalScore,rank,difficulty:state.difficulty,stopCount:state.stopCount,caseSeed:state.caseSeed,date:new Date().toISOString()};
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
  const grouped = CarmenCore.stopCounts(QUIZ_PACK.locations.length).flatMap(count => ['rookie','detective','inspector'].map(difficulty => {
    const best=records.find(e=>e.difficulty===difficulty && e.stopCount===count);
    return `<div class="record-row"><span>${count} stops · ${difficulty}</span><span>${best ? `${best.score} — ${escapeHtml(best.rank)}` : 'No score yet'}</span></div>`;
  })).join('');
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
    return Array.isArray(parsed) ? parsed.filter(e=>e && typeof e.quizPackId==='string' && typeof e.caseSeed==='string' && Number.isSafeInteger(e.score) && e.score>=0 && e.score<=1000000 && ['rookie','detective','inspector'].includes(e.difficulty) && Number.isSafeInteger(e.stopCount) && e.stopCount>=3 && e.stopCount<=100 && Number.isSafeInteger(e.contentVersion) && e.contentVersion>0 && typeof e.date==='string' && Number.isFinite(Date.parse(e.date)) && typeof e.rank==='string') : [];
  } catch {return [];}
}

function cleanStat(value) { return Number.isSafeInteger(value) && value>=0 ? value : 0; }
