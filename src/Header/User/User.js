import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./User.scss"
import config from "../../config";
import { withRouter } from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {MdEdit} from 'react-icons/md'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            hideMenu: true
        }
    }

    componentDidMount() {
        fetch(`${config.apiUrl}/api/users/me`, {
            credentials: 'include'

        })
            .then(res => res.json())
            .then(user => {
                this.setState({user});
            })
            .catch(e => console.log(e))
    }

    showUserMenu() {
            this.setState({hideMenu: !this.state.hideMenu})
    }


    hideUserMenu() {
        this.setState({hideMenu: true})
    }

    logout() {
        fetch(`${config.apiUrl}/api/users/logout`, {
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
            <div className="user-options-wrapper" onMouseLeave={this.hideUserMenu.bind(this)}>
                {
                    this.state.user ?
                        <div className="user-box">
                            <div className="header-user-details user-box-item">
                                Hello {this.state.user.username}
                            </div>
                            <div className="user-avatar user-box-item" onClick={this.showUserMenu.bind(this)}>
                                {
                                    this.state.user
                                        ? <img src={this.state.user.avatar}/>
                                        : <FaUserCircle size="2em" />

                                }

                            </div>
                            <Link to="/editprofile" title="Edit profile" className="user-box-item"><MdEdit size="1.5em"/></Link>
                            <span title="log out" onClick={this.logout.bind(this)} className="user-box-item" ><FiLogOut size="1.5em"/></span>
                        </div>

                        : <div className="user-box">
                            <Link className="user-text" to="/register">Register</Link>
                            <Link className="user-text" to="/login">Login</Link>
                            <div className="user-avatar"
                                 onClick={this.showUserMenu.bind(this)}>
                                <FaUserCircle size="2em" />
                            </div>
                        </div>}
            </div>
        );
    }
}

export default withRouter(User);