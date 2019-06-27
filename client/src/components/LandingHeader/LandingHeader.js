import 'bootstrap/dist/css/bootstrap.css';
import './LandingHeader.css';
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from '../Logo/Logo';
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class LandingHeader extends Component { 
    render() {
        return (
            <Navbar sticky="top" variant="dark" expand="xl">
                <Container>
                    <Logo />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto"> {/* These should link to different positions on the landingpage*/}
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/">Product</Link>
                            <Link className="nav-link" to="/">About</Link>
                            <Link className="nav-link" to="/">Contact</Link>
                            <Link className="nav-link" to="/">Feedback</Link>
                        </Nav>
                        <Nav className="mr-right">
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/signup">Sign up</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}