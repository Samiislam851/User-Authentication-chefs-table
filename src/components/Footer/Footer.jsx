import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-white pb-5">
                <div className="container">
                    

                        <div className="col-12  pt-5">

                            <div className="row">
                                <div className="col-12 col-md-3 mb-5">
                                    <h1 className="display-5 fs-1">Chef's table</h1>
                                    <p className="text-muted ">
                                        There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.
                                    </p>
                                    <div>
                                        <img src="/socialmedia.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <h1 className="h3">Company</h1>
                                    <ul className="list-unstyled text-muted mt-3">
                                        <li>
                                            <a href="#">About Us</a>
                                        </li>

                                        <li>
                                            <a href="#">Latest News</a>
                                        </li>
                                        <li>
                                            <a href="#">Careers</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-md-3">
                                    <h1 className="h3">Product</h1>
                                    <ul className="list-unstyled text-muted mt-3">
                                        <li>
                                            <a href="#">Prototype</a>
                                        </li>
                                      
                                        <li>
                                            <a href="#">Customers</a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="col-6 col-md-3">
                                    <h1 className="h3">Support</h1>
                                    <ul className="list-unstyled text-muted mt-3">
                                        <li>
                                            <a href="#">Help Desk</a>
                                        </li>
                                        <li>
                                            <a href="#">Sales</a>
                                        </li>
                                        <li>
                                            <a href="#">Become a Partner</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                    <hr className="bg-gradient" />
                    <div className="row justify-content-between align-items-center">
                        <div className="col text-muted">
                            @2023 Chef's table. All Rights Reserved
                        </div>
                        <div className="col text-muted">Powered by Chef's table</div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;