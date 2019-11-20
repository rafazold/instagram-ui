import React, {Component} from 'react';
import "./Feed.scss";
import Post from "./Post/Post";


class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/evyros/fake-api/posts")
            .then(res => res.json())
            .then(posts => {
                this.setState({posts});
            });
    }

    render() {
        return (
            <div className="feed">
                {this.state.posts.map(post => {
                    return <div className="post-wrapper">
                        <Post title={post.title} src={post.image} likes={post.likes} datePosted={post.created} tags={post.tags}/>
                    </div>
                })}
            </div>
        );
    }
}


export default Feed;