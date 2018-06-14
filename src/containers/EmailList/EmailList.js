import React, {Component} from 'react';
import './EmailList.css';

import EmailSummary from '../../components/EmailSummary';
import NoEmails from '../../components/NoEmails';



class EmailList extends Component {
    state = {
        activeEmail: '',
        searchTerm: ''
    }

    handleChange = (event) => {
        const {value} = event.target;
        
        this.setState({
            searchTerm: value
        });
    }

    clearSearch = () => {
        this.setState({
            activeEmail: '',
            searchTerm: ''
        });
    }

    render () {
        const filteredEmails = this.props.emails.filter(email => email.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()) 
                                                                || email.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
                                                                || email.message.toLowerCase().includes(this.state.searchTerm.toLowerCase())
                                                        )

        const allEmailSummaries = (filteredEmails.length !== 0)
                ? filteredEmails.map(email => 
                    <EmailSummary
                        key={email._id}
                        id={email._id}
                        sender={email.name}
                        title={email.title}
                        unread={email.isUnread}
                        preheader={email.message.substring(0,100)}
                        avatar={email.picture}
                        handleClick={this.props.handleClick}
                        activeEmail={this.props.activeEmail}
                    />
                ) 
                : <NoEmails 
                    title="No messages match this filter."
                    preheader="Please change your search criteria."
                    handleClick={this.clearSearch}
                  />

        return(
            <div className="col-md-6 fix-height">
            <ul class="input-list">
                <li class="input-unit">
                    <div class="input-control">
                        <input className="input-element input-element-base" type="text" onChange={this.handleChange} placeholder="Filter by email title, subject, or body" aria-label="Email list filter" value={this.state.searchTerm}/>
                    </div>
                </li>
            </ul>
                {allEmailSummaries}
            </div>
        )
    }
}

export default EmailList;