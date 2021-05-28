import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styles from './navbar.module.css'

const NavBar = () => {
    return (
        <Navbar bg="white" expand="lg">
            <Container  >
                <Navbar.Brand className={styles.logo} href="#">Rent Masters</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <Nav.Link href="#action2">Service</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                        <Nav.Link href="#action2"><b>Login</b></Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;