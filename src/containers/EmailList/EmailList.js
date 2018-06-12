import React, {Component} from 'react';

import EmailSummary from '../../components/EmailSummary';
import EmailDetail from '../EmailDetail';


class EmailList extends Component {
    state = {
        activeEmail: ''
    }

    render () {
        const allEmailSummaries = this.props.emails.map(email => 
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

        return(
            <div className="col-md-3">
                {allEmailSummaries}
            </div>
        )
    }
}

export default EmailList;