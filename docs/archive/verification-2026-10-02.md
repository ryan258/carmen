# Historical verification — October 2, 2026

Baseline: `25e555e1a3a3ef26b795fc9a1e73a4a32712a4d2` on local `main`. The pre-existing untracked `.claude/`, `AGENTS.md`, and `CLAUDE.md` were preserved. The operator capsule was added outside the generated GitNexus blocks. No stage, commit, push, deployment, or publication occurred.

## Implemented; user-run functional verification passed

| Review area | Working-tree change |
| --- | --- |
| Resume loses attempts/hints and allows repeat puzzle points | Save schema 4; complete round phase/order/elimination/selection state; strict pack/content/shape validation |
| Zero lives and permissive migration | Zero remains zero; old/unknown/foreign saves rejected without mutation; malformed save can be cleared |
| Wrong warrant spam, stale callbacks, final controls | Phase/input guards, session cancellation, dialog-aware callback delivery, restored per-round controls |
| Short-route inconsistency | Selector synchronized with state; selected-route ending, headquarters finale, route token deduction |
| Pack-load races | Loading gate, request generation check, bounded fetch, named fallback |
| Records and storage failure | Defensive storage adapter, malformed-record handling, per-length/difficulty/version boards, run deduplication, cross-tab save notification |
| Map provider/zoom/fallback | Configurable OSM URL/attribution, pack zoom, enabled controls, disposed failed map, persistent route fallback |
| Accessibility and display | Form labels, tabs/panels, dialog/focus behavior, announcements, full text evidence, readable token names, wrapping controls, color overrides, reduced-motion cleanup |
| Content correctness | Identified factual contradictions removed/corrected; answer leaks removed; explicit costume evidence; unique vehicle deduction; unearned-token dependency removed; duplicate sites get different reasoning prompts |
| Learning feedback | Per-case explanation/source links in transition/history and failure explanation; final failures show final answer |
| Code/data drift | Pure core boundary; generated exact fallback; one source per active pack; legacy unused source registry removed; JSON included in CSS scan |
| Documentation drift | Current spec, roadmap, schema, authoring, dependency, editorial, visual, QA, and finish documents reconciled; original spec archived |
| Weak tests | Production scoring imports; production-session VM harness; regression cases for persistence, lifecycle, routes, records, and loading; contract/fallback tests |

## Verification evidence and limits

The initial implementation used upstream GitNexus impact before modifying existing runtime functions. Shared save/render/map/scoring paths were HIGH or CRITICAL; explicit HTML/property references supplemented UNKNOWN handlers.

Ryan supplied the following results on October 2 (Node 26.7.0):

- `npm ci` completed, reporting two high-severity dependency findings.
- `npm run build:css` completed, with an outdated Browserslist warning. The resulting checked-in stylesheet is present in the working tree; visual inspection remains separate.
- `npm run check:syntax` passed.
- `npm run check:content` accepted both packs: 80 cases, all 80 still awaiting editorial sign-off.
- `npm test` passed **43/43 tests**, with zero failures, skips, or cancellations.
- GitNexus indexing completed: **737 nodes, 2,474 edges, 33 clusters, 63 flows**. No `detect-changes` result was supplied.

These are user-run results for the remediation tree before the dependency-only follow-up, not agent-executed tests. The follow-up changes build dependency manifests and documentation, with no game/runtime/test source changes. PostCSS is locked to 8.5.28 and Nano ID to 3.3.19. Local Autoprefixer 10.6.1 and cssnano 6.1.2 replace Tailwind's bundled fallback tools so Browserslist/caniuse-lite are explicit, updateable lockfile dependencies. The agent ran `npm audit --package-lock-only --json` after the update: **0 vulnerabilities** across the resolved dependency graph. Ryan subsequently supplied a successful `npm ci --no-audit` (136 packages), a successful CSS rebuild with no Browserslist warning in the output, `npm audit` reporting **0 vulnerabilities**, and **7/7 asset smoke tests passing** with no failures, skips, or cancellations. This closes the automated dependency-follow-up checks. Visual inspection remains separate.

The lightweight test harness does not emulate layout, real Leaflet, Web Audio, native focus behavior, or screen-reader output. The manual QA checklists remain open. No browser verification, test execution, or GitNexus analyze was performed by the agent.

## Remaining gates, not claimed fixed

- All 80 cases need claim-level editorial review evidence. Identified contradictions were corrected, but this does not certify every remaining fact. `check:release` deliberately fails until the evidence exists.
- Actual browser/device/accessibility and fresh-player acceptance remain pending.
- Richer puzzle engines, additional original art, and further extraction of `game.js` are future product/maintenance work. The current implementation is accurately documented as one multiple-choice engine.
- No live map-provider availability guarantee, high-volume hosting decision, or publication rights review is established by local code changes.

## Operator commands

The full runtime suite passed before the dependency-only follow-up. Ryan also completed the following narrower follow-up sequence successfully; it is retained for reproducibility, not as a request to rerun it:

```sh
npm ci --no-audit &&
npm run build:css &&
npm audit &&
node --test tests/smoke.test.js
```

Both the user-run installed-tree audit and the agent-run lockfile audit reported zero vulnerabilities. The seven smoke tests are a repeated subset of the 43-test suite, not seven additional tests. No further test run is requested for these documentation-only evidence updates.

After code fixes and verification settle, refresh the graph once:

```sh
node .gitnexus/run.cjs analyze --index-only
node .gitnexus/run.cjs detect-changes --scope all --repo .
```

If graph output is partial/truncated, inspect the missing scope before calling it complete. These commands do not authorize staging or committing. `npm run check:release` is separate from functional verification and is expected to report outstanding editorial work now.

Historical snapshot only. These results do not verify the October 3 runtime changes. See [current status](../remediation-status.md).
