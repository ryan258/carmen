# Carmen roadmap

## Current state

The October 28 lean redesign replaced the case engine with place trivia and spaced review: one page, one rules file, one fact bank, and one test file. See [SPEC.md](SPEC.md).

## Next

- **Play it for a week.** Watch for clues that are ambiguous between two places, too easy because a landmark name gives the place away, or too thin to learn from. Fix or retire those in `trivia-bank.js`.
- **Thin packs.** Ozark Waterways, Arkansas Delta, American National Parks, Railroads & Depots, Architecture, and Museums have one fact per place, so their reviews repeat quickly. Add sourced facts when they're worth it.
- **Possible additions, only if play shows the need:** a reverse question (place → which fact), a cross-pack review queue, a simple lat/lng dot map, and read-aloud.
- **Old engine leftovers:** `docs/provenance/` preserves the facts' reviewed provenance, `docs/archive/case-engine/` preserves the retired engine's design records, and `docs/README.md` maps the archives.
