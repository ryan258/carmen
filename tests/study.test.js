const test = require('node:test');
const assert = require('node:assert/strict');
const study = require('../study-core.js');
const pack = require('../data/packs/bentonville.json');
const {createGame} = require('./helpers/game-harness.cjs');
const copy = value => JSON.parse(JSON.stringify(value));
const first = pack.questions[pack.locations[0].id][0];
const ref = study.caseRef(pack, first);
const day = 86400000;

test('notebook preserves exact case versions, optional notes and immutable updates', () => {
  const empty=study.emptyNotebook();
  const saved=study.updateEntry(empty,ref,{starred:true,note:'Look at the evidence again.'},1000);
  assert.deepEqual(empty.entries,[]);
  assert.equal(study.validateNotebook(saved),true);
  const revised=study.updateEntry(saved,{...ref,contentVersion:ref.contentVersion+1},{starred:true},2000);
  assert.equal(revised.entries.length,2);
  assert.equal(saved.entries.length,1);
  assert.notEqual(study.entryKey({packId:'a:1',contentVersion:2,caseId:'x'}),study.entryKey({packId:'a',contentVersion:1,caseId:'2:x'}));
});

test('explicit self ratings schedule bounded review intervals without passive timers', () => {
  let notebook=study.updateEntry(study.emptyNotebook(),ref,{starred:true},1000);
  assert.equal(study.dueEntries(notebook,1000).length,0);
  notebook=study.updateEntry(notebook,ref,{rating:'got-it'},2000);
  assert.equal(notebook.entries[0].intervalDays,1);
  assert.equal(study.dueEntries(notebook,2000+day-1).length,0);
  assert.equal(study.dueEntries(notebook,2000+day).length,1);
  notebook=study.updateEntry(notebook,ref,{rating:'got-it'},3000);
  assert.equal(notebook.entries[0].intervalDays,2);
  for(let i=0;i<8;i++) notebook=study.updateEntry(notebook,ref,{rating:'got-it'},4000+i);
  assert.equal(notebook.entries[0].intervalDays,30);
  notebook=study.updateEntry(notebook,ref,{rating:'again'},5000);
  assert.equal(notebook.entries[0].intervalDays,0);
  assert.equal(study.dueEntries(notebook,5000).length,1);
  notebook=study.updateEntry(notebook,ref,{note:'Clock moved backwards.'},100);
  assert.equal(study.validateNotebook(notebook),true);
});

test('notebook and backup reject ambiguous, oversized, or inconsistent imported state', () => {
  const good=study.updateEntry(study.emptyNotebook(),ref,{starred:true},1000);
  const invalids=[
    {...good,questions:[]}, {...good,schemaVersion:2}, {...good,entries:[...good.entries,...good.entries]},
    {...good,entries:[{...good.entries[0],note:'x'.repeat(study.MAX_NOTE+1)}]},
    {...good,entries:[{...good.entries[0],contentVersion:0}]},
    {...good,entries:[{...good.entries[0],updatedAt:Infinity}]},
    {...good,entries:[{...good.entries[0],reviewedAt:1,dueAt:null}]},
    {...good,entries:[{...good.entries[0],intervalDays:1}]},
    {...good,entries:[{...good.entries[0],starred:'true'}]},
    {...good,entries:[{...good.entries[0],onClick:'evil()'}]}
  ];
  invalids.forEach(value=>assert.equal(study.validateNotebook(value),false));
  const backup={format:'carmen-backup',version:1,notebook:good,savedCase:null};
  assert.deepEqual(study.parseBackup(JSON.stringify(backup)),backup);
  assert.throws(()=>study.parseBackup(JSON.stringify({...backup,script:'x'})),/format/);
  assert.throws(()=>study.parseBackup(JSON.stringify({...backup,savedCase:[]})),/format/);
  assert.throws(()=>study.parseBackup('broken'),/JSON/);
  assert.throws(()=>study.parseBackup(' '.repeat(study.MAX_BACKUP_BYTES+1)),/10 MB/);
  assert.throws(()=>study.updateEntry(good,ref,{rating:'automatic'}),/Again/);
});

test('resume summary identifies rotated routes, modality, progress and the next action', () => {
  const saved={schemaVersion:7,quizPackId:pack.id,quizStyle:'mixed',routeStart:4,currentLocationIndex:1,stopCount:4,
    phase:'investigation',difficulty:'detective',lives:4,score:150,activityProgress:{selections:[1,0]},activeTab:'puzzle'};
  const summary=study.describeResume(saved,pack);
  assert.ok(summary.includes(pack.locations[5].name));
  assert.match(summary,/stop 2 of 4/); assert.match(summary,/Mixed/); assert.match(summary,/2 activity cards/);
  assert.match(study.describeResume({...saved,schemaVersion:5,quizStyle:undefined,routeStart:0,puzzleSolved:true},pack),/Classic.*puzzle is solved/);
  assert.match(study.describeResume({...saved,phase:'final',finalConfrontationRound:2},pack),/final report 2 of 3/);
  assert.equal(study.describeResume(saved,{...pack,id:'other'}),'');
});

test('opening Study pauses callbacks and unscored practice never changes the saved investigation', () => {
  const game=createGame(); game.start();
  game.run('selectChoice((state.activePuzzleCorrectIndex+1)%4)');
  const before=game.backing.get('carmen_save');
  game.run('openStudy()'); game.flush();
  assert.equal(game.state().phase,'idle');
  assert.equal(game.run('activeModal'),'studyModal');
  assert.equal(game.document.getElementById('studyCaseContent').hidden,false);
  game.document.getElementById('studyChoices').children[0].click();
  game.run('revealStudyAnswer(); rateStudyCase("got-it"); toggleStudyStar()');
  assert.equal(game.backing.get('carmen_save'),before);
  const notebook=JSON.parse(game.backing.get(study.NOTEBOOK_KEY));
  assert.equal(study.validateNotebook(notebook),true);
  assert.equal(notebook.entries[0].starred,true);
  assert.equal(notebook.entries[0].intervalDays,1);
  game.run('closeStudy(); resumeGame()');
  assert.equal(game.state().lives,JSON.parse(before).lives);
});

test('note edits survive reopening and do not overwrite a newer notebook from another tab', () => {
  const game=createGame(); game.run('openStudy()');
  const note=game.document.getElementById('studyNote');
  note.value='Remember the two constraints.'; game.run('saveStudyNote()');
  game.run('closeStudy(); openStudy()');
  assert.equal(note.value,'Remember the two constraints.');
  const newer=JSON.parse(game.backing.get(study.NOTEBOOK_KEY)); newer.entries[0].note='Newer tab';
  const raw=JSON.stringify(newer); game.backing.set(study.NOTEBOOK_KEY,raw);
  note.value='My unsaved draft'; game.run('saveStudyNote()');
  assert.equal(game.backing.get(study.NOTEBOOK_KEY),raw);
  assert.match(game.document.getElementById('studyStatus').textContent,/another tab/);
  game.run('renderStudyCase()'); assert.equal(note.value,'My unsaved draft');
  game.run('reloadStudyNotebook(); saveStudyNote()');
  assert.equal(JSON.parse(game.backing.get(study.NOTEBOOK_KEY)).entries[0].note,'My unsaved draft');
});

test('Study opens directly to the active or paused investigation case', () => {
  const game=createGame(); game.start();
  const expected=game.run('getLocationCase(state.currentLocationIndex).caseId');
  const before=game.backing.get('carmen_save'); game.run('openStudy()');
  assert.equal(game.document.getElementById('studyCase').value,expected);
  game.run('closeStudy(); openStudy()');
  assert.equal(game.document.getElementById('studyCase').value,expected);
  assert.equal(game.backing.get('carmen_save'),before);
});

test('a corrupt notebook is preserved, and explicit restore can replace it after preview', async () => {
  const game=createGame(); game.backing.set(study.NOTEBOOK_KEY,'broken'); game.run('openStudy()');
  assert.equal(game.document.getElementById('studyNote').disabled,true);
  game.run('toggleStudyStar()'); assert.equal(game.backing.get(study.NOTEBOOK_KEY),'broken');
  const backup={format:'carmen-backup',version:1,notebook:study.emptyNotebook(),savedCase:null};
  game.context.studyTestFile={size:200,text:async()=>JSON.stringify(backup)};
  await game.run('previewStudyImport(studyTestFile)');
  assert.equal(game.backing.get(study.NOTEBOOK_KEY),'broken');
  assert.equal(game.document.getElementById('studyImportPreview').hidden,false);
  game.run('restoreStudyNotebook()');
  assert.deepEqual(JSON.parse(game.backing.get(study.NOTEBOOK_KEY)),backup.notebook);
  assert.equal(game.document.getElementById('studyNote').disabled,false);
});

test('import replacement checks the notebook snapshot again at confirmation', async () => {
  const game=createGame(); game.run('openStudy()');
  const notebook=study.updateEntry(study.emptyNotebook(),ref,{note:'Backup'},1000);
  game.context.studyTestFile={size:300,text:async()=>JSON.stringify({format:'carmen-backup',version:1,notebook,savedCase:null})};
  await game.run('previewStudyImport(studyTestFile)');
  const current=JSON.stringify(study.updateEntry(study.emptyNotebook(),ref,{note:'Current newer'},2000));
  game.backing.set(study.NOTEBOOK_KEY,current); game.run('restoreStudyNotebook()');
  assert.equal(game.backing.get(study.NOTEBOOK_KEY),current);
  assert.match(game.document.getElementById('studyStatus').textContent,/another tab/);
});

test('a pending file read cannot reopen an import preview after Study closes', async () => {
  const game=createGame(); game.run('openStudy()');
  let resolveText;
  game.context.studyTestFile={size:100,text:()=>new Promise(resolve=>{resolveText=resolve;})};
  const pending=game.run('previewStudyImport(studyTestFile)'); game.run('closeStudy()');
  resolveText(JSON.stringify({format:'carmen-backup',version:1,notebook:study.emptyNotebook(),savedCase:null}));
  await pending;
  assert.equal(game.document.getElementById('studyImportPreview').hidden,true);
  assert.equal(game.run('studyImportPreview'),null);
});

test('read aloud accepts only local voices, requires a click and stops on close', () => {
  const game=createGame(), spoken=[]; let canceled=0;
  game.context.window.speechSynthesis={getVoices:()=>[
    {voiceURI:'remote',name:'Remote',lang:'en-US',localService:false},
    {voiceURI:'local',name:'Installed',lang:'en-US',localService:true}
  ],speak:value=>spoken.push(value),cancel:()=>{canceled++;}};
  game.context.window.SpeechSynthesisUtterance=function(text){this.text=text;};
  game.run('openStudy()'); assert.equal(spoken.length,0);
  const select=game.document.getElementById('studyVoice');
  assert.deepEqual(select.children.map(option=>option.value),['local']);
  game.run('readStudyCase()'); assert.equal(spoken.length,1);
  assert.equal(spoken[0].voice.localService,true);
  assert.ok(spoken[0].text.includes(first.puzzle.question));
  game.run('closeStudy()'); assert.equal(canceled,1);
});

test('backup export includes an unsaved note draft without overwriting newer browser data', () => {
  const game=createGame(); let exported;
  game.context.Blob=function(parts){exported=parts.join('');this.size=Buffer.byteLength(exported);};
  game.context.URL={createObjectURL:()=> 'blob:local-test',revokeObjectURL(){}};
  game.run('openStudy()');
  const newer=JSON.stringify(study.updateEntry(study.emptyNotebook(),ref,{note:'Newer tab'},1000));
  game.backing.set(study.NOTEBOOK_KEY,newer);
  game.document.getElementById('studyNote').value='Draft to preserve'; game.run('saveStudyNote(); exportStudyBackup()');
  assert.equal(game.backing.get(study.NOTEBOOK_KEY),newer);
  assert.equal(study.parseBackup(exported).notebook.entries[0].note,'Draft to preserve');
});
