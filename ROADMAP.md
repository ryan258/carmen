# Remaining work

The October 12 runtime correction pass after `c12e772` passed Ryan's syntax/content checks and focused 50-test run at content version 3. The later [eight-case exemplar](docs/reviewed-exemplar.md) now has AI-assisted source/editorial review, worked reasoning and transfer activities, with 72 reviews still pending. Both packs are content version 4. Ryan completed the graph refresh and subsequently passed version 4 syntax/content checks and all 40 focused tests. [Current evidence](docs/remediation-status.md) preserves the distinct runs and remaining full-suite, browser/AT and human-learning boundaries. [SPEC.md](SPEC.md) describes the implementation; [review reconciliation](docs/review-reconciliation-2026-10-12.md) records findings and proposals.

## Immediate next action

Use one exemplar activity and a short game route with Ryan's preferred input method: Answer A–D, Case file, Hint, Continue, Pause/Resume, and Text route. The focused automated gate has passed; no repeat is needed for this status update. Check reading effort as well as correct answers. Actual focus, speech and rendering remain unverified; see [accessibility QA](docs/a11y-qa.md) and the local server command in [the finish plan](docs/finish-plan.md).

## Learning-tool priorities

1. Observe an educator and an autodidact using the eight-case exemplar. Refine reading load and distractors from their explanations, then extend claim-level review to the remaining 72 cases. AI-assisted review is complete only for the eight recorded cases; human learning evidence remains open.
2. Add Study mode, single-case access, a resume summary and a local learning notebook with optional spaced review and export.
3. Extend the companion guide's case-ID assignment recipe into reproducible in-game assignments using pack/version/route/seed, and verify a printable format. The guide already contains prompts, transfer answers and observation criteria; no in-game case picker or teacher dashboard exists.
4. Use representative browser/AT checks and small educator/autodidact pilots to guide expansion. Acceptance criteria and solution details are in the reconciliation.

## Personal comfort and reliability

The map and records adapters are now separate. The controller still shares browser state with them; further dependency injection and view extraction are maintenance options if changes justify them. A framework migration is unnecessary for the current scope.

The older `apply-henchmen.js` authoring helper still uses a fixed temporary filename. Migrate it to the shared unique atomic-write helper with interrupted-write coverage in an authoring-focused pass.

## Optional enhancements

- Improve weak distractors and explanation pacing based on actual play, rather than increasing the case count.
- Add native typed, reorder, coordinate, or logic-grid interactions only with equivalent low-effort text and keyboard paths. Those would be new engines.
- Add original art, new locations, or fully bundled offline assets if wanted.
- Review remaining factual claims against precise source passages before presenting them as verified educational material. Current venue details, hours, counts and access rules remain particularly changeable.
- If sharing publicly becomes a goal, expand browser/player coverage and editorial evidence for the intended audience. These are not prerequisites for personal use.

The review for local commits found no new blocking defect. Its existing index contained 860 nodes, 3,122 edges, 31 clusters and 73 flows; the initial complete tracked-diff report retained critical impact across 23 files, 71 symbols and 31 flows. The earlier 856-node owner report remains historical evidence. [Current status](docs/remediation-status.md#review-for-local-commits--october-12) records the source review, staging coverage and absence of submodules. Ryan authorized this one-time local commit grouping; pushing, publication and deployment remain outside scope. The agent ran no tests or analyze. The short personal browser/input check remains the next product step.
