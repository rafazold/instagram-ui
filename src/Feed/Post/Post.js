import React, {Component} from 'react';
import "./Post.scss";
import Engage from "./Engage/Engage";
import Tags from "./Tags/Tags";
import Header from "./Header/Header";
import config from '../../config'


class Post extends Component {
    render() {
        return (
            <article className="post">
                <Header creationDate={this.props.datePosted} iconColor={this.props.iconColor} userName={this.props.userName}/>
                {/*<Header creationDate={new Date(this.props.datePosted * 1000)} />*/}
                <div className="post-image">
                    <img src={config.apiUrl + '/' + this.props.src} alt="post"/>
                </div>
                <Engage likes={ this.props.likes}/>
                <div className="post-content">
                    <h1 className="post-title">{this.props.title}</h1>
                    <Tags tags={this.props.tags} />
                </div>
            </article>
        );
    }
}

export default Post;