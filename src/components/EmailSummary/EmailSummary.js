import React from "react";

import "./EmailSummary.css";

const EmailSummary = props => {
  const backgroundColor = (props.activeEmail === props.id) ? {'backgroundColor': '#e9ecef'} : {'backgroundColor': '#ffffff'};

  return (
    <React.Fragment>
      <div
        className="page-title-container email"
        onClick={() => props.handleClick(props.id)}
        style={backgroundColor}
      >
        <img className="user-icon avatar email-avatar" src={props.avatar} alt={`Avatar for ${props.sender}`}/> 
        <div className="page-title-group">
          <h3 className="page-title-sub">{props.sender}</h3>
          <h5 className="page-title text-base">{props.title}</h5>
          <p>{props.preheader}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmailSummary;
