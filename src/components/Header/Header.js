import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth();
    return (

        <>
            <Navbar className="mineContainer" collapseOnSelect expand="lg" sticky="top" variant="dark">
                <Container className="container">
                    <Navbar.Brand href="#home" className="hospitalTittle">Specialized  Hospital</Navbar.Brand>
                    <Nav className="">
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#doctor">Find A Doctor</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#medicine">Online Medicine</Nav.Link>

                            {
                                user?.email ?
                                    <Button onClick={logout} >Logout</Button>
                                    :

                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>


                            }
                            {
                                user?.email &&
                              
                                    <span style={{ color: "white" }}> {user?.displayName} </span>

                               
                            }




                        </Navbar.Collapse>

                    </Nav>
                </Container>
            </Navbar>

        </>




    );
};

export default Header;