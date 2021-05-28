import { Button } from "bootstrap";
import React from "react";
import { Card } from "react-bootstrap";

const HotelCard = (info) => {
    console.log(info.title);
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={info.img} />
            <Card.Body>
                <Card.Title>{info.title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
        </Card.Text>
                
            </Card.Body>
        </Card>
    );
};

export default HotelCard;
