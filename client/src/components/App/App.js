import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React, { Component } from "react";
import Layout from '../layout/layout';
import Error from '../Error/Error';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* This is for the landing/home page */}
                    <Route exact path="/" component={Layout} />
                    <Route path="/login" component={Layout} />
                    <Route path="/signup" component={Layout} />
                    {/* This is for once the user is signed in */}
                    <Route path="/dashboard" component={Layout} />
                    <Route path="/profile/" component={Layout} />
                    <Route exact path="*" component={Error} />
                </Switch>
            </Router>
        );
    }
}

export default App;