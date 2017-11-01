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
      <div className="wrap-home-onepage-header" style={{ backgroundColor: '#000000', height: '1000px' }}>
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

        <div className="overlay overlay-slidedown">
          <div className="home-onepage-header-logo">
            <a href="index.html"><img alt="logo-deli" src={require('./images/icons/logo.png')} /></a>
          </div>

          <div className="overlay-close">
            <div className="is-active hamburger hamburger--squeeze">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </div>
          </div>
          <nav>
            <ul className="home-onepage-menu-overlay">
              <li><a href="#home-onepage-intro">About restaurant</a></li>
              <li><a href="#home-onepage-our-menu">Menus</a></li>
              <li><a href="#home-onepage-event">Events</a></li>
              <li><a href="#home-onepage-reservation">Reservations</a></li>
              <li><a href="#home-onepage-contact">Contact</a></li>
            </ul>
          </nav>
        </div>

        <div className="home-onepage-wrap-menu-bar-top">
          <div className="home-onepage-menu-bar-top">
            <a className="home-onepage-intro" href="#home-onepage-intro">About restaurant</a>
            <a className="home-onepage-our-menu" href="#home-onepage-our-menu">Menus</a>
            <a className="home-onepage-event-2" href="#home-onepage-event">Events</a>
            <a className="home-onepage-reservation" href="#home-onepage-reservation">Reservations</a>
            <a className="home-onepage-contact" href="#home-onepage-contact">Contact</a>
          </div>
        </div>


        <section id="slider-deli">

          <div className="rev_slider_wrapper for-vertical-page">
            <div id="rev_slider_4" className="rev_slide " style={{ display: 'none' }}>
              <ul>

                <li data-transition="fade">
                  <img src="images/home-onepage-img-slide.jpg" alt="Fresh Ingredients" className="rev-slidebg"
                    data-bgposition="center center"
                    data-bgfit="cover"
                    data-bgrepeat="no-repeat" />

                  <div className="rs-background-video-layer"
                    data-ytid="t4gN-iqeY0E"
                    data-volume="mute"
                    data-forcerewind="on"
                    data-nextslideatend="true"
                    data-videoloop="loopandnoslidestop"
                    data-videoattributes="version=3&enablejsapi=1&html5=1&hd=1&wmode=opaque&showinfo=0&rel=0&origin=http://templates.aucreative.co"
                    data-videorate="1"
                    data-videowidth="100%"
                    data-videoheight="100%"
                    data-videocontrols="none"
                    data-videostartat="00:02"
                    data-videoendat="00:40"
                    data-forcecover="1"
                    data-aspectratio="16:9"
                    data-autoplay="true"
                    data-autoplayonlyfirsttime="false"
                  ></div>

                  <h3 className="tp-caption tp-resizeme  caption-1"
                    data-frames='[{"delay":1000,"split":"chars","splitdelay":0.05,"speed":1500,"frame":"0","from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                    data-x="center"
                    data-y="center"
                    data-hoffset="0"
                    data-voffset="['-20']"
                    data-width="['1140','960','720','540']"
                    data-lineheight="['150', '150', '120', '100']"
                    data-fontsize="['110', '110', '100', '90']"
                    data-height="['auto']">Deli Restaurant</h3>

                </li>
              </ul>
            </div>
          </div>

        </section>

        <div className="home-onepage-wrap-menu-bar">
          <div className="home-onepage-menu-bar">
            <a className="home-onepage-intro" href="#home-onepage-intro">About restaurant</a>
            <a className="home-onepage-our-menu" href="#home-onepage-our-menu">Menus</a>
            <a className="home-onepage-event-2" href="#home-onepage-event">Events</a>
            <a className="home-onepage-reservation" href="#home-onepage-reservation">Reservations</a>
            <a className="home-onepage-contact" href="#home-onepage-contact">Contact</a>
          </div>
        </div>

        <div id="home-onepage-intro" className="wrap-intro">
          <div className="container">
            <div className="row">
              <div className="text-intro col-sm-10 col-md-7 wow fadeInDown" data-wow-delay="0.5s">
                <h3>introduction</h3>
                <h2>About Deli</h2>
                <p>
                  Donec quis euismod purus. Donec feugiat ligula rhoncus, varius nisl sed, tincidunt lectus. Nulla vulputate, lectus vel volutpat efficitur, orci lacus sodales sem, at interdum quam ligula sit amet quam. Praesent molestie est ut lorem malesuada pretium at sit amet magna.
							</p>
                <p>
                  Donec quis euismod purus. Donec feugiat ligula rhoncus, varius nisl sed, tincidunt lectus. Nulla vulputate, lectus vel volutpat efficitur, orci lacus sodales sem, at interdum quam ligula sit amet quam. Praesent laoreet malesuada ex, sed blandit sem dictum id. Donec vulputate ultricies nibh, quis dapibus ex cursus sit amet. Duis non ex pellentesque, sollicitudin justo a, porttitor magna. Mauris eleifend est purus. Phasellus non ornare nunc, nec ullamcorper eros. Praesent molestie est ut lorem malesuada pretium at sit amet magna. Sed et volutpat sem.
							</p>
                <div className="sign-intro">
                  <img src={require("./images/sign.png")} />
                </div>
              </div>

              <div className="wrap-pic-intro col-sm-10 col-md-5">
                <div className="row">
                  <div className="col-12">
                    <div className="pic-intro wow zoomIn">
                      <img src={require("./images/home-onepage-img-intro.jpg")} />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
        <section id="home-onepage-our-menu" class="home-onepage-menu content-reservation-03" />
        <section id="home-onepage-event" class="home-onepage-menu content-reservation-03" />
        <section id="home-onepage-reservation" class="home-onepage-menu content-reservation-03" />
        <section id="home-onepage-contact" class="home-onepage-menu content-reservation-03" />
      </div>
    );
  }
}

export default App;