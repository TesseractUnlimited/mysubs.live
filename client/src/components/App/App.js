import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React, { Component } from "react";
import Layout from '../layout/layout';
import Error from '../Error/Error';
import landingPage from '../landingPage/landingPage';

class App extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        this.callBackendAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
    }

    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();
        if (response.status !== 200) 
            throw Error(body.message)
        return body;
    };

    render() {
        return ( 
            <Router>
                <Switch>
                    {/* This is for the landing/home page */}
                    <Route exact path="/" component={landingPage} />
                    <Route path="/login" component={Layout} />
                    <Route path="/signup" component={Layout} />
                    {/* This is for once the user is signed in */}
                    <Route path="/dashboard" component={Layout} />
                    <Route path="/profile/" component={Layout} />
                    <Route component={Error} />
                </Switch>
            </Router>
            <p>{this.state.data}</p>
        );
    }
};

export default App;