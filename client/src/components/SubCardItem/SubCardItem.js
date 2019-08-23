import React, { Component } from 'react';
import { Card, Row, Col, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SubCardItem.css';

const image = require('../../static/images/sal.png');

class SubCardItem extends Component {
    render() {
        return (
            <Link className="sub-card-item__link" to={`dashboard/sub-detail/${this.props.sub._id}`}>
                <Card bsPrefix="sub-card-item__card">
                    <Row bsPrefix="sub-card-item__card__row" className="justify-content-start">  
                        <Col bsPrefix="sub-card-item__card__col" className="col-lg-1">
                            <Image className="sub-card-item__card__col__image" src={image} />
                        </Col>
                        <Col bsPrefix="sub-card-item__card__col" className="col-lg-4"><h4>{this.props.sub.name}</h4></Col>
                        <Col bsPrefix="sub-card-item__card__col" className="col-lg-2"><h4>${this.props.sub.price}/mo</h4></Col>
                        <Col bsPrefix="sub-card-item__card__col" className="col-lg-2"><h4>{this.props.sub.nextPayment}</h4></Col>
                        <Col bsPrefix="sub-card-item__card__col" className="col-lg-2"><h4>{this.props.sub.lastUsed}</h4></Col>
                    </Row>
                </Card>
            </Link>
        );
    }
}

export default SubCardItem;