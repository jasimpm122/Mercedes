import React from 'react';
import useAuthentication from "../hooks/useAuthentication";
import {useNavigate, Link, NavLink, useLocation} from "react-router-dom";
import {Container, Row, Nav, Navbar, Col, Button} from "react-bootstrap";
import Swal from "sweetalert2";
import {IoLocation} from "react-icons/io5";
import {LiaCarSideSolid, LiaHandsHelpingSolid} from "react-icons/lia";
import {BsTelephoneFill} from "react-icons/bs";
import {GrMail} from "react-icons/gr";
import {useSelector} from "react-redux";
import { isAdmin } from "../config/general";
import logo from "../assets/images/newcar.PNG";  // Import your logo image here

const Header = () => {
    const location = useLocation();
    const user = useSelector(({UserSlice}) => UserSlice.user);
    const {signOutCall} = useAuthentication();

    const handleLogout = async () => {
        await signOutCall();
    }

    const handleHelpButtonClick = e => {
        e.preventDefault();

        Swal.fire(
            'Do you need help?',
            'You can contact with us 24/7.',
            'question'
        )
    }

    return (
        <>
            {!location.pathname.includes("admin") && (
                <header id="header">
                    {isAdmin(user.role) && (
                        <NavLink to="/admin">
                            <Button variant="primary" className="w-100 rounded-0 fw-bold">
                                Click here for Admin Panel!
                            </Button>
                        </NavLink>
                    )}
                    <Navbar bg="white" variant="light" expand="lg" className="header-line-1">
                        <Container>
                            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                                <img 
                                    src={'https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/explained-m/exlm-03-media-hd.png'} 
                                    alt="Logo" 
                                    style={{ height: "40px", width: "auto" }} 
                                    className="me-2" 
                                />
                                <span className="fw-bold text-dark">BMW</span>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to="/" className="text-dark">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/about" className="text-dark">About</Nav.Link>
                                    <Nav.Link as={Link} to="/services" className="text-dark">Services</Nav.Link>
                                    <Nav.Link as={Link} to="/vehicles" className="text-dark">Vehicles</Nav.Link>
                                    <Nav.Link as={Link} to="/contact" className="text-dark">Contact</Nav.Link>
                                </Nav>
                                <Nav>
                                    {user.email && (
                                        <Nav.Link as={Link} to="/my-rentals" className="text-dark">
                                            My Rentals <LiaCarSideSolid size="1.25em" className="align-text-top" />
                                        </Nav.Link>
                                    )}
                                    <Nav.Link onClick={handleHelpButtonClick} className="text-dark">
                                        Help <LiaHandsHelpingSolid size="1.25em" className="align-text-bottom" />
                                    </Nav.Link>
                                    {user.email && (
                                        <Button variant="outline-dark" className="py-0" onClick={handleLogout}>
                                            Log out
                                        </Button>
                                    )}
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>
            )}
        </>
    );
};

export default Header;
