import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import React, { Component, Fragment } from "react";
import Layout from './components/Layout/Layout';
import Error from './pages/404/404';
import landingPage from './pages/Landing/Landing';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login'; 
import Dashboard from './pages/Dashboard/Dashboard';
import LandingHeader from "./components/LandingHeader/LandingHeader";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';

class App extends Component {
    state = {
        isAuth: false,
        token: null,
        userId: null,
        authLoading: false,
        error: null
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        const expiryDate = localStorage.getItem('expiryDate');
        if (!token || !expiryDate) {
            return;
        }
        if (new Date(expiryDate) <= new Date()) {
            this.logoutHandler();
            return;
        }
        const userId = localStorage.getItem('userId');
        const remainingMilliSec = new Date(expiryDate).getTime() - new Date().getTime();
        this.setState({
            isAuth: true,
            token: token,
            userId: userId
        });
        this.setAutoLogout(remainingMilliSec);
    }

    logoutHandler = () => {
        this.setState({ isAuth: false, token: null });
        localStorage.removeItem('token');
        localStorage.removeItem('expiryDate');
        localStorage.removeItem('userId');
    };

    loginHandler = (event, authData) => {
        event.preventDefault();
        this.setState({
            authLoading: true
        });
        fetch('api/login')
            .then(res => {
                if (res.status === 422) {
                    throw new Error('Validation failed.');
                }
                if (res.status !== 200 && res.status !== 201) {
                    console.log('Error!');
                    throw new Error('Could not authenticate you!');
                }
                return res.json();
            })
            .then(resData => {
                console.log(resData);
                this.setState({
                    isAuth: true,
                    token: resData.token,
                    authLoading: false,
                    userId: resData.userId
                });
                localStorage.setItem('token', resData.token);
                localStorage.setItem('userId', resData.userId);
                const remainingMilliseconds = 60 * 60 * 1000;
                const expiryDate = new Date(
                    new Date().getTime() + remainingMilliseconds
                );
                localStorage.setItem('expiryDate', expiryDate.toISOString());
                this.setAutoLogout(remainingMilliseconds);
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    isAuth: false,
                    authLoading: false,
                    error: err
                });
            });
    };

    signupHandler = (values, bag) => {
        //event.preventDefault();
        this.setState({ authLoading: true });
        fetch('api/signup', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: values.email,
                password: values.password,
                name: values.name,
                username: values.username
            })
        })
            .then(res => {
                if (res.status === 422) {
                    throw new Error(
                        "Validation failed. Make sure the email address isn't used yet!"
                    );
                }
                if (res.status !== 200 && res.status !== 201) {
                    console.log('Error!');
                    throw new Error('Creating a user failed!');
                }
                return res.json();
            })
            .then(resData => {
                console.log(resData);
                this.setState({
                    isAuth: false, authLoading: false
                });
                this.props.history.replace('/');
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    isAuth: false,
                    authLoading: false,
                    error: err
                });
            });
    };

    setAutoLogout = milliseconds => {
        setTimeout(() => {
            this.logoutHandler();
        }, milliseconds);
    };

    errorHandler = () => {
        this.setState({
            error: null
        });
    };

    render() {
        let routes = (
            <Switch>
                <Route exact path="/" component={landingPage} />
                <Route path="/login" component={Login} />
                <Route path="/signup"
                    render={props => (
                        <Signup {...props} onSignup={this.signupHandler}/>
                    )}     
                />
                <Route component={Error} />
            </Switch>
        );
        if (this.state.isAuth) {
            routes = (
                <Switch>
                    <Route path="/dashboard"
                        render={props => (
                            <Dashboard {...props} userId={this.state.userId} token={this.state.token} />
                        )} />
                    <Route
                        path="/profile"
                        render={() => {
                            <Redirect push to="/dashboard"></Redirect>
                        }} />
                    <Route component={Error} />
                </Switch>
            );
        }
        let header = (
            <LandingHeader 
                onLogout={ this.logoutHandler }
                isAuth={ this.state.isAuth }
            />
        );
        
        if (this.state.isAuth) {
            header = (
                <Header 
                    onLogout={ this.logoutHandler }
                    isAuth={ this.state.isAuth }
                />
            );
        }

        return (
            <Fragment>
                {header}
                {routes}
                <Footer />
            </Fragment>
        );
    }
};

export default withRouter(App);
