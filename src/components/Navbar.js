import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.webp";
import {AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser,} from "react-icons/ai";
import {Link} from 'react-scroll'

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
            <Container>
                <Navbar.Brand href="/"><img src={logo} className="img-fluid logo" alt="brand"/></Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => {
                    updateExpanded(expand ? false : "expanded");
                }}/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto remove" defaultActiveKey="#home">

                        <Nav.Item>
                            <Link className="navhover" as={Link} to="home" spy={false} smooth={true}
                                  onClick={() => updateExpanded(false)}>
                                <AiOutlineHome style={{marginBottom: "2px"}}/> Home
                            </Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link className="navhover" as={Link} to="about" spy={false} smooth={true}
                                  onClick={() => updateExpanded(false)}>
                                <AiOutlineUser style={{marginBottom: "2px"}}/>{" "} About
                            </Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link className="navhover" as={Link} to="project" spy={false} smooth={true}
                                  onClick={() => updateExpanded(false)}>
                                <AiOutlineFundProjectionScreen style={{marginBottom: "2px"}}/>{" "} Projects
                            </Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link className="navhover" as={Link} to="contact" spy={false} smooth={true}
                                  onClick={() => updateExpanded(false)}>
                                <AiOutlineFundProjectionScreen style={{marginBottom: "2px"}}/>{" "} Contact
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
