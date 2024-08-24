// Homepage.js

import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from "../styles/homepage.module.css";
import { useMediaQuery } from 'react-responsive';
import Dropdown from 'react-bootstrap/Dropdown';

const Homepage = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) { // Adjust the offset as per your need
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 768 }); // Adjust max-width as per your design

  return (
    <section id='head'>
        <div className={style.header}>
      <div className={style.contactInfo}>
        <span className={style.contactItem}>
          <i className="fas fa-phone-alt"></i>
          <span>Phone:+918762414394, 9972474042</span>
        </span>
        <span className={style.contactItem}>
          <i className="fas fa-envelope"></i>
          <span>Email: kmkindustries22@gmail.com</span>
        </span>
        <span className={style.contactItem}>
          <i className="fas fa-map-marker-alt"></i>
          <span>Address:#19, New No 13/9, Bilwaradahalli, Shanubhoganahalli,  Bangalore-560083.</span>
        </span>
      </div>
    </div>
    <section id={style.navbar}>
      <div className="container">
      <Navbar expand="lg" bg="light" variant="light" className={style.nav}>
      <Navbar.Brand as={Link} to="/" className={style.logo}>
        <img
          src="/Assets/logo.png"
          height="80"
          width="140"
          className="d-inline-block align-top"
          alt="Your logo"
         
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className={isMobile ? 'justify-content-end' : ''}>
        <Nav className={isMobile ? `${style.menuItems} flex-column mx-auto` : `${style.menuItems} ms-auto`}>
          <Nav.Link as={Link} to="/" className={style.menuItem}>Home</Nav.Link>
          <Nav.Link href="/about" className={style.menuItem}>About</Nav.Link>
          <Nav.Link as={Link} to="#" className={style.menuItem}>
       <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic" style={{background:"#F8F9FA",color:"green",border:"none",fontWeight:"bold", fontSize:"18px" , marginTop:"-7px" }}>
        Services
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item  as={Link} to="/services">IT Assets Disposition</Dropdown.Item>
        <Dropdown.Item as={Link} to="/allmetal">All Metal Disposition</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Nav.Link>
          <Nav.Link href="/galary" className={style.menuItem}>Gallery</Nav.Link>
          <Nav.Link as={Link} to="/contact" className={style.menuItem}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      </div>
    </section>
    </section>
   
  );
};

export default Homepage;
