import React, { Component } from 'react';
import { Card, Row, Col, Image, Container } from 'react-bootstrap';
import './SubCardItem.css';

const image = require('../../../public/images/sal.png');

class SubCardItem extends Component {
    render() {
        return (
            <Card bsPrefix="sub-card-item__card">
                <Row bsPrefix="sub-card-item__card__row" className="justify-content-start">  
                    <Col bsPrefix="sub-card-item__card__col" className="col-lg-1">
                        <Image className="sub-card-item__card__col__image" src={image} />
                    </Col>
                    <Col bsPrefix="sub-card-item__card__col" className="col-lg-4"><h4>{this.props.name}</h4></Col>
                    <Col bsPrefix="sub-card-item__card__col" className="col-lg-2"><h4>${this.props.price}/mo</h4></Col>
                    <Col bsPrefix="sub-card-item__card__col" className="col-lg-2"><h4>{this.props.nextPayment}</h4></Col>
                    <Col bsPrefix="sub-card-item__card__col" className="col-lg-2"><h4>{this.props.lastUsed}</h4></Col>
                </Row>
            </Card>
        );
    }
}

export default SubCardItem;