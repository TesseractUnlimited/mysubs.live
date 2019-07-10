import './Profile.css';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Profile extends Component {
    state = {
        username: '',
        name: '',
        email: ''
    }
    // create a function that goes through a user's subscriptions and prints them out as cards
    componentDidMount() {
        console.log(this.props.username);
        fetch('api/' + `${this.props.username}`, {
                headers: {
                    Authorization: 'Bearer ' + this.props.token,
                    ContentType: 'application/json'
                }
            })
            .then(res => {
                if (res.status === 400) {
                    throw new Error('User not found!');
                }
                else if (res.status === 404) {
                    throw new Error ('User not found!');
                }
                else {
                    res.json()
                        .then(({ user }) => {
                            console.log(user)
                            this.setState({
                                name: user.name,
                                username: user.username,
                                email: user.email
                            });
                        })
                        .catch(err => console.log(err));
                }
            })
            .catch(err => {
                console.log("fetch: " + err);
            });
    }
    render() {
        return (
            <div>
                <Container>
                    <h1>Profile</h1>
                    <h2>Hi, {this.state.name}</h2>
                    <h4>Username: {this.state.username}</h4>
                    <h4>Email: {this.state.email}</h4>
                </Container>
            </div>
            );
        }
    }

export default Profile;
