import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PrimaryButton.css';

class PrimaryButton extends Component {
    render() {
        return (
            <Link className={this.props.class} to={this.props.sendTo}>
                {this.props.children}
            </Link>
        );
    }
}

export default PrimaryButton;