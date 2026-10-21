/* Presentation helpers for the active decision. Game/save ownership stays in game.js. */
let caseSpeech = null;

function workspaceEpisodeEvidence() {
  if(typeof CarmenCaseDesign === 'undefined' || !state.episodeId) return '';
  const discovered=state.phase==='final' || state.puzzleSolved ? state.currentLocationIndex : state.currentLocationIndex-1;
  return discovered<0 ? '' : CarmenCaseDesign.getEpisodeEvidence(QUIZ_PACK,state.episodeId,discovered);
}

function workspaceEvidence() {
  if(!['investigation','final'].includes(state.phase)) return [];
  const evidence=[];
  if(state.phase==='final') {
    evidence.push({label:'Your route',text:LOCATIONS.map((location,index)=>`${index+1}. ${location.name}`).join('\n')});
    // Original clues remain available for the final review; never expose answer keys.
    const indices=state.episodeId ? [] : state.finalConfrontationRound===1 ? [0]
      : state.finalConfrontationRound===2 ? [Math.floor(LOCATIONS.length/2)] : [];
    for(const index of indices) {
      const item=getLocationCase(index);
      evidence.push({label:item.name,text:item.clues.map(clue=>displayCaseText(item,clue)).join('\n\n')});
    }
  } else {
    const item=getLocationCase(state.currentLocationIndex);
    item.clues.forEach((clue,index)=>evidence.push({label:`Clue ${index+1}`,text:displayCaseText(item,clue),markIndex:index}));
  }
  const trail=workspaceEpisodeEvidence();
  if(trail) evidence.push({label:'Discovered case trail',text:trail});
  return evidence;
}

function renderWorkspaceEvidence(id, evidence) {
  const list=document.getElementById(id);
  if(!list) return;
  list.innerHTML='';
  for(const item of evidence) {
    const row=document.createElement('li'), label=document.createElement('strong'), text=document.createElement('p');
    label.textContent=item.label; text.textContent=item.text;
    row.appendChild(label); row.appendChild(text);
    if(Number.isInteger(item.markIndex) && Array.isArray(state.evidenceMarks)) {
      const button=document.createElement('button');
      button.className='evidence-mark';
      button.setAttribute('data-evidence-index',String(item.markIndex));
      button.setAttribute('aria-pressed',String(state.evidenceMarks.includes(item.markIndex)));
      button.textContent=state.evidenceMarks.includes(item.markIndex) ? `Clue ${item.markIndex+1}: marked useful` : `Mark clue ${item.markIndex+1} as useful`;
      button.onclick=()=>toggleEvidenceMark(item.markIndex);
      row.appendChild(button);
    }
    list.appendChild(row);
  }
}

function toggleEvidenceMark(index) {
  if(state.phase!=='investigation' || activeModal || !Array.isArray(state.evidenceMarks) || !Number.isInteger(index) || index<0 || index>2) return;
  const previous=state.evidenceMarks;
  state.evidenceMarks=previous.includes(index) ? previous.filter(value=>value!==index) : [...previous,index].sort();
  if(!saveGame()) { state.evidenceMarks=previous; return; }
  // Update both copies in place so the active button retains keyboard/voice focus.
  const marked=state.evidenceMarks.includes(index);
  document.querySelectorAll(`[data-evidence-index="${index}"]`).forEach(button=>{
    button.setAttribute('aria-pressed',String(marked));
    button.textContent=marked ? `Clue ${index+1}: marked useful` : `Mark clue ${index+1} as useful`;
  });
}

function renderCaseWorkspace() {
  if(!['investigation','final'].includes(state.phase)) return;
  const current=document.getElementById('currentTask');
  const episode=state.episodeId && typeof CarmenCaseDesign!=='undefined' ? CarmenCaseDesign.getEpisode(QUIZ_PACK,state.episodeId) : null;
  const stage=state.phase==='final' ? state.puzzleSolved ? 'Review your deduction, then continue.' : 'Use your collected evidence to complete the report.'
    : state.activeTab==='warrant' ? 'Review the evidence and confirm the arrest.'
    : state.puzzleSolved ? 'Clue solved. Continue to the warrant when ready.'
    : state.activeTab==='puzzle' ? 'Compare the evidence and solve the clue.' : 'Read the case and the three clues, then open the puzzle.';
  const position=state.phase==='final' ? `Final report · Part ${state.finalConfrontationRound} of ${getFinalConfrontationRounds().length}`
    : `Stop ${state.currentLocationIndex+1} of ${LOCATIONS.length} · ${LOCATIONS[state.currentLocationIndex].name}`;
  if(current) current.textContent=`${episode ? episode.title+' · ' : ''}${position}. ${stage}`;
  const guidance=document.getElementById('caseGuidance');
  if(guidance) {
    guidance.hidden=state.currentLocationIndex!==0 && !state.supportEnabled;
    const instructions=state.supportEnabled
      ? 'Guided support is on. Use hints whenever you need them; your completed work stays saved.'
      : 'Read the evidence → solve the clue → confirm the arrest. You can pause at any point, or ask for help above.';
    const opening=episode && state.currentLocationIndex===0 && state.activeTab==='dossier' ? episode.intro : '';
    guidance.textContent=opening ? `${opening} ${instructions}` : instructions;
  }
  const support=document.getElementById('caseSupportButton');
  if(support) {
    support.disabled=Boolean(state.supportEnabled);
    support.textContent=state.supportEnabled ? 'Guided support is on' : 'Help me through this case';
  }
  const shortcuts=document.getElementById('answerShortcutHelp');
  if(shortcuts) {
    shortcuts.hidden=state.activeTab!=='puzzle';
    shortcuts.textContent=state.settings.answerShortcuts ? 'Answer shortcuts: A–D or 1–4. In ordering or matching activities, each key selects its card.' : 'Use the answer buttons. Optional A–D / 1–4 keys are in Reading & controls.';
  }
  const evidence=workspaceEvidence();
  renderWorkspaceEvidence('puzzleEvidence',evidence);
  renderWorkspaceEvidence('warrantEvidence',evidence);
}

function setCaseReadingStatus(message) {
  const status=document.getElementById('caseReadingStatus');
  if(status) { status.textContent=message; status.hidden=!message; }
}

function stopCaseSpeech() {
  if(!caseSpeech) return;
  caseSpeech.onend=null; caseSpeech.onerror=null;
  window.speechSynthesis?.cancel(); caseSpeech=null;
  setCaseReadingStatus('Reading stopped. Your place in the case is unchanged.');
}

function readCurrentCase() {
  if(activeModal || !['investigation','final'].includes(state.phase)) return;
  stopCaseSpeech();
  if(typeof stopStudySpeech==='function') stopStudySpeech();
  const synth=window.speechSynthesis;
  const voices=synth?.getVoices?.().filter(voice=>voice.localService===true) || [];
  const preferred=document.getElementById('studyVoice')?.value;
  const voice=voices.find(value=>value.voiceURI===preferred) || voices.find(value=>/^en\b/i.test(value.lang)) || voices[0];
  if(!voice || typeof window.SpeechSynthesisUtterance!=='function') {
    setCaseReadingStatus('No installed local voice is available. All case text remains on screen. Install a system voice, then choose Read this case again.');
    return;
  }
  const passages=[document.getElementById('currentTask')?.textContent || ''];
  if(state.phase==='investigation') {
    passages.push(document.getElementById('briefingReport').textContent);
  }
  passages.push(...workspaceEvidence().map(item=>`${item.label}. ${item.text}`));
  if(state.activeTab==='puzzle') {
    passages.push(document.getElementById('puzzleDescription').textContent,
      document.getElementById('puzzleVisualContainer').textContent,document.getElementById('puzzleQuestionText').textContent);
    const activity=typeof getCurrentActivity==='function' ? getCurrentActivity() : null;
    if(activity) passages.push(document.getElementById('activityPrompt').textContent,
      ...[...document.querySelectorAll('.activity-card')].map(button=>button.textContent));
    else passages.push(...[...document.querySelectorAll('.option-btn')].map(button=>button.getAttribute('aria-label') || button.textContent));
  } else if(state.activeTab==='warrant') passages.push(document.getElementById('warrantConfirmationSummary')?.textContent || 'Choose the hideout and disguise from the evidence.');
  const utterance=new window.SpeechSynthesisUtterance(passages.filter(Boolean).join('. '));
  caseSpeech=utterance; utterance.voice=voice; utterance.lang=voice.lang;
  utterance.onend=()=>{ if(caseSpeech===utterance) {caseSpeech=null;setCaseReadingStatus('Finished reading. Continue when you are ready.');} };
  utterance.onerror=()=>{ if(caseSpeech===utterance) {caseSpeech=null;setCaseReadingStatus('Reading could not finish. All case text remains available.');} };
  try { synth.speak(utterance); setCaseReadingStatus('Reading with an installed local voice. Stop reading is always available.'); }
  catch { caseSpeech=null; setCaseReadingStatus('Reading could not start. All case text remains available.'); }
}

document.addEventListener('DOMContentLoaded',()=>{
  const route=document.getElementById('routeDetails');
  // A collapsed map has no layout box; Leaflet must measure it after expansion.
  if(route) route.ontoggle=()=>{ if(route.open && typeof invalidateMapSize==='function') invalidateMapSize(); };
});
