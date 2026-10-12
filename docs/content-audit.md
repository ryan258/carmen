# Content audit state — October 12, 2026

Both packs contain 40 cases, 80 total, now at content version 4. **Eight cases have AI-assisted source/editorial review; 72 remain `source-linked-needs-line-review`.** The [reviewed exemplar](reviewed-exemplar.md) gives exact IDs, source-passage locators, reviewed claims, excluded claims, worked reasoning and transfer questions. Every review names Codex as the AI-assisted reviewer and records October 12, 2026. This is not a human sign-off or a complete audit of the shared map and location metadata.

Four cases per pack were rewritten. Each selected case uses a scoped `exemplar_*` source record; the older source records retain their original flags. One reviewed source does not promote all the cases in a region. The regular game still draws from the full pools, including pending cases; use the companion guide for the exact eight-case sequence.

The UI shows explanations after correct answers. Source links appear in successful case-history review and failure evidence review; `c12e772` removed them from between-stop capture reports. Transfer questions currently live in the companion guide.

Content generation completed for Bentonville and its fallback. Ryan subsequently passed version 4 syntax/content checks and 40/40 focused tests under Node v26.7.0; `check:content` accepted structural contracts and fallback and reported 80 cases with 72 pending reviews. The agent ran no tests or separate syntax/content checks. [Remediation status](remediation-status.md) preserves the transcript, exact coverage and version-specific evidence. This confirms automated contracts, not factual truth or human approval; `check:release` should still fail for the 72 pending reviews.

## Earlier October 3 corrections (historical)

- Removed Bentonville hideout answers from generated calling cards/visual detail. The disguise is now supported by an explicit clue, rather than exposed only in the opening report.
- Replaced nominal engine diversity with the truthful current multiple-choice contract.
- Replaced fixed final-report trivia with the selected first/middle cases and last earned token. The report reuses the same evidence, correct indexes and explanations as the selected cases.
- Corrected the Salta rail exercise: San Antonio de los Cobres → La Polvorilla → return; fictional times are distinguished from real schedules. Added the official route source.
- Removed remaining Mendoza coordinates and the unrelated oldest-wine narrative, the false Ushuaia “only city below 54° south” claim, Bariloche's oversimplified founding attribution, and unstable university/bookstore rankings.
- Recast the Iguazú numeric trail as a fictional code, removed the invented sacred-object framing, and made the missing classic visuals answerable through explicit text.
- Replaced the El Calafate puzzle's dependency on an unearned token with glacier evidence. Added pack-owned token metadata and readable names.
- Gave repeated Argentina sites different chronology, elapsed-time, sequence, passenger-count, and exhibit-order questions.

## Evidence still needed

For each of the remaining 72 cases, record claims and supporting primary-source passages, confirm the answer and explanation, and review cultural framing. Inspect the shared map coordinates and location metadata separately; the exemplar did not certify these. Review time-sensitive details in Bentonville especially carefully: venue hours, campus access, named rooms, collections, site counts, and public facilities may change. Human source/editorial feedback and educator/autodidact observation remain open for all eight exemplars.

The structural checker runs the production validator. The release checker additionally requires `reviewStatus: reviewed`, `reviewEvidence` with reviewer/date/notes, and reviewed cited sources. Neither checker fetches or evaluates source content, so a passing structural result is not an editorial conclusion.

Primary sources used to correct identified problems include the [official train route](https://www.larutanatural.gob.ar/es/imperdible/85/tren-a-las-nubes), [official Bariloche tourism](https://barilocheturismo.gob.ar/es/sobre-bariloche), and [Chile's official Puerto Williams description](https://chile.travel/en/attractions/puerto-williams/) as a counterexample to the former Ushuaia exclusivity claim. These corrections do not validate unrelated claims in the same cases.

## October 3 authoring improvements

All 80 cases now include three reasoning hints. Equivalent Glaciarium and Lago Argentino hideouts share canonical labels. Argentina separates Carmen from each local suspect, labels fictional props and puzzle logs explicitly, and supplies worked arithmetic/cipher/grid explanations. Bentonville recognition questions no longer claim to be ciphers or counts when no such operation occurs. The campus map desk is explicitly fictional, not a claimed real kiosk.

The generator preserves authored review evidence and validates before atomically replacing output. The content checker rejects malformed/empty manifests and a stale built-in fallback. No review flags were promoted in the October 3 work; the eight explicitly documented October 12 reviews are the later exception. Complete catalog review remains pending. That limitation does not prevent personal preview use.
