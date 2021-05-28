import React from "react";

const Footer = () => {
    return (
        <div className="container" style={{ backgroundColor: "#275A53" }}>
            <div className="row">
                <div className="col-md-5">
                    H#340 (4th Floor), Road #24, New DOHS, Mohakhali, Dhaka,
                    Bangladesh Phone: 018XXXXXXXX E-mail: info@company.com
                </div>
                <div className="col-md-2">
                    Company About Site Map Support Center Terms Conditions
                    Submit Listing
                </div>
                <div className="col-md-2">
                    Quick Links Quick Links Rentals Sales Contact Terms
                    Conditions Our blog
                </div>
                <div className="col-md-3">
                    About us We are the top real estate agency in Sydney, with
                    agents available to answer any question 24/7 <br />
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
    );
};

export default Footer;
