# Production Roadmap

## Goal

Build a production-grade Argentina edutainment detective game that is coherent as a game, accurate as educational material, and polished enough to replay. The finished game should feel like one intentional work: a Carmen-inspired geography mystery with a mid-century cut-paper visual language, high-fidelity Argentina mapping, meaningful puzzle variety, and trustworthy cultural content.

## Product Principles

1. Every case teaches something real.
   - Each location must teach geography, history, culture, ecology, food, music, architecture, or civic life.
   - The answer should be inferable from clues, not trivia guessing.
   - Fun facts must be fact-checked and tied to the solved case.

2. Every run should feel different but fair.
   - Randomness should change cases, clues, puzzles, and warrant answers.
   - Randomness must not create impossible combinations.
   - Resume must preserve the selected run so reloading never changes the active case.

3. Every puzzle should have a reason to exist.
   - Puzzle mechanics should match the subject matter: maps for geography, timelines for travel/history, logic grids for suspects, pattern puzzles for routes, and visual reconstruction for landmarks.
   - Multiple choice can remain as an accessibility fallback, but it should not be the only production mode.

4. The map must remain geographically credible.
   - City markers must use real coordinates.
   - Travel should preserve Argentina's real north-south/east-west relationships.
   - Stylized overlays are allowed, but they must not distort the core map.

5. The aesthetic should be bold, not noisy.
   - Use Saul Bass-inspired cut-paper geometry, hard edges, strong silhouettes, limited color, and poster-like typography.
   - Avoid making the map unreadable.
   - The interface should feel like an interactive case file, not a generic quiz.

## Coherence Targets

### Narrative Coherence

- Define a consistent Carmen motive, calling-card language, and escalation arc.
- Make each city case part of the same larger chase.
- Ensure final confrontation uses clues collected throughout the run, not unrelated boss questions.
- Replace generic wording with consistent ACME casework terminology.

### Educational Coherence

- Create a content rubric for every question:
  - Location or region
  - Learning objective
  - Source to verify
  - Clue trail
  - Correct answer
  - Plausible distractors
  - Fun fact
  - Sensitivity review notes
- Avoid reducing Argentina to only tourist landmarks; include regional diversity, Indigenous context where appropriate, urban culture, ecology, literature, science, foodways, and migration history.
- Distinguish Argentina-specific facts from broader Latin American generalities.

### Mechanical Coherence

- Standardize each case around:
  - Briefing
  - Three inspectable clues
  - One puzzle
  - Warrant fields
  - Result explanation
  - Educational card
- Make scoring predictable across all mechanics.
- Keep difficulty modes meaningful:
  - Rookie: more guidance, fewer decoys, optional A/B/C/D fallback.
  - Detective: standard puzzle mechanics.
  - Inspector: fewer hints, stronger decoys, extra puzzle step.

### Visual Coherence

- Establish a design system:
  - Color tokens
  - Type scale
  - Button states
  - Card/case-file layouts
  - Cutout shape vocabulary
  - Map marker states
  - Motion rules
- Keep all case illustrations in the same cut-paper/poster vocabulary.
- Replace emoji-led visuals with deliberate vector/CSS/bitmap assets where needed.

## Content Roadmap

### Phase 1: Content Model

- Formalize `question-bank.json` schema.
- Add validation for required fields, unique `caseId`, option count, valid `correctIndex`, and complete warrant answers.
- Add support for:
  - `learningObjective`
  - `sources`
  - `difficulty`
  - `mechanic`
  - `regionTags`
  - `visualType`
  - `accessibilityDescription`
- Split classic cases into the same JSON format so all cases share one pipeline.

### Phase 2: Breadth

- Expand each existing location to at least 5 cases.
- Add optional case pools for more Argentine regions:
  - Jujuy
  - Tucuman
  - Rosario
  - Mar del Plata
  - Peninsula Valdes
  - El Chalten
  - La Plata
  - San Juan
  - Esteros del Ibera
  - Tierra del Fuego National Park
- Target at least 50 total cases before calling the content production-grade.

### Phase 3: Fact-Checking

- Add a source field for every educational claim.
- Review all facts against reliable sources.
- Mark uncertain claims as needing revision instead of shipping them.
- Add a content audit checklist before release.

### Phase 4: Localization And Language

- Normalize Spanish names and accents.
- Add pronunciation or short language notes where helpful.
- Consider optional Spanish UI after English production quality is stable.

## Gameplay Roadmap

### Phase 1: Better Randomized Runs

- Generate a seeded case route per new game.
- Store seed and selected case IDs in LocalStorage.
- Add a "Case ID" to final report for replay/debugging.
- Prevent immediate repetition of the same cases when starting a new run.

### Phase 2: Puzzle Engines

Replace multiple-choice-only gameplay with real mechanics:

1. Cipher engine
   - Typed answer
   - Real-time character feedback
   - Accessible fallback choices

2. Coordinate/map engine
   - Click/tap coordinate placement
   - Text-based coordinate fallback
   - Real map relation preserved

3. Timeline engine
   - Drag/drop ordering
   - Keyboard reorder controls

4. Logic grid engine
   - Mark yes/no/unknown cells
   - Conflict detection
   - Screen-reader-friendly table mode

5. Pattern route engine
   - Predict waypoint
   - Explain pattern after answer

6. Visual reconstruction engine
   - Jigsaw or evidence assembly
   - Click-based fallback

7. Compass/navigation engine
   - Grid movement
   - Terrain constraints
   - Text route fallback

8. Final deduction engine
   - Use collected run-specific clues
   - Require synthesis across locations

### Phase 3: Difficulty And Hints

- Add hint inventory and hint cost.
- Add progressive hints:
  - Nudge
  - Strong hint
  - Explanation
- Track hint usage in scoring.
- Tune lives/attempts per difficulty.

### Phase 4: Replay And Progress

- Add high-score screen.
- Add case history.
- Add "new randomized case" option after completion.
- Add achievements only if they reinforce learning or replay.

## Technical Roadmap

### Phase 1: Asset And File Structure

Target structure:

```text
carmen/
├── index.html
├── carmen-sandiego-argentina.html
├── styles.css
├── game.js
├── question-bank.json
├── data/
│   ├── classic-cases.json
│   ├── argentina-regions.json
│   └── sources.json
├── tests/
│   ├── content-validation.test.js
│   ├── scoring.test.js
│   └── smoke.test.js
└── docs/
    ├── content-rubric.md
    └── visual-system.md
```

### Phase 2: Remove Runtime Fragility

- Replace Tailwind CDN with built or checked-in CSS.
- Decide whether external map tiles are acceptable for production.
- If offline/archival play matters, build a self-contained SVG map mode.
- Add graceful fallback if Leaflet or tile loading fails.

### Phase 3: State Management

- Version LocalStorage schema.
- Add migration for older saves.
- Store selected case IDs, seed, difficulty, score, history, and settings.
- Validate saves before resume.
- Add "clear broken save" recovery.

### Phase 4: Testing

- Add content schema validation.
- Add deterministic seeded-run tests.
- Add scoring tests for all attempt/hint/streak combinations.
- Add smoke test:
  - Page load
  - Start game
  - Flip clues
  - Solve one case
  - Submit warrant
  - Resume checkpoint
  - Complete final report
- Add browser accessibility smoke checks.

## Accessibility Roadmap

### Required Before Production

- Full keyboard support for every mechanic.
- Visible focus state for every interactive element.
- No interaction that requires drag only.
- No information conveyed by color alone.
- Screen-reader alternatives for map and visual puzzles.
- `aria-live` for score, clue collection, puzzle result, and travel status.
- Reduced-motion setting.
- High-contrast setting.
- Minimum 44px targets.
- Text that remains readable at 200% zoom.

### Accessibility QA

- Test with keyboard only.
- Test with browser zoom at 200%.
- Test reduced motion.
- Test at mobile width.
- Run automated checks, then do manual review for puzzle semantics.

## Visual Design Roadmap

### Phase 1: Art Direction Lock

- Define the Saul Bass-inspired design language in `docs/visual-system.md`.
- Choose final palette:
  - Ink
  - Paper
  - Carmen red
  - Mustard
  - Teal
  - Map blue
- Define acceptable texture and shadow rules.
- Replace generic gradients and glow effects with flat poster geometry.

### Phase 2: Interface Pass

- Redesign title, difficulty, case file, warrant, result, and final report screens as one system.
- Make map panel feel integrated with the poster/case-file layout.
- Remove visual leftovers from the previous glass/parchment style.

### Phase 3: Evidence Art

- Create reusable cutout evidence components:
  - Monument
  - Mountain
  - Waterfall
  - Train
  - Book
  - Lighthouse
  - Glacier
  - Compass
  - Ticket
  - Calling card
- Ensure every case has a visual that supports the clue, not just decoration.

## Map Roadmap

### Production Requirements

- Marker coordinates must be verified.
- Labels must not overlap badly on mobile.
- Travel route must animate clearly but respect reduced motion.
- Map must have a text alternative listing:
  - Current city
  - Province
  - Visited cities
  - Next destination when known

### Future Options

- Keep Leaflet with remote tiles for best fidelity.
- Add self-contained SVG map fallback for offline play.
- Add provincial boundaries and region labels once visual clarity is solved.

## Quality Gates

### Alpha Gate

- Full loop works with randomized cases.
- At least 3 cases per location.
- Save/resume works with case IDs.
- No known blocking runtime errors.

### Beta Gate

- At least 5 cases per location.
- At least 4 real puzzle engines implemented.
- Content schema validation passes.
- Accessibility baseline passes.
- High-score and final report complete.

### Release Candidate Gate

- 50+ fact-checked cases.
- All core puzzle engines implemented or deliberately cut.
- Cross-browser smoke tests pass.
- Mobile, tablet, and desktop layouts reviewed.
- No external dependency failure causes a blank game.
- Credits and sources are included.

### Production Gate

- Fresh-player playtest complete.
- Difficulty tuned from playtest data.
- Content reviewed for accuracy and cultural sensitivity.
- Performance acceptable on mid-range mobile hardware.
- Known issues documented.

## Immediate Next Work

1. Add JSON schema validation for `question-bank.json`.
2. Move classic cases into JSON so all cases share one data pipeline.
3. Add a seeded random run generator.
4. Add 2-3 more cases per existing location.
5. Build the first real puzzle engine: cipher or timeline.
6. Write `docs/visual-system.md`.
7. Replace Tailwind CDN or commit a production stylesheet plan.

## Definition Of Done

The game is production-grade when a new player can complete a full randomized run, learn accurate Argentina-specific material, understand why each answer is correct, replay a meaningfully different case, use the game with keyboard and assistive technology, and experience a coherent visual/narrative style from title screen to final report.
