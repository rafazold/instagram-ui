import React, {Component} from 'react';
import TimeAgo from 'timeago-react';
import "./Comment.scss"

class Comment extends Component {
    render() {
        return (
            <div className="single-comment">
                <img className="comments-avatar" src={this.props.userAvatar} alt=""/>
                <span className="comment-content" >{this.props.content}</span>
                <span className="comment-date"><TimeAgo datetime={this.props.created} /></span>
            </div>
        );
    }
}

export default Comment;