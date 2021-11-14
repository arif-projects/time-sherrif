import React from 'react';
import offer from '../../../images/offer.jpg'
import './offer.css'

const Offer = () => {
    return (
        <div className="m-3">
            <div className="offer container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="feature-product">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 text-start d-flex align-items-center justify-content-center">
                                        <div className="offer-text">
                                            <h1 className="banner-header">All Black Edition</h1>
                                            <p className="text-footer">for cool people like</p>
                                            <button className="banner-button mt-3">Buy now</button>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="offer-image">
                                            <img width="75%" src="https://i.ibb.co/xMLL5hD/pr-watch6-360x.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4  ">
                        <div className="offer-details">
                            <h3 className="text-footer">Now your chance</h3>
                            <h2> <span className="off">15</span>% off </h2>
                            <button className="code">CODE: NEWBABY</button>
                            <p className="text-footer">Don’t Miss Out: Coupon Expires Soon. Use It ASAP</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;