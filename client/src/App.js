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
      <div className="WrapHomeOnepage">
        <header className="WrapHomeOnepageHeader">
          <div className="WrapHomeOnepageHeader HomeOnepageRestyle">
            <div className="HomeOnepageHeaderLogo">
              <a href="index.html"><img alt="logo-deli" src="images/icons/logo.png" />></a>
            </div>

            <div className="HomeOnepageHeaderBtnShowMenu">
              <div id="trigger-overlay" className="Hamburger HamburgerSqueeze">
                <span className="HamburgerBox">
                  <span className="HamburgerInner"></span>
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