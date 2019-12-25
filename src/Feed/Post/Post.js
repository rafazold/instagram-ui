import React, {Component} from 'react';
import "./Post.scss";
import Engage from "./Engage/Engage";
import Tags from "./Tags/Tags";
import Header from "./Header/Header";


class Post extends Component {
    render() {
        return (
            <article className="post">

                <div className="post-image-wrapper">
                    <Engage likes={ this.props.likes.length} postId = {this.props.postId} isLiked={this.props.isLiked}/>
                    <img className="post-image" src={this.props.src} alt="post"/>
                </div>
                <Header creationDate={this.props.datePosted} avatar={this.props.avatar} userName={this.props.userName}/>
                <div className="post-content">
                    <h1 className="post-title">{this.props.title}</h1>
                    <Tags tags={this.props.tags} />
                </div>
            </article>
        );
    }
}

export default Post;