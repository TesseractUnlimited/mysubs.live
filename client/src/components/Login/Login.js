import React, { Component } from 'react';
import LandingHeader from '../LandingHeader/LandingHeader';
import Footer from '../Footer/Footer';
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