# Carmen: ACME geography case files

An unofficial, fan-made browser game with two selectable settings: Bentonville, Arkansas, and Argentina. Each pack has eight ordered stops and five case variants per stop (80 cases total). Choose 4, 6, or 8 stops, compare written evidence, answer a multiple-choice puzzle, issue a warrant for a fictional accomplice, and complete a three-question report at headquarters.

**Status: personal local preview; October 3 fixes await user-run verification.** The game has one multiple-choice engine. Geography, arithmetic, sequence, cipher, and ordering prompts are question styles within that engine. The prior test results apply to an older tree; current evidence lives in [remediation status](docs/remediation-status.md). Factual line review is incomplete; source links alone do not establish accuracy.

## Run locally

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ . Static hosting is sufficient; no backend, account, or API key is required. Serve over HTTP rather than opening a file URL. If pack requests fail, a generated snapshot of the full Bentonville pack remains available. Leaflet and map tiles need network access; the route has a text fallback. This is not an installable offline app.

## Play and controls

- Choose a pack, route length, and difficulty. A shorter route follows the first stops in authored order.
- Read the dossier and three clue sheets. Solve the puzzle, read its explanation, then choose Continue to prepare the warrant. Correct final-report answers also wait for Continue; there is no automatic reading deadline.
- Answer buttons visibly read Answer A, Answer B, Answer C, and Answer D, matching their accessible names for voice control. Clues, Hint, Continue, and Submit warrant provide short repeatable action names.
- Each rejected puzzle answer or warrant costs one life. Incorrect options stay eliminated for that puzzle, including after resume.
- Rookie has 6 lives and 3 hints per stop. Detective has 5 lives and 2 hints. Inspector has 4 lives and no hints. Clue text and the case pool are shared across difficulties. The established location is filled for everyone; hideout and disguise lists contain only choices for that stop.
- Tab/Shift+Tab navigate controls; Enter/Space activate them. Arrow keys/Home/End navigate the case tabs. A–D and 1–4 answer choices when focus is outside an input or button. Escape closes a dialog.
- Header controls toggle sound, reduced motion, contrast, and Text route. Pause keeps progress and returns to the title; Resume continues it. Discard Case asks before deleting the save, with Cancel initially focused.
- The final report uses evidence and tokens from the selected route. Explanations and source links appear after captures and in the case history.

## Saves and records

One active case is stored per browser origin. Save schema 5 preserves the round phase, attempts, hints, solved state, shuffled options, eliminated answers, and warrant selections. Pack identity and content version must match. The new route-derived finale uses contentVersion 3; older saves are incompatible, and no lossy migration is attempted; the title screen offers to clear incompatible or broken saves. Completed records are separated by pack, content version, difficulty, and route length. Records from older formats are not relabeled as comparable scores.

If storage is blocked or full, the session remains playable with a visible warning, but persistence after closing the page is unavailable. Another tab changing the active save closes any open dialog and returns this tab to the title screen. Writes and discard confirmation also compare the save snapshot before replacing or deleting it. Use one playing tab. Local scores are convenience records, not a tamper-resistant leaderboard.

## Architecture and authoring

| File | Responsibility |
| --- | --- |
| `carmen-sandiego-bentonville.html` | Static UI and control bindings; `index.html` redirects here |
| `game.js` | Session orchestration, views, input, and sound |
| `game-core.js` | Production scoring, manifest/pack/save validation, route-derived finale, storage boundary, cancellable scheduler; importable by Node tests |
| `run-generator.js` | Seeded case selection and supported route lengths |
| `game-map.js` | Optional Leaflet adapter and persistent text-route choice |
| `game-records.js` | Local score/statistics adapter and records dialog |
| `map-config.js` | Public tile URL and attribution configuration |
| `data/quiz-packs.json` | First-party pack manifest |
| `data/packs/*.json` | Locations, cases, tokens, finale, and source registry |
| `builtin-pack.js` | Generated exact Bentonville fallback snapshot |
| `scripts/generate-bentonville-content.js` | Bentonville authoring source; generates its JSON pack |
| `styles.css`, `tailwind.*` | Semantic surface rules and checked-in utility CSS |

Edit Bentonville's generator, not its generated JSON. Argentina is hand-authored JSON. Increase `contentVersion` when changing answers or route semantics. Only repository-owned pack files are supported; `visualHtml` is not an upload or remote-content interface. See [pack schema](docs/quiz-pack-schema.md) and [new-location guide](docs/new-location.md).

```sh
npm ci
npm run build:content
npm run build:css
```

Node 20+ is required for development commands. `build:content` regenerates Bentonville and its fallback; it does not overwrite Argentina. Tailwind scans both pack files. Commit generated assets alongside their sources when a commit is explicitly authorized.

## Verification

Run verification from the project directory:

```sh
npm run verify
```

It checks syntax, manifest/pack/fallback consistency, and runs the Node tests (52 tests passing). The test harness reads the actual page IDs and bindings, but does not implement a browser layout engine or screen-reader speech. The short personal checks in [accessibility QA](docs/a11y-qa.md) cover those boundaries; [manual QA](docs/manual-qa.md) retains an optional broader matrix.

`npm run check:release` is an optional editorial sign-off check for sharing. It intentionally fails while claim-level reviews are missing and is not part of personal preview verification. See [current specification](SPEC.md), [remaining roadmap](ROADMAP.md), and [current evidence](docs/remediation-status.md). The original broad design remains in [the archive](docs/archive/original-spec.md).
