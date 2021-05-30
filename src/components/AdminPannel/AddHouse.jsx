import React from "react";
import { Button, Form } from "react-bootstrap";
import Styles from "./AddHouse.module.css";

const AddHouse = () => {
    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.formContainer}>
                <div className="row">
                    <div className="col-md-6">
                        <Form>
                            <Form.Group className="mb-3" controlId="service">
                                <Form.Label>Service Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Title"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="location">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Location"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="location">
                                <Form.Label>No of Bathrooms</Form.Label>
                                <Form.Control
                                    type="text"
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
                                    type="text"
                                    placeholder="Enter Price"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="rooms">
                                <Form.Label>No of Rooms</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Number of Rooms"
                                />
                            </Form.Group>

                            <div class="mb-3">
                                <label for="formFile" class="form-label">
                                    Upload room image
                                </label>
                                <input
                                    class="form-control"
                                    type="file"
                                    id="formFile"
                                />
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
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
    );
};

export default AddHouse;
