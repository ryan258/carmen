const test=require('node:test');
const assert=require('node:assert/strict');
const {createGame}=require('./helpers/game-harness.cjs');

test('evidence remains available beside the decision and marks preserve focused control and saved work',()=>{
  const game=createGame(); game.start(4,3);
  game.run('switchTab("puzzle"); renderCaseWorkspace()');
  const list=game.document.getElementById('puzzleEvidence');
  const original=JSON.parse(game.run('JSON.stringify(getLocationCase(state.currentLocationIndex).clues)'));
  assert.equal(list.children.length,original.length);
  original.forEach((clue,index)=>assert.equal(list.children[index].children[1].textContent,clue));
  const mark=list.children[1].querySelector('button'); mark.focus(); mark.click();
  assert.equal(game.document.activeElement,mark);
  assert.equal(mark.getAttribute('aria-pressed'),'true');
  assert.deepEqual(game.snapshot().evidenceMarks,[1]);
  assert.equal(game.document.getElementById('warrantEvidence').children[1].querySelector('button').getAttribute('aria-pressed'),'true');
  game.run('goToTitle(); resumeGame()');
  assert.deepEqual(game.state().evidenceMarks,[1]);
});

test('Study returns directly to its own unchanged case and rejects a replaced snapshot',()=>{
  const game=createGame(); game.start(4,3);
  game.run('switchTab("puzzle"); openStudy()');
  assert.equal(game.document.getElementById('studyReturnButton').hidden,false);
  game.run('returnToCaseFromStudy()');
  assert.equal(game.state().phase,'investigation');
  assert.equal(game.state().activeTab,'puzzle');
  game.run('openStudy()');
  const changed={...game.snapshot(),score:game.snapshot().score+1};
  game.backing.set('carmen_save',JSON.stringify(changed));
  game.run('returnToCaseFromStudy()');
  assert.equal(game.run('activeModal'),'studyModal');
  assert.equal(game.state().phase,'idle');
  assert.equal(game.document.getElementById('studyReturnButton').hidden,true);
  assert.match(game.document.getElementById('studyStatus').textContent,/changed while Study was open/);
});

test('in-case reading uses an installed local voice only and stops on pause',()=>{
  const game=createGame(),spoken=[];
  let canceled=0;
  game.context.window.SpeechSynthesisUtterance=function(text){this.text=text;};
  const remote={voiceURI:'remote',localService:false,lang:'en-US'};
  const local={voiceURI:'local',localService:true,lang:'en-US'};
  game.context.window.speechSynthesis={getVoices:()=>[remote],speak:value=>spoken.push(value),cancel:()=>canceled++};
  game.start(4,3); game.run('readCurrentCase()');
  assert.equal(spoken.length,0);
  assert.match(game.document.getElementById('caseReadingStatus').textContent,/No installed local voice/);
  game.context.window.speechSynthesis.getVoices=()=>[remote,local];
  game.run('readCurrentCase()');
  assert.equal(spoken.length,1);
  assert.equal(spoken[0].voice,local);
  assert.ok(spoken[0].text.includes(game.run('getLocationCase(state.currentLocationIndex).clues[0]')));
  game.run('goToTitle()');
  assert.equal(canceled,1);
});

test('active task precedes route in actual page reading order',()=>{
  const game=createGame();
  const children=game.document.getElementById('gameScreen').children;
  assert.equal(children[0].classList.contains('task-context'),true);
  assert.equal(children[1].id,'caseFileColumn');
  assert.equal(children[2].tagName,'ASIDE');
  assert.equal(game.document.getElementById('routeDetails').getAttribute('open'),null);
});

test('Study keeps the paused revised case question and answer aligned with its saved catalog',()=>{
  const pack=require('../data/packs/ozark-waterways.json');
  const target='ozark-waterways-buffalo-classification';
  for(const catalog of [2,3]) {
    const game=createGame();
    game.context.studyFixturePack=JSON.parse(JSON.stringify(pack));
    game.context.studyFixtureCases=pack.locations.slice(0,4).map(location=>{
      const pool=pack.questions[location.id];
      return (pool.find(item=>item.caseId===target) || pool[0]).caseId;
    });
    game.run('applyQuizPack(studyFixturePack); createDistinctRun=()=>({seed:"study-catalog",routeStart:0,caseVariantIds:[...studyFixtureCases]});');
    game.start(4,catalog);
    assert.equal(game.run('getLocationCase(state.currentLocationIndex).caseId'),target);
    const question=game.document.getElementById('puzzleQuestionText').textContent;
    const answer=game.run('displayCaseText(getLocationCase(0),getLocationCase(0).puzzle.options[getLocationCase(0).puzzle.correctIndex])');
    const before=game.backing.get('carmen_save');
    game.run('openStudy(); revealStudyAnswer()');
    assert.equal(game.run('studyPresentationCatalog()'),catalog);
    assert.equal(game.document.getElementById('studyQuestion').textContent,question);
    assert.ok(game.document.getElementById('studyAnswer').textContent.startsWith(answer+'\n\n'));
    assert.equal(game.backing.get('carmen_save'),before);
    game.run('returnToCaseFromStudy()');
    assert.equal(game.state().phase,'investigation');
    assert.equal(game.state().activityCatalogVersion,catalog);
  }
});
