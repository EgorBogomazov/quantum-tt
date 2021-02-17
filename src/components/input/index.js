import React from 'react';
import {validate} from '../../validate';

import './styles.css';

const Input = ({handleChange, value, title}) => {

    const onChange = (newValue) => {
        if (validate(newValue)) {
            handleChange(newValue)
        }
        return;
    };

    return (
        <div className='component-container'>
            <span className='title'>{title}</span>
            <div className='input-container'>
                <input onClick={() => onChange(value + 1)} className='input-button' type='button' value='+'/>
                <input onChange={(e) => onChange(e.target.value)} className='input' type='number' value={value}/>
                <input onClick={() => onChange(value - 1)} className='input-button' type='button' value='-'/>
            </div>
        </div>
    )
}


export default Input;
