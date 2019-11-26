import React, {Component} from 'react';
import "./Feed.scss";
import Post from "./Post/Post";
import {HashLoader} from "react-spinners";


class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/evyros/fake-api/posts")
            .then(res => res.json())
            .then(posts => {
                this.setState({posts,loading:false});
            });
    }

    render() {

        return (
            <div>
                    {this.state.loading ?
                        <div className="loading">
                            <HashLoader
                                sizeUnit={"px"}
                                size={180}
                                color={'#5798ff'}
                                loading={true}/>
                        </div> : null
                    }
                <div className="feed d-flex flex-wrap card-group">
                    {this.state.posts.map(post => {
                        return <div className="post-wrapper col-sm-12 col-md-4">
                            <Post title={post.title} src={post.image} likes={post.likes} datePosted={post.created}
                                  tags={post.tags}/>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}


export default Feed;