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
import Test from './test';
import { Link, Route, Redirect } from 'react-router-dom';
class App extends Component {
  state = { users: [] }

  constructor(props) {
    super(props);
    this.authService = new AuthService();
  }



  render() {
    return (

      <div>

        <Route exact path="/" component={Test} />
        <Route exact path="/callback" component={Test} />
        <Route exact path="/admin" component={About} />
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);