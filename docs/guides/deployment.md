# Deployment

## Run locally

Open `index.html` straight from disk; no server or network is needed. To serve it over HTTP instead:

```sh
python3 -m http.server 8001
```

The `carmen` entry in `.claude/launch.json` runs the same server for the Claude browser pane.

Progress belongs to the browser origin, so `file://`, `localhost:8001`, and the hosted site each keep separate progress. To move progress between them, use **Backup → Export progress**, then **Import progress** on the other one.

## Publish to GitHub Pages

Site: **https://ryan258.github.io/carmen/**. The source is set to **GitHub Actions**, and the workflow is [`.github/workflows/pages.yml`](../../.github/workflows/pages.yml).

- A push to `main` that changes `index.html`, `trivia.js`, `trivia-bank.js`, `trivia.css`, or the workflow publishes that revision. A push that changes only docs does not.
- To publish manually:

  ```sh
  gh workflow run pages.yml --repo ryan258/carmen --ref main
  ```

- The workflow copies those four files, adds `.nojekyll`, and writes `version.json` containing the commit. It installs nothing and runs no tests, so run `npm run verify` before you push.
- Only `main` can deploy. Action versions are pinned, and publications queue rather than cancel one another.

Publishing is Ryan's action. Agents do not push or start the workflow unless he explicitly asks for that.

## Recovery

1. Open the failed run under **Actions** and read the step that failed.
2. Confirm **Settings → Pages → Source** is **GitHub Actions**.
3. A failed deployment leaves the previous site live. For a regression, revert the change on `main` and push the fix.
4. Before blaming a revision, compare the site's `/version.json` with the commit of the successful run.

## Publication history

- **2026-10-12:** first publication. [Run 38314012679](https://github.com/ryan258/carmen/actions/runs/38314012679) deployed commit `af5c7b4`, the case engine with two packs.
- **No later deployment is recorded.** The trivia redesign (2026-10-28) has not been published. The archived [case-engine deployment notes](../archive/case-engine/deployment.md) cover the earlier setup in detail.
