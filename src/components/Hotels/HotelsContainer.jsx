import React from "react";
import { Container } from "react-bootstrap";
import Heading from "../Heading/Heading";
import HotelCard from "./HotelCard";


const HotelsContainer = () => {
    return (
        <>
            <Heading title="Discover Hotels For Rent" subtitle="Our Hotels" />
            <Container>
                <HotelCard></HotelCard>
            </Container>
        </>
    );
};

export default HotelsContainer;
