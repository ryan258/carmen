# Accessibility verification

The remediation adds associated warrant labels, tab/panel semantics, keyboard tab navigation, live answer/warrant feedback, explicit lives text, screen focus movement, modal containment/return, readable token labels, wrapped narrow-screen controls, surface-specific colors, and reduced-motion handling. They are implementation changes, **not verified WCAG conformance**.

## Short personal check

Use the input method you normally prefer on one short route. Confirm that Answer A–D, Case file, Hint, Continue, Submit warrant, Pause and Resume work with manageable effort, and that solved feedback stays until Continue. Answer shortcuts should start off; enable them only if useful and confirm the preference survives reload. Pause, start another case, and confirm Keep saved case initially receives focus and preserves progress. Text route should persist after reload; Cancel should initially receive focus in Discard Case. If one thing is awkward, report that specific obstacle. You do not need to manually audit every case.

The broader matrix below is optional coverage for later sharing. None of these browser/AT outcomes has been verified for the current October 12 correction pass. See [revision-specific evidence](remediation-status.md).

## Broader reference matrix

Record the tested revision, browser, viewport/zoom, input method, assistive technology/version, exact route/state, result, and unresolved issue.

- [ ] Keyboard-only: pack/stop/difficulty selection, each case tab, answer/hint controls, warrant fields, final report, records, and restart. All actions have a visible focus indicator; no trap except intentional modal containment.
- [ ] Tabs: Left/Right/Home/End navigate enabled tabs; selected state and associated panel are announced. Disabled warrant/final tabs cannot be reached through footer controls.
- [ ] Forms: location, hideout, and disguise labels are announced. A–D shortcuts do not consume typing or select navigation. Modified keys are ignored.
- [ ] Shortcut preference: with Answer shortcuts off, speech/text input does not trigger answers; with it on, intended A–D/1–4 activation works outside form controls. Verify both settings after reload.
- [ ] Dialogs: focus enters, Tab/Shift+Tab wrap, Escape closes, background is inert, and focus returns to a visible control. Test a transition pending behind a dialog.
- [ ] New case: Keep saved case is initially focused; Escape preserves the save; Replace saved case starts the selected difficulty. A storage change while the dialog is open invalidates it.
- [ ] Retry map: focus remains in the route/map region after Retry map hides; library readiness does not switch a deliberately selected text route or move focus unexpectedly.
- [ ] Screen reader: full briefing, all visual evidence text, answer feedback, lives remaining, hint content, route state, token names, sources, and final-round failure explanation are understandable. Check at least VoiceOver/Safari and another supported browser/AT combination when feasible.
- [ ] Layout: 320px viewport and 200%/400% zoom; no clipped restart button, tab names, form controls, inventory, or source links. Allow content to wrap and scroll vertically.
- [ ] Contrast: measure actual composited foreground/background colors for score, accents, inactive/active tabs, disabled controls, focus indicators, option feedback, maps, and high-contrast mode. Do not infer contrast from a palette token alone.
- [ ] Motion: set the system preference before load and change it while playing; repeat with the in-app setting. Decorative effects disappear and essential feedback remains. No interval-based particles run.
- [ ] Automated accessibility scan: title, difficulty, all case panels, both dialogs, between screen, finale, and both result states. Evaluate findings; a clean scan is only one part of the evidence.

Node DOM-double tests do not exercise browser accessibility trees, layout, or actual speech. User testing remains necessary for comprehension and comfort.
