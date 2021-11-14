import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="trally text-start">
                                <h3>TRALLY</h3>
                                <p>0000 - 123 - 456789</p>
                                <p>arif@gmail.com</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="subscribe text-start">
                                <h3>Subscribe newletter to get updated</h3>
                                <input className="subscribe-input" type="text" placeholder="Your email" />
                                <br />
                                <button className="subscribe-button">Subscribe</button>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="about text-start">
                                <h3>About Us</h3>
                                <p>About Us</p>
                                <p>Privacy Policy</p>
                                <p>Terms of Use</p>
                                <p>Delivery Guide</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="OurPartners text-start">
                                <h3>Our Partners</h3>
                                <p>Our Partners</p>
                                <p>Help & Faq's</p>
                                <p>Wishlist</p>
                                <p>Refund</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <p>Time Sheriff designed by Mohammad Arif</p>
                        </div>
                        <div className="col-md-6">
                            <p>Copyright &copy 2021. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;