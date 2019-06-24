import React, { Component} from "react";
import Header from '../header/header';
import LandingHeader from '../landing-header/landing-header';
import Footer from '../footer/footer';
import Container from "react-bootstrap/Container";
import './layout.css';

class Layout extends Component {
    render() {
        return (
            <div>
                <LandingHeader />
                <Container>
                    <h1>Welcome to mysubs.live!</h1>
                </Container>
                <Footer />
            </div>  
        );
    }
}

export default Layout;