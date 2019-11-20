import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownloadAlt, faShare } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';

import "./Engage.scss"

class Engage extends Component {
    render() {
        return (
            <section className="engage">
                <div className="engageButtons">
                    <button className="likeButton"><FontAwesomeIcon icon={faHeart} size="1x" /></button>
                    <span className="likesCount">{this.props.likes}</span>
                    <button className="commentButton"><FontAwesomeIcon icon={faComment} size="1x" /></button>
                    <button className="shareButton"><FontAwesomeIcon icon={faShare} size="1x" /></button>
                    <button className="saveButton"><FontAwesomeIcon icon={faCloudDownloadAlt} size="1x" /></button>
                </div>
            </section>
        );
    }
}

export default Engage;