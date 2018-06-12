import React from 'react';

import './PillButton.css';

const PillButton = props => (
    <div>
        <button className="btn btn-blue pill">{props.text}</button>
    </div>
)

export default PillButton;