import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import Layout from '../layout/layout';

export default class Error extends Component { 
    render({ location }) {
        return (
            <div>
                <Layout>
                    <h1>404! Error!</h1>
                    <code>{location.pathname}</code>
                </Layout>
            </div>
        );
    }
}