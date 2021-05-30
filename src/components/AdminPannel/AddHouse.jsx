import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Styles from "./AddHouse.module.css";
import { v4 as uuidv4 } from "uuid";
import { add } from "../../redux/actions/hotelsActions";
const initialState = {
    title: "",
    img: "https://i.ibb.co/Z8187t4/andhika-soreng-US06-QF-sxu8-unsplash.jpg",
    address: "",
    bed: 0,
    bathroom: 0,
    price: 0,
};

const AddHouse = () => {
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();

        const newRoom = {
            ...formData,
            id: uuidv4(),
            capacity: 1,
            bedType: "Double",
        };

        dispatch(add(newRoom));
        alert("new Room added Successfully");
        setFormData(initialState);
    };

    const handleChange = e => {
        const newFormData = { ...formData, [e.target.name]: e.target.value };
        setFormData(newFormData);
    };
    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.formContainer}>
                <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="service">
                                <Form.Label>Room Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Title"
                                    name="title"
                                    onChange={handleChange}
                                    required
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
                                    required
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
                                    required
                                    min={1}
                                    name="bathroom"
                                    placeholder="Number of Bathrooms"
                                />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    onChange={handleChange}
                                    min={1}
                                    required
                                    name="price"
                                    placeholder="Enter Price"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="rooms">
                                <Form.Label>No of BedRooms</Form.Label>
                                <Form.Control
                                    type="number"
                                    onChange={handleChange}
                                    required
                                    name="bed"
                                    min={0}
                                    placeholder="Number of Rooms"
                                />
                            </Form.Group>
                            <div className="d-flex justify-content-end me-2">
                                <Button
                                    className="mt-3 px-4"
                                    variant="success"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AddHouse;
