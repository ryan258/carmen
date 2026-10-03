# Quiz pack contract

`data/quiz-packs.json` lists first-party packs with `schemaVersion: 1`, `defaultPackId`, and entries containing `id`, `title`, `description`, and a local `./data/packs/<name>.json` path. Entry identity/title must match the pack; IDs and paths are unique, the list is nonempty, and the default must be listed. Pack data is repository-owned; there is no remote-pack or upload feature.

The executable contracts are `CarmenCore.validateManifest` and `CarmenCore.validatePack` in `game-core.js`, used by the loader and `npm run check:content`. Structural validity does not establish factual correctness.

## Pack fields

- `schemaVersion: 1`; positive integer `contentVersion`, increased when content changes invalidate saved case semantics.
- Nonempty `id`, `title`, `subtitle`, `heroLocation`, `intro`, `evidenceLabel`, and `successMessage`.
- `map.center.lat/lng` in geographic bounds; finite `minZoom ≤ zoom ≤ maxZoom`, between 0 and 20. Tile URL/attribution live in `map-config.js`.
- `locations`: ordered array, at least 4 and at most 100. Every location has unique `id`, `name`, `province`, `emoji`, numeric `lat/lng`, a canonical `henchman` (`name`, `alias`, `emoji`, `role`, `dossierNote`), and `token: {name, char}`. Token names must be unique in the pack.
- `questions`: exactly one nonempty array per location ID. Existing packs contain five cases per stop; the runtime contract does not require padding new content with weak variants.
- `sources`: registry keyed by source ID, with `title`, `publisher`, HTTPS `url`, and boolean `reviewed`.
- `finalConfrontation.title` and exactly three structurally valid report descriptors in `rounds`. The live questions come from `CarmenCore.finalRounds`: selected first-case evidence, selected middle-case evidence, and the last completed stop's token. The resolver supplies all written instructions and is also used by save validation. Descriptors do not introduce independent facts or override this shared engine. Editorial evidence comes from the selected cases.

## Case fields

Every case has a pack-unique `caseId`; `briefing` with `headline`, `report`, `callingCard`, `nextLead`, and `suspect`; exactly three text `clues`; a `puzzle` with `title`, `description`, `question`, four distinct text `options`, zero-based `correctIndex`, and `explanation`; plus `warrantAnswers.city/hideout/disguise` and `funFact`.

`warrantAnswers.city` equals the parent location name. The disguise and hideout must be recoverable from the evidence. Use one canonical label for equivalent sites within a stop; the same place must not appear under competing names in warrant choices. The UI prefills the established location and offers only current-stop hideouts/disguises. The calling card and decorative visual should not simply print the answer. Keep essential instructions visible as text; do not hide textual evidence behind `role="img"`.

Required metadata: `learningObjective`, source IDs, `difficulty` (`rookie`, `detective`, `inspector`), `mechanic: "deduction-choice"` (the current engine contract), nonempty `regionTags`, `visualType`, `accessibilityDescription`, and `reviewStatus`. The difficulty metadata is descriptive; runtime difficulty does not filter the pool. Optional `puzzle.hints` is an array of nonempty text strings. Both current packs author three: a reasoning nudge, a stronger step, and a worked answer. New cases should do the same.

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

## HTML and compatibility

`puzzle.visualHtml` is optional trusted first-party presentation markup. The loader rejects obvious executable elements and event handlers, but this is not a general sanitizer. Prefer text and semantic elements. All pack JSON participates in the Tailwind content scan; run `npm run build:css` after adding utility classes.

The full Bentonville fallback is generated from the same pack. Run `npm run build:content` after editing its authoring source. A content-version mismatch makes an existing schema-5 save incompatible; it does not silently select a new case or alter an answer.
