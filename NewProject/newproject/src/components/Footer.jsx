import React from 'react';
import "../styles/footer.css";
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <address>
              123 Main Street<br />
              Anytown, USA 12345<br />
              <a href="tel:+1234567890">+1 234 567 890</a><br />
              <a href="mailto:info@example.com">info@example.com</a>
            </address>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
