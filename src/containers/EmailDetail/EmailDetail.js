import React, { Component } from "react";

import PillButton from "../../components/PillButton";

class EmailDetail extends Component {
  state = {};

  render() {
    return (
      <div className="col-md-8">
        <div class="page-title-container">
          <div className="grid-half">
            <div className="row no-padding">
              <div className="col-md-8">
                <div class="page-title-group">
                  <h5 class="page-title">Page Title</h5>
                  <p>
                    From <a>Tio Mitra</a> at Time stamp
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
        <p>Bacon ipsum text</p>
      </div>
    );
  }
}

export default EmailDetail;
