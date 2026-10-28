# Study, notebook, and local recovery

The **Study / Notebook** button opens an unscored view of the currently selected pack. If an investigation is running, opening Study pauses it and cancels delayed feedback. The saved investigation is preserved. **Return to case** resumes that unchanged case directly; it checks the pack, content version, and exact saved snapshot first. If another tab changed the save, Study asks the player to review the current case from the menu instead. Closing Study also leaves **Continue case** available on the title screen with the saved stage and next action.

The [October 21 investigation-flow update](design-update-2026-10-21.md) is implemented locally and verified. Its schema-8/catalog-3 behavior, Study return-to-case, career progression integration, and seventeen runtime scripts are fully integrated and verified with `verify:design` and `build:offline`.

## Direct study and review

Choose a location and case with native selects. Every case is available without starting or completing a route. Written evidence and four choices are available without affecting score or lives; **Reveal answer and explanation** is explicit. Study displays the catalog revision being used: a case in the matching saved run uses that run's original catalog, while other cases use catalog 3. This preserves old question interpretation during review and allows the two new reasoning overlays in current standalone study. Study does not switch the saved run's format, catalog, or progress. Notebook references remain exact pack/content/case IDs; no extra note or typing is required.

The six concept packs also expose 48 authored transfer prompts from the existing companion ledger, one per location. **Reveal suggested reasoning** shows the worked response. These are unscored applications of the idea, not fresh source verification or an automated assessment of the player's reasoning. The full text is available; typing an answer is optional and not required.

**Save this case** marks a case for the Saved cases filter. An optional note saves as it is entered, including dictation and text expansion. Notes are limited to 2,000 characters. No note is needed to save a case or schedule a review.

After revealing an answer, **Again** keeps the case due now; **Got it** schedules a review for one day later, then doubles the interval on each later explicit rating, up to 30 days. The **Reviews due** filter only shows compatible cases due in the selected pack. There is no automatic grading, timer, notification, or background task. A rating is accepted once per revealed view, avoiding accidental repeated interval increases.

Study reviews also integrate directly with the career progression layer (`game-career.js`). Explicit reviews earn career XP once per case per local calendar day (+40 XP for **Got it**, +15 XP for **Again**), contributing toward career level advancement and three study badges: **Field Notes** (first review), **Bookworm** (25 reviews), and **Long Memory** (interval pushed 8+ days out). The title screen's career card displays due reviews for the selected pack with a direct **Review N due cases (+XP)** button that opens Study filtered to due cases. Furthermore, finished case results offer **Review the stops you missed in Study**, queuing missed route stops into the notebook as due `Again` entries; an unreadable notebook is never overwritten.

To choose another pack, close Study and use the title screen's Quiz Pack selector. Notebook entries from other packs or older content versions remain in the notebook and backups, but are not silently attached to revised questions.

## Optional local speech

Expand **Read this case aloud**, select an installed local voice, and choose **Read case**. The adapter only lists voices whose browser `localService` flag is exactly `true`; it does not select a network voice or external speech provider. Nothing plays automatically. **Stop reading**, changing cases, closing the modal, or leaving through the existing modal cleanup stops the utterance. If no local voice is exposed, reading is disabled and the written text remains available. **Refresh voices** supports voices that become available after the panel opens.

Actual system voice availability, pronunciation, browser speech behavior, layout, and assistive-technology interaction have not been verified by the agent. The implementation uses the platform's local-service designation; it does not independently inspect the operating system's speech engine.

The active game also offers optional local read-aloud through `game-experience.js`. It starts only on request and cancels on tab, modal, screen, and pause transitions. This complements Study's controls; it adds no external speech provider or background playback.

## Backup and restore

**Export notebook and saved case** downloads `carmen-backup.json`. It reads the latest stored notebook, includes any unsaved note drafts retained in this page, and includes a parsed saved-case object even when it belongs to another pack. The status states whether that saved case is compatible with the selected pack. A malformed saved case cannot be included and remains untouched in browser storage.

Choose a JSON file with **Inspect a Carmen backup file**. Inspection validates the bounded notebook format and shows counts, compatible entries, and saved-case compatibility. It does not write anything. Two separate confirmation buttons are available:

- **Confirm: replace notebook** replaces notebook entries only, including any currently retained note drafts.
- **Confirm: replace saved case** replaces the investigation only. It is enabled only when the selected pack and its exact content version validate that save through the production core rules.

These are separate replacements, not a cross-key transaction. Export the existing data first if both versions should be retained. Each confirmation checks that its own storage value still matches the preview snapshot. Another tab's later work is not silently overwritten. Select the backup again for a fresh preview after a conflict. Imported questions, settings, executable content, and additional game fields are not installed.

Notebook storage also compares snapshots before every change. If another tab changes it, an unsaved note remains in the current page's draft map across case switches and modal close/reopen. Export includes those drafts. **Reload notebook** obtains the latest data; **Retry note save** then explicitly saves the retained draft against that latest snapshot. A corrupt notebook is preserved until an explicit valid restore. Browser-storage failures are reported as session-only storage, with export available for recovery.

Backups are limited to 10 MB, notebooks to 1,000 entries, and notes to 2,000 characters. The export checks its actual Blob size; import checks file size before reading. No file is uploaded. Browser storage is origin-specific: a localhost save, published-site save, and offline-file save do not automatically share state. Use the backup controls to transfer compatible progress explicitly.

## Contracts and modules

- `study-core.js` exposes `CarmenStudy`: notebook schema validation, exact case references, immutable updates, bounded review scheduling, backup-envelope parsing, and the resume summary.
- `game-study.js` owns native Study controls, notebook persistence, draft recovery, import preview, and optional local speech.
- `game-session.js` exposes `CarmenStudySession.snapshot()`, `.validate(saved)`, and `.replace(saved, expectedRaw)`. It validates against the selected trusted pack, requires the paused Study state, guards the save snapshot, and copies only the established save-field allowlist.
- `quiz-practice.js` supplies version-bound presentation and existing companion transfer prompts; catalog-3 presentation resolves the applicable overlay from `case-design.js`. Original pack source metadata and historical review records remain unchanged.
- `case-design.js` owns the two current reasoning overlays and the bounded Swapped Dispatch episode. New presentation is distinguished from historical source review; older catalog-1/2 saves keep their original questions.

Notebook schema 1 stores `{schemaVersion: 1, entries: [...]}` under `carmen_notebook_v1`. Each entry has `packId`, `contentVersion`, `caseId`, `starred`, `note`, `updatedAt`, `reviewedAt`, `dueAt`, and `intervalDays`. Identifiers, types, bounds, unique exact references, and review-date relationships are validated. Notes render through form values/text, never imported HTML.

Backup format 1 remains `{format: 'carmen-backup', version: 1, notebook, savedCase}`. `savedCase` is null or an object that must separately pass the active pack's full save validation before replacement. New saves use schema 8 and catalog 3, retaining route/activity state plus assistance/support flags, reasoning preference, nullable episode identity, useful-clue marks, and a separate charged-hint count. An episode import must match the trusted four-stop route and exact authored case IDs; imported questions never establish those answers.

Matching-content schema-5, schema-6, and schema-7 saves retain their historical routes, formats, catalogs, manual warrants, answer interpretation, and partial work. On the next write, schema 8 adds support-off/unassisted defaults, standard reasoning, no episode or clue marks, and charged hints equal to previously revealed hints. Catalog-1/2 work is not silently converted to catalog 3. Exact pack content-version mismatches remain incompatible, and older builds cannot read schema-8 saves. Notebook schema and backup-envelope version do not change.

Support enabled during play permanently marks the result assisted, makes future hints free, and prevents later life loss without refunding prior deductions or changing earned points. Saved `scoringHintsUsedInRound` retains charged hints; `hintsUsedInRound` retains all hints revealed. Backup/restore preserves both. At zero lives, pause retains the unfinished case, and only explicit closure clears that run after recording its outcome.

The earlier `tests/study.test.js` regressions passed within the harmony suite, and the updated return-to-case, schema-8, and catalog-3 integration passed in `npm run verify:design` (99/99 tests passing). The offline edition is rebuilt with all seventeen runtime scripts via `npm run build:offline`. Browser storage, local-file persistence, installed voices, and assistive-technology behavior remain separate personal checks. The [finish plan](finish-plan.md) and [design update](design-update-2026-10-21.md) record the current status.
