import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import React, { Component, Fragment } from "react";
import moment from 'moment';
import Error from './pages/404/404';
import landingPage from './pages/Landing/Landing';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login'; 
import Dashboard from './pages/Dashboard/Dashboard';
import LandingHeader from "./components/LandingHeader/LandingHeader";
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';
import Help from './pages/Help/Help';
import Messages from './pages/Messages/Messages';
import AddSub from './pages/AddSub/AddSub';
import Marketplace from './pages/Marketplace/Marketplace';
import SubDetail from "./pages/SubDetail/SubDetail";
import './App.css';


class App extends Component {
    state = {
        isAuth: false,
        token: null,
        userId: null,
        username: '',
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
        const username = localStorage.getItem('username');
        const remainingMilliSec = new Date(expiryDate).getTime() - new Date().getTime();
        this.setState({
            isAuth: true,
            token: token,
            userId: userId,
            username: username
        });
        this.setAutoLogout(remainingMilliSec);
    }

    logoutHandler = () => {
        //e.preventDefault();
        this.setState({ isAuth: false, token: null });
        localStorage.removeItem('token');
        localStorage.removeItem('expiryDate');
        localStorage.removeItem('userId');
        this.props.history.push("/");
    };

    loginHandler = (values, bag) => {
        this.setState({ authLoading: true });
        fetch('user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: values.username,
                password: values.password
            })
        })
            .then(res => {
                if (res.status === 422) {
                    res.json()
                        .then(data => {
                            console.log(data);
                            throw new Error(data.message);
                        })
                        .catch(err => console.log(err));
                }
                else if (res.status === 401) {
                    res.json()
                        .then(data => {
                            console.log(data);
                            throw new Error(data.message);
                        })
                        .catch(err => console.log(err));
                }
                else if (res.status !== 200 && res.status !== 201) {
                    res.json()
                        .then(data => {
                            console.log(data);
                            throw new Error(data.message);
                        })
                        .catch(err => console.log(err));
                }
                else {
                    return res.json();
                }
            })
            .then(resData => {
                console.log(resData);
                this.setState({
                    isAuth: true,
                    token: resData.token,
                    authLoading: false,
                    userId: resData.userId,
                    username: resData.username
                });
                console.log(this.state.username);
                localStorage.setItem('token', resData.token);
                localStorage.setItem('userId', resData.userId);
                localStorage.setItem('username', resData.username);
                const remainingMilliseconds = 2 * 60 * 60 * 1000;
                const expiryDate = new Date(
                    new Date().getTime() + remainingMilliseconds
                );
                localStorage.setItem('expiryDate', expiryDate.toISOString());
                this.setAutoLogout(remainingMilliseconds);
                this.props.history.push("/dashboard");
            })
            .catch(err => {
                this.setState({
                    isAuth: false,
                    authLoading: false,
                    error: err
                });
                throw err;
            });
    };

    signupHandler = (values, bag) => {
        this.setState({ authLoading: true });
        fetch('user/signup', {
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
                if (res.status === 422)
                    throw new Error("Validation failed!");
                
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
                this.props.history.replace('/login');
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

    addSubHandler = (values) => {
        fetch('/subs/' + this.state.username, {
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + this.state.token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: values.name,
                    url: values.url,
                    price: values.price,
                    renewal: values.renewal,
                    nextPayment: moment(values.nextPayment, "YYYY-MM-DD").toDate(),
                    lastUsed: moment(values.lastUsed, "YYYY-MM-DD").toDate()
                })
            })
            .then(res => {
                if (res.status === 422) {
                    res.json()
                        .then(data => {
                            console.log(data);
                            throw new Error(data.message);
                        })
                        .catch(err => console.log(err));
                } else if (res.status === 401) {
                    res.json()
                        .then(data => {
                            console.log(data);
                            throw new Error(data.message);
                        })
                        .catch(err => console.log(err));
                } else if (res.status !== 200 && res.status !== 201) {
                    res.json()
                        .then(data => {
                            console.log(data);
                            throw new Error(data.message);
                        })
                        .catch(err => console.log(err));
                } else {
                    this.props.history.push("/dashboard");
                }
            })
            .catch(err => { throw err });
    }

    removeSubHandler = () => {

    }

    render() {
        let routes = (
            <Switch>
                <Route exact path="/" component={landingPage} />
                <Route path="/login"
                    render={props => (
                        <Login {...props} onLogin={this.loginHandler} />
                    )} 
                />
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
                    <Route path="/dashboard/sub-detail/:subId"
                        render={props => (
                            <SubDetail {...props}
                                username={this.state.username}
                                token={this.state.token}
                                />
                        )} />
                    <Route path="/dashboard/add-sub"
                        render={props => (
                            <AddSub {...props}
                                username={this.state.username}
                                token={this.state.token}
                                addSubHandler={this.addSubHandler} / >
                        )} />
                    <Route exact path="/dashboard"
                        render={props => (
                            <Dashboard {...props}
                                username={this.state.username}
                                userId={this.state.userId}
                                token={this.state.token} />
                        )} />
                    <Route path="/marketplace"
                        render={props => (
                            <Marketplace {...props}
                                username={this.state.username}
                                userId={this.state.userId}
                                token={this.state.token} />
                        )} />
                    <Route
                        path="/profile"
                        render={props => (
                            <Profile {...props}
                                username={this.state.username}
                                token={this.state.token} />
                        )} />
                    />
                    <Route path='/settings' component={Settings} />
                    <Route path='/messages' component={Messages} />
                    <Route path='/help' component={Help} />
                    
                    <Route component={Error} />
                </Switch>
            );
        }
        let header = (
            <LandingHeader />
        );
        
        if (this.state.isAuth) {
            header = (
                <Header onLogout={this.logoutHandler}
                />
            );
        }

        return (
            <div className="wrapper">
                {header}
                {routes}
                <Footer/>
            </div>
        );
    }
};

export default withRouter(App);
