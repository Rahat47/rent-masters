import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import styles from "./navbar.module.css";

const NavBar = () => {
    return (
        <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Brand className={styles.logo} as={Link} to="/">
                    Rent Masters
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={LinkScroll}
                            to="hotels"
                            spy
                            smooth
                            offset={-50}
                            style={{ cursor: "pointer" }}
                        >
                            Rooms
                        </Nav.Link>
                        <Nav.Link
                            as={LinkScroll}
                            to="footer"
                            spy
                            smooth
                            offset={-50}
                            style={{ cursor: "pointer" }}
                        >
                            Contact
                        </Nav.Link>
                        <Nav.Link as={Link} to="/auth">
                            <b>Login</b>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
