import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import { Nav, Navbar, NavDropdown, Container, Button, Form } from 'react-bootstrap'; 
import Logo from '../Logo/Logo';
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component { 
    render() {
        return (
            <Navbar sticky="top" variant="dark" expand="xl">
                <Container>
                    <Logo />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto"> 
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </Nav>
                        <Nav className="mr-right">
                            <NavDropdown title="Name" className="nav-link">
                                <NavDropdown.Item>
                                    Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    Notifications
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    Settings
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    Help
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={this.props.onLogout}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}