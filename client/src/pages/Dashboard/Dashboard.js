import './Dashboard.css';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import CardItem from '../../components/CardItem/CardItem';
import CardGroup from '../../components/CardGroup/CardGroup';

class Dashboard extends Component {
// create a function that goes through a user's subscriptions and prints them out as cards
    state = {
        subs: []
    }
    
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
                                subs: user.subs
                            });
                        })
                        .catch(err => console.log(err));
                }
            })
            .catch(err => {
                console.log("fetch: " + err);
            });
    }

    cardList = (props) => {
        const subs = props.user.subs;
        const cardItems = subs.map((sub) => {
            <CardItem cardTitle={sub.name} cardBody={sub.url}/>
        });
    }   

    render() {
        return (
            <div className="page-parent">   
                <Container className="card-holder">
                    <CardGroup>
                        <cardItems user={user} />
                    </CardGroup>
                </Container>
            </div>
            );
        }
    }

export default Dashboard;
