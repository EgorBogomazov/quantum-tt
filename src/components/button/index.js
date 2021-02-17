import React from 'react';

import './styles.css';

const Button = ({title, backgroundColor, color, handleClick}) => {
    return (
        <button type='button' style={{backgroundColor, color}} onClick={handleClick} className='button'>
            {title}
        </button>
    )
}

export default Button;
