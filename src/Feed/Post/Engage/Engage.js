import React, {Component} from 'react';
import { AiOutlineCloudDownload, AiOutlineShareAlt, AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import config from "../../../config";

import "./Engage.scss"

class Engage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            liked: false
        }
    }

    componentDidMount() {
        this.setState({liked: this.props.isLiked})
    }

    likePost() {
        this.setState({liked: !this.state.liked});
        fetch(`${config.apiUrl}/api/posts/${this.props.postId}/like`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body:
                JSON.stringify({likeStatus: !this.state.liked}),
            credentials: 'include'
        })
            .then(res => res.json())
            .catch(e => console.log('Unexpected error: ', e))
    }

    render() {
        return (
            <section className="engage">
                <div className="engageButtons">
                    <span className="post-action-buttons">
                        <button className="commentButton"><FaRegComments /></button>
                        <button className="shareButton"><AiOutlineShareAlt /></button>
                        <button className="saveButton"><AiOutlineCloudDownload/></button>
                    </span>
                    <span className="post-likes">
                        <button className="likeButton" onClick={this.likePost.bind(this)}>
                            {this.state.liked ? <AiTwotoneHeart color="#a42e2e" /> : <AiOutlineHeart/>}
                        </button>
                        <span className="likesCount">{this.props.likes}</span></span>
                </div>
            </section>
        );
    }
}

export default Engage;


