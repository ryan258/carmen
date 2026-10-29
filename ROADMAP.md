# Carmen roadmap

## Current state

The October 28 lean redesign replaced the case engine with place trivia and spaced review: one page, one rules file, one fact bank, and one test file. See [SPEC.md](SPEC.md).

## Next

- **Play it for a week.** Watch for clues that are ambiguous between two places, too easy because a landmark name gives the place away, or too thin to learn from. Fix or retire those in `trivia-bank.js`.
- **Review the Quiznauts imports.** The 11 packs imported on 2026-10-29 (capitals, dishes, Earth's extremes, weather and disaster records) are unreviewed. Check each fact against its linked source and its approximate coordinates, then retire or fix what fails. The largest packs (42-place World's Kitchens, 26-place Asian capitals) may also want splitting if their random choices feel too easy.
- **Thin packs.** Ozark Waterways, Arkansas Delta, American National Parks, Railroads & Depots, Architecture, and Museums have one fact per place, so their reviews repeat quickly. Add sourced facts when they're worth it. The 2026-10-29 cleanup also left Lake Chicot and Ozark Folk Center with one fact each.
- **Possible additions, only if play shows the need:** a reverse question (place → which fact), a cross-pack review queue, a simple lat/lng dot map, and read-aloud.
- **Your call:** the page and pack titles use the Carmen Sandiego name on a public site.
- **Old engine leftovers:** `docs/provenance/` preserves the facts' reviewed provenance, `docs/archive/case-engine/` preserves the retired engine's design records, and `docs/README.md` maps the archives.
