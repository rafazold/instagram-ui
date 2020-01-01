import React, {Component} from 'react';
import "./SinglePost.scss";
import config from "../config";
import {HashLoader} from "react-spinners";
import Engage from "../Feed/Post/Engage/Engage";
import Header from "../Feed/Post/Header/Header";
import Tags from "../Feed/Post/Tags/Tags";
import Comments from "./Comments/Comments";


class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            loading: true,
            user: null
        }
    }

    componentDidMount () {
        const {postId} = this.props.match.params;

        fetch(config.apiUrl + '/api/users/me', {
            credentials: 'include'

        })
            .then(res => res.json())
            .then(user => {
                this.setState({user});
            })
            .catch(e => console.log(e));

        fetch(`${config.apiUrl}/api/posts/${postId}`, {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(post => {
                this.setState({post,loading:false});
            });

    }

    render() {
        return (
            <div>
                {
                    this.state.loading ?
                    <div className="loading">
                        <HashLoader
                            sizeUnit={"px"}
                            size={180}
                            color={'#5798ff'}
                            loading={true}/>
                    </div> :
                        !this.state.user ?
                            <h2>Please log for more details</h2> :
                <article className="single-post">
                    <div className="single-post-image-wrapper">
                        <Engage likes={ this.state.post.likes.length} postId={this.props.match.params.postId} isLiked={this.state.post.isLiked} user={this.state.user}/>
                            <img className="single-post-image" src={this.state.post.image} alt="post"/>
                    </div>
                    <Header creationDate={this.state.post.created} avatar={this.state.post.user.avatar} userName={this.state.post.userName}/>
                    <div className="single-post-content">
                        <h1 className="single-post-title">{this.state.post.title}</h1>
                        <Tags tags={this.state.post.tags} />
                        <Comments postId={this.props.match.params.postId} userId={this.state.user}/>
                    </div>
                </article>
                }
            </div>
        );
    }
}

export default SinglePost;