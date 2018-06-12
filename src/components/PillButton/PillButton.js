import React from 'react';

import './PillButton.css';

const PillButton = props => {
        const buttonColor = (props.color === 'blue') ? 'btn pill btn-blue' : 'btn pill btn-gray';
        return (
            <button className={buttonColor}>{props.text}</button>
        )
}

export default PillButton;