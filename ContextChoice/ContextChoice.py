#!/usr/bin/env python
# -*- coding: utf-8 -*-
from __future__ import absolute_import, division
from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, iohub, hardware
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard
from psychopy.hardware import emotiv



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'ContextChoice'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Volumes/GoogleDrive/Mi unidad/_BRAIN+COGNITION/0_TFM/Code/ContextChoice/Exp.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1440, 900], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[1,1,1], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = 'eyetracker.hw.mouse.EyeTracker'
ioConfig = {
    ioDevice: {
        'name': 'tracker',
        'controls': {
            'move': [],
            'blink':('MIDDLE_BUTTON',),
            'saccade_threshold': 0.5,
        }
    }
}
ioSession = '1'
if 'session' in expInfo:
    ioSession = str(expInfo['session'])
ioServer = io.launchHubServer(window=win, experiment_code='ContextChoice', session_code=ioSession, datastore_name=filename, **ioConfig)
eyetracker = ioServer.getDevice('tracker')

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
Disclaimer = visual.TextStim(win=win, name='Disclaimer',
    text='Here is where the disclaimer and explanation of the task will be \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quam lacus, aliquet id eros ac, sollicitudin gravida augue. Sed scelerisque arcu massa, id ultricies libero aliquet non. Fusce arcu lorem.',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "trial"
trialClock = core.Clock()
ContextPresentation = visual.TextStim(win=win, name='ContextPresentation',
    text='',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
FixationCross = visual.ShapeStim(
    win=win, name='FixationCross', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0),
    lineWidth=0.6,     colorSpace='rgb',  lineColor='black', fillColor='black',
    opacity=None, depth=-1.0, interpolate=True)
stimA = visual.ImageStim(
    win=win,
    name='stimA', 
    image='sin', mask=None,
    ori=0.0, pos=(-0.5, 0), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)
stimB = visual.ImageStim(
    win=win,
    name='stimB', 
    image='sin', mask=None,
    ori=0.0, pos=(0.5, 0), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-3.0)
squareA = visual.Rect(
    win=win, name='squareA',
    width=(0.25, 0.25)[0], height=(0.25, 0.25)[1],
    ori=0.0, pos=(-0.5, 0),
    lineWidth=5.0,     colorSpace='rgb',  lineColor='lime', fillColor=None,
    opacity=None, depth=-4.0, interpolate=True)
squareB = visual.Rect(
    win=win, name='squareB',
    width=(0.25, 0.25)[0], height=(0.25, 0.25)[1],
    ori=0.0, pos=(0.5, 0),
    lineWidth=5.0,     colorSpace='rgb',  lineColor='lime', fillColor=None,
    opacity=None, depth=-5.0, interpolate=True)
key_resp = keyboard.Keyboard()
recEYE = hardware.eyetracker.EyetrackerControl(
    server=ioServer,
    tracker=eyetracker
)

# Initialize components for Routine "confidence"
confidenceClock = core.Clock()
question_confidence = visual.TextStim(win=win, name='question_confidence',
    text='How confident are you with your choice?',
    font='Open Sans',
    pos=(0, 0.1), height=0.05, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
slider_confidence = visual.Slider(win=win, name='slider_confidence',
    startValue=None, size=(1.1, 0.1), pos=(0, 0.0), units=None,
    labels=("Nothing","Absolutely"), ticks=(0,1, 2, 3, 4, 5,6,7,8,9,10), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    color='LightGray', fillColor='Red', borderColor='grey', colorSpace='rgb',
    font='Open Sans', labelHeight=0.05,
    flip=False, depth=-1, readOnly=False)

# Initialize components for Routine "valueA"
valueAClock = core.Clock()
question_valueA = visual.TextStim(win=win, name='question_valueA',
    text='How would you value this option in the given context?',
    font='Open Sans',
    pos=(0, 0.3), height=0.05, wrapWidth=None, ori=0.0, 
    color='Black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
slider_valueA = visual.Slider(win=win, name='slider_valueA',
    startValue=None, size=(1, 0.05), pos=(0, -0.2), units=None,
    labels=("Hate it","Love it"), ticks=(-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1, 2, 3, 4, 5,6,7,8,9,10), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    color='LightGray', fillColor='Red', borderColor='grey', colorSpace='rgb',
    font='Open Sans', labelHeight=0.05,
    flip=False, depth=-1, readOnly=False)
stimA_2 = visual.ImageStim(
    win=win,
    name='stimA_2', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)

# Initialize components for Routine "valueB"
valueBClock = core.Clock()
question_valueB = visual.TextStim(win=win, name='question_valueB',
    text='How would you value this option in the given context?',
    font='Open Sans',
    pos=(0, 0.3), height=0.05, wrapWidth=None, ori=0.0, 
    color='Black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
slider_valueB = visual.Slider(win=win, name='slider_valueB',
    startValue=None, size=(1.0, 0.05), pos=(0, -0.2), units=None,
    labels=("Hate it","Love it"), ticks=(-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1, 2, 3, 4, 5,6,7,8,9,10), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    color='LightGray', fillColor='Red', borderColor='grey', colorSpace='rgb',
    font='Open Sans', labelHeight=0.05,
    flip=False, depth=-1, readOnly=False)
stimB_2 = visual.ImageStim(
    win=win,
    name='stimB_2', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=-2.0)

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# -------Run Routine 'calibration'-------

# define target for calibration
calibrationTarget = visual.TargetStim(win, 
    name='calibrationTarget',
    radius=0.01, fillColor='', borderColor='black', lineWidth=2.0,
    innerRadius=0.0035, innerFillColor='green', innerBorderColor='black', innerLineWidth=2.0,
    colorSpace='rgb', units=None
)
# define parameters for calibration
calibration = hardware.eyetracker.EyetrackerCalibration(win, 
    eyetracker, calibrationTarget,
    units=None, colorSpace='rgb',
    progressMode='time', targetDur=1.5, expandScale=1.5,
    targetLayout='THREE_POINTS', randomisePos=True,
    movementAnimation=True, targetDelay=1.0
)
# run calibration
calibration.run()
# clear any keypresses from during calibration so they don't interfere with the experiment
defaultKeyboard.clearEvents()
# the Routine "calibration" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "instructions"-------
continueRoutine = True
routineTimer.add(2.000000)
# update component parameters for each repeat
# keep track of which components have finished
instructionsComponents = [Disclaimer]
for thisComponent in instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = instructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *Disclaimer* updates
    if Disclaimer.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        Disclaimer.frameNStart = frameN  # exact frame index
        Disclaimer.tStart = t  # local t and not account for scr refresh
        Disclaimer.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(Disclaimer, 'tStartRefresh')  # time at next scr refresh
        Disclaimer.setAutoDraw(True)
    if Disclaimer.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > Disclaimer.tStartRefresh + 2-frameTolerance:
            # keep track of stop time/frame for later
            Disclaimer.tStop = t  # not accounting for scr refresh
            Disclaimer.frameNStop = frameN  # exact frame index
            win.timeOnFlip(Disclaimer, 'tStopRefresh')  # time at next scr refresh
            Disclaimer.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions"-------
for thisComponent in instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('Disclaimer.started', Disclaimer.tStartRefresh)
thisExp.addData('Disclaimer.stopped', Disclaimer.tStopRefresh)

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1.0, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('DemoLoop.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "trial"-------
    continueRoutine = True
    routineTimer.add(13.000000)
    # update component parameters for each repeat
    ContextPresentation.setText(written_context)
    stimA.setImage(imageA)
    stimB.setImage(imageB)
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    # keep track of which components have finished
    trialComponents = [ContextPresentation, FixationCross, stimA, stimB, squareA, squareB, key_resp, recEYE]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "trial"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *ContextPresentation* updates
        if ContextPresentation.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            ContextPresentation.frameNStart = frameN  # exact frame index
            ContextPresentation.tStart = t  # local t and not account for scr refresh
            ContextPresentation.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(ContextPresentation, 'tStartRefresh')  # time at next scr refresh
            ContextPresentation.setAutoDraw(True)
        if ContextPresentation.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > ContextPresentation.tStartRefresh + 4.0-frameTolerance:
                # keep track of stop time/frame for later
                ContextPresentation.tStop = t  # not accounting for scr refresh
                ContextPresentation.frameNStop = frameN  # exact frame index
                win.timeOnFlip(ContextPresentation, 'tStopRefresh')  # time at next scr refresh
                ContextPresentation.setAutoDraw(False)
        
        # *FixationCross* updates
        if FixationCross.status == NOT_STARTED and tThisFlip >= 4-frameTolerance:
            # keep track of start time/frame for later
            FixationCross.frameNStart = frameN  # exact frame index
            FixationCross.tStart = t  # local t and not account for scr refresh
            FixationCross.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(FixationCross, 'tStartRefresh')  # time at next scr refresh
            FixationCross.setAutoDraw(True)
        if FixationCross.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > FixationCross.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                FixationCross.tStop = t  # not accounting for scr refresh
                FixationCross.frameNStop = frameN  # exact frame index
                win.timeOnFlip(FixationCross, 'tStopRefresh')  # time at next scr refresh
                FixationCross.setAutoDraw(False)
        
        # *stimA* updates
        if stimA.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
            # keep track of start time/frame for later
            stimA.frameNStart = frameN  # exact frame index
            stimA.tStart = t  # local t and not account for scr refresh
            stimA.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stimA, 'tStartRefresh')  # time at next scr refresh
            stimA.setAutoDraw(True)
        if stimA.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stimA.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                stimA.tStop = t  # not accounting for scr refresh
                stimA.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stimA, 'tStopRefresh')  # time at next scr refresh
                stimA.setAutoDraw(False)
        
        # *stimB* updates
        if stimB.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
            # keep track of start time/frame for later
            stimB.frameNStart = frameN  # exact frame index
            stimB.tStart = t  # local t and not account for scr refresh
            stimB.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stimB, 'tStartRefresh')  # time at next scr refresh
            stimB.setAutoDraw(True)
        if stimB.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stimB.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                stimB.tStop = t  # not accounting for scr refresh
                stimB.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stimB, 'tStopRefresh')  # time at next scr refresh
                stimB.setAutoDraw(False)
        
        # *squareA* updates
        if squareA.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
            # keep track of start time/frame for later
            squareA.frameNStart = frameN  # exact frame index
            squareA.tStart = t  # local t and not account for scr refresh
            squareA.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(squareA, 'tStartRefresh')  # time at next scr refresh
            squareA.setAutoDraw(True)
        if squareA.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > squareA.tStartRefresh + 8-frameTolerance:
                # keep track of stop time/frame for later
                squareA.tStop = t  # not accounting for scr refresh
                squareA.frameNStop = frameN  # exact frame index
                win.timeOnFlip(squareA, 'tStopRefresh')  # time at next scr refresh
                squareA.setAutoDraw(False)
        
        # *squareB* updates
        if squareB.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
            # keep track of start time/frame for later
            squareB.frameNStart = frameN  # exact frame index
            squareB.tStart = t  # local t and not account for scr refresh
            squareB.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(squareB, 'tStartRefresh')  # time at next scr refresh
            squareB.setAutoDraw(True)
        if squareB.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > squareB.tStartRefresh + 8-frameTolerance:
                # keep track of stop time/frame for later
                squareB.tStop = t  # not accounting for scr refresh
                squareB.frameNStop = frameN  # exact frame index
                win.timeOnFlip(squareB, 'tStopRefresh')  # time at next scr refresh
                squareB.setAutoDraw(False)
        
        # *key_resp* updates
        waitOnFlip = False
        if key_resp.status == NOT_STARTED and tThisFlip >= 9-frameTolerance:
            # keep track of start time/frame for later
            key_resp.frameNStart = frameN  # exact frame index
            key_resp.tStart = t  # local t and not account for scr refresh
            key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
            key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp.tStartRefresh + 4-frameTolerance:
                # keep track of stop time/frame for later
                key_resp.tStop = t  # not accounting for scr refresh
                key_resp.frameNStop = frameN  # exact frame index
                win.timeOnFlip(key_resp, 'tStopRefresh')  # time at next scr refresh
                key_resp.status = FINISHED
        if key_resp.status == STARTED and not waitOnFlip:
            theseKeys = key_resp.getKeys(keyList=['left', 'right'], waitRelease=False)
            _key_resp_allKeys.extend(theseKeys)
            if len(_key_resp_allKeys):
                key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                key_resp.rt = _key_resp_allKeys[-1].rt
                # a response ends the routine
                continueRoutine = False
        # *recEYE* updates
        if recEYE.status == NOT_STARTED and t >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            recEYE.frameNStart = frameN  # exact frame index
            recEYE.tStart = t  # local t and not account for scr refresh
            recEYE.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(recEYE, 'tStartRefresh')  # time at next scr refresh
            recEYE.status = STARTED
        if recEYE.status == STARTED:
            # is it time to stop? (based on local clock)
            if tThisFlip > 13-frameTolerance:
                # keep track of stop time/frame for later
                recEYE.tStop = t  # not accounting for scr refresh
                recEYE.frameNStop = frameN  # exact frame index
                win.timeOnFlip(recEYE, 'tStopRefresh')  # time at next scr refresh
                recEYE.status = FINISHED
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial"-------
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('ContextPresentation.started', ContextPresentation.tStartRefresh)
    trials.addData('ContextPresentation.stopped', ContextPresentation.tStopRefresh)
    trials.addData('FixationCross.started', FixationCross.tStartRefresh)
    trials.addData('FixationCross.stopped', FixationCross.tStopRefresh)
    trials.addData('stimA.started', stimA.tStartRefresh)
    trials.addData('stimA.stopped', stimA.tStopRefresh)
    trials.addData('stimB.started', stimB.tStartRefresh)
    trials.addData('stimB.stopped', stimB.tStopRefresh)
    trials.addData('squareA.started', squareA.tStartRefresh)
    trials.addData('squareA.stopped', squareA.tStopRefresh)
    trials.addData('squareB.started', squareB.tStartRefresh)
    trials.addData('squareB.stopped', squareB.tStopRefresh)
    # check responses
    if key_resp.keys in ['', [], None]:  # No response was made
        key_resp.keys = None
    trials.addData('key_resp.keys',key_resp.keys)
    if key_resp.keys != None:  # we had a response
        trials.addData('key_resp.rt', key_resp.rt)
    trials.addData('key_resp.started', key_resp.tStartRefresh)
    trials.addData('key_resp.stopped', key_resp.tStopRefresh)
    # make sure the eyetracker recording stops
    if recEYE.status != FINISHED:
        recEYE.status = FINISHED
    
    # ------Prepare to start Routine "confidence"-------
    continueRoutine = True
    routineTimer.add(4.000000)
    # update component parameters for each repeat
    slider_confidence.reset()
    # keep track of which components have finished
    confidenceComponents = [question_confidence, slider_confidence]
    for thisComponent in confidenceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    confidenceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "confidence"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = confidenceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=confidenceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *question_confidence* updates
        if question_confidence.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            question_confidence.frameNStart = frameN  # exact frame index
            question_confidence.tStart = t  # local t and not account for scr refresh
            question_confidence.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(question_confidence, 'tStartRefresh')  # time at next scr refresh
            question_confidence.setAutoDraw(True)
        if question_confidence.status == STARTED:
            # is it time to stop? (based on local clock)
            if tThisFlip > 4-frameTolerance:
                # keep track of stop time/frame for later
                question_confidence.tStop = t  # not accounting for scr refresh
                question_confidence.frameNStop = frameN  # exact frame index
                win.timeOnFlip(question_confidence, 'tStopRefresh')  # time at next scr refresh
                question_confidence.setAutoDraw(False)
        
        # *slider_confidence* updates
        if slider_confidence.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_confidence.frameNStart = frameN  # exact frame index
            slider_confidence.tStart = t  # local t and not account for scr refresh
            slider_confidence.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_confidence, 'tStartRefresh')  # time at next scr refresh
            slider_confidence.setAutoDraw(True)
        if slider_confidence.status == STARTED:
            # is it time to stop? (based on local clock)
            if tThisFlip > 4-frameTolerance:
                # keep track of stop time/frame for later
                slider_confidence.tStop = t  # not accounting for scr refresh
                slider_confidence.frameNStop = frameN  # exact frame index
                win.timeOnFlip(slider_confidence, 'tStopRefresh')  # time at next scr refresh
                slider_confidence.setAutoDraw(False)
        
        # Check slider_confidence for response to end routine
        if slider_confidence.getRating() is not None and slider_confidence.status == STARTED:
            continueRoutine = False
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in confidenceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "confidence"-------
    for thisComponent in confidenceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('question_confidence.started', question_confidence.tStartRefresh)
    trials.addData('question_confidence.stopped', question_confidence.tStopRefresh)
    trials.addData('slider_confidence.response', slider_confidence.getRating())
    trials.addData('slider_confidence.rt', slider_confidence.getRT())
    trials.addData('slider_confidence.started', slider_confidence.tStartRefresh)
    trials.addData('slider_confidence.stopped', slider_confidence.tStopRefresh)
    
    # ------Prepare to start Routine "valueA"-------
    continueRoutine = True
    routineTimer.add(4.000000)
    # update component parameters for each repeat
    slider_valueA.reset()
    stimA_2.setImage(imageA)
    # keep track of which components have finished
    valueAComponents = [question_valueA, slider_valueA, stimA_2]
    for thisComponent in valueAComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    valueAClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "valueA"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = valueAClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=valueAClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *question_valueA* updates
        if question_valueA.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            question_valueA.frameNStart = frameN  # exact frame index
            question_valueA.tStart = t  # local t and not account for scr refresh
            question_valueA.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(question_valueA, 'tStartRefresh')  # time at next scr refresh
            question_valueA.setAutoDraw(True)
        if question_valueA.status == STARTED:
            # is it time to stop? (based on local clock)
            if tThisFlip > 4-frameTolerance:
                # keep track of stop time/frame for later
                question_valueA.tStop = t  # not accounting for scr refresh
                question_valueA.frameNStop = frameN  # exact frame index
                win.timeOnFlip(question_valueA, 'tStopRefresh')  # time at next scr refresh
                question_valueA.setAutoDraw(False)
        
        # *slider_valueA* updates
        if slider_valueA.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_valueA.frameNStart = frameN  # exact frame index
            slider_valueA.tStart = t  # local t and not account for scr refresh
            slider_valueA.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_valueA, 'tStartRefresh')  # time at next scr refresh
            slider_valueA.setAutoDraw(True)
        if slider_valueA.status == STARTED:
            # is it time to stop? (based on local clock)
            if tThisFlip > 4-frameTolerance:
                # keep track of stop time/frame for later
                slider_valueA.tStop = t  # not accounting for scr refresh
                slider_valueA.frameNStop = frameN  # exact frame index
                win.timeOnFlip(slider_valueA, 'tStopRefresh')  # time at next scr refresh
                slider_valueA.setAutoDraw(False)
        
        # Check slider_valueA for response to end routine
        if slider_valueA.getRating() is not None and slider_valueA.status == STARTED:
            continueRoutine = False
        
        # *stimA_2* updates
        if stimA_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            stimA_2.frameNStart = frameN  # exact frame index
            stimA_2.tStart = t  # local t and not account for scr refresh
            stimA_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stimA_2, 'tStartRefresh')  # time at next scr refresh
            stimA_2.setAutoDraw(True)
        if stimA_2.status == STARTED:
            # is it time to stop? (based on local clock)
            if tThisFlip > 4-frameTolerance:
                # keep track of stop time/frame for later
                stimA_2.tStop = t  # not accounting for scr refresh
                stimA_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stimA_2, 'tStopRefresh')  # time at next scr refresh
                stimA_2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in valueAComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "valueA"-------
    for thisComponent in valueAComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('question_valueA.started', question_valueA.tStartRefresh)
    trials.addData('question_valueA.stopped', question_valueA.tStopRefresh)
    trials.addData('slider_valueA.response', slider_valueA.getRating())
    trials.addData('stimA_2.started', stimA_2.tStartRefresh)
    trials.addData('stimA_2.stopped', stimA_2.tStopRefresh)
    
    # ------Prepare to start Routine "valueB"-------
    continueRoutine = True
    routineTimer.add(4.000000)
    # update component parameters for each repeat
    slider_valueB.reset()
    stimB_2.setImage(imageB)
    # keep track of which components have finished
    valueBComponents = [question_valueB, slider_valueB, stimB_2]
    for thisComponent in valueBComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    valueBClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "valueB"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = valueBClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=valueBClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *question_valueB* updates
        if question_valueB.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            question_valueB.frameNStart = frameN  # exact frame index
            question_valueB.tStart = t  # local t and not account for scr refresh
            question_valueB.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(question_valueB, 'tStartRefresh')  # time at next scr refresh
            question_valueB.setAutoDraw(True)
        if question_valueB.status == STARTED:
            # is it time to stop? (based on local clock)
            if tThisFlip > 4-frameTolerance:
                # keep track of stop time/frame for later
                question_valueB.tStop = t  # not accounting for scr refresh
                question_valueB.frameNStop = frameN  # exact frame index
                win.timeOnFlip(question_valueB, 'tStopRefresh')  # time at next scr refresh
                question_valueB.setAutoDraw(False)
        
        # *slider_valueB* updates
        if slider_valueB.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            slider_valueB.frameNStart = frameN  # exact frame index
            slider_valueB.tStart = t  # local t and not account for scr refresh
            slider_valueB.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(slider_valueB, 'tStartRefresh')  # time at next scr refresh
            slider_valueB.setAutoDraw(True)
        if slider_valueB.status == STARTED:
            # is it time to stop? (based on local clock)
            if tThisFlip > 4-frameTolerance:
                # keep track of stop time/frame for later
                slider_valueB.tStop = t  # not accounting for scr refresh
                slider_valueB.frameNStop = frameN  # exact frame index
                win.timeOnFlip(slider_valueB, 'tStopRefresh')  # time at next scr refresh
                slider_valueB.setAutoDraw(False)
        
        # Check slider_valueB for response to end routine
        if slider_valueB.getRating() is not None and slider_valueB.status == STARTED:
            continueRoutine = False
        
        # *stimB_2* updates
        if stimB_2.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            stimB_2.frameNStart = frameN  # exact frame index
            stimB_2.tStart = t  # local t and not account for scr refresh
            stimB_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stimB_2, 'tStartRefresh')  # time at next scr refresh
            stimB_2.setAutoDraw(True)
        if stimB_2.status == STARTED:
            # is it time to stop? (based on local clock)
            if tThisFlip > 4-frameTolerance:
                # keep track of stop time/frame for later
                stimB_2.tStop = t  # not accounting for scr refresh
                stimB_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stimB_2, 'tStopRefresh')  # time at next scr refresh
                stimB_2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in valueBComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "valueB"-------
    for thisComponent in valueBComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('question_valueB.started', question_valueB.tStartRefresh)
    trials.addData('question_valueB.stopped', question_valueB.tStopRefresh)
    trials.addData('slider_valueB.response', slider_valueB.getRating())
    trials.addData('slider_valueB.rt', slider_valueB.getRT())
    trials.addData('slider_valueB.started', slider_valueB.tStartRefresh)
    trials.addData('slider_valueB.stopped', slider_valueB.tStopRefresh)
    trials.addData('stimB_2.started', stimB_2.tStartRefresh)
    trials.addData('stimB_2.stopped', stimB_2.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1.0 repeats of 'trials'

# get names of stimulus parameters
if trials.trialList in ([], [None], None):
    params = []
else:
    params = trials.trialList[0].keys()
# save data for this loop
trials.saveAsExcel(filename + '.xlsx', sheetName='trials',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
