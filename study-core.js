/* Bounded local notebook contracts. No questions, HTML, or executable content
 * are imported; entries identify repository-owned cases by exact version. */
(function exposeStudy(root) {
  'use strict';
  const NOTEBOOK_KEY = 'carmen_notebook_v1';
  const MAX_ENTRIES = 1000, MAX_NOTE = 2000, MAX_BACKUP_BYTES = 10000000;
  const plain = value => value && typeof value === 'object' && !Array.isArray(value);
  const keys = (value, allowed) => plain(value) && Object.keys(value).every(key => allowed.includes(key));
  const identifier = value => typeof value === 'string' && /^[a-zA-Z0-9][a-zA-Z0-9_.:-]{0,159}$/.test(value);
  const timestamp = value => Number.isSafeInteger(value) && value >= 0 && value <= 8640000000000000;
  function emptyNotebook() { return {schemaVersion: 1, entries: []}; }
  function entryKey(entry) { return JSON.stringify([entry.packId,entry.contentVersion,entry.caseId]); }
  function caseRef(pack, item) { return {packId: pack.id, contentVersion: pack.contentVersion, caseId: item.caseId}; }
  function validateNotebook(value) {
    if (!keys(value, ['schemaVersion','entries']) || value.schemaVersion !== 1 || !Array.isArray(value.entries)
      || value.entries.length > MAX_ENTRIES) return false;
    const seen = new Set();
    for (const entry of value.entries) {
      if (!keys(entry, ['packId','contentVersion','caseId','starred','note','updatedAt','reviewedAt','dueAt','intervalDays'])
        || !identifier(entry.packId) || !identifier(entry.caseId) || !Number.isSafeInteger(entry.contentVersion) || entry.contentVersion < 1
        || typeof entry.starred !== 'boolean' || typeof entry.note !== 'string' || entry.note.length > MAX_NOTE
        || !timestamp(entry.updatedAt) || !Number.isSafeInteger(entry.intervalDays) || entry.intervalDays < 0 || entry.intervalDays > 30
        || !(entry.reviewedAt === null || timestamp(entry.reviewedAt)) || !(entry.dueAt === null || timestamp(entry.dueAt))) return false;
      if ((entry.reviewedAt === null) !== (entry.dueAt === null) || (entry.reviewedAt === null && entry.intervalDays !== 0)
        || (entry.reviewedAt !== null && (entry.reviewedAt > entry.updatedAt || entry.dueAt !== entry.reviewedAt + entry.intervalDays * 86400000))) return false;
      const key = entryKey(entry); if (seen.has(key)) return false; seen.add(key);
    }
    return true;
  }
  function updateEntry(notebook, ref, patch, now = Date.now()) {
    if (!validateNotebook(notebook) || !timestamp(now) || !keys(patch, ['starred','note','rating'])) throw new Error('Invalid notebook change.');
    const entries = notebook.entries.map(entry => ({...entry}));
    const index = entries.findIndex(entry => entryKey(entry) === entryKey(ref));
    const entry = index < 0 ? {...ref, starred: false, note: '', updatedAt: now, reviewedAt: null, dueAt: null, intervalDays: 0} : entries[index];
    // Tolerate a device clock moving backwards without invalidating prior reviews.
    entry.updatedAt = Math.max(now, entry.updatedAt, entry.reviewedAt || 0);
    if (Object.hasOwn(patch, 'starred')) entry.starred = patch.starred;
    if (Object.hasOwn(patch, 'note')) entry.note = patch.note;
    if (Object.hasOwn(patch, 'rating')) {
      if (!['again','got-it'].includes(patch.rating)) throw new Error('Choose Again or Got it.');
      entry.intervalDays = patch.rating === 'again' ? 0 : entry.intervalDays === 0 ? 1 : Math.min(30, entry.intervalDays * 2);
      entry.reviewedAt = entry.updatedAt; entry.dueAt = entry.reviewedAt + entry.intervalDays * 86400000;
    }
    if (index < 0) entries.push(entry);
    const next = {schemaVersion: 1, entries};
    if (!validateNotebook(next)) throw new Error('Notebook limit reached or invalid entry. Export a backup before replacing it.');
    return next;
  }
  function dueEntries(notebook, now = Date.now()) {
    return notebook.entries.filter(entry => entry.dueAt !== null && entry.dueAt <= now).sort((a,b) => a.dueAt - b.dueAt);
  }
  function parseBackup(text) {
    if (typeof text !== 'string' || text.length > MAX_BACKUP_BYTES) throw new Error('Choose a Carmen backup smaller than 10 MB.');
    let value; try { value = JSON.parse(text); } catch { throw new Error('This file is not readable JSON.'); }
    if (!keys(value, ['format','version','notebook','savedCase']) || value.format !== 'carmen-backup' || value.version !== 1
      || !validateNotebook(value.notebook) || !(value.savedCase === null || plain(value.savedCase))) throw new Error('This file does not match the Carmen backup format.');
    return value;
  }
  function describeResume(saved, pack) {
    if (!saved || !pack || saved.quizPackId !== pack.id) return '';
    const location = pack.locations[(saved.schemaVersion >= 7 ? saved.routeStart || 0 : 0) + saved.currentLocationIndex];
    const format = saved.schemaVersion === 5 ? 'Classic' : saved.quizStyle === 'mixed' ? 'Mixed' : 'Classic';
    const position = saved.phase === 'final' ? `final report ${saved.finalConfrontationRound} of 3`
      : `${location?.name || 'Saved stop'}, stop ${saved.currentLocationIndex + 1} of ${saved.stopCount}`;
    const next = saved.phase === 'between' ? saved.currentLocationIndex === saved.stopCount - 1 ? 'Continue to the final report.' : 'Continue to the next stop.' : saved.puzzleSolved ? 'Your puzzle is solved; continue when ready.'
      : saved.activityProgress?.selections?.length ? `${saved.activityProgress.selections.length} activity cards already placed.` : `Continue from the ${saved.activeTab === 'puzzle' ? 'puzzle' : 'case file'}.`;
    return `${pack.title}: ${position}. ${format}, ${saved.difficulty}; ${saved.lives} lives, ${saved.score} points. ${next}`;
  }
  const api = {NOTEBOOK_KEY,MAX_ENTRIES,MAX_NOTE,MAX_BACKUP_BYTES,emptyNotebook,entryKey,caseRef,validateNotebook,updateEntry,dueEntries,parseBackup,describeResume};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.CarmenStudy = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
