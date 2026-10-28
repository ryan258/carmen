# Quiz activities

New runs use **catalog 3** and default to **Mixed activities**; **Classic four choices** remains selectable. The catalog contains **47 authored alternatives** across all twelve packs: **20 ordering activities, 16 matches, eight evidence filters, and three fragment assemblies**. Catalog 3 replaces the market's four-seller matching exercise with a two-condition filter under a new descriptor ID. Catalog 2 retains its historical 17 matches/seven filters. The underlying 320 pack cases, content versions, Bentonville authoring generator, and fallback remain unchanged.

The [investigation-flow update](design-update-2026-10-21.md) records the current scope: two stronger four-choice overlays, one connected Bentonville episode, supported continuation, and the active-evidence workspace. These changes are implemented locally and verified (`verify:design`, 99/99 tests pass). Other cases and ordinary recap finales retain their existing behavior; this is not an all-pack rewrite.

Short runs can use different contiguous sections of the authored route. Seeded selection favors cases not present in recent saved/completed runs and balances available interaction kinds; exhausted pools remain playable. Route order stays intact, and the actual route is saved explicitly. These measures reduce repetition without promising every modality on every route or eliminating every repeat.

Verification for catalog 3, schema 8, and the design changes succeeded: `npm run verify:design` passed all 99 tests, `npm run verify:harmony` passed all 118 tests, and `npm run build:offline` rebuilt the portable artifact. Ryan's GitNexus refresh indexed 1,716 nodes, 6,743 edges, 54 clusters, and 147 flows.

## Playing

Choose Quiz format before starting. The run keeps its format and catalog on resume. Quick case starts four Mixed stops with standard reasoning and generous initial hint/life allowance; Custom setup separates reasoning preference from that allowance. Advanced reasoning prefers the highest authored difficulty available per stop. It is not a calibrated difficulty scale.

- **Put in order:** choose cards in the requested sequence.
- **Match the evidence:** read the current prompt, then choose its answer card; repeat for each prompt.
- **Filter the evidence:** select every supported card. Select a card again to remove it; the order of selection does not matter. Check work when at least one card is selected.
- **Assemble the answer:** choose the requested number of fragments in order, leaving unused distractors behind.
- **Undo last** removes the last selection. **Clear work** removes all selections. Both are free.
- **Check work** is explicit. Ordering and matching require every card; assembly requires its stated number of fragments; filtering accepts any nonempty selection for checking. Each distinct rejected submission costs one life until assistance is enabled. Rechecking an identical rejection costs nothing. A filter’s rejected set remains the same set even when selected in a different order.
- A correct investigation awards ordinary puzzle credit and waits for **Continue**. Enabling support retains prior work, permanently labels the result assisted, makes subsequent hints free, and prevents further life loss. Previously charged hints remain charged. At zero lives, the player can continue with support, pause with the save intact, or explicitly close the investigation.

Activities have two to four native buttons labeled Card A–D. Their order and labels remain stable during edits and resume. Each selection/edit saves immediately. Tab and Enter/Space operate the controls; opted-in A–D/1–4 shortcuts select available cards from appropriate puzzle focus. Check work remains explicit. There is no required typing, dragging, sound, or timer.

Catalog-3 ordinary finales use no activities: Classic and Mixed both ask the first, middle, and last stops' case questions as four choices, with that case's clues shown, so the report tests place trivia rather than recall of tokens or route order. Catalog-1/2 Mixed finales keep their historical route-order and token-match activities; catalog-1/2 Classic keeps the last-token question.

**The Swapped Dispatch** is a separate four-stop Bentonville episode using `classic-downtown-square`, `classic-walmart-museum`, `classic-walmart-home-office`, and `classic-crystal-bridges`. Solved stops reveal a fictional receipt, archive copies, overwrite log, and route sheet. Three final decisions combine those records; all required evidence remains visible. Its room network is explicitly invented, not a museum floor plan or visitor route. This episode alone replaces the recap finale with an authored connected conclusion.

## Authored coverage

| Pack | Ordering | Matching | Filtering | Assembly |
| --- | --- | --- | --- | --- |
| Bentonville | 1 | 1 | 2 | 0 |
| Argentina | 3 | 1 | 0 | 0 |
| Northwest Arkansas | 1 | 2 | 0 | 1 |
| NWA Mountain Biking | 1 | 0 | 0 | 2 |
| Arkansas State Parks | 3 | 1 | 0 | 0 |
| Route 66 | 1 | 2 | 1 | 0 |
| Ozark Waterways | 1 | 1 | 2 | 0 |
| Arkansas Delta | 2 | 2 | 1 | 0 |
| American National Parks | 3 | 1 | 1 | 0 |
| Railroads & Depots | 2 | 2 | 0 | 0 |
| Architecture & Hidden Details | 1 | 1 | 1 | 0 |
| Museums & Missing Labels | 1 | 2 | 0 | 0 |
| **Total** | **20** | **16** | **8** | **3** |

The table describes catalog 3. The exact case-ID mapping is in [`quiz-activities.js`](../quiz-activities.js): its original block owns catalog 1's twenty activities, `additions` owns catalog 2's 27 additions, and `producerDeduction` supplies catalog 3's market replacement. It retains the receipt's inference: cut flowers **and** a seller who grew them. The stable new ID is `classic-downtown-square:filter:v2`; catalogs 1/2 keep the original matching task. Other examples include Delta broadcast ordering, Hampson provenance matching, Lakeport scope filtering, the Lake Atalanta fragment key, and Beaver Lake custody filtering.

Each alternative uses its case's existing written evidence. Fictional routes, timestamps, index cards, demonstrations, and model processes remain fictional. The Salta log distinguishes departure from return; the Field Museum model is not SUE's actual casting history; simplified geology is not a complete natural history or forecast. No new external verification is implied.

## Architecture and authoring contract

[`quiz-activities.js`](../quiz-activities.js) owns alternatives keyed by pack ID, exact content version, and case ID. `getCaseActivity` returns a fresh descriptor or `null`; a version mismatch uses the base four-choice case. The pack validator still requires `mechanic: deduction-choice` and a complete original answer for Classic and fallback use.

Descriptors have an ID, version, kind, title, instruction, two to four items, and three hints. Every current descriptor uses format `version: 1`, including the catalog-3 market filter. Its ID suffix `:filter:v2` identifies the authored task revision independently of that format. Sequence items are strings in correct order. Match items are `{prompt, answer}` pairs in prompt order. Filter and assembly items have explicit canonical `answer` indices, with unused alternatives remaining meaningful. Filter answers are sets; assembly answers are ordered. Existing sequence/match descriptors omit `answer` and retain identity-order solutions. Returned arrays and nested match pairs are copied. Shuffled presentation does not mutate canonical answers.

[`case-design.js`](../case-design.js) owns the two catalog-3 four-choice overlays and the episode. `resolveCase` resolves owned source data by exact pack/content/case identity. Buffalo's answer combines river classification and the management scope already stated in its source note; Henry Ford's fictional files distinguish independent relevant corroboration from copies, derivative summaries, or another object's record. Canonical `optionFeedback` explains each wrong choice. Base source notes and review evidence remain unchanged; `designRevision` identifies the new presentation and its separate review limits. No source refresh or human acceptance is implied.

[`game-core.js`](../game-core.js) resolves case/final activities, supplies solution/completeness/correctness rules, validates saved progress, and formats worked answers. [`game-activities.js`](../game-activities.js) owns native rendering, focus, and submission through the existing session/scoring/save functions. The controller remains the session owner. HTML loads the catalog before core and the adapter before the controller; syntax coverage and Pages packaging include the runtime modules. Completed/failure evidence review includes worked activity answers.

When authoring:

1. Read the complete owning case, including clues, original answer, hints, explanation, warrant, and review notes. The evidence must establish every step or pair requested.
2. Use distinct semantic cards. Repeated place names may need distinct event labels; do not permit indistinguishable cards or multiple correct orders.
3. Author instructions and all hints for this task, preserving source and fiction limits. Keep manageable native controls.
4. Reassess alternatives before updating a pack-version guard. Review metadata does not automatically cover new claims or reasoning.
5. Treat changed answers as a compatibility decision. Do not silently reuse an activity ID for different answers; decide whether older Mixed saves remain resolvable or should be rejected.
6. Update focused activity/save tests, this coverage table, and contract documents. Ryan runs verification under the current project instructions.

Base content edits still follow [new-location.md](new-location.md); Bentonville's generator and review sidecar retain ownership. An activity-only edit does not require regenerating unchanged pack assets or rebuilding CSS unless it actually changes utility classes.

## Saves and records

New schema-8 saves use catalog 3 and retain `quizStyle`, `routeStart`, and `activityProgress`. They also persist `assisted`, `supportEnabled`, `challenge`, nullable `episodeId`, useful-clue indices in `evidenceMarks`, and `scoringHintsUsedInRound`. Progress holds the descriptor ID, canonical selections, and distinct rejected submissions; no activity means `null`. The validator resolves answers from trusted source and checks progress/phase consistency. Episode saves must match the trusted four-stop route and exact authored IDs. Filter rejection identity sorts indices, so rearranging a rejected set cannot charge another life.

Matching-content schema-5 saves remain Classic; schema-6 saves preserve their Classic/Mixed format. Both retain prefix routes and catalog 1. Schema 7 retains its explicit route and catalog 1/2. On the next write they acquire schema 8's unassisted/support-off defaults, standard reasoning, no episode or clue marks, and scoring hints equal to prior hints. Their case answers, eliminations, scores, manual warrants, hints, and activity work keep their original interpretation. New runs use catalog 3. Unsupported catalog versions return `null`; older builds cannot read schema 8. Different pack content versions remain incompatible.

Scoreboards distinguish assistance, rule revision, reasoning preference, episode, format, catalog, exact route, pack/content version, and life allowance. Catalog-3 Classic is separate from historical Classic. New completion commendations use first-try stops divided by route length; assistance is named without lowering the commendation. An incomplete closed case receives an ended-outcome label. Historical catalog-1/2 ranks remain score-based. These are personal replay records, not calibrated rankings.

## Companion practice and concise case prose

[`quiz-practice.js`](../quiz-practice.js) provides 48 unscored transfer prompts from [`remaining-packs-review.md`](remaining-packs-review.md), one per location across the six newest packs. `getTransferActivities(pack)` returns fresh descriptors. `getCasePractice(pack, item, catalogVersion = 2)` resolves the owned case and returns its presentation and transfer fields; catalog 3 uses the applicable reasoning overlay. Study presents the chosen catalog and reveals answers explicitly. It uses the saved catalog for a matching paused case and catalog 3 otherwise. Transfer prompts do not replace scored answers.

For the eight heavily templated packs, compact presentation uses the resolved puzzle title, location, and question to replace repeated report/calling-card boilerplate. A shared fiction notice retains the teaching-copy boundary. Original narrative packs keep their authored briefing and instructions. The two catalog-3 overlays update fictional comparison clues and answer choices; their factual source notes, warrant identities, and base pack data remain intact. Other compact cases retain their authored clues and answers. None of these presentation changes assigns new factual-review status.

New catalog-3 cases confirm a prefilled arrest after the puzzle. Legacy catalog-1/2 cases retain manual compact or separate warrants with their original values and scoring. Study remains unscored without the warrant step.

Catalogs 2 and 3 share **192 fictional desk/disguise display pairs**, three per location across the eight templated packs. The Delta Cultural Center, for example, uses Music File, Radio Transcript, and Exhibit Venue desks with related disguises. These are ACME story props, not real facilities or employees. The same labels appear in clues, hints, explanations, answer review, and warrants.

`warrantLabel(pack, locationId, field, canonical, catalogVersion)` changes only the displayed hideout/disguise label. Option values, saved selections, source data, and answer comparisons remain canonical. `presentCaseText(pack, item, text, catalogVersion)` resolves the owning location, then replaces only its exact known fictional labels in one escaped, longest-first regex pass; inserted text is not processed again. Catalog 1, the four original narrative packs, unknown cases, and mismatched content versions retain their original text. Factual source notes, dates, proper names, and puzzle reasoning are unchanged. This adds story variety without a pack-version change or a false factual-review claim.

Forty-seven alternatives are a deliberate set, not full 320-case modality coverage. Further alternatives should earn their place through useful reasoning. Choose Classic before a new run when its lower interaction effort is preferable. The [project review](project-review-2026-10-21.md) preserves the earlier inventory; the [design update](design-update-2026-10-21.md) is the current scope and verification handoff. The regular page now loads seventeen local runtime scripts; the new helpers must be included in a rebuilt offline file.
