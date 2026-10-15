# Carmen: ACME geography case files

An unofficial, fan-made browser game with 12 selectable packs and 320 cases. Each pack has eight ordered stops. Choose 4, 6, or 8 stops, compare written evidence, answer a multiple-choice puzzle, issue a warrant for a fictional accomplice, and complete a three-question report at headquarters.

**Status: personal preview with 320 AI-assisted reviewed cases across all 12 packs (0 pending).** The [all-pack fact-check ledger](docs/all-packs-fact-check.md) records the completion of the 72 original-pack cases on October 15, 2026, alongside earlier ledgers: the [144-case completion ledger](docs/remaining-packs-review.md), [parks/highway review](docs/parks-route66-review.md), [NWA ledger](docs/content-audit.md) and [original exemplar](docs/reviewed-exemplar.md). Review is attributed to Codex as AI-assisted editorial work; human educator sign-off, observed learning evidence, and browser/screen-reader acceptance remain separate review limits. Earlier owner-run syntax/content checks and focused 40/40 tests cover the original two-pack version-4 tree only; the earlier 50/50 result covers its preceding version-3 correction tree. These are separate historical focused runs. No automated or browser result has been supplied for the 12-pack tree. See [current evidence](docs/remediation-status.md). The game still uses one four-option engine for the different investigation styles.

The October 12 review of the accumulated changes found no new blocking defect. Runtime reliability, reviewed content and documentation are organized as three commits through `84ae82d`; source and generated Bentonville assets stay together. Ryan's subsequent GitNexus refresh indexed that commit successfully. The complete comparison against `c12e772` reports 31 files, 109 symbols and 31 affected flows at critical impact. [The post-commit review record](docs/remediation-status.md#post-commit-graph-reconciliation--october-12) preserves that risk and its coverage limits; the graph result supplies no new test or browser evidence.

## Game packs

| Pack | Stops | Cases |
| --- | --- | --- |
| Bentonville | Eight landmarks and districts within the city | 40 |
| Argentina | Eight stops across the country | 40 |
| Northwest Arkansas | Bentonville, Rogers, Springdale, Fayetteville, Siloam Springs, Bella Vista, Pea Ridge National Military Park, Eureka Springs | 24 |
| NWA Mountain Biking | Coler, Slaughter Pen, Back 40, Little Sugar, The Railyard Bike Park, Fitzgerald Mountain, Kessler Mountain, Centennial Park | 24 |
| Arkansas State Parks | Petit Jean, Mount Magazine, Crater of Diamonds, Historic Washington, Lake Chicot, Jacksonport, Mammoth Spring, Ozark Folk Center | 24 |
| Route 66 | Dwight (IL), Springfield (MO), Brush Creek Bridge (KS), Arcadia (OK), Shamrock (TX), Tucumcari (NM), Painted Desert Inn (AZ), Barstow (CA) | 24 |
| Ozark Waterways | Buffalo River, Beaver Lake, Bull Shoals Lake, Norfork Lake, Mammoth Spring, Greer Spring, Big Spring, Alley Spring and Mill | 24 |
| Arkansas Delta | Delta Cultural Center, Hampson Museum, Parkin, Lakeport, Dyess, Arkansas Post, Mississippi River State Park, Louisiana Purchase State Park | 24 |
| American National Parks | Acadia, Great Smoky Mountains, Everglades, Grand Canyon, Yellowstone, Arches, Yosemite, Hawaiʻi Volcanoes | 24 |
| Railroads & Depots | Steamtown, Horseshoe Curve, Mount Clare, Cass, Tennessee Valley Railroad Museum, Kansas City Union Station, Golden Spike, Railtown 1897 | 24 |
| Architecture & Hidden Details | Robie House, Taliesin, Fallingwater, Gateway Arch, Gamble House, Glass House, Marin County Civic Center, Bradbury Building | 24 |
| Museums & Missing Labels | National Air and Space, Field, Henry Ford, Computer History, Exploratorium, Science Museum of Minnesota, American Jazz, Museum of Flight | 24 |

Bentonville uses content version 4 and Argentina uses content version 5 (after clue and answer corrections from the fact check) with five cases per stop. The NWA packs and Museums & Missing Labels use version 2; the other seven packs use version 1. All 12 packs and 320 cases carry recorded AI-assisted review. A run selects one variant at each stop. Every case includes three progressive hints and explicit warrant evidence. The newest packs emphasize drainage relationships, chronology, corroboration, material and function clues, provenance and the limits of evidence. All essential information is text. The routes and approximate map pins provide archive context rather than travel directions; ACME desks, model readings and disputed records are fictional. Historical exhibition records do not establish current display availability.

## Play on GitHub Pages

**[Open the hosted preview](https://ryan258.github.io/carmen/).** The last recorded deployment contains the original two packs. All ten additional packs are in local commits; pushing and publication remain separate actions. Use localhost for the current 12-pack catalog. Hosting packages the checked-in game assets and every pack JSON file. Relevant changes pushed to `main` publish automatically through [the Pages workflow](.github/workflows/pages.yml); deployment does not run tests, rebuild content/CSS or run GitNexus analyze. See [deployment details and recovery](docs/deployment.md) and [deployment history](https://github.com/ryan258/carmen/actions/workflows/pages.yml).

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

One active case is stored per browser origin. Save schema 5 preserves the round phase, attempts, hints, solved state, shuffled options, eliminated answers, and warrant selections. Pack identity and content version must match. Bentonville uses contentVersion 4 and Argentina uses contentVersion 5; schema-5 Argentina version-4 and older saves and Bentonville version-3 and older saves are incompatible, and no lossy migration is attempted. The new NWA packs and Museums & Missing Labels use contentVersion 2; their version 1 saves are incompatible after warrant/evidence revisions. The original packs' save identities are unchanged. The title screen offers to clear incompatible or broken saves. Completed records are separated by pack, content version, difficulty, and route length. Records from older formats are not relabeled as comparable scores.

Starting another case asks Keep saved case or Replace saved case whenever a save exists, including another pack's save or malformed data. Keep saved case is initially focused and returns to the title; choose the saved pack if necessary to resume it. Replacement consent applies only to the exact save, pack, and route shown when the dialog opened. Escape or a storage event cancels that consent. All 12 bundled packs offer 4/6/8-stop routes; all supported routes require at least four stops so the inventory finale has four distinct answers.

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

Edit Bentonville's generator, not its generated JSON; its review evidence and source records live in an authoring sidecar (`scripts/bentonville-review-evidence.json`) merged by the generator. The other packs are hand-authored JSON. Increase `contentVersion` when changing answers or route semantics. Argentina uses content version 5; Museums & Missing Labels and the NWA packs use content version 2; the other seven added packs use version 1 with separate pack/save identities; save schema 5 is unchanged. Only repository-owned pack files are supported; `visualHtml` is not an upload or remote-content interface. See [pack schema](docs/quiz-pack-schema.md) and [new-location guide](docs/new-location.md).

All 320 cases across the 12 packs now have AI-assisted review recorded in the [all-pack fact check](docs/all-packs-fact-check.md) and previous ledgers. The normal game chooses from all variants with a seed; it has no case picker or reviewed-only route. The [exemplar guide](docs/reviewed-exemplar.md), [NWA](docs/content-audit.md), [parks/highway](docs/parks-route66-review.md) and [six-concept](docs/remaining-packs-review.md) ledgers provide worked reasoning and companion transfer activities. Transfer prompts and their keys are repository activities, not tracked game events. Source review does not establish human learning or browser/assistive-technology acceptance.

```sh
npm ci
npm run build:content
npm run build:css
```

Node 20+ is required for development commands. `build:content` regenerates Bentonville and its fallback; it does not overwrite the other packs. Tailwind scans all pack files. The newest packs add no HTML utility classes, so this addition requires no CSS rebuild. Commit generated assets alongside their sources when a commit is explicitly authorized.

## Verification

For the new packs, Ryan can run this focused command from the project directory:

```sh
npm run check:content && node --test tests/content-validation.test.js tests/run-generation.test.js tests/session-regressions.test.js
```

This covers manifest/pack contracts, fallback consistency, seeded case selection, and 4/6/8-stop session completion for every manifest pack. No result has been supplied for this 12-pack tree; the agent has not run it. A short personal check is to select each new pack, start a four-stop case, use Hint, solve a puzzle, issue its warrant, and pause/resume with your preferred input method.

The optional full-suite command remains:

```sh
npm run verify
```

It checks syntax, manifest/pack/fallback consistency, and runs the full Node suite. Ryan completed the smaller version 4 command in [remediation status](docs/remediation-status.md): syntax/content PASS and 40/40 focused tests PASS for the original packs. A current full-suite result has not been supplied. The previous 50/50 correction result remains version 3 evidence. Ryan also completed the earlier post-commit graph refresh and comparison; the critical impact rating is not a test failure or test pass. For the October 13–15 additions, the agent reviewed content, manifest integration, tests, and documentation, using Ryan’s refreshed graph; no tests or analyze were run by the agent. Ryan authorized this full-change review, documentation reconciliation and logically grouped local commits. Pushing and publication remain separate actions. The current Git review found no submodules, tracked gitlinks, nested Git checkouts or active commit hooks. The DOM boundary harness reads the actual page IDs and bindings, but does not implement a browser layout engine or screen-reader speech. The short personal checks in [accessibility QA](docs/a11y-qa.md) remain available; [manual QA](docs/manual-qa.md) retains an optional broader matrix.

`npm run check:release` is an optional editorial sign-off check for sharing. With review evidence recorded for all 320 cases, structural metadata checks are satisfied, but the check verifies metadata presence, not source truth, human approval or learning effectiveness. It is not part of personal preview verification. See [current specification](SPEC.md), [remaining roadmap](ROADMAP.md), and [current evidence](docs/remediation-status.md). The original broad design remains in [the archive](docs/archive/original-spec.md).
