const test=require('node:test');
const assert=require('node:assert/strict');
const {createGame}=require('./helpers/game-harness.cjs');

test('daily case uses a dated seed, awards XP/badges once, and locks until tomorrow',()=>{
  const g=createGame();g.run('startDailyCase()');
  const today=g.run('careerDay()');
  assert.equal(g.state().caseSeed,`daily-${today}`);assert.equal(g.state().difficulty,'detective');assert.equal(g.state().quizStyle,'mixed');
  g.run("state.history=[{attempts:1},{attempts:2},{attempts:1},{attempts:1}]; state.score=1000;");
  const summary=JSON.parse(g.run("JSON.stringify(recordCareerCase('arrest'))"));
  assert.equal(summary.xp,1250);assert.equal(summary.levelUp,true);assert.equal(summary.streak,1);
  assert.match(summary.share,/🟩🟨🟩🟩 Case closed · 🔥1/);
  assert.ok(summary.newBadges.some(([id])=>id==='daily-first'));
  g.context.summary=summary;
  assert.match(g.run('renderCareerResult(summary)'),/Next badge: <strong>Habit Forming[\s\S]*playAnotherCase\(\)/);
  assert.equal(g.run("recordCareerCase('arrest')"),null);
  assert.equal(JSON.parse(g.backing.get('carmen_career')).xp,1250);
  assert.equal(g.document.getElementById('dailyCaseButton').disabled,true);
});

test('daily streak counts consecutive solved days ending today or yesterday',()=>{
  const g=createGame();
  const streak=daily=>g.run(`dailyStreak({daily:${JSON.stringify(daily)}},'2026-10-26')`);
  const solved={outcome:'solved'};
  assert.equal(streak({'2026-10-24':solved,'2026-10-25':solved,'2026-10-26':solved}),3);
  assert.equal(streak({'2026-10-24':solved,'2026-10-25':solved}),2);
  assert.equal(streak({'2026-10-23':solved,'2026-10-25':{outcome:'escaped'}}),0);
});

test('missed stops map to study cases, and reviews earn XP and badges once per case per day',()=>{
  const g=createGame();g.start(4,3);
  g.run('state.history=[{attempts:2},{attempts:1}]');
  const ids=g.state().caseVariantIds;
  assert.deepEqual(JSON.parse(g.run('JSON.stringify(missedCaseIds())')),[ids[0],ids[2]]);
  g.run(`storage.setItem(CarmenStudy.NOTEBOOK_KEY, JSON.stringify(CarmenStudy.updateEntry(CarmenStudy.emptyNotebook(), {packId:QUIZ_PACK.id,contentVersion:QUIZ_PACK.contentVersion,caseId:${JSON.stringify(ids[0])}}, {rating:'again'})))`);
  assert.equal(g.run('dueReviewCount()'),1);
  const entry='JSON.parse(storage.getItem(CarmenStudy.NOTEBOOK_KEY)).entries[0]';
  assert.match(g.run(`recordCareerStudy('got-it', ${entry})`),/\+40 career XP\. 📓 New badge: Field Notes!/);
  assert.equal(g.run(`recordCareerStudy('got-it', ${entry})`),'Already counted toward your career today.');
  const career=JSON.parse(g.backing.get('carmen_career'));
  assert.equal(career.xp,40);assert.equal(career.reviews,1);
});
