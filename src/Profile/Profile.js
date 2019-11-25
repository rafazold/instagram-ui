import React, {Component} from 'react';
import './Profile.scss'

class Profile extends Component {
    render() {
        return (
            <div>
                Profile
                <div calssName="loading">
                    <div className="spinner-grow text-primary spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-secondary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-success" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-danger" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="spinner-grow text-warning" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>

            </div>
        );
    }
}

export default Profile;