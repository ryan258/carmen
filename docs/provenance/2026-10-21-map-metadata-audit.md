# Map metadata inventory — October 21, 2026

This is a read-only inventory of the checked-in location records and existing editorial scope, not an external coordinate verification or travel review. No map was opened, geocoding service called, source page fetched, test run, or coordinate changed. The game’s maps provide approximate orientation; they do not identify entrances or establish connected riding, rail, boating, or driving routes.

All twelve packs contain eight location records, giving 96 records. Inspection of the stored values found numeric coordinates within latitude −90…90 and longitude −180…180, with no duplicate coordinate pair inside a pack. Those basic properties do not establish that any pin is geographically precise. Several packs intentionally represent whole cities, parks, campuses, or trail systems with one point.

| Pack file in `data/packs/` | Records | Latitude range | Longitude range | Initial map zoom |
| --- | ---: | --- | --- | ---: |
| `american-national-parks.json` | 8 | 19.419…44.46 | −155.288…−68.22 | 4 |
| `architecture-hidden-details.json` | 8 | 34.051…43.142 | −122.531…−73.53 | 4 |
| `argentina.json` | 8 | −54.8019…−24.7821 | −72.2648…−54.5736 | 3.5 |
| `arkansas-delta.json` | 8 | 33.256…35.598 | −91.349…−90.042 | 7 |
| `arkansas-state-parks.json` | 8 | 33.35…36.497 | −93.684…−91.28 | 7 |
| `bentonville.json` | 8 | 36.3545…36.3812 | −94.2328…−94.2028 | 13 |
| `museums-missing-labels.json` | 8 | 37.414…47.518 | −122.397…−77.02 | 4 |
| `northwest-arkansas.json` | 8 | 36.0626…36.468 | −94.5405…−93.7379 | 9 |
| `nwa-mountain-biking.json` | 8 | 36.019…36.479 | −94.279…−94.104 | 9 |
| `ozark-waterways.json` | 8 | 35.985…37.153 | −93.85…−90.995 | 7 |
| `railroads-depots.json` | 8 | 35.066…41.618 | −120.424…−75.671 | 4 |
| `route-66.json` | 8 | 34.904…41.095 | −117.024…−88.426 | 4 |

Two coordinate pairs are reused across different packs:

- `36.497, −91.535`: Mammoth Spring State Park in Arkansas State Parks and Mammoth Spring in Ozark Waterways. Both records name the same general place; the shared point is not evidence of distinct verified entrances.
- `36.3729, −94.2088`: Downtown Square in Bentonville and the Bentonville city stop in Northwest Arkansas. The latter is a city-level orientation point even though its cases name several venues.

The [all-pack fact-check ledger](2026-10-15-all-packs-fact-check.md) explicitly excludes shared coordinates and entrance-level accuracy from its review. The [six-pack ledger](2026-10-14-remaining-packs-review.md) likewise calls pins approximate and routes curated archive sequences. Its Arkansas Post relocation case distinguishes a continuing institution from a fixed site; the present orientation point must not be read as the coordinate of every historical incarnation. Case source-review flags apply to recorded claims, not all location metadata. Unreferenced legacy source records remain historical material and were not removed as supposed defects.

No source-backed coordinate correction emerged from this inventory. Exact placement, coordinate provenance, broad-area point choice, entrance suitability, initial viewport coverage, map-provider behavior, and current access remain unverified. If precise orientation becomes useful, audit one pack against authoritative location records, record the chosen point’s purpose and evidence, and review its content/save consequences before changing data. Do not infer a fix from how many decimal places a coordinate has or copy a convenient search-result pin without checking what it represents.

[`game-map.js`](../../game-map.js) retains the text-route fallback. The visible orientation note is shared between the map and its text alternative, so the optional map does not become a hidden prerequisite for solving a case. The source inventory above supplies no browser, tile-provider, screen-reader, or high-zoom acceptance evidence.
