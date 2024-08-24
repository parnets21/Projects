// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/footer.css'; // Import your CSS for footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
           {/* <img  src="/Assets/logo.jpeg"
          height="150"
          width="180" alt="" /> */}
          <h3>About Us</h3>
          <ul>
            <li> <p><b>KMK Industries</b> </p></li>
            <li> <a href="/about"><p className='founded'>At KMK Industries, we specialize in comprehensive e-waste recycling management offering  environmentally responsible solutions for disposing of  electronic waste and metal scrap.</p></a></li>
          </ul>
          
          </Col>
          <Col md={4}>
            <h3>Quick Links</h3>
            <ul>
              <li><a  href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/galary">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h3>Contact Us</h3>
            <ul>
              <li><a href=""><p>Email: kmkindustries22@gmail.com</p></a></li>
              <li><a href=""> <p>Phone: +91 8762414394  </p>
                              <p className='secondphone'> +91 9972474042</p></a></li>
              <li><a href=""><p>Address:- #19, New No 13/9, Bilwaradahalli, Shanubhoganahalli Main Road, opp. area 83, Jigani(H), Anekal(T),Bangalore-560083.</p></a></li>
            </ul>
          
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
