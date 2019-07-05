import './Dashboard.css';
import React, { Component } from 'react';
import { Container, Card, Row } from 'react-bootstrap';

class Dashboard extends Component {
// create a function that goes through a user's subscriptions and prints them out as cards
    render() {
        return (
            <div>
                <Container>
                    <Card>
                        <Card.Body>
                            <Card.Title>Spotifty</Card.Title>
                            <Card.Text>A Spotifty Subscription.</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Spotifty</Card.Title>
                            <Card.Text>A Spotifty Subscription.</Card.Text>
                        </Card.Body>
                    </Card>

                </Container>
            </div>
            );
        }
    }

export default Dashboard;
