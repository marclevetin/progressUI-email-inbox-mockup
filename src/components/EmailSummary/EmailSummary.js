import React from "react";

import "./EmailSummary.css";

const EmailSummary = props => {
  const computedStyles = {
    backgroundColor: props.activeEmail === props.id ? "#e9ecef" : "#ffffff",
    borderLeft: props.unread ? "5px solid #72c3fc" : "0px solid #72c3fc"
  };

  return (
    <React.Fragment>
      <div
        className="page-title-container email"
        onClick={() => props.handleClick(props.id)}
        style={computedStyles}
      >
        <div className="page-title-group">
          <div>
            {(props.avatar) ? <img
                                className="user-icon avatar email-avatar"
                                src={props.avatar}
                                alt={`Avatar for ${props.sender}`}
                              />
                            : ''
            }
          </div>
          <div>
            <h3 className="text-base bold text-gray no-margin sender">
              {props.sender}
            </h3>
            <h5 className="bold text-base no-margin">{props.title}</h5>
            <p>{props.preheader}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmailSummary;
