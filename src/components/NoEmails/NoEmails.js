import React from "react";

import "./NoEmails.css";

const NoEmails = props => {
  const computedStyles = {
    backgroundColor: "#fff5f5",
    borderColor: '#ffc9c9',
    color: '#c92a2a'
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
            <h3 className="text-base bold no-margin sender">
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

export default NoEmails;
