import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React, { Component } from "react";
import Layout from './components/Layout/Layout';
import Error from './pages/404/404';
import landingPage from './pages/Landing/Landing';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login'; 
import Dashboard from './pages/Dashboard/Dashboard';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* This is for the landing/home page */}
                    <Route exact path="/" component={landingPage} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    {/* This is for once the user is signed in */}
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/profile/" component={Layout} />
                    <Route component={Error} />
                </Switch>
            </Router>
        );
    }
};

export default App;
