# Finish the six-pack catalogue additions

Arkansas State Parks and Route 66 each contain eight stops and 24 cases at content version 1. Their [48-case review ledger](parks-route66-review.md) covers facts, clue/answer/hint chains, warrants and companion transfer activities. The NWA packs remain at version 2 with a separate [48-case ledger](content-audit.md). The catalogue has 176 cases: 104 AI-assisted reviewed and 72 original-pack cases pending. All four additional packs are locally committed and remain unpublished. The last recorded hosted deployment predates all four additional packs.

## Next owner-run check

No automated result has been supplied for this six-pack tree. Ryan’s prior syntax/content and 40/40 focused pass applies to the original two-pack version 4 tree; the [historical transcript](archive/verification-2026-10-12-exemplar-focused.txt) remains unchanged. Run the targeted command:

```sh
cd /Users/ryanjohnson/Projects/nonsense/carmen
npm run check:content && node --test tests/content-validation.test.js tests/run-generation.test.js tests/session-regressions.test.js
```

This covers manifest/pack/fallback contracts, seeded case selection and 4/6/8-stop session completion for every manifest pack. It does not establish source truth, layout, speech output or learning effectiveness. No content/CSS build is needed for these hand-authored text-only packs. The optional `check:release` remains expected to fail for the 72 pending original-case reviews.

## Short personal check

Use localhost to preview the additions:

```sh
cd /Users/ryanjohnson/Projects/nonsense/carmen
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ . Select each new pack and try a four-stop route with the preferred input method. Use a hint, solve a puzzle, choose its warrant and pause/resume. Confirm the text is manageable. Stop the server with Ctrl+C when finished. [Accessibility QA](a11y-qa.md) offers a short input check; [manual QA](manual-qa.md) retains an optional broader matrix.

Arkansas State Parks and Route 66 have new pack/save identities at content version 1. The NWA packs reject their old version-1 saves; Bentonville and Argentina remain at version 4. Save schema 5 is unchanged. Each run draws one variant per selected stop; the original packs still include pending cases. Companion activities are untracked and need no repeated restarts.

[Current status](remediation-status.md) records Ryan’s graph refresh and the bounded source review. Exact map-pin accuracy, current access conditions and human editorial/input/learning acceptance remain open. No tests or analyze were run by the agent. Ryan authorized the full-change review and local commit grouping. Pushing or publishing requires a separate instruction.
