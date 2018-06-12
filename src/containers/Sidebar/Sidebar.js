import React, {Component} from 'react';
import './Sidebar.css';
import PillButton from '../../components/PillButton';

class Sidebar extends Component {
    state = {

    }

    render () {
        return(
            <div className="col-md-2 bg-gray8 sidebar">
                <PillButton 
                    text="Compose"
                    color="blue"
                />
                <ul className="text-white bold">
                    <li>Inbox ({this.props.numberUnReadEmails})</li>
                    <li>Important</li>
                    <li>Sent</li>
                    <li>Draft</li>
                    <li>Trash</li>
                </ul>
                <h3 className="text-blue9 text-lg">LABELS</h3>
                <ul className="text-white bold">
                    <li>Personal</li>
                    <li>Work</li>
                    <li>Travel</li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;