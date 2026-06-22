# Finish Plan — The 4 Real Items

Lazy bias: each item lists the *minimum* path that closes the gate, and what to skip.
Do them in this order. #4 can run in the background the whole time.

Order rationale: cheap-and-derisking first (1), cheap-and-leverages-existing next (2),
big lift (3), ongoing (4 in parallel).

---

## 1. Replace Tailwind CDN  ·  ✅ DONE (2026-06-20)

Built a local Tailwind v3 stylesheet and dropped the CDN. Rebuild with `npm run build:css`
(input `tailwind.input.css`, config `tailwind.config.js`, output `tailwind.build.css`).
Markup unchanged. Still worth a visual eyeball to confirm pixel-parity. See CHANGELOG.

---

## 2. Accessibility QA pass  ·  🟡 PARTIAL (2026-06-20)

Static audit done and the one real gap fixed (correct/wrong was color-only → now ✓/✗ glyphs).
Keyboard structure verified clean (all controls are real `<button>`s). Findings + the remaining
interactive checklist (axe-core, keyboard run, 200% zoom, reduced motion, mobile) live in
`docs/a11y-qa.md` — those five need a human at a browser and stay unchecked in the roadmap until run.

---

## 3. Puzzle engines  ·  multi-session  ·  biggest lift

**Problem:** every case is multiple-choice. Beta gate wants **4 real engines**; roadmap lists 8.

**Lazy path:** don't build 8. Build engines that each cover *multiple* listed mechanics, native-first.
1. **Typed-answer engine** — one component: input + validation + progressive feedback.
   Covers cipher, coordinate (text fallback), and compass (text route). That's 3 roadmap
   mechanics from one engine.
2. **Reorder engine** — native HTML list + up/down buttons (keyboard-accessible by default).
   Covers timeline. Drag/drop is a progressive enhancement, not required — skip the DnD lib.
3. **Final deduction engine** — reuses the typed-answer engine over run-collected clues.
4. Stop at the beta gate (4 mechanics covered) and mark the rest **deliberately cut** in the roadmap.

Add the new `mechanic` values to `content-validation.test.js` and write ~2 cases per new engine
so they actually appear in rotation.

**Skip:** logic-grid, pattern-route, visual-reconstruction engines until a playtest says they're
missed. Skip any drag/drop library — native buttons + keyboard cover the accessible case.

**Done when:** 4+ mechanics playable end-to-end, each with a text/keyboard path, validation tested, beta gate's "4 real puzzle engines" box checked.

---

## 4. Fact-check + reach 50 cases  ·  ongoing  ·  run in background

**Problem:** 40 cases, none verified line-by-line. RC gate wants 50 *fact-checked*.

**Lazy path:** verify before you expand — cheaper and higher-value than writing new cases first.
1. **Verify the 40 you have:** for each case, fill the `sources` array against the selected pack's `sources`,
   flip `needsRevision: false` only when a source backs the claim. Park anything shaky as
   `needsRevision: true` (already supported) — don't ship a guess.
2. **Then add 10** to hit 50, each born with a source. Pull from the optional-location pools
   already in the roadmap (Jujuy, Tucuman, Rosario, …).
3. Add a validation rule: shippable cases must have ≥1 source and `needsRevision: false`.

**Skip:** a CMS, an external fact-check service, citation tooling — the quiz pack's `sources`
field is the whole system. YAGNI on anything heavier until there are hundreds of cases.

**Done when:** all 50 cases have backing sources, validation enforces it, RC content box checked.

---

## Sequencing summary

| When | Item | Size | Gate it closes |
|------|------|------|----------------|
| ✅ done | 1. Tailwind CDN | small | "no external dep blanks the game" |
| 🟡 partial | 2. A11y QA | small | Accessibility baseline / Beta gate |
| Now | 3. Puzzle engines | large | "4 real engines" / Beta gate |
| Parallel | 4. Fact-check + 50 | ongoing | RC content gate |

Items 1–2 are the small wins; the large engine work (3) is next, with content (4) in parallel.
