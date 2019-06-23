import 'bootstrap/dist/css/bootstrap.css';
import './header.css';
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import React, { Component } from "react";

const logo = require('../../../public/images/logo-white.png');

export default class Header extends Component { 
    render() {
        return (
            <Navbar sticky="top" variant="dark" expand="xl">
                <Container>
                    <Navbar.Brand className="navbar__brand-position" href="/">
                    <img
                        alt='mysubs.live Logo'
                        src={logo}
                        className="d-inline-block align-middle"
                        height='20'
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link>Dashboard</Nav.Link>
                        </Nav>
                        <Nav className="mr-right">
                            <Nav.Link>Login</Nav.Link>
                            <Nav.Link>Sign up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}