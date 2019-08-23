import React, { Component } from "react";
import { Container } from 'react-bootstrap';
import SubDetailCard from '../../components/SubDetailCard/SubDetailCard.js';
import './SubDetail.css';

export default class SubDetail extends Component {
    state = {
        name: '',
        desc: '',
        url: '',
        price: 0,
        billingCycle: '',
        billingDate: new Date().toLocaleDateString('en-CA'),
        lastUsed: new Date().toLocaleDateString('en-CA')
    }

    componentDidMount() { 
        fetch(`/sub/${this.props.username}/${this.props.match.params.subId}`, {
            method: "GET",
            headers: {
                Authorization: 'Bearer ' + this.props.token,
                ContentType: 'application/json'
            }
        })
            .then(res => {
                if (res.status === 400) {
                    throw new Error('Bad Request.');
                } else if (res.status === 404) {
                    throw new Error('Sub not found!');
                } else {
                    res.json()
                        .then(({ sub }) => {
                            this.setState({
                                name: sub.name,
                                desc: sub.desc,
                                url: sub.url,
                                price: sub.price,
                                billingCycle: sub.billingCycle,
                                billingDate: sub.billingDate,
                                lastUsed: sub.lastUsed
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
                <Container className="sub-detail-card__container">
                    <SubDetailCard
                        name={this.state.name} 
                        desc={this.state.desc}
                        url={this.state.url}
                        price={this.state.price}
                        billingCycle={this.state.billingCycle}
                        billingDate={this.state.billingDate}
                        lastUsed={this.state.lastUsed}
                    />
                </Container>
            </div>
        );
    }
}

