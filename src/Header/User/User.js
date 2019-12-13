import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./User.scss"
import config from "../../config";
import { withRouter } from 'react-router-dom';
import {FaUser} from 'react-icons/fa'
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
                // console.log(user.avatarColor);
                this.setState({user});
            })
            .catch(e => console.log(e))
    }

    toggleMenu() {
            this.setState({hideMenu: !this.state.hideMenu})
    }
    showUserMenu() {
        this.setState({hideMenu: true})
    }

    hideUserMenu() {
        this.setState({hideMenu: true})
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
            <div >
                {
                    this.state.user
                        ? <div className="user-box">
                            <div className="header-user-details">
                                Hello {this.state.user.username}
                            </div>
                            <div className="user-avatar" onClick={this.toggleMenu.bind(this)}>
                                {
                                    this.state.user
                                        ? <img src={config.apiUrl + '/' + this.state.user.avatar}/>
                                        : <FaUser size="2em" />

                                }

                            </div>
                                <ul className={`user-options ${this.state.hideMenu ? "hide-user-options" : ""}`}
                                    // onMouseOut={this.hideUserMenu.bind(this)}
                                    >
                                    <li>Dark Mode</li>
                                    <li><Link to="/editprofile">Edit Profile</Link></li>
                                    <li onClick={this.logout.bind(this)}>Logout</li>
                                </ul>
                        </div>

                        : <div className="user-box">
                            <Link className="user-text" to="/register">Register</Link>
                            <Link className="user-text" to="/login">Login</Link>
                            <div className="user-avatar"
                                 onClick={this.toggleMenu.bind(this)}>
                                <FaUser size="2em" />
                            </div>
                        </div>}
            </div>
        );
    }
}

export default withRouter(User);