# Carmen roadmap

## Current state: design revision implemented and verified

The [October 21 investigation-flow update](docs/design-update-2026-10-21.md) and October 26 transition-trail deduction enhancements are implemented. The market activity descriptor was resolved to format 1, transition rounds now feature interactive destination trail deduction from seized leads/travel stubs, and the test suites (`verify:design`, `verify:harmony`, and full `npm test`) passed cleanly with zero failures. The offline build successfully generated `dist/carmen-offline.html`, and Ryan refreshed the GitNexus index to 1,726 nodes, 6,822 edges, 56 clusters, and 148 flows.

The current design adds a prominent Continue case action, Quick case, a custom reasoning preference independent of life/hint allowance, a workspace that keeps the active decision and evidence together, and deduction-driven destination trail choices between stops with life safety floors. Useful-clue marks persist. Local read-aloud is available during play, and Study can return directly to its preserved case. Catalog-3 arrests confirm established evidence; older runs retain their original manual warrants.

Support can be enabled during a case or offered at zero lives. It preserves work, prevents further life loss, and makes future hints free while retaining previously charged hints and points. Assisted results have separate records. Zero lives also offers pause with the save intact or explicit unfinished closure. New completion commendations use first-try accuracy within the selected route, so short routes can earn the same commendation as long ones. Historical ranks and case interpretation remain available for catalog-1/2 saves.

Content changes are deliberately bounded. Catalog 3 keeps 47 authored alternatives and replaces the market's matching activity with a two-condition filter under a new ID. Two presentation overlays strengthen Buffalo classification and Henry Ford corroboration using existing source notes and explicit fictional records. **The Swapped Dispatch** connects the first four Bentonville stops through recovered records and a three-part synthesis finale. Other packs retain their existing recap finales. Pack JSON, source registries, content versions, and historical review records are unchanged; new presentation has separate review limits.

Schema 8 persists assistance, support state, charged-hint count, reasoning preference, optional episode identity, and useful-clue marks alongside the established case/route/activity state. Matching-content schemas 5, 6, and 7 retain their original case IDs, route, format, catalog, scores, eliminations, and partial work on resume. New runs use catalog 3. Older builds cannot read schema 8. Boards distinguish rules, assistance, reasoning preference, episode, format, catalog, and exact route.

The regular page loads sixteen local runtime scripts, including `case-design.js` and `game-experience.js`. The portable builder includes the page's script list and all packs, uses the text route, excludes remote executable resources, and generates `dist/carmen-offline.html`.

## Next action

With the deterministic test gates and offline builder verified, next actions focus on personal use and optional checks:
- **Personal gameplay check:** assess whether Quick case, supported continuation, the connected episode, evidence layout, speech, and pause/resume feel comfortable in a real browser session.
- **Offline edition check:** test the generated `dist/carmen-offline.html` file in the preferred local browser environment.
- Staging and commits are performed under explicit owner delegation. Staging, pushing, deployment, and publication remain separate owner actions.


## Historical October 21 harmony baseline

Before this design revision, Mixed expanded from twenty to 47 alternatives across twelve packs: twenty ordering, seventeen matching, seven filtering, and three assembly activities. Native cards preserved partial work and free revision. Short routes gained seeded contiguous windows and a bounded history of actually opened cases. Schema 7 stored route offset and catalog identity, preserving schema-5/6 prefix routes and original formats.

The eight text-heavy packs gained concise presentation and distinct fictional location labels while retaining canonical values. Compact warrants preserved every original combination. Study / Notebook added direct case access, stars, optional notes/reviews, 48 existing companion transfers, local-voice speech, and previewed notebook/save restore. The then-current regular page loaded fourteen runtime scripts and gained an optional single-file offline builder.

Ryan's earlier October 21 Node v26.7.0 run passed syntax/content checks and all 117 tests across eleven targeted files, with no failures, cancellations, skips, or TODOs. His offline build and GitNexus 1.6.12 refresh also succeeded. The [original owner-run transcript](docs/archive/verification-2026-10-21-harmony.txt) and [remediation record](docs/remediation-status.md) preserve that evidence. Agents did not run those commands. These results do not verify the subsequent design changes or establish browser/assistive-technology acceptance.

## Remaining decisions and evidence

- **Current verification:** deterministic checks (`verify:design`, `verify:harmony`, `verify`, and `build:offline`) are verified and passing. Real browser/assistive-technology behavior, installed-voice behavior, and local-file persistence remain personal checks.
- **Content expansion:** 47 alternatives cover selected cases among 320. Expand only when existing evidence supports useful reasoning; preserve old descriptors for saved runs. The one connected episode is a pilot, not a completed campaign redesign.
- **Editorial scope:** new fictional specificity must remain explicitly fictional. Source notes and dated review limits are not current access, display, travel, or learning guarantees. Neither the two overlays nor the episode imply a factual refresh.
- **Personal-use feedback:** tune reading load, assistance, explanations, and interaction effort from Ryan's observed needs. Advanced reasoning selects existing authored difficulty and is not a calibrated adaptive system. Timed pressure is unnecessary.
- **Architecture:** further extraction should address concrete coupling. Shared browser state remains; accounts, a framework rewrite, and hosted infrastructure are not required.
- **Optional cleanup:** preserve generator ownership and dated evidence before removing unreferenced legacy sources. Absence of a current reference is not a factual withdrawal.
- **Publication:** local work does not update the hosted preview. Its last recorded deployment contains the original two packs. Staging, commits, pushing, deployment, and publication remain separate owner actions.

The [activity guide](docs/quiz-activities.md), [current contract](SPEC.md), and [remediation status](docs/remediation-status.md) distinguish current implementation, historical evidence, and outstanding checks.
