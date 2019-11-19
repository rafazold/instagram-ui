import React, {Component} from 'react';
import "./Engage.scss"

class Engage extends Component {
    render() {
        return (
            <section className="engage">
                <div className="engageButtons">
                    <button className="likeButton"><img src="/buttons/like.png"/></button>
                    <button className="commentButton"><img src="/buttons/comment.png"/></button>
                    <button className="shareButton"><img src="/buttons/share.png"/></button>
                    <button className="saveButton"><img src="/buttons/save.png"/></button>
                </div>
                <div className="likesCount">{this.props.likes}</div>
            </section>
        );
    }
}

export default Engage;