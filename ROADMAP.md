# Carmen roadmap

## Current state

The October 28 lean redesign replaced the case engine with place trivia and spaced review: one page, one rules file, one fact bank, and one test file. See [SPEC.md](SPEC.md).

## Next

- **Play it for a week.** Watch for clues that are ambiguous between two places, too easy because a landmark name gives the place away, or too thin to learn from. Fix or retire those in `trivia-bank.js`.
- **Large packs.** After the 2026-10-30 source review of the 11 Quiznauts packs (`docs/provenance/2026-10-30-quiznauts-fact-check.md`), the largest packs (41-place World's Kitchens, 26-place Asian capitals, 30-place Extreme Waters) may still want splitting if their random choices feel too easy in play.
- **Thin packs.** Ozark Waterways, Arkansas Delta, American National Parks, Railroads & Depots, Architecture, and Museums have one fact per place, so their reviews repeat quickly. Add sourced facts when they're worth it. The 2026-10-29 cleanup also left Lake Chicot and Ozark Folk Center with one fact each.
- **Possible additions, only if play shows the need:** a reverse question (place → which fact), a cross-pack review queue, a simple lat/lng dot map, and read-aloud.
- **Your call:** the page and pack titles use the Carmen Sandiego name on a public site.
- **Old engine leftovers:** `docs/provenance/` preserves the facts' reviewed provenance, `docs/archive/case-engine/` preserves the retired engine's design records, and `docs/README.md` maps the archives.
