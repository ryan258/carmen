# Author a location or pack

1. Choose the owning source: edit `scripts/generate-bentonville-content.js` for Bentonville, or the hand-authored JSON for any other manifest pack under `data/packs/`. Generated Bentonville JSON and `builtin-pack.js` will be overwritten by the content build.
2. Add a location with identity, geographic coordinates, canonical henchman, and a unique token directly on the location record. The generator never derives tokens from an eight-item positional list. Names are displayed in the warrant and inventory, so preserve spelling and avoid duplicate token names.
3. Add a nonempty case pool. Reuse an existing complete case as the structural template, change the ID, and author the dossier, three clues, four choices, warrant answers, three progressive hints, worked explanation, fact, and metadata. The generator preserves puzzle hints/description/explanation, sources, difficulty and reviewEvidence overrides. The correct option must follow from the evidence. Put costume evidence in the clues and keep the answer out of decorative headings/calling cards.
4. Add precise primary-source registry entries. Mark the new case `source-linked-needs-line-review`. Record claim-level review evidence before changing it to `reviewed`.
5. Supply `nextLead` on a Bentonville variant/location or in its lead registry; hand-authored JSON keeps it in briefing. Short routes can start at any contiguous window, so each internal lead must describe the immediately following authored location. The transition UI presents three destination choices; if an authored lead explicitly names the destination or mentions "next stop/selected route", `destinationLead` dynamically generates a travel-stub clue from the destination's `province` and `tagline` so the trail must be deduced. At a selected run's last stop, the UI replaces the breadcrumb with the headquarters ending and advances directly to the final report. Never assume the first or all stops will be played.
6. Increment `contentVersion` for a changed existing pack. New packs need at least four locations, three final rounds, and a manifest entry. The shared final resolver uses the actual selected first/middle cases and earned last token.
7. Regenerate Bentonville and its fallback together after changing the Bentonville authoring source. Rebuild CSS if utility classes change. For the October 21 scope use `npm run verify:design && npm run build:offline`, covering syntax/content contracts, design tests, and affected regressions; `npm run verify:harmony` and `npm run verify` cover the broader suites. Use a representative check with your preferred input method; source and layout checks are separate. For this remediation, Ryan runs verification/build commands; agents do not run tests or GitNexus analyze.

Example location shape (illustrative values; not a publishable fact claim):

```json
{
  "id": "example-stop",
  "name": "Example Stop",
  "province": "Example District",
  "emoji": "📍",
  "lat": 36.37,
  "lng": -94.20,
  "token": {"name": "Compass", "char": "🧭"},
  "henchman": {
    "name": "Fictional Person",
    "alias": "The Map Collector",
    "emoji": "🗺️",
    "role": "Fictional courier",
    "dossierNote": "A fictional suspect in the ACME training exercise."
  }
}
```

For hand-authored packs only, `node scripts/apply-henchmen.js data/packs/argentina.json` fills canonical suspect data and missing leads, preserving a case-specific dossier note. It validates before writing and increases content version if it changes data. Writes now use the shared unique atomic-write helper, with exclusive temporary files and cleanup; an unrelated legacy `.tmp` file is preserved. Do not use it to edit generated Bentonville content. The [schema](quiz-pack-schema.md) and [rubric](editorial-rubric.md) are the full contract.

## Add an activity alternative

The base pack remains a complete four-choice case. Author optional ordering, matching, evidence filtering, or fragment assembly in `quiz-activities.js`, keyed by exact pack ID, content version, and case ID. Read the [activity contract](quiz-activities.md) before editing it. Every step, pair, accepted filter item, excluded distractor, and fragment order must be supported by the case evidence. Author instructions, distinct card identities, three hints, and worked reasoning. Filtering uses an explicit unordered answer subset; assembly uses an explicit ordered subset. Do not derive answer semantics by splitting arbitrary prose.

The October 21 catalog contains 47 alternatives across twelve packs. Catalog 1 preserves the original twenty; catalog 2 adds 27; catalog 3 updates the market filter and adds deduction overlays. Never attach new behavior to an old saved catalog merely because its pack content version is unchanged. Changing a pack version requires reassessing alternatives before updating their guard. Changing an existing activity solution requires an explicit descriptor/catalog/save compatibility decision. New schema-8 saves persist route, catalog identity, assistance, and reasoning preference; matching-content schemas 5–7 retain their original format, route, and catalog.

`quiz-practice.js` owns condensed presentation, fictional per-location warrant labels for the eight text-heavy packs, and the 48 existing companion transfer prompts/keys. `case-design.js` supplies catalog-3 reasoning overlays and the Swapped Dispatch episode. `game-career.js` manages career progression, daily cases, badges, and Study XP integration. Keep display substitutions consistent in clues, hints, controls, and explanations; preserve canonical save/scoring keys and catalog-1 labels. Preserve the full clue evidence, fiction boundaries, and source ownership when adjusting presentation. Study uses these adaptations for unscored case access and local review; backup files import notebook/saved progress, never authored pack content. Runtime additions must appear in the page, syntax command, and deployment package. The optional offline builder inlines that page's seventeen runtime scripts and validated pack data; it excludes map assets and downloads no tiles.

No pack, generator, fallback, or content version changed for this activity/presentation work. Agents have not executed tests, builds, browser checks, external source refresh, or reindexing. No content/CSS rebuild is needed for an activity-only edit unless its actual sources require regeneration or new utility classes. Use `npm run verify:design && npm run build:offline` and report the results; the [finish plan](2026-10-21-finish-plan.md) preserves broader acceptance limits, including human input comfort and map/current-access validation.
