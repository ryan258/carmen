# Creating a New Quiz Pack

The game shell is now designed to be content-pack driven. To make another edition, create or generate a new pack file under `data/packs/`, add it to `data/quiz-packs.json`, then run the tests. JavaScript edits should not be required for ordinary location or question-set swaps.

## 1. Define the Scope

Pick the map scale before writing cases:

| Source scale | Good stop unit |
| --- | --- |
| City | neighborhoods, venues, parks, districts |
| Region | towns, counties, landmarks |
| Country | cities, provinces, national landmarks |

Each stop must have real coordinates. The common denominator is:

```json
{
  "id": "downtown-square",
  "name": "Downtown Square",
  "province": "Historic Downtown",
  "emoji": "🏛️",
  "tagline": "The civic heart of Bentonville",
  "lat": 36.3729,
  "lng": -94.2088
}
```

## 2. Build the Pack

Start from an existing file such as `data/packs/bentonville.json` or `data/packs/argentina.json`, save the new pack under `data/packs/`, and replace:

- Top-level metadata: `id`, `title`, `subtitle`, `heroLocation`, `intro`, `evidenceLabel`, and `successMessage`.
- `map.center`, `map.zoom`, `map.minZoom`, and `map.maxZoom`.
- `locations`: the ordered route.
- `questions`: one randomized case pool per `location.id`.
- `sources`: the source registry used by case `sources` arrays.
- `finalConfrontation.rounds`: optional endgame rounds for the new edition.

Add the new pack to `data/quiz-packs.json` with `id`, `title`, `description`, and `path`. Each pack file is self-contained (locations, questions, and sources inline), so no separate region or question-bank files are needed. The runtime loads `data/quiz-packs.json`, then fetches the selected pack path.

## 3. Write Cases

Every case must satisfy [content-rubric.md](content-rubric.md). The minimum shape is:

```json
{
  "caseId": "classic-downtown-square",
  "briefing": {
    "headline": "SQUARE MARKET SWAP!",
    "report": "Narrative tying the crime to this stop.",
    "callingCard": "Carmen's remote taunt.",
    "suspect": {
      "name": "Dottie Ledger",
      "alias": "The Square Dealer",
      "emoji": "🧾",
      "role": "Receipt forger hiding in market-day crowds",
      "dossierNote": "Short suspect flavor."
    },
    "nextLead": "A clue pointing to the next stop."
  },
  "clues": ["...", "...", "..."],
  "puzzle": {
    "title": "Market Map Match",
    "description": "Use the local clues to identify the hideout.",
    "question": "Which stop matches the market clues?",
    "options": ["Downtown Square", "Osage Park", "Crystal Bridges", "Coler Mountain Bike Preserve"],
    "correctIndex": 0
  },
  "warrantAnswers": {
    "city": "Downtown Square",
    "hideout": "Downtown Square",
    "disguise": "Farmers market vendor"
  },
  "funFact": "Short educational takeaway.",
  "learningObjective": "What the player should learn.",
  "sources": ["visit_bentonville_square"],
  "difficulty": "detective",
  "mechanic": "deduction-choice",
  "regionTags": ["Historic Downtown", "Downtown Square"],
  "visualType": "inline-html-cutout",
  "accessibilityDescription": "Text alternative for visual evidence."
}
```

## 4. Validation Workflow

Run:

```sh
npm test
```

The important pack checks are:

- `tests/smoke.test.js`: verifies the app loads the manifest and exposes the selector.
- `tests/content-validation.test.js`: validates manifest entries, pack metadata, locations, sources, and case schema for every listed pack.
- `tests/run-generation.test.js`: verifies seeded random case selection from each location pool.

Then serve locally:

```sh
python3 -m http.server 8000
```

Open `http://127.0.0.1:8000/` and play one full run. Confirm markers land on the intended coordinates, clues are inferable, warrants accept the expected answers, and the final confrontation matches the pack theme.
