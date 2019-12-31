import React, {Component} from 'react';
import config from "../../config";
import Comment from "./Comment/Comment";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        fetch(`${config.apiUrl}/api/posts/${this.props.postId}/comments`, {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(comments => {
                this.setState({comments});
            });
    }

    render() {
        return (
            <div className="single-post-comments">
                {this.state.comments.map(comment => {
                    return <div key={comment._id}>
                        <Comment
                        content={comment.content}
                        created={comment.created}
                        username={comment.user[0].username}
                        userAvatar={comment.user[0].avatar}
                        postId={this.props.postId}
                        commentId={comment._id}
                        userId={this.props.userId}
                        commentUser={comment.user[0]}
                        />
                    </div>
                })}
            </div>
        );
    }
}

export default Comments;