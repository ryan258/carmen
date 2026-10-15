# Editorial rubric

All packs follow the same rules. Sources are embedded in each pack; there is no active legacy question bank or separate source registry.

A case is structurally usable when `npm run check:content` accepts it. It is editorially reviewed only when its factual claims, evidence, answer, explanation, and representation have been checked and the scope recorded. The [all-pack fact check](all-packs-fact-check.md) records AI-assisted review evidence for all 320 active cases; the [eight-case exemplar](reviewed-exemplar.md), [48-case NWA ledger](content-audit.md), [48-case parks/highway ledger](parks-route66-review.md) and [144-case completion ledger](remaining-packs-review.md) retain their earlier scoped evidence. That review does not establish human acceptance, measured learning, or the accuracy of shared map/location metadata.

- Distinguish fictional crimes, suspects, receipts, times, codes, and route diagrams from real geography and cultural claims.
- Make exactly one choice defensible from the evidence. At least two clues should help identify the hideout; disguise evidence must be explicit enough to complete the warrant.
- Keep direct answer leakage out of calling cards and decorative visuals. Directly named landmarks may be evidence in a recognition question, but should not masquerade as a complex deduction.
- Explain why the answer fits; do not rely on the key alone. Code/sequence/arithmetic puzzles need a derivation, and wrong options must conflict with stated evidence.
- Prefer stable, specific facts. Verify superlatives, historical attributions, dates, counts, hours, distances, Indigenous history, and changing venue details individually. A tourism homepage is not proof of every claim in its region.
- Preserve place names and distinguish a city stop from a regional hideout. Navigation exercises must be labeled fictional and must not present invented coordinates as visitor guidance.
- Ensure all evidence is available as text. Read the question without the illustration; it must remain answerable.
- Distinguish variants by the evidence or reasoning they require. Cosmetic rewordings do not add meaningful breadth.

Use the exact statuses `source-linked-needs-line-review` and `reviewed`. For reviewed cases, add `reviewEvidence.reviewer`, `date`, and claim-specific `notes`, and review the cited source records. See the schema for fields. Run `npm run check:release` only as the editorial gate; it is expected to fail while review evidence is absent.

Name the actual reviewer and identify AI-assisted work explicitly. Record the precise supporting page section, the claims it supports, excluded/uncertain claims, fictional records and any translation. Use scoped source records when a narrow review should not imply broader coverage. Give each distractor a recognizable reasoning error, not just an unrelated place name. Add a short transfer activity and expected reasoning to the companion guide; a correct game choice alone is insufficient evidence that the learner can apply the idea elsewhere.
