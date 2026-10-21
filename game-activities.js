// Browser activity adapter. Rules/descriptors live in core and quiz-activities;
// this file owns card interaction, feedback and focus using the session facade.
function selectedQuizStyle() {
  return document.getElementById('quizStyleSelect').value === 'classic' ? 'classic' : 'mixed';
}

function getCurrentActivity() {
  if (state.quizStyle !== 'mixed' || !state.caseVariantIds.length) return null;
  return CarmenCore.getActivity(QUIZ_PACK, LOCATIONS, state.caseVariantIds,
    state.isFinalConfrontation ? 'final' : 'investigation', state.currentLocationIndex,
    state.finalConfrontationRound, state.quizStyle, state.activityCatalogVersion, state.episodeId);
}

function ensureActivityInRun(caseIds, seed, recentCaseIds = []) {
  if (state.quizStyle !== 'mixed') return caseIds;
  const available = LOCATIONS.map((location, index) => ({index,
    cases: CarmenRunGenerator.freshCasePool(CarmenRunGenerator.challengeCasePool(getLocationCasePool(location), state.challenge), recentCaseIds)
      .filter(item => CarmenActivities.getCaseActivity(QUIZ_PACK, item, state.activityCatalogVersion))
  })).filter(entry => entry.cases.length);
  const alreadyMixed = available.some(entry => entry.cases.some(item => item.caseId === caseIds[entry.index]));
  if (!available.length || alreadyMixed) return caseIds;
  const random = CarmenRunGenerator.createSeededRandom(`${seed}:activity`);
  const slot = available[Math.floor(random() * available.length)];
  const selected = [...caseIds];
  selected[slot.index] = slot.cases[Math.floor(random() * slot.cases.length)].caseId;
  return selected;
}

function currentPuzzleExplanation() {
  const activity = getCurrentActivity();
  if (activity) {
    const answer = CarmenCore.activityAnswer(activity);
    const loc = getLocationCase(state.currentLocationIndex);
    const explanation = state.isFinalConfrontation ? activity.explanation : displayCaseText(loc, loc.puzzle.explanation);
    return explanation ? `${answer} ${explanation}` : answer;
  }
  return state.isFinalConfrontation
    ? getFinalConfrontationRounds()[state.finalConfrontationRound - 1].explanation
    : displayCaseText(getLocationCase(state.currentLocationIndex), getLocationCase(state.currentLocationIndex).puzzle.explanation);
}

function activityHints(activity) {
  if (activity.hints?.length === 3) return activity.hints;
  return [
    'Use the case file or route inventory. Put each card in the place supported by the evidence.',
    activity.kind === 'sequence' ? `Start with ${activity.items[0]}.`
      : `The first match is ${activity.items[0].prompt}: ${activity.items[0].answer}.`,
    CarmenCore.activityAnswer(activity)
  ];
}

function activityLabel(activity) {
  return {sequence: 'Put in order', match: 'Match the evidence', filter: 'Filter the evidence', assemble: 'Assemble the answer'}[activity.kind];
}

function activityCardLabel(activity, index) {
  return activity.kind === 'match' ? activity.items[index].answer : activity.items[index];
}

function prepareActivity() {
  const activity = getCurrentActivity();
  document.getElementById('activityPanel').hidden = !activity;
  document.getElementById('puzzleOptionsGrid').hidden = Boolean(activity);
  document.getElementById('puzzleModeLabel').textContent = activity
    ? activityLabel(activity) : 'Four choices';
  if (!activity) return;
  if (!state.activityProgress) state.activityProgress = {activityId: activity.id, selections: [], rejected: []};
  document.getElementById('puzzleTitleText').textContent = state.isFinalConfrontation
    ? `Final report ${state.finalConfrontationRound} of 3 — ${activity.title}` : activity.title;
  document.getElementById('puzzleQuestionText').textContent = activity.instruction;
  document.getElementById('puzzleDescription').textContent = state.isFinalConfrontation
    ? 'Use the route and collected tokens shown in your case inventory. You can consult them at any time.'
    : 'Use the evidence in the Case file. Assemble your answer with the cards below.';
  renderActivity();
}

function renderActivity() {
  const activity = getCurrentActivity();
  if (!activity || !state.activityProgress) return;
  const selections = state.activityProgress.selections;
  const blocked = state.inputLocked || state.puzzleSolved;
  const list = document.getElementById('activitySelections');
  list.innerHTML = '';
  const rejected = state.activityProgress.rejected.some(attempt => {
    const current = activity.kind === 'filter' ? [...selections].sort((a,b)=>a-b) : selections;
    const previous = activity.kind === 'filter' ? [...attempt].sort((a,b)=>a-b) : attempt;
    return previous.length === current.length && previous.every((value,i)=>value === current[i]);
  });
  const solution = CarmenCore.activitySolution(activity);
  selections.forEach((itemIndex, position) => {
    const row = document.createElement('li');
    row.textContent = activity.kind === 'match'
      ? `${activity.items[position].prompt}: ${activity.items[itemIndex].answer}` : activity.items[itemIndex];
    if (rejected && state.supportEnabled) {
      const fits = activity.kind === 'filter' ? solution.includes(itemIndex) : solution[position] === itemIndex;
      row.textContent += fits ? ' — fits this part of the evidence' : ' — review this part';
      row.className = fits ? 'evidence-fit' : 'evidence-review';
    }
    list.appendChild(row);
  });
  const prompt = document.getElementById('activityPrompt');
  const complete = CarmenCore.activityComplete(activity, selections);
  const answerLength = CarmenCore.activitySolution(activity).length;
  prompt.textContent = state.puzzleSolved ? 'Work accepted.' : activity.kind === 'filter'
    ? `${selections.length} selected. Select every card supported by the rule; select a card again to remove it. Check work when ready.` : complete
    ? 'Answer ready. Check work when ready, or use Undo last to change it.'
    : activity.kind === 'match' ? `Match ${selections.length + 1} of ${answerLength}: ${activity.items[selections.length].prompt}`
    : `Choose ${activity.kind === 'assemble' ? 'fragment' : 'step'} ${selections.length + 1} of ${answerLength}.`;
  const cards = document.getElementById('activityCards');
  cards.innerHTML = '';
  // Filter the existing saved four-card permutation: labels never move on undo/resume.
  state.optionOrder.filter(index => index < activity.items.length).forEach((itemIndex, displayIndex) => {
    const label = activityCardLabel(activity, itemIndex);
    const button = document.createElement('button');
    button.className = 'activity-card';
    button.textContent = `Card ${'ABCD'[displayIndex]}: ${label}`;
    button.setAttribute('aria-label', button.textContent);
    button.setAttribute('aria-pressed', String(selections.includes(itemIndex)));
    button.setAttribute('aria-describedby', 'activityPrompt');
    button.disabled = blocked || (activity.kind !== 'filter' && (selections.includes(itemIndex) || complete));
    button.onclick = () => selectActivityCard(itemIndex);
    cards.appendChild(button);
  });
  document.getElementById('activityUndo').disabled = blocked || !selections.length;
  document.getElementById('activityReset').disabled = blocked || !selections.length;
  document.getElementById('activityCheck').disabled = blocked || !complete;
  const help = document.getElementById('activityHelp');
  if (help) help.textContent = `${activity.kind === 'filter' ? 'Select every supported card; select again to remove it.' : 'Choose cards in the requested order or match.'} Undo last and Clear work cost nothing. ${state.assisted ? 'Mistakes cost no lives in this assisted case.' : 'Each new incorrect complete answer costs one life; checking the same rejected answer again costs nothing.'} Your work saves as you go.`;
}

function canEditActivity() {
  return !activeModal && ['investigation','final'].includes(state.phase)
    && !state.inputLocked && !state.puzzleSolved && Boolean(getCurrentActivity()) && Boolean(state.activityProgress);
}

function focusActivityControl() {
  const next = [...document.querySelectorAll('.activity-card')].find(button => !button.disabled);
  (next || document.getElementById('activityCheck')).focus();
}

function selectActivityCard(itemIndex) {
  if (!canEditActivity()) return;
  const activity = getCurrentActivity();
  if (!Number.isInteger(itemIndex) || itemIndex < 0 || itemIndex >= activity.items.length) return;
  const selections = state.activityProgress.selections;
  if (activity.kind === 'filter' && selections.includes(itemIndex)) {
    state.activityProgress.selections = selections.filter(index => index !== itemIndex);
  } else {
    if (selections.includes(itemIndex) || (activity.kind !== 'filter' && CarmenCore.activityComplete(activity, selections))) return;
    selections.push(itemIndex);
  }
  if (!saveGame()) return;
  sound.click(); renderActivity();
  if (activity.kind === 'filter') {
    const display = state.optionOrder.filter(index => index < activity.items.length).indexOf(itemIndex);
    document.querySelectorAll('.activity-card')[display]?.focus();
  } else focusActivityControl();
  announce(document.getElementById('activityPrompt').textContent);
}

function undoActivity() {
  if (!canEditActivity() || !state.activityProgress.selections.length) return;
  state.activityProgress.selections.pop();
  if (!saveGame()) return;
  renderActivity(); focusActivityControl(); announce('Last card removed. ' + document.getElementById('activityPrompt').textContent);
}

function resetActivitySelection() {
  if (!canEditActivity() || !state.activityProgress.selections.length) return;
  state.activityProgress.selections = [];
  if (!saveGame()) return;
  renderActivity(); focusActivityControl(); announce('Work cleared. No life or points lost.');
}

function checkActivity() {
  if (!canEditActivity()) return;
  const activity = getCurrentActivity(), progress = state.activityProgress;
  if (!CarmenCore.activityComplete(activity, progress.selections)) return;
  const submitted = activity.kind === 'filter' ? [...progress.selections].sort((a,b) => a-b) : [...progress.selections];
  if (progress.rejected.some(attempt => {
    const previous = activity.kind === 'filter' ? [...attempt].sort((a,b) => a-b) : attempt;
    return previous.length === submitted.length && previous.every((value, index) => value === submitted[index]);
  })) {
    announce('That complete answer was already rejected. No additional life lost. Use Undo last or Clear work to change it.');
    return;
  }
  if (CarmenCore.activityCorrect(activity, progress.selections)) {
    state.puzzleSolved = true;
    if (state.phase === 'investigation') addRoundPoints('puzzle', getPuzzleScore(state.puzzleAttempts));
    if (!saveGame()) return;
    sound.success(); renderActivity(); updateHUD(); updateHintButton(); renderCaseWorkspace();
    const final = state.phase === 'final';
    const next = document.getElementById(final ? 'finalContinueBtn' : 'goToWarrantBtn');
    next.hidden = false; next.disabled = false; next.classList.remove('opacity-50','cursor-not-allowed');
    if (!final) document.getElementById('tabWarrant').disabled = false;
    announce('Work accepted. ' + currentPuzzleExplanation() + (final ? ' Choose Continue when ready.' : ' Choose Continue to prepare the warrant.'));
    next.focus();
    return;
  }
  progress.rejected.push(submitted);
  if (state.phase === 'investigation') state.puzzleAttempts++;
  loseCaseLife(); state.inputLocked = true;
  if (!saveGame()) return;
  sound.fail(); updateHUD(); renderActivity();
  announce(activityFeedback(activity, submitted) + mistakeStatus());
  schedule(() => {
    if (state.lives === 0) { triggerGameOver(); return; }
    state.inputLocked = false; renderActivity();
    // Keep the user at their work, unless they chose another tab during feedback.
    if (state.activeTab === 'puzzle') document.getElementById('activityUndo').focus();
  }, WRONG_LOCK_MS);
}

function activityFeedback(activity, selections) {
  const solution = CarmenCore.activitySolution(activity);
  if (activity.kind === 'filter') {
    const extra = selections.find(index => !solution.includes(index));
    return extra !== undefined ? `Review “${activity.items[extra]}”: it does not satisfy every condition. ${activity.hints?.[0] || 'Compare each selected card with all the written conditions.'}`
      : `The selected cards fit, but the evidence supports another card too. ${activity.hints?.[0] || 'Check the remaining cards against every condition.'}`;
  }
  const position = selections.findIndex((index, i) => index !== solution[i]);
  const subject = activity.kind === 'match' ? `The match for “${activity.items[position].prompt}”` : `Step ${position + 1}`;
  return `${subject} needs another look. ${activity.hints?.[0] || 'Check its relationship to the written evidence.'} Your work is still here; use Undo last or Clear work to revise it.`;
}
