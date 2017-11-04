import React, { Component } from 'react';

class Slider extends Component {
    state = {}
    render() {
        return (
        
		<section id="slider-deli">
			<div className="rev_slider_wrapper for-vertical-page">
				<div className="container-fluid" style={{minHeight: '700px', display:'flex',justifyContent:'center',alignItems:'center',textAlignLast: 'center'}}>
					<div className="tabletOrHigherOnly">
						<p style={{fontSize:'80px',fontFamily: 'Lobster, cursive', color: 'white'}}>Upgrade Your Smoke</p>
					</div>
					<div className="mobileOnlyLg">
						<p style={{fontSize:'40px',fontFamily: 'Lobster, cursive', color: 'white'}}>Upgrade Your Smoke</p>
					</div>
					<div className="mobileOnlyMd">
						<p style={{fontSize:'35px',fontFamily: 'Lobster, cursive', color: 'white'}}>Upgrade Your Smoke</p>
					</div>
					<div className="mobileOnlySm">
						<p style={{fontSize:'32px',fontFamily: 'Lobster, cursive', color: 'white'}}>Upgrade Your Smoke</p>
					</div>
				<video className="videoInsert" autoPlay loop playsInline>
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