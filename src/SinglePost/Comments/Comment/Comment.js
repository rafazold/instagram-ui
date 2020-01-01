import React, {Component} from 'react';
import TimeAgo from 'timeago-react';
import "./Comment.scss"
import config from "../../../config";

class Comment extends Component {

    componentDidMount() {
        console.log(this.props.userId, this.props.commentUser)
    }

    handleDelete(e) {
        console.log(`deleting message - msgId: ${this.props.commentId}, user: ${this.props.userId}, commentUser: ${this.props.commentUser}, postId: ${this.props.postId}`)

        fetch(`${config.apiUrl}/api/posts/${this.props.postId}/${this.props.commentId}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if(res.status === 200) {
                    window.location.reload();
                }} )
            //TODO: use redux to remove comments from list.
            .catch(e => console.log(e))
    }

    render() {
        return (
            <div className="single-comment">
                <span className="single-comment-left">
                    <img className="comments-avatar" src={this.props.userAvatar} alt="avatar"/>
                    <span className="comment-content">{this.props.content}</span>
                </span>
                <span className="comment-content-right">
                    <TimeAgo className="comment-content-date" datetime={this.props.created} />
                    {/*TODO: fix bug*/}
                    {(this.props.userId) && (this.props.userId._id === this.props.commentUser._id) ? <button onClick={this.handleDelete.bind(this)} className="comment-delete">X</button> : ""}
                </span>

            </div>
        );
    }
}

export default Comment;