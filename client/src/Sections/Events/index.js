import React, { Component } from 'react';

class Event extends Component {
    state = {}
    render() {
        return (
            <section id="home-onepage-event" className="home-onepage-event content-reservation-03">
                <div className="container">
                    <div className="row">
                        <div className="content-event col-content col-sm-10 col-md-8 col-lg-5 wow fadeInDown" data-wow-delay="0.5s">
                            <div id="title-event">
                                <h6>Upcoming Event</h6>
                                <h2>Live Music Night</h2>
                            </div>
                            <p>
                                Donec quis euismod purus. Donec feugiat ligula rhoncus, varius nisl sed, tincidunt lectus. Nulla vulputate, lectus vel volutpat
							efficitur, orci lacus sodales sem, at interdum quam ligula sit amet quam.
						</p>

                            <p>
                                Praesent laoreet malesuada ex, sed blandit sem dictum id. Donec vul-putate ultricies nibh, quis dapibus ex cursus sit amet.
							Duis non ex pel-lentesque, sollicitudin justo a, porttitor magna. Mauris eleifend est purus. Phasellus non ornare
							nunc, nec ullamcorper eros praesent.
						</p>

                            <span className="date-event"><i className="fa fa-calendar" aria-hidden="true"></i> 21 June, 2017</span>
                            <span className="time-event"><i className="fa fa-clock-o" aria-hidden="true"></i> 10:00AM - 22:00PM</span>

                        </div>

                        <div className="col-content col-sm-10 col-md-8 col-lg-7">
                            <div className="col-right-reservation-03 row">
                                <div className="col-12 title-our-menu">
                                    <div className=" hover-img wow zoomIn">
                                        <img src={require("../../images/home-onepage-img-event.jpg")} alt="img-event" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Event;