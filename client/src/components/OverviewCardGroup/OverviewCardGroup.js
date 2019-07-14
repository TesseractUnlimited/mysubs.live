import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import './OverviewCardGroup.css';

class OverviewCardGroup extends Component {
    render() {
        return (
            <div className="overview-card-group w-100">
                <Row bsPrefix="overview-card-group__top-row">
                    <h1>{this.props.title}</h1>
                </Row>
                <Row className="justify-content-start" bsPrefix="overview-card-group__bottom-row">
                    {this.props.cols}
                </Row>
                {this.props.children}
            </div>
        );
    }
}

export default OverviewCardGroup;