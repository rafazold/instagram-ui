import React, {Component} from 'react';
import "./Header.scss"
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>
                        <Link className="navbar-brand" to="/">Instagram</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/profile">Profile</Link>
                            <Link className="nav-link" to="/post/create">New Post</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        );
    }
}

export default Header;