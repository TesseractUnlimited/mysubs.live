import React, { Component} from "react";
import Header from '../Header/Header';
import LandingHeader from '../LandingHeader/LandingHeader';
import Footer from '../Footer/Footer';
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