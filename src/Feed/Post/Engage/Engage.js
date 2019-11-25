import React, {Component} from 'react';
import { AiOutlineCloudDownload, AiOutlineShareAlt, AiOutlineHeart } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";

import "./Engage.scss"

class Engage extends Component {
    render() {
        return (
            <section className="engage">
                <div className="engageButtons">
                    <span className="post-action-buttons">
                        <button className="commentButton"><FaRegComments /></button>
                        <button className="shareButton"><AiOutlineShareAlt /></button>
                        <button className="saveButton"><AiOutlineCloudDownload/></button>
                    </span>
                    <span className="post-likes">
                        <button className="likeButton"><AiOutlineHeart/></button>
                        <span className="likesCount">{this.props.likes}</span></span>
                </div>
            </section>
        );
    }
}

export default Engage;


