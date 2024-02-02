// Import necessary modules
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import './navbar.css';

const CreateNavbar = () => {
    const [whatWeDoOpen, setWhatWeDoOpen] = useState(false);
    const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const renderTooltip = (text) => (
        <Tooltip id="tooltip">
            {text}
        </Tooltip>
    );

    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand as={Link} to="/" onClick={scrollToTop}>
                <img src="https://www.tcs.com/content/dam/global-tcs/en/images/home/dark-theme.svg"
                    alt="TCS Logo" height={40} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown
                        title={
                            <span style={{ color: 'white' }}>
                                <Link to="/whatwedo/0" style={{ color: 'white' }}>What we do</Link>
                            </span>
                        }
                        id="whatwedo"
                        show={whatWeDoOpen}
                        onMouseOver={() => setWhatWeDoOpen(true)}
                        onMouseLeave={() => setWhatWeDoOpen(false)}
                    >
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip("Information about Overview")}
                        >
                            <NavDropdown.Item as={Link} to="/whatwedo/1">
                                Overview
                            </NavDropdown.Item>
                        </OverlayTrigger>
                        <NavDropdown.Divider />
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip("Information about Industries")}
                        >
                            <NavDropdown.Item as={Link} to="/whatwedo/2">
                                Industries
                            </NavDropdown.Item>
                        </OverlayTrigger>
                        <NavDropdown.Divider />
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip("Information about Service")}
                        >
                            <NavDropdown.Item as={Link} to="/whatwedo/3">
                                Service
                            </NavDropdown.Item>
                        </OverlayTrigger>
                        <NavDropdown.Divider />
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip("Information about Platform")}
                        >
                            <NavDropdown.Item as={Link} to="/whatwedo/4">
                                Products and platform
                            </NavDropdown.Item>
                        </OverlayTrigger>
                        <NavDropdown.Divider />
                    </NavDropdown>

                    <NavDropdown
                        title={
                            <span style={{ color: 'white' }}>
                                <Link to="/whoweare/0" style={{ color: 'white' }}>Who we are</Link>
                            </span>
                        }
                        id="whoweare"
                        show={whoWeAreOpen}
                        onMouseOver={() => setWhoWeAreOpen(true)}
                        onMouseLeave={() => setWhoWeAreOpen(false)}
                    >
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip("Information about Overview what we do")}
                        >
                            <NavDropdown.Item as={Link} to="/whoweare/1">
                                Overview
                            </NavDropdown.Item>
                        </OverlayTrigger>
                        <NavDropdown.Divider />
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip("Information About Us")}
                        >
                            <NavDropdown.Item as={Link} to="/whoweare/2">
                                About Us
                            </NavDropdown.Item>
                        </OverlayTrigger>
                        <NavDropdown.Divider />
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip("Information about Leadership")}
                        >
                            <NavDropdown.Item as={Link} to="/whoweare/3">
                                Leadership
                            </NavDropdown.Item>
                        </OverlayTrigger>
                        <NavDropdown.Divider />
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip("Information about Events")}
                        >
                            <NavDropdown.Item as={Link} to="/whoweare/4">
                                Events
                            </NavDropdown.Item>
                        </OverlayTrigger>
                        <NavDropdown.Divider />
                    </NavDropdown>

                    <Nav.Link as={Link} to="/services" style={{ color: 'white' }}>
                        Insights
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contact" style={{ color: 'white' }}>
                        Careers
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CreateNavbar;
