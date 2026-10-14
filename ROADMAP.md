# Remaining work

The local catalogue now has six packs and 176 cases. Bentonville and Argentina each have 40 cases at content version 4; Northwest Arkansas and NWA Mountain Biking each have 24 at version 2; Arkansas State Parks and Route 66 each have 24 at version 1. All 96 cases in the four additional packs and eight original exemplars have explicitly attributed AI-assisted editorial review; 72 original-pack cases remain pending. The [parks/highway ledger](docs/parks-route66-review.md), [NWA ledger](docs/content-audit.md) and [original exemplar](docs/reviewed-exemplar.md) record source scope and companion activities.

The October 13 source review covered the pack manifest, new data, tests, loader status wording, deployment packaging and documentation. It found and corrected a blanket pending-review message in the pack selector. No new automated or browser result is claimed. Ryan’s October 12 version 4 focused 40-test pass covers the original two-pack tree only. [Current evidence](docs/remediation-status.md) separates those results from the new work; [SPEC.md](SPEC.md) describes the implementation.

## Immediate next action

Run the focused command in [the finish plan](docs/finish-plan.md), then try one short local route in each new pack using the preferred input method. Confirm Hint, Answer A–D if enabled, Case file, warrant selection and Pause/Resume, including reading effort. The NWA, parks and Route 66 additions are locally committed and remain unpublished. The last recorded [GitHub Pages deployment](docs/deployment.md) predates all four. Local commits do not update the hosted preview.

## Learning-tool priorities

1. Use one of the reviewed activities to identify confusing wording or excessive reading effort. Continue claim-level review of the remaining 72 original cases as useful. Human feedback and observed learning remain open across all packs.
2. Add Study mode, single-case access, a resume summary and a local learning notebook with optional spaced review and export.
3. Extend the companion guides into reproducible in-game assignments using pack/version/route/seed, and verify a printable format. Transfer prompts and answer reasoning exist; an in-game case picker or assignment interface does not.
4. Use representative browser/input and zoom checks to guide further changes. Wider educator/autodidact pilots are optional if wanted; they are not prerequisites for personal use.

## Personal comfort and reliability

The map and records adapters are separate. The controller still shares browser state with them; further dependency injection and view extraction are maintenance options if changes justify them. A framework migration is unnecessary for the current scope.

The older `apply-henchmen.js` authoring helper still uses a fixed temporary filename. Migrate it to the shared unique atomic-write helper with interrupted-write coverage in an authoring-focused pass.

## Optional enhancements

- Improve distractors and explanation pacing based on actual play.
- Add typed, reorder, coordinate or logic-grid interactions only with equivalent low-effort text and keyboard paths. These would be new engines.
- Add original art, new locations or fully bundled offline assets if wanted.
- Audit shared map pins and broader venue metadata separately. Current trail conditions, access rules, hours and suitability are outside the case reviews.
- Expand browser/player coverage for any future broader audience without treating it as a requirement for personal use.

The current Git review found no submodules, tracked gitlinks, nested Git checkouts or active commit hooks. Ryan authorized this full-change review, documentation reconciliation and logically grouped local commits. Pushing and publication remain separate actions. No tests or GitNexus analyze were run by the agent. Historical runtime reviews and graph comparisons remain in [the October 12 reconciliation](docs/review-reconciliation-2026-10-12.md).
