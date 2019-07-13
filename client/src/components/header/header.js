import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import { Nav, Navbar, NavDropdown, Container, Button, Form } from 'react-bootstrap'; 
import Logo from '../Logo/Logo';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component { 
    render() {
        return (
            <Navbar className="auth-user__header" sticky="top" variant="dark" expand="xl">
                <Container>
                    <Logo />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto"> 
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </Nav>
                        <Nav className="mr-right">
                            <NavDropdown title="Name" className="nav-link">
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/messages">
                                    <NavDropdown.Item>Messages</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/settings">
                                    <NavDropdown.Item>Settings</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Divider />
                                <LinkContainer to="/help">
                                    <NavDropdown.Item>Help</NavDropdown.Item>
                                </LinkContainer>
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