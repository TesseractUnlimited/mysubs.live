import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import Nav from 'react-bootstrap/Nav'; 
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
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
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}