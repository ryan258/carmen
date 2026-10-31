# Carmen: place trivia with spaced review

An unofficial, fan-made trivia trainer with a light Carmen Sandiego wrapper. A fictional suspect flees across a pack's places. At each stop you get one clue, a real, sourced fact with the place's name blanked out, and you pick which of four places it describes. The answer, the full fact, and its source links follow every pick.

23 packs · 335 places · 492 facts. The first 12 packs (96 places, 194 facts) carry over the retired case packs' reviewed facts. The other 11 (world capitals, dish origins, Earth's extremes, and weather and disaster records: 239 places, 298 facts) were imported from Quiznauts on 2026-10-29 and reviewed against their linked sources on 2026-10-30. See [the import notes](docs/provenance/2026-10-29-quiznauts-import.md) and [the October 30 review ledger](docs/provenance/2026-10-30-quiznauts-fact-check.md).

## Play

Open `index.html` in a browser. It needs no server, build step, or network: the fact bank is a local script. To serve it anyway: `python3 -m http.server 8001`.

- **Today's case**: six stops in the selected pack, seeded by date. One per day, and finishing one extends your daily streak. Starting something else over an unfinished daily closes it as got away.
- **Start a case**: 4, 6, or 8 stops. Each case is a fresh random route.
- **Review due clues**: up to 10 facts from the selected pack whose review date has arrived.
- **Continue case**: resumes exactly where you paused. Every answer saves immediately.
- Answer with the buttons, keys 1–4, or A–D. Voice control can say "Answer A".
- The suspect is caught if you miss no more than one clue in four. Misses still teach: every clue shows the full fact.

## How it teaches

- **Retrieval first:** you answer before you see the fact, which is the effortful recall that builds memory.
- **Immediate, elaborated feedback:** each answer shows the full fact and its source.
- **Spaced repetition:** each fact sits in a Leitner box. A right answer moves it up one box and its next review comes 1, 3, 7, 16, then 35 days later. Answering right before it is due counts, but doesn't move it up. A miss sends it back to box 0, due today.
- **Mastery:** a fact counts as mastered at box 4 and up. The home screen shows mastered and due counts per pack.
- Cases prefer facts that are due, then facts you haven't seen, so ordinary play also works through your reviews.

## Progress and backup

Progress lives in this browser under one localStorage key, `carmen_trivia_v1`. **Backup → Export progress** downloads it as JSON, and **Import** restores a backup after you confirm. If saved progress can't be read, it is left untouched until you import a backup or choose Start fresh. Facts later removed from the bank are dropped from progress without losing the rest.

The retired case engine's keys (`carmen_save`, `carmen_highScores`, `carmen_career`, and the Study notebook) are not read or touched.

## Files

| File | Role |
| --- | --- |
| `index.html` | The page |
| `trivia.js` | Rules (scheduling, case building, saving) first, then page wiring |
| `trivia-bank.js` | The facts: packs → places → facts, each with clue, full fact, and sources |
| `trivia.css` | Styles |
| `tests/trivia.test.js` | Rule and bank checks |

To fix or add a fact, edit `trivia-bank.js` directly. Keep each fact's `id` stable so review history carries over. Write `____` where the place's name would give the answer away. See [`docs/guides/authoring-facts.md`](docs/guides/authoring-facts.md).

## Verify

```sh
npm run verify
```

This checks syntax and runs the Node tests. No install is needed: there are no dependencies. See [`docs/guides/manual-qa.md`](docs/guides/manual-qa.md) for the browser checklist and [`docs/guides/deployment.md`](docs/guides/deployment.md) for hosting.

## Provenance

The facts in the first 12 packs come from the retired case packs' `funFact` fields and source registries, which had AI-assisted source and editorial review (see `docs/provenance/2026-10-15-all-packs-fact-check.md` and the other ledgers in `docs/provenance/`). The extraction blanked names automatically. A 2026-10-29 pass retired 30 near-duplicate or puzzle-residue facts, trimmed hedges, and fixed clues whose wording gave the place away; facts that now cite a second fact's claim carry its source too. A 2026-10-30 AI-assisted pass reviewed all 11 Quiznauts packs against their linked Wikipedia and WMO sources, retiring 1 place and 11 contradicted or dual-origin facts, rewriting 103 clues/facts to fix source drift and remove giveaways, and updating canonical URLs and coordinates (`docs/provenance/2026-10-30-quiznauts-fact-check.md`). The rest of `docs/` describes the retired case engine and earlier verifications, preserved in `docs/archive/` and summarized in `docs/README.md`. The last commit with the retired case engine is `4dddec7`.
