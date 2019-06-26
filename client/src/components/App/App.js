import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React, { Component } from "react";
import Layout from '../layout/layout';
import Error from '../Error/Error';
import landingPage from '../landingPage/landingPage';

class App extends Component {
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
        );
    }
};

export default App;