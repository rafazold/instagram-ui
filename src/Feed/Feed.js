import React, {Component} from 'react';
import "./Feed.scss";
import Post from "./Post/Post";


class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loaded: false
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
            <div className="feed d-flex flex-wrap card-group">
                {this.state.posts.map(post => {
                    return <div className="post-wrapper col-sm-12 col-md-4">
                        <Post title={post.title} src={post.image} likes={post.likes} datePosted={post.created} tags={post.tags}/>
                    </div>
                })}
            </div>
        );
    }
}


export default Feed;