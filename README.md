# Where in Bentonville is Carmen Sandiego?

A single-page detective game set across Bentonville, Arkansas. Track Carmen through eight local landmarks, inspect clues, solve a puzzle, and submit the correct arrest warrant before the case goes cold.

## Run Locally

Run a small local server from this folder:

```sh
python3 -m http.server 8000
```

Then visit:

```text
http://127.0.0.1:8000/
```

Opening `index.html` directly may work for the classic fallback case, but browser file-security rules can block the quiz-pack manifest and pack files. Use the local server for randomized cases.

## Controls

- Mouse or touch: select buttons, flip clue cards, choose puzzle answers, and submit warrant fields.
- Keyboard: use Tab to move through controls, Enter or Space to activate clue cards and buttons, and A/B/C/D or 1/2/3/4 to answer visible puzzle choices.
- Sound can be toggled from the header.

## Current MVP State

- Playable full case flow from title screen through final confrontation.
- Eight Bentonville locations with randomized case variants, dossiers, clues, puzzle choices, warrants, travel screens, and final results.
- LocalStorage save/resume, high scores, basic stats, clue tokens, and settings.
- Spec-aligned scoring for puzzle attempts, warrant bonus, streak bonus, final bonus, remaining-life bonus, and perfect-game bonus.
- Separate `styles.css` and `game.js` files for easier iteration.
- Interchangeable quiz packs under `data/packs/`, selected through `data/quiz-packs.json`.
- Mid-century cut-paper visual direction with flat geometric shapes and a high-fidelity Leaflet map.

## Content Packs

Available game content is listed in `data/quiz-packs.json`; each entry points to a self-contained pack in `data/packs/`. See `docs/quiz-pack-schema.md` for the contract. The Bentonville generator (`scripts/generate-bentonville-content.js`) writes a single artifact, `data/packs/bentonville.json`, which inlines locations, questions, and sources.

## MVP Roadmap

See `ROADMAP.md` for the full production-grade plan. The short version:

1. Accessibility hardening
   - Add a full screen-reader pass for maps, token inventory, and dynamically injected puzzle visuals.
   - Add reduced-motion and high-contrast toggles.
   - Raise the smallest map/token labels to a more readable mobile size.

2. Production reliability
   - Replace Tailwind CDN with built CSS or a checked-in stylesheet.
   - Decide whether Leaflet/CARTO tiles are acceptable dependencies or replace the map with the spec's self-contained SVG.
   - Add a lightweight smoke test for page load, puzzle solve, warrant submit, resume, and final score.

3. Puzzle depth
   - Convert the multiple-choice wrappers into the richer mechanics described in `SPEC.md`: cipher input, coordinate plotting, timeline ordering, logic grid, sequence map, jigsaw, compass movement, and final token deduction.
   - Keep A/B/C/D fallback choices available as an accessible mode.
   - Keep expanding the quiz pack with Bentonville-specific culture, trails, museums, food, public art, and history variants.

4. Score and progress UX
   - Add a high-score screen from the title menu.
   - Show round-by-round history on the final report.
   - Add explicit best-score comparison by difficulty.

5. Content polish
   - Fact-check all educational claims.
   - Normalize tone around ACME casework and avoid overly tactical language.
   - Add credits for map, font, and cultural references.

6. Launch cleanup
   - Cross-browser test Chrome, Safari, Firefox, and Edge.
   - Test desktop, tablet, and phone breakpoints.
   - Run a short playtest with fresh players and tune clue difficulty.
