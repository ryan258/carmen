// New cases confirm established arrest details. Historical manual layouts keep
// the same three answers and full cross-product of hideouts/disguises.
function applyWarrantLayout() {
  const confirmation = state.activityCatalogVersion >= 3;
  document.getElementById('warrantConfirmation').hidden = !confirmation;
  document.getElementById('warrantManualFields').hidden = confirmation;
  document.getElementById('submitWarrantBtn').textContent = confirmation ? 'Confirm arrest' : 'Submit warrant';
  document.getElementById('warrantInstructions').textContent = confirmation
    ? 'The solved case supplies the arrest details. Review them and confirm when ready; there is no second answer to enter.'
    : `Use the evidence below to select the hideout and disguise. ${state.assisted ? 'You can revise without losing lives in this assisted case.' : 'A rejected warrant costs one life.'}`;
  const compact = state.settings.compactWarrant !== false;
  const toggle = document.getElementById('warrantCompactToggle');
  if (!toggle) return;
  toggle.setAttribute('aria-pressed', String(compact));
  toggle.textContent = compact ? 'Warrant layout: one selection' : 'Warrant layout: separate fields';
  document.getElementById('warrantCompactFields').hidden = !compact;
  document.getElementById('warrantSeparateFields').hidden = compact;
}

function syncWarrantPair() {
  const hideout = document.getElementById('warrantHideout').value;
  const disguise = document.getElementById('warrantDisguise').value;
  document.getElementById('warrantPair').value = hideout && disguise ? JSON.stringify([hideout, disguise]) : '';
}

function updateWarrantControlLock() {
  const locked = state.inputLocked || state.warrantIssued || state.activityCatalogVersion >= 3;
  ['warrantPair','warrantHideout','warrantDisguise'].forEach(id => {
    document.getElementById(id).disabled = locked;
  });
  document.getElementById('warrantCity').disabled = true;
}

function toggleCompactWarrant() {
  if (activeModal) return;
  state.settings.compactWarrant = state.settings.compactWarrant === false;
  saveSettings(); syncWarrantPair(); applyWarrantLayout();
}

function selectWarrantPair() {
  if (activeModal || state.inputLocked || state.phase !== 'investigation' || !state.puzzleSolved || state.warrantIssued) return;
  const raw = document.getElementById('warrantPair').value;
  let pair;
  try { pair = JSON.parse(raw); } catch { pair = ['', '']; }
  if (!Array.isArray(pair) || pair.length !== 2 || pair.some(value => typeof value !== 'string')) return;
  if (pair[0] && !getAllWarrantChoices('hideout').includes(pair[0])) return;
  if (pair[1] && !getAllWarrantChoices('disguise').includes(pair[1])) return;
  ['hideout', 'disguise'].forEach((field, index) => {
    document.getElementById(`warrant${field[0].toUpperCase()+field.slice(1)}`).value = pair[index];
    state.warrantSelection[field] = pair[index];
  });
  saveGame();
}

function buildWarrantDropdowns(currentLoc) {
  ['city','hideout','disguise'].forEach(field => {
    const select = document.getElementById(`warrant${field[0].toUpperCase()+field.slice(1)}`);
    select.innerHTML = '';
    const placeholder = document.createElement('option');
    placeholder.value = ''; placeholder.textContent = `Select ${field}`; select.appendChild(placeholder);
    getAllWarrantChoices(field).forEach(value => {
      const option = document.createElement('option'); option.value = value;
      option.textContent = CarmenPractice.warrantLabel(QUIZ_PACK, currentLoc.id, field, value, state.activityCatalogVersion);
      select.appendChild(option);
    });
    select.disabled = field === 'city';
    select.value = select.disabled ? currentLoc.warrantAnswers.city : state.warrantSelection[field] || '';
    if (select.disabled) state.warrantSelection[field] = select.value;
    select.onchange = () => {
      if (state.inputLocked || state.warrantIssued || activeModal) return;
      state.warrantSelection[field] = select.value; syncWarrantPair(); saveGame();
    };
  });
  const pairs = document.getElementById('warrantPair');
  pairs.innerHTML = '';
  const placeholder = document.createElement('option');
  placeholder.value = ''; placeholder.textContent = 'Select hideout and disguise'; pairs.appendChild(placeholder);
  for (const hideout of getAllWarrantChoices('hideout')) {
    for (const disguise of getAllWarrantChoices('disguise')) {
      const option = document.createElement('option');
      option.value = JSON.stringify([hideout, disguise]);
      option.textContent = `${CarmenPractice.warrantLabel(QUIZ_PACK,currentLoc.id,'hideout',hideout,state.activityCatalogVersion)} — ${CarmenPractice.warrantLabel(QUIZ_PACK,currentLoc.id,'disguise',disguise,state.activityCatalogVersion)}`;
      pairs.appendChild(option);
    }
  }
  pairs.onchange = selectWarrantPair;
  if (state.activityCatalogVersion >= 3) fillConfirmedWarrant(currentLoc);
  syncWarrantPair(); applyWarrantLayout(); updateWarrantControlLock();
}

function fillConfirmedWarrant(loc) {
  for (const field of ['city', 'hideout', 'disguise']) {
    state.warrantSelection[field] = loc.warrantAnswers[field];
    document.getElementById(`warrant${field[0].toUpperCase()+field.slice(1)}`).value = loc.warrantAnswers[field];
  }
  syncWarrantPair();
  const hideout = CarmenPractice.warrantLabel(QUIZ_PACK, loc.id, 'hideout', loc.warrantAnswers.hideout, state.activityCatalogVersion);
  const disguise = CarmenPractice.warrantLabel(QUIZ_PACK, loc.id, 'disguise', loc.warrantAnswers.disguise, state.activityCatalogVersion);
  document.getElementById('warrantConfirmationSummary').textContent = `${loc.name} · ${hideout} · ${disguise}. The solved case supplies these details. Confirm when you are ready to close this stop.`;
}
