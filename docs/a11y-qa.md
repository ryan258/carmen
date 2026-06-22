# Accessibility QA — 2026-06-20

Method: static audit of HTML/CSS/JS for the three unverified roadmap boxes, plus fixes.
Interactive testing (screen reader, real keyboard run, real device zoom) still needs a human —
an agent can't truly tab through or hear a screen reader. That checklist is at the bottom.

## Verified statically

- **Keyboard structure** — zero `onclick` on `div`/`span`/`li`/`a`; every interactive control is a
  real `<button>`, so it's focusable and Enter/Space-activatable for free. Focus rings present
  (`focus:ring-*` utilities). No drag-only interaction in current mechanics (all multiple-choice).
- **Color alone** — found a real WCAG 1.4.1 gap: correct/wrong answer buttons differed *only* by
  green/red. **Fixed** in `styles.css` with a `::after` glyph (✓ / ✗) so the state reads without color.
- **200% zoom** — the only fixed-`px` heights are decorative `.cutout-*` evidence art (no text);
  browser page-zoom scales px, so they don't clip text. Body text uses rem/Tailwind scale. No
  obvious reflow trap found, but confirm visually (see checklist).

## Fixed this pass

- `styles.css`: `.option-btn.correct::after { content:" ✓" }`, `.wrong::after { content:" ✗" }`.

## Still needs a human (run these once in a browser)

Open `carmen-sandiego-bentonville.html` and:

1. **Automated:** paste axe-core in the console, check for serious/critical violations:
   ```js
   var s=document.createElement('script');
   s.src='https://cdn.jsdelivr.net/npm/axe-core@4/axe.min.js';
   s.onload=()=>axe.run().then(r=>console.table(r.violations));
   document.body.appendChild(s);
   ```
2. **Keyboard only:** unplug the mouse, play one full case start→report. Every control reachable, visible focus, no trap.
3. **200% zoom:** Ctrl/Cmd-+ to 200% on title, case file, warrant, result, final report — no clipped or overlapping text.
4. **Reduced motion:** enable OS "reduce motion," confirm travel animation/particles calm down.
5. **Mobile width:** DevTools ~375px — labels don't overlap, targets ≥44px.

Tick the matching roadmap boxes after the run.
