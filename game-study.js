/* Study is a paused, unscored view of the selected trusted pack. Shared session
 * and save replacement remain owned by game.js through CarmenStudySession. */
let studyNotebook = null, studyNotebookSnapshot = null, studyNotebookReadable = true;
let studyImportPreview = null, studyImportGeneration = 0, studySpeech = null;
let studyReturnContext = null;
const studyNoteDrafts = new Map();

function studyStatus(message) { document.getElementById('studyStatus').textContent = message; }

function loadStudyNotebook() {
  studyNotebookSnapshot = storage.getItem(CarmenStudy.NOTEBOOK_KEY);
  try {
    studyNotebook = studyNotebookSnapshot === null ? CarmenStudy.emptyNotebook() : JSON.parse(studyNotebookSnapshot);
    if (!CarmenStudy.validateNotebook(studyNotebook)) throw new Error('Invalid notebook');
    studyNotebookReadable = true;
  } catch {
    studyNotebook = CarmenStudy.emptyNotebook(); studyNotebookReadable = false;
    studyStatus('The stored notebook is unreadable. It has been preserved. Restore a valid backup to replace it; case study still works.');
  }
}

function openStudy() {
  if (packLoading || activeModal) return;
  const saved=getValidSave();
  const wasPlaying=['investigation','between','final'].includes(state.phase);
  studyReturnContext=wasPlaying && saved ? {raw:storage.getItem(SAVE_KEY),packId:QUIZ_PACK.id,contentVersion:QUIZ_PACK.contentVersion} : null;
  const live=['investigation','between'].includes(state.phase) && LOCATIONS[state.currentLocationIndex];
  const targetLocation=live || (saved && saved.phase!=='final' ? CarmenCore.savedRouteLocations(saved,QUIZ_PACK)[saved.currentLocationIndex] : null);
  const targetCase=live ? state.caseVariantIds[state.currentLocationIndex] : targetLocation ? saved.caseVariantIds[saved.currentLocationIndex] : null;
  goToTitle(); // Cancel feedback callbacks and preserve the current saved case.
  studyStatus(studyReturnContext ? 'Study is unscored. Your investigation is paused. Choose Return to my case when ready.' : 'Study is unscored. Your saved investigation stays paused.');
  document.getElementById('studyReturnButton').hidden=!studyReturnContext;
  loadStudyNotebook();
  document.getElementById('studyPackTitle').textContent = QUIZ_PACK.title;
  document.getElementById('studyFilter').value = 'all';
  renderStudyLocations();
  if(targetLocation && targetCase) {
    document.getElementById('studyLocation').value=targetLocation.id; renderStudyCases();
    document.getElementById('studyCase').value=targetCase; renderStudyCase();
  }
  openModal('studyModal'); refreshStudyVoices();
}

function cleanupStudy() {
  stopStudySpeech(); studyImportGeneration++; studyImportPreview = null;
  document.getElementById('studyImportPreview').hidden = true;
  document.getElementById('studyImportFile').value = '';
}

function closeStudy() { cleanupStudy(); closeModal('studyModal'); }

function returnToCaseFromStudy() {
  if(activeModal!=='studyModal' || !studyReturnContext || packLoading) return;
  const context=studyReturnContext;
  if(QUIZ_PACK.id!==context.packId || QUIZ_PACK.contentVersion!==context.contentVersion || storage.getItem(SAVE_KEY)!==context.raw || !getValidSave()) {
    studyReturnContext=null;
    document.getElementById('studyReturnButton').hidden=true;
    studyStatus('The saved case changed while Study was open. Close Study and review the current case on the menu before continuing.');
    return;
  }
  studyReturnContext=null;
  closeStudy();
  resumeGame();
}

function studyPresentationCatalog(item) {
  const saved=getValidSave(), caseId=item?.caseId || document.getElementById('studyCase').value;
  return saved && saved.caseVariantIds.includes(caseId)
    ? saved.schemaVersion<7 ? 1 : saved.activityCatalogVersion : 3;
}

function studySelectedCase() {
  const location = QUIZ_PACK.locations.find(loc => loc.id === document.getElementById('studyLocation').value);
  const original = location && QUIZ_PACK.questions[location.id].find(value => value.caseId === document.getElementById('studyCase').value);
  if(!original) return null;
  const catalog=studyPresentationCatalog(original);
  const item=CarmenCaseDesign.resolveCase(QUIZ_PACK,original,catalog);
  return {location,item,catalog,ref: CarmenStudy.caseRef(QUIZ_PACK,original)};
}

function studyEntry(ref) { return studyNotebook?.entries.find(entry => CarmenStudy.entryKey(entry) === CarmenStudy.entryKey(ref)); }

function studyDisplayText(item, value) {
  return CarmenPractice.presentCaseText(QUIZ_PACK, item, value, studyPresentationCatalog(item));
}

function studyCaseVisible(item) {
  const filter = document.getElementById('studyFilter').value, entry = studyEntry(CarmenStudy.caseRef(QUIZ_PACK,item));
  return filter === 'starred' ? Boolean(entry?.starred) : filter === 'due' ? Boolean(entry && entry.dueAt !== null && entry.dueAt <= Date.now()) : true;
}

function studyOptions(select, options, previous) {
  select.innerHTML = '';
  options.forEach(({value,label}) => { const option=document.createElement('option'); option.value=value; option.textContent=label; select.appendChild(option); });
  select.value = options.some(option => option.value === previous) ? previous : options[0]?.value || '';
  select.disabled = !options.length;
}

function renderStudyLocations() {
  const select = document.getElementById('studyLocation');
  studyOptions(select, QUIZ_PACK.locations.filter(location => QUIZ_PACK.questions[location.id].some(studyCaseVisible))
    .map(location => ({value:location.id,label:location.name})), select.value);
  renderStudyCases();
}

function renderStudyCases() {
  const select=document.getElementById('studyCase'), location=document.getElementById('studyLocation').value;
  studyOptions(select, (QUIZ_PACK.questions[location] || []).filter(studyCaseVisible)
    .map(item => ({value:item.caseId,label:`${item.puzzle.title} — ${item.caseId}`})), select.value);
  renderStudyCase();
}

function renderStudyCase() {
  stopStudySpeech();
  const selected=studySelectedCase(), panel=document.getElementById('studyCaseContent');
  panel.hidden=!selected;
  document.getElementById('studyEmpty').hidden=Boolean(selected);
  if (!selected) return;
  const {item,ref,catalog}=selected, entry=studyEntry(ref), practice=typeof CarmenPractice === 'undefined' ? null : CarmenPractice.getCasePractice(QUIZ_PACK,item,catalog);
  document.getElementById('studyCaseTitle').textContent=item.puzzle.title;
  document.getElementById('studyEvidence').textContent=studyDisplayText(item, [item.briefing.report, ...item.clues, item.puzzle.description].join('\n\n'));
  document.getElementById('studyQuestion').textContent=studyDisplayText(item, item.puzzle.question);
  document.getElementById('studyAnswer').hidden=true;
  document.getElementById('studyAnswer').textContent=studyDisplayText(item, `${item.puzzle.options[item.puzzle.correctIndex]}\n\n${item.puzzle.explanation}`);
  document.getElementById('studyReveal').disabled=false;
  document.getElementById('studyChoiceFeedback').textContent='Choose an answer to practice, or reveal it. No score or lives are affected.';
  const choices=document.getElementById('studyChoices'); choices.innerHTML='';
  item.puzzle.options.forEach((label,index) => {
    const button=document.createElement('button'); button.textContent=`${'ABCD'[index]}: ${studyDisplayText(item, label)}`;
    button.onclick=()=>{ document.getElementById('studyChoiceFeedback').textContent=index===item.puzzle.correctIndex
      ? 'That matches the evidence. Reveal the explanation when ready.' : 'That answer does not match the evidence. Try again or reveal the explanation.'; };
    choices.appendChild(button);
  });
  document.getElementById('studyTransfer').hidden=!practice?.transfer;
  document.getElementById('studyTransferPrompt').textContent=practice?.transfer?.prompt || '';
  document.getElementById('studyTransferAnswer').textContent=practice?.transfer?.answer || '';
  document.getElementById('studyTransferAnswer').hidden=true;
  document.getElementById('studyTransferReveal').disabled=false;
  document.getElementById('studyNote').value=studyNoteDrafts.get(CarmenStudy.entryKey(ref))?.note ?? entry?.note ?? '';
  document.getElementById('studyStar').setAttribute('aria-pressed', String(Boolean(entry?.starred)));
  document.getElementById('studyStar').textContent=entry?.starred ? 'Saved to notebook' : 'Save this case';
  document.getElementById('studyReviewStatus').textContent=entry?.dueAt !== null && entry?.dueAt !== undefined
    ? `Next review: ${entry.dueAt <= Date.now() ? 'due now' : new Date(entry.dueAt).toLocaleDateString()}.` : 'Optional review: Again keeps this case due; Got it schedules it for tomorrow, then doubles up to 30 days.';
  ['studyAgain','studyGotIt'].forEach(id=>document.getElementById(id).disabled=true);
  document.getElementById('studyNote').disabled=!studyNotebookReadable;
  document.getElementById('studyStar').disabled=!studyNotebookReadable;
}

function revealStudyAnswer(transfer = false) {
  if (!studySelectedCase()) return;
  document.getElementById(transfer ? 'studyTransferAnswer' : 'studyAnswer').hidden=false;
  document.getElementById(transfer ? 'studyTransferReveal' : 'studyReveal').disabled=true;
  ['studyAgain','studyGotIt'].forEach(id=>document.getElementById(id).disabled=!studyNotebookReadable);
  studyStatus('Answer revealed. You may optionally choose Again or Got it to plan a later review.');
}

function persistStudyNotebook(next, expected=studyNotebookSnapshot) {
  if (storage.getItem(CarmenStudy.NOTEBOOK_KEY) !== expected) {
    studyStatus('The notebook changed in another tab. Your typed note is still visible. Export or copy it before choosing Reload notebook; no newer work was overwritten.'); return false;
  }
  const raw=JSON.stringify(next); storage.setItem(CarmenStudy.NOTEBOOK_KEY,raw);
  studyNotebook=next; studyNotebookSnapshot=raw; studyNotebookReadable=true;
  let durable=false; try { durable=window.localStorage.getItem(CarmenStudy.NOTEBOOK_KEY)===raw; } catch {}
  studyStatus(durable ? 'Notebook saved on this device.' : 'Notebook kept only for this page session. Browser storage is unavailable; export a backup before closing.');
  return true;
}

function changeStudyEntry(patch) {
  const selected=studySelectedCase(); if (!selected || !studyNotebookReadable) return false;
  try { return persistStudyNotebook(CarmenStudy.updateEntry(studyNotebook,selected.ref,patch)); }
  catch(error) { studyStatus(error.message); return false; }
}

function toggleStudyStar() {
  const selected=studySelectedCase(); if (!selected) return;
  if (changeStudyEntry({starred: !studyEntry(selected.ref)?.starred})) {
    const starred=studyEntry(selected.ref).starred;
    document.getElementById('studyStar').setAttribute('aria-pressed',String(starred));
    document.getElementById('studyStar').textContent=starred ? 'Saved to notebook' : 'Save this case';
  }
}

function saveStudyNote() {
  const selected=studySelectedCase(); if(!selected) return;
  const note=document.getElementById('studyNote').value, key=CarmenStudy.entryKey(selected.ref);
  studyNoteDrafts.set(key,{ref:selected.ref,note});
  if(changeStudyEntry({note})) studyNoteDrafts.delete(key);
}

function rateStudyCase(rating) {
  if (!['again','got-it'].includes(rating) || document.getElementById('studyAgain').disabled) return;
  if (changeStudyEntry({rating})) {
    const entry=studyEntry(studySelectedCase().ref);
    document.getElementById('studyReviewStatus').textContent=(rating==='again' ? 'Kept due for another review.' : `Review scheduled in ${entry.intervalDays} day${entry.intervalDays===1?'':'s'}.`)+' '+recordCareerStudy(rating,entry);
    ['studyAgain','studyGotIt'].forEach(id=>document.getElementById(id).disabled=true);
  }
}

function reloadStudyNotebook() { loadStudyNotebook(); renderStudyLocations(); if(studyNotebookReadable) studyStatus('Loaded the latest notebook.'); }

function exportStudyBackup() {
  if (!studyNotebookReadable) { studyStatus('The notebook is unreadable; it has not been exported or replaced.'); return; }
  let notebook;
  try {
    const latest=storage.getItem(CarmenStudy.NOTEBOOK_KEY);
    notebook=latest===null ? CarmenStudy.emptyNotebook() : JSON.parse(latest);
    if(!CarmenStudy.validateNotebook(notebook)) throw new Error('The latest notebook is unreadable. Your note draft remains available; no backup or replacement was made.');
    for(const draft of studyNoteDrafts.values()) notebook=CarmenStudy.updateEntry(notebook,draft.ref,{note:draft.note});
  }
  catch(error) { studyStatus(error.message); return; }
  const snapshot=CarmenStudySession.snapshot();
  const savedCase=snapshot.saved && typeof snapshot.saved==='object' && !Array.isArray(snapshot.saved) ? snapshot.saved : null;
  const compatible=savedCase && CarmenStudySession.validate(savedCase).ok;
  const blob=new Blob([JSON.stringify({format:'carmen-backup',version:1,notebook,savedCase},null,2)], {type:'application/json'});
  if(blob.size > CarmenStudy.MAX_BACKUP_BYTES) { studyStatus('This backup exceeds the 10 MB import limit. No file was exported; the notebook and saved case remain on this device.'); return; }
  const url=URL.createObjectURL(blob), link=document.createElement('a'); link.href=url; link.download='carmen-backup.json';
  document.body.appendChild(link); link.click(); link.remove(); setTimeout(()=>URL.revokeObjectURL(url),1000);
  const caseStatus=compatible ? 'the compatible saved case is included' : savedCase
    ? 'the saved case is included but is not validated against this selected pack; select its matching pack and version to restore it'
    : snapshot.raw!==null ? 'the unreadable saved case could not be included; its original browser data has been preserved' : 'there is no saved case';
  studyStatus(`Backup downloaded from the latest notebook: ${notebook.entries.length} entries, including any unsaved note drafts; ${caseStatus}.`);
}

async function previewStudyImport(file) {
  const generation=++studyImportGeneration; studyImportPreview=null;
  document.getElementById('studyImportPreview').hidden=true;
  if (!file) return;
  try {
    if (file.size > CarmenStudy.MAX_BACKUP_BYTES) throw new Error('Choose a Carmen backup smaller than 10 MB.');
    const backup=CarmenStudy.parseBackup(await file.text());
    if (generation!==studyImportGeneration || activeModal!=='studyModal') return;
    const current=CarmenStudySession.snapshot(), validation=backup.savedCase ? CarmenStudySession.validate(backup.savedCase) : {ok:false,error:'No saved case in this backup.'};
    studyImportPreview={backup,notebookRaw:storage.getItem(CarmenStudy.NOTEBOOK_KEY),saveRaw:current.raw};
    const compatible=backup.notebook.entries.filter(entry=>entry.packId===QUIZ_PACK.id && entry.contentVersion===QUIZ_PACK.contentVersion
      && Object.values(QUIZ_PACK.questions).some(pool=>pool.some(item=>item.caseId===entry.caseId))).length;
    document.getElementById('studyImportDescription').textContent=`Backup: ${backup.notebook.entries.length} notebook entries; ${compatible} available in this selected pack/version. Other entries remain archived until their matching pack is selected. ${validation.ok ? CarmenStudy.describeResume(backup.savedCase,QUIZ_PACK) : validation.error} Restoring replaces the selected local data; the two actions below are separate.`;
    document.getElementById('studyRestoreNotebook').disabled=false;
    document.getElementById('studyRestoreSave').disabled=!validation.ok;
    document.getElementById('studyImportPreview').hidden=false;
    studyStatus('Backup inspected. Nothing has been replaced. Choose a replacement action only after reviewing the preview.');
  } catch(error) { if(generation===studyImportGeneration) studyStatus(error.message); }
}

function restoreStudyNotebook() {
  if (!studyImportPreview) return;
  if (persistStudyNotebook(studyImportPreview.backup.notebook,studyImportPreview.notebookRaw)) {
    studyNoteDrafts.clear(); studyImportPreview.notebookRaw=studyNotebookSnapshot; document.getElementById('studyRestoreNotebook').disabled=true; renderStudyLocations();
  }
}

function restoreStudySavedCase() {
  if (!studyImportPreview?.backup.savedCase) return;
  const result=CarmenStudySession.replace(studyImportPreview.backup.savedCase,studyImportPreview.saveRaw);
  studyStatus(result.ok ? 'Saved case replaced. Close Study, then choose Resume current case when ready.' : result.error);
  if(result.ok) document.getElementById('studyRestoreSave').disabled=true;
}

function refreshStudyVoices() {
  const synth=window.speechSynthesis, voices=synth?.getVoices?.().filter(voice=>voice.localService===true) || [];
  const select=document.getElementById('studyVoice');
  studyOptions(select,voices.map(voice=>({value:voice.voiceURI,label:`${voice.name} (${voice.lang})`})),select.value);
  document.getElementById('studyRead').disabled=!voices.length || typeof window.SpeechSynthesisUtterance!=='function';
  document.getElementById('studySpeechHelp').textContent=voices.length ? 'Uses only an installed local voice. Reading begins only when you choose Read case.' : 'No installed local voice is available. The complete case text remains above. Choose Refresh voices after installing a system voice.';
}

function readStudyCase() {
  stopStudySpeech(); const selected=studySelectedCase(); if(!selected) return;
  const synth=window.speechSynthesis, voice=synth?.getVoices?.().find(value=>value.localService===true && value.voiceURI===document.getElementById('studyVoice').value);
  if(!voice || typeof window.SpeechSynthesisUtterance!=='function') { refreshStudyVoices(); return; }
  studySpeech=new window.SpeechSynthesisUtterance(studyDisplayText(selected.item, [selected.item.puzzle.title,document.getElementById('studyEvidence').textContent,selected.item.puzzle.question,...selected.item.puzzle.options].join('. ')));
  studySpeech.voice=voice; studySpeech.lang=voice.lang;
  studySpeech.onerror=()=>studyStatus('Read-aloud could not finish. All case text remains available.');
  synth.speak(studySpeech); studyStatus('Reading the case with the selected installed voice. Stop reading is always available.');
}

function stopStudySpeech() { if(studySpeech) { studySpeech.onerror=null; window.speechSynthesis?.cancel(); studySpeech=null; } }
