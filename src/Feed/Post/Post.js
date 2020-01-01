import React, {Component} from 'react';
import "./Post.scss";
import Engage from "./Engage/Engage";
import Tags from "./Tags/Tags";
import Header from "./Header/Header";
import {Link} from "react-router-dom";


class Post extends Component {
    render() {
        return (
            <article className="post">

                <div className="post-image-wrapper">
                    <Engage likes={ this.props.likes.length} postId = {this.props.postId} isLiked={this.props.isLiked} user={this.props.user}/>
                    <img className="post-image" src={this.props.src} alt="post"/>
                </div>
                <Header creationDate={this.props.datePosted} avatar={this.props.avatar} userName={this.props.userName}/>
                <div className="post-content">
                    <h1 className="post-title">{this.props.title}</h1>
                    <Tags tags={this.props.tags} />
                    <Link className="to-single-post" to={`/posts/${this.props.postId}`}>More details</Link>
                </div>
            </article>
        );
    }
}

export default Post;