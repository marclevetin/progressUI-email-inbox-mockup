import React, { Component } from 'react';
import './progress.min.css';

import Sidebar from './containers/Sidebar';


class App extends Component {
  render() {
    return (
      <div className="grid-half">
        <div className="row">
          <Sidebar />
          <div className="col-md-3"><p>Email list</p></div>
          
          <div className="col-md-8"><p>Email detail</p></div>
        </div>
      </div>
    );
  }
}

export default App;
