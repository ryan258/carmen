# Finish the 12-pack catalog additions

The six remaining concepts are implemented at eight stops and three cases per stop: Ozark Waterways, Arkansas Delta, American National Parks, Railroads & Depots, Architecture & Hidden Details, and Museums & Missing Labels. Five packs start at content version 1, and Museums & Missing Labels uses content version 2 after replacing its Exploratorium entry case. Their [144-case ledger](remaining-packs-review.md) records source scope, answer/distractor reasoning and 48 companion transfer activities. The catalog has 320 cases; the [all-pack fact check](all-packs-fact-check.md) records AI-assisted source/editorial evidence for all 320, including the 72 original-pack cases completed on October 15. All ten additional packs are in local commits; pushing and publication remain separate actions. The last recorded deployment contains the original two packs.

## Next owner-run check

No automated result has been supplied for the 12-pack tree. Earlier original-pack results remain historical evidence. Run the existing focused command:

```sh
cd /Users/ryanjohnson/Projects/nonsense/carmen
npm run check:content && node --test tests/content-validation.test.js tests/run-generation.test.js tests/session-regressions.test.js
```

This covers structural manifest/content/fallback contracts, seeded case selection and 4/6/8-stop completion for every manifest pack. It does not establish source truth, browser behavior or human learning. No content/CSS build is needed for the six hand-authored text-only packs. The all-pack review metadata has been added. No tests, `check:content`, or release gate were run for this fact-check change; `npm run build:content` synchronized Bentonville's generated pack/fallback and ran its authoring `validatePack` check. The release-gate result remains unknown for the current tree.

## Short personal check

Preview locally:

```sh
cd /Users/ryanjohnson/Projects/nonsense/carmen
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ . Start with one of the new packs and a four-stop route using the preferred input method. Use Hint, solve a puzzle, issue its warrant, and pause/resume. Check reading effort and whether the evidence is sufficient. Try another pack when useful; a manual audit of every case is not required. Stop the server with Ctrl+C. [Accessibility QA](a11y-qa.md) provides the short input check; [manual QA](manual-qa.md) retains an optional broader matrix.

The six new IDs have independent version-1 save identities. The fact-check corrections advance Argentina from version 4 to version 5; Bentonville remains version 4. Save schema 5 is unchanged. A run selects one case per stop; transfer prompts are untracked repository activities. No original-pack cases remain pending review in the active data. Exact map pins, live access/conditions and human editorial/input/learning acceptance remain separate review limits. No tests or GitNexus analyze were run for this fact-check. Bentonville's review evidence is now part of the generator inputs, as recorded in the all-pack ledger; the generated pack and built-in fallback were synchronized.
