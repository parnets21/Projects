import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; // Import your custom CSS file for styling

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        {/* Logo/Brand */}
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <img
            src="Assets/logo.jpeg"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Your logo"
          />
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Align menu items to the right */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/projects">Our Projects</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
