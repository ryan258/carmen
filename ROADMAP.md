# Remaining work

The local catalogue now has 12 packs and 320 cases. Bentonville has 40 cases at version 4; Argentina has 40 cases at version 5; the two NWA packs and Museums & Missing Labels each have 24 at version 2; Arkansas State Parks, Route 66 and the other five concept packs each have 24 at version 1. All 320 cases carry recorded AI-assisted review evidence (0 pending). The [October 15 all-pack fact-check ledger](docs/all-packs-fact-check.md) completes the original-pack reviews, alongside the [144-case completion ledger](docs/remaining-packs-review.md), [parks/highway ledger](docs/parks-route66-review.md), [NWA ledger](docs/content-audit.md) and [original exemplar](docs/reviewed-exemplar.md).

The six remaining ideas are now implemented: Ozark Waterways, Arkansas Delta, American National Parks, Railroads & Depots, Architecture & Hidden Details, and Museums & Missing Labels. Their 144 cases use the existing engine and save contract. No automated or browser result is claimed for these additions. The [current evidence](docs/remediation-status.md) keeps the original two-pack test results separate; [SPEC.md](SPEC.md) describes the implementation.

## Immediate next action

Run the focused command in [the finish plan](docs/finish-plan.md), then try one short local route using the preferred input method. Confirm Hint, Case file, warrant selection and Pause/Resume, including reading effort. All ten additional packs are in local commits; pushing and publication remain separate actions. The last recorded [deployment](docs/deployment.md) predates all ten additions. Local changes and commits do not update the hosted preview.

## Learning-tool priorities

1. Use one of the reviewed activities to identify confusing wording or excessive reading effort. While claim-level AI-assisted review is recorded across all 320 cases, human feedback, educator evaluation and observed learning remain open across all packs.
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

The current Git review found no submodules, tracked gitlinks, nested Git checkouts or active commit hooks. Ryan authorized this full-change review, documentation reconciliation and logically grouped local commits. Pushing and publication remain separate actions. No tests or GitNexus analyze were run by the agent. Historical reviews remain in [the October 12 reconciliation](docs/review-reconciliation-2026-10-12.md).