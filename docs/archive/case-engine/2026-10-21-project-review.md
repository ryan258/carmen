# Project review — October 21, 2026

This review establishes the current project from repository source, checked-in content, documentation, and the owner's existing GitNexus index. It also records a practical direction for reducing repetition. It is a review of a production-quality personal tool: local play, manageable input, reliable saves, and easy resumption are the priorities. Broader publication, commercial infrastructure, and a full player study are not prerequisites for Ryan's personal use.

**Current status:** Ryan subsequently requested implementation of the identified corrections and next actions, then supplied successful owner-run verification on Node v26.7.0: syntax/content gates, all 117 focused tests, the offline build, and a GitNexus rebuild. The [follow-up remediation](#follow-up-remediation) below supersedes the earlier outstanding-work statements; [current evidence](2026-10-27-remediation-status.md#owner-run-harmony-verification--october-21) records the transcript and limits. The earlier sections remain dated review evidence. Browser and personal interaction acceptance remain open.

## Review boundary and baseline

- The inspected baseline is local commit `a0e71b4` (`fact check pass`). At the beginning of this review, the only working-tree modifications were `AGENTS.md`, `CLAUDE.md`, and `README.md`.
- Ryan had already run GitNexus analysis. The existing index recorded `a0e71b4`, October 21 at 16:13 UTC, with 999 symbols, 3,366 relationships, 84 flows, and 72 files. It was fresh for the baseline and is now stale for the subsequent edited/new files. The agent did not rebuild it.
- Source inspection covered the runtime boundaries, content and authoring contracts, save/resume consumers, all pack structures, representative complete cases across the catalog, documentation, the three-file opening diff, and focused test source. Inventory totals below come from parsing checked-in JSON; they are not a content-gate or test result.
- No tests, full suite, build, browser launch, live source fetch, deployment inspection, or GitNexus analyze/reindex ran as part of this review. No staging, commit, push, deployment, or publication was authorized by the review request.
- The recorded AI-assisted editorial review remains evidence for its stated claims and dates. This review did not independently reopen every external source or recertify all 320 answer keys. Shared map pins, current hours/access, human input comfort, and learning outcomes remain separate questions.
- Gameplay implementation following this review is recorded in the final section. Baseline descriptions and opportunities below should not be mistaken for results of a later runtime check.

## What the project does

Carmen is an unofficial ACME geography and evidence-matching browser game. It has twelve first-party packs, each with eight ordered locations. The player selects a pack, a 4-, 6-, or 8-stop route, and a difficulty. A seeded run chooses one authored case at each selected stop. Short routes use the first stops in pack order; the seed changes cases and answer order, not the route's geography.

The baseline loop is:

1. Read a briefing and three clue sheets in Case file.
2. Solve a four-choice puzzle, using optional progressive hints.
3. Read the explanation and explicitly Continue to the warrant.
4. Select the hideout and disguise; the established location is prefilled.
5. Read the capture report, collect a token, and Continue to the next stop.
6. Finish three report questions at headquarters: first-case evidence, middle-case evidence, and the last stop's token.

Wrong answers and warrants cost a life. Rookie starts with six lives and three hints per stop; Detective has five and two; Inspector has four and no hints. The case pool is shared across difficulties. Correct answers wait for Continue, so reading has no automatic deadline. The main source boundaries are [`game.js`](../../../game.js), [`game-core.js`](../../../game-core.js), and [`run-generator.js`](../../../run-generator.js).

This is a static application with no account, backend, telemetry, or external AI call in the game. A local HTTP server is sufficient. Leaflet and map tiles remain optional network dependencies; Text route provides the essential route information. The generated Bentonville snapshot permits a playable fallback if pack loading fails. This is not a fully bundled offline application.

The last deployment recorded in [`deployment.md`](deployment.md) is the original two-pack preview. The current local catalog has twelve packs. No live deployment state was checked during this review, so the recorded deployment should not be presented as a newly observed remote state.

## Content inventory

| Pack | Locations | Cases | Content version | Source records |
| --- | ---: | ---: | ---: | ---: |
| Bentonville | 8 | 40 | 5 | 19 |
| Argentina | 8 | 40 | 6 | 51 |
| Northwest Arkansas | 8 | 24 | 3 | 22 |
| NWA Mountain Biking | 8 | 24 | 2 | 10 |
| Arkansas State Parks | 8 | 24 | 1 | 9 |
| Route 66 | 8 | 24 | 2 | 9 |
| Ozark Waterways | 8 | 24 | 2 | 8 |
| Arkansas Delta | 8 | 24 | 1 | 8 |
| American National Parks | 8 | 24 | 1 | 8 |
| Railroads & Depots | 8 | 24 | 2 | 8 |
| Architecture & Hidden Details | 8 | 24 | 1 | 9 |
| Museums & Missing Labels | 8 | 24 | 2 | 8 |
| **Total** | **96** | **320** | | **169** |

The manifest is [`data/quiz-packs.json`](../../../data/quiz-packs.json); complete content lives in [`data/packs/`](../../../data/packs). All 320 cases have a `reviewed` status and three authored hints. Baseline mechanic metadata is `deduction-choice` for every case. There are 240 text-only cases and 80 cases with inline HTML illustrations, all in Bentonville and Argentina. Difficulty metadata contains 88 Rookie, 157 Detective, and 75 Inspector cases; those labels do not filter the live pool.

There are 156 reviewed source-registry records and thirteen legacy unreviewed records. None of those thirteen is referenced by a current case. Their presence therefore does not mean thirteen current cases lack review. Removing them is optional authoring cleanup, and Bentonville's source ownership must be respected if that cleanup is done.

The content has substantial useful breadth: geographic recognition, chronology, calculation, provenance, interpreting source limits, distinguishing observation from inference, and applying fictional model rules. Many newer cases ask for more careful reasoning than simple place-name recall. At the baseline, all of those reasoning styles culminated in the same interaction and repeated warrant procedure. The implementation below adds an initial set of alternatives; warrants remain unchanged.

The editorial evidence is deliberately scoped. [`all-packs-fact-check.md`](../../provenance/2026-10-15-all-packs-fact-check.md) records the October 15 completion and October 17 corrections, including the unresolved Barstow chronology discrepancy and blocked or unopened sources. Earlier ledgers provide claim scope and worked reasoning: [`reviewed-exemplar.md`](../../provenance/2026-10-12-reviewed-exemplar.md), [`content-audit.md`](../../provenance/2026-10-13-nwa-content-audit.md), [`parks-route66-review.md`](../../provenance/2026-10-14-parks-route66-review.md), and [`remaining-packs-review.md`](../../provenance/2026-10-14-remaining-packs-review.md). The last includes 48 companion transfer activities. These are repository activities, not tracked in-game assignments.

## Architecture and ownership

| Boundary | Responsibility | Important coupling |
| --- | --- | --- |
| [`index.html`](../../../index.html), [`carmen-sandiego-bentonville.html`](../../../carmen-sandiego-bentonville.html) | Entry redirect, page structure, native controls, script loading, inline event bindings | New runtime files must be loaded in the correct order; HTML-bound functions may lack complete graph callers |
| [`game.js`](../../../game.js) | Browser session state, loading, views, input, feedback, audio, transitions, save ownership | Main integration point; puzzle changes reach start, resume, hints, warrants, finale, and terminal review |
| [`game-core.js`](../../../game-core.js) | Scoring, manifest/pack/save contracts, review-evidence predicate, finale resolver, storage facade, cancellable scheduler | Shared by production and Node tests; save validation depends on the same selected-case/finale answers shown by the controller |
| [`run-generator.js`](../../../run-generator.js) | Seeded selection and randomization helpers, supported route counts | Authored order and `nextLead` assume adjacent locations; route changes require deliberate compatibility work |
| [`game-map.js`](../../../game-map.js), [`map-config.js`](../../../map-config.js) | Optional Leaflet adapter, map failure states, persistent Text route, provider URL/attribution | Adapter still reads shared controller state; map failure must never reset progress |
| [`game-records.js`](../../../game-records.js) | Local scoreboards, statistics, records dialog | Uses controller state and storage; comparable scoreboards separate pack, version, difficulty, and route length |
| [`styles.css`](../../../styles.css), `tailwind.input.css`, `tailwind.build.css` | Semantic surfaces and checked-in utility CSS | New semantic styles can live in `styles.css`; new utility classes require a CSS rebuild |
| [`scripts/generate-bentonville-content.js`](../../../scripts/generate-bentonville-content.js), [`scripts/bentonville-review-evidence.json`](../../../scripts/bentonville-review-evidence.json) | Bentonville authoring and claim/source evidence | Generated JSON is an output, not the owning authoring source |
| [`scripts/build-builtin.cjs`](../../../scripts/build-builtin.cjs) | Exact Bentonville fallback snapshot | The canonical generated pack and `builtin-pack.js` must stay synchronized |
| [`scripts/check-content.cjs`](../../../scripts/check-content.cjs) | Manifest/content/fallback checks and optional editorial gate | Structural acceptance is not independent factual verification or human sign-off |
| [`tests/helpers/game-harness.cjs`](../../../tests/helpers/game-harness.cjs) | Runs shipped scripts and HTML bindings against a DOM double | Does not emulate browser layout, accessibility trees, real Leaflet, speech, or provider behavior |

The architecture is appropriate for the personal static-game scope. Pure rules and adapters have already been separated. A framework migration, backend, account system, or new service is not needed to add variety. Further extraction is valuable where it gives a clear boundary for puzzle rendering and evaluation; a broad rewrite would add unrelated risk.

The current boundary still uses shared browser globals across controller, map, and records. That makes script order and state contracts significant. A modality adapter should therefore expose a small explicit interface for rendering, evaluating, serializing, and restoring an interaction, while preserving the existing scoring/transition owners. It should not independently award points, advance the round, or own save deletion.

### Saves, recovery, and records

Baseline save schema 5 records pack/content identity, seed and case IDs, route length, phase, score ledger, lives, hints, attempts, solved state, answer order, eliminated answers, active tab, and warrant selection. `validateSave` rejects malformed or incompatible saves instead of guessing at replacement semantics. Content-version changes make the old pack's saves incompatible. Records retain separate version buckets.

The existing protections are useful: explicit replacement consent, initial focus on Keep saved case or Cancel, comparison against the saved snapshot before mutation, storage-event cancellation, cancellable delayed callbacks, idempotent terminal behavior, and an in-memory fallback when storage is unavailable. These are implemented contracts, not a newly verified browser result.

There is one active save per browser origin. Localhost and the hosted preview do not share saves. A local export/import or backup feature would serve recovery and moving between origins; it is an enhancement, not a prerequisite for adding modalities. Any import would need the same strict validation and explicit replacement policy.

### Authoring and publication

Bentonville changes start in the generator and review sidecar, then update its JSON and fallback together. Other packs are hand-authored JSON. Changes to answer semantics need a content-version decision and corresponding explanations/hints/review notes. Merely preserving a `reviewed` flag does not certify newly invented interactions or new claims.

[`pages.yml`](../../../.github/workflows/pages.yml) copies checked-in HTML, JavaScript, styles, the manifest, and all pack JSON files into a static artifact. It does not run tests or rebuild content/CSS. Runtime additions must update both the copy list and push path filters. A local commit does not publish; a relevant push to `main` triggers the recorded deployment workflow. No such action is part of this review.

## Review of the opening Git changes

The three opening modifications contain no game-runtime or content changes.

| File | Change | Review conclusion |
| --- | --- | --- |
| `AGENTS.md` | Adds a native-source tracing section, revises the verification wording, and updates generated graph counts from 669/1,741/58 to 999/3,366/84 | Appropriate emphasis on current imports, callers, content consumers, and save compatibility. The generated graph-first requirements still remain below the new section; native tracing and graph evidence must be interpreted together, with UNKNOWN/partial results explicitly unresolved. Removal of an earlier sentence is not fresh permission to run tests or reindex. |
| `CLAUDE.md` | Identical change to the same operator capsule and generated counts | Both instruction files agree at the baseline. Preserve that parity when intentionally updating shared instructions. |
| `README.md` | Removes “or run GitNexus analyze” from the deployment description | The resulting “does not run tests, rebuild content/CSS” needs “or” for grammatical clarity. The workflow itself confirms that it packages assets without these commands. Removing the analyzer mention changes no deployment behavior. |

The existing graph is relevant current structural evidence, but it is not a test result. Pre-edit puzzle-rendering impact reaches start, resume, next-round, and final-report flows and is **CRITICAL**. File-node queries that returned **UNKNOWN** were supplemented with direct imports, HTML bindings, and test-harness inspection; absence of graph edges was not treated as proof of no callers. The critical impact is a reason to preserve these contracts and target their eventual checks, not a reason to redesign the whole application.

## Corrections identified

### C1 — Reconcile top-level content versions and save guidance

At the review baseline, [`SPEC.md`](../../../SPEC.md) lines 7, 34, and 38 and [`ROADMAP.md`](../../../ROADMAP.md) line 3 still report pre-October-17 versions. Bentonville is 5, Argentina 6, Northwest Arkansas 3, and Route 66/Ozark Waterways/Railroads are 2. The SPEC persistence paragraph therefore describes obsolete compatibility limits. README, the active data, and the latest ledger have the newer values.

Correct the active contract and roadmap, retaining older dated evidence as history. Reduce repeated version prose where a link to the authoritative catalog is sufficient. Any new modality changes must also update the baseline contract that described only one four-option engine.

### C2 — Correct the README deployment sentence

Use “does not run tests or rebuild content/CSS” in the opening README change. This is an editorial correction with no runtime effect.

### C3 — Bring the older authoring helper onto the existing atomic-write utility

[`scripts/apply-henchmen.js`](../../../scripts/apply-henchmen.js) lines 63–65 use a fixed `${packPath}.tmp`. Concurrent invocations can collide, and a failed write can leave that shared temporary path behind. [`scripts/content-io.cjs`](../../../scripts/content-io.cjs) already provides a unique, exclusively created temporary file and cleanup. Reusing it is a small authoring-maintenance correction already acknowledged in the roadmap. It does not need to expand the gameplay work.

### C4 — Make modality contracts complete before calling the feature finished

The baseline schema and authoring instructions require a four-choice answer and `mechanic: deduction-choice`; save validation also assumes four answer positions. Changes must deliberately reconcile the validator, renderer, evaluator, hints, score rules, saves, finale, failure review, authoring guide, page loading, deployment packaging, and focused tests. A new visible control without those consumers is an incomplete feature.

If interaction changes are presentation-only over the same answer semantics, document that boundary. If a new task has multiple selections, ordering, partial progress, or a different correct answer, preserve those states explicitly and review its answer reasoning. Existing authored evidence should remain the source of truth.

Comparable records also need a gameplay-style boundary if new modes change the number of submissions or the probability of guessing correctly. The existing boards separate pack/version/difficulty/route length; treating a new interaction style as identical would make the old scores misleading. Backward compatibility should preserve old saves and records under their original style rather than silently relabel them.

### C5 — Make opted-in answer shortcuts work from normal puzzle focus

At the baseline, `game.js:456` suppresses answer shortcuts whenever the event target is any button. `switchTab` deliberately focuses the selected tab button at line 856. Consequently, after ordinary keyboard tab navigation to the puzzle, enabled A–D/1–4 shortcuts do nothing until focus moves to an eligible non-control target. The existing shortcut regression at `tests/session-regressions.test.js:159` dispatches its successful key at the document body, so it does not model that normal focus path.

Retain the opt-in default and protections for editable fields, links, unrelated controls, modifiers, repeated keys, and composition. Deliberately allow appropriate puzzle/tab contexts, or choose an equally clear focus strategy. A focused regression should dispatch from the actual selected tab and answer controls as well as checking form controls remain protected. This is a source-confirmed input-flow mismatch; no real-browser behavior was measured here.

## Why the game feels repetitive

Repetition comes from several layers, not merely the size of the question bank:

- **Interaction:** all 320 cases use the same four-choice engine despite differing reasoning topics.
- **Narrative:** all 144 cases in the six newest packs repeat the same calling card and puzzle-description boilerplate. Parks and Route 66 share another 48-case template.
- **Warrants:** the newest six packs reuse three hideout/disguise pairs at every stop. Records Desk/Archive photographer, Dispatch Desk/Dispatch clerk, and Comparison Desk/Catalogue illustrator each occur 48 times. Parks and Route 66 use a similar fixed trio. The third clue names the necessary warrant evidence directly, so this step often repeats selection work after the puzzle is solved.
- **Routes:** 4- and 6-stop runs always begin at the first stop. Short sessions repeatedly expose the start of each pack.
- **Run diversity:** `createDistinctRun` retries an exact full-run repeat, but does not prevent individual cases from repeating or balance reasoning/interaction types.
- **Finale:** the evidence rounds reuse the first and middle questions, then ask a token question. That is consistent review but adds little interaction variety.
- **Reading:** the newer concept packs average approximately 124–132 words in briefing plus three clues before puzzle instructions; the originals average about 65 for Argentina and 78 for Bentonville. These are static word counts, not measured reading times. Repeated disclaimers and template prose contribute to the amount of text.

Adding more packs without changing these layers would increase catalog breadth while leaving the repeated action pattern largely intact.

## Enhancement inventory and priority at review time

| Priority | Opportunity | Why it matters | Scope boundary |
| --- | --- | --- | --- |
| First | Accessible ordering, matching, evidence filtering, or fragment assembly | Makes the player perform a different action that fits the reasoning | Native controls; no required typing, dragging, precision pointing, sound, or time limit |
| First | Preserve a simple answer path and explicit Continue | Lets Ryan choose the lower-effort interaction and read at his pace | Switching or resuming must not reset hints, attempts, score, or solved state |
| First | Balanced modality selection | Avoids a nominally varied run that happens to repeat one interaction | Seeded and reproducible; preserve old saved-run semantics |
| First | Review explanations and hints for each new interaction | Existing answer-choice explanations may refer to distractors that a new view no longer displays | Keep facts and fiction boundaries intact; record changed semantics |
| Next | Shorter scenario-specific briefings and a shared fiction explanation | Reduces repeated reading while retaining honest context | Essential evidence must remain available as text in each case |
| Next | Study mode or a condensed warrant step | Reduces repeated form work when the desired activity is reasoning practice | Keep the existing game mode available; do not silently change its score contract |
| Next | Recent-case avoidance and broader short-route coverage | Makes repeated short sessions useful across more content | Route order, next leads, saves, and comparable records require deliberate design |
| Next | Single-case access and a concise resume summary | Reduces setup and helps resume the intended thought | Reuse existing case identities and explain where progress was saved |
| Next | Local notebook, export, and optional spaced review | Captures mistakes, discoveries, and useful methods | Local-first, no account or new service required |
| Next | In-game access to companion transfer activities | Existing worked activities can deepen play without adding a new catalog | Distinguish practice from scored outcomes and preserve answer keys |
| Later | Visual evidence and optional read-aloud | Adds another way to inspect evidence | Complete text equivalents; no required external voice/provider or unavailable image |
| Later | Map-pin and broader location-metadata audit | Improves orientation confidence | Separate from game-answer review and current access/travel claims |
| Later | Targeted view/dependency extraction | Makes additional interactions easier to maintain | Extract where the current work exposes a clear boundary; no framework rewrite |
| Later | Escape plain text consistently at HTML sinks | Prevents future first-party names or titles containing markup from being interpreted as HTML | Baseline fallback visual strings at `game.js:873–884` and tooltip name at `game-map.js:167`; trusted presentation HTML is a separate contract |
| Later | Optional full-offline packaging and save backup/import | Improves resilience and portability if personally useful | Respect map-provider rules; no tile bulk downloading; validate imported saves |
| Optional cleanup | Remove unreferenced legacy sources and consolidate repeated status prose | Reduces authoring clutter and future documentation drift | Preserve historical review evidence and generator ownership |

Difficulty currently changes lives and hints rather than content. A future comfort/practice setting could change reading load or failure cost, but adaptive difficulty and timing pressure are not needed to deliver useful variety. Broader educator/player studies remain optional; one short personal route can identify a concrete input problem without becoming a release ceremony.

## Existing evidence considered for new interactions

These were grounded candidates during review, not a list of the final implemented activities. See [the activity guide](quiz-activities.md) for exact implemented coverage. Each uses facts or explicitly fictional records already present in the case. A new interaction still requires its own solution, hints, saved-state, and scoring review.

| Pack and case ID | Candidate task | Existing evidence |
| --- | --- | --- |
| Bentonville — `classic-crystal-bridges` | Order a fictional route | `data/packs/bentonville.json:1197`: Entrance → Gallery → Bridge pavilion → Studio; explicitly not the museum floor plan |
| Argentina — `classic-salta` | Order uniquely labeled event cards | `data/packs/argentina.json:868`: 09:00 departure → 11:00 visit → 13:00 return; repeated place names need distinct event IDs |
| Northwest Arkansas — `nwa-bridges` | Match reference labels to venues | `data/packs/northwest-arkansas.json:229`: Safdie/Crystal Bridges, factory reuse/Momentary, plants/Compton Gardens, retail/Walmart Museum |
| NWA Mountain Biking — `mtb-slaughter-american` | Assemble a trail-name label | `data/packs/nwa-mountain-biking.json:426`: All + American, with Creek and Blackbird as distractor fragments |
| Arkansas State Parks — `arkansas-state-parks-historic-washington-printing` | Order process steps | `data/packs/arkansas-state-parks.json:885`: Arrange → ink → press → inspect |
| Route 66 — `route-66-dwight-materials` | Match structures and materials | `data/packs/route-66.json:359`: original office/wood clapboard; later bay/concrete block |
| Ozark Waterways — `ozark-waterways-beaver-label` | Filter by two independent criteria | `data/packs/ozark-waterways.json:556`: White River and above dam identify Card K |
| Arkansas Delta — `arkansas-delta-arkansas-post-timeline` | Order milestones | `data/packs/arkansas-delta.json:1279`: 1686 post → 1803 acquisition → 1819 capital |
| American National Parks — `american-national-parks-yellowstone-circulation` | Order a simplified model | `data/packs/american-national-parks.json:1082`: Enter → heat → rise |
| Railroads & Depots — `railroads-depots-mount-clare-pair` | Match buildings and dates | `data/packs/railroads-depots.json:753`: Station/1851, Roundhouse/1884, Annex/1891 |
| Architecture — `architecture-hidden-details-gateway-arch-phases` | Order event types | `data/packs/architecture-hidden-details.json:885`: Design selection → construction start → completion |
| Museums — `museums-missing-labels-field-process` | Order a fictional reproduction process | `data/packs/museums-missing-labels.json:491`: Reference → scan → cast |

Do not infer a reliable ordering contract by splitting arbitrary answer text at arrows. Repeated stages, alternative valid sequences, abbreviations, and distractor-specific wording need explicit authoring. For matching, the evidence must establish every pair being requested, not merely the single pair needed by the original question.

## Verification and acceptance still needed

The existing source contains focused tests for production core rules, scoring, authoring, content validation, run generation, session regressions, prior corrections, and smoke behavior. The DOM harness loads the shipped page's scripts and inline bindings, which is useful integration coverage. It does not establish real focus behavior, reflow, screen-reader output, speech control, map-provider behavior, or visual contrast.

Earlier owner-run 50-test and 40-test results belong to separate original-pack revisions. They must not be added together or treated as a current 12-pack pass. No current runtime pass was established during this review. The owner-run command should be selected after the actual implementation scope settles, with the relevant modality/core/session tests plus the existing content/fallback contract. A full suite or reindex is not required merely to write this report.

When Ryan chooses to try the result, the short personal check should cover one new interaction, Hint, wrong and correct feedback, explicit Continue, and Pause/Resume with partial input; Classic can be tried on a separate run. A second interaction can be checked if the first is comfortable. [`a11y-qa.md`](a11y-qa.md) and [`manual-qa.md`](manual-qa.md) retain broader optional matrices. No browser run should be silently initiated to satisfy this document.

## Implementation following the review

The following changes are implemented locally after the baseline review, with runtime verification pending:

- **Mixed and Classic formats:** new runs default to Mixed; Classic retains four-choice interactions. Format stays fixed during a run and on resume.
- **Twenty case alternatives:** `quiz-activities.js` adds fifteen sequences and five matches across all twelve exact pack versions. Their instructions, two-to-four-card solutions, and three hints use existing written evidence. No pack JSON, generator, fallback, or content version changed. A deterministic selection adjustment includes at least one compatible alternative when the selected route contains one.
- **Native activity adapter:** `game-activities.js` supplies Card A–D, Undo last, Clear work, and Check work. Partial edits save immediately. Each distinct wrong complete arrangement costs one life; repeating that arrangement does not charge again. Correct feedback waits for Continue. Worked answers appear in evidence review.
- **Varied Mixed finale:** first-case four-choice review remains; subsequent rounds order four evenly spaced visited stops and match their tokens. The inventory remains accessible. Classic retains the original finale.
- **Schema 6 and separate records:** strict activity progress and format validation were added. Valid matching-content historical schema-5 saves resume as Classic and become schema 6 on the next write. Older builds reject schema 6. Valid older records without a format are Classic; Mixed has separate scoreboards.
- **Input and documentation corrections:** enabled answer keys accept focus on puzzle tabs, answer buttons, and cards while retaining unrelated-control/editable-input protection. SPEC/ROADMAP versions and compatibility guidance now agree with current data; the README deployment grammar is corrected. New scripts are included in page loading, syntax coverage, and deployment packaging.

Correction C3, the older authoring helper's fixed temporary path, remains outstanding. C1/C2/C5 have source changes addressing them; C4 now has implementation and authored regression coverage but awaits execution. The opportunity table is a review-time inventory: ordering/matching, format-specific scoreboards, saved card progress, and varied final reports are now implemented. Evidence filtering, fragment assembly, a mid-run format switch, full 320-case activity coverage, broad modality balancing, fewer repeated warrants, shorter boilerplate, route variety, Study mode, notebook/export, and wider input acceptance remain future work. Classic is available before starting rather than through an in-progress format switch.

No tests, syntax/content/release gates, builds, browser checks, external factual refresh, or reindex ran. New tests are authored, not executed; the existing regression harness explicitly selects Classic, with activity cases covering Mixed. The root review ran a whitespace diff check only; that is not runtime evidence. Pre-edit core/session impact was CRITICAL and answer handling HIGH. The refreshed baseline index is now stale for changed files. No staging, commits, pushing, deployment, or publication occurred.

Ryan's focused verification command is:

```sh
npm run check:syntax && npm run check:content && node --test tests/activities.test.js tests/session-regressions.test.js tests/first-correction-pass.test.js tests/core-contracts.test.js tests/run-generation.test.js tests/smoke.test.js
```

See the [activity guide](quiz-activities.md), [finish plan](2026-10-21-finish-plan.md), and [current remediation status](2026-10-27-remediation-status.md) for exact behavior, compatibility, and remaining acceptance limits. A short personal input check remains optional; existing source reviews and authored tests do not establish interaction correctness or comfort.

## Follow-up remediation

Ryan requested that the identified issues be fixed and next actions taken, with no agent-run tests or GitNexus analyze. His refreshed index recorded October 21 at 16:51:54 UTC, the same base commit `a0e71b4`, 77 indexed files, 1,132 nodes, 4,011 edges, and 96 flows, including the initial activity implementation. It informed pre-edit impact queries. It now predates this follow-up. HIGH/CRITICAL shared session, save, record, and activity paths were reported; UNKNOWN HTML/CLI-bound entry points were traced to their actual callers. No reindex was run.

### Implemented corrections and next actions

| Review item | Result in current source |
| --- | --- |
| C1/C2 — stale contracts and README prose | Active README, SPEC, ROADMAP, schema, guides, and status documents describe the current implementation; historical review evidence remains dated. |
| C3 — fixed temporary authoring file | `scripts/apply-henchmen.js` now uses `content-io.cjs`'s existing unique/exclusive atomic writer and cleanup. The script was not executed against content. |
| C4 — complete activity contracts | Four explicit activity kinds have shared answer/completeness rules, rendered controls, hints, partial progress, duplicate-rejection handling, validation, failure review, finale support, packaging, and authored regressions. |
| C5 — opted-in keyboard focus | Appropriate game tabs and card/answer buttons accept the opted-in shortcuts. Form controls and unrelated buttons remain protected. |
| Repetitive interaction | Catalog 2 has 47 authored alternatives: 20 ordering, 17 matching, seven evidence filtering, and three fragment assembly. All twelve packs have alternatives; early Delta coverage is included. |
| Unbalanced case selection | The seeded generator balances available interaction kinds within equally fresh candidates. Freshness takes precedence over forcing a previously seen activity. |
| Recent-case repetition | Bounded per-pack/content history records actually visited cases, including an abandoned first stop. Selection uses unseen cases, then the least recently seen candidate. Planned but unvisited cases are not recorded as seen. |
| Short-route coverage | Four- and six-stop runs choose contiguous windows across the pack. Original internal ordering and next-lead adjacency remain intact, and every selected route ends with the headquarters report. |
| Repeated narrative reading | A presentation adapter condenses the two boilerplate report/instruction templates across eight packs (192 cases). Case titles and locations identify the task, repetitive calling-card blocks are hidden, and a shared fiction/model notice retains the explicit limits. All original clue sheets and source data remain available. |
| Repeated warrant input and names | One native selection combines hideout/disguise. Separate fields remain selectable. Catalog 2 gives 192 fictional desk/disguise pairs location-specific display names across eight packs; clues, hints, explanations, Study, and choices use the same names. The full cross-product of choices is preserved, including incorrect combinations; canonical saved answers, warrant points, and life costs remain unchanged. Catalog 1 retains its original wording. Controls lock during rejection feedback so visible selections cannot diverge from saved state. |
| Study and single-case access | Study opens directly to the active/paused case where available; native location/case selectors provide direct access to every case. Practice and answer reveal are unscored and preserve the paused investigation. |
| Resume orientation | The menu identifies the saved stop, route progress, format, lives, score, and next action, including partially placed cards. |
| Capacity capture | A local notebook saves cases and optional notes. Again/Got it supports an optional due queue without passive timers or automatic grading. Notes support native dictation/text expansion. |
| Companion activities | All 48 existing six-pack transfer prompts and expected answers are available in Study, with explicit reveal and no game-score effect. |
| Optional audio | Read-aloud explicitly uses an installed local voice only; Stop reading remains available and no speech is started automatically. Complete text remains visible. |
| View/dependency boundaries | Activity, warrant presentation, study UI, pure notebook rules, and save-import access have separate modules. Shared scoring/transition/save ownership remains in the controller/core rather than being duplicated. |
| Plain-text HTML sinks | Fallback evidence labels, names, token fields, titles, and Leaflet tooltip names are escaped. Authored trusted visual HTML remains a separate validated content contract. |
| Backup and restore | JSON export carries notebook data and the saved case, including one belonging to another pack. Notebook and save restores are separate explicit replacement actions after preview. Strict bounds, current-pack save validation, and snapshot comparisons protect against invalid input and newer local writes. |
| Optional offline use | `npm run build:offline` packages a single `dist/carmen-offline.html` with all twelve packs, local scripts, and CSS. It contains no remote runtime assets or downloaded tiles; the text route is forced. Source links are optional external navigation. Ryan's build succeeded; offline browser acceptance remains separate. |
| Map metadata | A [96-location source inventory](../../provenance/2026-10-21-map-metadata-audit.md) records coordinate bounds and shared orientation points. The UI explicitly labels pins as approximate. No unsupported coordinate corrections were made. |

### Compatibility and recovery decisions

New saves use schema 7 with `routeStart` and `activityCatalogVersion`. Matching-content schema-5 saves resume Classic on their original prefix route. Schema-6 saves keep their prior format and original twenty-activity catalog. Both normalize to prefix/catalog 1 when rewritten as schema 7. New games use catalog 2. Saved case IDs remain authoritative rather than being regenerated against changed recent history.

Catalog identity is essential: simply adding alternatives under unchanged content versions would make an older Mixed save on a previously four-choice case fail validation or change interaction. Version 1 remains resolvable, including its original null activities. Catalog-2 descriptors do not replace it. Scoreboards separate Mixed catalog versions, contiguous route windows, difficulty, pack, and content version; Classic records retain their original catalog-independent meaning.

Filter submissions are sets; selecting a rejected set in another order cannot cost another life. Assembly requires the stated number of ordered fragments while leaving distractors unused. Selection and Undo remain free until Check work. Both kinds preserve the existing explicit Continue and hint/score owners.

Study pauses the game before opening. Its notebook never supplies questions or executable content. A conflicting notebook write preserves the local note draft for retry/export. Imported saves are checked against the selected repository-owned pack, copied through the save-field whitelist, and cannot replace a save that changed after preview. Browser-storage failure still uses the existing in-memory fallback and visible warning; an exported backup is needed before closing in that situation.

### Limits and verification handoff

All five named corrections now have source changes addressing them. The opportunity inventory has been implemented at a practical local-tool scope; it is not a promise to create a new interaction for every one of the 320 cases. Classic remains available before starting and Study provides a lower-effort unscored path without reinterpreting an active scored run. Warrant compatibility keys are retained beneath the new location-specific fictional display names, and their input step is condensed. New factual claims, invented precision for map pins, and speculative infrastructure were not introduced. Unreferenced legacy sources remain historical material, not unresolved current-case citations.

Source review included independent cross-checks of all 47 activity descriptors against their owning clues, compatibility across the old and new catalogs, writable-file ownership, HTML bindings, deployment asset lists, and backup boundaries. That review caught and corrected old Mixed-save reinterpretation, unsaved warrant changes during feedback, omission of other-pack saved cases from backup, and offline literal/HTML-tag embedding problems. Those are source findings and fixes, not test results.

Ryan subsequently supplied a passing Node v26.7.0 run: syntax and content/fallback gates accepted all twelve packs, and all 117 tests in the eleven focused files passed with zero failures, cancellations, skips, or todos. His offline build wrote `dist/carmen-offline.html`. GitNexus 1.6.12 reported a successful rebuild with 1,465 nodes, 5,435 edges, 49 clusters, and 125 flows; this is index evidence, not a complete change-impact report. The [verbatim transcript](../verification/2026-10-21-harmony.txt) is preserved. Agents did not rerun these commands. No full-suite run, external map-pin audit, current venue/access review, browser/assistive-technology acceptance, or human interaction acceptance is established. No staging, commit, push, deployment, or publication occurred.

The focused owner command is now a reusable package script:

```sh
cd /Users/ryanjohnson/Projects/nonsense/carmen
npm run verify:harmony
```

It runs syntax and content checks plus the activity, route-variety, content-variety, Study, integration, authoring, session, prior-correction, core, run-generation, and smoke test files. It does not run GitNexus or deploy. Both this command and the separate `npm run build:offline` succeeded in Ryan's supplied run; these documentation updates do not require repeating them.

The supplied results contain no failing check requiring a code correction. Expected harness fallback warnings do not establish a real-network defect. Real input comfort, high zoom, screen-reader behavior, installed-voice behavior, and offline browser storage require a focused personal/browser pass if Ryan chooses to authorize one; the automated run cannot supply that evidence. The subsequent [investigation flow update](2026-10-21-design-update.md) adds schema 8, catalog 3, the Swapped Dispatch story, and sixteen runtime scripts, with its design test suite verified.
