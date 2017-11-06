import React, { Component } from 'react';

class MenuBar extends Component {
    state = {}
    render() {
        return (
            <div className="home-onepage-wrap-menu-bar">
                <div className="home-onepage-menu-bar">
                    <a className="home-onepage-intro" href="#home-onepage-intro">About Oasis</a>
                    <a className="home-onepage-our-menu" href="#home-onepage-our-menu">Menus</a>
                    <a className="home-onepage-event-2" href="#home-onepage-event">Events</a>
                    <a className="home-onepage-contact" href="#home-onepage-contact">Contact</a>
                </div>
            </div>
        );
    }
}

export default MenuBar;