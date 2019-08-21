import React, { Component } from "react";
import { Card, Row } from 'react-bootstrap';
import './SubDetailCard.css';

export default class SubDetailCard extends Component {
    render() {
        return (
            <Card bsPrefix="sub-detail-card__card col-4">
                <Row bsPrefix="sub-detail-card__card__top-row">
                    <h1>Sub Details</h1>
                </Row>
                <Row bsPrefix="sub-detail-card__card__bottom-row">
                    <h3>Name: {this.props.name}</h3>
                    <h3>URL: {this.props.url}</h3>
                    <h3>Description: {this.props.desc}</h3>
                    <h3>Billing Cycle: {this.props.billingCycle}</h3>
                    <h3>Billing Date: {this.props.billingDate}</h3>
                    <h3>Last Used: {this.props.lastUsed}</h3>
                </Row>
            </Card>
        );
    }
}
