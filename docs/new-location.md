# Retargeting the Game to a New Location

This guide walks through refactoring "Where in Argentina is Carmen Sandiego?" to target a different region — for example, **"Where in Bentonville is Carmen Sandiego?"** The Argentina edition is used as the reference implementation throughout.

The game's structure (briefing → clues → puzzle → warrant → travel, repeated across 8 stops, then a final confrontation) is location-agnostic. What changes is the *content* layer, a small number of code references, and the map projection. Everything you need to touch lives in a predictable set of files.

---

## 1. Decide the Scope of the Reskin

Pick this before writing any content. The Argentina edition spans a country; a Bentonville edition spans a city. The eight "stops" still need to feel distinct, so map them to a smaller unit:

| Source scale | Target scale | What an "8-stop tour" becomes |
| --- | --- | --- |
| Country | City | 8 neighborhoods, districts, or landmark zones |
| Country | Region | 8 cities or counties |
| State | City | 8 neighborhoods or signature venues |

**For Bentonville**, candidates for the eight stops: Downtown Square, Crystal Bridges, the Walmart Home Office campus, the Momentary, Compton Gardens, Slaughter Pen / Coler trails, Bentonville Airport (XNA-adjacent), and the Scott Family Amazeum. The "city / hideout / disguise" warrant trio still works — it just resolves to *neighborhood / specific venue / local persona* instead of *city / landmark / cultural role*.

Pick the eight up front. The order matters: the first should be the most iconic (Downtown Square is the Buenos Aires analogue), the last should support a final-deduction meta puzzle (Crystal Bridges' trail network or the Razorback Greenway work well).

---

## 2. Files You Will Touch

### Data (rewrite entirely)

- `data/argentina-regions.json` — rename to `data/bentonville-regions.json`. Each entry needs `id`, `name`, neighborhood/district label (currently `province`), `emoji`, `tagline`, `lat`, `lng`, and a `henchman` object (`name`, `alias`, `emoji`, `role`, `dossierNote`).
- `data/sources.json` — replace tourism/UNESCO entries with Bentonville-relevant sources (Visit Bentonville, Crystal Bridges, City of Bentonville, NWA Council, local press). Keep the `{ title, publisher, url, reviewed }` shape.
- `question-bank.json` — rewrite all case variants. Keys must match the new region `id`s. See section 4 for content guidance.

### Code (find-and-replace plus map recentering)

- `game.js`
  - Line 373: `fetch('./data/argentina-regions.json', ...)` → new filename.
  - Line 1960: `center: [-38.4161, -63.6167], zoom: 3.5` → Bentonville center `[36.3729, -94.2088]` at zoom ~13. Also raise `minZoom`/`maxZoom` in the tile layer config (line ~1974) to a city-scale range, e.g. `minZoom: 11, maxZoom: 17`.
  - The classic fallback case at line ~60 hard-codes Argentine flavor ("oldest bottle of Malbec... Mendoza"). Rewrite as a Bentonville fallback or delete and let the randomized bank handle everything.
- `scripts/apply-henchmen.js` — line 8 and the warning string on line 58 reference `data/argentina-regions.json`. Update the path.
- `tests/content-validation.test.js` (line 9) and `tests/smoke.test.js` (lines 9 and 21) — update file paths and the HTML filename check.
- `run-generator.js` — skim for any Argentina-specific defaults; the random-case generator pulls from the region JSON, so most of it will follow automatically.

### UI shell

- `carmen-sandiego-argentina.html` — rename to `carmen-sandiego-bentonville.html` (or whatever you pick). Update:
  - Line 6: `<title>` tag.
  - Line 23: "Argentina Division" subtitle.
  - Line 69: the briefing paragraph mentioning "across Argentina".
  - Line 499: the footer copyright string.
- `index.html` — update the meta-refresh target and the link text.
- `styles.css` — generally fine. Only touch it if the visual system needs to change (e.g., Bentonville earth-tones over Argentine sky-blue/sunset palette).

### Docs

- `README.md` — title, intro paragraph, references to "eight Argentina locations".
- `SPEC.md` — this is the heaviest doc rewrite. The puzzle *mechanics* (cipher, coordinate plot, timeline, logic grid, sequence, jigsaw, compass, final deduction) all carry over; you're rewriting the *themes* and *answers* per stop.
- `ROADMAP.md` — update any city names referenced in milestones.
- `docs/content-audit.md`, `docs/content-rubric.md`, `docs/visual-system.md` — search for "Argentina" and the eight city names; the rubric rules themselves stay valid.

A fast first pass: `grep -rln "Argentina\|Buenos Aires\|Mendoza\|Salta\|Córdoba\|Iguaz\|Bariloche\|Ushuaia\|Calafate" .` then triage each hit.

---

## 3. Designing the Eight Stops

For each stop you need to lock down five things before writing any cases:

1. **Theme** — the one-line identity. Buenos Aires = "tango and bookstores." Downtown Bentonville = "town square, fountain, and the original Walton's Five & Dime."
2. **Puzzle archetype** — keep the existing eight mechanics from `SPEC.md` and assign one per stop. Don't invent new mechanics until you ship.
3. **Henchman** — a named V.I.L.E. accomplice with an alias, role, and dossier note. They are who the player actually arrests; Carmen is always one stop ahead. Tie the role to the stop's theme (a forger at the art museum, a trail-runner courier at Slaughter Pen, a delivery-fleet smuggler at the Home Office).
4. **Canonical answer trio** — the warrant the player must submit: city/neighborhood, specific hideout, disguise.
5. **One verified fun fact** — short, surprising, and *specific* to that location. No generic regional trivia.

### Example: a Bentonville stop sketch

```
id: downtown-square
name: Downtown Square
district: Downtown Bentonville
theme: town square, Walton's Five & Dime, the fountain
puzzle: Cipher Decode (Caesar shift)
henchman:
  name: Wendell Walton-Krieg
  alias: The Quartermaster
  role: Antique-receipt forger working out of the old dime-store basement
answer:
  city: Downtown Bentonville
  hideout: Walton's Five & Dime Museum
  disguise: Town square fountain busker
fun fact: The original Walton's Five & Dime on the square is the building that became the Walmart Museum.
```

Do all eight on a single page before writing prose. It catches duplication (two stops that both want a "logic grid" puzzle) and ensures geographic spread.

---

## 4. Writing the Question Bank

Every case in `question-bank.json` must satisfy `docs/content-rubric.md`. Re-read it before drafting; the rubric is enforced by `tests/content-validation.test.js` and will fail your build if fields are missing or malformed.

The minimum shape per case:

```json
{
  "caseId": "downtown-square-classic",
  "briefing": {
    "headline": "FIVE & DIME HEIST!",
    "report": "...narrative tying the crime to the location. Carmen is already gone; the henchman is still here...",
    "callingCard": "...Carmen taunt sent from a distance...",
    "suspect": { "name": "...", "alias": "...", "emoji": "🎩", "role": "...", "dossierNote": "..." },
    "nextLead": "One sentence pointing at the next stop."
  },
  "clues": ["...", "...", "..."],
  "puzzle": {
    "title": "...",
    "description": "...",
    "question": "...",
    "options": ["A", "B", "C", "D"],
    "correctIndex": 0
  },
  "warrantAnswers": { "city": "...", "hideout": "...", "disguise": "..." },
  "funFact": "...",
  "learningObjective": "...",
  "sources": ["visit_bentonville"],
  "difficulty": "rookie | detective | inspector",
  "mechanic": "cipher-choice | map-coordinate-choice | ...",
  "regionTags": ["Downtown", "Bentonville"],
  "visualType": "built-in-visual",
  "accessibilityDescription": "...",
  "reviewStatus": "needs-source-review"
}
```

### Drafting heuristics

- **The answer must be inferable from at least two of the three clues.** This is a hard rule. Write the answer first, then the clues, then check.
- **Distractors should be plausible, not misleading.** All four options should make sense to someone unfamiliar with the location; only one should be defensible after reading the clues.
- **Carmen is offstage.** The player is chasing a henchman in this round. Save Carmen for the calling card taunt and the final confrontation. This rule is in the rubric and breaks tests if violated.
- **Fun facts must be location-specific.** "Bentonville has a town square" is not a fact; "the square's fountain has been the unofficial finish line of every Slaughter Pen Jam since 2008" is (verify before shipping).
- **Sources need real URLs.** Even if you mark `reviewed: false`, the source must exist. The validation test will accept unreviewed sources but flag them for the audit pass.

### How many cases per stop?

The Argentina bank has 3–4 randomized variants per location. Match that for replay value. The smoke test (`tests/run-generation.test.js`) exercises the random generator across all stops, so under-populating a stop will cause flaky test runs.

---

## 5. Map and Visual Considerations

Leaflet powers the map. For city-scale gameplay:

- Center on Bentonville (`36.3729, -94.2088`).
- Use a higher base zoom (13–14) so all eight pins are visible without zooming.
- Keep the dark CartoCDN basemap, or swap to a street-level light tile if the new palette warrants it. The visual system doc covers palette decisions.
- Each location's `lat`/`lng` in `bentonville-regions.json` must be the real coordinates of the venue — the map renders pins from this data directly.

If you change the basemap provider, update the attribution string in the footer.

---

## 6. Henchmen Roster

`scripts/apply-henchmen.js` copies the canon henchman definition from the regions JSON into every case in `question-bank.json`. The workflow:

1. Write the eight henchmen into `data/bentonville-regions.json` as part of each location entry.
2. Draft cases in `question-bank.json` with at minimum a `briefing.suspect` skeleton (or omit it and let the script fill defaults).
3. Run `node scripts/apply-henchmen.js` to sync. It overwrites case-level suspect fields with the canon roster, *except* for `dossierNote`, which is preserved if the case author wrote a round-specific version.

Design the eight henchmen as a *crew*. Give them complementary specialties (forger, courier, fixer, fence, smuggler, infiltrator, getaway driver, lookout). The dossier notes are the single best place to inject local color.

---

## 7. Validation Workflow

After the rewrite:

```sh
npm test
```

This runs four suites:

- `tests/smoke.test.js` — checks that the HTML shell and required data files load.
- `tests/content-validation.test.js` — enforces the content rubric across the bank.
- `tests/run-generation.test.js` — exercises the random case generator end-to-end.
- `tests/scoring.test.js` — pure scoring logic, unaffected by content.

The first two are the ones that fail noisily when a refactor is incomplete. Fix them in this order: smoke (file paths and HTML title), then content validation (per-case fields), then run-generation (generator selecting from the new bank).

Then manually playtest:

```sh
python3 -m http.server 8000
# open http://127.0.0.1:8000/
```

Walk a full case at each difficulty. Confirm: the map shows the right city; each pin lands on the right venue; clues read as locally authentic; warrants accept the answers; the final deduction puzzle resolves with the new clue tokens.

---

## 8. Suggested Order of Operations

1. Lock the eight stops and themes on a single page.
2. Assign one puzzle mechanic to each stop. Re-use the existing eight.
3. Draft the henchmen roster in `data/bentonville-regions.json`.
4. Rename files and update the code references (game.js fetch path, map center, HTML title, test paths). Confirm the smoke test passes against an empty bank.
5. Write the classic case variant for each stop. Get all eight playable end-to-end before adding variants.
6. Fact-check, source, and mark `reviewStatus` per case.
7. Add 2–3 randomized variants per stop.
8. Update the docs (`README`, `SPEC`, `ROADMAP`, content audit) so they reflect the new edition rather than the Argentina source.
9. Cross-browser and mobile playtest.

Doing steps 4 and 5 in that order — code rename first, then content — means you get the new shell working with a minimum viable bank before investing in the long content tail. If something is structurally wrong (e.g., the map doesn't recenter), you find out before writing 32 cases.
