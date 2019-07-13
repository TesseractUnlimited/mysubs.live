import 'bootstrap/dist/css/bootstrap.css';
import './LandingHeader.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import Logo from '../Logo/Logo';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import CallToActionBtn from '../CallToActionBtn/CallToActionBtn';

export default class LandingHeader extends Component { 
    render() {
        return (
            <Navbar className="landing-page__header__navbar" sticky="top" variant="dark" expand="xl">
                <Container>
                    <Logo />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="landing-page__header__navbar__nav-link" to="/">Home</Link>
                            <Link className="landing-page__header__navbar__nav-link" to="/">Product</Link>
                            <Link className="landing-page__header__navbar__nav-link" to="/">About</Link>
                            <Link className="landing-page__header__navbar__nav-link" to="/">Contact</Link>
                            <Link className="landing-page__header__navbar__nav-link" to="/">Feedback</Link>
                        </Nav>
                        <Nav className="mr-right">
                            <Link className="landing-page__header__navbar__nav-link" to="/login">Login</Link>
                            <CallToActionBtn class="landing-page__header__navbar__sign-up-btn" sendTo={'/signup'}>
                                Sign Up
                            </CallToActionBtn>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}