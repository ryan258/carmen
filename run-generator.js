(function exposeRunGenerator(root) {
  function hashSeed(seed) {
    let hash = 2166136261;
    String(seed).split('').forEach((char) => {
      hash ^= char.charCodeAt(0);
      hash = Math.imul(hash, 16777619);
    });
    return hash >>> 0;
  }

  function createSeededRandom(seed) {
    let value = hashSeed(seed);
    return () => {
      value += 0x6D2B79F5;
      let mixed = value;
      mixed = Math.imul(mixed ^ (mixed >>> 15), mixed | 1);
      mixed ^= mixed + Math.imul(mixed ^ (mixed >>> 7), mixed | 61);
      return ((mixed ^ (mixed >>> 14)) >>> 0) / 4294967296;
    };
  }

  // History is oldest to newest. Never let format preferences bring back a
  // recently visited case while a fresher case exists at the same stop.
  function freshCasePool(pool, recentCaseIds = []) {
    const age = new Map(recentCaseIds.map((id, index) => [id, index]));
    const freshest = Math.min(...pool.map(item => age.get(item.caseId) ?? -1));
    return pool.filter(item => (age.get(item.caseId) ?? -1) === freshest);
  }

  // Reasoning preference is independent of the life/hint allowance. Apply only
  // while generating a new run; saved identities always resolve the full bank.
  function challengeCasePool(pool, challenge = 'standard') {
    if (challenge !== 'advanced' || !pool.length) return pool;
    const inspector = pool.filter(item => item.difficulty === 'inspector');
    if (inspector.length) return inspector;
    const detective = pool.filter(item => item.difficulty === 'detective');
    return detective.length ? detective : pool;
  }

  function createRunCaseVariantIds(locations, getCasePool, seed, recentCaseIds = [], getKind = () => 'choice') {
    const random = createSeededRandom(seed);
    const counts = new Map();
    let previousKind;
    return locations.map((location) => {
      const fresh = freshCasePool(getCasePool(location), recentCaseIds);
      const kinds = [...new Set(fresh.map(getKind))];
      const least = Math.min(...kinds.map(kind => counts.get(kind) || 0));
      let preferred = kinds.filter(kind => (counts.get(kind) || 0) === least);
      if (preferred.length > 1) preferred = preferred.filter(kind => kind !== previousKind);
      const kind = preferred[Math.floor(random() * preferred.length)];
      const pool = fresh.filter(item => getKind(item) === kind);
      counts.set(kind, (counts.get(kind) || 0) + 1);
      previousKind = kind;
      return pool[Math.floor(random() * pool.length)].caseId;
    });
  }

  function chooseRouteStart(total, stopCount, seed) {
    if (!computeStopCountOptions(total).includes(stopCount)) throw new Error('Invalid run length.');
    return Math.floor(createSeededRandom(`${seed}:route`)() * (total - stopCount + 1));
  }

  function recentCaseIds(value, pack, limit = 100) {
    if (!Array.isArray(value)) return [];
    const known = new Set(Object.values(pack.questions).flat().map(item => item.caseId));
    const seen = new Set();
    return value.slice(-limit).filter(id => typeof id === 'string' && known.has(id)).reverse()
      .filter(id => !seen.has(id) && seen.add(id)).reverse();
  }

  function rememberCase(value, pack, caseId) {
    const history = recentCaseIds(value, pack);
    if (!Object.values(pack.questions).some(pool => pool.some(item => item.caseId === caseId))) return history;
    return [...history.filter(id => id !== caseId), caseId].slice(-100);
  }

  function arraysMatch(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((item, index) => item === b[index]);
  }

  // Contiguous windows preserve authored nextLead adjacency; no wraparound.
  function computeStopCountOptions(total) {
    const core = typeof module !== 'undefined' && module.exports ? require('./game-core.js') : root.CarmenCore;
    return core.stopCounts(total);
  }

  const api = {
    hashSeed,
    createSeededRandom,
    createRunCaseVariantIds,
    freshCasePool,
    challengeCasePool,
    chooseRouteStart,
    recentCaseIds,
    rememberCase,
    arraysMatch,
    computeStopCountOptions
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }

  root.CarmenRunGenerator = api;
})(typeof globalThis !== 'undefined' ? globalThis : window);
