import React, {Component} from 'react';
import "./Header.scss"
import User from "./User/User";

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' ,year: 'numeric', })
}

class Header extends Component {
    render() {
        return (
            <header className="post-header">
                <User avatar={this.props.avatar} userName={this.props.userName} />
                <div className="post-date">{formatDate(this.props.creationDate)}</div>
            </header>
        );
    }
}

export default Header;