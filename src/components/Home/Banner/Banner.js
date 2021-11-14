import React from 'react';
import './Banner.css'
import banner from '../../../images/bannerr.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="banner">

                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center ">
                        <div className="banner-text text-start">
                            <h3>Tranding Products</h3>
                            <h1 className="banner-header">Everything</h1>
                            <h1 className="banner-header">That's New & Now</h1>
                            <Link to = "/products">
                            <button className="banner-button mt-3">Shop now</button>
                            </Link>
                        </div>
                    </div>



                    <div className="col-md-6">
                        <div className="banner-image">
                            <img width="75%" src={banner} alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Banner;