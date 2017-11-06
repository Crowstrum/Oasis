import React, { Component } from 'react';

class Header extends Component {
    state = { isMenuOpen: false }

    handleMenuClick = (e) => {
        const target = e.target;
        this.setState({ isMenuOpen: target.checked });
    }
    handleLinkClick = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }
    render() {
        const hamburgerMenuClasses = ['overlay overlay-hugeinc container-fluid']
        return (
            <header className="wrap-home-onepage-header">
                <div className="home-onepage-header home-onepage-restyle">
                    <div className="home-onepage-header-logo">
                        <a href="index.html"><img alt="logo-deli" src={require('../images/icons/logo.png')} />></a>
                    </div>
                    <input type="checkbox" id="op" checked={this.state.isMenuOpen} onChange={this.handleMenuClick} style={{ display: 'none' }}></input>
                    <div className="home-onepage-header-btn-show-menu lower">
                        <div id="trigger-overlay" className="hamburger hamburger-squeeze">
                            <label htmlFor="op"> <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                            </label>
                        </div>
                    </div>
                </div>
                {this.state.isMenuOpen ? <div className={hamburgerMenuClasses.join(' ')}>
                    <label htmlFor="op"></label>
                    <div className="col-12" style={{ paddingTop: '400px' }}>
                        <nav>
                            <ul>
                                <li><a className="home-onepage-intro" href="#home-onepage-intro" style={{ fontFamily: 'Fjalla One, sans-serif' }} onClick={this.handleLinkClick}>About restaurant</a></li>
                                <li><a href="#home-onepage-our-menu" style={{ fontFamily: 'Fjalla One, sans-serif' }} onClick={this.handleLinkClick}>Menus</a></li>
                                <li><a href="#home-onepage-event" style={{ fontFamily: 'Fjalla One, sans-serif' }} onClick={this.handleLinkClick}>Events</a></li>
                                <li><a href="#home-onepage-contact" style={{ fontFamily: 'Fjalla One, sans-serif' }} onClick={this.handleLinkClick}>Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div> : <div />}
            </header>
        );
    }
}

export default Header;