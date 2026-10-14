# GitHub Pages preview

Site address: **https://ryan258.github.io/carmen/**

Ryan requested GitHub Pages hosting on October 12, 2026. The repository uses the official GitHub Actions Pages artifact workflow in [pages.yml](../.github/workflows/pages.yml), with **GitHub Actions** selected as the Pages publishing source. No generated `gh-pages` branch is needed. See [GitHub's custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## First publication — October 12, 2026

[Deployment run 38314012679](https://github.com/ryan258/carmen/actions/runs/38314012679) completed successfully for commit `af5c7b41c17e8f0f51b5ef8ed01104bc1891c1eb`. Pages is public with HTTPS enforced. Post-deployment HTTP inspection returned 200 for the site root, all 14 packaged application files and `version.json`; each application file matched its local source bytes, and the version endpoint identified that deployment commit. This records file delivery only, not a browser playthrough or a new test-suite pass.

Later documentation-only commits do not change the deployed game revision. No tests or GitNexus analyze were run during this hosting task.

## Publishing and updates

Pushing a change to the listed game assets or workflow on `main` publishes the checked-in revision. Documentation-only changes do not trigger deployment. The workflow can also be started from **Actions → Deploy GitHub Pages → Run workflow**, using `main`. The [Actions history](https://github.com/ryan258/carmen/actions/workflows/pages.yml) records each deployment and its revision.

The artifact contains the entry page, game HTML, seven runtime JavaScript files, two stylesheets, the pack manifest and pack JSON files. `.nojekyll` preserves static delivery; `version.json` records the deployed commit. Source-only authoring scripts, tests, dependency files, agent instructions and documentation archives are excluded from the site artifact. The source repository remains public.

The workflow does not install npm packages, rebuild content/CSS, run tests or run GitNexus analyze. Regenerate and review assets as described in [the authoring guide](new-location.md) before publishing changes to their sources. Commit generated assets with those source changes. Keep the copy list and push paths in the workflow aligned when adding runtime files.

Only `main` can deploy through this workflow. The job has repository read, Pages write and deployment identity permissions; action revisions are pinned. Concurrent publications are queued rather than interrupting an active deployment. No custom domain or external service credentials are required.

## Recovery

If publication fails, open the failed run in Actions and inspect its failed step. Confirm **Settings → Pages → Source: GitHub Actions**. A failed later deployment normally leaves the previously published site available. Retry the failed run after addressing its cause, or publish the current `main` revision with:

```sh
gh workflow run pages.yml --repo ryan258/carmen --ref main
```

For a content or runtime regression, revert the affected change on `main` and publish the corrected assets through the same workflow. Compare the site's `version.json` with the successful Actions run before attributing observed behavior to a revision. Avoid force-pushing deployment history.

## Preview boundaries

The October 13 NWA and October 14 parks/Route 66 additions are local commits and remain unpublished. The last recorded deployment above contains the original two packs. No deployment of the current six-pack tree has been verified. Use localhost to preview the additions.

Hosting does not change content or verification status: Bentonville and Argentina are content version 4 (eight reviewed cases, 72 pending); the two NWA packs are version 2 (48 AI-assisted reviewed); Arkansas State Parks and Route 66 are version 1 (48 AI-assisted reviewed). The normal game still uses all variants within the chosen pack. The [original exemplar](reviewed-exemplar.md), [NWA ledger](content-audit.md) and [parks/highway ledger](parks-route66-review.md) are repository companion documents, not game-site pages.

Leaflet and map tiles still use network providers, with Text route/Retry map as documented. Saves and settings belong to the browser origin: localhost progress does not automatically transfer to `https://ryan258.github.io`. GitHub project sites under that same origin share browser storage; this game retains its existing Carmen storage keys.

A successful Pages deployment and successful HTTP responses establish publication and file availability. They do not establish browser layout, keyboard/voice accessibility, map-provider behavior or learning effectiveness. The [short personal input check](a11y-qa.md) remains useful on the hosted address. Prior test and graph evidence is preserved in [remediation status](remediation-status.md).
