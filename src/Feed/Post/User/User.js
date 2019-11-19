import React, {Component} from 'react';
import "./User.scss"

class User extends Component {
    render() {
        return (
            <div className="userDetails">
                {/*<img src={this.props.src}/>*/}
                {this.props.children}
            </div>
        );
    }
}

export default User;