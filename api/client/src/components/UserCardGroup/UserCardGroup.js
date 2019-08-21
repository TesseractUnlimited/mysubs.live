import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './UserCardGroup.css';

class UserCardGroup extends Component {
    render() {
        return (
            <div className="user-card-group w-100">
                <Row bsPrefix="user-card-group__top-row">
                    <h1>{this.props.title}</h1>
                </Row>
                <Row className="justify-content-start" bsPrefix="user-card-group__bottom-row">
                    <Col bsPrefix="user-card-group__bottom-row__col" className="col-lg-1"></Col>
                    <Col bsPrefix="user-card-group__bottom-row__col" className="col-lg-6">
                        <p className="user-card-group__bottom-row__col__p text-secondary">Name</p>
                    </Col>
                    <Col bsPrefix="user-card-group__bottom-row__col" className="col-lg-4">
                        <p className="user-card-group__bottom-row__col__p text-secondary">Role</p>
                    </Col>
                </Row>
                {this.props.children}
            </div>
        );
    }
}

export default UserCardGroup;