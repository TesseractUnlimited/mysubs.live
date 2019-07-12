import React, { Component } from 'react';
import { Container, Row } from "react-bootstrap";
import LoginCard from '../../components/LoginCard/LoginCard';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="login__page-parent">
                <Row bsPrefix="login__login-row">
                    <Container className="login__card-holder__login w-100">
                        <LoginCard onLogin={this.props.onLogin} />
                    </Container>
                </Row>
            </div>
        );
    }
}

export default Login;