import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './CardGroup.css';

class CardGroup extends Component {
    render() {
        return (
            <div className="card-group w-100">
                <Row bsPrefix="card-group__top-row">
                    <h1>{this.props.title}</h1>
                </Row>
                <Row className="justify-content-start" bsPrefix="card-group__bottom-row">
                    {this.props.cols}
                </Row>
                {this.props.children}
            </div>
        );
    }
}

export default CardGroup;