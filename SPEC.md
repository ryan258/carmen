# Current implementation contract

A local, single-user trivia trainer: real place facts, spaced review, and a thin Carmen Sandiego chase wrapper. It replaced the case engine on 2026-10-28. That engine (schema-8 saves, catalogs, activities, warrants, Study, and the career layer) last exists at commit `4dddec7`. Its documents in `docs/archive/case-engine/` are historical; its fact reviews are preserved in `docs/provenance/`.

## Content

`trivia-bank.js` defines `TRIVIA_BANK = {version: 1, packs: [{id, title, places: [{id, name, region, lat, lng, emoji, suspect: {name, alias, emoji}, facts: [{id, clue, fact, sources: [{title, publisher, url}]}]}]}]}`.

- There are 12 packs, 96 places, and 224 facts. Every pack has at least four places, and every place has at least one fact.
- `fact` is the reviewed text carried over from the retired packs. `clue` is the same text with the place's full name and distinctive short names replaced by `____`. A clue must not contain its place's full name.
- Every fact has at least one `https` source. Fact and place ids are globally unique and must stay stable, because review progress is keyed by fact id.
- Suspects are fictional decoration. Nothing asks the player to remember them.

## Play

- **Chase** (4/6/8 stops) and **daily** (6 stops, seed `daily-YYYY-MM-DD`, one per local day) visit distinct places in a seeded random order.
- Each stop is one leg: the clue for that place plus four choices from the same pack, the answer and three seeded distractors. For each place, the leg uses a due fact first, then an unseen one, then the one due soonest.
- **Review** asks up to 10 of the selected pack's facts that are due, lowest box first.
- Each leg takes exactly one answer, which is graded immediately. Continue appears only after an answer. Feedback shows right or wrong, the place and region, the full fact, and its sources.
- After the last leg the run closes with a summary. The suspect is caught when misses are at most `floor(legs / 4)`. A finished daily records `{packId, caught}` for that day.
- The streak counts consecutive days with a finished daily, ending today or yesterday.

## Scheduling

Facts use Leitner boxes 0–5 with review gaps of 0, 1, 3, 7, 16, and 35 days. A right answer moves a fact up one box and sets its due date to today plus that box's gap. A wrong answer sets box 0, due today. A fact counts as mastered at box 4 or higher.

## Persistence

- Progress is stored as `{version: 1, cards: {factId: {box, due, seen, right}}, run, dailies: {day: {packId, caught}}, lastPack}` under localStorage key `carmen_trivia_v1`. It is saved after every answer and every Continue.
- `normalizeProgress` rejects the wrong version or a malformed card or daily entry. It drops cards for facts no longer in the bank. It drops an invalid run while keeping the rest: unknown ids, wrong option counts, or an unanswered leg before the current index.
- Progress that can't be read is never overwritten automatically. Saving stays off until the player imports a backup or chooses Start fresh. When storage is unavailable, play continues with a notice to export.
- Export downloads the progress JSON. Import validates it with the same rules and asks for confirmation before replacing.
- The retired engine's storage keys are neither read nor removed.

## Boundaries

- There are no dependencies, build step, network requests, map, accounts, or telemetry. Opening `index.html` from disk works.
- Native buttons have "Answer A–D" accessible names. Keys 1–4 or A–D answer, except while focus is in a form control or a modifier key is held.
- Focus moves to the question, then to Continue, then to the results heading. Feedback is announced through a polite live region.
- These have not yet been checked in a real browser with assistive technology.

## Verification

`npm run verify` runs `node --check` on `trivia.js` and `trivia-bank.js`, then `tests/trivia.test.js`. That file checks bank integrity, scheduling, seeded case building, due-first selection, one-answer grading with outcomes and dailies, the streak, review selection, and progress round-trip and rejection. The page wiring has no automated DOM test.

Ryan's October 28 `npm run verify` passed syntax and all 7 tests. Before that, a manual check in the Claude browser pane covered a daily case, a deliberate miss, saving, resume, results, the streak, review mode, and 375px phone width. It found and fixed two bugs: the bank global lookup and a stale miss counter. After the old engine was deleted, Ryan's GitNexus 1.6.12 refresh reported 543 nodes, 1,238 edges, 7 clusters, and 39 flows. `detect-changes --scope all` then reported 70 files, 17 symbols (all document sections), 0 affected flows, and low risk. That rating does not assess the new engine: its four files and test were still untracked, so the git diff did not include them, and the deleted engine was no longer indexed.
