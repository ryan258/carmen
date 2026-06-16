# Production Roadmap

Build a production-grade Argentina edutainment detective game that is coherent as a game, accurate as educational material, and polished enough to replay. The finished game should feel like one intentional work: a Carmen-inspired geography mystery with a mid-century cut-paper visual language, high-fidelity Argentina mapping, meaningful puzzle variety, and trustworthy cultural content.

## Product Principles

- [ ] Every case teaches something real and inferable from clues.
- [x] Every run feels different but fair.
- [ ] Every puzzle mechanic has a reason to exist.
- [ ] The map remains geographically credible.
- [x] The art direction is established as Saul Bass-inspired cut-paper poster design.

## Coherence Targets

### Narrative Coherence

- [ ] Define a consistent Carmen motive, calling-card language, and escalation arc.
- [ ] Make each city case part of the same larger chase.
- [ ] Ensure the final confrontation uses clues collected throughout the run.
- [ ] Replace generic wording with consistent ACME casework terminology.

### Educational Coherence

- [x] Create a content rubric in `docs/content-rubric.md`.
- [x] Add content metadata fields to every current case.
- [ ] Fact-check every educational claim against reliable sources.
- [ ] Avoid reducing Argentina to only tourist landmarks by expanding regional and cultural breadth.
- [ ] Distinguish Argentina-specific facts from broader Latin American generalities.

### Mechanical Coherence

- [x] Standardize each case around briefing, three clues, one puzzle, warrant fields, result explanation, and educational card.
- [x] Make scoring predictable for current multiple-choice mechanics.
- [x] Make difficulty modes mechanically distinct beyond lives.
- [ ] Build richer puzzle engines beyond multiple choice.

### Visual Coherence

- [x] Establish a design system in `docs/visual-system.md`.
- [ ] Keep all case illustrations in the same cut-paper/poster vocabulary.
- [ ] Replace all emoji-led visuals with deliberate vector, CSS, or bitmap evidence art where needed.

## Content Roadmap

### Phase 1: Content Model

- [x] Formalize the `question-bank.json` schema through `tests/content-validation.test.js`.
- [x] Add validation for required fields, unique `caseId`, option count, valid `correctIndex`, and complete warrant answers.
- [x] Add support for `learningObjective`, `sources`, `difficulty`, `mechanic`, `regionTags`, `visualType`, and `accessibilityDescription`.
- [x] Split classic cases into the same JSON pipeline as randomized cases.
- [x] Move location metadata into dedicated `data/argentina-regions.json`.
- [x] Move citation entries into dedicated `data/sources.json`.

### Phase 2: Breadth

- [x] Reach at least 3 cases per existing location for the alpha gate.
- [x] Expand each existing location to at least 5 cases.
- [ ] Add optional case pools for Jujuy, Tucuman, Rosario, Mar del Plata, Peninsula Valdes, El Chalten, La Plata, San Juan, Esteros del Ibera, and Tierra del Fuego National Park.
- [ ] Reach at least 50 total cases before calling the content production-grade.

### Phase 3: Fact-Checking

- [x] Add a `sources` field for every case.
- [ ] Add reviewed source entries for every educational claim.
- [x] Mark uncertain claims as needing revision instead of shipping them.
- [x] Add a release content audit checklist.

### Phase 4: Localization And Language

- [x] Normalize Spanish names and accents for the current case bank.
- [ ] Add pronunciation or short language notes where helpful.
- [ ] Consider optional Spanish UI after English production quality is stable.

## Gameplay Roadmap

### Phase 1: Better Randomized Runs

- [x] Generate a seeded case route per new game.
- [x] Store seed and selected case IDs in LocalStorage.
- [x] Add a Case ID to the final report for replay/debugging.
- [x] Prevent immediate repetition of the same case route when starting a new run where possible.
- [x] Add deterministic seeded-run tests.

### Phase 2: Puzzle Engines

- [ ] Cipher engine with typed answer, real-time feedback, and accessible choices.
- [ ] Coordinate/map engine with click/tap placement and text fallback.
- [ ] Timeline engine with drag/drop and keyboard reorder controls.
- [ ] Logic grid engine with yes/no/unknown cells and table mode.
- [ ] Pattern route engine with explanation after answer.
- [ ] Visual reconstruction engine with click-based fallback.
- [ ] Compass/navigation engine with grid movement and text route fallback.
- [ ] Final deduction engine based on collected run-specific clues.

### Phase 3: Difficulty And Hints

- [x] Add hint inventory and hint cost.
- [x] Add progressive hints: nudge, strong hint, explanation.
- [x] Track hint usage in scoring.
- [ ] Tune lives and attempts per difficulty.

### Phase 4: Replay And Progress

- [x] Store high scores.
- [x] Store basic game stats.
- [x] Add high-score screen.
- [x] Add case history.
- [x] Add "new randomized case" option after completion.
- [ ] Add learning-focused achievements only if they reinforce replay.

## Technical Roadmap

### Phase 1: Asset And File Structure

- [x] Keep HTML in `carmen-sandiego-argentina.html`.
- [x] Break CSS into `styles.css`.
- [x] Break game behavior into `game.js`.
- [x] Move reusable seeded-run behavior into `run-generator.js`.
- [x] Move case content into `question-bank.json`.
- [x] Add `tests/content-validation.test.js`.
- [x] Add `tests/scoring.test.js`.
- [x] Add `tests/run-generation.test.js`.
- [x] Add `tests/smoke.test.js`.
- [x] Add `docs/content-rubric.md`.
- [x] Add `docs/visual-system.md`.
- [ ] Add `data/classic-cases.json`, `data/argentina-regions.json`, and `data/sources.json` if the project outgrows the single question bank.

### Phase 2: Remove Runtime Fragility

- [ ] Replace Tailwind CDN with built or checked-in CSS.
- [x] Decide whether external map tiles are acceptable for production.
- [ ] Build a self-contained SVG map mode if offline/archival play matters.
- [x] Add graceful fallback if Leaflet or tile loading fails.

### Phase 3: State Management

- [x] Version LocalStorage save schema.
- [x] Store selected case IDs, seed, difficulty, score, history, and settings.
- [x] Validate saves before resume.
- [x] Add migration for older saves.
- [x] Add visible "clear broken save" recovery.

### Phase 4: Testing

- [x] Add content schema validation.
- [x] Add deterministic seeded-run tests.
- [x] Add scoring tests for current scoring rules.
- [x] Add static smoke test for split assets.
- [ ] Add browser smoke test for full game flow.
- [ ] Add browser accessibility smoke checks.
- [ ] Add scoring tests for all future hint combinations once hints exist.

## Accessibility Roadmap

### Required Before Production

- [ ] Full keyboard support for every mechanic.
- [x] Visible focus state for current interactive controls.
- [x] No current interaction requires drag only.
- [ ] No information conveyed by color alone.
- [x] Screen-reader alternatives for map and visual puzzles.
- [x] `aria-live` coverage for current score and clue status.
- [x] Reduced-motion setting.
- [x] High-contrast setting.
- [x] Minimum 44px target rule documented and partially applied.
- [ ] Text remains readable at 200% zoom across all screens.

### Accessibility QA

- [ ] Test with keyboard only.
- [ ] Test with browser zoom at 200%.
- [ ] Test reduced motion.
- [ ] Test at mobile width.
- [ ] Run automated checks, then do manual review for puzzle semantics.

## Visual Design Roadmap

### Phase 1: Art Direction Lock

- [x] Define the Saul Bass-inspired design language in `docs/visual-system.md`.
- [x] Choose final palette tokens.
- [x] Define acceptable texture and shadow rules.
- [x] Replace the main visual direction with flat poster geometry.

### Phase 2: Interface Pass

- [x] Apply the cut-paper direction to the current UI.
- [ ] Redesign title, difficulty, case file, warrant, result, and final report screens as one fully resolved system.
- [ ] Make the map panel feel integrated with the poster/case-file layout.
- [ ] Remove remaining visual leftovers from the previous glass/parchment style.

### Phase 3: Evidence Art

- [ ] Create reusable cutout evidence components for monument, mountain, waterfall, train, book, lighthouse, glacier, compass, ticket, and calling card.
- [ ] Ensure every case visual supports the clue, not just decoration.

## Map Roadmap

### Production Requirements

- [ ] Verify every marker coordinate.
- [ ] Ensure labels do not overlap badly on mobile.
- [x] Ensure travel route animation respects reduced motion.
- [x] Add a map text alternative listing current city, province, visited cities, and next destination when known.

### Future Options

- [x] Keep Leaflet with remote tiles for best fidelity if online production is acceptable.
- [ ] Add self-contained SVG map fallback for offline play.
- [ ] Add provincial boundaries and region labels once visual clarity is solved.

## Quality Gates

### Alpha Gate

- [x] Full loop works with randomized cases.
- [x] At least 3 cases per location.
- [x] Save/resume works with case IDs.
- [x] No known blocking runtime errors after browser smoke verification.

### Beta Gate

- [x] At least 5 cases per location.
- [ ] At least 4 real puzzle engines implemented.
- [x] Content schema validation passes.
- [ ] Accessibility baseline passes.
- [x] High-score and final report complete.

### Release Candidate Gate

- [ ] 50+ fact-checked cases.
- [ ] All core puzzle engines implemented or deliberately cut.
- [ ] Cross-browser smoke tests pass.
- [ ] Mobile, tablet, and desktop layouts reviewed.
- [ ] No external dependency failure causes a blank game.
- [ ] Credits and sources are included.

### Production Gate

- [ ] Fresh-player playtest complete.
- [ ] Difficulty tuned from playtest data.
- [ ] Content reviewed for accuracy and cultural sensitivity.
- [ ] Performance acceptable on mid-range mobile hardware.
- [ ] Known issues documented.

## Immediate Next Work

- [x] Add JSON schema validation for `question-bank.json`.
- [x] Move classic cases into JSON so all cases share one data pipeline.
- [x] Add a seeded random run generator.
- [x] Add 2 more cases per existing location to reach beta breadth.
- [ ] Build the first real puzzle engine: cipher or timeline.
- [x] Write `docs/visual-system.md`.
- [x] Replace Tailwind CDN or commit a production stylesheet plan.

## Definition Of Done

The game is production-grade when a new player can complete a full randomized run, learn accurate Argentina-specific material, understand why each answer is correct, replay a meaningfully different case, use the game with keyboard and assistive technology, and experience a coherent visual/narrative style from title screen to final report.
