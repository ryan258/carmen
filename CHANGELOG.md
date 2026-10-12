# Changelog

## Unreleased — October 12, 2026 GitHub Pages hosting

- Publish the game at https://ryan258.github.io/carmen/ using a pinned official Actions workflow and an explicit runtime-file artifact. Relevant changes on `main` deploy automatically; manual dispatch is also available. Add a deployed-commit endpoint and a hosting/recovery guide.
- Confirm the first deployment succeeded for `af5c7b4`; the root, 14 application files and version endpoint returned HTTP 200, with matching application bytes and revision. Record this as publication evidence, separate from browser/AT, learner and test-suite results.
- Keep existing generated content/CSS, pack versions and review limits. Neither the workflow nor the agent runs tests or GitNexus analyze for this deployment. Ryan explicitly requested hosting; the publishing changes were committed and pushed for that purpose.

## Unreleased — October 12, 2026 post-commit graph reconciliation

- Record Ryan's successful GitNexus refresh at `84ae82d`: 861 nodes, 3,124 edges, 31 clusters and 73 flows. Archive the supplied console text and the complete read-only comparison against `c12e772`: 31 files, 109 symbols and 31 affected flows at critical impact, with no report-level error, partial or truncation flag.
- Replace stale pre-commit index status in README, roadmap and status/finish/reconciliation docs. Keep graph coverage distinct from the earlier version 4 40-test pass and version 3 50-test pass. No new runtime failure or code correction was identified.
- Review the clean starting tree and documentation follow-up; no submodules, gitlinks or nested source repositories are present. Ryan authorized a separate local documentation/evidence commit. No tests or GitNexus analyze were run by the agent, and no repeat run is needed solely to record this result.

## Unreleased — October 12, 2026 review and local commit grouping

- Review all accumulated runtime, test, content, generated-asset, companion-guide and documentation changes after `c12e772`; no new blocking defect found. Reopen the eight exemplar source pages and preserve their scoped review limits.
- Reconcile README, roadmap and documentation with the version 4 40-test pass, separate version 3 50-test evidence, newer existing graph metadata and remaining browser/editorial work. Clarify the focused authoring command versus README's optional full suite.
- Group local commits into runtime reliability, reviewed content with generated assets, and documentation/evidence. No submodules or nested source repositories are present. Ryan authorized these commits once; no push, publication or deployment is included. No tests or GitNexus analyze were run by the agent.

## Unreleased — October 12, 2026 eight-case reviewed exemplar

- Rewrite four cases per pack with primary-source passage evidence, explicit fiction boundaries, observable learning objectives, three hints and explanations for every distractor. Record Codex as the AI-assisted reviewer; 72 case reviews remain pending.
- Add a self-contained companion guide with the eight prompts, progressive hints, answer keys, source/claim ledger, transfer questions and observation criteria. The regular game still uses its full seeded pools; this is not a new Study mode or case picker.
- Replace weak geographic decoys with mistakes involving partial evidence, dates/places, missing route links, adaptive reuse, overclaiming, chronology and part/whole distinctions. Remove unsupported details from the selected cases.
- Advance both pack content versions from 3 to 4 because answers change. Keep schema 5 and stable case IDs; version 3 saves cannot resume against version 4 packs.
- Regenerate Bentonville JSON and its exact fallback. Make the authoring test's missing-evidence fixture explicit now that its first case is reviewed, and exercise unreviewed-source rejection.
- Content generation completed. The agent ran no tests, syntax/content checks, browser checks or GitNexus analyze. Ryan's earlier 50/50 result applies to the preceding version 3 correction tree. See [current evidence](docs/remediation-status.md).
- Ryan subsequently completed the exemplar GitNexus refresh: 856 nodes, 3,113 edges, 31 clusters and 73 flows. The complete read-only change report has 23 tracked changed files, 70 symbols and 31 affected flows, with critical impact and no error/partial/truncation flag. No runtime or content correction follows from the graph output alone.
- Record Ryan's separate Node v26.7.0 version 4 verification: syntax PASS, content/fallback PASS (80 cases, 72 pending reviews), and 40/40 focused tests PASS with no failures, cancellations, skips or todos. Archive the complete transcript and reconcile status docs. The deliberate `No network in harness` diagnostics accompanied passing fallback scenarios; no code repair is indicated. This follow-up changes documentation/evidence only; full-suite, browser/AT and human-learning evidence remain open.

## Unreleased — October 12, 2026 first correction pass after c12e772

- Preserve c12e772's combined Case File, legacy saved-tab mapping, warrant help and reduced-motion-aware approval stamp.
- Require explicit saved-case replacement, initially focus Keep saved case, and reject stale or cancelled consent.
- Add persistent Answer shortcuts, off by default, with typing/modifier/repeat/composition exclusions.
- Require at least four selected stops for the four-option token finale and save contract.
- Distinguish pending/failed Leaflet, failed tiles and selected text route; handle late readiness and explicit retry using the pinned script source.
- Correct warrant difficulty copy, local-accomplice wording and the identified Argentina prompt/headline inconsistencies.
- Reconcile the review and evidence record; add focused regression cases and browser acceptance steps. Ryan subsequently supplied passing syntax/content checks and 50/50 focused tests, including all 12 new correction regressions. GitNexus rebuilt successfully (835 nodes, 3,079 edges, 31 clusters, 71 flows); change detection reports critical impact across 17 tracked files, 51 symbols and 31 flows. The verification follow-up changed documentation only; the agent ran no tests or analyze. Browser/AT and editorial evidence remain open. See [current evidence](docs/remediation-status.md).

## Unreleased — October 3, 2026 review remediation

- Protect stale save writes, completion cleanup and abort confirmation; close dialogs when another tab changes progress.
- Add explicit Continue, Pause and Text route controls; shorten warrant lists and match visible/accessible answer names.
- Resolve final questions from selected cases and share the answer contract with save validation. Save schema is 5; pack content versions are 3.
- Fix duplicated HTML IDs, content contradictions and canonical place labels; author progressive hints and worked reasoning.
- Preserve authoring review metadata and tokens; validate manifests/fallback equality; replace generated outputs atomically.
- Extract map/records adapters; remove obsolete helpers, fixed finale trivia, unused travel animation and font/theme defaults.
- Expand the real-page boundary harness and regressions. Verified offline via `npm run verify` (52/52 passing tests, syntax and content checks).
- Reframe docs for personal use and consolidate evidence in `docs/remediation-status.md`.

## Unreleased — verification and dependency follow-up

- Ryan supplied passing syntax/content/CSS-build results and 43/43 tests, plus successful GitNexus indexing (737 nodes, 2,474 edges).
- Updated the lockfile from PostCSS 8.5.15 to 8.5.28 and Nano ID to 3.3.19 to address the reported dependency advisories.
- Declared local Autoprefixer and cssnano builds, retaining Tailwind 3 and making browser-data dependencies explicitly maintainable.
- The updated lockfile audit reports zero vulnerabilities.
- Ryan subsequently confirmed the updated dependency installation, a successful CSS rebuild without the Browserslist warning, zero installed-tree audit vulnerabilities, and 7/7 smoke tests passing.
- Browser and editorial evidence remain open. The follow-up changed build dependency manifests and documentation; the supplied smoke results are a repeated subset of the original 43 tests.

## Unreleased — October 2, 2026 remediation

- Added strict schema-4 resume with exact round state, phase/input guards, cancellable callbacks, pack-load gating, and defensive local persistence.
- Separated records by route length/content version; adapted short routes and final token questions; corrected final failure explanations.
- Corrected identified content contradictions and answer leaks, added explanations/source links, and enforced a separate editorial release gate.
- Added semantic forms/tabs/dialog behavior, readable tokens, narrow-screen wrapping, surface colors, and reduced-motion cleanup.
- Replaced the failing default tile service with configurable OSM tiles and attribution, pack zoom, and persistent map fallback.
- Extracted production rules/contracts/storage/scheduling, generated the full fallback from canonical content, and added production-function regression tests.
- Reconciled the current documentation; the original broad spec is archived. Historical entries below describe earlier states and do not establish current verification.

Verification: tests, browser checks, syntax checks, and GitNexus analyze were deliberately left for Ryan to run. Content generation and whitespace inspection are not behavioral proof. See `docs/remediation-status.md` for commands, scope, and remaining gates.


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
