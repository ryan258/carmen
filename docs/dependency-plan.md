# Dependency Plan

## Tailwind

The current build still uses the Tailwind CDN. This is acceptable for prototype work, but not for production because the app depends on a remote runtime stylesheet generator.

Production direction:

- Replace the CDN with a checked-in stylesheet generated from the current utility classes, or migrate the remaining utility usage into `styles.css`.
- Keep `styles.css` as the source of truth for the Saul Bass-inspired design system.
- Add a smoke test that fails if `cdn.tailwindcss.com` remains in production HTML once the migration starts.

## Map Tiles

The current Leaflet map uses remote CARTO tiles. That gives better map fidelity for online play, but production must tolerate remote failure.

Decision:

- Keep Leaflet and remote tiles for the online version because geographic fidelity is important.
- Maintain the new static map fallback so a tile or Leaflet failure does not blank the game.
- Build a self-contained SVG map mode only if offline or archival play becomes a release requirement.

## Production Risk

- Tailwind CDN is the largest remaining frontend dependency risk.
- Leaflet remote tiles are acceptable only with fallback and clear credits.
- Browser smoke tests should cover both normal Leaflet mode and simulated no-Leaflet fallback mode.
