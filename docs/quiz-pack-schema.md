# Quiz Pack Schema

`data/quiz-packs.json` is the pack manifest, and each file under `data/packs/` is a game-content pack. The runtime should be able to swap packs without JavaScript edits as long as the manifest entry points at a pack that follows this shape.

## Manifest Fields

- `schemaVersion`: currently `1`.
- `defaultPackId`: pack id selected on first load.
- `packs`: list of selectable packs.
- `packs[].id`: stable id. Must match the pack file's top-level `id`.
- `packs[].title`: selector label. Should match the pack file's `title`.
- `packs[].description`: short selector status text.
- `packs[].path`: relative path to the pack file, for example `./data/packs/argentina.json`.

## Pack Fields

- `schemaVersion`: currently `1`.
- `id`: stable pack identifier.
- `title`: browser title, footer title, and pack name.
- `subtitle`: header subtitle.
- `heroLocation`: large title-screen place text.
- `intro`: title-screen introduction.
- `evidenceLabel`: label rendered on generated puzzle evidence cards.
- `successMessage`: final results message after Carmen is caught.
- `map.center.lat` and `map.center.lng`: default map center.
- `map.zoom`, `map.minZoom`, `map.maxZoom`: Leaflet zoom settings.
- `locations`: ordered route stops. Each stop needs `id`, `name`, `province`, `emoji`, `tagline`, `lat`, `lng`, and `henchman`.
- `questions`: object keyed by `location.id`; each value is that location's randomized case pool.
- `sources`: source registry keyed by source id.
- `finalConfrontation.title` and `finalConfrontation.rounds`: optional endgame puzzle rounds. If omitted, the built-in Bentonville fallback rounds are used.

## Case Fields

Each case in `questions[locationId]` follows the case contract in [content-rubric.md](content-rubric.md). Required game fields include:

- `caseId`
- `briefing.headline`
- `briefing.report`
- `briefing.callingCard`
- `briefing.suspect`
- `clues`
- `puzzle.title`
- `puzzle.description`
- `puzzle.question`
- `puzzle.options`
- `puzzle.correctIndex`
- `warrantAnswers.city`
- `warrantAnswers.hideout`
- `warrantAnswers.disguise`
- `funFact`

## Randomization

The route order is the order of `locations`. For each stop, `run-generator.js` chooses one case from `questions[location.id]` using the run seed. A new pack should include multiple cases per location for replay value; the current tests require at least five per active location.

## Coordinates

The common denominator across packs is map-backed trivia: every location must include numeric `lat` and `lng` fields, and every case pool must map back to one of those location ids.

## Trust Boundary

Pack files are trusted first-party content. `puzzle.visualHtml` and `finalConfrontation.rounds[].visualHtml` are injected with `innerHTML` and are **not** sanitized. Only load packs you author or review — do not point a manifest entry at a third-party or user-supplied pack file, or its markup runs with full page privileges (stored XSS). If untrusted packs ever become a goal, sanitize `visualHtml` at render time first.
