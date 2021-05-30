import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { logout } from "../../redux/actions/authActions";
import styles from "./navbar.module.css";
const NavBar = () => {

    const user = useSelector(state => state.auth.authData)
    const dispatch = useDispatch()
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
                            offset={-50}
                            style={{ cursor: "pointer" }}
                        >
                            Rooms
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/dashboard"
                            spy
                            offset={-50}
                            style={{ cursor: "pointer" }}
                        >
                            Dashboard
                        </Nav.Link>
                        <Nav.Link
                            as={LinkScroll}
                            to="footer"
                            spy
                            offset={-50}
                            style={{ cursor: "pointer" }}
                        >
                            Contact
                        </Nav.Link>
                        {
                            user ? <Nav.Link as={Button} variant="danger" onClick={() => {
                                dispatch(logout())
                            }} >
                                <strong>{`Logout ${user.name}?`} </strong>
                            </Nav.Link> : <Nav.Link as={Link} to="/auth">
                                <strong>Login</strong>
                            </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
