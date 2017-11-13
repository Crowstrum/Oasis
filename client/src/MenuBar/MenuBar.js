import React, { Component } from 'react';

class MenuBar extends Component {
    state = {}
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home-onepage-wrap-menu-bar">
                <div className="home-onepage-menu-bar">
                    <a className="home-onepage-intro" href="#home-onepage-intro">About Oasis</a>
                    <a className="home-onepage-our-menu" href="#home-onepage-our-menu">Menus</a>
                    <a className="home-onepage-event-2" href="#home-onepage-event">Events</a>
                    <a className="home-onepage-contact" href="#home-onepage-contact">Contact</a>
                    {this.props.auth.isAuthenticated ? <a className="home-onepage-contact" href="#home-onepage-contact">Admin</a> : ''}
                </div>
            </div>
        );
    }
}

export default MenuBar;