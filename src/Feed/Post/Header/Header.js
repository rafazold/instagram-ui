import React, {Component} from 'react';
import "./Header.scss"
import User from "./User/User";


// function formatDate(dateStr) {
//     const date = new Date(dateStr);
//     const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//     return months[date.getMonth()] + ' ' + date.getDate();
// }
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
                {/*<div className="post-date">{this.props.creationDate.toLocaleString("en-US", { month: 'short', day: 'numeric', year: 'numeric', })}</div>*/}
            </header>
        );
    }
}

export default Header;