/********************** 
 * Contextchoice Test *
 **********************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'ContextChoice';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
trial_counter = 0;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(context_instructionsRoutineBegin());
flowScheduler.add(context_instructionsRoutineEachFrame());
flowScheduler.add(context_instructionsRoutineEnd());
flowScheduler.add(FP_instructionsRoutineBegin());
flowScheduler.add(FP_instructionsRoutineEachFrame());
flowScheduler.add(FP_instructionsRoutineEnd());
flowScheduler.add(decision_instructionsRoutineBegin());
flowScheduler.add(decision_instructionsRoutineEachFrame());
flowScheduler.add(decision_instructionsRoutineEnd());
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(trial_exampleRoutineBegin());
flowScheduler.add(trial_exampleRoutineEachFrame());
flowScheduler.add(trial_exampleRoutineEnd());
flowScheduler.add(assessment_exRoutineBegin());
flowScheduler.add(assessment_exRoutineEachFrame());
flowScheduler.add(assessment_exRoutineEnd());
flowScheduler.add(valueA_exRoutineBegin());
flowScheduler.add(valueA_exRoutineEachFrame());
flowScheduler.add(valueA_exRoutineEnd());
flowScheduler.add(valueB_exRoutineBegin());
flowScheduler.add(valueB_exRoutineEachFrame());
flowScheduler.add(valueB_exRoutineEnd());
flowScheduler.add(cal_instructionsRoutineBegin());
flowScheduler.add(cal_instructionsRoutineEachFrame());
flowScheduler.add(cal_instructionsRoutineEnd());
flowScheduler.add(cal_instructionsRoutineBegin());
flowScheduler.add(cal_instructionsRoutineEachFrame());
flowScheduler.add(cal_instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'images/9b.jpg', 'path': 'images/9b.jpg'},
    {'name': 'images/38a.jpg', 'path': 'images/38a.jpg'},
    {'name': 'images/67a.jpg', 'path': 'images/67a.jpg'},
    {'name': 'images/79a.jpg', 'path': 'images/79a.jpg'},
    {'name': 'images/21b.jpg', 'path': 'images/21b.jpg'},
    {'name': 'images/72b.jpg', 'path': 'images/72b.jpg'},
    {'name': 'images/14b.jpg', 'path': 'images/14b.jpg'},
    {'name': 'images/46a.jpg', 'path': 'images/46a.jpg'},
    {'name': 'images/0a.jpg', 'path': 'images/0a.jpg'},
    {'name': 'images/70a.jpg', 'path': 'images/70a.jpg'},
    {'name': 'images/60a.jpg', 'path': 'images/60a.jpg'},
    {'name': 'images/33a.jpg', 'path': 'images/33a.jpg'},
    {'name': 'images/23a.jpg', 'path': 'images/23a.jpg'},
    {'name': 'images/23b.jpg', 'path': 'images/23b.jpg'},
    {'name': 'images/24a.jpg', 'path': 'images/24a.jpg'},
    {'name': 'images/35a.jpg', 'path': 'images/35a.jpg'},
    {'name': 'images/67b.jpg', 'path': 'images/67b.jpg'},
    {'name': 'images/47a.jpg', 'path': 'images/47a.jpg'},
    {'name': 'images/21a.jpg', 'path': 'images/21a.jpg'},
    {'name': 'images/5b.jpg', 'path': 'images/5b.jpg'},
    {'name': 'images/25b.jpg', 'path': 'images/25b.jpg'},
    {'name': 'images/31b.jpg', 'path': 'images/31b.jpg'},
    {'name': 'images/43a.jpg', 'path': 'images/43a.jpg'},
    {'name': 'images/75a.jpg', 'path': 'images/75a.jpg'},
    {'name': 'images/71b.jpg', 'path': 'images/71b.jpg'},
    {'name': 'images/0b.jpg', 'path': 'images/0b.jpg'},
    {'name': 'res/minefield.jpg', 'path': 'res/minefield.jpg'},
    {'name': 'res/sexshop.jpg', 'path': 'res/sexshop.jpg'},
    {'name': 'images/11a.jpg', 'path': 'images/11a.jpg'},
    {'name': 'images/47b.jpg', 'path': 'images/47b.jpg'},
    {'name': 'images/65b.jpg', 'path': 'images/65b.jpg'},
    {'name': 'images/42b.jpg', 'path': 'images/42b.jpg'},
    {'name': 'images/74b.jpg', 'path': 'images/74b.jpg'},
    {'name': 'images/56b.jpg', 'path': 'images/56b.jpg'},
    {'name': 'images/6b.jpg', 'path': 'images/6b.jpg'},
    {'name': 'images/30b.jpg', 'path': 'images/30b.jpg'},
    {'name': 'images/40a.jpg', 'path': 'images/40a.jpg'},
    {'name': 'images/73b.jpg', 'path': 'images/73b.jpg'},
    {'name': 'images/15b.jpg', 'path': 'images/15b.jpg'},
    {'name': 'images/22b.jpg', 'path': 'images/22b.jpg'},
    {'name': 'images/16a.jpg', 'path': 'images/16a.jpg'},
    {'name': 'images/50b.jpg', 'path': 'images/50b.jpg'},
    {'name': 'images/44b.jpg', 'path': 'images/44b.jpg'},
    {'name': 'images/18b.jpg', 'path': 'images/18b.jpg'},
    {'name': 'images/64a.jpg', 'path': 'images/64a.jpg'},
    {'name': 'images/36b.jpg', 'path': 'images/36b.jpg'},
    {'name': 'images/53b.jpg', 'path': 'images/53b.jpg'},
    {'name': 'images/50a.jpg', 'path': 'images/50a.jpg'},
    {'name': 'images/16b.jpg', 'path': 'images/16b.jpg'},
    {'name': 'images/11b.jpg', 'path': 'images/11b.jpg'},
    {'name': 'images/58a.jpg', 'path': 'images/58a.jpg'},
    {'name': 'images/65a.jpg', 'path': 'images/65a.jpg'},
    {'name': 'images/43b.jpg', 'path': 'images/43b.jpg'},
    {'name': 'images/37a.jpg', 'path': 'images/37a.jpg'},
    {'name': 'images/26a.jpg', 'path': 'images/26a.jpg'},
    {'name': 'images/34b.jpg', 'path': 'images/34b.jpg'},
    {'name': 'images/60b.jpg', 'path': 'images/60b.jpg'},
    {'name': 'images/37b.jpg', 'path': 'images/37b.jpg'},
    {'name': 'images/36a.jpg', 'path': 'images/36a.jpg'},
    {'name': 'images/22a.jpg', 'path': 'images/22a.jpg'},
    {'name': 'images/57a.jpg', 'path': 'images/57a.jpg'},
    {'name': 'images/45b.jpg', 'path': 'images/45b.jpg'},
    {'name': '160Loop.xlsx', 'path': '160Loop.xlsx'},
    {'name': 'images/19b.jpg', 'path': 'images/19b.jpg'},
    {'name': 'images/32b.jpg', 'path': 'images/32b.jpg'},
    {'name': 'images/29b.jpg', 'path': 'images/29b.jpg'},
    {'name': 'images/45a.jpg', 'path': 'images/45a.jpg'},
    {'name': 'images/69a.jpg', 'path': 'images/69a.jpg'},
    {'name': 'images/54a.jpg', 'path': 'images/54a.jpg'},
    {'name': 'images/68a.jpg', 'path': 'images/68a.jpg'},
    {'name': 'images/1a.jpg', 'path': 'images/1a.jpg'},
    {'name': 'images/6a.jpg', 'path': 'images/6a.jpg'},
    {'name': 'images/26b.jpg', 'path': 'images/26b.jpg'},
    {'name': 'images/46b.jpg', 'path': 'images/46b.jpg'},
    {'name': 'images/19a.jpg', 'path': 'images/19a.jpg'},
    {'name': 'images/27a.jpg', 'path': 'images/27a.jpg'},
    {'name': 'images/1b.jpg', 'path': 'images/1b.jpg'},
    {'name': 'images/28a.jpg', 'path': 'images/28a.jpg'},
    {'name': 'images/66b.jpg', 'path': 'images/66b.jpg'},
    {'name': 'images/8a.jpg', 'path': 'images/8a.jpg'},
    {'name': 'images/17a.jpg', 'path': 'images/17a.jpg'},
    {'name': 'images/78a.jpg', 'path': 'images/78a.jpg'},
    {'name': 'images/51b.jpg', 'path': 'images/51b.jpg'},
    {'name': 'images/8b.jpg', 'path': 'images/8b.jpg'},
    {'name': 'images/48b.jpg', 'path': 'images/48b.jpg'},
    {'name': 'images/9a.jpg', 'path': 'images/9a.jpg'},
    {'name': 'images/73a.jpg', 'path': 'images/73a.jpg'},
    {'name': 'images/30a.jpg', 'path': 'images/30a.jpg'},
    {'name': 'images/4a.jpg', 'path': 'images/4a.jpg'},
    {'name': 'images/61a.jpg', 'path': 'images/61a.jpg'},
    {'name': 'images/12b.jpg', 'path': 'images/12b.jpg'},
    {'name': 'images/74a.jpg', 'path': 'images/74a.jpg'},
    {'name': 'images/54b.jpg', 'path': 'images/54b.jpg'},
    {'name': 'images/48a.jpg', 'path': 'images/48a.jpg'},
    {'name': 'images/71a.jpg', 'path': 'images/71a.jpg'},
    {'name': 'images/77b.jpg', 'path': 'images/77b.jpg'},
    {'name': 'images/13a.jpg', 'path': 'images/13a.jpg'},
    {'name': 'images/52a.jpg', 'path': 'images/52a.jpg'},
    {'name': 'images/29a.jpg', 'path': 'images/29a.jpg'},
    {'name': 'images/38b.jpg', 'path': 'images/38b.jpg'},
    {'name': 'images/62b.jpg', 'path': 'images/62b.jpg'},
    {'name': 'images/7b.jpg', 'path': 'images/7b.jpg'},
    {'name': 'images/40b.jpg', 'path': 'images/40b.jpg'},
    {'name': 'images/66a.jpg', 'path': 'images/66a.jpg'},
    {'name': 'images/25a.jpg', 'path': 'images/25a.jpg'},
    {'name': 'images/31a.jpg', 'path': 'images/31a.jpg'},
    {'name': 'images/59b.jpg', 'path': 'images/59b.jpg'},
    {'name': 'images/72a.jpg', 'path': 'images/72a.jpg'},
    {'name': 'images/42a.jpg', 'path': 'images/42a.jpg'},
    {'name': 'images/5a.jpg', 'path': 'images/5a.jpg'},
    {'name': 'images/69b.jpg', 'path': 'images/69b.jpg'},
    {'name': 'images/77a.jpg', 'path': 'images/77a.jpg'},
    {'name': 'images/2a.jpg', 'path': 'images/2a.jpg'},
    {'name': 'images/2b.jpg', 'path': 'images/2b.jpg'},
    {'name': 'images/63a.jpg', 'path': 'images/63a.jpg'},
    {'name': 'images/14a.jpg', 'path': 'images/14a.jpg'},
    {'name': 'images/24b.jpg', 'path': 'images/24b.jpg'},
    {'name': 'images/52b.jpg', 'path': 'images/52b.jpg'},
    {'name': 'images/64b.jpg', 'path': 'images/64b.jpg'},
    {'name': 'images/20a.jpg', 'path': 'images/20a.jpg'},
    {'name': 'images/70b.jpg', 'path': 'images/70b.jpg'},
    {'name': 'images/75b.jpg', 'path': 'images/75b.jpg'},
    {'name': 'images/57b.jpg', 'path': 'images/57b.jpg'},
    {'name': 'images/3a.jpg', 'path': 'images/3a.jpg'},
    {'name': 'images/39a.jpg', 'path': 'images/39a.jpg'},
    {'name': 'images/32a.jpg', 'path': 'images/32a.jpg'},
    {'name': 'images/17b.jpg', 'path': 'images/17b.jpg'},
    {'name': 'images/39b.jpg', 'path': 'images/39b.jpg'},
    {'name': 'images/13b.jpg', 'path': 'images/13b.jpg'},
    {'name': 'images/33b.jpg', 'path': 'images/33b.jpg'},
    {'name': 'images/49b.jpg', 'path': 'images/49b.jpg'},
    {'name': 'images/76a.jpg', 'path': 'images/76a.jpg'},
    {'name': 'images/10b.jpg', 'path': 'images/10b.jpg'},
    {'name': 'images/51a.jpg', 'path': 'images/51a.jpg'},
    {'name': 'images/78b.jpg', 'path': 'images/78b.jpg'},
    {'name': 'images/68b.jpg', 'path': 'images/68b.jpg'},
    {'name': 'images/63b.jpg', 'path': 'images/63b.jpg'},
    {'name': 'images/59a.jpg', 'path': 'images/59a.jpg'},
    {'name': 'images/79b.jpg', 'path': 'images/79b.jpg'},
    {'name': 'images/4b.jpg', 'path': 'images/4b.jpg'},
    {'name': 'images/27b.jpg', 'path': 'images/27b.jpg'},
    {'name': 'images/49a.jpg', 'path': 'images/49a.jpg'},
    {'name': 'images/10a.jpg', 'path': 'images/10a.jpg'},
    {'name': 'images/58b.jpg', 'path': 'images/58b.jpg'},
    {'name': 'images/12a.jpg', 'path': 'images/12a.jpg'},
    {'name': 'images/35b.jpg', 'path': 'images/35b.jpg'},
    {'name': 'images/18a.jpg', 'path': 'images/18a.jpg'},
    {'name': 'images/62a.jpg', 'path': 'images/62a.jpg'},
    {'name': 'images/28b.jpg', 'path': 'images/28b.jpg'},
    {'name': 'images/3b.jpg', 'path': 'images/3b.jpg'},
    {'name': 'images/56a.jpg', 'path': 'images/56a.jpg'},
    {'name': 'images/44a.jpg', 'path': 'images/44a.jpg'},
    {'name': 'images/61b.jpg', 'path': 'images/61b.jpg'},
    {'name': 'images/55a.jpg', 'path': 'images/55a.jpg'},
    {'name': 'images/20b.jpg', 'path': 'images/20b.jpg'},
    {'name': 'images/41a.jpg', 'path': 'images/41a.jpg'},
    {'name': 'images/76b.jpg', 'path': 'images/76b.jpg'},
    {'name': 'images/41b.jpg', 'path': 'images/41b.jpg'},
    {'name': 'images/7a.jpg', 'path': 'images/7a.jpg'},
    {'name': 'images/53a.jpg', 'path': 'images/53a.jpg'},
    {'name': 'images/15a.jpg', 'path': 'images/15a.jpg'},
    {'name': 'images/34a.jpg', 'path': 'images/34a.jpg'},
    {'name': 'images/55b.jpg', 'path': 'images/55b.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var context_instructionsClock;
var Disclaimer_2;
var mouse;
var FP_instructionsClock;
var Disclaimer_3;
var FixationCross_2;
var mouse_2;
var decision_instructionsClock;
var Disclaimer_4;
var mouse_3;
var instructionsClock;
var Disclaimer;
var mouse_4;
var trial_exampleClock;
var example_instr;
var Context_ex;
var FC_ex;
var stimA_ex;
var stimB_ex;
var squareA_ex;
var squareB_ex;
var sound_3;
var resp_Ex;
var tip_ex;
var assessment_exClock;
var question_confidence_2;
var slider_confidence_2;
var tip_ex_2;
var valueA_exClock;
var question_valueA_2;
var slider_valueA_2;
var stimA_4;
var valueB_exClock;
var question_valueB_2;
var slider_valueB_2;
var stimB_4;
var cal_instructionsClock;
var calibration_txt;
var mouse_5;
var trialClock;
var ContextPresentation;
var FixationCross;
var stimA;
var stimB;
var squareA;
var squareB;
var LookAtSClock;
var stimA_3;
var stimB_3;
var squareA_5;
var squareB_3;
var resp_LaS;
var sound_1;
var confidenceClock;
var question_confidence;
var slider_confidence;
var valueAClock;
var question_valueA;
var slider_valueA;
var stimA_2;
var valueBClock;
var question_valueB;
var slider_valueB;
var stimB_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "context_instructions"
  context_instructionsClock = new util.Clock();
  Disclaimer_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Disclaimer_2',
    text: 'You are about to do a decision task. In each trial you will be presented with one question and a pair of options depicted with images, one to the left and another one to the right. \n\nPress the mouse to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  psychoJS.window.mouseVisible = false;
  
  // Initialize components for Routine "FP_instructions"
  FP_instructionsClock = new util.Clock();
  Disclaimer_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Disclaimer_3',
    text: 'Before option presentation, a + like this one will appear in the screen:\n\n\n\n\n\n\nYou have to fixate on it until it dissapears.\n\nPress the mouse to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  FixationCross_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'FixationCross_2', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0.6, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "decision_instructions"
  decision_instructionsClock = new util.Clock();
  Disclaimer_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Disclaimer_4',
    text: 'You will not be able to report your choice at the beggining. Once you hear a sound, you can express your decision by clicking the left key in the mouse if your chosen option is the left one, and viceversa. \n\nPress the mouse to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  Disclaimer = new visual.TextStim({
    win: psychoJS.window,
    name: 'Disclaimer',
    text: 'In some trials, the images will disapear before the sound is emmited, while in some other trials the images will be always present.  \n\nAfter each decision, some questions will be asked.\n\nPress the mouse to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
  // Initialize components for Routine "trial_example"
  trial_exampleClock = new util.Clock();
  example_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'example_instr',
    text: 'Now you will see an example',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  Context_ex = new visual.TextStim({
    win: psychoJS.window,
    name: 'Context_ex',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  FC_ex = new visual.ShapeStim ({
    win: psychoJS.window, name: 'FC_ex', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0.6, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  stimA_ex = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimA_ex', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.5), 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  stimB_ex = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimB_ex', units : undefined, 
    image : 'res/sexshop.jpg', mask : undefined,
    ori : 0.0, pos : [0.5, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  squareA_ex = new visual.Rect ({
    win: psychoJS.window, name: 'squareA_ex', 
    width: [0.25, 0.25][0], height: [0.25, 0.25][1],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 5.0, lineColor: new util.Color('lime'),
    fillColor: new util.Color(undefined),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  squareB_ex = new visual.Rect ({
    win: psychoJS.window, name: 'squareB_ex', 
    width: [0.25, 0.25][0], height: [0.25, 0.25][1],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 5.0, lineColor: new util.Color('lime'),
    fillColor: new util.Color(undefined),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  sound_3 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 0.5,
    });
  sound_3.setVolume(1.0);
  resp_Ex = new core.Mouse({
    win: psychoJS.window,
  });
  resp_Ex.mouseClock = new util.Clock();
  tip_ex = new visual.TextStim({
    win: psychoJS.window,
    name: 'tip_ex',
    text: 'Now you can report the selected option by clicking the left button in the mouse if the chosen option is the left, or the right button in the mouse if the chosen option is the right!',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -9.0 
  });
  
  // Initialize components for Routine "assessment_ex"
  assessment_exClock = new util.Clock();
  question_confidence_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_confidence_2',
    text: 'How confident are you with your choice?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_confidence_2 = new visual.Slider({
    win: psychoJS.window, name: 'slider_confidence_2',
    size: [1.1, 0.1], pos: [0, 0.0], units: 'height',
    labels: ["Nothing", "Absolutely"], ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('grey'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  psychoJS.window.mouseVisible = false;
  
  tip_ex_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'tip_ex_2',
    text: 'Now click on the ammount of confidence you feel after making the decision',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "valueA_ex"
  valueA_exClock = new util.Clock();
  question_valueA_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_valueA_2',
    text: 'How would you value this option in the given context?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('Black'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_valueA_2 = new visual.Slider({
    win: psychoJS.window, name: 'slider_valueA_2',
    size: [1, 0.05], pos: [0, (- 0.2)], units: 'height',
    labels: ["-", "+"], ticks: [(- 10), (- 9), (- 8), (- 7), (- 6), (- 5), (- 4), (- 3), (- 2), (- 1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('grey'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  stimA_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimA_4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "valueB_ex"
  valueB_exClock = new util.Clock();
  question_valueB_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_valueB_2',
    text: 'How would you value this option in the given context?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('Black'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_valueB_2 = new visual.Slider({
    win: psychoJS.window, name: 'slider_valueB_2',
    size: [1.0, 0.05], pos: [0, (- 0.2)], units: 'height',
    labels: ["-", "+"], ticks: [(- 10), (- 9), (- 8), (- 7), (- 6), (- 5), (- 4), (- 3), (- 2), (- 1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('grey'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  stimB_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimB_4', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "cal_instructions"
  cal_instructionsClock = new util.Clock();
  calibration_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'calibration_txt',
    text: 'Your gaze position will be calibrated now. For that, some green dots will appear in the screen. You have to visually follow them as they move and fixate your gaze when they stop. \n\nPress the mouse to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_5 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_5.mouseClock = new util.Clock();
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  ContextPresentation = new visual.TextStim({
    win: psychoJS.window,
    name: 'ContextPresentation',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  FixationCross = new visual.ShapeStim ({
    win: psychoJS.window, name: 'FixationCross', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0.0, pos: [0, 0],
    lineWidth: 0.6, lineColor: new util.Color('black'),
    fillColor: new util.Color('black'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  stimA = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimA', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.5), 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  stimB = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimB', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.5, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  squareA = new visual.Rect ({
    win: psychoJS.window, name: 'squareA', 
    width: [0.25, 0.25][0], height: [0.25, 0.25][1],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 5.0, lineColor: new util.Color('lime'),
    fillColor: new util.Color(undefined),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  squareB = new visual.Rect ({
    win: psychoJS.window, name: 'squareB', 
    width: [0.25, 0.25][0], height: [0.25, 0.25][1],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 5.0, lineColor: new util.Color('lime'),
    fillColor: new util.Color(undefined),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  // Initialize components for Routine "LookAtS"
  LookAtSClock = new util.Clock();
  stimA_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimA_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [(- 0.5), 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  stimB_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimB_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0.5, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  squareA_5 = new visual.Rect ({
    win: psychoJS.window, name: 'squareA_5', 
    width: [0.25, 0.25][0], height: [0.25, 0.25][1],
    ori: 0.0, pos: [(- 0.5), 0],
    lineWidth: 5.0, lineColor: new util.Color('lime'),
    fillColor: new util.Color(undefined),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  squareB_3 = new visual.Rect ({
    win: psychoJS.window, name: 'squareB_3', 
    width: [0.25, 0.25][0], height: [0.25, 0.25][1],
    ori: 0.0, pos: [0.5, 0],
    lineWidth: 5.0, lineColor: new util.Color('lime'),
    fillColor: new util.Color(undefined),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  resp_LaS = new core.Mouse({
    win: psychoJS.window,
  });
  resp_LaS.mouseClock = new util.Clock();
  sound_1 = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: 0.5,
    });
  sound_1.setVolume(1.0);
  // Initialize components for Routine "confidence"
  confidenceClock = new util.Clock();
  question_confidence = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_confidence',
    text: 'How confident are you with your choice?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_confidence = new visual.Slider({
    win: psychoJS.window, name: 'slider_confidence',
    size: [1.1, 0.1], pos: [0, 0.0], units: 'height',
    labels: ["Nothing", "Absolutely"], ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('grey'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  psychoJS.window.mouseVisible = false;
  
  // Initialize components for Routine "valueA"
  valueAClock = new util.Clock();
  question_valueA = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_valueA',
    text: 'How would you value this option in the given context?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('Black'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_valueA = new visual.Slider({
    win: psychoJS.window, name: 'slider_valueA',
    size: [1, 0.05], pos: [0, (- 0.2)], units: 'height',
    labels: ["-", "+"], ticks: [(- 10), (- 9), (- 8), (- 7), (- 6), (- 5), (- 4), (- 3), (- 2), (- 1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('grey'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  stimA_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimA_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Initialize components for Routine "valueB"
  valueBClock = new util.Clock();
  question_valueB = new visual.TextStim({
    win: psychoJS.window,
    name: 'question_valueB',
    text: 'How would you value this option in the given context?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('Black'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_valueB = new visual.Slider({
    win: psychoJS.window, name: 'slider_valueB',
    size: [1.0, 0.05], pos: [0, (- 0.2)], units: 'height',
    labels: ["-", "+"], ticks: [(- 10), (- 9), (- 8), (- 7), (- 6), (- 5), (- 4), (- 3), (- 2), (- 1), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('Red'), lineColor: new util.Color('grey'), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  stimB_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stimB_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var context_instructionsComponents;
function context_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'context_instructions'-------
    t = 0;
    context_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse
    gotValidClick = false; // until a click is received
    psychoJS.window.mouseVisible = false;
    
    // keep track of which components have finished
    context_instructionsComponents = [];
    context_instructionsComponents.push(Disclaimer_2);
    context_instructionsComponents.push(mouse);
    
    for (const thisComponent of context_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
function context_instructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'context_instructions'-------
    // get current time
    t = context_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Disclaimer_2* updates
    if (t >= 0.0 && Disclaimer_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Disclaimer_2.tStart = t;  // (not accounting for frame time here)
      Disclaimer_2.frameNStart = frameN;  // exact frame index
      
      Disclaimer_2.setAutoDraw(true);
    }

    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    psychoJS.window.mouseVisible = false;
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of context_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function context_instructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'context_instructions'-------
    for (const thisComponent of context_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse.getPos();
    _mouseButtons = mouse.getPressed();
    psychoJS.experiment.addData('mouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse.rightButton', _mouseButtons[2]);
    // the Routine "context_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var FP_instructionsComponents;
function FP_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'FP_instructions'-------
    t = 0;
    FP_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_2
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    FP_instructionsComponents = [];
    FP_instructionsComponents.push(Disclaimer_3);
    FP_instructionsComponents.push(FixationCross_2);
    FP_instructionsComponents.push(mouse_2);
    
    for (const thisComponent of FP_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function FP_instructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'FP_instructions'-------
    // get current time
    t = FP_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Disclaimer_3* updates
    if (t >= 0.0 && Disclaimer_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Disclaimer_3.tStart = t;  // (not accounting for frame time here)
      Disclaimer_3.frameNStart = frameN;  // exact frame index
      
      Disclaimer_3.setAutoDraw(true);
    }

    
    // *FixationCross_2* updates
    if (t >= 0 && FixationCross_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FixationCross_2.tStart = t;  // (not accounting for frame time here)
      FixationCross_2.frameNStart = frameN;  // exact frame index
      
      FixationCross_2.setAutoDraw(true);
    }

    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of FP_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function FP_instructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'FP_instructions'-------
    for (const thisComponent of FP_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_2.getPos();
    _mouseButtons = mouse_2.getPressed();
    psychoJS.experiment.addData('mouse_2.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_2.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_2.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_2.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_2.rightButton', _mouseButtons[2]);
    // the Routine "FP_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var decision_instructionsComponents;
function decision_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'decision_instructions'-------
    t = 0;
    decision_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_3
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    decision_instructionsComponents = [];
    decision_instructionsComponents.push(Disclaimer_4);
    decision_instructionsComponents.push(mouse_3);
    
    for (const thisComponent of decision_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function decision_instructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'decision_instructions'-------
    // get current time
    t = decision_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Disclaimer_4* updates
    if (t >= 0.0 && Disclaimer_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Disclaimer_4.tStart = t;  // (not accounting for frame time here)
      Disclaimer_4.frameNStart = frameN;  // exact frame index
      
      Disclaimer_4.setAutoDraw(true);
    }

    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of decision_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function decision_instructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'decision_instructions'-------
    for (const thisComponent of decision_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_3.getPos();
    _mouseButtons = mouse_3.getPressed();
    psychoJS.experiment.addData('mouse_3.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_3.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_3.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_3.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_3.rightButton', _mouseButtons[2]);
    // the Routine "decision_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_4
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(Disclaimer);
    instructionsComponents.push(mouse_4);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions'-------
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Disclaimer* updates
    if (t >= 0.0 && Disclaimer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Disclaimer.tStart = t;  // (not accounting for frame time here)
      Disclaimer.frameNStart = frameN;  // exact frame index
      
      Disclaimer.setAutoDraw(true);
    }

    // *mouse_4* updates
    if (t >= 0.0 && mouse_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_4.tStart = t;  // (not accounting for frame time here)
      mouse_4.frameNStart = frameN;  // exact frame index
      
      mouse_4.status = PsychoJS.Status.STARTED;
      mouse_4.mouseClock.reset();
      prevButtonState = mouse_4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_4.getPos();
    _mouseButtons = mouse_4.getPressed();
    psychoJS.experiment.addData('mouse_4.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_4.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_4.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_4.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_4.rightButton', _mouseButtons[2]);
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trial_exampleComponents;
function trial_exampleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial_example'-------
    t = 0;
    trial_exampleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(41.000000);
    // update component parameters for each repeat
    Context_ex.setText('Where would you spend a week with your parents-in-law?');
    stimA_ex.setImage('res/minefield.jpg');
    sound_3.secs=0.5;
    sound_3.setVolume(1.0);
    // setup some python lists for storing info about the resp_Ex
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    trial_exampleComponents = [];
    trial_exampleComponents.push(example_instr);
    trial_exampleComponents.push(Context_ex);
    trial_exampleComponents.push(FC_ex);
    trial_exampleComponents.push(stimA_ex);
    trial_exampleComponents.push(stimB_ex);
    trial_exampleComponents.push(squareA_ex);
    trial_exampleComponents.push(squareB_ex);
    trial_exampleComponents.push(sound_3);
    trial_exampleComponents.push(resp_Ex);
    trial_exampleComponents.push(tip_ex);
    
    for (const thisComponent of trial_exampleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trial_exampleRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial_example'-------
    // get current time
    t = trial_exampleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *example_instr* updates
    if (t >= 0.0 && example_instr.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      example_instr.tStart = t;  // (not accounting for frame time here)
      example_instr.frameNStart = frameN;  // exact frame index
      
      example_instr.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (example_instr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      example_instr.setAutoDraw(false);
    }
    
    // *Context_ex* updates
    if (t >= 3 && Context_ex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Context_ex.tStart = t;  // (not accounting for frame time here)
      Context_ex.frameNStart = frameN;  // exact frame index
      
      Context_ex.setAutoDraw(true);
    }

    frameRemains = 3 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Context_ex.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Context_ex.setAutoDraw(false);
    }
    
    // *FC_ex* updates
    if (t >= 7 && FC_ex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FC_ex.tStart = t;  // (not accounting for frame time here)
      FC_ex.frameNStart = frameN;  // exact frame index
      
      FC_ex.setAutoDraw(true);
    }

    frameRemains = 7 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (FC_ex.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      FC_ex.setAutoDraw(false);
    }
    
    // *stimA_ex* updates
    if (t >= 8 && stimA_ex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimA_ex.tStart = t;  // (not accounting for frame time here)
      stimA_ex.frameNStart = frameN;  // exact frame index
      
      stimA_ex.setAutoDraw(true);
    }

    frameRemains = 8 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stimA_ex.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stimA_ex.setAutoDraw(false);
    }
    
    // *stimB_ex* updates
    if (t >= 8 && stimB_ex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimB_ex.tStart = t;  // (not accounting for frame time here)
      stimB_ex.frameNStart = frameN;  // exact frame index
      
      stimB_ex.setAutoDraw(true);
    }

    frameRemains = 8 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stimB_ex.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stimB_ex.setAutoDraw(false);
    }
    
    // *squareA_ex* updates
    if (t >= 8 && squareA_ex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      squareA_ex.tStart = t;  // (not accounting for frame time here)
      squareA_ex.frameNStart = frameN;  // exact frame index
      
      squareA_ex.setAutoDraw(true);
    }

    frameRemains = 8 + 33 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (squareA_ex.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      squareA_ex.setAutoDraw(false);
    }
    
    // *squareB_ex* updates
    if (t >= 8 && squareB_ex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      squareB_ex.tStart = t;  // (not accounting for frame time here)
      squareB_ex.frameNStart = frameN;  // exact frame index
      
      squareB_ex.setAutoDraw(true);
    }

    frameRemains = 8 + 33 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (squareB_ex.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      squareB_ex.setAutoDraw(false);
    }
    // start/stop sound_3
    if (t >= 13 && sound_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_3.tStart = t;  // (not accounting for frame time here)
      sound_3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_3.play(); });  // screen flip
      sound_3.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 13 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (0.5 > 0.5) {
        sound_3.stop();  // stop the sound (if longer than duration)
      }
      sound_3.status = PsychoJS.Status.FINISHED;
    }
    // *resp_Ex* updates
    if (t >= 13 && resp_Ex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_Ex.tStart = t;  // (not accounting for frame time here)
      resp_Ex.frameNStart = frameN;  // exact frame index
      
      resp_Ex.status = PsychoJS.Status.STARTED;
      resp_Ex.mouseClock.reset();
      prevButtonState = resp_Ex.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 13 + 28 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (resp_Ex.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      resp_Ex.status = PsychoJS.Status.FINISHED;
  }
    if (resp_Ex.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = resp_Ex.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *tip_ex* updates
    if (t >= 13 && tip_ex.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tip_ex.tStart = t;  // (not accounting for frame time here)
      tip_ex.frameNStart = frameN;  // exact frame index
      
      tip_ex.setAutoDraw(true);
    }

    frameRemains = 13 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (tip_ex.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      tip_ex.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_exampleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_exampleRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial_example'-------
    for (const thisComponent of trial_exampleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    sound_3.stop();  // ensure sound has stopped at end of routine
    // store data for psychoJS.experiment (ExperimentHandler)
    return Scheduler.Event.NEXT;
  };
}


var assessment_exComponents;
function assessment_exRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'assessment_ex'-------
    t = 0;
    assessment_exClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.000000);
    // update component parameters for each repeat
    slider_confidence_2.reset()
    psychoJS.window.mouseVisible = true;
    
    // keep track of which components have finished
    assessment_exComponents = [];
    assessment_exComponents.push(question_confidence_2);
    assessment_exComponents.push(slider_confidence_2);
    assessment_exComponents.push(tip_ex_2);
    
    for (const thisComponent of assessment_exComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function assessment_exRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'assessment_ex'-------
    // get current time
    t = assessment_exClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *question_confidence_2* updates
    if (t >= 0.0 && question_confidence_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_confidence_2.tStart = t;  // (not accounting for frame time here)
      question_confidence_2.frameNStart = frameN;  // exact frame index
      
      question_confidence_2.setAutoDraw(true);
    }

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((question_confidence_2.status === PsychoJS.Status.STARTED || question_confidence_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      question_confidence_2.setAutoDraw(false);
    }
    
    // *slider_confidence_2* updates
    if (t >= 0.1 && slider_confidence_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_confidence_2.tStart = t;  // (not accounting for frame time here)
      slider_confidence_2.frameNStart = frameN;  // exact frame index
      
      slider_confidence_2.setAutoDraw(true);
    }

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((slider_confidence_2.status === PsychoJS.Status.STARTED || slider_confidence_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      slider_confidence_2.setAutoDraw(false);
    }
    
    // Check slider_confidence_2 for response to end routine
    if (slider_confidence_2.getRating() !== undefined && slider_confidence_2.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *tip_ex_2* updates
    if (t >= 0 && tip_ex_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      tip_ex_2.tStart = t;  // (not accounting for frame time here)
      tip_ex_2.frameNStart = frameN;  // exact frame index
      
      tip_ex_2.setAutoDraw(true);
    }

    frameRemains = 0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (tip_ex_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      tip_ex_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of assessment_exComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function assessment_exRoutineEnd() {
  return async function () {
    //------Ending Routine 'assessment_ex'-------
    for (const thisComponent of assessment_exComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_confidence_2.response', slider_confidence_2.getRating());
    psychoJS.experiment.addData('slider_confidence_2.rt', slider_confidence_2.getRT());
    return Scheduler.Event.NEXT;
  };
}


var valueA_exComponents;
function valueA_exRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'valueA_ex'-------
    t = 0;
    valueA_exClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.000000);
    // update component parameters for each repeat
    slider_valueA_2.reset()
    stimA_4.setImage('res/minefield.jpg');
    // keep track of which components have finished
    valueA_exComponents = [];
    valueA_exComponents.push(question_valueA_2);
    valueA_exComponents.push(slider_valueA_2);
    valueA_exComponents.push(stimA_4);
    
    for (const thisComponent of valueA_exComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function valueA_exRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'valueA_ex'-------
    // get current time
    t = valueA_exClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *question_valueA_2* updates
    if (t >= 0.0 && question_valueA_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_valueA_2.tStart = t;  // (not accounting for frame time here)
      question_valueA_2.frameNStart = frameN;  // exact frame index
      
      question_valueA_2.setAutoDraw(true);
    }

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((question_valueA_2.status === PsychoJS.Status.STARTED || question_valueA_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      question_valueA_2.setAutoDraw(false);
    }
    
    // *slider_valueA_2* updates
    if (t >= 0.0 && slider_valueA_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_valueA_2.tStart = t;  // (not accounting for frame time here)
      slider_valueA_2.frameNStart = frameN;  // exact frame index
      
      slider_valueA_2.setAutoDraw(true);
    }

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((slider_valueA_2.status === PsychoJS.Status.STARTED || slider_valueA_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      slider_valueA_2.setAutoDraw(false);
    }
    
    // Check slider_valueA_2 for response to end routine
    if (slider_valueA_2.getRating() !== undefined && slider_valueA_2.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *stimA_4* updates
    if (t >= 0 && stimA_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimA_4.tStart = t;  // (not accounting for frame time here)
      stimA_4.frameNStart = frameN;  // exact frame index
      
      stimA_4.setAutoDraw(true);
    }

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((stimA_4.status === PsychoJS.Status.STARTED || stimA_4.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      stimA_4.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of valueA_exComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function valueA_exRoutineEnd() {
  return async function () {
    //------Ending Routine 'valueA_ex'-------
    for (const thisComponent of valueA_exComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var valueB_exComponents;
function valueB_exRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'valueB_ex'-------
    t = 0;
    valueB_exClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.000000);
    // update component parameters for each repeat
    slider_valueB_2.reset()
    stimB_4.setImage('res/sexshop.jpg');
    // keep track of which components have finished
    valueB_exComponents = [];
    valueB_exComponents.push(question_valueB_2);
    valueB_exComponents.push(slider_valueB_2);
    valueB_exComponents.push(stimB_4);
    
    for (const thisComponent of valueB_exComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function valueB_exRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'valueB_ex'-------
    // get current time
    t = valueB_exClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *question_valueB_2* updates
    if (t >= 0.0 && question_valueB_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_valueB_2.tStart = t;  // (not accounting for frame time here)
      question_valueB_2.frameNStart = frameN;  // exact frame index
      
      question_valueB_2.setAutoDraw(true);
    }

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((question_valueB_2.status === PsychoJS.Status.STARTED || question_valueB_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      question_valueB_2.setAutoDraw(false);
    }
    
    // *slider_valueB_2* updates
    if (t >= 0.0 && slider_valueB_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_valueB_2.tStart = t;  // (not accounting for frame time here)
      slider_valueB_2.frameNStart = frameN;  // exact frame index
      
      slider_valueB_2.setAutoDraw(true);
    }

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((slider_valueB_2.status === PsychoJS.Status.STARTED || slider_valueB_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      slider_valueB_2.setAutoDraw(false);
    }
    
    // Check slider_valueB_2 for response to end routine
    if (slider_valueB_2.getRating() !== undefined && slider_valueB_2.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *stimB_4* updates
    if (t >= 0 && stimB_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimB_4.tStart = t;  // (not accounting for frame time here)
      stimB_4.frameNStart = frameN;  // exact frame index
      
      stimB_4.setAutoDraw(true);
    }

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((stimB_4.status === PsychoJS.Status.STARTED || stimB_4.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      stimB_4.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of valueB_exComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function valueB_exRoutineEnd() {
  return async function () {
    //------Ending Routine 'valueB_ex'-------
    for (const thisComponent of valueB_exComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.window.mouseVisible = false;
    
    return Scheduler.Event.NEXT;
  };
}


var cal_instructionsComponents;
function cal_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'cal_instructions'-------
    t = 0;
    cal_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_5
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    cal_instructionsComponents = [];
    cal_instructionsComponents.push(calibration_txt);
    cal_instructionsComponents.push(mouse_5);
    
    for (const thisComponent of cal_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function cal_instructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'cal_instructions'-------
    // get current time
    t = cal_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *calibration_txt* updates
    if (t >= 0.0 && calibration_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      calibration_txt.tStart = t;  // (not accounting for frame time here)
      calibration_txt.frameNStart = frameN;  // exact frame index
      
      calibration_txt.setAutoDraw(true);
    }

    // *mouse_5* updates
    if (t >= 0.0 && mouse_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_5.tStart = t;  // (not accounting for frame time here)
      mouse_5.frameNStart = frameN;  // exact frame index
      
      mouse_5.status = PsychoJS.Status.STARTED;
      mouse_5.mouseClock.reset();
      prevButtonState = mouse_5.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_5.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_5.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of cal_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cal_instructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'cal_instructions'-------
    for (const thisComponent of cal_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = mouse_5.getPos();
    _mouseButtons = mouse_5.getPressed();
    psychoJS.experiment.addData('mouse_5.x', _mouseXYs[0]);
    psychoJS.experiment.addData('mouse_5.y', _mouseXYs[1]);
    psychoJS.experiment.addData('mouse_5.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('mouse_5.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('mouse_5.rightButton', _mouseButtons[2]);
    // the Routine "cal_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: '160Loop.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(LookAtSRoutineBegin(snapshot));
      trialsLoopScheduler.add(LookAtSRoutineEachFrame());
      trialsLoopScheduler.add(LookAtSRoutineEnd());
      trialsLoopScheduler.add(confidenceRoutineBegin(snapshot));
      trialsLoopScheduler.add(confidenceRoutineEachFrame());
      trialsLoopScheduler.add(confidenceRoutineEnd());
      trialsLoopScheduler.add(valueARoutineBegin(snapshot));
      trialsLoopScheduler.add(valueARoutineEachFrame());
      trialsLoopScheduler.add(valueARoutineEnd());
      trialsLoopScheduler.add(valueBRoutineBegin(snapshot));
      trialsLoopScheduler.add(valueBRoutineEachFrame());
      trialsLoopScheduler.add(valueBRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var trial_counter;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(8.000000);
    // update component parameters for each repeat
    ContextPresentation.setText(written_context);
    stimA.setImage(imageA);
    stimB.setImage(imageB);
    trial_counter = (trial_counter + 1);
    console.log(trial_counter);
    
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(ContextPresentation);
    trialComponents.push(FixationCross);
    trialComponents.push(stimA);
    trialComponents.push(stimB);
    trialComponents.push(squareA);
    trialComponents.push(squareB);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ContextPresentation* updates
    if (t >= 0 && ContextPresentation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ContextPresentation.tStart = t;  // (not accounting for frame time here)
      ContextPresentation.frameNStart = frameN;  // exact frame index
      
      ContextPresentation.setAutoDraw(true);
    }

    frameRemains = 0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ContextPresentation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ContextPresentation.setAutoDraw(false);
    }
    
    // *FixationCross* updates
    if (t >= 4 && FixationCross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FixationCross.tStart = t;  // (not accounting for frame time here)
      FixationCross.frameNStart = frameN;  // exact frame index
      
      FixationCross.setAutoDraw(true);
    }

    frameRemains = 4 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (FixationCross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      FixationCross.setAutoDraw(false);
    }
    
    // *stimA* updates
    if (t >= 5 && stimA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimA.tStart = t;  // (not accounting for frame time here)
      stimA.frameNStart = frameN;  // exact frame index
      
      stimA.setAutoDraw(true);
    }

    frameRemains = 5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stimA.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stimA.setAutoDraw(false);
    }
    
    // *stimB* updates
    if (t >= 5 && stimB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimB.tStart = t;  // (not accounting for frame time here)
      stimB.frameNStart = frameN;  // exact frame index
      
      stimB.setAutoDraw(true);
    }

    frameRemains = 5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stimB.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stimB.setAutoDraw(false);
    }
    
    // *squareA* updates
    if (t >= 5 && squareA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      squareA.tStart = t;  // (not accounting for frame time here)
      squareA.frameNStart = frameN;  // exact frame index
      
      squareA.setAutoDraw(true);
    }

    frameRemains = 5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (squareA.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      squareA.setAutoDraw(false);
    }
    
    // *squareB* updates
    if (t >= 5 && squareB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      squareB.tStart = t;  // (not accounting for frame time here)
      squareB.frameNStart = frameN;  // exact frame index
      
      squareB.setAutoDraw(true);
    }

    frameRemains = 5 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (squareB.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      squareB.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var LookAtSComponents;
function LookAtSRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'LookAtS'-------
    t = 0;
    LookAtSClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(30.000000);
    // update component parameters for each repeat
    stimA_3.setImage(imageA);
    stimB_3.setImage(imageB);
    // setup some python lists for storing info about the resp_LaS
    gotValidClick = false; // until a click is received
    sound_1.secs=0.5;
    sound_1.setVolume(1.0);
    // keep track of which components have finished
    LookAtSComponents = [];
    LookAtSComponents.push(stimA_3);
    LookAtSComponents.push(stimB_3);
    LookAtSComponents.push(squareA_5);
    LookAtSComponents.push(squareB_3);
    LookAtSComponents.push(resp_LaS);
    LookAtSComponents.push(sound_1);
    
    for (const thisComponent of LookAtSComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function LookAtSRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'LookAtS'-------
    // get current time
    t = LookAtSClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stimA_3* updates
    if (t >= 0 && stimA_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimA_3.tStart = t;  // (not accounting for frame time here)
      stimA_3.frameNStart = frameN;  // exact frame index
      
      stimA_3.setAutoDraw(true);
    }

    frameRemains = 0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stimA_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stimA_3.setAutoDraw(false);
    }
    
    if (stimA_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      stimA_3.setSize([(0.25 * LaN), (0.25 * LaN)], false);
    }
    
    // *stimB_3* updates
    if (t >= 0 && stimB_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimB_3.tStart = t;  // (not accounting for frame time here)
      stimB_3.frameNStart = frameN;  // exact frame index
      
      stimB_3.setAutoDraw(true);
    }

    frameRemains = 0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stimB_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stimB_3.setAutoDraw(false);
    }
    
    if (stimB_3.status === PsychoJS.Status.STARTED){ // only update if being drawn
      stimB_3.setSize([(0.25 * LaN), (0.25 * LaN)], false);
    }
    
    // *squareA_5* updates
    if (t >= 0 && squareA_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      squareA_5.tStart = t;  // (not accounting for frame time here)
      squareA_5.frameNStart = frameN;  // exact frame index
      
      squareA_5.setAutoDraw(true);
    }

    frameRemains = 0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (squareA_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      squareA_5.setAutoDraw(false);
    }
    
    // *squareB_3* updates
    if (t >= 0 && squareB_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      squareB_3.tStart = t;  // (not accounting for frame time here)
      squareB_3.frameNStart = frameN;  // exact frame index
      
      squareB_3.setAutoDraw(true);
    }

    frameRemains = 0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (squareB_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      squareB_3.setAutoDraw(false);
    }
    // *resp_LaS* updates
    if (t >= 5 && resp_LaS.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      resp_LaS.tStart = t;  // (not accounting for frame time here)
      resp_LaS.frameNStart = frameN;  // exact frame index
      
      resp_LaS.status = PsychoJS.Status.STARTED;
      resp_LaS.mouseClock.reset();
      prevButtonState = resp_LaS.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 5 + 25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (resp_LaS.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      resp_LaS.status = PsychoJS.Status.FINISHED;
  }
    if (resp_LaS.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = resp_LaS.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // start/stop sound_1
    if (t >= 5 && sound_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_1.tStart = t;  // (not accounting for frame time here)
      sound_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_1.play(); });  // screen flip
      sound_1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (0.5 > 0.5) {
        sound_1.stop();  // stop the sound (if longer than duration)
      }
      sound_1.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of LookAtSComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function LookAtSRoutineEnd() {
  return async function () {
    //------Ending Routine 'LookAtS'-------
    for (const thisComponent of LookAtSComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = resp_LaS.getPos();
    _mouseButtons = resp_LaS.getPressed();
    psychoJS.experiment.addData('resp_LaS.x', _mouseXYs[0]);
    psychoJS.experiment.addData('resp_LaS.y', _mouseXYs[1]);
    psychoJS.experiment.addData('resp_LaS.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('resp_LaS.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('resp_LaS.rightButton', _mouseButtons[2]);
    sound_1.stop();  // ensure sound has stopped at end of routine
    return Scheduler.Event.NEXT;
  };
}


var confidenceComponents;
function confidenceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'confidence'-------
    t = 0;
    confidenceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.000000);
    // update component parameters for each repeat
    slider_confidence.reset()
    psychoJS.window.mouseVisible = true;
    
    // keep track of which components have finished
    confidenceComponents = [];
    confidenceComponents.push(question_confidence);
    confidenceComponents.push(slider_confidence);
    
    for (const thisComponent of confidenceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function confidenceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'confidence'-------
    // get current time
    t = confidenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *question_confidence* updates
    if (t >= 0.0 && question_confidence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_confidence.tStart = t;  // (not accounting for frame time here)
      question_confidence.frameNStart = frameN;  // exact frame index
      
      question_confidence.setAutoDraw(true);
    }

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((question_confidence.status === PsychoJS.Status.STARTED || question_confidence.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      question_confidence.setAutoDraw(false);
    }
    
    // *slider_confidence* updates
    if (t >= 0.1 && slider_confidence.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_confidence.tStart = t;  // (not accounting for frame time here)
      slider_confidence.frameNStart = frameN;  // exact frame index
      
      slider_confidence.setAutoDraw(true);
    }

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((slider_confidence.status === PsychoJS.Status.STARTED || slider_confidence.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      slider_confidence.setAutoDraw(false);
    }
    
    // Check slider_confidence for response to end routine
    if (slider_confidence.getRating() !== undefined && slider_confidence.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of confidenceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function confidenceRoutineEnd() {
  return async function () {
    //------Ending Routine 'confidence'-------
    for (const thisComponent of confidenceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_confidence.response', slider_confidence.getRating());
    psychoJS.experiment.addData('slider_confidence.rt', slider_confidence.getRT());
    return Scheduler.Event.NEXT;
  };
}


var valueAComponents;
function valueARoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'valueA'-------
    t = 0;
    valueAClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.000000);
    // update component parameters for each repeat
    slider_valueA.reset()
    stimA_2.setImage(imageA);
    // keep track of which components have finished
    valueAComponents = [];
    valueAComponents.push(question_valueA);
    valueAComponents.push(slider_valueA);
    valueAComponents.push(stimA_2);
    
    for (const thisComponent of valueAComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function valueARoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'valueA'-------
    // get current time
    t = valueAClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *question_valueA* updates
    if (t >= 0.0 && question_valueA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_valueA.tStart = t;  // (not accounting for frame time here)
      question_valueA.frameNStart = frameN;  // exact frame index
      
      question_valueA.setAutoDraw(true);
    }

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((question_valueA.status === PsychoJS.Status.STARTED || question_valueA.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      question_valueA.setAutoDraw(false);
    }
    
    // *slider_valueA* updates
    if (t >= 0.0 && slider_valueA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_valueA.tStart = t;  // (not accounting for frame time here)
      slider_valueA.frameNStart = frameN;  // exact frame index
      
      slider_valueA.setAutoDraw(true);
    }

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((slider_valueA.status === PsychoJS.Status.STARTED || slider_valueA.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      slider_valueA.setAutoDraw(false);
    }
    
    // Check slider_valueA for response to end routine
    if (slider_valueA.getRating() !== undefined && slider_valueA.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *stimA_2* updates
    if (t >= 0 && stimA_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimA_2.tStart = t;  // (not accounting for frame time here)
      stimA_2.frameNStart = frameN;  // exact frame index
      
      stimA_2.setAutoDraw(true);
    }

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((stimA_2.status === PsychoJS.Status.STARTED || stimA_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      stimA_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of valueAComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function valueARoutineEnd() {
  return async function () {
    //------Ending Routine 'valueA'-------
    for (const thisComponent of valueAComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_valueA.response', slider_valueA.getRating());
    return Scheduler.Event.NEXT;
  };
}


var valueBComponents;
function valueBRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'valueB'-------
    t = 0;
    valueBClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.000000);
    // update component parameters for each repeat
    slider_valueB.reset()
    stimB_2.setImage(imageB);
    // keep track of which components have finished
    valueBComponents = [];
    valueBComponents.push(question_valueB);
    valueBComponents.push(slider_valueB);
    valueBComponents.push(stimB_2);
    
    for (const thisComponent of valueBComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function valueBRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'valueB'-------
    // get current time
    t = valueBClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *question_valueB* updates
    if (t >= 0.0 && question_valueB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_valueB.tStart = t;  // (not accounting for frame time here)
      question_valueB.frameNStart = frameN;  // exact frame index
      
      question_valueB.setAutoDraw(true);
    }

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((question_valueB.status === PsychoJS.Status.STARTED || question_valueB.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      question_valueB.setAutoDraw(false);
    }
    
    // *slider_valueB* updates
    if (t >= 0.0 && slider_valueB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_valueB.tStart = t;  // (not accounting for frame time here)
      slider_valueB.frameNStart = frameN;  // exact frame index
      
      slider_valueB.setAutoDraw(true);
    }

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((slider_valueB.status === PsychoJS.Status.STARTED || slider_valueB.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      slider_valueB.setAutoDraw(false);
    }
    
    // Check slider_valueB for response to end routine
    if (slider_valueB.getRating() !== undefined && slider_valueB.status === PsychoJS.Status.STARTED) {
      continueRoutine = false; }
    
    // *stimB_2* updates
    if (t >= 0 && stimB_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stimB_2.tStart = t;  // (not accounting for frame time here)
      stimB_2.frameNStart = frameN;  // exact frame index
      
      stimB_2.setAutoDraw(true);
    }

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((stimB_2.status === PsychoJS.Status.STARTED || stimB_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      stimB_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of valueBComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function valueBRoutineEnd() {
  return async function () {
    //------Ending Routine 'valueB'-------
    for (const thisComponent of valueBComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('slider_valueB.response', slider_valueB.getRating());
    psychoJS.experiment.addData('slider_valueB.rt', slider_valueB.getRT());
    psychoJS.window.mouseVisible = false;
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
