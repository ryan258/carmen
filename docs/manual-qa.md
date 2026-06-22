# Manual QA — things a human must confirm

Automated tests (`npm test`) and `node --check` cover syntax, quiz-pack schema, content schema,
scoring, generic token fallback, and the no-CDN guard. The items below can't be verified by an agent — they need
a real browser, real input devices, or human judgement. Open `carmen-sandiego-bentonville.html`
(or serve it) and work top to bottom.

## A. Verify the post-review bug fixes

These confirm the two High-severity fixes landed correctly.

1. **Warrant is idempotent.** Play to the warrant screen, enter the correct city/hideout/disguise,
   and click **Submit** repeatedly/rapidly before the transition fires.
   - [ ] Score, warrant points, and streak increment exactly once.
   - [ ] Only one row is added to the case history / final report.
   - [ ] The Submit button is disabled immediately after the first correct submit, re-enabled at the next location.

2. **Keyboard can't bypass a locked answer.** On a puzzle, pick a **wrong** answer, then during the
   ~1s lockout *hold down* an answer key (A/B/C/D or 1–4).
   - [ ] No additional life is lost while buttons are disabled.
   - [ ] Repeat on the final-confrontation rounds (same behaviour expected).

## B. Accessibility (interactive)

Run the full checklist in [a11y-qa.md](a11y-qa.md) — keyboard-only run, axe-core console pass,
200% zoom, reduced motion, mobile width, screen-reader spot-check. Tick the ROADMAP
"Accessibility QA" boxes only after that's done.

## C. Map / geography (ROADMAP "Map Roadmap")

- [ ] Every marker sits on the correct stop for each selectable quiz pack — spot-check each
  `lat`/`lng` in the relevant `data/packs/*.json` file against the real place.
- [ ] Labels/pins don't overlap badly at mobile width.
- [ ] Kill the network (DevTools offline) and confirm the static map fallback shows instead of a blank panel.

## D. Cross-device / cross-browser (ROADMAP "Release Candidate Gate")

- [ ] Full run in Chrome, Firefox, and Safari — no console errors, no blank screens.
- [ ] Mobile, tablet, desktop layouts reviewed (no clipped text/buttons).
- [ ] Performance acceptable on a mid-range phone.

## E. Content accuracy (ROADMAP "Fact-Checking" — needs a human, not just tests)

- [ ] Each educational claim is true and inferable from its clues (tests only check that a source
  is *cited*, not that it's correct).
- [ ] Content reads as culturally respectful, not tourist-cliché.

## F. Fresh-player playtest (ROADMAP "Production Gate")

- [ ] A new player completes a full randomized run unaided.
- [ ] Difficulty (lives/attempts) feels right — tune from what you observe.

---

**Not done here (real feature work, not QA):** puzzle engines beyond multiple-choice, breadth to
50 cases, and full interface/evidence-art redesign. See ROADMAP §Gameplay Phase 2, Content
Phase 2, Visual Phase 2–3.

**Deliberately skipped (review Medium):** sanitizing `innerHTML` from `data/packs/*.json`. That
content is author-owned and static, so there's no untrusted-input boundary today. Add a sanitizer
only if that file ever accepts user-supplied content.
