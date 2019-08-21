import React, { Component } from 'react';
import { Row } from "react-bootstrap";
import SignupCard from '../../components/SignupCard/SignupCard';
import './Signup.css';

class Signup extends Component {
    render() {
        return (
            <div className="page-parent">
                <div className="signup-card__container">
                    <SignupCard onSignup={this.props.onSignup} />
                </div>
            </div>
        );
    }
}

export default Signup;