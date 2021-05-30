import React from "react";
import "./HotelRoom.css";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const HotelRoom = () => {
    const { id } = useParams();

    const selectedRoom = useSelector(state =>
        state.rooms.find(room => room.id === id)
    );

    const handleSubmit = e => {
        e.preventDefault();
        alert("Your Order Is Recieved.");
    };
    return (
        <div>
            <section className="header">
                <div className="hotel-text d-flex  align-items-center justify-content-center">
                    {" "}
                    <h1>{selectedRoom?.title}</h1>
                </div>
            </section>

            <section className="container mb-5">
                <div className="row mt-4">
                    <div className="col-md-8">
                        <div>
                            <div>
                                <img
                                    src={selectedRoom?.img}
                                    width="100%"
                                    alt="img1"
                                />
                            </div>
                            <div className="mt-4">
                                <div className="row">
                                    <div className="col-8">
                                        <h2>Room Details</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8">
                                        <p> <b>Bed: </b> {selectedRoom?.bed}</p>
                                        <p> <b>Bed Type: </b> {selectedRoom?.bedType}</p>
                                    </div>
                                    <div className="col-4">
                                        <p><b>Capacity:</b> {selectedRoom?.capacity}</p>
                                        <p><b>Bathroom:</b> {selectedRoom?.bathroom}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4"> 
                                <div className="row">
                                    <div className="col-8">
                                        <h2>Hotel Details</h2>
                                    </div>
                                    <div className="col">
                                        <h2>Price: $ {selectedRoom?.price}</h2>
                                    </div>
                                </div>
                                <div>
                                    <p>{selectedRoom?.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Form onSubmit={handleSubmit} autoComplete="off">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Full Name"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mt-2"
                                controlId="formBasicEmail"
                            >
                                <Form.Control
                                    required
                                    type="tel"
                                    placeholder="Phone Number"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mt-2"
                                controlId="formBasicEmail"
                            >
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mt-2"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Control
                                    required
                                    as="textarea"
                                    placeholder="Massage"
                                    rows={3}
                                />
                            </Form.Group>
                            <Button
                                style={{ width: "100%" }}
                                type="submit"
                                className="mt-4 mb-4"
                            >
                                Booking Request
                            </Button>
                        </Form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HotelRoom;
