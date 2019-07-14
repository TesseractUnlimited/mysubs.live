import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './SubCardGroup.css';

class SubCardGroup extends Component {
    render() {
        return (
            <div className="sub-card-group w-100">
                <Row bsPrefix="sub-card-group__top-row">
                    <h1>{this.props.title}</h1>
                </Row>
                <Row className="justify-content-start" bsPrefix="sub-card-group__bottom-row">
                    <Col id="1" bsPrefix="card-group__bottom-row__col" className="col-lg-1"></Col>
                    <Col bsPrefix="card-group__bottom-row__col" className="col-lg-4">
                        <p className="card-group__bottom-row__col__p text-secondary">Name</p>
                    </Col>
                    <Col bsPrefix="card-group__bottom-row__col" className="col-lg-2">
                        <p className="card-group__bottom-row__col__p text-secondary">Price</p>
                    </Col>
                    <Col bsPrefix="card-group__bottom-row__col" className="col-lg-2">
                        <p className="card-group__bottom-row__col__p text-secondary">Due Date</p>
                    </Col>
                    <Col bsPrefix="card-group__bottom-row__col" className="col-lg-2">
                        <p className="card-group__bottom-row__col__p text-secondary">Last Used</p>
                    </Col>
                </Row>
                {this.props.children}
            </div>
        );
    }
}

export default SubCardGroup;