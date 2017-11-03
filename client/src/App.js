import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import MenuBarTop from './MenuBar/MenuBarTop';
import MenuBar from './MenuBar/MenuBar';
import About from './Sections/About/About';
import Slider from './Sections/Slider/Slider';
class App extends Component {
  state = { users: [] }

  componentDidMount() {

  }

  render() {
    return (
      <div className="wrap-home-onepage">
        <div className="wrap-home-onepage-header" style={{ backgroundColor: '#000000' }}>
          <Header />
          <MenuBarTop />
          <Slider />
          <MenuBar />

          <About />
          <section id="home-onepage-our-menu" className="home-onepage-menu content-reservation-03" />
          <section id="home-onepage-event" className="home-onepage-menu content-reservation-03" />
          <section id="home-onepage-reservation" className="home-onepage-menu content-reservation-03" />
          <footer id="home-onepage-contact" className="home-onepage-footer" />

        </div>
      </div >
    );
  }
}

export default App;