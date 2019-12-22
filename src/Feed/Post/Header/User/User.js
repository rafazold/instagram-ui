import React, {Component} from 'react';
import "./User.scss"

class User extends Component {
    render() {
        return (
            <div className="user-details">
                {/*<FaUser className="user-icon" size="2em" color={this.props.iconColor} />*/}
                <img src={this.props.avatar} alt="userImage"/>
                {this.props.userName}
            </div>
        );
    }
}

export default User;