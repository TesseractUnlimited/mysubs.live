import 'bootstrap/dist/css/bootstrap.css';
import './Dashboard.css';
import React, { Component } from 'react';
import { Container, Navbar, CardGroup, Card, ListGroup } from 'react-bootstrap';
import CardItem from '../../components/CardItem/CardItem';

class Dashboard extends Component {
// create a function that goes through a user's subscriptions and prints them out as cards
    render() {
        return (
            <div className="page-parent">   
                <div className="card-holder w-100">
                    <div className="card-title-holder w-100">
                        <h2>Dashboard</h2>
                    </div>
                    <div className="w-100">
                        <ListGroup>
                            <CardItem cardTitle="Netflix" cardBody="A Netflix Subscription." />
                            <CardItem cardTitle="Spotify" cardBody="A Spotify Subscription."/>
                        </ListGroup>
                    </div>
                </div>  
            </div>
            );
        }
    }

export default Dashboard;
