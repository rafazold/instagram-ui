import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./User.scss"
import config from "../../config";
import { withRouter } from 'react-router-dom';
import {IoIosSettings} from 'react-icons/io'
import Toggle from "react-toggle";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            hideMenu: true
        }
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

    toggleMenu() {
            this.setState({hideMenu: !this.state.hideMenu})
    }

    logout() {
        fetch(config.apiUrl + '/api/users/logout', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if(res.status === 200) {
                    this.props.history.push('/login');
                }
            })
            .catch(e => console.log('Unexpected error: ', e))

    }

    render() {
        return (
            <div className="user-box">
                {
                    this.state.user
                        ? <div className={"header-user-details"}>
                            Hello {this.state.user.username}
                    </div>
                        : <div>
                            <Link className="user-text" to="/register">Register</Link>
                            <Link className="user-text" to="/login">Login</Link>
                        </div>}
                <div>
                    <div className="user-avatar" onClick={this.toggleMenu.bind(this)}>
                        USER
                    </div>
                    <ul className={`user-options ${this.state.hideMenu ? "hide-user-options" : ""}`}>
                        <li>Dark Mode</li>
                        <li>Edit Profile</li>
                        <li onClick={this.logout.bind(this)}>Logout</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(User);