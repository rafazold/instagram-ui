import React, {Component} from 'react';
import TimeAgo from 'timeago-react';
import "./Comment.scss"

class Comment extends Component {
    render() {
        return (
            <div className="single-comment">
                <span className="single-comment-left">
                    <img className="comments-avatar" src={this.props.userAvatar} alt="avatar"/>
                    <span className="comment-content">{this.props.content}</span>
                </span>
                <span className="comment-content-right">
                    <TimeAgo className="comment-content-date" datetime={this.props.created} />
                    {this.props.userId._id === this.props.commentUser._id ? <button className="comment-delete">X</button> : ""}
                </span>

            </div>
        );
    }
}

export default Comment;