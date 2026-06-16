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

  function createRunCaseVariantIds(locations, getCasePool, seed) {
    const random = createSeededRandom(seed);
    return locations.map((location) => {
      const pool = getCasePool(location);
      return pool[Math.floor(random() * pool.length)].caseId;
    });
  }

  function arraysMatch(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((item, index) => item === b[index]);
  }

  const api = {
    hashSeed,
    createSeededRandom,
    createRunCaseVariantIds,
    arraysMatch
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }

  root.CarmenRunGenerator = api;
})(typeof globalThis !== 'undefined' ? globalThis : window);
