import React, { Component } from 'react';

class Slider extends Component {
    state = {}
    render() {
        return (
        
		<section id="slider-deli">
			<div className="rev_slider_wrapper for-vertical-page">
				<div className="container" style={{minHeight: '700px', display:'flex',justifyContent:'center',alignItems:'center'}}>
					<p style={{fontSize:'80px',fontFamily: 'Lobster, cursive', color: 'white'}}>Upgrade Your Smoke</p>
				<video className="videoInsert" autoPlay loop>
  					<source src={require("../../Video/smokeVideo.mp4")} type="video/mp4"/>
 					 Your browser does not support the video tag.
 				</video>
				</div>
			</div>
		</section>
        );
    }
}

export default Slider;