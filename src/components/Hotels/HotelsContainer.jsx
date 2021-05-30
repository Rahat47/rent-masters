import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Heading from "../Heading/Heading";
import HotelCard from "./HotelCard";

const HotelsContainer = () => {
    const hotelsInfo = useSelector(state => state.rooms);

    return (
        <>
            <Heading title="Discover Hotels For Rent" subtitle="Our Hotels" />
            <Container id="hotels">
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
