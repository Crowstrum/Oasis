import React, { Component } from 'react';

class Menu extends Component {
    state = {}
    render() {
        return (

            <section id="home-onepage-our-menu" className="home-onepage-menu content-reservation-03">
                <div className="container">
                    <div className="row">
                        <div className="col-content col-sm-10 col-md-8 col-lg-5">
                            <div className="img-reservation-03 hover-img wow zoomIn">
                                <img src="images/home-onepage-img-menu.jpg" alt="img-menu" />
                            </div>
                        </div>

                        <div className="col-content col-sm-10 col-md-8 col-lg-7">
                            <div className="col-right-reservation-03 wow fadeInRight" data-wow-delay="0.5s">

                                <div className="wrap-title-our-menu row">
                                    <div className="col-12 title-our-menu">
                                        <h6>try &amp; discover</h6>
                                        <h2>Oasis Menu</h2>
                                    </div>
                                </div>


                                <div className="row wrap-food-menu">
                                    <div id="food-menu">
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#lunch" role="tab" aria-controls="lunch" aria-expanded="true">  Our Mixes</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="tab-dinner" data-toggle="tab" href="#dinner" role="tab" aria-controls="dinner">Shisha Flavors</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="tab-dessert" data-toggle="tab" href="#dessert" role="tab" aria-controls="dessert">Drinks</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>


                                <div className="tab-content" id="myTabContent">

                                    <div className="tab-pane fade show active" id="lunch" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="wrap-list-food">
                                            <div className="row list-food">
                                                <div className="col-12">

                                                    <div className="item-food row wow fadeInRight" data-wow-delay="0.2s">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Pine nut sbrisalona</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Proin lacinia nisl ut ultricies posuere nulla ut
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;20.00</div>
                                                    </div>
                                                </div>

                                                <div className="col-12">

                                                    <div className="item-food row wow fadeInRight" data-wow-delay="0.4s">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Potato gnocchi</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Proin lacinia nisl ut ultricies posuere nulla ut
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;10.00</div>
                                                    </div>
                                                </div>

                                                <div className="col-12">

                                                    <div className="item-food row wow fadeInRight" data-wow-delay="0.6s">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Lobster caponata</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Suspendisse sodales congue maximus
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;10.00</div>
                                                    </div>
                                                </div>

                                                <div className="col-12">

                                                    <div className="item-food row wow fadeInRight" data-wow-delay="0.8s">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Pork ribollita</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Suspendisse sodales congue maximus
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;15.00</div>
                                                    </div>
                                                </div>

                                                <div className="col-12">

                                                    <div className="item-food row wow fadeInRight" data-wow-delay="1s">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Chocolate budino</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Interdum et malesuada fames primis in faucibus
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;15.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="tab-pane fade" id="dinner" role="tabpanel" aria-labelledby="tab-dinner">
                                        <div className="wrap-list-food">
                                            <div className="row list-food">

                                                <div className="col-12">

                                                    <div className="item-food row">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Lobster caponata</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Suspendisse sodales congue maximus
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;10.00</div>
                                                    </div>
                                                </div>

                                                <div className="col-12">

                                                    <div className="item-food row">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Pork ribollita</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Suspendisse sodales congue maximus
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;15.00</div>
                                                    </div>
                                                </div>

                                                <div className="col-12">

                                                    <div className="item-food row">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Chocolate budino</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Interdum et malesuada fames primis in faucibus
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;15.00</div>
                                                    </div>
                                                </div>

                                                <div className="col-12">

                                                    <div className="item-food row">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Pine nut sbrisalona</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Proin lacinia nisl ut ultricies posuere nulla ut
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;20.00</div>
                                                    </div>
                                                </div>

                                                <div className="col-12">

                                                    <div className="item-food row">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Potato gnocchi</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Proin lacinia nisl ut ultricies posuere nulla ut
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;10.00</div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                    <div className="tab-pane fade" id="dessert" role="tabpanel" aria-labelledby="tab-dessert">
                                        <div className="wrap-list-food">
                                            <div className="row list-food">
                                                <div className="col-12">

                                                    <div className="item-food row">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Pork ribollita</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Suspendisse sodales congue maximus
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;15.00</div>
                                                    </div>
                                                </div>

                                                <div className="col-12">

                                                    <div className="item-food row">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Chocolate budino</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Interdum et malesuada fames primis in faucibus
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;15.00</div>
                                                    </div>
                                                </div>

                                                <div className="col-12">

                                                    <div className="item-food row">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Pine nut sbrisalona</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Proin lacinia nisl ut ultricies posuere nulla ut
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;20.00</div>
                                                    </div>
                                                </div>

                                                <div className="col-12">

                                                    <div className="item-food row">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Potato gnocchi</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Proin lacinia nisl ut ultricies posuere nulla ut
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;10.00</div>
                                                    </div>
                                                </div>

                                                <div className="col-12">

                                                    <div className="item-food row">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Lobster caponata</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Suspendisse sodales congue maximus
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;10.00</div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>


                                    <div className="tab-pane fade" id="private-dinner" role="tabpanel" aria-labelledby="tab-private-dinner">
                                        <div className="wrap-list-food">
                                            <div className="row list-food">

                                                <div className="col-12">

                                                    <div className="item-food row">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Chocolate budino</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Interdum et malesuada fames primis in faucibus
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;15.00</div>
                                                    </div>
                                                </div>

                                                <div className="col-12">

                                                    <div className="item-food row">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Pine nut sbrisalona</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Proin lacinia nisl ut ultricies posuere nulla ut
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;20.00</div>
                                                    </div>
                                                </div>

                                                <div className="col-12">

                                                    <div className="item-food row">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Potato gnocchi</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Proin lacinia nisl ut ultricies posuere nulla ut
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;10.00</div>
                                                    </div>
                                                </div>

                                                <div className="col-12">

                                                    <div className="item-food row">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Lobster caponata</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Suspendisse sodales congue maximus
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;10.00</div>
                                                    </div>
                                                </div>

                                                <div className="col-12">

                                                    <div className="item-food row">
                                                        <div className="col-12 col-sm-10 text-list-food ">
                                                            <div className="name-price row">
                                                                <div className="name-food col-12 col-sm-auto"><a className="hover-link-color" href="product-detail.html">Pork ribollita</a></div>
                                                                <div className="line-food col">
                                                                    <div className="add-line-run"></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-sm-12 info-food">
                                                                    Suspendisse sodales congue maximus
															</div>
                                                            </div>
                                                        </div>
                                                        <div className="price-food col-12 col-sm-2">&#36;15.00</div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
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

export default Menu;