# Authoring facts

Every question comes from `trivia-bank.js`, which holds packs, then places, then facts. The exact shape is in [SPEC.md](../../SPEC.md#content). Edit the file directly. There is no generator.

## Add a fact

1. Find the place, then append to its `facts` array:

   ```js
   {
    "id": "route-66-dwight-4",
    "clue": "Ambler’s Texaco in ____ ...",
    "fact": "Ambler’s Texaco in Dwight ...",
    "sources": [{"title": "Ambler’s Texaco Gas Station", "publisher": "National Park Service", "url": "https://..."}]
   }
   ```

2. **`id`:** use `<place-id>-<n>` with the next unused number. Never reuse or renumber an id, because review history is keyed by it.
3. **`fact`:** the full statement shown after an answer. It must be supported by the cited page.
4. **`clue`:** the same statement with the place's name, and any short form that gives it away, replaced by `____`. For example, "Coler" for Coler Mountain Bike Preserve, "Bariloche", or "The Square".
5. **`sources`:** at least one `https` page, with its title and publisher.
6. Run `npm run verify`. The bank test rejects a clue that contains its place's full name. It cannot catch short forms or ambiguity, so check those yourself.

## Editorial rules

- **Real and specific.** Facts only: no invented records, people, or events. Check dates, counts, superlatives, and attributions one by one against the cited page. A tourism homepage does not prove every claim about its region.
- **Exactly one place fits.** Read the clue against every other place in the same pack, because any of them can appear as a wrong choice. If two places could match (for example, wine regions in Salta and Mendoza), add a distinguishing detail or drop the fact.
- **No giveaways.** Blank the name and its short forms. A landmark that sits only at that place, like Fallingwater or Elkhorn Tavern, is fair: knowing where it is is the trivia.
- **Readable with the blank.** The clue must still make sense with `____` in it, and it must not depend on anything the player saw earlier in the game.
- **Stable over time.** Prefer history, geography, and design over hours, prices, events, or anything else that changes.
- **Worth learning.** Skip near-duplicates of a fact the place already has. Two phrasings of the same claim only repeat the review.

## Fix or retire a fact

- **Fix:** edit `clue`, `fact`, or `sources` in place and keep the `id`.
- **Retire:** delete the entry. Saved progress drops cards for missing ids on the next load and keeps everything else.

## Record the review

When you add or re-check facts, add a dated ledger to [`docs/provenance/`](../provenance/), named like `2026-11-02-route-66-additions.md`. List each fact id, its source, the claim the source supports, and who reviewed it, saying explicitly if the review was AI-assisted.
