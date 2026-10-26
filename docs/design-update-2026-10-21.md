# Investigation flow update — October 21, 2026

Implemented in the local working tree and verified. The first supplied design run passed syntax/content gates and 97 of 98 tests; the market activity descriptor-format mismatch was resolved to `version: 1`, and core/story coverage was expanded. Verification of the correction passed cleanly: syntax/content gates passed, `verify:design` passed all 99 tests (with 16/16 in the affected core/flow files), and `build:offline` successfully generated the portable edition at `dist/carmen-offline.html`. Ryan's GitNexus 1.6.12 refresh indexed 1,726 nodes, 6,822 edges, 56 clusters, and 148 flows. Changes are bundled into local commits under explicit user delegation. Browser layout, installed-voice behavior, and human acceptance remain open.

## Player-facing changes

- Continue case is the primary returning-player action, with visible saved stage and next action. A saved case in another trusted manifest pack can load and resume directly; asynchronous loading rechecks the exact saved snapshot before proceeding.
- Quick case starts four stops with Mixed activities and generous initial hints/lives. Custom setup separates reasoning preference from the hint/life allowance. Advanced reasoning prefers the highest authored difficulty available per stop; availability depends on the pack. This preference is not a new fact review or a calibrated difficulty measure.
- The active task precedes the route in document order. Original clue text appears beside puzzle and arrest decisions, with optional persistent useful-clue marks. Route and preferences use native collapsible controls. Sound, motion and contrast controls have full labels.
- New catalog-3 cases confirm a prefilled arrest after the puzzle, avoiding a duplicate input test. Historical catalog-1/2 cases retain their original warrants and answer interpretation.
- Incorrect choices use authored diagnostics where available and a case-specific evidence cue otherwise. Multi-part activities identify the position or condition needing review; assistance annotates retained selections. Rechecking an already-rejected arrangement still costs nothing.
- Help can be enabled during a case. It permanently marks the result assisted, makes subsequent hints free, and stops further life loss. Previously earned points and previously charged hints remain unchanged. At zero lives, choose Continue with support, Pause and keep case, or explicitly close with the current result. Only explicit closure clears an unfinished run.
- Local read-aloud is available in play as well as Study. It requires an installed local voice and starts only on request. Tab, screen, modal and pause transitions cancel case speech. Study can return directly to the unchanged case it paused, and displays that case's saved catalog revision.
- Successful new cases receive a commendation based on first-try stop accuracy within the chosen route. Perfect short routes can receive Chief Inspector. Explicitly closed incomplete investigations get an ended-outcome label rather than a completion commendation. Scores remain secondary and boards distinguish assistance, rules, reasoning preference, episode, format and exact route.
- Between stops, the transition round requires players to deduce the suspect's destination from the seized lead or travel stub and select from three seeded destination choices. Choosing an incorrect location costs one life unless assisted (never taking the last life) and disables that choice; choosing the correct location advances to the next stop. The final stop leads directly to the headquarters report.

## Content and authored story

`case-design.js` contains presentation overlays for the two identified weak cases: Buffalo classification combines waterway type with the supplied watershed-management scope; Henry Ford corroboration requires both independent origin and relevance to the same object. Every required fact remains in the written evidence. The original pack assets, content versions, source registry and historical review evidence are unchanged. New presentation is distinguished from the source case's recorded review.

The catalog-3 Bentonville market activity now asks which seller satisfies both receipt conditions. Older catalogs retain the original four-seller matching activity and saved card indices.

**The Swapped Dispatch** is one authored four-stop Bentonville episode. Its fixed first four case IDs recover a receipt, archive entries, overwrite log and route sheet. Each solved stop reveals its fictional record and consequence. Three final decisions combine those records to recover the original destination, explain the substitution and approve a delivery satisfying every constraint. The finale shows all recovered evidence; no memory-only requirement is added. The documents and route network are explicitly fictional. Other packs retain their existing recap finales; this is the bounded connected-case pilot from the design review, not a claim that all packs were rewritten.

## Save and packaging contracts

Schema 8 accepts matching-content historical schemas 5, 6 and 7, retaining their original case IDs, route, format and catalog. New runs use catalog 3. Historical saves acquire explicit assistance defaults, scoring-hint count, reasoning preference, optional episode identity and useful-clue marks on the next write. Schema-8 imports validate these fields; episode saves must match the trusted four-stop route and exact authored case IDs. Older builds cannot read schema-8 saves.

The portable builder bundles scripts from the page, including both new helpers, and generates `dist/carmen-offline.html`. The Pages packaging workflow includes the new files for a future separately authorized publication. No content/CSS regeneration is required because pack assets and Tailwind utilities were not changed; new layout rules are semantic CSS. The offline build was executed and verified.

## Verification results

The focused design verification command:

```sh
npm run verify:design && npm run build:offline
```

`verify:design` checks runtime syntax, pack/fallback consistency, four design-focused test files and the five existing regression areas affected by activity, route, session, Study and packaging changes. Following the market filter correction to descriptor format 1, all 99 tests passed with zero failures. `build:offline` generated the fresh offline artifact at `dist/carmen-offline.html`. In addition, `verify:harmony` (118 tests) and the full test suite (`npm test`, 153 tests) pass cleanly.

Browser layout, voice-control/screen-reader behavior and human acceptance remain unverified. Any browser pass remains a separate owner-authorized action. Staging and commits are performed under explicit owner delegation.
