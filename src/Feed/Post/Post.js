import React, {Component} from 'react';
import "./Post.scss";
import User from "./User/User";
import Engage from "./Engage/Engage";
import Tags from "./Tags/Tags";


class Post extends Component {
    render() {
        const creationDate = new Date(this.props.datePosted);
        console.log(creationDate);
        return (
            <div className="post">
                <User >USER DETAILS</User>
                <h2 className="postTitle">{this.props.title}</h2>
                <img src={this.props.src}/>
                <Engage likes={ `likes: ${this.props.likes}`}/>
                <Tags tags={this.props.tags} />
                <div className="datePosted">{creationDate.toDateString()}</div>
            </div>
        );
    }
}

export default Post;