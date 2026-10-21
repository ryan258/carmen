// Study/backup access to the existing save owner. Imported files never supply
// pack content or settings; the active, validated pack remains authoritative.
const CarmenStudySession = Object.freeze({
  snapshot() {
    const raw = storage.getItem(SAVE_KEY);
    let saved = null;
    try { saved = JSON.parse(raw); } catch { /* Preserve raw ownership even for a broken save. */ }
    return {raw, saved};
  },
  validate(saved) {
    if (packLoading) return {ok: false, error: 'Wait for the selected pack to finish loading.'};
    if (!CarmenCore.validateSave(saved, QUIZ_PACK)) return {ok: false, error: 'Select the matching pack and content version. This saved case is incompatible or invalid.'};
    return {ok: true};
  },
  replace(saved, expectedRaw) {
    if (activeModal !== 'studyModal' || state.phase !== 'idle') return {ok: false, error: 'Pause the case and open Study before restoring.'};
    const verdict = this.validate(saved);
    if (!verdict.ok) return verdict;
    if (storage.getItem(SAVE_KEY) !== expectedRaw) return {ok: false, error: 'Progress changed after the preview. Choose the backup again before replacing it.'};
    // Whitelist persisted game fields, retaining the historical schema contract.
    const clean = {schemaVersion: saved.schemaVersion, quizPackId: saved.quizPackId, contentVersion: saved.contentVersion};
    SAVE_FIELDS.forEach(key => { if (Object.hasOwn(saved, key)) clean[key] = saved[key]; });
    const raw = JSON.stringify(clean);
    storage.setItem(SAVE_KEY, raw);
    sessionSaveSnapshot = raw;
    checkResumeState();
    return {ok: true};
  }
});
