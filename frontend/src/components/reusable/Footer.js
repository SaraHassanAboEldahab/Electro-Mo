import React from 'react'
import { Link } from 'react-router-dom'
import SendEmail from '../subComponents/SendEmail'


const Footer = ({ categories }) => {
    return (
        <footer className="footer mt-5">
            <div className=" row mx-0 send-email">
                <h4 className="col-lg-3 col-md-5"><i class="far fa-paper-plane"></i> Sign up to Newsletter</h4>
                <div className="col-lg-4 d-none d-lg-block"> <span>...and receive $20 coupon for first shopping and free delivery.</span></div>
                <div className="col-lg-5 col-md-7">
                    <SendEmail />
                </div>
            </div>
            <div className="row mx-0 footer-top">
                <div className="col-lg-6">
                    <h1 className="mb-4">electroMo</h1>
                    <div className="d-flex mb-4">
                        <i className="fas fa-headset head-icon"></i>
                        <div>
                            <span>Got questions? Call us 24/7!</span>
                            <h6 className="mt-0" style={{ width: "fit-content" }}>(800) 8001-8588, (0600) 874 548</h6>
                        </div>
                    </div>
                    <div>
                        <h6 className="mb-0">Contact info</h6>
                        <span style={{ width: "fit-content" }}>17 Princess Road, London, Greater London NW1 8JR, UK</span>
                    </div>
                    <div className="d-flex mt-5">
                        <i className="fab fa-facebook-f mr-4"></i>
                        <i className="fab fa-twitter mr-4"></i>
                        <i className="fab fa-instagram-square mr-4"></i>
                        <i className="fab fa-pinterest mr-4"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
                <div className="col-lg-3" style={{}}>
                    <h5 className="mt-3 mb-4">Find In Fast</h5>
                    <ul className="p-0 m-0">
                        {categories && categories.map((category) =>
                            <Link key={category._id} to={`/category/${category.name}`}>
                                <li
                                    style={{ color: "black", fontWeight: "400" }}
                                    className="mb-2"
                                >
                                    {category.name}
                                </li>
                            </Link>
                        )}
                    </ul>
                </div>
                <div className="col-lg-3" style={{}}>
                    <h5 className="mt-3 mb-4">In the Spotlight</h5>
                    <ul className="p-0 m-0">
                        <li style={{ color: "black", fontWeight: "400" }} className="mb-2">
                            Contact Us
                        </li>
                        <Link to={`/like`}>
                            <li style={{ color: "black", fontWeight: "400" }} className="mb-2">
                                Wish List
                            </li>
                        </Link>
                        <li className="mb-2">About Us</li>
                        <li className="mb-2">FAQs</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom d-flex align-items-center">
                <span> &copy; 2021 <strong>electroMo.</strong> All Right Reserved</span>
                <ul className="d-flex">
                    <li><img src="/images/discover.png" alt="" /></li>
                    <li><img src="/images/mastercard.png" alt="" /></li>
                    <li><img src="/images/paypal.png" alt="" /></li>
                    <li><img src="/images/skrill.png" alt="" /></li>
                    <li><img src="/images/visa.png" alt="" /></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
