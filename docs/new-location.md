# Author a location or pack

1. Choose the owning source: edit `scripts/generate-bentonville-content.js` for Bentonville, or the hand-authored Argentina JSON. Generated Bentonville JSON and `builtin-pack.js` will be overwritten by the content build.
2. Add a location with identity, geographic coordinates, canonical henchman, and a unique token directly on the location record. The generator never derives tokens from an eight-item positional list. Names are displayed in the warrant and inventory, so preserve spelling and avoid duplicate token names.
3. Add a nonempty case pool. Reuse an existing complete case as the structural template, change the ID, and author the dossier, three clues, four choices, warrant answers, three progressive hints, worked explanation, fact, and metadata. The generator preserves puzzle hints/description/explanation, sources, difficulty and reviewEvidence overrides. The correct option must follow from the evidence. Put costume evidence in the clues and keep the answer out of decorative headings/calling cards.
4. Add precise primary-source registry entries. Mark the new case `source-linked-needs-line-review`. Record claim-level review evidence before changing it to `reviewed`.
5. Supply `nextLead` on a Bentonville variant/location or in its lead registry; hand-authored JSON keeps it in briefing. At a selected run's last stop, the UI replaces the breadcrumb with the headquarters ending. Never assume all stops will be played.
6. Increment `contentVersion` for a changed existing pack. New packs need at least four locations, three final rounds, and a manifest entry. The shared final resolver uses the actual selected first/middle cases and earned last token.
7. Run the content and CSS builds, then the focused content/runtime checks in README. Use a representative check with your preferred input method; source and layout checks are separate.

Example location shape (illustrative values; not a publishable fact claim):

```json
{
  "id": "example-stop",
  "name": "Example Stop",
  "province": "Example District",
  "emoji": "📍",
  "lat": 36.37,
  "lng": -94.20,
  "token": {"name": "Compass", "char": "🧭"},
  "henchman": {
    "name": "Fictional Person",
    "alias": "The Map Collector",
    "emoji": "🗺️",
    "role": "Fictional courier",
    "dossierNote": "A fictional suspect in the ACME training exercise."
  }
}
```

For hand-authored packs only, `node scripts/apply-henchmen.js data/packs/argentina.json` fills canonical suspect data and missing leads, preserving a case-specific dossier note. It validates before writing and increases content version if it changes data. Do not use it to edit generated Bentonville content. The [schema](quiz-pack-schema.md) and [rubric](content-rubric.md) are the full contract.
