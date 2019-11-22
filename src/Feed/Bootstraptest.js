import React, {Component} from 'react';
import './Bootstraptest.scss'

class Bootstraptest extends Component {
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
            <div>
                {this.state.posts.map(post => {
                    return <div className="card-deck">

                        <div className="card">
                            <img src={post.image} className="card-img-top" alt="post-image" />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to
                                    additional content.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>

                    </div>
                })}
            </div>
        );
    }
}

export default Bootstraptest;