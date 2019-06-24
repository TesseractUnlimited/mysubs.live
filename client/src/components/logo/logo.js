import 'bootstrap/dist/css/bootstrap.css';
import './logo.css'
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from "react";

const logo = require('../../../public/images/logo-white.png');

export default class Logo extends Component { 
    render() {
        return (
            <Navbar.Brand className="navbar__brand-position" href="/">
                <img
                    alt='mysubs.live Logo'
                    src={logo}
                    className="d-inline-block align-middle"
                    height='20'
                />
            </Navbar.Brand>
        );
    }
}