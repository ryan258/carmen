# GitHub Pages preview

Site address: **https://ryan258.github.io/carmen/**

Ryan requested GitHub Pages hosting on October 12, 2026. The repository uses the official GitHub Actions Pages artifact workflow in [pages.yml](../.github/workflows/pages.yml), with **GitHub Actions** selected as the Pages publishing source. No generated `gh-pages` branch is needed. See [GitHub's custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

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

Hosting does not change the content or verification status: both packs are content version 4, eight cases have AI-assisted source/editorial review, and 72 remain pending. The normal game still uses all case variants. Read the [reviewed exemplar guide](reviewed-exemplar.md) in the repository for the exact eight activities; the Markdown guide is not part of the game site.

Leaflet and map tiles still use network providers, with Text route/Retry map as documented. Saves and settings belong to the browser origin: localhost progress does not automatically transfer to `https://ryan258.github.io`. GitHub project sites under that same origin share browser storage; this game retains its existing Carmen storage keys.

A successful Pages deployment and successful HTTP responses establish publication and file availability. They do not establish browser layout, keyboard/voice accessibility, map-provider behavior or learning effectiveness. The [short personal input check](a11y-qa.md) remains useful on the hosted address. Prior test and graph evidence is preserved in [remediation status](remediation-status.md).
