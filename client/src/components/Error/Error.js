import 'bootstrap/dist/css/bootstrap.css';
import './Error.css';
import React, { Component } from "react";
import Row  from 'react-bootstrap/Row';
import Header from '../header/header'
import Footer from '../footer/footer'
import Container from 'react-bootstrap/Container';

export default class Error extends Component { 
    render() {
        return (
            <div>    
                <Header />
                <Container className="error-container">
                    <h1 className="h1-error">Oops!</h1>
                    <h2 className="h2-error">We can't seem to find the page you're looking for. </h2>
                    <h2 className="h2-error">Error Code: 404</h2>
                </Container>
                <Footer />
            </div>
        );
    }
}