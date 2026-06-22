// Content build step: stamp briefing.suspect + briefing.nextLead onto every case
// in a pack, then write the pack back in place.
// Existing briefing.nextLead values are preserved; defaults only fill missing leads.
// Run with: node scripts/apply-henchmen.js [path/to/pack.json]
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const packPath = process.argv[2]
  ? path.resolve(root, process.argv[2])
  : path.join(root, 'data/packs/bentonville.json');

const pack = JSON.parse(fs.readFileSync(packPath, 'utf8'));
const bank = pack.questions;
const henchmenByCity = Object.fromEntries(
  pack.locations.map((loc) => [loc.id, loc.henchman])
);

const cityOrder = pack.locations.map((loc) => loc.id);

const defaultNextLead = Object.fromEntries(
  cityOrder.map((cityId, index) => {
    const next = pack.locations[index + 1];
    if (next) return [cityId, `A seized note points toward ${next.name}, where Carmen's next courier is already setting up.`];
    return [cityId, "The final note points back to Carmen's own Bentonville escape route."];
  })
);

function applyToCity(cityId) {
  const henchman = henchmenByCity[cityId];
  const cases = bank[cityId];
  if (!henchman) {
    console.warn(`Skipping ${cityId}: no canon henchman in ${path.relative(root, packPath)}.`);
    return;
  }
  if (!Array.isArray(cases) || cases.length === 0) {
    console.warn(`Skipping ${cityId}: no cases found in ${path.relative(root, packPath)}.`);
    return;
  }
  cases.forEach((caseData) => {
    caseData.briefing = caseData.briefing || {};
    const existingNote = caseData.briefing.suspect && caseData.briefing.suspect.dossierNote;
    // Per docs/new-location.md: preserve an author's round-specific dossierNote; otherwise use canon.
    const dossierNote = existingNote || henchman.dossierNote;
    caseData.briefing.suspect = {
      name: henchman.name,
      alias: henchman.alias,
      emoji: henchman.emoji,
      role: henchman.role,
      dossierNote
    };
    caseData.briefing.nextLead = caseData.briefing.nextLead || defaultNextLead[cityId];
  });
}

cityOrder.forEach(applyToCity);

fs.writeFileSync(packPath, JSON.stringify(pack, null, 2) + '\n');
console.log(`Applied suspect + nextLead to all cases in ${path.relative(root, packPath)}.`);
