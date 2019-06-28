import React, { Component } from 'react';
import LandingHeader from '../landing-header/landing-header';
import Footer from '../footer/footer';
import Container from "react-bootstrap/Container";
import classes from './Login.css';

class Login extends Component {
    render() {
        return (
            <div>
                <LandingHeader />
                <Container>
                    <h3>Login page</h3>
                    <button>Log in</button>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Login;