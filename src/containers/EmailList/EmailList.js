import React, {Component} from 'react';
import './EmailList.css';

import EmailSummary from '../../components/EmailSummary';



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
                : <EmailSummary 
                    title="No messages match this filter."
                    preheader="Please change your search terms.  Click anywhere to clear the field."
                    handleClick={this.clearSearch}
                  />

        return(
            <div className="col-md-3 fix-height">
                <input type="text" onChange={this.handleChange} placeholder="Filter by email title, subject, or body" className="input" value={this.state.searchTerm}/>
                {allEmailSummaries}
            </div>
        )
    }
}

export default EmailList;