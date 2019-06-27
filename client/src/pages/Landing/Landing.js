import React, { Component } from 'react';
import LandingHeader from '../../components/LandingHeader/LandingHeader';
import Footer from '../../components/Footer/Footer';
import Container from "react-bootstrap/Container";
import classes from './Landing.css';

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
                <Container>
                    <h3>The best way to manage your subscriptions.</h3>
                    <button>Sign up for free</button>
                    <p>{this.state.data}</p>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default landingPage;