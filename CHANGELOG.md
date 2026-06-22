# Changelog

Completed work, moved out of `ROADMAP.md` so the roadmap shows only what's left.
Grouped by roadmap area rather than by release (this project is pre-1.0 and unversioned).
Remaining work and scope cuts stay in `ROADMAP.md`.

## Completed (pre-1.0)

### Content
- Retargeted the playable edition to `Where in Bentonville is Carmen Sandiego?` with eight Bentonville stops and 40 source-linked case variants.
- Formalized the `question-bank.json` schema via `tests/content-validation.test.js` (required fields, unique `caseId`, option count, valid `correctIndex`, complete warrant answers).
- Added schema support for `learningObjective`, `sources`, `difficulty`, `mechanic`, `regionTags`, `visualType`, `accessibilityDescription`.
- Added content metadata fields to every current case; created the content rubric (`docs/content-rubric.md`).
- Split classic cases into the same JSON pipeline as randomized cases.
- Moved location metadata to `data/bentonville-regions.json` and citations to `data/sources.json`.
- Reached ≥3 cases per location (alpha) and ≥5 per location (beta); 40 cases total.
- Added a `sources` field per case, a release content-audit checklist, and a "needs revision" flag for uncertain claims.
- Normalized Spanish names and accents across the case bank.

### Gameplay
- Seeded case route per new game; seed + selected case IDs stored in LocalStorage; Case ID shown in the final report.
- Prevent immediate repetition of the same route on a new run; deterministic seeded-run tests.
- Hint inventory with cost, progressive hints (nudge / strong / explanation), hint usage tracked in scoring.
- High scores, game stats, high-score screen, case history, and "new randomized case" after completion.
- Standardized case structure (briefing, three clues, one puzzle, warrant, result explanation, educational card); predictable multiple-choice scoring; difficulty modes distinct beyond lives.

### Technical
- Split assets: `carmen-sandiego-bentonville.html`, `styles.css`, `game.js`, reusable `run-generator.js`, content in `question-bank.json`.
- **Replaced the Tailwind CDN with a local build** — `tailwind.build.css` from Tailwind v3 (`npm run build:css`, config in `tailwind.config.js`, input `tailwind.input.css`). No third-party script at runtime.
- Decided remote map tiles are acceptable for production; added graceful fallback if Leaflet or tile loading fails.
- Versioned LocalStorage save schema; stores case IDs, seed, difficulty, score, history, settings; validates saves before resume; migrates older saves; visible "clear broken save" recovery.
- Tests: content schema validation, seeded-run determinism, scoring, static smoke test for split assets (`npm test`, 14 passing).

### Accessibility
- Visible focus states; no drag-only interaction; correct/wrong answers now carry ✓/✗ glyphs (not color alone).
- Screen-reader alternatives for map and visual puzzles; `aria-live` for score and clue status.
- Reduced-motion and high-contrast settings; 44px minimum target rule documented and partially applied.
- Static a11y audit + fixes recorded in `docs/a11y-qa.md`.

### Visual
- Saul Bass-inspired cut-paper design language defined in `docs/visual-system.md`: final palette tokens, texture/shadow rules, flat poster geometry; applied to the current UI.

### Map
- Travel-route animation respects reduced motion; map text alternative lists current city, province, visited cities, and next destination.
- Kept Leaflet with remote tiles for fidelity (online production accepted).
