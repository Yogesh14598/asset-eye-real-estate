import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={5} className="mb-4">
            <h5 className="footer-title">ASSET EYE Private Limited</h5>
            <p className="footer-text w-75">
              Building dreams into reality since 1990. Quality construction
              services for residential and commercial projects.
            </p>
          </Col>

          <Col md={3} className="mb-4">
            <h6 className="footer-subtitle">Services</h6>
            <ul className="footer-list">
              <li>Residential Real Estate</li>
              <li>Commercial Buildings</li>
              <li>Infrastructure Projects</li>
              <li>Renovations</li>
            </ul>
          </Col>

          <Col md={4}>
            <h6 className="footer-subtitle">Contact Us</h6>
            <ul className="footer-list">
              <li>
                <strong>Phone:</strong> +91 9164030474
              </li>
              <li>
                <strong>Email:</strong> info@assetseye.com
              </li>
              <li>
                <strong>Address:</strong> No 36, 3rd floor, TM Complex, 1st Stage KHB Colony, Basaveshwaranagar, Bangalore - 560079
              </li>
            </ul>
          </Col>
        </Row>
        <hr style={{ borderColor: "#d7d7d7" }} />
        <p className="text-center text-muted-info mb-0">
          &copy; {new Date().getFullYear()} ASSET EYE REAL ESTATE. All rights
          reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
