# Visual System

## Direction

The game uses a Saul Bass-inspired cut-paper detective poster style: hard silhouettes, uneven paper shapes, limited colors, strong diagonals, and theatrical contrast. The map remains legible and geographically credible; the poster style frames the game, not the cartography.

## Palette

- Ink: `#171510`
- Paper: `#f2e3bd`
- Carmen red: `#c7352c`
- Mustard: `#d29a2e`
- Teal: `#2e7f80`
- Map blue: `#2f6f8f`
- Case gray: `#3a3a35`
- Success green: `#287b52`

## Type

- Display: bold condensed headline treatment for ACME case titles and screen headings.
- Body: readable sans serif for instructions, clues, and controls.
- Evidence: monospace or typewriter treatment for cards, coordinates, ciphers, and reports.
- Letter spacing stays at `0`; use weight and scale instead of tracking-heavy text.

## Shape Vocabulary

- Torn paper panels with hard corners or small-radius corners.
- Diagonal strips for urgency and travel.
- Flat landmarks built from CSS or SVG-like cutout shapes.
- Carmen red appears as a signal color, not a background wash.
- Texture is subtle paper grain only; avoid glow, glass, blur, and orb decoration.

## Interface Rules

- Buttons use clear command labels and visible focus states.
- Repeated case cards can use contained panels; page sections should not become nested cards.
- Evidence visuals must communicate useful clue information.
- Map controls must remain visually distinct from decorative poster elements.
- The map must never be obscured by large decorative overlays.

## Motion Rules

- Motion should feel like paper sliding, stamping, or case files snapping into place.
- Travel animation should be brief and respect reduced-motion preferences.
- Correct and incorrect feedback may stamp or snap, but should not rely on color alone.

## Evidence Art Requirements

Each case should eventually use one of these reusable evidence components or a similarly styled custom cutout:

- Monument
- Mountain
- Waterfall
- Train
- Book
- Lighthouse
- Glacier
- Compass
- Ticket
- Calling card
