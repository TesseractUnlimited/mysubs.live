import React, { Component } from 'react';
import LoginCard from '../../components/LoginCard/LoginCard';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div className="page-parent">
                <div className="login-card__container">
                    <LoginCard onLogin={this.props.onLogin} />
                </div>
            </div>
        );
    }
}

export default Login;