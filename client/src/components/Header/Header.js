import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import { Nav, Navbar, Dropdown, Container } from 'react-bootstrap'; 
import Logo from '../Logo/Logo';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component { 
    render() {
        return (
            <Navbar className="auth-user__header__navbar" sticky="top" variant="dark" expand="xl">
                <Container>
                    <Logo />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto"> 
                            <Link className="auth-user__header__nav-link" to="/dashboard">Dashboard</Link>
                            <Link className="auth-user__header__nav-link" to="/marketplace">Marketplace</Link>
                        </Nav>
                        <Nav className="mr-right">
                            <Dropdown as={Nav.Item}>
                                <Dropdown.Toggle as={Nav.Link} className="auth-user__header__nav-link">
                                    Name
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <LinkContainer to="/profile">
                                        <Dropdown.Item>Profile</Dropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/messages">
                                        <Dropdown.Item>Messages</Dropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/settings">
                                        <Dropdown.Item>Settings</Dropdown.Item>
                                    </LinkContainer>
                                    <Dropdown.Divider />
                                    <LinkContainer to="/help">
                                        <Dropdown.Item>Help</Dropdown.Item>
                                    </LinkContainer>
                                    <Dropdown.Item onClick={this.props.onLogout}>
                                        Logout
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}