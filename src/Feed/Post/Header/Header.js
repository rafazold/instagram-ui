import React, {Component} from 'react';
import "./Header.scss"
import User from "./User/User";


function formatDate(dateStr) {
    const date = new Date(dateStr);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return months[date.getMonth()] + ' ' + date.getDate();
}

class Header extends Component {
    render() {
        return (
            <header className="post-header">
                <User iconColor={this.props.iconColor} userName={this.props.userName} />
                <div className="post-date">{formatDate(this.props.creationDate)}</div>
                {/*<div className="post-date">{this.props.creationDate.toLocaleString("en-US", { month: 'short', day: 'numeric', year: 'numeric', })}</div>*/}
            </header>
        );
    }
}

export default Header;