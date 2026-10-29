# Manual QA

`npm run verify` covers the rules and the fact bank. This checklist covers what it can't see: the page itself. Run it after changing `index.html`, `trivia.js`'s page code, or `trivia.css`. The whole list takes about ten minutes.

## Play

- [ ] The home screen lists 23 packs. The mastery line reads "N of M clues mastered · N due for review".
- [ ] **Today's case** opens Stop 1 of 6. The clue shows a blank line where the name was. The four choices read "Answer A" through "Answer D".
- [ ] Keys 1–4 and A–D answer, but not while focus is in a select or the file input.
- [ ] After a wrong pick, the right and wrong choices are marked, the full fact and a source link appear, "This clue comes back in your review today" shows, and focus moves to Continue. The source link opens in a new tab.
- [ ] The misses count in the heading updates right after the miss.
- [ ] **Pause**, reload, then **Continue case** returns to the same clue, with the answer still shown if it was given.
- [ ] Finishing gives a results screen with caught or got away, the score, and the list of clues with their facts. Focus is on the heading.
- [ ] Start a daily, answer one clue, Pause, then **Start a case**. The prompt says the daily will close as got away; after confirming, **Today's case** reads closed.
- [ ] Pause and Home leave focus on the page heading, and Continue on an answered clue focuses **Continue**.
- [ ] Back home: "Today's case is closed", the streak reads 1 day, and **Review 1 due clue** asks only the missed fact.

## Backup and recovery

- [ ] **Export progress** downloads `carmen-trivia-backup-YYYY-MM-DD.json`.
- [ ] Importing that file asks for confirmation, then restores the backup.
- [ ] Importing an unrelated JSON file shows "not a Carmen trivia backup" and changes nothing.
- [ ] In the console, run `localStorage.setItem('carmen_trivia_v1', '{')` and reload. A notice says the progress could not be read, nothing is overwritten while you play, and **Start fresh** clears it after confirmation.

## Access and layout

- [ ] A keyboard-only round works. The focus ring is visible on every control.
- [ ] VoiceOver reads the blank as "blank", announces the feedback, and reads the choices as "Answer A: …".
- [ ] At 375px width and at 200% zoom, nothing scrolls horizontally and the buttons stay at least 44px tall.
- [ ] Opening `index.html` from disk works the same as over `localhost`.

Note in the commit message what you checked and in which browser. Leave out any check you didn't run.
