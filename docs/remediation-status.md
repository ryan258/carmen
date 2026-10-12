# Current remediation status — October 12, 2026

**Current state: eight cases have AI-assisted source/editorial review, four per pack; 72 remain pending. Both packs are content version 4. Ryan completed the exemplar graph refresh, syntax/content checks and focused tests: 40/40 passed.** The [exemplar guide](reviewed-exemplar.md) contains exact case IDs, full prompts, worked answers, transfer activities, claim/source passages and review limits. The reviewer is Codex, explicitly identified as AI-assisted; this is not Ryan's or an educator's sign-off.

The preceding runtime correction pass after `c12e772` passed Ryan's focused automated verification at content version 3: syntax PASS, content/fallback contracts PASS, and 50/50 tests PASS, including all 12 new correction regressions. No failing check in that supplied output required a runtime fix. A documentation-only follow-up recorded those results; the later exemplar is a separate content change and does not inherit that pass as fresh verification.

This is the authoritative revision-specific evidence record. [Review reconciliation](review-reconciliation-2026-10-12.md) explains which October 5 findings survived `c12e772`, which changed, and what remains proposed.

**Latest verification submission:** Ryan supplied the successful post-commit GitNexus refresh at `84ae82d` and comparison against `c12e772`: 861 nodes, 3,124 edges, 31 clusters and 73 flows; 31 changed files, 109 symbols and 31 affected flows at critical impact. The complete read-only comparison confirms those counts, with no report-level error, partial or truncation flag. This is graph evidence, not a new test result. Details and archives follow below.

**Latest behavioral verification:** Ryan's focused version 4 run under Node v26.7.0 passed syntax, content/fallback contracts and 40/40 tests, with no failures, cancellations, skips or todos. The [complete transcript](archive/verification-2026-10-12-exemplar-focused.txt) is preserved verbatim. The new graph submission identifies no failed check requiring a code fix. This follow-up updates documentation and archives only; no tests or GitNexus analyze were run by the agent. The next action is a short personal browser/input check, not another automated run solely for these documentation changes.

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

Eight cases now have AI-assisted factual/editorial review and **72 remain pending**. `npm run check:release` is intentionally separate and should continue to report missing review evidence. The route-based report inherits the selected cases' editorial status; a random route can still include pending cases. Neither the exemplar nor the passing focused tests establish learning effectiveness, accessibility conformance, a complete human editorial review or public-release readiness.
