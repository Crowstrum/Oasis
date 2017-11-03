import React, { Component } from 'react';

class About extends Component {
    state = {}
    render() {
        return (
            <div id="home-onepage-intro" className="wrap-intro">
                <div className="container">
                    <div className="row">
                        <div className="text-intro col-sm-10 col-md-7 wow fadeInDown" data-wow-delay="0.5s">
                            <h3>introduction</h3>
                            <h2>About Oasis</h2>
                            <p>
                                Donec quis euismod purus. Donec feugiat ligula rhoncus, varius nisl sed, tincidunt lectus. Nulla vulputate, lectus vel volutpat efficitur, orci lacus sodales sem, at interdum quam ligula sit amet quam. Praesent molestie est ut lorem malesuada pretium at sit amet magna.
							</p>
                            <p>
                                Donec quis euismod purus. Donec feugiat ligula rhoncus, varius nisl sed, tincidunt lectus. Nulla vulputate, lectus vel volutpat efficitur, orci lacus sodales sem, at interdum quam ligula sit amet quam. Praesent laoreet malesuada ex, sed blandit sem dictum id. Donec vulputate ultricies nibh, quis dapibus ex cursus sit amet. Duis non ex pellentesque, sollicitudin justo a, porttitor magna. Mauris eleifend est purus. Phasellus non ornare nunc, nec ullamcorper eros. Praesent molestie est ut lorem malesuada pretium at sit amet magna. Sed et volutpat sem.
							</p>
                            <div className="sign-intro">
                                <img src={require("../../images/sign.png")} />
                            </div>
                        </div>

                        <div className="wrap-pic-intro col-sm-10 col-md-5">
                            <div className="row">
                                <div className="col-12">
                                    <div className="pic-intro wow zoomIn">
                                        <img src={require("../../images/hookah-07.jpg")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;