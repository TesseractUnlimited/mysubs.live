import React, { Component } from 'react';
import { Card, Row, Col, Image, Container } from 'react-bootstrap';
import './CardItem.css';

const image = require('../../../public/images/sal.png');

class CardItem extends Component {
    render() {
        return (
            <Card bsPrefix="card-item__card">
                <Row bsPrefix="card-item__card__row" className="justify-content-start">  
                    <Col bsPrefix="card-item__card__col-1" className="col-lg-1">
                        <Image className="card-item__card__col-1__image" src={image} />
                    </Col>
                    <Col bsPrefix="card-item__card__col-2" className="col-lg-4"><h4>{this.props.cardTitle}</h4></Col>
                    <Col bsPrefix="card-item__card__col-3" className="col-lg-2"><h4>{this.props.price}</h4></Col>
                    <Col bsPrefix="card-item__card__col-4" className="col-lg-2"><h4>{this.props.dueDate}</h4></Col>
                    <Col bsPrefix="card-item__card__col-5" className="col-lg-2"><h4>{this.props.lastUsed}</h4></Col>
                </Row>
                
            </Card>
        );
    }
}

export default CardItem;