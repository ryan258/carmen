# Current remediation status — October 3, 2026

**Remediation and offline verification complete.** All syntax checks, content contract checks, and the 52-test Node regression suite pass. The changes are bundled into logical commits for this local preview.

## Current changes

| Review finding | Implementation |
| --- | --- |
| Stale abort dialog can delete another tab's progress | Confirmation is bound to the exact save snapshot; storage events close dialogs and cancel the old session; writes and completion handlers also check save ownership |
| Duplicate review-clues ID | Separate dossier and puzzle IDs, plus a harness that rejects duplicate IDs from the actual HTML |
| Excessive warrant effort and equivalent site labels | Established location filled for all difficulties; hideout/disguise choices only from this stop; shared Argentina sites have one canonical spelling |
| Forced progression and inaccessible action names | Solved puzzle/final feedback waits for Continue; visible Answer A–D labels; Pause preserves progress; stable Hint/Clues/Continue/Submit warrant labels |
| Map dependency and inaccessible fallback choice | Persistent Text route preference; optional async Leaflet; DOM-ready boot; separate map adapter |
| Repeated finale and save-validation drift | Shared route/case-derived final resolver used by rendering and save validation; no constant CARMEN/vehicle answer loop |
| Fragile content generation | Token metadata belongs to locations; authored hints, explanations and review evidence survive regeneration; validated packs and atomic output replacement |
| Contradictory Argentina prose and misleading question names | Mendoza permit story replaces leftover wine/coordinate claims; local suspects distinguished from Carmen; fictional props/grid/times explicit; equivalent hideouts normalized |
| Weak hints and explanations | Three tailored hints per case; worked cipher, sequence, arithmetic, grid and time explanations; Bentonville recognition titles describe actual tasks |
| Checker accepts empty manifests or misleading review flags | Shared manifest validator; fallback equality; valid calendar date, reviewer, notes and reviewed sources required for reviewed status in loader, UI and checker |
| Duplicated contracts and monolithic adapters | Shared route-count rules; map and records extracted; obsolete identity/typewriter wrappers and unused travel animation removed; plain content escaped in HTML views |
| Synthetic tests missed integration defects | Actual HTML inventory/bindings/script order, registered boot/storage/key events, time-ordered callback queue; authoring, ownership, manual progression and dynamic-finale regressions |
| Docs and CSS drift | Current evidence here; historical results archived; personal-use scope; obsolete theme/font request removed; generated assets rebuilt |

Save schema is now **5** and both packs use **contentVersion 3**. Older in-progress saves are incompatible; no lossy migration is attempted. Existing records are retained under their prior content version and are not mixed with the new score boards.

## Evidence

- Read-only upstream GitNexus checks covered the changed existing functions and adapters using Ryan's supplied index. Shared save, final-report, records, navigation and map paths had HIGH/CRITICAL impact. HTML handlers and property references supplemented UNKNOWN results.
- Syntax verification (`npm run check:syntax`): PASS (Node syntax check on all core scripts and adapters).
- Content contract check (`npm run check:content`): PASS (both packs satisfy structural contracts and fallback exact match; 80 cases cataloged with pending editorial sign-off).
- Regression suite (`npm test`): PASS (52/52 tests, 0 failures, covering state persistence, storage isolation, manual progression, warrant constraints, seeded routes, scoring, and UI bindings).
- Content and CSS generation commands completed cleanly and updated checked-in artifacts (`tailwind.build.css`, `builtin-pack.js`).
- October 2's 43 passing tests and later 7 passing smoke tests apply to older working-tree states only. See [historical evidence](archive/verification-2026-10-02.md).

## Verification command

From the repository directory:

```sh
npm run verify
```

This runs syntax checks, the content/fallback contract check, and the Node regression suite (52 tests). If dependencies are absent, run `npm ci --no-audit` first.

## Remaining evidence and optional work

Actual browser focus, voice-control recognition, zoom/reflow, map rendering and screen-reader speech remain unverified. A short personal check is in [accessibility QA](a11y-qa.md); it is not a requirement to manually audit every case.

All 80 factual/editorial case sign-offs remain pending. Corrections and source links do not establish every fact or current venue detail. The optional `npm run check:release` command should report that honestly; it is not required for personal preview use. The route-based report reuses selected case evidence, so it inherits their editorial status rather than adding an independent set of factual questions.

A broader browser matrix, source-by-source editorial work, richer puzzle engines, original art, and fresh-player sessions are optional follow-up scopes, not claims of completion. No commercial launch checklist is imposed.

GitNexus becomes stale after these edits. Refresh only when wanted after functional verification:

```sh
node .gitnexus/run.cjs analyze --index-only
node .gitnexus/run.cjs detect-changes --scope all --repo .
```

A partial/truncated graph result is unresolved. These commands do not authorize a commit.
