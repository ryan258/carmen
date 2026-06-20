# Dependency Plan

## Tailwind

Done. The Tailwind CDN has been replaced with a checked-in build (`tailwind.build.css`),
generated from the project's utility usage via `tailwind.config.js`. Rebuild with:

```sh
npx tailwindcss -i tailwind.input.css -o tailwind.build.css --minify
```

- `styles.css` remains the source of truth for the Saul Bass-inspired design system.
- `tests/smoke.test.js` fails if `cdn.tailwindcss.com` reappears in production HTML.

## Map Tiles

The current Leaflet map uses remote CARTO tiles. That gives better map fidelity for online play, but production must tolerate remote failure.

Decision:

- Keep Leaflet and remote tiles for the online version because geographic fidelity is important.
- Maintain the new static map fallback so a tile or Leaflet failure does not blank the game.
- Build a self-contained SVG map mode only if offline or archival play becomes a release requirement.

## Production Risk

- Leaflet remote tiles are now the largest remaining frontend dependency risk.
- Leaflet remote tiles are acceptable only with fallback and clear credits.
- Browser smoke tests should cover both normal Leaflet mode and simulated no-Leaflet fallback mode.
