import React from 'react';
import {useSelector} from 'react-redux';

import TimerSet from '../timer-set';
import TimerPlay from '../timer-play';
import TimerDone from '../timer-done';

import './styles.css';

const Navigator = () => {

    const {started, finished} = useSelector(state => state.timer);

    const currentRoute = () => {
        if (!started && !finished) {
            return <TimerSet/>;
        }

        if (started && !finished) {
            return <TimerPlay/>;
        }

        if (started && finished) {
            return <TimerDone/>;
        }
    }

    return (
        <div className='navigator'>
            {currentRoute()}
        </div>)


}

export default Navigator;
