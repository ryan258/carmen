# Manual regression matrix

For personal use, start with the short check in [accessibility QA](a11y-qa.md). This matrix is retained for broader coverage; it is not a requirement that Ryan manually audit every case. Current verification status lives in [remediation status](remediation-status.md).

Status: **not run against the October 2 remediation**. Record date, Git revision/diff identity, browser/version, viewport/device, actions, and actual results. Browser automation can cover many interactions; real-device behavior, assistive-technology output, factual accuracy, and player judgment need their own evidence.

Start with `python3 -m http.server 8000 --bind 127.0.0.1`, then open http://127.0.0.1:8000/ . For browser automation, block or stub live map tile requests; do not automate bulk requests to community tile services.

## Session integrity

- [ ] Both packs: complete 4-, 6-, and 8-stop runs. Confirm the stop selector, displayed count, inventory, transition lead, final report, and records agree.
- [ ] Use a hint and choose a wrong answer. Reload/resume: hint count, score penalty, attempts, order, eliminated option, and lives persist.
- [ ] Solve a puzzle, submit a wrong warrant, then reload. The puzzle stays solved and cannot award points again.
- [ ] Submit a wrong warrant repeatedly during feedback. One life is lost. The button unlocks after feedback when lives remain.
- [ ] Submit a correct warrant and reload during feedback. Resume the same between-stop report once; no duplicate capture or score.
- [ ] Reach zero lives and reload before the result transition. Resume shows game over, preserving zero lives; it never grants five fresh lives.
- [ ] Abort during correct/incorrect puzzle feedback, approved warrant feedback, and a between-stop report. No delayed callback restores the abandoned screen/save.
- [ ] Complete a final round, reload during its feedback, and resume. The solved round remains visible until Continue; then advance once. Final failure explains that final question rather than the last location puzzle.
- [ ] In the finale, review-clues/warrant controls are disabled. Start another game: dossier/clues/puzzle work again.
- [ ] Open an abort dialog during a transition, then cancel. Focus returns appropriately and queued progression resumes. Confirming abort cancels it.
- [ ] Switch packs while requests are slow or fail. Start and resume stay disabled; only the latest selected response applies. Fallback is clearly named.

## Persistence failure and compatibility

Use a disposable browser profile for deliberate storage edits.

- [ ] Malformed JSON, unknown schema versions, wrong pack/content versions, invalid counts/scores/IDs, and old saves cannot resume; incompatible saves can be cleared. A valid other-pack save is preserved.
- [ ] Malformed records/statistics do not crash the game. Four-stop and eight-stop scores appear on separate boards.
- [ ] Deny browser storage or simulate quota exhaustion. A warning appears, play continues in memory, and no persistence claim is made.
- [ ] Open two playing tabs. A save change in one returns the other to title with an explanation; resume reads the latest save.

## Map and layout

- [ ] Current-location zoom fits each pack. OSM attribution remains visible. Pan/zoom controls work with keyboard and pointer.
- [ ] Block Leaflet or a tile request. A readable route appears and remains usable at later stops. Select Text route while tiles work; reload and confirm the preference persists.
- [ ] Verify marker coordinates independently against the intended places.
- [ ] Check Chrome, Firefox, and Safari; phone, tablet, and desktop widths. At 320px, all header controls, tabs, labels, forms, and token names remain reachable.
- [ ] Follow [accessibility QA](a11y-qa.md), including zoom, motion preferences, and screen-reader output.

## Editorial and player acceptance

- [ ] If public sharing is intended, complete the [content rubric](content-rubric.md) and optional sharing gate evidence.
- [ ] A fresh player completes a route without developer coaching; record confusing clues, use of hints, difficulty, and time. Do not infer broad usability from one session.