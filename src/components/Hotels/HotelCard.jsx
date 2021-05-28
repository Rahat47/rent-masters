import { Button } from "bootstrap";
import React from "react";
import { Card } from "react-bootstrap";
import data from '../../assets/data/data';

const HotelCard = (room) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{room.title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
        </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default HotelCard;
