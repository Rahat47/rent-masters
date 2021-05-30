import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Styles from "./AddHouse.module.css";

const initialState = {
    title: "",
    img: "",
    address: "",
    bed: 0,
    bathroom: 0,
    price: 0,
};

const AddHouse = () => {
    const [formData, setFormData] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();
    };

    const handleChange = e => {
        const newFormData = { ...formData, [e.target.name]: e.target.value };
        setFormData(newFormData);
    };
    console.log(formData);
    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.formContainer}>
                <div className="row">
                    <div className="col-md-6">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="service">
                                <Form.Label>Room Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Title"
                                    name="title"
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="description"
                            >
                                <Form.Label>Room Details</Form.Label>
                                <Form.Control
                                    placeholder="Room Details"
                                    onChange={handleChange}
                                    name="description"
                                    as="textarea"
                                    rows={3}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="location">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={handleChange}
                                    name="address"
                                    placeholder="Enter Location"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="location">
                                <Form.Label>No of Bathrooms</Form.Label>
                                <Form.Control
                                    type="number"
                                    onChange={handleChange}
                                    min={1}
                                    name="bathroom"
                                    placeholder="Number of Bathrooms"
                                />
                            </Form.Group>
                        </Form>
                    </div>
                    <div className="col-md-6">
                        <Form>
                            <Form.Group className="mb-3" controlId="price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    onChange={handleChange}
                                    min={1}
                                    name="price"
                                    placeholder="Enter Price"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="rooms">
                                <Form.Label>No of BedRooms</Form.Label>
                                <Form.Control
                                    type="number"
                                    onChange={handleChange}
                                    name="bed"
                                    min={0}
                                    placeholder="Number of Rooms"
                                />
                            </Form.Group>

                            <div class="mb-3">
                                <label
                                    htmlFor="formFile"
                                    className="form-label"
                                >
                                    Upload room image
                                </label>
                                <input
                                    className="form-control"
                                    type="file"
                                    id="formFile"
                                />
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end me-2">
                <Button className="mt-3 px-4" variant="success" type="submit">
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default AddHouse;
