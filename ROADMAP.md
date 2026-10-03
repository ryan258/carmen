# Remaining work

The October 3 remediation is fully implemented and verified offline via `npm run verify` (syntax checks, content contract validation, and 52/52 passing tests). [Current evidence](docs/remediation-status.md) is the authoritative status; [SPEC.md](SPEC.md) describes the implemented contract.

## Immediate next action

Try a short route with Ryan's preferred input method: Answer A–D, Clues, Hint, Continue, Pause/Resume, and Text route. Check that feedback remains readable and Cancel receives focus in the discard dialog. This is a short representative check, not a request to manually audit eighty cases. See [accessibility QA](docs/a11y-qa.md).

## Personal comfort and reliability

The map and records adapters are now separate. The controller still shares browser state with them; further dependency injection and view extraction are maintenance options if changes justify them. A framework migration is unnecessary for the current scope.

## Optional enhancements

- Improve weak distractors and explanation pacing based on actual play, rather than increasing the case count.
- Add native typed, reorder, coordinate, or logic-grid interactions only with equivalent low-effort text and keyboard paths. Those would be new engines.
- Add original art, new locations, or fully bundled offline assets if wanted.
- Review remaining factual claims against precise source passages before presenting them as verified educational material. Current venue details, hours, counts and access rules remain particularly changeable.
- If sharing publicly becomes a goal, expand browser/player coverage and editorial evidence for the intended audience. These are not prerequisites for personal use.

Refresh GitNexus after verification when wanted: `node .gitnexus/run.cjs analyze --index-only`.
