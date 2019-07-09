import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './CardItem.css';

class CardItem extends Component {
    render() {
        return (
            <ListGroup.Item bsPrefix="card_item">
                <Card.Title>{this.props.cardTitle}</Card.Title>
                <Card.Body bsPrefix="card_body">{this.props.cardBody}</Card.Body>
            </ListGroup.Item>
        );
    }
}

export default CardItem;