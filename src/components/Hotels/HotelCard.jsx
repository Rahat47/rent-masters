import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faBath, faDollarSign, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Card, Button, Col, Row } from "react-bootstrap";

const HotelCard = ({ room }) => {
    return (
        <Col>
            <Card style={{ width: "26rem" }}>
            <Card.Img variant="top" src={room.img} />
            <Card.Body>
                <Card.Title>{room.title}</Card.Title>
                <Card.Text><FontAwesomeIcon icon={faMapMarkerAlt}/>{room.address}</Card.Text>
                <Row className="p-2">
                    <Col>
                        <Card.Text > <FontAwesomeIcon icon={faBed}/> {room.bedType}</Card.Text>
                    </Col>
                    <Col>
                        <Card.Text><FontAwesomeIcon icon={faBath}/> {room.bathroom}</Card.Text>
                    </Col>
                </Row>
                <Row>
                    <Col>
                         <Button variant="primary">Book Now</Button>
                    </Col>
                    <Col>
                        <Card.Text > <FontAwesomeIcon icon={faDollarSign}/>{room.price}</Card.Text>
                    </Col> 
                </Row>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default HotelCard;
