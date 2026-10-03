# Current implementation contract

This file describes the implemented local preview. The [original design](docs/archive/original-spec.md) is preserved as historical product intent; unimplemented mechanics there are not evidence of current functionality.

## Product and content

A personal-use geography and evidence-matching quiz in an unofficial fictional ACME setting. Two first-party packs each contain eight locations and forty case variants. Each run uses the first 4, 6, or 8 stops, selects one case per stop with a seed, and deterministically shuffles its answer choices. Difficulty changes lives and hint allowance, not the authored question pool.

There is one four-option engine. It can present cipher, arithmetic, sequence, chronology, and deduction questions as text. Interactive plotting, dragging, typed ciphers, and logic grids are not implemented. Neither ages nor completion-time estimates have been established by a player study.

## State transitions

`idle → investigation → between → investigation … → final → complete`

- Investigation starts with dossier, clues, and puzzle available. The warrant unlocks only after a correct answer.
- Correct puzzle and final answers wait for explicit Continue, including after resume. The established location is prefilled for all difficulties; warrant choices are limited to the current stop.
- Wrong input locks until feedback ends; input handlers enforce phase as well as disabled controls.
- A successful warrant awards points and records one capture, then saves the **between** phase at the same index. Advancing starts the next stop or the final report.
- The final report has three rounds: the selected first case, a selected middle case, and the last selected stop's earned token. It takes place at headquarters, so short routes do not imply visiting skipped locations.
- Zero lives ends the case. Terminal handlers are idempotent within a session; record/stat writes identify the run.
- Restart, title navigation, new runs, and pack replacement cancel pending session callbacks. Dialogs pause delayed delivery. Pack loading blocks start/resume until the latest request settles or falls back.

## Scoring

Puzzle points are 100/75/50 for zero/one/two previous mistakes, then 25. Each hint subtracts 15 from puzzle credit, with a 25-point floor. Warrants award 50. From the third consecutive capture, the streak bonus is `(streak − 2) × 25`; a rejected warrant resets the streak. Completion adds 200 plus 50 per remaining life. A perfect game adds 500 for every puzzle solved first try with no lost lives. Hints do not independently disqualify that bonus. The first-try puzzle percentage is distinct from completing the route.

Records compare only the same pack/content version/difficulty/stop count. They are local convenience data, not secure rankings.

## Persistence and boundaries

Schema 5 stores the explicit phase, pack/content identity, selected route, seeded variants, score ledger, lives, history, tokens, hint/attempt counts, solved state, answer order, eliminated choices, active tab, and warrant selection. Invalid, foreign, unsupported, and older saves are rejected without mutation. Schema 4/contentVersion 2 belongs to the earlier final-report rules and is intentionally incompatible with this revision.

The pack validator checks the runtime shape, identity/version fields, coordinates, options, unique IDs/tokens, source references, metadata, and basic markup restrictions. Only repository-owned pack JSON is supported. The markup restrictions are a guardrail, not a general HTML sanitizer. User-authored uploads require a separate design.

Storage errors switch to session memory with a warning. Save writes, terminal cleanup and abort confirmation check ownership of the saved snapshot; storage events close dialogs and cancel stale sessions. This is a single-save convenience model, not a cross-tab transaction system. No telemetry, server storage, authentication, or external AI calls are part of the game. External map/CDN requests are described in the dependency plan.

## Accessibility and verification boundary

Native controls, associated labels, tab semantics, focus movement, modal focus containment, live feedback, reduced motion, readable token labels, surface-specific colors, and a textual route accompany the game. These implementations still require the browser and assistive-technology checks in the QA documents. They do not constitute a conformance claim.

The Node suite exercises production rules and session functions through a DOM double. Browser layout, network-provider behavior, source accuracy, and player comprehension need independent evidence. Current verification and historical results are separated in [remediation status](docs/remediation-status.md). The October 3 changes are awaiting user-run verification. Personal preview use does not require publishing, commercial readiness, or a fresh-player study.
