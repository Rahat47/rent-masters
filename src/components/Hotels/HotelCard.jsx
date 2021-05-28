import React from "react";
import { Card, Button } from "react-bootstrap";

const HotelCard = ({ room }) => {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={room.img} />
            <Card.Body>
                <Card.Title>{room.title}</Card.Title>
                <Card.Text>{room.bedType}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default HotelCard;
