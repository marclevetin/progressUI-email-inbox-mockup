import React, {Component} from 'react';

import PillButton from '../../components/PillButton';

class Sidebar extends Component {
    state = {

    }

    render () {
        return(
            <div className="col-md-1">
                <PillButton 
                    text="Compose"
                    color="blue"
                />
                
                <ul>
                    <li>Inbox</li>
                    <li>Important</li>
                    <li>Sent</li>
                    <li>Draft</li>
                    <li>Trash</li>
                </ul>
                <p>Labels</p>
                <ul>
                    <li>Personal</li>
                    <li>Work</li>
                    <li>Travel</li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;