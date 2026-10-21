# Carmen: ACME geography case files

An unofficial, fan-made browser game with 12 selectable packs and 320 cases. Each pack has eight ordered stops. **Quick case** starts four stops; custom setup offers 4, 6, or 8. Compare written evidence, solve puzzles, confirm arrests for fictional accomplices, and complete a three-part report at headquarters. **The Swapped Dispatch** is a connected four-stop Bentonville story with a deduction finale. New runs default to **Mixed activities**, combining four-choice questions with ordering, matching, evidence filtering, and fragment assembly. **Classic four choices** keeps the original format throughout. **Study / Notebook** opens individual cases for unscored review and preserves notes, stars, and optional review reminders.

**Status: personal preview; investigation-flow update implemented and verified.** The [design update](docs/design-update-2026-10-21.md) records the new task workspace, assistance, save schema 8, catalog 3, and authored story. Verification passed cleanly: syntax/content checks passed for all 12 packs and 320 cases, `verify:design` passed all 99 focused tests, `verify:harmony` passed all 118 tests, `npm test` passed all 153 tests, and `build:offline` generated the fresh portable edition at `dist/carmen-offline.html`. All 320 underlying cases carry scoped AI-assisted review (0 pending). The [all-pack fact-check ledger](docs/all-packs-fact-check.md) records the October 15 completion and October 17 amendments, alongside the [144-case ledger](docs/remaining-packs-review.md), [parks/highway review](docs/parks-route66-review.md), [NWA ledger](docs/content-audit.md) and [original exemplar](docs/reviewed-exemplar.md). Activities and new deduction overlays reuse written evidence; they are not a renewed external fact check. See [current evidence](docs/remediation-status.md), the historical [owner-run transcript](docs/archive/verification-2026-10-21-harmony.txt), and the [full project review](docs/project-review-2026-10-21.md).

Ryan's October 21 GitNexus 1.6.12 refresh indexed the repository at 1,716 nodes, 6,743 edges, 54 clusters, and 147 flows. Graph results guide source tracing and do not replace behavioral tests or human review. Work is bundled into logically grouped local commits under Ryan's explicit delegation.


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

Bentonville uses content version 5 and Argentina uses version 6, with five cases per stop. Northwest Arkansas uses version 3. Route 66, Ozark Waterways, Railroads & Depots, NWA Mountain Biking and Museums & Missing Labels use version 2; the other four packs use version 1. The [October 17 amendment](docs/all-packs-fact-check.md#october-17-editorial-follow-up) records the latest changes and their source limits. All 12 packs and 320 cases carry recorded AI-assisted review. A run selects one variant at each stop. Every case includes three progressive hints and explicit warrant evidence. The newest packs emphasize drainage relationships, chronology, corroboration, material and function clues, provenance and the limits of evidence. All essential information is text. The routes and approximate map pins provide archive context rather than travel directions; ACME desks, model readings and disputed records are fictional. Historical exhibition records do not establish current display availability.

## Play on GitHub Pages

**[Open the hosted preview](https://ryan258.github.io/carmen/).** The last recorded deployment contains the original two packs. All ten additional packs are in local commits; pushing and publication remain separate actions. Use localhost for the current 12-pack catalog and activity changes. Hosting packages the checked-in game assets and every pack JSON file. Relevant changes pushed to `main` publish automatically through [the Pages workflow](.github/workflows/pages.yml); deployment does not run tests or rebuild content or CSS. See [deployment details and recovery](docs/deployment.md) and [deployment history](https://github.com/ryan258/carmen/actions/workflows/pages.yml).

This remains a preview with the review limits above. Saves stay in your browser; localhost progress does not automatically carry over to the hosted address.

## Run locally

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ . Static hosting is sufficient; no backend, account, or API key is required. Serve the regular edition over HTTP rather than opening its page as a file. If pack requests fail, a generated snapshot of the full Bentonville pack remains available. Leaflet and map tiles need network access; the route has a text fallback.

An optional portable edition can be generated with `npm run build:offline`. It writes `dist/carmen-offline.html`, bundling all twelve packs, styles, and the sixteen runtime scripts into one local file. It uses the text route and excludes remote executable resources and map tiles. Source links remain deliberate outbound links. The output was rebuilt and verified alongside the design suite; local-file browser usability and persistence remain personal checks. Browser storage for local files varies, so use Study / Notebook backup before moving or replacing that file. There is no service worker or install prompt.

## Play and controls

- Continue case is primary when progress is saved, including saves in another trusted pack. Quick case starts four stops with Mixed activities and generous support. Custom setup separates reasoning preference from hints/lives. Advanced prefers the highest authored case difficulty available at each stop; it is not a calibrated difficulty guarantee. Short custom routes choose a seeded contiguous window. Saved runs keep their route, format and reasoning preference.
- Read the briefing and compare clues beside the puzzle. Optional useful-clue marks persist. Solve the puzzle, read its explanation, then Continue and Confirm arrest. New cases prefill the established warrant details; historical runs retain their original warrant entry. Correct final-report answers also wait for Continue; there is no automatic reading deadline. The current task precedes the collapsible route in reading order.
- Answer buttons visibly read Answer A, Answer B, Answer C, and Answer D, matching their accessible names for voice control. Case file, Hint, Continue, and Confirm arrest provide short repeatable action names.
- Mixed activities use two to four buttons labeled Card A–D. Order steps, match prompts, select every supported evidence card, or assemble the requested fragments while leaving distractors unused; then Check work. Filter cards toggle on and off. Undo last and Clear work cost nothing. Partial work saves as you go; no typing or dragging is required. Forty-seven cases across all twelve packs have alternatives. Selection balances available formats while preferring unseen or least recently visited cases at each stop. Format preference never overrides that freshness rule.
- Each new rejected complete answer costs one life until support is enabled. Rechecking the same rejected card arrangement costs nothing more. Incorrect four-choice options stay eliminated, including after resume. Feedback supplies authored reasoning where available, a case-specific evidence cue otherwise, and a position/condition to revisit in activities.
- Generous support starts with 6 lives and 3 hints per stop; Balanced support has 5 lives and 2 hints; Independent challenge has 4 lives and no initial hints. These allowances retain the historical Rookie/Detective/Inspector save keys and do not select the reasoning pool. Enable support during play for up to three hints per round with no further hint/life cost and an assisted record. Previously charged hints/earned points stay unchanged. At zero lives, Continue with support or Pause and keep case preserves progress; only explicit closure ends the investigation.
- Tab/Shift+Tab navigate controls; Enter/Space activate them. Arrow keys/Home/End navigate the case tabs. Answer shortcuts default to off. Opt in with the header control to use A–D or 1–4 on the visible puzzle, including from its tab, answer buttons, and card buttons. Form controls, editable text, links, unrelated buttons, modified keys, repeats, and composition remain protected. Escape closes a dialog.
- Reading and controls groups sound, reduced motion, contrast, Text route, and Answer shortcuts; these preferences persist. Read case uses an installed local voice, starts on request and stops on view changes. Pause keeps progress and returns to the title; Continue case resumes it. Discard Case asks before deleting the save, with Cancel initially focused.
- A pending map download shows a temporary text route and upgrades when Leaflet arrives. A failed library or tile request keeps a readable route with Retry map. Text route remains selected until you turn it off.
- The Mixed final report reviews the first selected case, asks you to order four visited stops, then match those stops with their tokens. It samples four evenly spaced stops from longer routes; the case inventory remains available. Classic retains the first/middle case questions and last-token question. Puzzle explanations appear after a correct answer. Source links appear in the successful case-history review and failure evidence review; the between-stop capture report does not show them.
- The Swapped Dispatch follows four fixed Bentonville stops, each revealing a fictional record with a consequence for the investigation. Its three final choices combine all recovered records; the full trail is visible. This is one authored story pilot. Other packs retain the recap report described above.
- Successful new runs receive a commendation based on first-try stop accuracy within their chosen route. A perfect four-stop case can earn Chief Inspector. Assisted completions are labelled and recorded separately; explicitly ended incomplete runs do not receive completion commendations.
- Study / Notebook provides direct case selection, worked answers, stars, optional notes, Again/Got it review scheduling, and 48 companion transfer prompts with separate answer reveal. Return to case resumes the unchanged save Study paused. A case from that save uses its saved catalog revision. Study awards no game points. Optional read-aloud uses only an installed local voice and starts on request. Complete text remains available.
- The eight newer text-heavy packs use shorter case-specific introductions, a shared fiction notice, and distinct fictional hideout/disguise display labels for each location. Canonical answer keys remain unchanged for save compatibility; catalog-1 runs retain their original wording. Original clues, answer evidence, and source content remain authoritative.

## Saves and records

One active case is stored per browser origin. New saves use schema 8, retaining round progress, route offset and catalog identity while adding assistance, paid-hint accounting, reasoning preference, episode identity and useful-clue marks. Matching-content schemas 5, 6 and 7 resume with their original case IDs and rules, then upgrade on the next write. New runs use catalog 3; older catalogs retain their prior questions, card interpretation and warrant entry. Older game builds cannot resume schema-8 saves. Content-version mismatches remain incompatible; no content-version migration is attempted. Pack IDs and content versions did not change for this work. Scoreboards separate pack/content version, difficulty, route length, exact route window, format, catalog/rules, reasoning preference, episode and assistance. Older unlabelled records remain Classic prefix records.

Recent-case history is bounded to 100 known case identities per pack/content version. Only stops actually opened enter that history, including abandoned runs; preselected future stops do not. Saves preserve their exact case IDs and never regenerate from the changing history. The title shows a concise resume summary. Study / Notebook exports a JSON backup of the notebook and saved case, previews imports, and requires separate explicit replacement actions with stale-snapshot protection. Settings, scores, and recent-case history are not part of that backup.

Starting another case asks Keep saved case or Replace saved case whenever a save exists, including another pack's save or malformed data. Keep saved case is initially focused and returns to the title. Continue case can load another trusted saved pack directly. Replacement consent applies only to the exact save, pack, route and setup shown when the dialog opened. Escape or a storage event cancels that consent. All 12 bundled packs offer 4/6/8-stop routes; all supported routes require at least four stops so the inventory finale has four distinct answers.

If storage is blocked or full, the session remains playable with a visible warning, but persistence after closing the page is unavailable. Another tab changing the active save closes any open dialog and returns this tab to the title screen. Writes and discard confirmation also compare the save snapshot before replacing or deleting it. Use one playing tab. Local scores are convenience records, not a tamper-resistant leaderboard.

## Architecture and authoring

| File | Responsibility |
| --- | --- |
| `carmen-sandiego-bentonville.html` | Static UI and control bindings; `index.html` redirects here |
| `game.js` | Session orchestration, views, input, and sound |
| `case-design.js` | Catalog-3 deduction overlays and the trusted four-stop story/finale |
| `game-experience.js` | Task context, adjacent evidence, persistent clue marks, and in-play local speech |
| `game-core.js` | Production scoring, manifest/pack/save validation, route-derived finale, storage boundary, cancellable scheduler; importable by Node tests |
| `quiz-activities.js` | Forty-seven alternatives in four activity kinds, with pack/content/case and catalog-version guards |
| `game-activities.js` | Card rendering, Undo/Clear/Check controls, activity progress, feedback, and focus |
| `run-generator.js` | Contiguous route windows, recent-case preference, and seeded format balancing |
| `quiz-practice.js` | Condensed case presentation and 48 ledger-derived companion transfer activities |
| `study-core.js`, `game-study.js` | Local notebook contracts and Study controls, backup preview/import, optional local read-aloud |
| `game-session.js` | Narrow save validation/replacement facade for Study |
| `game-warrant.js` | New-case arrest confirmation, historical warrant layouts, and input locking |
| `game-map.js` | Optional Leaflet adapter and persistent text-route choice |
| `game-records.js` | Local score/statistics adapter and records dialog |
| `map-config.js` | Public tile URL and attribution configuration |
| `data/quiz-packs.json` | First-party pack manifest |
| `data/packs/*.json` | Locations, cases, tokens, finale, and source registry |
| `builtin-pack.js` | Generated exact Bentonville fallback snapshot |
| `scripts/generate-bentonville-content.js` | Bentonville authoring source; generates its JSON pack |
| `styles.css`, `tailwind.*` | Semantic surface rules and checked-in utility CSS |

Edit Bentonville's generator, not its generated JSON; its review evidence and source records live in `scripts/bentonville-review-evidence.json`. The other packs are hand-authored JSON. Increase `contentVersion` when changing pack semantics, following the new-location guide. The activity catalog is a separate source: no pack data, generator, generated fallback, or pack version changed for this addition. See the [activity contract](docs/quiz-activities.md), [pack schema](docs/quiz-pack-schema.md), and [new-location guide](docs/new-location.md). Only repository-owned packs are supported; `visualHtml` is not an upload interface.

All 320 cases have AI-assisted review recorded in the [all-pack fact check](docs/all-packs-fact-check.md) and previous ledgers. The scored game selects from all variants; Study offers direct case access. Forty-eight prompts and keys from the [six-concept ledger](docs/remaining-packs-review.md) are available in Study as unscored companion activities. Source review does not establish human learning or browser/assistive-technology acceptance. The henchman maintenance helper now uses the shared unique atomic-write utility, preserving unrelated temporary files.

```sh
npm ci
npm run build:content
npm run build:css
```

Node 20+ is required for development commands. `build:content` regenerates Bentonville and its fallback; it does not overwrite the other packs. Tailwind scans all pack files. The activity addition uses semantic rules in `styles.css` and changes no pack assets, so it needs no content or CSS rebuild. Commit generated assets alongside their sources when a commit is explicitly authorized.

## Verification

The focused design verification command:

```sh
npm run verify:design && npm run build:offline
```

It checks syntax/content consistency, four design test files, and five affected regression areas (activities, route variety, sessions, harmony, and Study), then rebuilds the portable file. All 99 focused design tests passed with zero failures. Historical regression fixtures explicitly use catalog 2; new-design fixtures use catalog 3 or real Quick/story entry points. The earlier [owner-run harmony transcript](docs/archive/verification-2026-10-21-harmony.txt) records 117 passing tests for the preceding implementation, and `npm run verify:harmony` now passes all 118 tests. The [accessibility QA](docs/a11y-qa.md) describes optional personal input checks. Real browser/assistive-technology behavior, map metadata and current access, and human acceptance remain unverified.

The full-suite command:

```sh
npm run verify
```

It checks syntax, manifest/pack/fallback consistency, and the full Node test suite (153 tests across 17 test files), all passing cleanly. The DOM boundary harness reads the page IDs and bindings but does not implement browser layout or screen-reader speech. [Manual QA](docs/manual-qa.md) retains an optional broader matrix. Work is bundled into logically grouped local commits under Ryan's explicit delegation. Pushing, deployment, and publication remain separate owner actions.


`npm run check:release` is an optional editorial sign-off check for sharing. All 320 cases record review evidence, but this gate has not been run against the current tree. It checks metadata presence, not source truth, human approval, activity correctness, or learning effectiveness. It is not part of personal preview verification. See [current specification](SPEC.md), [remaining roadmap](ROADMAP.md), and [current evidence](docs/remediation-status.md). The original broad design remains in [the archive](docs/archive/original-spec.md).
