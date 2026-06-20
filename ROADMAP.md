# Production Roadmap

Build a production-grade Argentina edutainment detective game that is coherent as a game, accurate as educational material, and polished enough to replay. The finished game should feel like one intentional work: a Carmen-inspired geography mystery with a mid-century cut-paper visual language, high-fidelity Argentina mapping, meaningful puzzle variety, and trustworthy cultural content.

Completed work has moved to [CHANGELOG.md](CHANGELOG.md); this file tracks only what's left
plus deliberate scope cuts.

## Reality Check (2026-06-20)

The game already meets most of its own Definition of Done: a full randomized run plays,
results explain themselves, cases replay differently, and tests pass (`npm test`, 0 fail).
Items marked **Cut (YAGNI)** were closed by decision, not code.

Recently completed (see CHANGELOG): Tailwind CDN replaced with a local build; accessibility
static audit + color-alone fix; post-review hardening — warrant submission made idempotent,
keyboard shortcuts now respect locked answer buttons, `LOCATION_SYMBOLS` coverage test added,
Tailwind-CDN guard smoke test added, stale difficulty/dependency copy corrected.

What genuinely still needs building (no shortcut exists — these are real work):

1. **Puzzle engines** (Gameplay Phase 2) — everything is multiple-choice today. Biggest single lift.
2. **Fact-checking + breadth to 50 cases** (Content Phases 2–3) — 40 cases now, none source-verified line by line.
3. **Accessibility QA** (Accessibility Roadmap) — static audit done; interactive keyboard/zoom/reduced-motion/mobile testing still needs a human (`docs/a11y-qa.md`).

The remaining unchecked boxes below split into two kinds: **big features** (1–2 above) and
**manual QA a human must confirm** — the latter are gathered in `docs/manual-qa.md`.
Pick one feature to start; don't try to clear the whole board at once.

## Product Principles

- [ ] Every case teaches something real and inferable from clues.
- [ ] Every puzzle mechanic has a reason to exist.
- [ ] The map remains geographically credible.

## Coherence Targets

### Narrative Coherence

- [ ] Define a consistent Carmen motive, calling-card language, and escalation arc.
- [ ] Make each city case part of the same larger chase.
- [ ] Ensure the final confrontation uses clues collected throughout the run.
- [ ] Replace generic wording with consistent ACME casework terminology.

### Educational Coherence

- [ ] Fact-check every educational claim against reliable sources.
- [ ] Avoid reducing Argentina to only tourist landmarks by expanding regional and cultural breadth.
- [ ] Distinguish Argentina-specific facts from broader Latin American generalities.

### Mechanical Coherence

- [ ] Build richer puzzle engines beyond multiple choice.

### Visual Coherence

- [ ] Keep all case illustrations in the same cut-paper/poster vocabulary.
- [ ] Replace all emoji-led visuals with deliberate vector, CSS, or bitmap evidence art where needed.

## Content Roadmap

### Phase 1: Content Model

_Complete — see CHANGELOG._

### Phase 2: Breadth

- [ ] Add optional case pools for Jujuy, Tucuman, Rosario, Mar del Plata, Peninsula Valdes, El Chalten, La Plata, San Juan, Esteros del Ibera, and Tierra del Fuego National Park.
- [ ] Reach at least 50 total cases before calling the content production-grade.

### Phase 3: Fact-Checking

- [ ] Add reviewed source entries for every educational claim.

### Phase 4: Localization And Language

- [ ] Add pronunciation or short language notes where helpful.
- [x] **Cut (YAGNI):** optional Spanish UI — speculative, build only if a real Spanish-speaking audience appears.

## Gameplay Roadmap

### Phase 1: Better Randomized Runs

_Complete — see CHANGELOG._

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

- [ ] Tune lives and attempts per difficulty.

### Phase 4: Replay And Progress

- [x] **Cut (YAGNI):** learning-focused achievements — already gated on "only if," no evidence it drives replay.

## Technical Roadmap

### Phase 1: Asset And File Structure

_Complete — see CHANGELOG._

- [x] **Cut (YAGNI):** further data-file splits — `argentina-regions.json` and `sources.json` already exist; single bank hasn't outgrown anything.

### Phase 2: Remove Runtime Fragility

_Complete — see CHANGELOG._

- [x] **Cut (YAGNI):** self-contained SVG map mode — gated on offline/archival mattering, which it doesn't for a web toy.

### Phase 3: State Management

_Complete — see CHANGELOG._

### Phase 4: Testing

- [ ] Add browser smoke test for full game flow.
- [ ] Add browser accessibility smoke checks.
- [x] **Cut (YAGNI):** exhaustive hint-combination scoring tests — `scoring.test.js` covers the rule; combinatorial coverage is over-testing.

## Accessibility Roadmap

### Required Before Production

- [ ] Full keyboard support for every mechanic.
- [ ] Text remains readable at 200% zoom across all screens.

### Accessibility QA

Run the interactive checklist in [docs/a11y-qa.md](docs/a11y-qa.md) and tick these after.

- [ ] Test with keyboard only.
- [ ] Test with browser zoom at 200%.
- [ ] Test reduced motion.
- [ ] Test at mobile width.
- [ ] Run automated checks, then do manual review for puzzle semantics.

## Visual Design Roadmap

### Phase 1: Art Direction Lock

_Complete — see CHANGELOG._

### Phase 2: Interface Pass

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

### Future Options

- [x] **Cut (YAGNI):** self-contained SVG map fallback — duplicate of the offline-map item above; same reasoning.
- [x] **Cut (YAGNI):** provincial boundaries/region labels — gated on "once visual clarity solved," pure polish.

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

- [ ] Build the first real puzzle engine: cipher or timeline.

## Definition Of Done

The game is production-grade when a new player can complete a full randomized run, learn accurate Argentina-specific material, understand why each answer is correct, replay a meaningfully different case, use the game with keyboard and assistive technology, and experience a coherent visual/narrative style from title screen to final report.
