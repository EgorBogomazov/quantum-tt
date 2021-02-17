import {
    SET_MINUTES,
    SET_SECONDS,
    START_TIMER,
    STOP_TIMER,
    PLAY_TIMER,
    FINISH_TIMER,
    RESET_TIMER,
} from './types';


export const setS = (value) => dispatch => dispatch({type: SET_SECONDS, value,});

export const setM = (value) => dispatch => dispatch({type: SET_MINUTES, value,});

export const start = (value) => dispatch => dispatch({type: START_TIMER, value});

export const stop = () => dispatch => dispatch({type: STOP_TIMER});

export const play = () => dispatch => dispatch({type: PLAY_TIMER});

export const finish = () => dispatch => dispatch({type: FINISH_TIMER});

export const reset = () => dispatch => dispatch({type: RESET_TIMER});



