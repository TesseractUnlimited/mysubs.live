import 'bootstrap/dist/css/bootstrap.css';
import './footer.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Logo from '../logo/logo';
import React, { Component } from "react";

export default class Footer extends Component { 
    render() {
        return (
            <Nav className="footer">
                <Container className="d-flex justify-content-center align-items-center footer-container">
                    <Logo />
                    <Nav.Link>Terms</Nav.Link>
                    <Nav.Link>Privacy Policy</Nav.Link>
                </Container>
            </Nav>
        );
    }
}