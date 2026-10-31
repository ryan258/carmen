# Current implementation contract

A local, single-user trivia trainer: real place facts, spaced review, and a thin Carmen Sandiego chase wrapper. It replaced the case engine on 2026-10-28. That engine (schema-8 saves, catalogs, activities, warrants, Study, and the career layer) last exists at commit `4dddec7`. Its documents in `docs/archive/case-engine/` are historical; its fact reviews are preserved in `docs/provenance/`.

## Content

`trivia-bank.js` defines `TRIVIA_BANK = {version: 1, packs: [{id, title, places: [{id, name, region, lat, lng, emoji, suspect: {name, alias, emoji}, facts: [{id, clue, fact, sources: [{title, publisher, url}]}]}]}]}`.

- There are 23 packs, 335 places, and 492 facts. Every pack has at least four places, and every place has at least one fact.
- The first 12 packs (96 places, 194 facts) are reviewed facts from the retired engine. The last 11 (239 places, 298 facts) were imported on 2026-10-29 from four Quiznauts banks (capitals-hard, dish-origins, earth-superlatives, and extreme-earth) and received AI-assisted source, coordinate, and editorial review on 2026-10-30 (`docs/provenance/2026-10-29-quiznauts-import.md`, `docs/provenance/2026-10-30-quiznauts-fact-check.md`). Their suspects repeat per pack family.
- In the first 12 packs, `fact` is the reviewed text carried over from the retired packs, trimmed on 2026-10-29 to drop near-duplicates and hedges left by the retired puzzles. `clue` is the same statement with the place's name and distinctive short names replaced by `____`, lightly reworded where a word in the sentence gave the place away. A clue that names only a landmark unique to its place, such as Elkhorn Tavern, may repeat the fact unchanged. A clue must not contain its place's full name.
- Every fact has at least one `https` source. Fact and place ids are globally unique and must stay stable, because review progress is keyed by fact id.
- Suspects are fictional decoration. Nothing asks the player to remember them.

## Play

- **Chase** (4/6/8 stops) and **daily** (6 stops, seed `daily-YYYY-MM-DD`, one per local day) visit distinct places in a seeded random order.
- Each stop is one leg: the clue for that place plus four choices from the same pack, the answer and three seeded distractors. For each place, the leg uses a due fact first, then an unseen one, then the one due soonest.
- **Review** asks up to 10 of the selected pack's facts that are due, lowest box first.
- Each leg takes exactly one answer, which is graded immediately. Continue appears only after an answer. Feedback shows right or wrong, the place and region, the full fact, and its sources.
- After the last leg the run closes with a summary. The suspect is caught when misses are at most `floor(legs / 4)`. A finished daily records `{packId, caught}` under the day in its seed, even when it ends after midnight.
- Starting another case or review over an unfinished daily asks first, then closes the daily as got away, so its route can't be replayed after its answers were seen. Replacing an ordinary case records nothing.
- The streak counts consecutive days with a finished daily, ending today or yesterday.

## Scheduling

Facts use Leitner boxes 0–5 with review gaps of 0, 1, 3, 7, 16, and 35 days. A right answer moves a fact up one box and sets its due date to today plus that box's gap. A right answer before the fact is due counts toward seen and right but keeps its box and due date, so replaying a pack can't skip the gaps. A wrong answer sets box 0, due today, whether or not the fact was due. A fact counts as mastered at box 4 or higher.

## Persistence

- Progress is stored as `{version: 1, cards: {factId: {box, due, seen, right}}, run, dailies: {day: {packId, caught}}, lastPack}` under localStorage key `carmen_trivia_v1`. It is saved after every answer and every Continue.
- `normalizeProgress` rejects the wrong version or a malformed card or daily entry. It drops cards for facts no longer in the bank. It drops an invalid run while keeping the rest: unknown ids, wrong option counts, or an unanswered leg before the current index.
- Progress that can't be read is never overwritten automatically. Saving stays off until the player imports a backup or chooses Start fresh. When storage is unavailable, play continues with a notice to export.
- Export downloads the progress JSON. Import validates it with the same rules and asks for confirmation before replacing.
- The retired engine's storage keys are neither read nor removed.

## Boundaries

- There are no dependencies, build step, network requests, map, accounts, or telemetry. Opening `index.html` from disk works.
- Native buttons have "Answer A–D" accessible names. Keys 1–4 or A–D answer, except while focus is in a form control or a modifier key is held.
- Focus moves to the question, then to Continue, then to the results heading. Resuming an answered clue focuses Continue. Pause, Home, and Start fresh focus the page heading. Feedback is announced through a polite live region.
- These have not yet been checked in a real browser with assistive technology.

## Verification

`npm run verify` runs `node --check` on `trivia.js` and `trivia-bank.js`, then `tests/trivia.test.js`. That file checks bank integrity, scheduling (including no promotion before a fact is due), seeded case building, due-first selection, one-answer grading with outcomes and dailies, dailies filed under their seed day, closing an abandoned daily, the streak, review selection, and progress round-trip and rejection. The Pages workflow runs the same command before it publishes. The page wiring has no automated DOM test.

Ryan's October 28 `npm run verify` passed syntax and all 7 tests. Before that, a manual check in the Claude browser pane covered a daily case, a deliberate miss, saving, resume, results, the streak, review mode, and 375px phone width. It found and fixed two bugs: the bank global lookup and a stale miss counter. The October 29 fixes (early promotion, the midnight daily, daily replay, focus after navigation, and the fact cleanup) passed Ryan's October 29 `npm run verify`: syntax and all 9 tests. The same day, a scripted check in the Claude browser pane passed these flows: a daily with a keyboard miss, Pause and reload, resuming an answered clue, replacing an unfinished daily, a review through to results, an unreadable save, and Start fresh. Focus landed as specified throughout, and the console logged no errors. Screen readers, 375px width, and 200% zoom were not rechecked. The 2026-10-29 Quiznauts import was checked by script for unique ids, four places per pack, and no clue naming its place; Ryan's `npm run verify` then passed syntax and all 9 tests with the 503-fact bank. GitNexus 1.6.12 indexed commit `75b3662` at 568 nodes, 1,274 edges, 7 clusters, and 39 flows.
