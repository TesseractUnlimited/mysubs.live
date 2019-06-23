import 'bootstrap/dist/css/bootstrap.css';
import './footer.css';
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import React, { Component } from "react";

const logo = require('../../../public/images/logo-white.png');

export default class Footer extends Component { 
    render() {
        return (
            <Navbar sticky="bottom">
                <Container>
                    <Navbar.Brand className="navbar__brand-position" href="/">
                        <img
                            alt='mysubs.live Logo'
                            src={logo}
                            className="d-inline-block align-middle"
                            height='20'
                        />
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link>Terms</Nav.Link>
                        <Nav.Link>Privacy Policy</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}