import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Input from '../../components/input';
import Button from '../../components/button';

import {setM, setS, start} from '../../state/timer/actions';

import './styles.css';

const TimerSet = () => {

    const timer = useSelector(state => state.timer);
    const dispatch = useDispatch();

    const {minutes, seconds} = timer;

    return (
        <div className='set-container'>
            <div className='time-settings'>
                <Input title='Minutes' handleChange={(value) => dispatch(setM(value))} value={minutes}/>
                <Input title='Seconds' handleChange={(value) => dispatch(setS(value))} value={seconds}/>
            </div>
            <Button title='start' backgroundColor='#20913e' handleClick={()=>dispatch(start({minutes, seconds}))}/>

        </div>
    )
}

export default TimerSet;
