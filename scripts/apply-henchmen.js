// One-off content migration: stamp briefing.suspect + briefing.nextLead onto every case.
// Run with: node scripts/apply-henchmen.js
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const bankPath = path.join(root, 'question-bank.json');
const regionsPath = path.join(root, 'data/argentina-regions.json');

const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));
const regions = JSON.parse(fs.readFileSync(regionsPath, 'utf8'));
const henchmenByCity = Object.fromEntries(
  regions.locations.map((loc) => [loc.id, loc.henchman])
);

const cityOrder = regions.locations.map((loc) => loc.id);

// Default next-lead per departure city. Final city points to Carmen herself.
const defaultNextLead = {
  'buenos-aires': "A wine-stained receipt from a Mendoza vineyard, dated next week.",
  'mendoza': "A high-altitude permit stamped for the colonial salt road north of Salta.",
  'salta': "A torn bookplate from a Jesuit-era manuscript in the Córdoba archives.",
  'cordoba': "A soaked map of the Iguazú falls boat route, marked in red ink.",
  'iguazu': "A Bariloche chocolatier's business card with a microfilm receipt clipped to it.",
  'bariloche': "A Beagle Channel weather log forged for an Ushuaia departure tomorrow.",
  'ushuaia': "A glaciology permit forged with last week's date, addressed to El Calafate.",
  'el-calafate': "A hand-scrawled bearing across the ice field. Carmen's coordinates — and she knows you have them."
};

// Hand-written Buenos Aires overrides — richer dossierNotes and case-specific leads.
const buenosAiresOverrides = {
  'classic-buenos-aires': {
    suspectNote: "Trapaza's bandoneón case had room for one stolen manuscript and his stagehand blacks. The witness in La Boca remembers the case but never saw his hands.",
    nextLead: "A coded telegram pulled from Trapaza's coat lining: \"MAY 8 / SAN MARTÍN PARK / SHE EXPECTS COMPANY.\" The park is in Mendoza."
  },
  'obelisco-avenida': {
    suspectNote: "Trapaza's taxi receipt from Avenida Corrientes ends at a fence he's used twice this month. The Obelisco is his favorite drop point.",
    nextLead: "A folded Mendoza city plan in his bag, with red ink circling Cerro de la Gloria — and the words \"crossroads, midnight\" in the margin."
  },
  'cafe-tortoni': {
    suspectNote: "Trapaza has rotated through Café Tortoni four nights this month, posing as a visiting poet. A waiter recognized his bandoneón calluses.",
    nextLead: "A poet's notebook, half-finished verse about \"the Malbec she never poured,\" and a Mendoza street name penciled in the margin."
  },
  'teatro-colon-score': {
    suspectNote: "Trapaza last worked the Teatro Colón orchestra pit; the loading-door log still shows his old badge number from his expulsion year.",
    nextLead: "A benefit-opera ticket stub for a Mendoza concert hall, dated four days from now, with a backstage pass clipped to it."
  },
  'recoleta-mausoleum': {
    suspectNote: "A Recoleta florist confirms Trapaza ordered white lilies for a 'guided tour' the morning of the heist. He was already in costume.",
    nextLead: "A heritage-conservation invoice charging vines and trellises to a Mendoza cemetery preservation project — Carmen's next staging ground."
  }
};

function applyToCity(cityId) {
  const henchman = henchmenByCity[cityId];
  const cases = bank[cityId];
  if (!henchman) {
    console.warn(`Skipping ${cityId}: no canon henchman in data/argentina-regions.json.`);
    return;
  }
  if (!Array.isArray(cases) || cases.length === 0) {
    console.warn(`Skipping ${cityId}: no cases found in question-bank.json.`);
    return;
  }
  cases.forEach((caseData) => {
    caseData.briefing = caseData.briefing || {};
    const override = (cityId === 'buenos-aires' && buenosAiresOverrides[caseData.caseId]) || null;
    const dossierNote = (override && override.suspectNote) || henchman.dossierNote;
    caseData.briefing.suspect = {
      name: henchman.name,
      alias: henchman.alias,
      emoji: henchman.emoji,
      role: henchman.role,
      dossierNote
    };
    caseData.briefing.nextLead = (override && override.nextLead) || defaultNextLead[cityId];
  });
}

cityOrder.forEach(applyToCity);

fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2) + '\n');
console.log('Applied suspect + nextLead to all cases.');
