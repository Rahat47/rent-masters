import React from "react";

const Service = () => {
    return (
        <div className="container mb-5">
            <div className="row">
                <h1 className="text-center my-5">Our Services</h1>
                <div className="col-md-4">
                    <img className="mx-auto d-block"
                        src="https://img.icons8.com/dusk/64/000000/building.png"
                        alt=""
                    />
                    <h5 className="text-center mt-3">Wide Rango of Propertios</h5>
                    <p className="text-center">
                        With a robust selection of popular propertios on hand,
                        as woll as leading properties from exports.
                    </p>
                </div>
                <div className="col-md-4">
                    <img className="mx-auto d-block"
                        src="https://img.icons8.com/cotton/64/000000/financial-analytics.png"
                        alt=""
                    />
                    <h5 className="text-center mt-3">Financing Made Easy</h5>
                    <p className="text-center">
                        Our stress-free finance department that can find
                        financial solutions to save you money.
                    </p>
                </div>
                <div className="col-md-4">
                    <img className="mx-auto d-block"
                        src="https://img.icons8.com/dusk/64/000000/people-working-together.png"
                        alt=""
                    />
                    <h5 className="text-center mt-3"> Trusted by Thousands</h5>
                    <p className="text-center">
                        10 new offers every day. 350 offers on site, trusted by
                        a community of thousands of users.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Service;
