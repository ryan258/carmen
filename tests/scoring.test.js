const assert = require('node:assert/strict');
const test = require('node:test');

const { SCORE_RULES, getPuzzleScore, getStreakBonus } = require('../game-core.js');

test('puzzle score decreases predictably by attempt count', () => {
  assert.equal(getPuzzleScore(0), 100);
  assert.equal(getPuzzleScore(1), 75);
  assert.equal(getPuzzleScore(2), 50);
  assert.equal(getPuzzleScore(3), 25);
  assert.equal(getPuzzleScore(10), 25);
});

test('streak bonus starts on the third consecutive capture', () => {
  assert.equal(getStreakBonus(1), 0);
  assert.equal(getStreakBonus(2), 0);
  assert.equal(getStreakBonus(3), 25);
  assert.equal(getStreakBonus(4), 50);
});

test('hint penalty lowers puzzle score but preserves minimum solve credit', () => {
  assert.equal(getPuzzleScore(0, 1), 85);
  assert.equal(getPuzzleScore(0, 3), 55);
  assert.equal(getPuzzleScore(3, 3), 25);
});

test('perfect standard run score remains stable', () => {
  const eightPerfectRounds = 8 * (SCORE_RULES.puzzleByAttempt[0] + SCORE_RULES.warrant);
  const streakBonuses = [1, 2, 3, 4, 5, 6, 7, 8].reduce((total, streak) => total + getStreakBonus(streak), 0);
  const finalBonuses = SCORE_RULES.finalConfrontation + (5 * SCORE_RULES.remainingLife) + SCORE_RULES.perfectGame;
  assert.equal(eightPerfectRounds + streakBonuses + finalBonuses, 2675);
});
