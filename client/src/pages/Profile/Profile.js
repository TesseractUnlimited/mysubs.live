import './Profile.css';
import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

class Profile extends Component {
    state = {
        username: '',
        name: '',
        email: ''
    }
    
    componentDidMount() {
        console.log(this.props.username);
        fetch('user/' + `${this.props.username}`, {
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
            <div className="page-parent">
                <Row bsPrefix="profile__row">
                    <Container className="profile__card-container">
                        <h1>Profile</h1>
                        <h2>Hi, {this.state.name}</h2>
                        <h4>Username: {this.state.username}</h4>
                        <h4>Email: {this.state.email}</h4>
                    </Container>
                </Row>
            </div>
            );
        }
    }

export default Profile;
