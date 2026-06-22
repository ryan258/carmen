# Content Rubric

Every case in every `data/packs/*.json` file listed by `data/quiz-packs.json` must satisfy this contract before it is treated as production-ready. The legacy `question-bank.json` file is generated for compatibility, but the pack files are the active runtime contract.

## Required Fields

- `caseId`: stable, unique identifier.
- `briefing.headline`: short ACME-style incident title.
- `briefing.report`: narrative setup tied to the location. Carmen herself is offstage by the time the player lands; the brief should make clear that the on-site target is one of her accomplices, not Carmen.
- `briefing.callingCard`: Carmen taunt language, written as if sent from a distance (not as on-scene dialogue).
- `briefing.suspect`: the V.I.L.E. accomplice the player will actually arrest. Object with `name`, `alias`, `emoji`, `role`, and `dossierNote`. Defaults inherit from the canon roster in the quiz pack's `locations` array; cases may override `dossierNote` for round-specific flavor.
- `briefing.nextLead` (recommended): one-sentence breadcrumb seized from the suspect that points toward the next stop. The final Osage Park round's nextLead points at Carmen herself.
- `clues`: exactly three inspectable clues.
- `puzzle.title`: puzzle name.
- `puzzle.description`: explanation of the puzzle action.
- `puzzle.question`: player-facing prompt.
- `puzzle.options`: exactly four A/B/C/D choices until a richer puzzle engine exists.
- `puzzle.correctIndex`: zero-based index for the correct answer.
- `warrantAnswers.city`: city or place shown in the warrant dropdown.
- `warrantAnswers.hideout`: specific hideout.
- `warrantAnswers.disguise`: disguise clue.
- `funFact`: short educational takeaway.
- `learningObjective`: what the player should learn.
- `sources`: verification sources for educational claims.
- `difficulty`: `rookie`, `detective`, or `inspector`.
- `mechanic`: puzzle mechanic identifier.
- `regionTags`: location, province, or theme tags.
- `visualType`: rendering strategy for the clue art.
- `accessibilityDescription`: text alternative for visual evidence.

## Quality Rules

- The answer must be inferable from at least two clues.
- Distractors should be plausible but not misleading after the clues are read.
- Fun facts must be Bentonville-specific, not generic Arkansas or tourism facts.
- Claims about Indigenous history, sacred objects, migration, or living cultures need extra source review.
- Local names should preserve official spelling and styling where the game UI can support them.
- Any case without reviewed sources keeps `reviewStatus: "needs-source-review"`.

## Review Checklist

- Geography verified.
- Cultural claim verified.
- Learning objective clear.
- Warrant answer exactly matches dropdown text.
- Puzzle options include one correct answer and three distractors.
- Visual evidence supports the clue.
- Accessibility description explains the meaningful visual information.
