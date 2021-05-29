import React from 'react';
import './HotelRoom.css';
import img1 from '../../assets/images/Radisson-Blu.jpg';
import { Form } from 'react-bootstrap';
import { Button } from 'bootstrap';

const HotelRoom = () => {
    return (
        <div>
            <section className="header">
                <div className="hotel-text d-flex  align-items-center justify-content-center"> <h1>Hotel Details</h1>
                </div>
            </section>

            <section class="container mb-5">
                <div class="row mt-4">
                    <div class="col-md-8">
                        <div>
                            <div>
                                <img src={img1} width="100%" alt="img1" />
                            </div>
                            <div className="mt-4">
                                <div className="row">
                                    <div className="col-8">
                                        <h2>Product Detail</h2>
                                    </div>
                                    <div className="col">
                                        <h2>Price: $ 1200</h2>
                                    </div>
                                </div>
                                <div>
                                    <p>Featuring a fitness centre, Radisson Blu Chittagong Bay View offers accommodation in Chittagong. Guests can enjoy the on-site multi-cuisine restaurant. Free WiFi is available throughout the property.

                                    Rooms come with a flat-screen satellite TV and a seating area for your convenience. All rooms have views of the mountains or city. Every room is equipped with a private bathroom fitted with a shower.

                                    You will find a 24-hour front desk and concierge desk at the property. Free parking is offered.

                                    The Chittagong Cricket Stadium is 7 km, the Khejur Tola Beach is 15 km and the Patenga Sea Beach is 16.2 km. The Halishahar Railway Station is 5.8 km. The Chittagong Bus Station is 9.8 km and the Shah Amanat International Airport is 14 km. The Shahjalal International Airport is 284 km.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Full Name" />
                            </Form.Group> 
                            <Form.Group className="mt-2" controlId="formBasicEmail">
                                <Form.Control type="tel" placeholder="Phone Number" />
                            </Form.Group>  
                            <Form.Group className="mt-2" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group >
                            <Form.Group className="mt-2" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" placeholder="Massage" rows={3} />
                            </Form.Group>
                            <button style={{width: '100%'}} type="submit" className="mt-4 mb-4">Booking Request</button>
                        </Form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HotelRoom;