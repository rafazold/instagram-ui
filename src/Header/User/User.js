import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./User.scss"
import config from "../../config";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {user: null}
    }

    componentDidMount() {
        fetch(config.apiUrl + '/api/users/me', {
            credentials: 'include'

        })
            .then(res => res.json())
            .then(user => {
                this.setState({user});
            })
            .catch(e => console.log(e))
    }

    render() {
        return (
            <div className="User">
                {
                    this.state.user
                        ? <div>Hello {this.state.user.name}</div>
                        : <div className="user-text">
                            <Link to="/register">Register</Link>
                            <Link to="/login">Login</Link>
                        </div>}
                <div className="user-avatar">
                        USER
                </div>

            </div>
        );
    }
}

export default User;