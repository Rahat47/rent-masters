import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-5">
                        H#340 (4th Floor), Road #24, New DOHS, Mohakhali, Dhaka,
                        Bangladesh 
                        <ul className='list-unstyled'>
                            <li>Phone: 018XXXXXXXX</li>
                            <li>E-mail: info@company.com</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h4>Company</h4>
                        <ul className="list-unstyled">
                            <li>About Site</li>
                            <li>Map</li>
                            <li>Support Center</li>
                            <li>Terms Conditions</li>
                            <li>Submit Listing</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h4>Quick Links</h4>
                        <ul className="list-unstyled">
                            <li>Quick Links</li>
                            <li>Rentals</li>
                            <li>Sales</li>
                            <li>Contact</li>
                            <li>Terms Conditions</li>
                            <li>Our blog</li>
                        </ul>
                    </div>
                    <div className="col-md-3 ">
                        <h4>About us</h4> We are the top real estate agency in
                        Sydney, with agents available to answer any question
                        24/7 <br />
                        <div className="mt-3">
                            <a className="me-2" href="facebook">
                                <img
                                    src="https://img.icons8.com/office/40/000000/facebook-circled.png"
                                    alt="facebook"
                                />
                            </a>
                            <a className="me-2" href="linkedin">
                                <img
                                    src="https://img.icons8.com/fluent/48/000000/linkedin-circled.png"
                                    alt="linkedin"
                                />
                            </a>
                            <a className="me-2" href="whatsapp">
                                <img
                                    src="https://img.icons8.com/office/40/000000/whatsapp--v3.png"
                                    alt="whatsapp"
                                />
                            </a>
                            <a className="me-2" href="youtube">
                                <img
                                    src="https://img.icons8.com/fluent/48/000000/youtube-play.png"
                                    alt="youtube"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
