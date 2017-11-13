import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import MenuBarTop from './MenuBar/MenuBarTop';
import MenuBar from './MenuBar/MenuBar';
import About from './Sections/About/About';
import Slider from './Sections/Slider/Slider';
import Menu from './Sections/Menu/index';
import Event from './Sections/Events/index';
import Footer from './Sections/Footer/index';
import { eventActions } from './Actions/index';
import Login from './container/login/index';
import { connect } from 'react-redux';
import { loginSuccess, loginError } from './Actions/auth/index';
import AuthService from './Utility/Auth';

class Test extends Component {
    state = { users: [] }

    constructor(props) {
        super(props);
        this.authService = new AuthService();
    }

    componentWillMount() {
        console.log(this.props.history);
        // Add callback for lock's `authenticated` event
        this.authService.lock.on('authenticated', (authResult) => {
            this.authService.lock.getProfile(authResult.idToken, (error, profile) => {
                if (error) { return this.props.loginError(error); }
                AuthService.setToken(authResult.idToken); // static method
                AuthService.setProfile(profile); // static method
                this.props.loginSuccess(profile);
                return this.props.history.push({ pathname: '/' });
            });
        });
        // Add callback for lock's `authorization_error` event
        this.authService.lock.on('authorization_error', (error) => {
            this.props.loginError(error);
            return this.props.history.push({ pathname: '/' });
        });
    }

    render() {
        return (
            <div className="wrap-home-onepage">
                <div className="wrap-home-onepage-header" style={{ backgroundColor: '#000000' }}>
                    <Header />
                    <MenuBarTop />
                    <Slider />
                    <MenuBar auth={this.props.auth} />
                    <About />
                    <Menu />
                    <Event />
                    <Footer />
                    <Login authService={this.authService} auth={this.props.auth} history={this.props.history} />
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    auth: state.authReducer,
});

const mapDispatchToProps = dispatch => {
    return {
        loginSuccess: profile => dispatch(loginSuccess(profile)),
        loginError: err => dispatch(loginError(err.toString())),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);