import React, {Component} from 'react';

import EmailSummary from '../../components/EmailSummary';
import EmailDetail from '../EmailDetail';


class EmailList extends Component {
    state = {
        activeEmail: '',
        searchTerm: ''
    }

    handleChange = (event) => {
        const {value} = event.target;
        this.setState({
            searchTerm: value
        })
    }

    render () {
        const filteredEmails = this.props.emails.filter(email => email.title.includes(this.state.searchTerm))
        const allEmailSummaries = (filteredEmails.length != 0)
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
                : "No messages match this filter."

        return(
            <div className="col-md-3">
                <input type="text" onChange={this.handleChange} placeholder="Filter your email title"/>
                {allEmailSummaries}
            </div>
        )
    }
}

export default EmailList;