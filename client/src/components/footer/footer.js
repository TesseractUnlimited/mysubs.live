import './Footer.css';
import { Nav, Container } from 'react-bootstrap';
import Logo from '../Logo/Logo';
import React, { Component } from "react";

export default class Footer extends Component { 
    render() {
        return (
            <Nav className="footer">
                <Container className="d-flex justify-content-center align-items-center footer-container">
                    <Logo />
                    <Nav.Link className="footer__nav-link">Terms</Nav.Link>
                    <Nav.Link className="footer__nav-link">Privacy Policy</Nav.Link>
                </Container>
            </Nav>
        );
    }
}