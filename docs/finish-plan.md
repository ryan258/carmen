# Finish the 12-pack catalog additions

The six remaining concepts are implemented at eight stops and three cases per stop: Ozark Waterways, Arkansas Delta, American National Parks, Railroads & Depots, Architecture & Hidden Details, and Museums & Missing Labels. Five packs start at content version 1, and Museums & Missing Labels uses content version 2 after replacing its Exploratorium entry case. Their [144-case ledger](remaining-packs-review.md) records source scope, answer/distractor reasoning and 48 companion transfer activities. The catalog has 320 cases: 248 AI-assisted reviewed and 72 original-pack cases pending. All ten additional packs are in local commits; pushing and publication remain separate actions. The last recorded deployment contains the original two packs.

## Next owner-run check

No automated result has been supplied for the 12-pack tree. Earlier original-pack results remain historical evidence. Run the existing focused command:

```sh
cd /Users/ryanjohnson/Projects/nonsense/carmen
npm run check:content && node --test tests/content-validation.test.js tests/run-generation.test.js tests/session-regressions.test.js
```

This covers structural manifest/content/fallback contracts, seeded case selection and 4/6/8-stop completion for every manifest pack. It does not establish source truth, browser behavior or human learning. No content/CSS build is needed for the six hand-authored text-only packs. The optional release gate remains expected to fail for the 72 pending original reviews.

## Short personal check

Preview locally:

```sh
cd /Users/ryanjohnson/Projects/nonsense/carmen
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ . Start with one of the new packs and a four-stop route using the preferred input method. Use Hint, solve a puzzle, issue its warrant, and pause/resume. Check reading effort and whether the evidence is sufficient. Try another pack when useful; a manual audit of every case is not required. Stop the server with Ctrl+C. [Accessibility QA](a11y-qa.md) provides the short input check; [manual QA](manual-qa.md) retains an optional broader matrix.

The six new IDs have independent version-1 save identities. Existing pack versions and save schema 5 remain unchanged. A run selects one case per stop; transfer prompts are untracked repository activities. Original-pack pools still include pending cases. Exact map pins, live access/conditions and human editorial/input/learning acceptance remain separate review limits. No tests or analyze were run by the agent. The current Git review confirmed no submodules or nested checkouts. Ryan authorized logically grouped local commits; pushing and publication remain separate actions.
