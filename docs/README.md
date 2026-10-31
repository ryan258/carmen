# Documentation

Living documentation for the active project is kept in the repository root and `docs/guides/`:
- [`README.md`](../README.md) — project overview, play instructions, learning model, files, and verification commands
- [`SPEC.md`](../SPEC.md) — current implementation contract (data schemas, play flow, Leitner scheduling, persistence, accessibility)
- [`ROADMAP.md`](../ROADMAP.md) — immediate priorities and future considerations
- [`CHANGELOG.md`](../CHANGELOG.md) — chronological record of changes

## Active guides

- **[`guides/manual-qa.md`](guides/manual-qa.md)** — page-level manual verification checklist (play, recovery, access, layout)
- **[`guides/authoring-facts.md`](guides/authoring-facts.md)** — rules for adding, editing, retiring, and reviewing facts in `trivia-bank.js`
- **[`guides/deployment.md`](guides/deployment.md)** — local serving and GitHub Pages publication workflow

## Archives and provenance

- **[`provenance/`](provenance/)**: The fact-check ledgers and primary-source review registries behind all 23 packs in `trivia-bank.js` (335 places, 492 facts: 96 places / 194 facts in the first 12 packs and 239 places / 298 facts in the 11 Quiznauts packs).
  - `2026-10-30-quiznauts-fact-check.md` — full AI-assisted source, coordinate, and editorial review ledger for the 11 Quiznauts packs (239 places, 298 active facts; 1 place and 11 facts retired)
  - `2026-10-29-quiznauts-import.md` — the original 11-pack import snapshot (240 places, 309 facts) from Quiznauts, and the questions left behind
  - `2026-10-15-all-packs-fact-check.md` — full 320-case fact-check ledger and amendments
  - `2026-10-14-remaining-packs-review.md` — 144-case ledger for concept packs
  - `2026-10-14-parks-route66-review.md` — review of national parks and Route 66
  - `2026-10-13-nwa-content-audit.md` — Northwest Arkansas content audit
  - `2026-10-12-reviewed-exemplar.md` — original reviewed exemplar
  - `2026-10-12-review-reconciliation.md` — initial content reconciliation
  - `2026-10-21-map-metadata-audit.md` — geographic coordinates and bounds audit
- **[`archive/case-engine/`](archive/case-engine/)**: Links to source files in these documents point at files deleted in the pivot; read them at commit `4dddec7`. Specifications, design updates, QA matrices, and status reports for the retired case engine (which last existed in source at commit `4dddec7`).
- **[`archive/verification/`](archive/verification/)**: Historical test-run transcripts, GitNexus change analyses, and gate verifications from earlier milestones.
