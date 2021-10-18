import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    return (
        
        <>
        <Navbar className="mineContainer" collapseOnSelect expand="lg" sticky="top"  variant="dark">
            <Container className="container">
                <Navbar.Brand href="#home" className="hospitalTittle">Specialized  Hospital</Navbar.Brand>
                <Nav className="">
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#doctor">Find A Doctor</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#medicine">Online Medicine</Nav.Link>
                      
                                <Button variant="outline-light">Logout</Button>
                                
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>

                        
                        <Navbar.Text>
                            Signed in as: <a href="#login"></a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Nav>
            </Container>
        </Navbar>

    </>



        
    );
};

export default Header;