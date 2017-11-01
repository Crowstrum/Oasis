import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { users: [] }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="wrap-home-onepage-header" style={{ backgroundColor: '#000000' }}>
        <header className="wrap-home-onepage-header">
          <div className="home-onepage-header home-onepage-restyle">
            <div className="home-onepage-header-logo">
              <a href="index.html"><img alt="logo-deli" src={require('./images/icons/logo.png')} />></a>
            </div>

            <div className="home-onepage-header-btn-show-menu">
              <div id="trigger-overlay" className="hamburger hamburger--squeeze">
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </div>
            </div>
          </div>
        </header>
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }
}

export default App;