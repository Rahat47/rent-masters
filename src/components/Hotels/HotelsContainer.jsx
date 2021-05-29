import React from "react";
import { Container, Row } from "react-bootstrap";
//Import the array in here
import { hotelsInfo } from "../../assets/data/data";
import Heading from "../Heading/Heading";
import HotelCard from "./HotelCard";

const HotelsContainer = () => {
    return (
        <>
            <Heading title="Discover Hotels For Rent" subtitle="Our Hotels" />
            <Container>
                <Row>
                    {/* map the array and render the hotel Card component */}
                    {hotelsInfo.map((room, i) => (
                        <HotelCard room={room} key={i} />
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default HotelsContainer;
