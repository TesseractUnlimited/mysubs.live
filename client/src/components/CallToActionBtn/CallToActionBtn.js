import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CallToActionBtn.css';

class SignupButton extends Component {
    render() {
        return (
                <Link className={"nav-link signup-btn " + this.props.class} to={this.props.sendTo}>{this.props.message}</Link>
        );
    }
}

export default SignupButton;