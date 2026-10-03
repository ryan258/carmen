# Dependencies and failure behavior

| Dependency | Current use | Failure behavior |
| --- | --- | --- |
| Local HTML/JS/CSS | Static application assets | Required; deploy/build them together |
| Pack manifest and JSON | Two first-party content packs | Ten-second request timeout; generated Bentonville snapshot fallback; start/resume blocked during selection |
| Browser localStorage | One active save, settings, scores, statistics | Session-memory fallback and visible persistence warning |
| Web Audio | Optional synthetic effects | Unsupported/blocked construction does not stop play; sound setting respected |
| Leaflet 1.9.4 | Map rendering, pinned CDN assets with integrity | Async optional script; DOM-ready game boot; Text route when unavailable or selected |
| OpenStreetMap standard tiles | Ordinary browser map viewing | Visible attribution; text route after tile errors; no repeated initialization loop |
| Tailwind 3 | Development-only utility build | Checked-in `tailwind.build.css` loads without the Tailwind runtime CDN |

`map-config.js` contains the public tile URL and attribution. The default uses HTTPS OSM tiles, ordinary browser caching, and browser Referer headers. Do not add tile prefetching, offline downloads, cache bypasses, or referrer suppression. Follow the [OSM tile policy](https://operations.osmfoundation.org/policies/tiles/), which provides best-effort availability rather than a service guarantee. If future usage exceeds personal browsing, revisit provider suitability; no external account or purchase was created by this remediation.

Do not put private API keys in browser assets. A future provider change must also change its visible attribution and verify applicable usage requirements. CDN map scripts/styles and tiles can disclose normal request metadata to their providers; there is no application telemetry. Full offline operation would require a separate bundling/map decision.

`game-core.js` isolates scoring, validation, storage, and scheduling for production-function tests. `game-map.js` owns the map adapter and `game-records.js` owns records/statistics. `game.js` remains the browser controller; further view extraction is incremental maintenance, not a prerequisite for adding a pack.

## Verification evidence

The lockfile and dependency versions were not changed in the October 3 remediation. Historical dependency checks are recorded in [October 2 evidence](archive/verification-2026-10-02.md); they do not verify current runtime changes. See [current status](remediation-status.md).
