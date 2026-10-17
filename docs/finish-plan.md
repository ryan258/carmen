# Finish the 12-pack catalog additions

The six remaining concepts are implemented at eight stops and three cases per stop: Ozark Waterways, Arkansas Delta, American National Parks, Railroads & Depots, Architecture & Hidden Details, and Museums & Missing Labels. Ozark Waterways, Railroads & Depots and Museums & Missing Labels now use content version 2; the other three concept packs remain at version 1. Their [144-case ledger](remaining-packs-review.md) records source scope, answer/distractor reasoning and 48 companion transfer activities. The catalog has 320 cases; the [all-pack fact check](all-packs-fact-check.md) records AI-assisted source/editorial evidence for all 320, including the 72 original-pack cases completed on October 15. All ten additional packs are in local commits; pushing and publication remain separate actions. The last recorded deployment contains the original two packs.

## Next owner-run check

No automated result has been supplied for the 12-pack tree. Earlier original-pack results remain historical evidence. Run the existing focused command:

```sh
cd /Users/ryanjohnson/Projects/nonsense/carmen
npm run check:content && node --test tests/authoring.test.js tests/content-validation.test.js tests/run-generation.test.js tests/session-regressions.test.js
```

This covers authoring/review preservation, structural manifest/content/fallback contracts, seeded case selection and 4/6/8-stop completion for every manifest pack. It does not establish source truth, browser behavior or human learning. No content/CSS build is needed for the six hand-authored text-only packs. The all-pack review metadata has been added. No tests, `check:content`, or release gate were run for this fact-check change; `npm run build:content` synchronized Bentonville's generated pack/fallback and ran its authoring `validatePack` check. The release-gate result remains unknown for the current tree.

## Short personal check

Preview locally:

```sh
cd /Users/ryanjohnson/Projects/nonsense/carmen
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ . Start with one of the new packs and a four-stop route using the preferred input method. Use Hint, solve a puzzle, issue its warrant, and pause/resume. Check reading effort and whether the evidence is sufficient. Try another pack when useful; a manual audit of every case is not required. Stop the server with Ctrl+C. [Accessibility QA](a11y-qa.md) provides the short input check; [manual QA](manual-qa.md) retains an optional broader matrix.

The six concept IDs have independent save identities. The October 17 amendment sets Bentonville to version 5, Argentina to 6, Northwest Arkansas to 3, and Route 66, Ozark Waterways and Railroads & Depots to 2. Older saves for those six edited packs are incompatible; the other packs keep their current versions. Save schema 5 is unchanged. A run selects one case per stop; transfer prompts are untracked repository activities. No original-pack cases remain pending review in the active data. Exact map pins, live access/conditions and human editorial/input/learning acceptance remain separate review limits. No tests or GitNexus analyze were run for this fact-check. Bentonville's review evidence is now part of the generator inputs, as recorded in the all-pack ledger; the generated pack and built-in fallback were synchronized.
