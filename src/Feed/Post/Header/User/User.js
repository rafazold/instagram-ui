import React, {Component} from 'react';
import "./User.scss"
import { AiOutlineUser } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import config from "../../../../config";



class User extends Component {
    render() {
        return (
            <div className="user-details">
                {/*<FaUser className="user-icon" size="2em" color={this.props.iconColor} />*/}
                <img src={config.apiUrl + '/' + this.props.avatar} alt="userImage"/>
                {this.props.userName}
            </div>
        );
    }
}

export default User;