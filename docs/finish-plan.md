# Finish the Northwest Arkansas pack additions

The two new packs each contain eight stops and 24 cases at content version 2. Their factual/editorial review is recorded in the [48-case ledger](content-audit.md). The source review also corrected the selector’s blanket pending-review warning. Changes are grouped into local commits; the new packs are not published.

## Next owner-run check

No automated verification has been run for this four-pack tree. Ryan’s prior syntax/content and 40/40 focused pass applies to the original two-pack version 4 tree; the [historical transcript](archive/verification-2026-10-12-exemplar-focused.txt) remains unchanged. Run the targeted command:

```sh
cd /Users/ryanjohnson/Projects/nonsense/carmen
npm run check:content && node --test tests/content-validation.test.js tests/run-generation.test.js tests/session-regressions.test.js
```

The command covers manifest/pack/fallback contracts, seeded case selection and 4/6/8-stop session completion for every manifest pack. It does not establish factual accuracy, layout, speech output or learning effectiveness. No content/CSS build is needed for these hand-authored text-only packs. The optional `check:release` remains expected to fail for the 72 pending original-case reviews.

## Short personal check

Use localhost for the new packs; the last recorded hosted deployment predates them:

```sh
cd /Users/ryanjohnson/Projects/nonsense/carmen
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ . Select each new pack and try a four-stop route with the preferred input method. Use a hint, solve a puzzle, choose its warrant and pause/resume. Confirm the text is manageable and that the pack selector no longer labels every case pending. Stop the server with Ctrl+C when finished. [Accessibility QA](a11y-qa.md) offers a short input check; [manual QA](manual-qa.md) retains an optional broader matrix.

The NWA packs reject their old content-version-1 saves after the warrant/evidence revisions. Bentonville and Argentina remain at content version 4; save schema 5 is unchanged. The normal game still draws from all variants in the selected pack. All NWA variants have AI-assisted review; the original packs include pending cases. Companion activities are untracked and do not require repeated game restarts.

[Current status](remediation-status.md) records the owner-run graph refresh and source review. The older [eight-case exemplar](reviewed-exemplar.md) and [October 12 reconciliation](review-reconciliation-2026-10-12.md) remain historical evidence. Shared map accuracy, current trail conditions and human editorial/input/learning acceptance remain open. Pushing or publishing requires a separate instruction.
