import React, {Component} from 'react';

import EmailSummary from '../../components/EmailSummary';



class EmailList extends Component {
    state = {

    }

    render () {
        return(
            <div className="col-md-3">
                <EmailSummary
                    sender="Sender Name"
                    title="Email Title"
                    unread={true}
                    preheader="Email preheader text"
                />
            </div>
        )
    }
}

export default EmailList;