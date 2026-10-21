# GitHub Pages preview

Site address: **https://ryan258.github.io/carmen/**

Ryan requested GitHub Pages hosting on October 12, 2026. The repository uses the official GitHub Actions Pages artifact workflow in [pages.yml](../.github/workflows/pages.yml), with **GitHub Actions** selected as the Pages publishing source. No generated `gh-pages` branch is needed. See [GitHub's custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## First publication — October 12, 2026

[Deployment run 38314012679](https://github.com/ryan258/carmen/actions/runs/38314012679) completed successfully for commit `af5c7b41c17e8f0f51b5ef8ed01104bc1891c1eb`. Pages is public with HTTPS enforced. Post-deployment HTTP inspection returned 200 for the site root, all 14 packaged application files and `version.json`; each application file matched its local source bytes, and the version endpoint identified that deployment commit. This records file delivery only, not a browser playthrough or a new test-suite pass.

Later documentation-only commits do not change the deployed game revision. No tests or GitNexus analyze were run during this hosting task.

## Publishing and updates

Pushing a change to the listed game assets or workflow on `main` publishes the checked-in revision. Documentation-only changes do not trigger deployment. The workflow can also be started from **Actions → Deploy GitHub Pages → Run workflow**, using `main`. The [Actions history](https://github.com/ryan258/carmen/actions/workflows/pages.yml) records each deployment and its revision.

The current packaging definition contains the entry page, game HTML, sixteen runtime JavaScript files, two stylesheets, the pack manifest and pack JSON files. `.nojekyll` preserves static delivery; `version.json` records the deployed commit. Source-only authoring scripts, tests, dependency files, agent instructions and documentation archives are excluded from the site artifact. The source repository remains public.

The workflow does not install npm packages, rebuild content/CSS, run tests or run GitNexus analyze. Regenerate and review assets as described in [the authoring guide](new-location.md) before publishing changes to their sources. Commit generated assets with those source changes only when committing is explicitly authorized. Keep the copy list and push paths aligned when adding runtime files. The October 21 local changes add `quiz-activities.js`, `game-activities.js`, `quiz-practice.js`, `study-core.js`, `game-study.js`, `game-session.js`, `game-warrant.js`, `case-design.js`, and `game-experience.js` to page loading and packaging; no deployment was performed.

Only `main` can deploy through this workflow. The job has repository read, Pages write and deployment identity permissions; action revisions are pinned. Concurrent publications are queued rather than interrupting an active deployment. No custom domain or external service credentials are required.

## Recovery

If publication fails, open the failed run in Actions and inspect its failed step. Confirm **Settings → Pages → Source: GitHub Actions**. A failed later deployment normally leaves the previously published site available. Retry the failed run after addressing its cause, or publish the current `main` revision with:

```sh
gh workflow run pages.yml --repo ryan258/carmen --ref main
```

For a content or runtime regression, revert the affected change on `main` and publish the corrected assets through the same workflow. Compare the site's `version.json` with the successful Actions run before attributing observed behavior to a revision. Avoid force-pushing deployment history.

## Preview boundaries

All ten additional packs (NWA, parks, Route 66 and the six concept packs) are in local commits; pushing and publication remain separate actions. The last recorded deployment above contains the original two packs; no publication or deployment verification is part of the six-concept authoring. Use localhost for the current 12-pack catalog.

Hosting does not change content or verification status. In the current workspace, Argentina is version 6, Bentonville is version 5, and Northwest Arkansas is version 3. Route 66, Ozark Waterways, Railroads & Depots, NWA Mountain Biking, and Museums & Missing Labels use version 2; the other four packs use version 1. All 320 cases retain scoped AI-assisted review evidence. The October 17 wording amendments and verification limits are recorded in the all-pack ledger; older saves for its six changed packs are incompatible. The [all-pack ledger](all-packs-fact-check.md) records the full 320-case scope. The normal game draws from all variants in the chosen pack. The [original exemplar](reviewed-exemplar.md), [NWA](content-audit.md), [parks/highway](parks-route66-review.md) and [six-concept](remaining-packs-review.md) ledgers are repository companions, not game-site pages.

Leaflet and map tiles still use network providers, with Text route/Retry map as documented. Saves and settings belong to the browser origin: localhost progress does not automatically transfer to `https://ryan258.github.io`. GitHub project sites under that same origin share browser storage; this game retains its existing Carmen storage keys.

A successful Pages deployment and successful HTTP responses establish publication and file availability. They do not establish browser layout, keyboard/voice accessibility, map-provider behavior or learning effectiveness. The [short personal input check](a11y-qa.md) remains useful on the hosted address. Prior test and graph evidence is preserved in [remediation status](remediation-status.md).

## Optional local offline file — October 21 follow-up

`scripts/build-offline.cjs`, exposed as `npm run build:offline`, packages local styles, all sixteen runtime modules, the manifest, and all twelve packs into `dist/carmen-offline.html`. It removes optional Leaflet network assets and uses the text route. Source links remain optional external links; they are not embedded factual archives. This is a self-contained local file, not a service worker or installation flow. The portable artifact was rebuilt and verified alongside `npm run verify:design`. Offline browser use and local-file persistence remain personal checks.

To regenerate it after later runtime or content changes:

```sh
npm run build:offline
```

Opening the resulting file does not publish it. Local-file browser storage support varies; the game reports session-only fallback when storage is unavailable. Export a notebook/save backup before closing if persistence is unavailable. Moving between an offline file, localhost, and a hosted origin requires explicit compatible [backup transfer](study-and-backup.md).

## Current save compatibility — October 21 follow-up

New saves use schema 8 and catalog 3, retaining route/progress state and adding assistance, paid-hint accounting, reasoning preference, episode identity and clue marks. Valid matching-content schemas 5–7 retain their original catalog, route and warrant rules, then upgrade on write without changing selected cases or partial work. Older builds reject schema 8. Exact pack/content mismatches remain incompatible. No pack versions or generated content assets changed in this follow-up. All current scripts, core/controller/page, and styles must ship together if publication is later authorized. Backup restore validates the selected trusted pack and any episode identity before replacing an investigation. No browser, deployment, or offline-file acceptance is asserted.

## Earlier activity-change checkpoint — October 21

The local Mixed/Classic activity update writes schema-6 saves, while valid matching-content schema-5 saves resume as Classic and upgrade on their next write. Older game builds reject schema-6 saves, so switching back to an older published build is not a save downgrade path. Quiz format is part of comparable scoreboards. No pack versions or generated content assets changed. The new scripts, updated core/controller/page, and styles must ship together if publication is later authorized. No live deployment state, browser behavior, or schema migration was verified remotely in this review.
