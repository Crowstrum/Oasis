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
          <Menu />
          <Event />
          <Footer />


        </div>
      </div >
    );
  }
}

export default App;