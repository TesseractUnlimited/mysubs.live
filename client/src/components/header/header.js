import 'bootstrap/dist/css/bootstrap.css';
import './header.css';
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import React, { Component } from "react";

export default class Header extends Component {
    render() {
        return (
            <Navbar sticky="top" bg="dark" variant="dark" expand="xl">
                <Navbar.Brand href="/">mysubs.live</Navbar.Brand>
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
            </Navbar>
           
        );
    }
}