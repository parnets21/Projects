import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          {/* About Ivory Column */}
          <Col md={4}>
            <h5>About Ivory</h5>
            <p>
              Ivory Associates is committed to delivering top-notch services in the field of debt recovery and enforcement. We pride ourselves on our professionalism, integrity, and client-centric approach.
            </p>
          </Col>

          {/* Quick Links Column */}
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light">Home</a></li>
              <li><a href="/about" className="text-light">About Us</a></li>
              <li><a href="/service" className="text-light">Services</a></li>
              <li><a href="/contact" className="text-light">Contact Us</a></li>
            </ul>
          </Col>

          {/* Contact Information Column */}
          <Col md={4}>
            <h5>Contact Information</h5>
            <p><b>Branch Office:</b> <br />
             No : 194 1ST Floor J Lingaiah Road
             Seshadripuram Bengaluru-560020
          </p>
            <p>E-mail: ivoryassociates.rok@gmail.com</p>
            <p>Mobile: +91 9606382909</p>
          </Col>
        </Row>

        {/* Footer Bottom Row */}
        <Row className="mt-3">
          <Col className="text-center">
            {/* <p>&copy; 2024 Your Company Name. All rights reserved.</p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
