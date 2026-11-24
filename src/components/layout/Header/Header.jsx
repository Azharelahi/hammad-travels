import React, { useEffect, useState } from "react";
import img from "assets/images/logo/logo4.png";
import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 12);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    setInteracting(open);
  }, [open]);

  const getNavLinkClass = ({ isActive }) =>
    `nav-link${isActive ? " active-link" : ""}`;

  return (
    <header
      className={`header-section${scrolled ? " is-scrolled" : ""}${interacting ? " is-interacting" : ""}`}
      onPointerEnter={() => setInteracting(true)}
      onPointerLeave={() => setInteracting(open)}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setInteracting(open);
        }
      }}
    >
      <Container>
        <Navbar expand="lg" className="p-0">
          <Navbar.Brand as={NavLink} to="/" className="brand-link">
            <img className="logo-img" src={img} alt="" />
            <span className="brand-wordmark">
              <span className="brand-name">
                <span>Hammad</span>
                <span className="brand-accent">travel and tour</span>
              </span>
            </span>
          </Navbar.Brand>

          <Navbar.Offcanvas
            id="travel-navigation"
            placement="end"
            backdrop={false}
            show={open}
            onHide={() => setOpen(false)}
          >
            <Offcanvas.Header>
              <span className="brand-wordmark">
                <span className="brand-name">
                  <span>Hammad</span>
                  <span className="brand-accent">travel and tour</span>
                </span>
              </span>
              <button
                type="button"
                className="mobile-menu-button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation"
              >
                <X size={21} />
              </button>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 align-items-lg-center">
                <NavLink className={getNavLinkClass} to="/">
                  Home
                </NavLink>
                <NavLink className={getNavLinkClass} to="/aboutus">
                  About us
                </NavLink>
                <NavLink className={getNavLinkClass} to="/tours">
                  Tours
                </NavLink>
                <NavLink className={getNavLinkClass} to="/car-hire">
                  Car hire
                </NavLink>
                <NavLink className={getNavLinkClass} to="/gallery">
                  Gallery
                </NavLink>
                <NavLink className={getNavLinkClass} to="/contact">
                  Contact
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <div className="header-actions">
            <NavLink to="/car-hire" className="header-cta">
              <span>Rent a car</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </NavLink>
            <button
              type="button"
              className="mobile-menu-button menu-toggle"
              onClick={() => setOpen(true)}
              aria-label="Open navigation"
              aria-expanded={open}
              aria-controls="travel-navigation"
            >
              <Menu size={22} />
            </button>
          </div>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
