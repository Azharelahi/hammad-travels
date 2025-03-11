import React, { useState, useEffect } from "react";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ChevronUp, MapPin } from "lucide-react";
import "../Footer/footer.css";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="pt-5 bg-dark text-white">
        <Container>
          <Row>
            {/* Company */}
            <Col md="3" sm="6" className="mt-3">
              <h4 className="footer-title">Hammad Travels</h4>
              <ListGroup variant="flush" className="footer-list">
                <ListGroup.Item>
                  <ListGroup.Item>
                    <NavLink
                      to="/"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      Home
                    </NavLink>
                  </ListGroup.Item>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/car-hire">Available Cars</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/gallery">Gallery</NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            {/* Explore */}
            <Col md="3" sm="6" className="mt-3">
              <h4 className="footer-title">Explore</h4>
              <ListGroup variant="flush" className="footer-list">
                <ListGroup.Item>
                  <NavLink to="/faq">FAQ</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/terms">Terms of Services</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/privacy">Privacy Policy</NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            {/* Quick Links */}
            <Col md="3" sm="6" className="mt-3">
              <h4 className="footer-title">Quick Links</h4>
              <ListGroup variant="flush" className="footer-list">
                <ListGroup.Item>
                  <NavLink to="/tours">Tours</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/aboutus">About Us</NavLink>
                </ListGroup.Item>
                <ListGroup.Item>
                  <NavLink to="/contact">Contact Us</NavLink>
                </ListGroup.Item>
              </ListGroup>
            </Col>

            {/* Contact Info */}
            <Col
              md="3"
              sm="6"
              className="mt-3 text-center d-flex flex-column align-items-center"
            >
              <h4 className="footer-title">Contact Info</h4>
              <p className="d-flex align-items-center gap-2">
                <MapPin size={20} />
                G9 Markaz , Islamabad, Pakistan
              </p>
              <a
                href="mailto:contact.hammadtravel@gmail.com"
                className="d-flex align-items-center gap-2 text-white"
                style={{ textDecoration: "none" }}
              >
                <Mail size={20} /> contact.hammadtravel@gmail.com
              </a>
              <a
                href="tel:+923341111427"
                className="d-flex align-items-center gap-2 text-white mt-2"
                style={{ textDecoration: "none" }}
              >
                <Phone size={20} /> +92 334 1111427
              </a>
            </Col>
          </Row>

          {/* Copyright Section */}
          <Row
            className="mt-4 border-top pt-3 mx-auto d-flex justify-content-center align-items-center flex-wrap"
            style={{ width: "80%" }}
          >
            {/* Copyright Section */}
            <Col md={6} xs={12} className="text-center mb-2 mb-md-0">
              <p className="m-0 text-white">
                © 2025 Hammad Travels®. All rights reserved.
              </p>
            </Col>

            {/* Social Media Section */}
            <Col
              md={6}
              xs={12}
              className="text-center d-flex justify-content-center gap-3"
            >
              <a
                href="https://www.facebook.com/share/1MTGNTf85v/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.instagram.com/hammad.travelservices/?igsh=dTVoNXhzdTk1cG55#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <FaInstagram size={24} />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Scroll to Top Button */}
      <div
        id="back-top"
        onClick={scrollTop}
        className={`scroll-top ${visible ? "visible" : ""}`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </div>
    </>
  );
};

export default Footer;
