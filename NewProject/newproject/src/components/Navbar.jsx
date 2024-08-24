import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import "../styles/navbar.css";
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { MdContactPhone } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
const ResponsiveNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src="/Assets/logo.png" alt="" style={{ height: "50px", width: "250px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto d-none d-lg-flex">
              <Nav.Link href="/"> <IoHome /> Home</Nav.Link>
              <Nav.Link href="#about"><FcAbout /> About</Nav.Link>
              <Nav.Link href="#contact"> <MdContactPhone /> Contact</Nav.Link>
            </Nav>
            <div className="d-none d-lg-flex button-group">
              <Button variant="secondary" href="#download" className="download">Download App <FaFileDownload /></Button>
              <Button variant="primary" href="/booknow" className='booknow'>Book Now</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Nav className="ml-auto">
              <Nav.Link href="#home" onClick={handleClose}>Home</Nav.Link>
              <Nav.Link href="#about" onClick={handleClose}>About</Nav.Link>
              <Nav.Link href="#contact" onClick={handleClose}>Contact</Nav.Link>
              <Button variant="secondary" href="#download" className="mt-3">Download App <FaFileDownload /></Button>
              <Button variant="primary" href="/booknow" className="mt-3">Book Now</Button>
            </Nav>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ResponsiveNavbar;
