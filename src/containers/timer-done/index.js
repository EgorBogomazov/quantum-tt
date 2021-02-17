import React from 'react';
import {useDispatch} from 'react-redux';
import { reset } from '../../state/timer/actions'
import Button from '../../components/button';

import './styles.css';


const TimerDone = () => {
    const dispatch = useDispatch()

    return (
        <div className='done-container'>
            <div className='message'>TIMER DONE!</div>
            <Button title='dismiss' backgroundColor='#3888a1' handleClick={()=>{dispatch(reset())}}/>
        </div>)
}

export default TimerDone;
