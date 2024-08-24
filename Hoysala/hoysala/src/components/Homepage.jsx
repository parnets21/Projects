
import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from "../styles/homepage.module.css"; // Import your CSS module
import { useMediaQuery } from 'react-responsive';

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

  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section id='head'>
        <div className={style.header}>
      <div className={style.contactInfo}>
        <span className={style.contactItem}>
          <i className="fas fa-phone-alt"></i>
          <span>Phone: +91-9341285260</span>
        </span>
        <span className={style.contactItem}>
          <i className="fas fa-envelope"></i>
          <span>Email: rraghunath36@gmail.com</span>
        </span>
        <span className={style.contactItem}>
          <i className="fas fa-map-marker-alt"></i>
          <span>Address: No.82, 2nd Block, Dr. Rajkumar Road, Rajaji Nagar, Bangalore 10.</span>
        </span>
      </div>
    </div>
   
    <Navbar expand="lg" bg="light" variant="light" className={style.nav}>
      <Navbar.Brand as={Link} to="/" className={style.logo}>
        <img
          src="/Assets/logo.jpeg"
          height="90"
          width="140"
          className="d-inline-block align-top"
          alt="Your logo"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className={isMobile ? 'justify-content-end' : ''}>
        <Nav className={isMobile ? `${style.menuItems} flex-column mx-auto` : `${style.menuItems} ms-auto`}>
          <Nav.Link as={Link} to="/" className={style.menuItem}>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" className={style.menuItem}>About</Nav.Link>
          <Nav.Link as={Link} to="/ourproject" className={style.menuItem}>Our Projects</Nav.Link>
          <Nav.Link as={Link} to="/galary" className={style.menuItem}>Gallery</Nav.Link>
          <Nav.Link as={Link} to="/contact" className={style.menuItem}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
    </section>
   
  );
};

export default Homepage;
