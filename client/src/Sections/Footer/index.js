import React, { Component } from 'react';

class Footer extends Component {
    state = {}
    render() {
        return (
            <footer id="home-onepage-contact" className="home-onepage-footer">
                <div className="container">
                    <div className="content-footer for-vertical-page row">
                        <div className="column-footer left col-lg-5 col-md-8 col-sm-8">
                            <h3>Contact information</h3>
                            <ul>
                                <li>ADDRESS: 100 Tenth Avenue, New York City, NY 1001</li>
                                <li>FOR BOOKING: (044) 359 0173</li>
                            </ul>
                        </div>

                        <div className="column-footer right col-lg-7 col-md-8 col-sm-8">
                            <h3>Oasis hours</h3>
                            <div className="col-right-reservation-03 row">

                                <ul className="restaurant-hours-left col-lg-6 col-md-8 col-sm-10">
                                    <li>
                                        <span>LUNCH:</span>
                                    </li>
                                    <li>
                                        <span>Monday - Friday: 11:30AM - 2:00PM</span>
                                    </li>
                                    <li>
                                        <span>Saturday - Sunday: 11:00AM - 1:00PM</span>
                                    </li>
                                </ul>

                                <ul className="restaurant-hours-right col-lg-6 col-md-8 col-sm-10">
                                    <li>
                                        <span>DINNER:</span>
                                    </li>
                                    <li>
                                        <span>Monday - Friday: 5:30PM - 11:00PM</span>
                                    </li>
                                    <li>
                                        <span>Saturday - Sunday: 4:30PM - 10:00PM</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;