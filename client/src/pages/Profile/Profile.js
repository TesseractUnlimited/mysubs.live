import './Profile.css';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Profile extends Component {

// create a function that goes through a user's subscriptions and prints them out as cards
render() {
    return (
        <div>
            <Container>
                <h2>Profile</h2>
            </Container>
        </div>
        );
    }
}

export default Profile;
