import React from 'react';

import './EmailSummary.css'

const EmailSummary = props => (
    <React.Fragment>
    
    <div class="page-title-container email">
    <span class="user-icon avatar email-avatar">
    <img src="https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg" />
    </span>
        <div class="page-title-group">
            <h3 class="page-title-sub">{props.sender}</h3>
            <h5 class="page-title text-base">{props.title}</h5>
        <p>{props.preheader}</p>
        <p>background if active, uses #e9ecef</p>
        </div>
        
    </div>
    </React.Fragment>
    
    
)

export default EmailSummary;