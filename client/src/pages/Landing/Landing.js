import React, { Component } from 'react';
import LandingHeader from '../../components/LandingHeader/LandingHeader';
import Footer from '../../components/Footer/Footer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";
import './Landing.css';

class landingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        fetch('/api', { headers: {    
            "accepts": "application/json"
        }})
            .then(res => res.json())
            .catch(err => console.log(err))
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
    }
    
    render() {
        return (
            <div>
                <LandingHeader />
                <div className="home">
                    <Container className="centered">
                            <h1>The best way to manage your subscriptions.</h1>        
                            <button>Try it out!</button>
                    </Container>
                </div>
                <div className="product">
                    <Container>
                        <h1>Product</h1>
                        <h2>Sign in once. Have access forever.</h2>
                    </Container>
                </div>
                <div className="about">
                    <Container>
                        <h1>About</h1>
                    </Container>
                </div>
                <div className="contact">
                    <Container>
                        <h1>Contact</h1>
                    </Container>
                </div>
                <div className="feedback">
                    <Container>
                        <h1>Feedback</h1>
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}

export default landingPage;