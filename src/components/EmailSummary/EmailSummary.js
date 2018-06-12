import React from 'react';

const EmailSummary = props => (
    <div class="page-title-container">
        <div class="page-title-group">
            <h3 class="page-title-sub">{props.sender}</h3>
            <h5 class="page-title">{props.title}</h5>
        <p>{props.preheader}</p>
        <p>border</p>
        </div>
    </div>
)

export default EmailSummary;