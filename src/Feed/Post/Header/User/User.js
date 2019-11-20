import React, {Component} from 'react';
import "./User.scss"
import {faGrinAlt, faUser} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



class User extends Component {
    render() {
        return (
            <div className="user-details">
                <FontAwesomeIcon className="user-icon" icon={faUser} size="2x" />
                {/*<img src={this.props.src}/>*/}
                {this.props.children}
            </div>
        );
    }
}

export default User;