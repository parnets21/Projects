
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import "../styles/navbar.css";

const MyNavbar = () => {
  return (
    <Navbar bg="" variant="dark" expand="lg" className="p-3">
      <Container style={{padding:"0px"}}>
        <Navbar.Brand href="/">
          <img
            src="https://via.placeholder.com/40"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
          Ivory Associates
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/service">Services</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
          <Button href='/contact' variant="outline-light" className="ml-3">
            Get in Touch
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

