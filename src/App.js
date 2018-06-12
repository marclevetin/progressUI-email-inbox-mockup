import React, { Component } from 'react';

import Sidebar from './containers/Sidebar';
import EmailList from './containers/EmailList';

import {allTheThings} from './data/emails';
import EmailDetail from './containers/EmailDetail';

class App extends Component {
  state = {
    data: [],
    activeEmailId: '',
  }

  componentDidMount() {
    this.setState({
      data: allTheThings
    })
  }

  handleClick = (id) => {
    this.setState({
        activeEmailId: id
    })
}


  render() {
    const showEmailDetail = (this.state.activeEmailId) ? this.state.data.filter(email => email._id === this.state.activeEmailId)[0] : '';
    console.log(showEmailDetail)
    return (
      <div className="grid-half">
        <div className="row">
          <Sidebar />
          <EmailList 
            emails={this.state.data}
            handleClick={this.handleClick}
            activeEmail={this.state.activeEmailId}
          />
          <EmailDetail 
            activeEmail={this.state.activeEmailId}
            title={showEmailDetail.title}
            sender={showEmailDetail.name}
            timestamp={showEmailDetail.dateSent}
            message={showEmailDetail.message}
          />
        </div>
      </div>
    );
  }
}

export default App;
