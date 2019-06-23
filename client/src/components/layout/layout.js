import React, { Component} from "react";
import Header from '../header/header';
import Homeheader from '../home-header/home-header';
import Footer from '../footer/footer';
import Container from "react-bootstrap/Container";
import './layout.css';

class Layout extends Component {
    render() {
        return (
            <div>
                <Homeheader />
                <Container>
                    <h1>Welcome to mysubs.live!</h1>
                </Container>
                <Footer />
            </div>  
        );
    }
}

export default Layout;