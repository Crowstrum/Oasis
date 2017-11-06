import React, { Component } from 'react';

class Slider extends Component {
	state = {}
	render() {
		return (

			<section id="slider-deli">
				<div className="rev_slider_wrapper for-vertical-page">
					<div className="container-fluid" style={{ minHeight: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlignLast: 'center' }}>
						<div className="row">
							<div className="col-12">
								<span className="hidden-lg-down visible">
									<p style={{ fontSize: '100px', fontFamily: 'Lobster, cursive', color: 'white' }}>Upgrade Your Smoke</p>
								</span>
								<span className="hidden-md-down hidden-xl-up visible">
									<p style={{ fontSize: '80px', fontFamily: 'Lobster, cursive', color: 'white' }}>Upgrade Your Smoke</p>
								</span>
								<span className="hidden-sm-down hidden-lg-up visible">
									<p style={{ fontSize: '80px', fontFamily: 'Lobster, cursive', color: 'white' }}>Upgrade Your Smoke</p>
								</span>
								<span className="hidden-xs-down hidden-md-up visible">
									<p style={{ fontSize: '60px', fontFamily: 'Lobster, cursive', color: 'white' }}>Upgrade Your Smoke</p>
								</span>
								<span className="hidden-sm-up visible">
									<p style={{ fontSize: '55px', fontFamily: 'Lobster, cursive', color: 'white' }}>Upgrade</p>
									<p style={{ fontSize: '55px', fontFamily: 'Lobster, cursive', color: 'white' }}>Your</p>
									<p style={{ fontSize: '55px', fontFamily: 'Lobster, cursive', color: 'white' }}>Smoke</p>
								</span>
							</div>
						</div>
						<video className="videoInsert" autoPlay loop playsInline>
							<source src={require("../../Video/smokeVideo.mp4")} type="video/mp4" />
							Your browser does not support the video tag.
 				</video>
					</div>
				</div>
			</section>
		);
	}
}

export default Slider;