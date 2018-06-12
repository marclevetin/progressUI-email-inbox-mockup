import React, { Component } from "react";

class EmailDetail extends Component {
  state = {};

  render() {
    return (
      <div className="col-md-8">
        <div class="page-title-container">
          <div class="page-title-group">
            <h5 class="page-title">Page Title
                {/* <span class="page-title-group-actions right">
                    <button class="btn btn-blue btn-ghost btn-xs">Reply</button>
                    <button class="btn btn-blue btn-ghost btn-xs">Forward</button>
                    <button class="btn btn-blue btn-ghost btn-xs">Move to</button>
                </span> */}
            </h5>
            <p>From <a>Tio Mitra</a> at Time stamp</p>
          </div>
        </div>
          <hr />
          <p>Bacon ipsum text</p>
      </div>
    );
  }
}

export default EmailDetail;
