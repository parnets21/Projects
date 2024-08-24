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
            <li> <p><b>Hoysala Constructions</b> </p></li>
            <li> <a href="/about"><p className='founded'>Founded in 1991 by R. Raghunath, Hoysala Construction 
            has established itself as a premier construction company  with a strong commitment to excellence, quality, and client satisfaction.</p></a></li>
          </ul>
          
          </Col>
          <Col md={4}>
            <h3>Quick Links</h3>
            <ul>
              <li><a  href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/ourproject">Our Project</a></li>
              <li><a href="/galary">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h3>Contact Us</h3>
            <ul>
              <li><a href=""><p>Email: rraghunath36@gmail.com</p></a></li>
              <li><a href=""> <p>Phone: +91-9341285260</p></a></li>
              <li><a href=""><p>Address: No.82, 2nd Block, Dr. Rajkumar Road, Rajaji Nagar, Bangalore 10.</p></a></li>
            </ul>
          
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
