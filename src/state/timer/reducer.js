import {
    SET_MINUTES,
    SET_SECONDS,
    START_TIMER,
    STOP_TIMER,
    PLAY_TIMER,
    RESET_TIMER,
    FINISH_TIMER
} from './types';

const initialState = {
    paused: false,
    started: false,
    finished: false,
    initialMinutes: 0,
    initialSeconds: 0,
    minutes: 0,
    seconds: 0,
};

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MINUTES:
            return {
                ...state,
                minutes: action.value
            };
        case SET_SECONDS:
            return {
                ...state,
                seconds: action.value
            };
        case START_TIMER:
            return {...state, initialMinutes: action.value.minutes, initialSeconds: action.value.seconds, started: true};
        case STOP_TIMER:
            return {...state, paused: true};
        case PLAY_TIMER:
            return {...state, paused: false};
        case FINISH_TIMER:
            return {...state, finished: true};
        case RESET_TIMER:
            return initialState;
        default:
            return state;
    }
};

export default timerReducer;
