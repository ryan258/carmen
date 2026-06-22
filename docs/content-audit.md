# Content Audit Checklist

Use this before a case is allowed to ship as production-ready.

## Per-Case Review

- Case ID is unique and stable.
- Location, hideout, and disguise match the warrant dropdown text.
- Correct answer can be inferred from at least two clues.
- Distractors are plausible but clearly wrong after the clue trail.
- Learning objective is specific and player-facing.
- Fun fact is tied to the solved case.
- Source IDs exist in the relevant `data/packs/*.json` file under `sources`.
- Source entries have been line-reviewed for every educational claim.
- Place names, accents, and local styling are correct for the active pack.
- Accessibility description explains the meaningful visual evidence.
- Sensitive cultural, Indigenous, sacred, or living-community claims received extra review.

## Release Review

- No case remains at `reviewStatus: "needs-source-review"`.
- No case has an empty `sources` array.
- All source URLs are reachable during release QA.
- At least 50 cases are available before production release.
- Location mix includes downtown Bentonville, Walmart heritage, the Home Office campus, Crystal Bridges, The Momentary, Compton Gardens, Coler trails, Osage Park, public art, ecology, foodways, history, and outdoor recreation.
