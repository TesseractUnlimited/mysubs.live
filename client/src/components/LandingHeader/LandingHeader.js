import 'bootstrap/dist/css/bootstrap.css';
import './LandingHeader.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import Logo from '../Logo/Logo';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

export default class LandingHeader extends Component { 
    render() {
        return (
            <Navbar className="landing-page__header__navbar" sticky="top" variant="dark" expand="xl">
                <Container>
                    <Logo />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <HashLink className="landing-page__header__navbar__nav-link" to="/">Home</HashLink>
                            <HashLink className="landing-page__header__navbar__nav-link" to="/#product">Product</HashLink>
                            <HashLink className="landing-page__header__navbar__nav-link" to="/#about">About</HashLink>
                            <HashLink className="landing-page__header__navbar__nav-link" to="/#contact">Contact</HashLink>
                            <HashLink className="landing-page__header__navbar__nav-link" to="/#feedback">Feedback</HashLink>
                        </Nav>
                        <Nav className="mr-right">
                            <Link className="landing-page__header__navbar__nav-link" to="/login">Login</Link>
                            <PrimaryButton class="landing-page__header__navbar__sign-up-btn" sendTo={'/signup'}>
                                Sign Up
                            </PrimaryButton>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}