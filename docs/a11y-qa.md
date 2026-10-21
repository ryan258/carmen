# Accessibility verification

The remediation adds associated warrant labels, tab/panel semantics, keyboard tab navigation, live answer/warrant feedback, explicit lives text, screen focus movement, modal containment/return, readable token labels, wrapped narrow-screen controls, surface-specific colors, and reduced-motion handling. They are implementation changes, **not verified WCAG conformance**.

## Short personal check

Use the input method you normally prefer on one short route. Confirm that Answer A–D, Case file, Hint, Continue, Submit warrant, Pause and Resume work with manageable effort, and that solved feedback stays until Continue. Answer shortcuts should start off; enable them only if useful and confirm the preference survives reload. Pause, start another case, and confirm Keep saved case initially receives focus and preserves progress. Text route should persist after reload; Cancel should initially receive focus in Discard Case. If one thing is awkward, report that specific obstacle. You do not need to manually audit every case.

For the new Mixed format, choose one card, Pause, and Resume; confirm the selection and card labels remain. Try Undo last and Clear work, read the current matching prompt or sequence position, and use Check work when complete. Correct feedback should wait for Continue. If useful, finish the route to try ordering visited stops and matching tokens with the inventory visible. Classic is selected before a new run; formats do not change mid-run. These are suggested checks, not verified outcomes.

The broader matrix below is optional coverage for later sharing. None of these browser/AT outcomes has been verified for the current 12-pack tree, including all ten additional packs. See [revision-specific evidence](remediation-status.md).

## October 21 follow-up controls

The expanded catalog adds grouping and comparison activities alongside ordering and matching. Use the action-specific prompt; keyboard and voice input should reach native controls without dragging. The compact warrant layout combines hideout and disguise into one native selection containing the same full cross-product of possibilities. **Warrant layout** switches back to separate fields; both layouts preserve answers and score rules.

Study / Notebook pauses the investigation and opens its current case. Try revealing an answer, saving it, and closing Study; the resume summary should explain where the investigation continues. An optional note is the only typing field. Notes save as entered; conflicts retain the draft, while backup restore requires an inspected file and explicit replacement. Export wanted progress before testing replacement.

Optional read-aloud lists only installed local voices and starts only on **Read case**. All spoken material remains written. Confirm **Stop reading**, closing Study, and changing cases stop the voice. If no local voice is available, the disabled action and explanation should be understandable. This speech path is authored, not verified in a real browser.

## Broader reference matrix

Record the tested revision, browser, viewport/zoom, input method, assistive technology/version, exact route/state, result, and unresolved issue.

- [ ] Keyboard-only: pack/stop/format/difficulty selection, each case tab, answer/hint controls, warrant fields, final report, records, and restart. All actions have a visible focus indicator; no trap except intentional modal containment.
- [ ] Tabs: Left/Right/Home/End navigate enabled tabs; selected state and associated panel are announced. Disabled warrant/final tabs cannot be reached through footer controls.
- [ ] Forms: location, hideout, and disguise labels are announced. A–D shortcuts do not consume typing or select navigation. Modified keys are ignored.
- [ ] Shortcut preference: with Answer shortcuts off, speech/text input does not trigger answers; with it on, intended A–D/1–4 activation works from the selected puzzle tab, answer buttons, and activity cards, while forms, links, and unrelated buttons remain protected. Verify both settings after reload.
- [ ] Activities: card labels and the current prompt are announced; chosen cards become unavailable; Undo/Clear return focus to usable work; Check work is enabled only when complete. Partial work and rejected arrangements survive resume. Repeating a rejected arrangement costs no additional life. Test two-, three-, and four-card layouts if broader coverage is wanted.
- [ ] Dialogs: focus enters, Tab/Shift+Tab wrap, Escape closes, background is inert, and focus returns to a visible control. Test a transition pending behind a dialog.
- [ ] Study: focus containment includes selects, textarea, file input, and the speech disclosure summary; controls inside hidden panels or closed disclosures are excluded. Native choices, Reveal, Save, Again/Got it, and Close work without typing.
- [ ] Notebook: failed or conflicting writes are reported near the controls. An unsaved draft survives selecting another case and reopening Study; export includes it. Replacement confirms the data named by the button and detects newer storage changes.
- [ ] Read-aloud: no autoplay; only a local voice appears; Stop and modal cleanup cancel speech. Text remains sufficient if speech cannot start.
- [ ] Warrant layouts: compact and separate controls expose the same options and persistent selections; a wrong pair still costs one life; hidden fields do not enter the focus order.
- [ ] New case: Keep saved case is initially focused; Escape preserves the save; Replace saved case starts the selected difficulty. A storage change while the dialog is open invalidates it.
- [ ] Retry map: focus remains in the route/map region after Retry map hides; library readiness does not switch a deliberately selected text route or move focus unexpectedly.
- [ ] Screen reader: full briefing, all visual evidence text, answer feedback, lives remaining, hint content, route state, token names, sources, and final-round failure explanation are understandable. Check at least VoiceOver/Safari and another supported browser/AT combination when feasible.
- [ ] Layout: 320px viewport and 200%/400% zoom; no clipped restart button, tab names, form controls, inventory, or source links. Allow content to wrap and scroll vertically.
- [ ] Contrast: measure actual composited foreground/background colors for score, accents, inactive/active tabs, disabled controls, focus indicators, option feedback, maps, and high-contrast mode. Do not infer contrast from a palette token alone.
- [ ] Motion: set the system preference before load and change it while playing; repeat with the in-app setting. Decorative effects disappear and essential feedback remains. No interval-based particles run.
- [ ] Automated accessibility scan: title, difficulty, all case panels, every dialog including Study and restore preview, between screen, finale, and both result states. Evaluate findings; a clean scan is only one part of the evidence.

Node DOM-double tests do not exercise browser accessibility trees, layout, or actual speech. User testing remains necessary for comprehension and comfort.
