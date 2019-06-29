import './Dashboard.css';
import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Container from 'react-bootstrap/Container';

class Dashboard extends Component {
render() {
    return (
        <div>
            <Header />
            <div>
                <Container>
                    <h1 className="dash-h1">This is the Login Page!/ Right here will be the dash?</h1>
                    <h2 className="dash-h2"> Welcome to our new Website! we will be up and running in no time</h2>
                    <h2 className="dash-h2"> Anotha one</h2>
                    <h2 className="dash-h2"> Anotha one</h2>
                </Container>
            </div>
            <Footer />
        </div>
        );
    }
}

export default Dashboard;
