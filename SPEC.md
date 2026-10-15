# Current implementation contract

This file describes the local personal preview with 12 packs. The last recorded [GitHub Pages preview](https://ryan258.github.io/carmen/) contains the original two packs. The [deployment guide](docs/deployment.md) describes update behavior. The [original design](docs/archive/original-spec.md) remains historical intent; unimplemented mechanics there are not current functionality.

## Product and content

A personal-use geography and evidence-matching quiz in an unofficial fictional ACME setting. Twelve first-party packs each have eight locations. Bentonville and Argentina each contain 40 cases at content version 4; Northwest Arkansas and NWA Mountain Biking each contain 24 at version 2; the other eight packs each contain 24 at version 1 (320 cases total). The newest six are Ozark Waterways, Arkansas Delta, American National Parks, Railroads & Depots, Architecture & Hidden Details, and Museums & Missing Labels. Each run uses the first 4, 6 or 8 stops, selects one case per stop with a seed and shuffles its answer choices. Difficulty changes lives and hints, not the authored pool. The newest cases use text-only source notes, fictional exercise records and explicit desk/disguise warrants. Routes are curated archive sequences with approximate pins, not travel itineraries.

There is one four-option engine. It can present cipher, arithmetic, sequence, chronology, and deduction questions as text. Interactive plotting, dragging, typed ciphers, and logic grids are not implemented. Neither ages nor completion-time estimates have been established by a player study.

Eight original-pack exemplars have AI-assisted source/editorial review dated October 12, 2026. The 48 NWA cases have reviews dated October 13; all 192 parks, Route 66 and six-concept cases have reviews dated October 14. The total is 248 reviewed and 72 original-pack cases pending. The [six-concept ledger](docs/remaining-packs-review.md), [parks/highway ledger](docs/parks-route66-review.md), [NWA ledger](docs/content-audit.md) and [original exemplar](docs/reviewed-exemplar.md) record claim scope, source passages, keys and companion transfer activities. Cases remain in their normal seeded pools; no direct case picker or reviewed-only route is implemented. Transfer questions are untracked companion activities. Exact map-pin accuracy, live access and human acceptance remain separate from the case review.

## State transitions

`idle → investigation → between → investigation … → final → complete`

- Investigation starts with the case file (briefing and clues on one tab) and puzzle available. A saved `clues` tab from earlier builds opens the case file. The warrant unlocks only after a correct answer.
- Correct puzzle and final answers wait for explicit Continue, including after resume. The established location is prefilled for all difficulties; warrant choices are limited to the current stop.
- Wrong input locks until feedback ends; input handlers enforce phase as well as disabled controls.
- A successful warrant awards points and records one capture, saves the **between** phase at the same index, and shows the APPROVED stamp briefly (none under reduced motion) before the report appears. Advancing starts the next stop or the final report.
- The final report has three rounds: the selected first case, a selected middle case, and the last selected stop's earned token. It takes place at headquarters, so short routes do not imply visiting skipped locations.
- Zero lives ends the case. Terminal handlers are idempotent within a session; record/stat writes identify the run.
- Restart, title navigation, new runs, and pack replacement cancel pending session callbacks. Dialogs pause delayed delivery. Pack loading blocks start/resume until the latest request settles or falls back.
- Any existing save requires an explicit replacement choice before a new case starts. Keep saved case receives initial focus. Confirmation is bound to the exact saved value, selected pack, and route; Escape and storage events invalidate it.

## Scoring

Puzzle points are 100/75/50 for zero/one/two previous mistakes, then 25. Each hint subtracts 15 from puzzle credit, with a 25-point floor. Warrants award 50. From the third consecutive capture, the streak bonus is `(streak − 2) × 25`; a rejected warrant resets the streak. Completion adds 200 plus 50 per remaining life. A perfect game adds 500 for every puzzle solved first try with no lost lives. Hints do not independently disqualify that bonus. The first-try puzzle percentage is distinct from completing the route.

Records compare only the same pack/content version/difficulty/stop count. They are local convenience data, not secure rankings.

## Persistence and boundaries

Schema 5 stores the explicit phase, pack/content identity, selected route, seeded variants, score ledger, lives, history, tokens, hint/attempt counts, solved state, answer order, eliminated choices, active tab, and warrant selection. Invalid, foreign, unsupported, and older saves are rejected without mutation. Bentonville and Argentina use contentVersion 4 because the exemplar changes answers and evidence; their contentVersion 3 saves are incompatible, as are the older schema 4/contentVersion 2 saves. The new NWA packs use contentVersion 2 with separate pack identities; their version 1 saves are incompatible after the warrant/evidence revisions. Schema 5 itself is unchanged.

The pack validator checks the runtime shape, identity/version fields, coordinates, options, unique IDs/tokens, source references, metadata, and basic markup restrictions. Only repository-owned pack JSON is supported. The markup restrictions are a guardrail, not a general HTML sanitizer. User-authored uploads require a separate design.

Packs contain 4–100 locations and every supported route contains at least four stops. Route options, save validation, and the token finale share this minimum. The bundled eight-location packs still offer 4/6/8 stops. The original eight-case exemplar retains case IDs, locations, route order and scoring; the original pack content versions are 4 for those changed case semantics.

The optional map distinguishes a pending library, a failed library, failed tiles, and a deliberately selected text route. Library readiness redraws only an active, visible game. Retry map reuses the pinned CDN URL and integrity attributes, permits only one pending library retry, and respects the Text route preference. Map failures do not change saved progress.

Storage errors switch to session memory with a warning. Save writes, terminal cleanup and abort confirmation check ownership of the saved snapshot; storage events close dialogs and cancel stale sessions. This is a single-save convenience model, not a cross-tab transaction system. No telemetry, server storage, authentication, or external AI calls are part of the game. External map/CDN requests are described in the dependency plan.

## Accessibility and verification boundary

Native controls, associated labels, tab semantics, focus movement, modal focus containment, live feedback, reduced motion, readable token labels, surface-specific colors, and a textual route accompany the game. These implementations still require the browser and assistive-technology checks in the QA documents. They do not constitute a conformance claim.

Character answer shortcuts default to off, with a persistent visible opt-in control. When enabled, A–D/1–4 work only on an unsolved, unlocked, visible puzzle outside dialogs, form controls, links, buttons, and editable text. Modified, repeated, and composing key events are ignored. Native answer buttons remain available with either preference.

The Node suite exercises production rules and session functions through a DOM double. Browser layout, network-provider behavior and player comprehension need independent evidence. Current verification and historical results are separated in [remediation status](docs/remediation-status.md). Ryan's supplied verification for the October 12 runtime corrections after `c12e772` passed syntax/content checks and all 50 tests in the focused run at content version 3. The later exemplar has a separate version 4 pass: syntax/content checks and 40/40 focused tests. These overlapping subsets do not establish a current full-suite or browser/AT result. The 248 reviewed cases have AI-assisted source/editorial evidence; 72 original-pack reviews and human learning evidence remain open. No automated or browser result has been supplied for the 12-pack tree; earlier results cover the original packs only. Personal preview use does not require publishing, commercial readiness, or a fresh-player study.
