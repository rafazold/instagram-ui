import React, {Component} from 'react';
import "./User.scss"

class User extends Component {
    render() {
        return (
            <div className="user-details">
                <img src={this.props.avatar} alt="userImage"/>
                <span className="post-user-text">{this.props.userName}</span>
            </div>
        );
    }
}

export default User;