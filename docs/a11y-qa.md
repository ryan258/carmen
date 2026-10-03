# Accessibility verification

The remediation adds associated warrant labels, tab/panel semantics, keyboard tab navigation, live answer/warrant feedback, explicit lives text, screen focus movement, modal containment/return, readable token labels, wrapped narrow-screen controls, surface-specific colors, and reduced-motion handling. They are implementation changes, **not verified WCAG conformance**.

## Short personal check

Use the input method you normally prefer on one short route. Confirm that Answer A–D, Clues, Hint, Continue, Submit warrant, Pause and Resume work with manageable effort; that solved feedback stays until Continue; that Text route remains selected after reload; and that Cancel initially receives focus in Discard Case. If one thing is awkward, report that specific obstacle. You do not need to manually audit every case.

The broader matrix below is optional coverage for later sharing. None of these browser/AT outcomes has been verified for the October 3 tree.

## Broader reference matrix

Record the tested revision, browser, viewport/zoom, input method, assistive technology/version, exact route/state, result, and unresolved issue.

- [ ] Keyboard-only: pack/stop/difficulty selection, each case tab, answer/hint controls, warrant fields, final report, records, and restart. All actions have a visible focus indicator; no trap except intentional modal containment.
- [ ] Tabs: Left/Right/Home/End navigate enabled tabs; selected state and associated panel are announced. Disabled warrant/final tabs cannot be reached through footer controls.
- [ ] Forms: location, hideout, and disguise labels are announced. A–D shortcuts do not consume typing or select navigation. Modified keys are ignored.
- [ ] Dialogs: focus enters, Tab/Shift+Tab wrap, Escape closes, background is inert, and focus returns to a visible control. Test a transition pending behind a dialog.
- [ ] Screen reader: full briefing, all visual evidence text, answer feedback, lives remaining, hint content, route state, token names, sources, and final-round failure explanation are understandable. Check at least VoiceOver/Safari and another supported browser/AT combination when feasible.
- [ ] Layout: 320px viewport and 200%/400% zoom; no clipped restart button, tab names, form controls, inventory, or source links. Allow content to wrap and scroll vertically.
- [ ] Contrast: measure actual composited foreground/background colors for score, accents, inactive/active tabs, disabled controls, focus indicators, option feedback, maps, and high-contrast mode. Do not infer contrast from a palette token alone.
- [ ] Motion: set the system preference before load and change it while playing; repeat with the in-app setting. Decorative effects disappear and essential feedback remains. No interval-based particles run.
- [ ] Automated accessibility scan: title, difficulty, all case panels, both dialogs, between screen, finale, and both result states. Evaluate findings; a clean scan is only one part of the evidence.

Node DOM-double tests do not exercise browser accessibility trees, layout, or actual speech. User testing remains necessary for comprehension and comfort.
