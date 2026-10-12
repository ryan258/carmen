# Finish the October 12 exemplar pass

The eight-case AI-assisted source/editorial exemplar is authored and its Bentonville outputs regenerated. **Ryan passed the version 4 syntax/content checks and all 40 focused tests, then completed the post-commit graph refresh at `84ae82d`. The next action is a short personal browser/input check.** The [exemplar guide](reviewed-exemplar.md) provides direct access to the eight activities.

The [focused test transcript](archive/verification-2026-10-12-exemplar-focused.txt) records Node v26.7.0, accepted structural/fallback contracts for 80 cases, 72 pending editorial reviews and 40 passing tests with no failures, cancellations, skips or todos. The two deliberate `No network in harness` diagnostics accompanied passing fallback scenarios. The [later graph transcript](archive/verification-2026-10-12-post-commit-gitnexus.txt) records successful indexing and comparison, with no new test run. No code repair or repeat automated run is required merely to record these results.

1. **Focused gate passed:** authoring 6/6, content validation 4/4, core contracts 6/6, run generation 4/4 and session regressions 20/20. This is a focused result, not a current full-suite pass. The earlier 50/50 passing result covers the preceding version 3 runtime correction tree, including all 12 correction regressions. The version 4 run did not include `first-correction-pass.test.js`, `smoke.test.js` or `scoring.test.js`; do not combine these overlapping run totals.
2. **Source and graph review recorded:** the final source review found no new blocking defect. Ryan's subsequent index at `84ae82d` has 861 nodes, 3,124 edges, 31 clusters and 73 flows, with all 53 covered files matching before this follow-up's docs edits. The complete comparison against `c12e772` reports 31 files, 109 symbols and 31 affected flows at critical impact, with no report-level error, partial or truncation flag. The earlier pre-commit reports remain historical evidence. Symbol entries resolve for 20 of the 31 files; the full file count does not establish complete graph coverage. No analyze was run by the agent.
3. **Content scope recorded:** four cases per pack have primary-source passage records, useful distractors and worked reasoning; 72 still await review. Transfer questions and observation guidance are in the companion guide. Both packs use content version 4, so version 3 saves cannot resume; save schema 5 is unchanged.
4. **Next personal check:** try one activity and the short input check in [accessibility QA](a11y-qa.md): saved-case replacement, Answer shortcuts, Case file, and Text route/Retry map. Assess reading effort as well as correctness. Actual focus, speech, rendering and comfort remain unverified by the DOM harness.

The completed focused command is retained in [remediation status](remediation-status.md) for reproducibility. `check:release` should continue to fail for the 72 pending reviews; it was not part of the passing command. No content or CSS rebuild is required for this documentation-only follow-up. A current full-suite result remains unrecorded; no broader automated run is needed just for these docs.

To start the manual check:

```sh
cd /Users/ryanjohnson/Projects/nonsense/carmen &&
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ and use one four-stop route with the preferred input method. Open the companion guide separately for an exact reviewed activity; the game still selects from all case variants. Record specific obstacles rather than auditing all 80 cases. Stop the server with Ctrl+C when finished. Exact evidence, archived reports and future graph-refresh commands are in [remediation status](remediation-status.md). No repeat graph refresh is needed just to archive its results. Ryan separately authorized the local documentation/evidence commit after the earlier three-commit grouping; pushing, publishing and deployment remain outside scope.

[Review reconciliation](review-reconciliation-2026-10-12.md) records preserved `c12e772` changes, corrected findings, and deferred learning/content/architecture proposals. Eight case reviews are recorded as AI-assisted; 72 remain pending. Human editorial/learner acceptance and the full map/venue review remain open; the game remains a personal local preview.
