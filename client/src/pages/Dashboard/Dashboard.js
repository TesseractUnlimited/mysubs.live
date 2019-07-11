import './Dashboard.css';
import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import CardItem from '../../components/CardItem/CardItem';
import SubCardGroup from '../../components/SubCardGroup/SubCardGroup';
import UserCardGroup from '../../components/UserCardGroup/UserCardGroup';
import OverviewCardGroup from '../../components/OverviewCardGroup/OverviewCardGroup';
import UserCardItem from '../../components/UserCardItem/UserCardItem';

class Dashboard extends Component {
// create a function that goes through a user's subscriptions and prints them out as cards
    /*
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
        const subs = props.subs;
        const cardItems = subs.map((sub) => {
            <CardItem cardTitle={sub.name} cardBody={sub.url}/>
        });
    }   
    */
    
    render() {
        return (
            <div className="page-parent">
                <Row bsPrefix="dash-row">
                    <Container className="card-holder__overview col-7">
                        <OverviewCardGroup title="Overview">

                        </OverviewCardGroup>
                    </Container>
                    <Container className="card-holder__users col-4">
                        <UserCardGroup title="Users">       
                            <UserCardItem name="Salvador Salcedo" role="Admin" />   
                            <UserCardItem name="Lulu" role="User"/>   
                        </UserCardGroup>
                    </Container>
                </Row>    
                <Row>
                    <Container className="card-holder__subs">
                        <SubCardGroup title="Subs">
                            <CardItem
                                cardTitle="Netflix"
                                cardBody="A Netflix Subscription." 
                                price="$10/mo"
                                dueDate="15/07"
                                lastUsed="10/07"
                            />
                            <CardItem
                                cardTitle="Hulu"
                                cardBody="A Hulu Subscription." 
                                price="$10/mo"
                                dueDate="15/07"
                                lastUsed="10/07"
                            />
                            <CardItem
                                cardTitle="Github"
                                cardBody="A Github Subscription." 
                                price="$10/mo"
                                dueDate="15/07"
                                lastUsed="10/07"
                            />
                        </SubCardGroup>
                    </Container>    
                </Row>
            </div>
            );
        }
    }

export default Dashboard;
