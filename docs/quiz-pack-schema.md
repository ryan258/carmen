# Quiz pack contract

`data/quiz-packs.json` lists first-party packs with `schemaVersion: 1`, `defaultPackId`, and entries containing `id`, `title`, `description`, and a local `./data/packs/<name>.json` path. Entry identity/title must match the pack; IDs and paths are unique, the list is nonempty, and the default must be listed. Pack data is repository-owned; there is no remote-pack or upload feature.

The executable contracts are `CarmenCore.validateManifest` and `CarmenCore.validatePack` in `game-core.js`, used by the loader and `npm run check:content`. Structural validity does not establish factual correctness.

## Pack fields

- `schemaVersion: 1`; positive integer `contentVersion`, increased when content changes invalidate saved case semantics.
- Nonempty `id`, `title`, `subtitle`, `heroLocation`, `intro`, `evidenceLabel`, and `successMessage`.
- `map.center.lat/lng` in geographic bounds; finite `minZoom ≤ zoom ≤ maxZoom`, between 0 and 20. Tile URL/attribution live in `map-config.js`.
- `locations`: ordered array, at least 4 and at most 100. Every location has unique `id`, `name`, `province`, `emoji`, numeric `lat/lng`, a canonical `henchman` (`name`, `alias`, `emoji`, `role`, `dossierNote`), and `token: {name, char}`. Token names must be unique in the pack.
- `questions`: exactly one nonempty array per location ID. The original packs contain five cases per stop and the two NWA packs contain three; the runtime contract does not require padding new content with weak variants.
- `sources`: registry keyed by source ID, with `title`, `publisher`, HTTPS `url`, and boolean `reviewed`.
- `finalConfrontation.title` and exactly three structurally valid report descriptors in `rounds`. Classic questions come from `CarmenCore.finalRounds`: selected first-case evidence, selected middle-case evidence, and the last completed stop's token. Mixed keeps the first-case question; `CarmenCore.getActivity` supplies route ordering and token matching for rounds two and three using four evenly spaced visited stops. Save validation uses these same resolvers. Pack descriptors do not introduce independent facts or override the shared engines.

All selectable routes require at least four stops so the final token question has four distinct choices. Shared `CarmenCore.stopCounts` supplies route options and validates saved route lengths; 4/5/6-location packs never offer three-stop routes. The existing eight-location packs retain 4/6/8. New short routes select contiguous windows using `routeStart`, preserving each internal authored `nextLead`; the final selected stop substitutes the headquarters ending. Between stops, the game displays three destination choices (the correct next location and two decoys, preferring different provinces); if the authored lead names the destination or mentions next stop, `destinationLead` dynamically generates a travel-stub clue using the target stop's `province` and `tagline`. Case/history/token validation resolves the same window, never a wrapping or reordered route. Recent-case preference records only cases actually opened, and format balancing operates within equally fresh candidates.

## Case fields

Every case has a pack-unique `caseId`; `briefing` with `headline`, `report`, `callingCard`, `nextLead`, and `suspect`; exactly three text `clues`; a `puzzle` with `title`, `description`, `question`, four distinct text `options`, zero-based `correctIndex`, and `explanation`; plus `warrantAnswers.city/hideout/disguise` and `funFact`.

`warrantAnswers.city` equals the parent location name. The disguise and hideout must be recoverable from the evidence. Use one canonical label for equivalent sites within a stop; the same place must not appear under competing names in warrant choices. The UI prefills the established location and offers only current-stop hideouts/disguises. Compact warrants display the full cross-product as paired options; separate fields have identical semantics. The calling card and decorative visual should not simply print the answer. Keep essential instructions visible as text; do not hide textual evidence behind `role="img"`.

Required metadata: `learningObjective`, source IDs, `difficulty` (`rookie`, `detective`, `inspector`), `mechanic: "deduction-choice"` (the base case contract), nonempty `regionTags`, `visualType`, `accessibilityDescription`, and `reviewStatus`. The difficulty metadata is descriptive; runtime difficulty does not filter the pool. Optional `puzzle.hints` is an array of nonempty text strings. All current packs author three: a reasoning nudge, a stronger step, and a worked answer. New cases should do the same. Optional Mixed alternatives live outside the pack in `quiz-activities.js`; see the [activity contract](quiz-activities.md). Keep the valid base four-choice question for Classic and unsupported or mismatched activity versions.

Use `reviewStatus: "source-linked-needs-line-review"` until editorial work is complete. To mark `reviewed`, also record:

```json
{
  "reviewEvidence": {
    "reviewer": "Actual reviewer name",
    "date": "YYYY-MM-DD",
    "notes": "Specific claims, source passages, corrections, and any fictional details checked."
  }
}
```

The loader, UI and content checker share the same evidence predicate: actual calendar date, nonempty reviewer and notes, and reviewed source entries. Setting reviewed without that evidence fails the structural contract. The optional sharing gate additionally requires every case to be reviewed. Do not replace a review with a boolean or infer review from structural checks.

The current [all-pack fact check](all-packs-fact-check.md) records source-backed AI-assisted review evidence for all 320 cases and its limits. The [eight-case exemplar](reviewed-exemplar.md) shows scoped primary-source IDs, claim-specific notes and explicit AI-assisted reviewer attribution. A source's reviewed flag covers the cited claims; it does not review every passage on that page or automatically review other cases. A metadata-valid review is not human acceptance or proof of learning. After the [October 17 editorial follow-up](all-packs-fact-check.md#october-17-editorial-follow-up), Bentonville is at contentVersion 5, Argentina at 6, and Northwest Arkansas at 3. NWA Mountain Biking remains at 2. Earlier saves for each changed pack are incompatible with its current content version. The [NWA ledger](content-audit.md) records the AI-assisted review and its limits. Arkansas State Parks uses contentVersion 1 and Route 66 uses 2, each with eight stops and three variants per stop. Their [48-case ledger](parks-route66-review.md) records source scope, investigative reasoning and companion activities. Their IDs are distinct from existing packs; the later schema-6 activity change does not alter their content versions. The six latest concept packs also feature eight stops and three cases per stop (Museums & Missing Labels, Ozark Waterways and Railroads & Depots at contentVersion 2; the other three at version 1). Their [144-case ledger](remaining-packs-review.md) records the source review, investigations and 48 companion transfer activities. The catalog contains 12 packs; new packs follow the same contract.

## HTML and compatibility

`puzzle.visualHtml` is optional trusted first-party presentation markup. The loader rejects obvious executable elements and event handlers, but this is not a general sanitizer. Prefer text and semantic elements. All pack JSON participates in the Tailwind content scan; run `npm run build:css` after adding utility classes.

The full Bentonville fallback is generated from the same pack. Run `npm run build:content` after editing its authoring source. A content-version mismatch makes an existing save incompatible; it does not silently select a new case or alter an answer.

New saves use schema 8, with explicit `routeStart`, `activityCatalogVersion`, `assisted`, `supportEnabled`, `challenge`, nullable `episodeId`, `evidenceMarks`, and `scoringHintsUsedInRound` alongside quiz format and activity progress. Valid matching-content schema-5, schema-6, and schema-7 saves retain their chosen format, route, and original catalog, and upgrade on the next write. New runs use catalog 3 with 47 alternatives in four kinds. Old schema contracts reject the new fields rather than accepting reinterpretation. Older builds cannot read schema 8. Pack content versions and generated content assets did not change for these runtime adaptations.

Ordering and matching use the identity order of canonical items. Filtering carries an explicit unordered answer subset, and fragment assembly carries an explicit ordered subset with distractors. Save validation checks item bounds, uniqueness, completeness where appropriate, accepted solutions, and distinct rejected answers. Activity identity, catalog preservation, and progress validation are detailed in [quiz activities](quiz-activities.md). Scoreboards separate route windows, formats, Mixed catalog versions, assistance, and episodes; legacy records retain their historical prefix/catalog interpretation.

`quiz-practice.js` supplies version-guarded condensed presentation for eight packs, fictional per-location warrant display labels, and 48 companion transfer prompts/keys from the existing six-concept ledger. `case-design.js` supplies catalog-3 reasoning overlays and the four-stop Swapped Dispatch episode. `game-experience.js` manages task context, adjacent evidence, and persistent clue marks. Display labels must map consistently through clues, hints, controls, and explanations while canonical saved/scored values stay unchanged; catalog 1 retains its original labels. The adapter does not mutate pack data or replace clue evidence. Study offers direct case access without score changes; notebook/backup data identifies cases by pack/content/case identity and cannot import questions or HTML. The optional offline builder bundles all sixteen runtime scripts, styles, and twelve packs and uses the text route. These additions do not establish refreshed source truth, browser/assistive-technology acceptance, or verified map metadata.

Current verification uses `npm run verify:design && npm run build:offline`, covering runtime syntax, pack/fallback consistency, four design test files, and five affected regression areas. `npm run verify:harmony` remains available for the broader regression set, and `npm run verify` runs the full test suite.
