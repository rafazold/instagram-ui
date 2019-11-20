import React, {Component} from 'react';
import "./Header.scss"
import User from "./User/User";


class Header extends Component {
    render() {
        return (
            <header className="post-header">
                <User>USER DETAILS</User>
                <div className="post-date">{this.props.creationDate.toLocaleString("en-US", { month: 'short', day: 'numeric', year: 'numeric', })}</div>
            </header>
        );
    }
}

export default Header;