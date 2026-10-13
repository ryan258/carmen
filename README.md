# Carmen: ACME geography case files

An unofficial, fan-made browser game with four selectable packs and 128 cases. Each pack has eight ordered stops. Choose 4, 6, or 8 stops, compare written evidence, answer a multiple-choice puzzle, issue a warrant for a fictional accomplice, and complete a three-question report at headquarters.

**Status: personal preview with 56 AI-assisted reviewed cases: all 48 new NWA cases and eight original exemplars.** The [companion activities and claim ledger](docs/reviewed-exemplar.md) include verified primary-source passages, worked explanations, useful distractors and transfer questions. Review is explicitly attributed to Codex as AI-assisted editorial work; 72 original-pack cases await review. The [NWA review ledger](docs/content-audit.md) records all 48 new case reviews and companion activities. Bentonville and Argentina remain at content version 4. Ryan's earlier syntax/content checks and focused 40/40 tests passed for that original two-pack tree; the additions do not inherit that result. The earlier 50/50 result covers the preceding version 3 correction tree after `c12e772`. These are distinct focused runs, not a current full-suite or browser/learner acceptance result. Revision-specific evidence and the next personal check live in [remediation status](docs/remediation-status.md). The game has one multiple-choice engine; the different question styles do not imply separate interactive engines.

The October 12 review of the accumulated changes found no new blocking defect. Runtime reliability, reviewed content and documentation are organized as three commits through `84ae82d`; source and generated Bentonville assets stay together. Ryan's subsequent GitNexus refresh indexed that commit successfully. The complete comparison against `c12e772` reports 31 files, 109 symbols and 31 affected flows at critical impact. [The post-commit review record](docs/remediation-status.md#post-commit-graph-reconciliation--october-12) preserves that risk and its coverage limits; the graph result supplies no new test or browser evidence.

## Game packs

| Pack | Stops | Cases |
| --- | --- | --- |
| Bentonville | Eight landmarks and districts within the city | 40 |
| Argentina | Eight stops across the country | 40 |
| Northwest Arkansas | Bentonville, Rogers, Springdale, Fayetteville, Siloam Springs, Bella Vista, Pea Ridge National Military Park, Eureka Springs | 24 |
| NWA Mountain Biking | Coler, Slaughter Pen, Back 40, Little Sugar, The Railyard Bike Park, Fitzgerald Mountain, Kessler Mountain, Centennial Park | 24 |

The new NWA packs use content version 2 after factual/editorial review, with three variants per stop and three progressive hints per case. They mix landmark recognition, chronology, ordering, arithmetic, and fictional dispatch codes in the existing multiple-choice engine. Evidence is entirely text. Map pins are approximate orientation points; invented schedules and records are not visitor information, riding directions, or live trail conditions. All 48 new cases have scoped source/editorial review attributed to Codex, with specific questions, progressive hints and witness-supported warrants. They have not been tested or published in this change.

## Play on GitHub Pages

**[Open the hosted preview](https://ryan258.github.io/carmen/).** The new NWA packs are committed locally and have not been published. Hosting packages the checked-in game assets and every pack JSON file. Updates to those assets on `main` publish automatically through [the Pages workflow](.github/workflows/pages.yml); deployment does not run tests, rebuild content/CSS or run GitNexus analyze. See [deployment details and recovery](docs/deployment.md) and [deployment history](https://github.com/ryan258/carmen/actions/workflows/pages.yml).

This remains a preview with the review limits above. Saves stay in your browser; localhost progress does not automatically carry over to the hosted address.

## Run locally

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ . Static hosting is sufficient; no backend, account, or API key is required. Serve over HTTP rather than opening a file URL. If pack requests fail, a generated snapshot of the full Bentonville pack remains available. Leaflet and map tiles need network access; the route has a text fallback. This is not an installable offline app.

## Play and controls

- Choose a pack, route length, and difficulty. A shorter route follows the first stops in authored order.
- Read the case file (briefing plus three clue sheets). Solve the puzzle, read its explanation, then choose Continue to prepare the warrant. Correct final-report answers also wait for Continue; there is no automatic reading deadline.
- Answer buttons visibly read Answer A, Answer B, Answer C, and Answer D, matching their accessible names for voice control. Case file, Hint, Continue, and Submit warrant provide short repeatable action names.
- Each rejected puzzle answer or warrant costs one life. Incorrect options stay eliminated for that puzzle, including after resume.
- Rookie has 6 lives and 3 hints per stop. Detective has 5 lives and 2 hints. Inspector has 4 lives and no hints. Clue text and the case pool are shared across difficulties. The established location is filled for everyone; hideout and disguise lists contain only choices for that stop.
- Tab/Shift+Tab navigate controls; Enter/Space activate them. Arrow keys/Home/End navigate the case tabs. Answer shortcuts default to off. Opt in with the header control to use A–D or 1–4 on the visible puzzle outside form controls, editable text, links, and buttons. Modified, repeating, and composing keys are ignored. Escape closes a dialog.
- Header controls toggle sound, reduced motion, contrast, Text route, and Answer shortcuts; these preferences persist. Pause keeps progress and returns to the title; Resume continues it. Discard Case asks before deleting the save, with Cancel initially focused.
- A pending map download shows a temporary text route and upgrades when Leaflet arrives. A failed library or tile request keeps a readable route with Retry map. Text route remains selected until you turn it off.
- The final report uses evidence and tokens from the selected route. Puzzle explanations appear after a correct answer. Source links appear in the successful case-history review and failure evidence review; the between-stop capture report does not show them.

## Saves and records

One active case is stored per browser origin. Save schema 5 preserves the round phase, attempts, hints, solved state, shuffled options, eliminated answers, and warrant selections. Pack identity and content version must match. Bentonville and Argentina use contentVersion 4 for the rewritten exemplar answers; their version 3 and older saves are incompatible, and no lossy migration is attempted. The new NWA packs use contentVersion 2; their version 1 saves are incompatible after the warrant/evidence revisions. The original packs' save identities are unchanged. The title screen offers to clear incompatible or broken saves. Completed records are separated by pack, content version, difficulty, and route length. Records from older formats are not relabeled as comparable scores.

Starting another case asks Keep saved case or Replace saved case whenever a save exists, including another pack's save or malformed data. Keep saved case is initially focused and returns to the title; choose the saved pack if necessary to resume it. Replacement consent applies only to the exact save, pack, and route shown when the dialog opened. Escape or a storage event cancels that consent. All four bundled packs offer 4/6/8-stop routes; all supported routes require at least four stops so the inventory finale has four distinct answers.

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

Edit Bentonville's generator, not its generated JSON. Argentina and both new NWA packs are hand-authored JSON. Increase `contentVersion` when changing answers or route semantics. Only repository-owned pack files are supported; `visualHtml` is not an upload or remote-content interface. See [pack schema](docs/quiz-pack-schema.md) and [new-location guide](docs/new-location.md).

For the original eight reviewed cases, use the self-contained [exemplar guide](docs/reviewed-exemplar.md). The normal game still chooses from all variants, including pending cases; it has no case picker or reviewed-only route. The two new NWA packs have all their variants reviewed; their [case ledger and transfer activities](docs/content-audit.md) supplement the original guide. Transfer questions and their answer keys are in these guides, not the game UI. Source review does not establish human learning outcomes or browser/assistive-technology acceptance.

```sh
npm ci
npm run build:content
npm run build:css
```

Node 20+ is required for development commands. `build:content` regenerates Bentonville and its fallback; it does not overwrite Argentina or the NWA packs. Tailwind scans all pack files. The new NWA packs add no HTML utility classes, so this addition requires no CSS rebuild. Commit generated assets alongside their sources when a commit is explicitly authorized.

## Verification

For the new packs, Ryan can run this focused command from the project directory:

```sh
npm run check:content && node --test tests/content-validation.test.js tests/run-generation.test.js tests/session-regressions.test.js
```

This covers manifest/pack contracts, fallback consistency, seeded case selection, and 4/6/8-stop session completion for every manifest pack. No result has been supplied for this four-pack tree; the agent has not run it. A short personal check is to select each new pack, start a four-stop case, use Hint, solve a puzzle, issue its warrant, and pause/resume with your preferred input method.

The optional full-suite command remains:

```sh
npm run verify
```

It checks syntax, manifest/pack/fallback consistency, and runs the full Node suite. Ryan completed the smaller version 4 command in [remediation status](docs/remediation-status.md): syntax/content PASS and 40/40 focused tests PASS for the original packs. A current full-suite result has not been supplied. The previous 50/50 correction result remains version 3 evidence. Ryan also completed the earlier post-commit graph refresh and comparison; the critical impact rating is not a test failure or test pass. For the October 13 additions, the agent reviewed content, manifest integration, tests, selector copy and documentation, using Ryan’s refreshed graph; no tests or analyze were run by the agent. Logical local commits include the new packs, the selector status correction and synchronized documentation. The DOM boundary harness reads the actual page IDs and bindings, but does not implement a browser layout engine or screen-reader speech. The short personal checks in [accessibility QA](docs/a11y-qa.md) remain available; [manual QA](docs/manual-qa.md) retains an optional broader matrix.

`npm run check:release` is an optional editorial sign-off check for sharing. It should still fail with 72 pending reviews and is not part of personal preview verification. It checks review metadata, not source truth, human approval or learning effectiveness. See [current specification](SPEC.md), [remaining roadmap](ROADMAP.md), and [current evidence](docs/remediation-status.md). The original broad design remains in [the archive](docs/archive/original-spec.md).
