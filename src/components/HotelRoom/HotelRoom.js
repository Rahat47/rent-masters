import React, { useState } from "react";
import "./HotelRoom.css";
import img1 from "../../assets/images/Radisson-Blu.jpg";
import { Button, Form } from "react-bootstrap";

const HotelRoom = () => {
    return (
        <div>
            <section className="header">
                <div className="hotel-text d-flex  align-items-center justify-content-center">
                    {" "}
                    <h1>Hotel Details</h1>
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
                                        <h2>Hotel Details</h2>
                                    </div>
                                    <div className="col">
                                        <h2>Price: $ 1200</h2>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Incidunt inventore
                                        fugit velit atque rem accusantium, est
                                        possimus doloribus voluptate in deserunt
                                        tempora distinctio similique, aliquam,
                                        esse modi quia asperiores animi enim nam
                                        temporibus nostrum sed quod fugiat?
                                        Possimus ipsa inventore fugiat aperiam
                                        aliquam, nisi laudantium accusantium
                                        odio distinctio ea hic eligendi velit
                                        dolore dolor maxime exercitationem.
                                        Dolores sed voluptatibus vitae ullam
                                        delectus exercitationem explicabo quis?
                                        Neque labore quo itaque mollitia, est
                                        asperiores eos totam officiis suscipit
                                        esse numquam repudiandae dicta minima
                                        explicabo eum eveniet ratione illo
                                        ducimus cumque? Neque nemo distinctio
                                        sint nam corrupti excepturi quos ea amet
                                        suscipit omnis? Molestias, nihil maxime
                                        assumenda itaque corporis eligendi
                                        reprehenderit vel beatae tempore
                                        veritatis quidem consectetur suscipit
                                        magnam earum voluptatem, cumque minus
                                        blanditiis enim. Commodi modi corporis
                                        quas maxime totam, ipsam voluptatum quo
                                        id ipsa deserunt maiores minima, magni
                                        ducimus, rerum et labore amet
                                        voluptatibus? Velit dolorum incidunt
                                        atque? Nam, sapiente cumque!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control
                                    type="text"
                                    placeholder="Full Name"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mt-2"
                                controlId="formBasicEmail"
                            >
                                <Form.Control
                                    type="tel"
                                    placeholder="Phone Number"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mt-2"
                                controlId="formBasicEmail"
                            >
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mt-2"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Control
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
