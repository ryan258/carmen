# Current remediation status — October 27, 2026

## Career progression layer, trivia-only finale report, and submodules check — October 27

- **Detective career progression layer (`game-career.js`)**:
  - Implements `carmen_career` persistent storage key, decoupled from game saves, records, and stats.
  - Adds **Play today's case**: single daily four-stop Mixed detective run seeded `daily-YYYY-MM-DD` across packs, locking upon completion until tomorrow and resuming if in-progress.
  - Awards career XP on case closure (score) and escape (half score, minimum 50 XP), plus a 250 XP daily bonus with streak scaling (+50 per streak day up to +250).
  - 10 named detective career levels governed by a quadratic curve (`400 * level * (level - 1)`).
  - 16 badges covering milestone closures, daily streaks, perfect cases, difficulty modes, packs visited, and Study reviews.
  - Tight Study integration: Study reviews earn career XP once per case per local day (+40 Got it, +15 Again); title career card displays due reviews for the active pack; case completion allows queuing missed stops directly into the Study notebook as due `Again` items (with safety against unreadable notebooks).
  - Terminal results render career progression, promotions, daily share summary, earned badges, next badge goal, and quick replay.
  - Accompanied by unit tests in `tests/career.test.js`.

- **Catalog-3 trivia-only final report**:
  - Final report rounds in Catalog 3 (both Classic and Mixed) now ask three 4-choice questions reviewing the first, middle, and last stops' case questions with clues shown.
  - Removes token-recall and route-ordering / token-matching activities from Catalog-3 finales; historical Catalog-1/2 saves preserve their original finale structure.
  - Regression tests added in `tests/design-flow.test.js` and `tests/design-core.test.js`.

- **Packaging and runtime scripts**:
  - Runtime script count updated from 16 to 17 local scripts (`game-career.js` added to `carmen-sandiego-bentonville.html`, `package.json` syntax check, `.github/workflows/pages.yml`, and offline bundling).
  - Git submodule status confirmed: no submodules present in the repository.

## Destination trail choices and GitNexus refresh — October 26

The transition round ("Where did the trail go?") now features interactive trail deduction:
- Authored next leads that name the stop or route sequence are dynamically converted by `destinationLead` into travel stub clues using the destination's province and tagline.
- Players choose between three seeded destination options: the true destination and two distinct decoy locations. Resuming an in-progress game deterministically produces identical options.
- Wrong choices deduct one life unless assisted, protected by a safety floor that never takes the last life on the transition screen, disables the cold option with a strikethrough style, and announces status.
- Correct choices advance the round. The final stop bypasses travel choices and leads directly to the final report.
- Regression suite in `tests/session-regressions.test.js` covers choice generation, safety floor, and resume consistency.
- `.claude/launch.json` added for static local python server debugging.
- Ryan ran `npx gitnexus analyze`, cleanly indexing 1,726 nodes, 6,822 edges, 56 clusters, and 148 flows.
- Absence of Git submodules verified.

## Design verification and market-save resolution — October 21

The first design run passed syntax and structural content/fallback checks, then passed 97 of 98 focused tests. The story integration test failed at saved-state validation after solving its first stop. Source inspection identified the new market filter's `version: 2` descriptor as incompatible with `validActivityProgress`, which accepts descriptor format 1. The task's authored revision is already represented by its stable `classic-downtown-square:filter:v2` ID. The descriptor was corrected to `version: 1`, retaining the ID, choices, solution, and save schema. Core and story test coverage was expanded to exercise saving/resuming that task across catalogs 1–3.

Verification of the correction and full design suite succeeded cleanly:
- `npm run check:syntax` and `npm run check:content` passed for all 12 packs and 320 cases.
- `node --test tests/design-core.test.js tests/design-flow.test.js` passed all 16 tests.
- `npm run verify:design` passed all 99 focused design tests with zero failures.
- `npm run verify:harmony` passed all 118 focused harmony tests with zero failures.
- `npm test` passed the full Node suite (153/153 tests across 17 test files).
- `npm run build:offline` generated `dist/carmen-offline.html` bundling all twelve packs, local styles, and sixteen runtime scripts.
- Ryan ran `npx gitnexus analyze`, cleanly indexing 1,716 nodes, 6,743 edges, 54 clusters, and 147 flows.

## Investigation-flow update — implemented and verified

The current local changes add a primary cross-pack Continue action, four-stop Quick case, independent reasoning preference and initial hint/life allowance, evidence beside decisions, persistent useful-clue marks, new-case arrest confirmation, direct Study return, and in-play local read-aloud. Mistakes receive more useful feedback; support preserves completed work, waives future hint/life costs, and records an assisted result. Zero-life recovery offers continuation or a durable pause before an explicit close. New successful runs use route-relative commendations.

One authored four-stop Bentonville episode, **The Swapped Dispatch**, recovers linked fictional records and ends with three synthesis decisions. Two identified weak source-case presentations and the market activity were revised behind catalog 3. Original pack assets, versions, source metadata and historical catalogs remain unchanged. This is a bounded story pilot, not a rewrite of every pack. The [design update](design-update-2026-10-21.md) gives exact scope and limits.

Schema 8 validates assistance, paid-hint accounting, reasoning preference, episode identity and clue marks. Matching-content schemas 5–7 preserve their existing route and answer interpretation, then upgrade on write. Records separate assistance and new rules. HTML, syntax coverage, and future Pages packaging include the two new helpers (`case-design.js` and `game-experience.js`), making sixteen runtime scripts. The portable offline edition is regenerated at `dist/carmen-offline.html`.

Under Ryan's explicit delegation, all changes are reviewed, documentation aligned, and work bundled into logically grouped local commits. Browser layout, installed-voice behavior, and human acceptance remain open. No push, deployment, or publication occurred.

## Study close correction — after owner verification

Ryan reported that Close Study left the modal visible in the offline edition. Source inspection confirmed that the later `.study-modal { display: flex; }` rule overrode Tailwind's equally specific `.hidden` rule. The close handler changed the class correctly, but the overlay remained displayed; the same conflict also defeated initial hiding. The DOM test double does not compute CSS layout, so the passing lifecycle tests did not cover this defect.

Added `.study-modal.hidden { display: none; }` in `styles.css` and the identical embedded stylesheet in the owner's existing `dist/carmen-offline.html`. The source fix is included in future offline builds; the local artifact was patched directly without running a build. Refresh the file, confirm Study starts hidden, then open and close it with Close Study and Escape and confirm it can reopen. No browser check, test, build, or reindex was run for this correction. The 117-test pass below remains evidence for the preceding tree; it is not visual acceptance of this fix. Save data and JavaScript behavior were unchanged.

## Owner-run harmony verification — October 21

Ryan supplied the complete [terminal transcript](archive/verification-2026-10-21-harmony.txt) from Node v26.7.0 after the harmony implementation. This supersedes pending-verification statements for that implementation; the earlier checkpoints below retain their historical scope.

| Owner-run command | Result | Evidence boundary |
| --- | --- | --- |
| `npx gitnexus analyze` | GitNexus 1.6.12 reported successful indexing: 1,465 nodes, 5,435 edges, 49 clusters, 125 flows | Index rebuild evidence, not a test or a complete change-impact report. Progress output includes an abbreviated truncation diagnostic; no claim of complete graph resolution follows from the success message. |
| `npm run verify:harmony` | Syntax PASS; structural content/manifest/fallback contracts PASS for all twelve packs; **117/117 tests PASS**, zero failures, cancellations, skips, or todos | Eleven focused test files, not the full Node suite. The checker found recorded review evidence for all 320 cases; it did not independently revisit sources or establish human editorial approval. |
| `npm run build:offline` | Successful output at `dist/carmen-offline.html`; file presence also confirmed during the documentation follow-up | Build and packaging evidence. Opening, playing, local-file persistence, and installed voices still need browser/personal-use evidence. |

The repeated `No network in harness` warnings are expected: the harness deliberately supplies a rejecting `fetch`, and real boot code logs its switch to the built-in fallback. The affected boot regressions pass. These warnings do not identify a production network fault or prove real HTTP loading.

No runtime or test changes were needed in response. This follow-up only archives the supplied evidence and reconciles documentation; agents did not rerun tests, builds, or analysis. Browser/assistive-technology acceptance, source/map-coordinate refresh, and publication remain separate. Changes remain local, unstaged, and uncommitted.

## Harmony follow-up — October 21, after the project review

Ryan asked to implement the identified corrections and next actions while leaving tests, builds, and reindexing to him. His pre-edit index recorded `a0e71b4` at October 21 16:51:54 UTC: 77 files, 1,132 symbols, 4,011 edges, and 96 flows. Read-only impact/source tracing informed the edits; the owner's later rebuild is recorded above. No agent ran analyze/reindex.

Implemented locally: the activity catalog expands to 47 activities in four forms, with explicit catalog identity preserving existing Mixed saves; shorter routes choose bounded windows beyond the old fixed prefix, and recent-case history reduces repeat exposure. Case presentation removes repeated boilerplate where existing specific evidence can carry the dispatch. All 48 existing six-concept transfer prompts are available in unscored Study. Compact warrants reduce the required selection count while retaining the complete original answer combinations and scoring. New games display location-specific fictional names for 192 desk/disguise pairs consistently in clues, controls, hints, explanations, and Study; canonical saved answers and older catalog wording remain intact. Original pack JSON, source metadata, content versions, and generated fallback remain unchanged.

Study / Notebook pauses the investigation, opens its current case, and provides direct selection, answer reveal, saved cases, optional notes, and explicit Again/Got it review scheduling. Notes save locally with conflict checks; retained drafts survive case switches and are included in export. Backup inspection validates the notebook and active save separately, previews replacements, and checks storage snapshots again at confirmation. Optional read-aloud accepts only browser-designated installed local voices, never autoplays, and keeps the full text available. The [Study/recovery guide](study-and-backup.md) documents contracts and limits.

New save schema 7 records route start and activity catalog version. Valid matching-content schema-5 and schema-6 saves keep their original route/activity behavior and upgrade on write; older builds reject schema 7. Remaining trusted-text rendering sinks are escaped, the henchman authoring script uses the established unique-file writer, and separate activity, warrant, study, and save adapters reduce controller concentration. An optional offline builder embeds local assets and all packs with a text route; Ryan subsequently built it successfully. Page loading, syntax coverage, and deployment packaging include fourteen runtime modules, without publishing them.

**Owner verification passed:** the current syntax/content gates, 117 focused tests, and offline build passed as recorded above. Agents ran none of those commands. The [finish plan](finish-plan.md) retains the reproducible command and remaining personal-use checks. Browser/voice/assistive-technology acceptance, exact map-pin/source re-verification, and personal comfort remain separate evidence. All work remains local, unstaged, and uncommitted; no push, deployment, or publication occurred.

The earlier October 21 checkpoint below preserves the first 20-activity/schema-6 implementation as history and is superseded by this follow-up for current functionality.

## Project review and quiz variety — October 21

The [project review](project-review-2026-10-21.md) records the source-based orientation, content inventory, opening Git diff, corrections, and remaining opportunities. The baseline was `a0e71b4`, with only AGENTS.md, CLAUDE.md, and README.md modified. Ryan's existing October 21 16:13 UTC index covered 72 files, 999 symbols, 3,366 relationships, and 84 flows. Pre-edit core/session and puzzle-rendering impact was CRITICAL; answer handling was HIGH. UNKNOWN file-level results were supplemented with current imports, HTML bindings, and test-harness source. That index predates the changes below and is now stale for edited/new files. No reindex ran.

Implemented locally: Mixed activities defaults for new runs, Classic four choices remains selectable, and twenty authored alternatives add fifteen sequences and five matches across all twelve exact pack versions. A seeded adjustment includes at least one alternative when the selected route has a compatible case. Other cases keep four choices. Mixed report rounds two and three order four evenly spaced visited stops and match their tokens; the original first-case question remains round one. The inventory stays available. The [activity guide](quiz-activities.md) records coverage and controls.

Native cards, Undo last, Clear work, and Check work preserve partial selections and rejected arrangements. Each distinct rejected complete answer costs one life; repeating the same rejected arrangement costs no additional life. Correct feedback waits for Continue. Opted-in A–D/1–4 keys now work from puzzle tabs, choices, and cards while protecting forms, links, unrelated controls, modifiers, repeats, and composition. Worked activity answers are included in evidence review.

New saves use schema 6. Valid historical schema-5 saves with matching pack/content versions resume as Classic and upgrade on the next write; older builds reject schema 6. Scoreboards separate quiz format, with valid older records without a format treated as Classic. No pack JSON, content version, authoring generator, or generated fallback changed. The new activity catalog and browser adapter are included in page loading, syntax coverage, and deployment packaging; this does not publish them. SPEC/ROADMAP version drift and the README deployment sentence were corrected.

**Verification pending:** no tests, syntax/content/release gates, builds, browser checks, external source fetches, or GitNexus analyze/reindex ran for this implementation. New focused activity tests and updated regression source are authored, not executed; existing regression helpers explicitly select Classic, with new cases covering Mixed. The [finish plan](finish-plan.md) provides the owner-run command. Earlier 40/40 and 50/50 original-pack results remain historical. The twenty alternatives reuse existing written evidence and do not renew external factual review, establish runtime correctness, or demonstrate input comfort. A short personal input check is optional; a full human audit is not required for personal use.

All current work remains local and uncommitted. No staging, commit, push, deployment, or publication occurred. Earlier authorization/commit statements below apply only to their dated historical work.

## Editorial follow-up to supplied independent review — October 17

Applied the supplied review's seven wording/source-scope findings across six packs and their companion ledgers. The [all-pack amendment](all-packs-fact-check.md#october-17-editorial-follow-up) records the exact corrections, unresolved source limits and provenance. It does not claim a second online review. Norfork's milestones now distinguish the previously reviewed construction start in 1941 from completion in 1944; its unconfirmed 1949 component-completion claim is removed. Barstow's 1910–1913 range is explicitly NPS's chronology. Bentonville's source and review sidecar regenerate its pack/fallback together.

Current content versions are Bentonville 5, Argentina 6, Northwest Arkansas 3, Route 66 2, Ozark Waterways 2 and Railroads & Depots 2. Earlier saves for those six edited packs are incompatible; case IDs and correct-option indices remain stable. Catalog size remains 12 packs and 320 cases. Other pack versions and save schema 5 are unchanged.

Read-only GitNexus impact found LOW for `createCase` with a callable-value caveat; other edited data/constant/fallback targets were UNKNOWN or absent. The index is two commits behind HEAD. Source references confirmed the dynamic consumers and save guard. No analyze was run. No tests, separate syntax/content/release gates, browser checks, staging, commits, pushing or publication were run. The short content build's intrinsic `validatePack` calls ran while writing the generated Bentonville artifacts. The focused owner-run command is in the [finish plan](finish-plan.md); no separate verification result is asserted for this amendment.


### Final consistency review — October 17

Static review covered the six pack diffs, relevant case/source records, Bentonville's authoring inputs, generated pack/fallback, and companion documentation. No further gameplay change was needed. The fallback JSON payload exactly matches the full 40-case Bentonville pack at content version 5; sidecar overrides match generated metadata. Remaining documentation corrections align README versions/save guidance, per-pack ledger version labels, historical counts and the October 15 source-read scope. The [all-pack final-review note](all-packs-fact-check.md#final-consistency-review--october-17) records the limits.

This final pass ran no tests, browser checks, builds, validators, app modules, content/release gates or GitNexus analyze. Read-only documentation impacts were MEDIUM for the linked ledgers/status, UNKNOWN for README, and absent/UNKNOWN for the all-pack ledger; no runtime processes were resolved. Current source/link inspection supplied the missing confirmation; the index remains two commits stale. No changes were staged or committed.

## Latest all-pack fact check — October 15

At the October 15 checkpoint, the active pack data had **320 cases with AI-assisted source/editorial review evidence and zero pending cases**. The [all-pack fact-check ledger](all-packs-fact-check.md) records the 72 newly completed cases, primary sources, corrections and review limits. Argentina advanced from content version 4 to 5 because answer/clue semantics changed; Bentonville remains at version 4. Version-4 Argentina saves are incompatible. Ryan supplied a read-only `createCase` impact result rated LOW with a lower-bound callable-value caveat; source inspection confirmed the registration and authoring-test references. Bentonville's review metadata now lives in an authoring sidecar consumed by its generator, and the generated pack/fallback were synchronized. No tests, `check:content`/release gate, GitNexus analyze, staging, commits or publication were performed. The content generator's own `validatePack` check ran as part of `npm run build:content`.

The sections below preserve their dated historical checkpoints. Their pending-review counts and version-4 references describe those earlier states and are superseded by the October 15 ledger and October 17 amendment where the current workspace is concerned.

## Remaining six pack concepts — October 14

The earlier idea list is complete: Ozark Waterways, Arkansas Delta, American National Parks, Railroads & Depots, Architecture & Hidden Details, and Museums & Missing Labels. Five packs start at content version 1 with eight stops and three cases per stop; Museums & Missing Labels uses content version 2 after replacing its Exploratorium entry case. The additions contain 144 cases and 48 companion transfer activities. At the October 14 checkpoint, the catalog had **12 packs and 320 cases: 248 AI-assisted reviewed and 72 original-pack cases pending**. The [completion ledger](remaining-packs-review.md) records every case key, worked distractor reasoning, source passage scope and transfer activity.

The case review checked source facts, supplied fictional records, unique answers, all hints, explanations and explicit witness-supported desk/disguise warrants together. Every essential clue is text. The sources distinguish similarly named rivers, design and construction dates, component and whole-object claims, historical exhibitions, casts and reconstructions, preserved objects and replacements, document subjects and provenance, and collection coverage versus lifespan. Native communities, enslaved labor and historical uncertainty retain their documented context. No historical testimony is invented. Some primary pages were read through official indexed text when direct opening/search was unavailable, as noted in the ledger.

All six files are registered in the manifest. The existing catalog assertion now lists 12 pack IDs; route-generation and 4/6/8-stop session tests already iterate the manifest. Current-source inspection confirmed loading, validation/review metadata, hints, local warrant choices, selected-case finale reuse and deployment’s all-pack glob. No runtime, generated fallback or CSS changes are needed. Save schema remains 5; Museums & Missing Labels uses content version 2 while the other five new packs use content version 1.

Read-only GitNexus query/impact ran before integration edits. The manifest and content-test file returned UNKNOWN with no resolved callers; the index remains at `2526e39`, two commits behind the clean starting tree `c44cfd1`. Source references confirmed the dynamic consumers. The empty graph results were not treated as clearance, and no reindex was run.

**Verification pending:** the agent ran no tests, content/syntax gate, builds, browser checks or GitNexus analyze. The six new packs, integration and documentation reconciliation are bundled into logically grouped local commits under Ryan's authorization. Pushing and publication remain separate actions. The current Git review confirmed no submodules, tracked gitlinks, nested checkouts or active hooks. The focused owner-run command in [the finish plan](finish-plan.md) remains the next check. Prior automated and graph results below retain their original scopes.

## Earlier Arkansas State Parks and Route 66 additions — October 14

The earlier two hand-authored packs, `arkansas-state-parks-carmen` and `route-66-carmen`, each have eight stops and three cases per stop at content version 1. At that review the catalogue contained 176 cases: 104 AI-assisted reviewed and 72 original-pack cases pending. Their [48-case ledger](parks-route66-review.md) records primary-source scope, supported answers, distractor reasoning and 16 companion transfer activities. Each case has three progressive hints, text-only evidence, an explicit witness-supported desk/disguise warrant and an attributed October 14 review. The cases emphasize chronology, document conflicts, corroboration and the limits of inference. A normal run selects one variant per stop.

The manifest registered both packs; the catalog assertion then expected six IDs. Existing route-generation and 4/6/8-stop session tests already iterated the manifest. Source inspection confirmed manifest loading, production content validation, hint consumption, selected-case finale reuse and the deployment pack glob. No runtime, generated fallback, existing-pack or CSS changes were needed. Both packs have independent save identities; save schema remains 5.

Ryan refreshed GitNexus during authoring. Metadata records commit `2526e3948e453ce18994ea57d64e3814fb24bedc` at `2026-10-14T22:06:15.366Z`, with 60 files, 887 nodes, 3,179 edges and 75 processes. This covers the committed four-pack baseline, not the subsequent packs. Read-only impacts for `data/quiz-packs.json` and `tests/content-validation.test.js` still returned UNKNOWN with no resolved callers. Current source references confirmed their integration; the empty graph result was not treated as clearance. The agent did not analyze/reindex.

**Verification remains pending:** no tests, syntax/content gate, builds or browser checks were run by the agent. The source/editorial review does not establish runtime behavior or human learning acceptance. Run the focused command in [the finish plan](finish-plan.md), then try a short local route with the preferred input method. Prior two-pack test results below keep their historical scope. Ryan subsequently authorized review of the full accumulated changes, documentation reconciliation and logically grouped local commits. The review is recorded below. No push or publication was performed.

## Full-change review and local commits — October 14

Ryan explicitly authorized reviewing all current changes, aligning the documentation and creating logical local commits. The review covered both new JSON packs and all 48 cases, manifest paths/identities, the changed content-test assertion, the existing manifest-driven route/session tests, production loader/validator/hint/finale consumers, the generated-fallback boundary, deployment packaging and every changed guide. No runtime, generated Bentonville asset or CSS changes were needed.

Three editorial clarifications were made: Jacksonport’s supplied case excerpt omits a construction date even though the full source separately dates the courthouse to 1872; Mammoth Spring arrows now explicitly mean flow from one named feature to the next; the Ozark Folk Center question now explicitly requests correction of the faulty release log. All case keys and pack versions remain unchanged. The case ledger reflects these changes. The official Historic Washington, Jacksonport, Blue Swallow and Harvey House source pages were reopened during this review; earlier claim-specific source evidence remains scoped to the claims in the packs.

The read-only graph query located pack-loading and validation references. Pre-edit file impacts for the new packs and their new ledger returned UNKNOWN/not found because they are absent from the existing index. README and the unindexed changelog also returned UNKNOWN; current source/link references supplied the missing confirmation. Documentation impacts resolved the README/roadmap/finish-plan/status links with low or medium risk and no affected runtime processes. The initial complete structured `scope: all` change report listed 18 tracked files, 31 changed section symbols and no affected processes at low graph impact, with no error/partial/truncation flag. The CLI display abbreviates its symbol list, so the complete underlying result was retrieved and all 31 entries inspected. This report excludes then-untracked additions and does not assess JSON facts or behavior; both new packs and the ledger were inspected directly. Staged reports are inspected again for each commit group using the same existing index; no analyze is run.

The commit groups are (1) the two reviewed packs, manifest/test integration, case ledger and content-authoring contracts; (2) README, roadmap, specification, changelog and current status/QA/deployment guidance. The catalogue is six packs and 176 cases, with 104 AI-assisted reviewed and 72 original-pack cases pending. Historical verification transcripts and original review scopes are preserved. The current Git inspection found no submodule declarations, gitlinks, nested source checkouts or active commit hooks. No tests, syntax/content gate, builds, browser checks or GitNexus analyze were run by the agent. Local commits do not update the hosted preview.

After staging the new files, the complete `scope: all` report covered all 21 changed files and listed 32 indexed section symbols with no affected processes, low graph impact and no error/partial/truncation flag. The content group's complete staged report covered eight files and four indexed documentation sections, also with no affected processes and low graph impact. Both symbol lists were inspected in full; JSON contents, the new ledger and the changed test assertion still depend on direct source review because the index predates them. The staged whitespace check was clean.

The content group is `726f551` — `feat(content): add investigative Arkansas parks and Route 66 packs`. The documentation group records the final six-pack state and this review. Its staged graph and whitespace reports are inspected before committing. The owner-run focused check remains the immediate next step; a commit is not a behavioral verification result.

## Northwest Arkansas pack additions — October 13

Two new local packs are registered in the manifest: `northwest-arkansas-carmen` and `nwa-mountain-biking-carmen`, each now at content version 2 with eight stops and three variants per stop. At that review, the catalogue contained 128 cases, with 56 cases reviewed and 72 original-pack cases pending. The new content includes text-only evidence, three progressive hints, fictional suspects, distinct inventory tokens, worked explanations, and per-case source links. All 48 new cases now have claim-specific AI-assisted editorial review dated October 13, attributed to Codex. The [case ledger](content-audit.md) records exact IDs, keys, source-passage scope, corrections and companion transfer activities. The review covers facts, clues, all answer choices, hints, explanations and warrants; source flags cover those claims only. Version 1 saves for these new packs are incompatible after the warrant/evidence revisions. This is not human sign-off.

Bentonville and Argentina remain at content version 4. Their JSON, the generated fallback and CSS were not changed. The subsequent full-change review changes only the selector’s blanket pending-review status message in runtime code. The existing content test now requires the new pack IDs, and the existing session-completion test reads every manifest entry for 4/6/8-stop runs.

Read-only GitNexus query found the pack loading/validation flows. File-level impact for the manifest and two edited test files returned `UNKNOWN`, not a clean risk result. Current-source references confirmed the manifest-driven loader, checker, test entry points, and deployment glob. Ryan subsequently ran `npx gitnexus analyze`. Metadata records indexed commit `2367b903192e49d472cbae64c2a1eae46715993b` at `2026-10-13T18:18:41.116Z`, with 60 files, 878 nodes, 3,156 edges and 74 processes. This refreshed index recognizes both new pack files, but their file-level impacts still return UNKNOWN. Current-source inspection confirms the manifest loader, hint consumer and selected-case finale reuse. The agent did not reindex.

**Verification pending:** no tests, syntax/content checks, browser checks, or GitNexus analyze were run by the agent. The changes are grouped into local commits and remain unpublished. Earlier results below apply to the original two-pack tree only. Ryan can run:

```sh
cd /Users/ryanjohnson/Projects/nonsense/carmen
npm run check:content && node --test tests/content-validation.test.js tests/run-generation.test.js tests/session-regressions.test.js
```

For a short personal browser check, select each new pack, start four stops, use a hint, solve a puzzle, issue its warrant, and pause/resume using the preferred input method. Approximate map pins, current trail conditions and human acceptance remain outside the completed case review.

## Full-change review and local commits — October 13

Ryan explicitly authorized reviewing the entire working tree, reconciling documentation and grouping all approved changes into logical local commits. The review found one remaining UI inconsistency: `selectQuizPackById` always labeled factual review pending. Its status text now points to per-case source links and editorial status. The existing per-case review predicate remains authoritative; no save, scoring or route behavior changes.

Reviewed the two pack files and prior 48-case source ledger, manifest identities and paths, production loader/validator and finale/hint consumers, the two test diffs, generated-fallback ownership, deployment glob, and documentation. The new packs require no generated Bentonville or CSS changes. No additional blocking issue was found by source inspection. This is a source review, not a test pass; the focused command above and browser/input checks remain unrun for the four-pack tree.

Ryan’s second October 13 refresh records `2026-10-13T18:53:50.394Z` at `2367b903192e49d472cbae64c2a1eae46715993b`: 60 files, 884 nodes, 3,173 edges, 31 communities and 75 processes. Read-only impact for the selector function returned LOW, with direct callers `loadQuizPack` and `selectQuizPackFromControl`. Documentation impact resolved README → roadmap → finish-plan links; UNKNOWN file results were confirmed against current source references.

The full structured pre-commit `scope: all` report, after staging the new JSON files and before this final status addition, reported **22 files, 41 symbols, one affected flow and medium risk**. All 41 symbol entries and the one `SelectQuizPackById → SetTextIfPresent` flow were inspected; there was no result-level error, partial or truncation flag. The symbol list covers Markdown sections and the selector function, not the contents of pack JSON or all changed test code. Direct source review supplies that missing coverage; the graph is not proof of factual or behavioral correctness. The index predates the review’s final edits and will retain its indexed commit until an owner-run refresh; no immediate reindex is required to record local commits.

The two commit groups are: (1) reviewed NWA packs, manifest/test integration, corrected selector copy, content ledger and authoring contracts; (2) README, roadmap, specification, changelog and operational/QA/status documentation. Historical transcripts retain their original results. There are no registered submodules, tracked gitlinks, nested Git checkouts or active standard commit hooks. The agent ran no tests, syntax/content gates, builds or GitNexus analyze. Local whitespace checks were clean. No push, deployment or publication is included.

## Original two-pack evidence — October 12


**October 12 state: eight cases have AI-assisted source/editorial review, four per pack; 72 remain pending. Both packs are content version 4. Ryan completed the exemplar graph refresh, syntax/content checks and focused tests: 40/40 passed.** The [exemplar guide](reviewed-exemplar.md) contains exact case IDs, full prompts, worked answers, transfer activities, claim/source passages and review limits. The reviewer is Codex, explicitly identified as AI-assisted; this is not Ryan's or an educator's sign-off.

The preceding runtime correction pass after `c12e772` passed Ryan's focused automated verification at content version 3: syntax PASS, content/fallback contracts PASS, and 50/50 tests PASS, including all 12 new correction regressions. No failing check in that supplied output required a runtime fix. A documentation-only follow-up recorded those results; the later exemplar is a separate content change and does not inherit that pass as fresh verification.

This is the authoritative revision-specific evidence record. [Review reconciliation](review-reconciliation-2026-10-12.md) explains which October 5 findings survived `c12e772`, which changed, and what remains proposed.

**Latest verification submission:** Ryan supplied the successful post-commit GitNexus refresh at `84ae82d` and comparison against `c12e772`: 861 nodes, 3,124 edges, 31 clusters and 73 flows; 31 changed files, 109 symbols and 31 affected flows at critical impact. The complete read-only comparison confirms those counts, with no report-level error, partial or truncation flag. This is graph evidence, not a new test result. Details and archives follow below.

**Latest behavioral verification:** Ryan's focused version 4 run under Node v26.7.0 passed syntax, content/fallback contracts and 40/40 tests, with no failures, cancellations, skips or todos. The [complete transcript](archive/verification-2026-10-12-exemplar-focused.txt) is preserved verbatim. The new graph submission identifies no failed check requiring a code fix. This follow-up updates documentation and archives only; no tests or GitNexus analyze were run by the agent. The next action is a short personal browser/input check, not another automated run solely for these documentation changes.

## GitHub Pages publication — October 12

Ryan subsequently authorized hosting this project on GitHub Pages. The [public preview](https://ryan258.github.io/carmen/) was deployed from `af5c7b41c17e8f0f51b5ef8ed01104bc1891c1eb` by [successful run 38314012679](https://github.com/ryan258/carmen/actions/runs/38314012679). The site root, all 14 packaged application files and `version.json` returned HTTP 200; application bytes matched the local files and the version endpoint matched the deployed commit. HTTPS is enforced. The workflow publishes checked-in assets when relevant files change on `main`, with no npm install, content/CSS rebuild, tests or GitNexus analyze. [Deployment and recovery details](deployment.md) record the configuration and evidence.

This is publication/file-delivery evidence only. Content versions, the eight reviewed cases, 72 pending reviews and prior focused-test results are unchanged; no browser/AT or learner acceptance is claimed. The subsequent documentation-only record does not trigger a new deployment. Earlier authorization limits below describe the respective review tasks, before Ryan separately requested hosting.

## Post-commit graph reconciliation — October 12

Ryan ran `node .gitnexus/run.cjs analyze --index-only` followed by `node .gitnexus/run.cjs detect-changes --scope compare --base-ref c12e772 --repo .`. Both completed successfully. Local metadata records **October 12, 21:40:44 UTC**, branch `main`, indexed commit **`84ae82df0ceafcbb805d72e617d69d7bec99054b`**. Before this follow-up's documentation edits, read-only status confirmed matching analyzer runner identity and content for **all 53 covered files**. The agent did not rebuild the index.

| Evidence | Result |
| --- | --- |
| Owner-run index | 861 nodes, 3,124 edges, 31 clusters, 73 flows |
| Comparison range | `c12e772` through `84ae82d`, the three commits listed below |
| Git file diff / graph summary | 31 changed files / 109 changed symbols / 31 affected flows / **critical** risk |
| Full structured payload | 109 symbol entries and 31 flow entries; no report-level error, partial or truncation flag |
| Existing behavior evidence | Version 4 focused 40/40 pass; separate historical version 3 focused 50/50 pass |

The [owner console transcript](archive/verification-2026-10-12-post-commit-gitnexus.txt) preserves the supplied output. The [structured comparison](archive/gitnexus-2026-10-12-post-commit-changes.json) is the agent's read-only retrieval from that existing index before editing, using its recorded analyzer runtime and installed package. The CLI lists only the first 15 symbols and 10 flows; its “and 94 more” and “and 21 more” are presentation limits. The full payload resolves symbols in 20 of the 31 changed files. A counted file without symbol entries is not proof that its changes are covered; HTML, pack data, archives and some test changes still rely on the recorded source/contract review. Dynamic calls can also remain unresolved.

**Critical impact remains in force.** The full flow list covers the already-reviewed route-count/finale/save consumers, map lifecycle and retry, modal close, new-case selection and shared settings. It does not report a new runtime failure. The larger comparison includes the previously untracked files committed in the three groups; it must not be compared to the earlier 23-file working-tree reports as though the scopes were identical. The clipped analyzer `truncation` and `name-fallback` log fragments do not reveal the diagnostic scope. Neither successful indexing nor the absence of report-level truncation certifies complete call resolution.

The runner-identity message caused a successful full rebuild. Metadata records Node v22.22.3 for the selected analyzer runtime; the shell header reports Node v26.7.0. No repair or immediate repeat is indicated. Future refreshes should use the same project runner consistently.

This follow-up began with a clean tree at `84ae82d`, matching the local `origin/main` reference. Review found stale status prose claiming the index still recorded `c12e772`; the owner-run refresh supersedes that statement. README, roadmap, finish plan, reconciliation, changelog and this record now distinguish the latest graph evidence from the latest tests. Runtime, content, generated outputs and tests are unchanged. The other implementation, authoring and QA docs retain their applicable contracts and open acceptance checks. No submodules, tracked gitlinks, nested source repositories or active commit hooks were found.

Ryan separately authorized review and local commits for this follow-up. The documentation and its two evidence archives form one coherent commit. Pre-edit documentation impact resolved links from README and the other guides to this record; UNKNOWN README and unindexed changelog results were checked against the files and text references rather than treated as clearance. No tests, builds, browser checks or GitNexus analyze are part of this follow-up. The index will retain `84ae82d` until a later owner-run refresh; no immediate reindex is needed just to archive these results.

The complete pre-commit `scope: all` report for these eight staged documentation/evidence files returned low graph impact, no affected runtime flows and no report-level error, partial or truncation flag. It uses the existing index, so newly added sections and archives still require direct inspection. The source diff and both new archives were reviewed, all 44 local link targets in the six edited Markdown files exist, and the staged whitespace check passed. The archived JSON matches the original read-only retrieval. These are documentation and Git checks, not behavioral tests.

## Review for local commits — October 12

Ryan explicitly authorized a one-time review and logically grouped local commits. The review covered the entire accumulated diff after `c12e772`: runtime and HTML bindings, all changed test files, authored and generated pack changes, the companion guide, current documentation and the untracked evidence archives. **No new blocking defect was found.** No runtime, pack, generator or test changes were needed during this final review; documentation was reconciled with the accepted version 4 state.

The source review traced saved-case replacement through modal cancellation and storage changes, shortcut opt-in through settings and HTML bindings, the minimum route length through save/finale consumers, and map load/error/retry through session cancellation. The eight source pages linked in the [exemplar ledger](reviewed-exemplar.md) were reopened; their scoped claims remain supported. Each exemplar's evidence, unique answer, distractor explanations, warrant and transfer activity were reviewed together. The generated fallback has Ryan's current content/core contract evidence. This does not promote the other 72 cases or certify shared map/location metadata.

The existing local index at inspection was newer than the archived owner transcript: **October 12, 21:05:43 UTC; 860 nodes, 3,122 edges, 31 clusters, 73 flows**. Read-only status found matching runner identity and all **53 covered files** before this documentation reconciliation. The agent did not build that index. The complete read-only change report returned **23 tracked files, 71 symbols, 31 affected flows, critical impact**, with no error, partial or truncation flag. That initial tracked-diff count excludes seven then-untracked files, which were separately read during review. Staged change reports are inspected again when preparing each commit; no analyze is run.

Impact remains **CRITICAL** for route counts, map initialization/fallback/drawing/reset and modal close, and **HIGH** for shared settings. Direct consumers include save validation, route selection/records, start/resume/finale, preference toggles and storage-event handling. HTML-bound entrypoints returned UNKNOWN; their actual `onclick`/load/error bindings and regression references establish use. The ambiguous `stopCounts` lookup was resolved with its exact function ID and source references. No empty graph result was treated as clearance.

There are no registered submodules, tracked gitlinks or nested Git repositories in the project source tree. No active commit hooks were found. `git diff --check` found no whitespace errors. Tests, syntax/content gates, builds, browser checks and GitNexus analyze were not rerun; the separate owner-run version 3 and version 4 results below remain the behavioral evidence.

The local commit groups are runtime reliability and its regressions; version 4 content, its authoring regression, generated assets and companion guide; then project documentation and archived verification evidence. This one-time authorization does not include pushing, publishing or deployment. A commit boundary does not constitute an additional test run or a release acceptance result.

| Local commit | Scope |
| --- | --- |
| `c7ddf6c` — `fix: protect saved cases and recover optional maps` | HTML/controller/core/map corrections and their three regression files |
| `63c57e4` — `feat(content): add eight source-reviewed learning exemplars` | Both version 4 packs, Bentonville generator/fallback, authoring regression and companion guide |
| `84ae82d` — `docs: reconcile project state and verification evidence` | README, roadmap, specification, authoring/QA/status docs and archived owner evidence |

The first two complete staged reports cover 7 files/42 symbols/31 flows at critical impact and 6 files/17 symbols/0 resolved flows at low graph impact, respectively, with no error/partial/truncation flag. The content report's zero resolved flows does not assess educational correctness or generated-data parity; source review and Ryan's supplied contract results provide that evidence. At commit time the index still recorded `c12e772`; Ryan's subsequent refresh at `84ae82d`, recorded above, supersedes that historical index state. No reindex was run by the agent.

The documentation group contains 18 files; its complete staged report lists 50 symbols and no affected runtime flows, with low graph impact and no error/partial/truncation flag. The staged whitespace check reports only four original terminal-prompt lines in the verbatim owner transcripts. Those trailing spaces are intentionally preserved as evidence; the check passes with those transcript files excluded. This is an archive-format exception, not a test failure or an executable-source change.

## Eight-case exemplar pass

- Rewrote `classic-downtown-square`, `classic-walmart-museum`, `classic-crystal-bridges`, `classic-the-momentary`, `obelisco-avenida`, `puente-inca`, `classic-salta` and `jesuit-block`.
- Read specific primary-source passages from the market operator, Walmart, Crystal Bridges, the Momentary, Buenos Aires city tourism, Argentina's government, the train operator and UNESCO. The guide records the supporting sections, excluded claims and retrieval limits. A linked homepage alone was not accepted as evidence.
- Added three progressive hints, an observable objective, explicit fictional records and an explanation for each choice. Companion transfer questions have answer reasoning and observation guidance; there is no new in-game transfer-question or case-picker feature.
- Added eight scoped source records and claim-specific review metadata. The remaining 72 cases and their earlier source records retain pending status. Shared map coordinates and broader location metadata were not audited in this pass.
- Retained case IDs, location order and scoring. **Both content versions advance from 3 to 4** because answers/evidence change; save schema 5 is unchanged. Version 3 saves cannot resume against version 4; existing incompatible-save and explicit replacement controls apply. Old completed records remain in their own version buckets.
- Ran **content generation only** (`npm run build:content`) to update Bentonville JSON and its fallback. That command's built-in pre-write validation completed; it is not a run of the separate syntax/content gates or test suite. Argentina remains hand-authored. No CSS generation was needed because the cases use the existing `evidence-note` class.
- Updated the existing authoring regression to explicitly remove review evidence from its negative fixture and to reject an unreviewed cited source. **Tests, syntax/content gates, browser/AT checks and GitNexus analyze were not run by the agent.**

### Exemplar pre-edit impact

Bound repository/worktree: `carmen`, `/Users/ryanjohnson/Projects/nonsense/carmen`, HEAD `c12e772`; existing October 12 correction-pass index. Read-only `createCase` impact returned LOW, one direct caller (the generator), zero resolved processes and a callable-value boundary. Generator/test File impact returned UNKNOWN. Source inspection confirmed `casesByLocation → createCase → quizPack`, the authoring-test import and package test glob, generated Bentonville JSON, and the fallback builder/content checker. Those concrete references resolved the edit scope; the empty graph edges were not treated as an all-clear. No generator function or runtime controller logic was changed for the exemplar. Ryan subsequently refreshed the graph as recorded below.

### Exemplar graph result — owner run, October 12, 20:27:52 UTC

Ryan supplied successful output for both `npx gitnexus analyze` and the project runner's `analyze --index-only`, followed by `detect-changes --scope all --repo .`. The final index contains **856 nodes, 3,113 edges, 31 clusters and 73 flows**. Change detection reports **23 tracked changed files, 70 symbols, 31 affected flows, critical impact** against the accumulated working-tree changes after `c12e772`.

The agent performed read-only status and structured change-report inspection, with no analyze or tests. Before this documentation update, status reported matching runner identity and content for **all 50 covered files**. The full structured report returned 70 symbols and 31 affected-flow entries with no error, partial or truncation flag. The [saved structured report](archive/gitnexus-2026-10-12-exemplar-changes.json) is an agent-retrieved read-only result; the [owner transcript](archive/verification-2026-10-12-exemplar-gitnexus.txt) preserves Ryan's supplied console text.

The CLI formatter displays only 15 symbols and 10 flows, which accounts for “and 55 more” and “and 21 more.” The clipped `truncation` diagnostic in analyzer progress is a separate ingestion message; its incomplete text does not identify the warning's scope. Successful indexing and a complete change-report payload do not prove every dynamic call was resolved. The critical rating remains: affected steps include route counts, map lifecycle/retry, modal close, new-case selection and shared settings from the earlier runtime corrections. It is a risk/coverage signal, not evidence that those paths failed a test.

The second analyze rebuilt because its runner provenance differed from the first invocation. The final metadata records Node v22.22.3 for the selected analyzer runtime, while Ryan's shell header reported Node v26.7.0. The rebuild succeeded; no runner repair or immediate repeat is indicated. Use one invocation consistently for future refreshes.

The 23-file count covers tracked diffs, not every untracked artifact. At this inspection, the exemplar guide, review reconciliation, prior verification transcript and first-correction test file were also untracked. This result does not replace source/editorial inspection of those files. This follow-up changes status documentation and adds evidence archives only; runtime, pack content, generated fallback and test code are unchanged. Its new documentation will appear in a later graph refresh; no repeat analyze is needed solely to record this result.

### Exemplar focused verification — owner run, October 12

Ryan's supplied run passed `check:syntax` and `check:content`. The content checker accepted both packs' structural contracts and fallback, reporting **80 cases, 72 still needing factual/editorial sign-off**. All 40 tests passed, with 0 failures, cancellations, skips and todos.

| Test file | Passed |
| --- | ---: |
| `tests/authoring.test.js` | 6 |
| `tests/content-validation.test.js` | 4 |
| `tests/core-contracts.test.js` | 6 |
| `tests/run-generation.test.js` | 4 |
| `tests/session-regressions.test.js` | 20 |
| **Total** | **40** |

This run exercises authored reasoning/review metadata, malformed review/source rejection, manifest and fallback consistency, pack validation, seeded routes, save/resume and session behavior. `first-correction-pass.test.js`, `smoke.test.js` and `scoring.test.js` were not included. The earlier 50-test correction result is a different version 3 subset with overlapping tests; do not add the totals or describe either result as a current full-suite pass.

The two `No network in harness` diagnostics come from the deliberate rejected fetch in `tests/helpers/game-harness.cjs`, during the boot/storage and keyboard-shortcut regression scenarios. Both tests passed using the built-in fallback. These messages do not indicate a failed test or establish real-browser/network behavior. This automated pass also does not establish source truth, human editorial approval, accessibility conformance or learning effectiveness.

Ryan completed the following command. It is retained for reproducibility, not as a request to repeat it after this documentation-only update:

```sh
cd /Users/ryanjohnson/Projects/nonsense/carmen &&
npm run check:syntax &&
npm run check:content &&
node --test tests/authoring.test.js tests/content-validation.test.js tests/core-contracts.test.js tests/run-generation.test.js tests/session-regressions.test.js
```

Content generation is already done. If further Bentonville authoring edits are made, run `npm run build:content` before verifying them; keep the generated JSON and fallback together. A full `npm run verify` remains optional broader coverage and has not been supplied for version 4. No broader run is required merely to record this focused pass.

Ryan already completed this graph refresh and impact report. These commands are retained for the next meaningful source change or explicitly authorized commit; do not repeat them solely for this status update:

```sh
node .gitnexus/run.cjs analyze --index-only &&
node .gitnexus/run.cjs detect-changes --scope all --repo .
```

`npm run check:release` should still fail for the 72 pending reviews. It is not part of the expected-green command. Nothing here authorizes staging, committing or publishing. Check one companion activity and one game explanation with the preferred input method before making claims about reading effort, reflow or learner acceptance.

## Evidence by revision

| Revision or state | Evidence | Boundary |
| --- | --- | --- |
| October 3 tree, later reviewed at `e2c6bcb` | Repository history records `npm run verify`, 52/52 Node tests, and successful content/CSS generation | Historical evidence; not rerun during the October 5 review or this pass |
| `c12e772` baseline, October 12 | Ryan supplied Node v26.7.0 output: syntax PASS; content/fallback contracts PASS; `core-contracts`, `session-regressions`, and `authoring` tests PASS, 32/32 | A targeted subset, not a fresh full-suite result; all 80 cases were still pending factual/editorial review then |
| Baseline index, October 12, 19:24 UTC | Ryan ran GitNexus analyze at `c12e772d40bfedb6b71f40e1afc83c0b51b3af2e`: 791 nodes, 2,805 edges, 27 clusters, 68 flows | Historical baseline index; superseded by the correction-pass rebuild |
| Uncommitted correction pass after `c12e772`, October 12 | Ryan supplied syntax PASS, content/fallback contracts PASS, and 50/50 focused tests with 0 failures, cancellations, skips or todos | Five test files, including all 12 new regressions; not a fresh full-suite result |
| Correction-pass index, October 12, 19:51:18 UTC | Ryan's rebuild succeeded: 835 nodes, 3,079 edges, 31 clusters, 71 flows. Change detection reports 17 tracked files, 51 symbols, 31 affected flows, critical impact | A change-impact report, not a failing test or an all-clear; see coverage below |
| Documentation follow-up before the exemplar | Reviewed supplied output, read-only index status and complete change-report payload; updated status docs and archived the transcript | That follow-up changed no runtime, content or tests; all 80 reviews were still pending then |
| Eight-case exemplar, content version 4 | Primary-source passage review and editorial reasoning recorded for eight cases; Bentonville JSON/fallback generation completed | The later focused run below verifies automated contracts. Other 72 case reviews, human editorial/learning acceptance and browser/AT coverage remain open |
| Exemplar index, October 12, 20:27:52 UTC | Ryan's refresh succeeded: 856 nodes, 3,113 edges, 31 clusters, 73 flows. Complete read-only change report: 23 tracked files, 70 symbols, 31 affected flows, critical; no error/partial/truncation flag | All 50 covered files matched at that inspection before status-doc updates. Graph evidence only; separate focused verification follows below |
| Exemplar focused run, content version 4, October 12 | Ryan supplied Node v26.7.0 output: syntax PASS, content/fallback PASS (80 cases, 72 pending reviews), 40/40 tests PASS with 0 failures, cancellations, skips or todos | Five test files listed above; no current full-suite, browser/AT, real-network or human-learning result. This follow-up changes docs/evidence only |
| Post-commit index at `84ae82d`, October 12, 21:40:44 UTC | Ryan's refresh succeeded: 861 nodes, 3,124 edges, 31 clusters, 73 flows. Complete comparison against `c12e772`: 31 files, 109 symbols, 31 affected flows, critical; no report-level error/partial/truncation flag | All 53 covered files matched before this documentation follow-up. Symbol entries resolve for 20 changed files; graph evidence supplies no new test, browser/AT or learning result |

The complete [earlier owner-supplied verification transcript](archive/verification-2026-10-12-first-correction-pass.txt) is preserved verbatim. It is evidence for the uncommitted version 3 correction tree after `c12e772`, not a new commit or version 4 verification. Before that documentation-only follow-up, read-only GitNexus status reported current runner identity and matching content for all 48 covered files. The separate version 4 focused result is recorded above.

The `No network in harness` messages come from the harness's deliberate rejected fetch during fallback scenarios. The run ended with zero failures. These diagnostics neither identify a production-network defect nor establish real network behavior. GitNexus's runner-identity message triggered a successful rebuild; it was not an analyzer failure.

### Earlier version 3 focused test coverage

| Test file | Passed |
| --- | ---: |
| `tests/core-contracts.test.js` | 6 |
| `tests/run-generation.test.js` | 4 |
| `tests/session-regressions.test.js` | 20 |
| `tests/first-correction-pass.test.js` | 12 |
| `tests/smoke.test.js` | 8 |
| **Total** | **50** |

`authoring.test.js`, `content-validation.test.js`, and `scoring.test.js` were not part of this run. The earlier 32-test baseline included authoring tests, and the older full-suite record contains 52 tests; neither should be relabeled as a current full-suite result.

### Earlier correction-pass GitNexus result and limits

The read-only structured change report returned all 51 changed symbols and all 31 affected-flow entries, with no error and no partial/truncation flag. The CLI formatter intentionally displays only the first 15 symbols and 10 flows, explaining the console's “and 36 more” / “and 21 more” lines. The analyzer's abbreviated progress log is not itself the final report's truncation status.

The **critical** rating remains recorded: route/save validation, map lifecycle, new-case navigation and shared settings/modal paths have many dependents. The focused tests exercise those paths, but do not erase the impact rating or prove real-browser behavior. The reported 17 files correspond to the tracked diff at verification time. The two then-untracked files (the new correction tests and review reconciliation) are not a complete-change claim from that count; the new test file is explicitly included in the passing test command. Nothing was staged to change the report's scope.

## Earlier runtime correction pass

| Finding | Change | Coverage in Ryan's passing focused run / remaining boundary |
| --- | --- | --- |
| New case silently overwrites any active save | Keep/Replace dialog, preserving initial focus; confirmation bound to saved value, pack, and route; stale/cancelled consent cannot replace progress | Same/other pack, malformed save, keep/resume, replacement, repeated confirmation, queued storage change/deletion, Escape and storage-event invalidation |
| Character shortcuts lack an off switch | Persistent Answer shortcuts preference, off by default; native answers remain available; typing, modifiers, repeats and composition excluded | Default, opt-in/out persistence, form controls, modified input and numeric answer activation |
| Small packs can offer a three-stop route with a four-option finale | Shared route contract now requires at least four stops | All supported pack sizes; 4/5/6-location fixture finales with four unique choices and valid resume |
| Slow optional Leaflet becomes permanently unavailable | Separate loading/failure/selected-text states; ready callback upgrades an active map; explicit Retry map for library/tile failures | Delayed load, pinned retry source, duplicate-load guard, sticky tile failure, obsolete tile callbacks, paused session, text-route preference |
| Warrant and case copy contradicts actual play | Difficulty cards explain two choices plus prefilled current stop; local-accomplice wording; Argentina clue directions and matching telescope headline | Content/fallback structure passed; editorial accuracy remains pending |
| Verification language disagrees across documents | Revision-specific evidence here; README, SPEC, roadmap, finish plan and QA link or align with it | Documentation/source review only |

The combined Case File, old `clues`-tab save compatibility, clarified warrant labels, and reduced-motion-aware APPROVED stamp from `c12e772` remain intact. A regression was added for the old saved tab. The commit also removed source/explanation blocks from between-stop reports; documentation now describes the actual remaining review locations.

At the time of that runtime correction pass, save schema **5** and both pack content versions **3** were unchanged. Its copy-only edits did not change answers, scoring, bundled route semantics or reviewed flags. The later exemplar moves both content versions to **4**. Both bundled packs still offer 4/6/8 stops. Unsupported three-stop saves for hypothetical small packs are rejected; they cannot satisfy the four-option inventory contract.

## Pre-edit impact boundary

Repository and worktree: `carmen`, `/Users/ryanjohnson/Projects/nonsense/carmen`; baseline index: `c12e772`.

- Settings application: **HIGH**, shared by preference toggles and settings load.
- Modal close, map initialization/fallback/drawing/reset, and route counts: **CRITICAL**, shared across start/resume, navigation, finale, storage, records, and preference paths. The warning was reported before editing; the relevant focused regressions now have Ryan's passing results.
- Difficulty selection, page-level event bindings and test entrypoints returned **UNKNOWN**. HTML handlers, script order, direct source references, the harness and package test glob confirmed the unresolved entrypoints. UNKNOWN was not treated as an all-clear.
- Pre-edit queries used the then-existing local CLI/index. The agent ran no analyze or commit. Ryan subsequently refreshed the index; the complete change report includes the new functions. This section preserves the original pre-edit risk record.

## Earlier verification commands (historical)

Ryan ran this earlier focused gate successfully at content version 3. It is recorded for reproducibility; the exemplar command and passing result above cover the later content changes:

```sh
npm run check:syntax &&
npm run check:content &&
node --test tests/core-contracts.test.js tests/run-generation.test.js tests/session-regressions.test.js tests/first-correction-pass.test.js tests/smoke.test.js
```

Ryan also completed the graph refresh and change report. Refresh again only when later changes or an explicitly authorized commit require a current index:

```sh
node .gitnexus/run.cjs analyze --index-only &&
node .gitnexus/run.cjs detect-changes --scope all --repo .
```

A future partial/truncated graph result remains unresolved. These commands do not authorize a commit. The optional broader `npm run verify` covers the full suite; it has not been run for this correction pass and is not required to update its status docs.

The earlier runtime pass did not need content or CSS generation. The later exemplar did regenerate Bentonville and its snapshot; it still needs no CSS rebuild.

## Remaining evidence

Use the short personal-input check in [accessibility QA](a11y-qa.md). Actual focus, voice control, reflow, map loading/rendering and screen-reader output need browser evidence; the DOM double and fake map only exercise program behavior. See [manual QA](manual-qa.md) for additional coverage.

To serve the game for that next manual check:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ and use one short route with the preferred input method. Browser acceptance has not been recorded merely because the automated gate passed.

At the October 12 checkpoint, eight cases had AI-assisted factual/editorial review and **72 remained pending**. The current catalogue adds 48 reviewed NWA cases, as recorded above. `npm run check:release` is intentionally separate and should continue to report missing review evidence. The route-based report inherits the selected cases' editorial status; a random route can still include pending cases. Neither the exemplar nor the passing focused tests establish learning effectiveness, accessibility conformance, a complete human editorial review or public-release readiness.
