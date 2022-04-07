"""
Created on Tue Mar  8 14:17:58 2022

@author: justo & emma
"""
import os
import h5py
from math import isnan
import numpy as np
import pandas as pd
from collections import defaultdict
import matplotlib.pyplot as plt
import scipy.optimize as opt
from scipy.ndimage import gaussian_filter as gauss


### FUNCTIONS ###


def closest(lst, K):
    '''
    closest will find the closest number to the one you give as an input, in another vector

    Parameters
    ----------
    lst : vector
        vector where you want to find the number.
    K : float
        number which you want to find.

    Returns
    -------
    float
        closest number to K in 1st.

    ''' 
    lst = np.asarray(lst)
    idx = (np.abs(lst - K)).argmin()
    return lst[idx]

def f(x, a, b, c, d):
    '''
    f is the logarithmic function used to fit the psychometric curve
    '''
    return a / (1. + np.exp(-c * (x - d))) + b

def select_eyedata(trial,trial_n,etData,tmin,tmax,gaze_threshold):
    '''
    select eyetracking data for a specific trial

    Parameters
    ----------
    trial : vector
        data for a specific trial.
    trial_n : int
        index of the trial.
    etData : DataFrame
        eyetracking data for all trials.
    tmin : string
        where you want to start the trial.
    tmax : string
        where you want to end the trial.
    gaze_threshold : float
        threshold to select looking at left or right.

    Returns
    -------
    DataFrame
        eyetracking data for a specific trial.

    '''
    #PROBLEMA AQUÍ
    #select eyedata for the trial
    global gazedata
    
    gazedata = etData.loc[(etData['time']>=trial[tmin]) & (etData['time']<=trial[tmax]), ['time','left_gaze_x', 'left_gaze_y','right_gaze_x', 'right_gaze_y']]
    
    # label right and left trials
    gazedata['position'] = float('nan')
    right_trials = (gazedata['left_gaze_x']>gaze_threshold) | (gazedata['right_gaze_x']>gaze_threshold)
    left_trials = (gazedata['left_gaze_x']<-gaze_threshold) | (gazedata['right_gaze_x']<-gaze_threshold)
    gazedata.loc[right_trials,'position'] = True
    gazedata.loc[left_trials,'position'] = False
    
    # remove rows with no data
    # gazedata[([isnan(i) for i in list(gazedata.left_gaze_x)]) and ([isnan(i) for i in list(gazedata.right_gaze_x)])] = float('nan')
    return(gazedata)    

def predict_choice_lt(gazedata,sf):
    '''
    predicts choice of the subject taking into account the looking time
    
    Parameters
    ----------
    gazedata : DataFrame
        Eyetracking data for one trial.
    sf : float
        sampling frequency (120 in the Tobii eyetracker).

    Returns
    -------
    right_rate: float
        proportion of time looking at the right option.
    right_pred: Bool
        True if the proportion of time looking at right is > than 0.5.
    right_lt: float
        seconds looking at right.
    left_lt: float
        seconds looking at left.

    '''
    try:
        right_rate = gazedata['position'].value_counts(normalize=True)[True]
    except:
        right_rate = 0
    right_pred = right_rate>=0.5
    right_lt = sum(gazedata['position'])/sf
    left_lt = (len(gazedata['position'])/sf)-right_lt
    return(right_rate, right_lt, left_lt, right_pred)

def get_food_data(fileDir,subj):
    '''
    get the data for the food task
    etData = pd.DataFrame(np.array(h5py.File(fileDir+[file for file in files_subject if file.endswith(r'.hdf5')][0])['data_collection']['events']['eyetracker']['BinocularEyeSampleEvent']))

    Parameters
    ----------
    fileDir : string
        directory where the data is stored.
    subj : int
        number of the subject.

    Returns
    -------
    trials: DataFrame
        experimental data of the subject.
    etData: DataFrame
        eyetracking data of the subject.
        
    '''
    global trials
    global etData
    files_subject = [_ for _ in os.listdir(fileDir) if (_.endswith(r".hdf5") or _.endswith(r".xlsx")) and "P00"+str(subj) in _]
    experiment_data = pd.ExcelFile(fileDir+[file for file in files_subject if file.endswith(r'.xlsx')][0])
    ratings_data_all = pd.read_excel(experiment_data, 'ratings')
    trials_data_all = pd.read_excel(experiment_data, 'trials')
    ratings_data = ratings_data_all.iloc[:-8 , :]
    psyData = trials_data_all.iloc[:-8,:].reset_index()
    
    sel_vars = ['image_r',
                'image_l',
                'LaN_condition',
                'cross.started_mean',
                'food_1.started_mean',
                'food_1_LaN.started_mean',
                'mouse.leftButton_mean',
                'mouse.rightButton_mean',
                'confidence_assessment.started_mean',
                'confidence_assessment.response_mean']
    
    trials = psyData.loc[:, sel_vars].reset_index(drop=True)
    new_names = {'image_l': 'stimL',
                  'image_r':'stimR',
                  'trials.thisIndex': 'real_trial_index',
                  'cross.started_mean': 'looking_phase_start',
                  'food_1.started_mean': 'decision_phase_start',
                  'confidence_assessment.response_mean': 'confidence',     
                  'food_1_LaN.started_mean': 'decision_start',
                  'LaN_condition': 'LaN',
                  'index': 'real_trial_index'}
    trials = trials.rename(columns=new_names)
    
    # # New variables 
    trials['decision_time'] = trials['confidence_assessment.started_mean'] - trials['decision_start']
    trials['response_bool'] = (trials['mouse.leftButton_mean']+trials['mouse.rightButton_mean'])==1
    trials['response'] = trials['mouse.rightButton_mean'] == 1 # Right is True
    trials['stimL_value'] = [ratings_data[ratings_data.im_ratings ==row.stimL].iloc[0]['rating_food.response_mean'] for index,row in trials.iterrows()]
    trials['stimR_value'] = [ratings_data[ratings_data.im_ratings ==row.stimR].iloc[0]['rating_food.response_mean'] for index,row in trials.iterrows()]
    
    # # Remove invalid trials (no choice)
    trials = trials.drop(trials[trials['response_bool']==False].index).reset_index(drop=True)
  
    
    etData = pd.DataFrame(np.array(h5py.File(fileDir+[file for file in files_subject if file.endswith(r'.hdf5')][0])['data_collection']['events']['eyetracker']['BinocularEyeSampleEvent']))
    trials['et_looking_Start'] = [closest(list(etData['time']),t) for t in trials['looking_phase_start']]
    trials['et_decision_Start'] = [closest(list(etData['time']),t) for t in trials['decision_phase_start']]
    trials['et_trial_End'] = [closest(list(etData['time']),t) for t in trials['confidence_assessment.started_mean']]
    trials['etDelay'] = [closest(list(etData['time']),t) - t for t in trials['decision_start']]
    trials['value_bool'] = (trials['stimR_value']!='None') & (trials['stimL_value']!='None')
    trials = trials.drop(trials[trials['value_bool']==False].index).reset_index(drop=True)
    trials['stimR_value'] = [float(n) for n in list(trials['stimR_value'])]
    trials['stimL_value'] = [float(n) for n in list(trials['stimL_value'])]
    trials['evidence_right'] = (trials['stimR_value'] - trials['stimL_value'])/max(trials['stimR_value'] - trials['stimL_value'])

    return(trials, etData)

def get_context_data(fileDir,subj):
    '''
    get the data for the context task

    Parameters
    ----------
    fileDir : string
        directory where the data is stored.
    subj : int
        number of the subject.

    Returns
    -------
    trials: DataFrame
        experimental data of the subject.
    etData: DataFrame
        eyetracking data of the subject.
        
    '''
    global trials
    global etData 
    files_subject = [_ for _ in os.listdir(fileDir) if (_.endswith(r".hdf5") or _.endswith(r".csv")) and "P00"+str(subj) in _]
    print(fileDir)
    psyData = pd.read_csv(fileDir+[file for file in files_subject if file.endswith(r'.csv')][0])
    bool_trials = [isinstance(i, str) for i in list(psyData.written_context)] # select just the rows in the output file of the trials
    sel_vars = ['written_context',
                'imageA',
                'imageB',
                'LaN',
                'trials.thisIndex',
                'stimA.started',
                'stimA_3.started',
                'sound_1.started',
                'resp_choice.leftButton',
                'resp_choice.rightButton',
                'question_confidence.started',
                'slider_confidence.response',
                'slider_valueA.response',
                'slider_valueB.response']
    
    trials = psyData.loc[bool_trials, sel_vars].reset_index(drop=True)
    
    # Change names to make it more readable
    new_names = {'imageA': 'stimL',
                 'imageB':'stimR',
                 'trials.thisIndex': 'real_trial_index',
                 'stimA.started': 'looking_phase_start',
                 'stimA_3.started': 'decision_phase_start',
                 'slider_confidence.response': 'confidence',
                 'slider_valueA.response': 'stimL_value',
                 'slider_valueB.response': 'stimR_value',
                 'sound_1.started': 'decision_start'}
    trials = trials.rename(columns=new_names)
    
    # New variables 
    trials['decision_time'] = trials['question_confidence.started'] - trials['decision_start']
    trials['response_bool'] = (trials['resp_choice.leftButton']+trials['resp_choice.rightButton'])==1
    trials['response'] = trials['resp_choice.rightButton'] == 1 # Right is True
    
    # Remove invalid trials (no choice)
    trials = trials.drop(trials[trials['response_bool']==False].index).reset_index(drop=True)
    
    # Eyetracking data
    etData = pd.DataFrame(np.array(h5py.File(fileDir+[file for file in files_subject if file.endswith(r'.hdf5')][0])['data_collection']['events']['eyetracker']['BinocularEyeSampleEvent']))

    trials['et_looking_Start'] = [closest(list(etData['time']),t) for t in trials['looking_phase_start']]
    trials['et_decision_Start'] = [closest(list(etData['time']),t) for t in trials['decision_phase_start']]
    trials['et_trial_End'] = [closest(list(etData['time']),t) for t in trials['question_confidence.started']]
    trials['etDelay'] = [closest(list(etData['time']),t) - t for t in trials['decision_start']]
    trials['value_bool'] = (trials['stimR_value']!='None') & (trials['stimL_value']!='None')
    trials = trials.drop(trials[trials['value_bool']==False].index).reset_index(drop=True)
    trials['stimR_value'] = [float(n) for n in list(trials['stimR_value'])]
    trials['stimL_value'] = [float(n) for n in list(trials['stimL_value'])]
    trials['evidence_right'] = (trials['stimR_value'] - trials['stimL_value'])/max(trials['stimR_value'] - trials['stimL_value'])

    return(trials, etData)
 
def get_gambling_data(fileDir,subj):
    '''
    get the data for the gambling task

    Parameters
    ----------
    fileDir : string
        directory where the data is stored.
    subj : int
        number of the subject.

    Returns
    -------
    trials: DataFrame
        experimental data of the subject.
    etData: DataFrame
        eyetracking data of the subject.
        
    '''
    global trials
    global etData
    files_subject = [_ for _ in os.listdir(fileDir) if (_.endswith(r".hdf5") or _.endswith(r".csv")) and "P00"+str(subj) in _]
    experiment_data = pd.read_csv(fileDir+[file for file in files_subject if file.endswith(r'.csv')][0])

    psyData = experiment_data.iloc[2:,:].reset_index()
    
    sel_vars = ['heightl',
                'heightr',
                'colorl',
                'colorr',
                'fix.started',
                'rl1.started',
                'rl.started',
                'sound_1.started',
                'mouse.leftButton',
                'mouse.rightButton',
                'slider.started',
                'slider.response',
                'index']
    
    trials = psyData.loc[:, sel_vars].reset_index(drop=True)
      
    # Rename variables
    new_names = {'heightl': 'stimL',
                  'heightr':'stimR',
                  'index': 'real_trial_index',
                  'fix.started': 'looking_phase_start',
                  'rl1.started': 'decision_phase_start',
                  'slider.response': 'confidence',     
                  'rl.started': 'looking_2imgs_start',
                  'sound_1.started': 'decision_start'}
    trials = trials.rename(columns=new_names)
    # New variables 
    trials.loc[trials['colorl']=='grey','colorl'] = 10 
    trials.loc[trials['colorl']=='blue','colorl'] = 5 
    trials.loc[trials['colorl']=='green','colorl'] = 7
    trials.loc[trials['colorr']=='grey','colorr'] = 10 
    trials.loc[trials['colorr']=='blue','colorr'] = 5 
    trials.loc[trials['colorr']=='green','colorr'] = 7
    trials['decision_time'] = trials['slider.started'] - trials['decision_start']
    trials['response_bool'] = (trials['mouse.leftButton']+trials['mouse.rightButton'])==1
    trials['response'] = trials['mouse.rightButton'] == 1 # Right is True
    # ACABAR
    trials['stimL_value'] = [trials.colorl*trials.stimL*2 for index,row in trials.iterrows()]
    trials['stimR_value'] = [trials.colorr*trials.stimR*2 for index,row in trials.iterrows()]
    
    # # Remove invalid trials (no choice)
    trials = trials.drop(trials[trials['response_bool']==False].index).reset_index(drop=True)
  
    
    etData = pd.DataFrame(np.array(h5py.File(fileDir+[file for file in files_subject if file.endswith(r'.hdf5')][0])['data_collection']['events']['eyetracker']['BinocularEyeSampleEvent']))
    trials['et_looking_Start'] = [closest(list(etData['time']),t) for t in trials['looking_phase_start']]
    trials['et_decision_Start'] = [closest(list(etData['time']),t) for t in trials['decision_phase_start']]
    trials['et_trial_End'] = [closest(list(etData['time']),t) for t in trials['slider.started']]
    trials['etDelay'] = [closest(list(etData['time']),t) - t for t in trials['decision_start']]
    trials['value_bool'] = (trials['stimR_value']!='None') & (trials['stimL_value']!='None')
    trials = trials.drop(trials[trials['value_bool']==False].index).reset_index(drop=True)
    trials['stimR_value'] = [float(n) for n in list(trials['stimR_value'])]
    trials['stimL_value'] = [float(n) for n in list(trials['stimL_value'])]
    trials['evidence_right'] = (trials['stimR_value'] - trials['stimL_value'])/max(trials['stimR_value'] - trials['stimL_value'])


    return(trials, etData)

       
### CLASSES ###
class subject:
    
    
    def __init__(self,fileDir,subj,tmin = 'et_looking_Start', tmax= 'et_trial_End', gaze_threshold = 0.4,sf=120,magF = 100, LaN=False, LaS=False):
    
        self.fileDir = fileDir
        self.subj = subj
        self.tmin = tmin
        self.tmax = tmax
        self.gaze_threshold = gaze_threshold
        self.sf = sf
        self.magF = magF
        self.LaN = LaN
        self.LaS = LaS
        
        # self.heatmap =  plot=False, LaN=False, LaS=False, heatmap=False, chosen_option=None,psycurve = False
        
    
        if 'food' in fileDir:
            self.task ='food'
            self.trials, self.etData = get_food_data(fileDir,subj)
        if 'gambling' in fileDir:
            self.task ='gambling'
            self.trials, self.etData = get_gambling_data(fileDir,subj)
        if 'context' in fileDir:
            self.task ='context'
            self.trials, self.etData = get_context_data(fileDir,subj)

        # select the data for look at nothing trials or look at something trials
        if LaN:
            self.trials = self.trials.drop(self.trials[self.trials['LaN']==1].index).reset_index(drop=True)
        
        if LaS:
            self.trials = self.trials.drop(self.trials[self.trials['LaN']==0].index).reset_index(drop=True)     
        self.mean_decision_time = self.trials.decision_time.mean()
        self.std_mean_decision_time = self.trials.decision_time.std()
        self.max_decision_time = self.trials.decision_time.max()
        
        def accuracy(self):
            '''
            RETURNS
            -------
            accuracy : float
                accuracy of the prediction.

            '''
            gaze_threshold = self.gaze_threshold
            tmin = self.tmin
            tmax = self.tmax
            sf = self.sf
            
                  
            RightRate = []
            RightPred = []      
            
            for index, trial in self.trials.iterrows():
                
                # select eyetracking data for the trial:      
                gazedata = select_eyedata(trial,index,etData,tmin,tmax,gaze_threshold)           
                # Predict choice:
                right_rate, right_lt, left_lt, right_pred = predict_choice_lt(gazedata,sf)

                RightRate.append(right_rate)
                RightPred.append(right_pred)
                self.trials.loc[index,'right_lt'] = right_lt
                self.trials.loc[index,'left_lt'] = left_lt
            self.trials['RightRate'] = RightRate
            self.trials['RightPred'] = RightPred
            self.trials['Hits'] = trials['response'] == trials['RightPred']
            self.accuracy = sum(self.trials.Hits)/self.trials.Hits.shape[0]
            return accuracy
        accuracy(self)
    
    def __repr__(self):
        text = 'Subject '+str(self.subj)+' in the '+str(self.task)+' task, from '+str(self.tmin)+ ' to '+str(self.tmax)+', with LaN =  '+str(self.LaN)+' LaS = '+str(self.LaS)
        return(text)
    
    def heatmap(self, chosen_option = None):
        '''
        heatmap for all the trials        

        Parameters
        ----------
        chosen_option : string, optional
            'right' or 'left'. The default is None.

        Returns
        -------
        gaze_mat: matrix
            matrix of the heatmap.

        '''
        magF = self.magF
        tmin = self.tmin
        tmax = self.tmax
        LaN = self.LaN
        gaze_threshold = self.gaze_threshold
        LookData = []
        
        global gaze_mat
        gaze_mat = np.zeros((magF*2,magF*2))
        
        for index, trial in self.trials.iterrows():
            
            # select eyetracking data for the trial:      
            gazedata = select_eyedata(trial,index,etData,tmin,tmax,gaze_threshold)
            #create heatmap matrix for that trial
            if chosen_option:
                if chosen_option == 'right':
                    if trial.response == True:
                        gazedata['x'] = round(gazedata[['left_gaze_x', 'right_gaze_x']].mean(axis=1)*magF)+magF
                        gazedata['y'] = round(gazedata[['left_gaze_y', 'right_gaze_y']].mean(axis=1)*magF)+magF
                
                if chosen_option == 'left':
                    if trial.response == False:
                        gazedata['x'] = round(gazedata[['left_gaze_x', 'right_gaze_x']].mean(axis=1)*magF)+magF
                        gazedata['y'] = round(gazedata[['left_gaze_y', 'right_gaze_y']].mean(axis=1)*magF)+magF
                    
            else:
                gazedata['x'] = round(gazedata[['left_gaze_x', 'right_gaze_x']].mean(axis=1)*magF)+magF
                gazedata['y'] = round(gazedata[['left_gaze_y', 'right_gaze_y']].mean(axis=1)*magF)+magF
                
            try:
                for index, row in gazedata.iterrows(): 
                    if (isnan(row.x)==False and isnan(row.y)==False) :
                            try: gaze_mat[int(row.y),int(row.x)] += 1
                            except: pass       
            except: pass
            LookData.append(gazedata)

        gaze_mat = gauss(gaze_mat,5)
        size_stim = 0.25*magF
        rectangle = plt.Rectangle((magF/2-size_stim/2,magF-size_stim/2), size_stim, size_stim,ec="green",fill=False)
        plt.gca().add_patch(rectangle)
        rectangle = plt.Rectangle(((3/2)*magF-size_stim/2,magF-size_stim/2), size_stim, size_stim,ec="green",fill=False)
        plt.gca().add_patch(rectangle)
        plt.imshow(gaze_mat, cmap='hot', interpolation='nearest')
        plt.plot(magF,magF,'w+')
        if chosen_option:
            if LaN:
                plt.title('heatmap\n'+tmin+'\n'+tmax+'\nLaN='+str(LaN)+'\nChosen='+str(chosen_option))
            else:
                plt.title('heatmap\n'+tmin+'\n'+tmax+'\nChosen='+str(chosen_option))
        else:
            plt.title('heatmap\n'+tmin+'\n'+tmax)
        plt.axis('off')
        plt.show()
        return(gaze_mat)
    
    def psychometric_curve(self):
        '''
        plots the psychometric curve for the subject

        '''
        trials = self.trials
        
        
        valuesRL = sorted(list(dict.fromkeys(trials['evidence_right'])), key = lambda x:float(x))
        # valuesRL = [int(n) for n in valuesRL]
        ratiosR = []
        for valueRL in valuesRL:
            ratioR = sum((trials['evidence_right'] == valueRL) & (trials['response']==True))/sum(trials['evidence_right'] == valueRL)
            ratiosR.append(ratioR)
        
        x = valuesRL
        y = ratiosR
        popt, pcov = opt.curve_fit(f, x, y, method="trf")
        
        fig, ax = plt.subplots(1, 1, figsize=(6, 4))
        ax.plot(x, y, 'ko', label='Data points')
        x = np.linspace(-1,1,50)
        y_fit = f(x, *popt)
        ax.plot(x, y_fit, 'k-',label='Logistic fit')
        plt.title('Psychometric curve: '+str(self.subj))
        plt.legend()
        plt.xlim([-1,1])
        plt.show()    
    

    
    def plot_eyedata_trials(self):
        '''
        plots the eyetracking data for each trial

        '''
        etData = self.etData
        tmin = self.tmin
        tmax = self.tmax
        gaze_threshold = self.gaze_threshold
        sf = self.sf
        for index, trial in self.trials.iterrows():
           
            # select eyetracking data for the trial:      
            gazedata = select_eyedata(trial,index,etData,tmin,tmax,gaze_threshold)
               
            # Predict choice:
            right_rate, right_lt, left_lt, right_pred = predict_choice_lt(gazedata,sf)
           
            plt.plot(gazedata['left_gaze_x'])
            if tmin == 'et_looking_Start' and tmax == 'et_trial_End':
                plt.axvline(x=etData.loc[etData['time']==trials.loc[index,'et_decision_Start']].index.values[0], color='r')
            plt.axhline(y=gaze_threshold, color='g',linestyle='--')
            plt.axhline(y=-gaze_threshold, color='g',linestyle='--')
            plt.show()      
            
    def decision_time(self):    
        return({'mean_decision_time': self.mean_decision_time, 'std_mean_decision_time': self.std_mean_decision_time,'max_decision_time':self.max_decision_time})
    


### VARIABLES ###
# Directory with the data
fileDir_food = r"data_pilot_food/"
fileDir_gambling = r"data_pilot_gambling/"
fileDir_context = r"data_pilot_context/"

### RUN CODE ###
subj = 7
subject_1 = subject(fileDir_food,subj)



#     # Image presentation 
#     accuracy = analize(trials,etData,'et_looking_Start','et_decision_Start', heatmap=True, chosen_option='right')
#     accuracy = analize(trials,etData,'et_looking_Start','et_decision_Start', heatmap=True, chosen_option='left')
#     print('  STIM accuracy: ', accuracy)
    
#     # Image presentation + LaN / LaS
#     accuracy = analize(trials,etData,'et_looking_Start','et_trial_End')
#     print('  STIM + LaN/LaS accuracy: ', accuracy)
    
#     # Image presentation + LaN
#     accuracy = analize(trials,etData,'et_looking_Start','et_trial_End',LaN=True)
#     print('  STIM + LaN accuracy: ', accuracy)
    
#     # Image presentation + LaS
#     accuracy = analize(trials,etData,'et_looking_Start','et_trial_End',LaS=True)
#     print('  STIM + LaS accuracy: ', accuracy)
    
#     # LaN / LaS
#     accuracy = analize(trials,etData,'et_decision_Start','et_trial_End')
#     print('  LaN/LaS accuracy: ', accuracy)
    
#     # LaN
#     accuracy = analize(trials,etData,'et_decision_Start','et_trial_End', LaN=True, heatmap=True, chosen_option='right')
#     accuracy = analize(trials,etData,'et_decision_Start','et_trial_End', LaN=True, heatmap=True, chosen_option='left')
#     print('  LaN accuracy: ', accuracy)
    
#     # LaS
#     accuracy = analize(trials,etData,'et_decision_Start','et_trial_End', LaS=True, heatmap=True, chosen_option='right')
#     accuracy = analize(trials,etData,'et_decision_Start','et_trial_End', LaS=True, heatmap=True, chosen_option='left')
#     print('  LaS accuracy: ', accuracy, '\n')

