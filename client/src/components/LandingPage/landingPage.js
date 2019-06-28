import React, { Component } from 'react';
import LandingHeader from '../landing-header/landing-header';
import Footer from '../footer/footer';
import Container from "react-bootstrap/Container";
import classes from './landingPage.css';

class landingPage extends Component {
    render() {
        const style = classes.div;
        return (
            <div>
                <LandingHeader />
                <Container>
                    <h2>The best way to manage your subscriptions.</h2>
                    <button>Sign up for free</button>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default landingPage;