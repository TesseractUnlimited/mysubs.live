import React, { Component } from 'react';
import LandingHeader from '../landing-header/landing-header';
import Footer from '../footer/footer';
import Container from "react-bootstrap/Container";
import classes from './Signup.css';

class Signup extends Component {
    render() {
        return (
            <div>
                <LandingHeader />
                <Container>
                    <h3>sign up page</h3>
                    <button>Create account</button>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Signup;