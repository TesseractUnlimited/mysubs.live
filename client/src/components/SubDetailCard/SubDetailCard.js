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
                    <h3>Name: </h3>
                </Row>
            </Card>
        );
    }
}
