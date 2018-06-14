import React, { Component } from "react";
import "./Sidebar.css";
import PillButton from "../../components/PillButton";

class Sidebar extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="col-md-2 bg-gray8 sidebar hidden-sm">
          <PillButton text="Compose" color="blue" />
          <p className="text-white bold">
            Inbox ({this.props.numberUnReadEmails})
          </p>
          <p className="text-white bold">Important</p>
          <p className="text-white bold">Sent</p>
          <p className="text-white bold">Draft</p>
          <p className="text-white bold">Trash</p>
          <h3 className="text-blue9 text-lg">LABELS</h3>
          
            <p className="text-white bold"><span className='color-well bg-yellow3'>&nbsp;</span>Personal</p>
            <p className="text-white bold"><span className='color-well bg-cyan3'></span>Work</p>
            <p className="text-white bold"><span className='color-well bg-green3'></span>Travel</p>
        </div>
        <div className="bg-gray8 show-xs show-sm hidden-md hidden-lg">
          <button class="btn btn-gray btn-full btn-dropdown">
            Select a Mailbox
            <ul className="dropdown-menu left">
              <li>
                <a href="#">Inbox ({this.props.numberUnReadEmails})</a>
              </li>
              <li>
                <a href="#">Important</a>
              </li>
              <li>
                <a href="#">Sent</a>
              </li>
              <li>
                <a href="#">Draft</a>
              </li>
              <li>
                <a href="#">Trash</a>
              </li>
            </ul>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Sidebar;
