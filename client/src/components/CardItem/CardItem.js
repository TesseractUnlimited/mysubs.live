import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './CardItem.css';

class CardItem extends Component {
    render() {
        return (
            <Card bsPrefix="card">
                <h4>{this.props.cardTitle}</h4>
                <p className="card-body">{this.props.cardBody}</p>
            </Card>
        );
    }
}

export default CardItem;