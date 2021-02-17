import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import ProgressBar from '../../components/progressbar';
import Button from '../../components/button';

import {stop, play, reset, finish, setS, setM} from '../../state/timer/actions';

import './styles.css';

const TimerPlay = () => {

    const timerState = useSelector(state => state.timer);
    const dispatch = useDispatch();
    const {minutes, seconds, paused, initialSeconds, initialMinutes} = timerState;


    useEffect(() => {
        const timer = setInterval(() => {
            if (paused) {
                return;
            }
            if (minutes === 0 && seconds !== initialSeconds) {
                dispatch(setS(initialSeconds));
            }
            if (minutes === 0 && seconds === 0) {
                dispatch(finish());
                return;
            }
            if (seconds === 0 && minutes !== 0) {
                dispatch(setM(minutes - 1));
                dispatch(setS(59));
                return;
            }
            dispatch(setS(seconds - 1))
            return;
        }, 1000)


        return () => clearInterval(timer)
    }, [seconds, minutes, paused]);


    return (
        <div className='play-container'>
            <div className='play-progress'>
                <ProgressBar
                    title='Minutes'
                    valueTitle={minutes}
                    progress={minutes === 0 ? 0 : (minutes * 100) / initialMinutes}
                    size={150}
                    circleOneStroke='#d9edfe'
                    circleTwoStroke='blue'
                />
                <ProgressBar
                    title='Seconds'
                    valueTitle={seconds}
                    progress={(seconds * 100) / 59}
                    size={150}
                    circleOneStroke='#d9edfe'
                    circleTwoStroke='blue'
                />
            </div>
            <div className='play-actions'>
                <Button
                    title={`${paused ? 'play' : 'pause'}`}
                    backgroundColor='#20913e'
                    handleClick={() => {
                        dispatch(paused ? play() : stop())
                    }}
                />

                <Button
                    title='reset'
                    backgroundColor='#ba2f33'
                    handleClick={() => dispatch(reset())}
                />
            </div>
        </div>
    )
}

export default TimerPlay;
