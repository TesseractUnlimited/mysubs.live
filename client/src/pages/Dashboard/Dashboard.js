import './Dashboard.css';
import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import SubCardGroup from '../../components/SubCardGroup/SubCardGroup';
import UserCardGroup from '../../components/UserCardGroup/UserCardGroup';
import OverviewCardGroup from '../../components/OverviewCardGroup/OverviewCardGroup';
import UserCardItem from '../../components/UserCardItem/UserCardItem';
import SubList from '../../components/SubList/SubList';

class Dashboard extends Component {
// create a function that goes through a user's subscriptions and prints them out as cards
    /*
    componentDidMount() {
        console.log(this.props.username);
        fetch('api/' + `${this.props.username}`, {
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + this.props.token,
                ContentType: 'application/json'
            }
        }).then(res => {
                if (res.status === 400) {
                    throw new Error('User not found!');
                }
                else if (res.status === 404) {
                    throw new Error ('User not found!');
                }
                else {
                    res.json()
                        .then(({ user }) => {
                            this.setState({
                               
                            });
                            console.log(this.state.subs);
                        })
                        .catch(err => console.log(err));
                }
            })
            .catch(err => {
                console.log("fetch: " + err);
            });
    }
    */

    render() {
        return (
            <div className="page-parent dash">
                <Row bsPrefix="dash-row">
                    {/*
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
                    */}
                </Row>    
                <Row bsPrefix="dash-row">
                    <Container className="card-container__subs">
                        <SubCardGroup title="Subs">
                            <SubList username={this.props.username} token={this.props.token}/>
                        </SubCardGroup>
                    </Container>    
                </Row>
            </div>
            );
        }
    }

export default Dashboard;
