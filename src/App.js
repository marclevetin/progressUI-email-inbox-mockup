import React, { Component } from 'react';

import Sidebar from './containers/Sidebar';
import EmailList from './containers/EmailList';
import EmailDetail from './containers/EmailDetail';


class App extends Component {
  render() {
    return (
      <div className="grid-half">
        <div className="row">
          <Sidebar />
          <EmailList />
          <EmailDetail />
        </div>
      </div>
    );
  }
}

export default App;
