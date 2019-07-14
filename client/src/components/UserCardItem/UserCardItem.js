import React, { Component } from 'react';
import { Card, Row, Col, Image, Badge } from 'react-bootstrap';
import './UserCardItem.css';

const image = require('../../../public/images/sal.png');

class UserCardItem extends Component {
    render() {
        return (
            <Card bsPrefix="user-card-item__card">
                <Row bsPrefix="user-card-item__card__row" className="justify-content-start">  
                    <Col bsPrefix="user-card-item__card__col" className="col-lg-2">
                        <Image className="user-card-item__card__col__image" src={image} />
                    </Col>
                    <Col bsPrefix="user-card-item__card__col" className="col-lg-6"><p>{this.props.name}</p></Col>
                    <Col bsPrefix="user-card-item__card__col" className="col-lg-4">
                        <Badge variant={(( this.props.role  == "Admin") ? "primary" : "secondary" )}>
                            {this.props.role}
                        </Badge>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default UserCardItem;