# Finish the investigation-flow update

The local implementation adds a resume-first start screen, a four-stop Quick case, evidence beside decisions, new-case arrest confirmation, direct Study return, assistance that preserves progress, and one connected Bentonville episode, **The Swapped Dispatch**. The [design update](2026-10-21-design-update.md) records the implementation, content scope and compatibility contracts. The original twelve packs, 320 source cases and content versions remain unchanged.

## Verification outcome: design tests and offline build verified

The first design run passed syntax/content checks and 97/98 tests. The market filter declared descriptor format 2 while the save contract supports format 1. Its format was corrected to `version: 1` with its authored ID unchanged, and core/story tests were added to cover resumable market work. Verification of the correction passed cleanly:
- `node --test tests/design-core.test.js tests/design-flow.test.js` passed all 16 tests.
- `npm run verify:design` passed all 99 tests across nine test files.
- `npm run check:syntax` and `npm run check:content` passed for all twelve packs.
- `npm run build:offline` generated a fresh, fully bundled `dist/carmen-offline.html`.
- `npm run verify:harmony` (118 tests) and the full suite (`npm test`, 153 tests) pass with zero failures.

No content or Tailwind rebuild is needed; pack assets are untouched and the new styles are semantic rules in `styles.css`.


## Optional personal input check

After the deterministic checks, a separately chosen browser pass can focus on one short case. Start Quick case, select an activity card, Pause and Continue case, and confirm the selection remains. Use Help me through this case and check that feedback preserves work. Solve a stop and Confirm arrest. Open Study and use Return to case. The Swapped Dispatch offers a separate fixed four-stop route with all recovered evidence available in its finale.

To preview locally:

```sh
cd /Users/ryanjohnson/Projects/nonsense/carmen
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ with the preferred input method; stop the server with Ctrl+C. Optional speech requires an installed local voice and an explicit Read this case action. Browser layout, voice control, screen-reader behavior and personal comfort remain unverified. No automated browser pass is authorized by this plan. The [accessibility guide](a11y-qa.md) retains a broader optional checklist; auditing every pack is unnecessary for personal use.

The rebuilt portable file can be opened locally, but local-file storage behavior remains browser-dependent and unverified. Export a wanted case through Study / Notebook before moving or replacing the file. See [Study/recovery](study-and-backup.md) and [offline guidance](deployment.md).

## Compatibility and evidence limits

New saves use schema 8 and catalog 3. Valid matching-content schema-5, schema-6 and schema-7 saves retain their original case IDs, route, questions, activities and warrant rules, then upgrade on write. Older builds cannot resume schema-8 saves. Content-version mismatches remain incompatible. Records distinguish new/old rules, reasoning preference, episode and assistance in addition to the existing route and format boundaries.

The story is one bounded authored pilot; other packs keep their existing recap finales. The two revised deductions and market filter reuse written evidence and do not renew external fact review. Exact map pins, current venue/trail conditions and learning outcomes remain unverified.

Ryan supplied a fresh GitNexus 1.6.12 index covering 1,716 nodes, 6,743 edges, 54 clusters, and 147 flows. Work is bundled into logically grouped local commits under Ryan's explicit delegation. No pushing, remote deployment, or publication occurred.
