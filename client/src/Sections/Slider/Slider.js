import React, { Component } from 'react';

class Slider extends Component {
    state = {}
    render() {
        return (
            <section id="slider-deli">
                <div className="rev_slider_wrapper for-vertical-page">
                    <div id="rev_slider_4" className="rev_slide " style={{ display: 'none' }}>
                        <ul>

                            <li data-transition="fade">
                                <img src={require("../../images/home-onepage-img-slide.jpg")} alt="Fresh Ingredients" className="rev-slidebg"
                                    data-bgposition="center center"
                                    data-bgfit="cover"
                                    data-bgrepeat="no-repeat" />

                                <div class="rs-background-video-layer" 
         data-videomp4="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" 
         data-videopreload="auto" 
         data-volume="100" 
         data-forcerewind="on" 
         data-nextslideatend="true" 
         data-videoloop="loopandnoslidestop" 
 
    ></div>

                                <h4 className="tp-caption tp-resizeme  caption-1"
                                    data-frames='[{"delay":1000,"split":"chars","splitdelay":0.05,"speed":1500,"frame":"0","from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
                                    data-x="center"
                                    data-y="center"
                                    data-hoffset="0"
                                    data-voffset="['-20']"
                                    data-width="['1140','960','720','540']"
                                    data-lineheight="['150', '150', '120', '100']"
                                    data-fontsize="['110', '110', '100', '90']"
                                    data-height="['auto']">Upgrade Your Smoke</h4>

                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        );
    }
}

export default Slider;