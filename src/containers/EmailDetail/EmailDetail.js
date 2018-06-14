import React, { Component } from "react";

import moment from 'moment';
import PillButton from "../../components/PillButton";
import './EmailDetail.css'

class EmailDetail extends Component {
  state = {};

  render() {
    const formattedDateTime = (this.props.timestamp) 
          ? moment(this.props.timestamp.split(" ")[0], moment.ISO_8601).format("h:mma, MMMM D, YYYY")
          : '';
    
    return (
      <div className="col-md-16">
        <div className="page-title-container container-adjust">
          <div className="grid-half">
            <div className="row no-padding">
              <div className="col-md-8">
                <div className="page-title-group">
                  <h5 className="page-title">{this.props.title}</h5>
                  <p>
                    From <a>{this.props.sender}</a> at <span className="text-gray5">{formattedDateTime}</span>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <PillButton text='Reply' />
                <PillButton text='Forward' />
                <PillButton text='Move to' />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default EmailDetail;
