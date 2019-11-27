import React, {Component} from 'react';
import "./User.scss"
import { AiOutlineUser } from "react-icons/ai";



class User extends Component {
    render() {
        return (
            <div className="user-details">
                <AiOutlineUser className="user-icon" size="2em" />
                {/*<img src={this.props.src}/>*/}
                {this.props.children}
            </div>
        );
    }
}

export default User;