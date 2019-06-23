import 'bootstrap/dist/css/bootstrap.css';
import './home-header.css';
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Logo from '../logo/logo';
import React, { Component } from "react";

export default class HomeHeader extends Component { 
    render() {
        return (
            <Navbar sticky="top" variant="dark" expand="xl">
                <Container>
                    <Logo />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link>Home</Nav.Link>
                            <Nav.Link>Product</Nav.Link>
                            <Nav.Link>About</Nav.Link>
                            <Nav.Link>Contact</Nav.Link>
                            <Nav.Link>Feedback</Nav.Link>
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