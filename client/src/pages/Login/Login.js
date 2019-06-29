import React, { Component } from 'react';
import LandingHeader from '../../components/LandingHeader/LandingHeader';
import Footer from '../../components/Footer/Footer';
import Container from "react-bootstrap/Container";
import classes from './Login.css';

class Login extends Component {
    render() {
        return (
            <div>
                <LandingHeader />
                <Container>
                    <div>
                        <p>Please Enter a Username:</p>
                        <input type='text'/>
                        <p>Please Enter a Password:</p>
                        <input type='text'/>
                    </div>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Login;