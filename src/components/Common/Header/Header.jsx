import React, { useEffect, useState } from "react";
import img from "./../../../assets/images/logo/logo4.png";
import {
  Container,
  Row,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Header/header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth <= 991) {
      setOpen(!open);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  // sticky Header
  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 120
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <header className="header-section">
      <Container>
        <Navbar expand="lg" className="p-0">
          {/* Logo Section  */}
          <Navbar.Brand>
            <NavLink
              to="/"
              style={{ display: "flex", gap: 5, alignItems: "center" }}
            >
              <img className="logo-img" src={img} alt="logo"  />
              <h2 className="logo"
                
              >
                Hammad Travels
              </h2>
            </NavLink>
          </Navbar.Brand>
          {/* End Logo Section  */}

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            show={open}
          >
            {/*mobile Logo Section  */}
            <Offcanvas.Header>
              <h1 className="logo">Hammad Travels</h1>
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>
            {/*end mobile Logo Section  */}

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 ">
                <NavLink className="nav-link" to="/" onClick={toggleMenu} >
                  HOME
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/aboutus"
                  onClick={toggleMenu}
                >
                  ABOUT US
                </NavLink>
                <NavLink className="nav-link" to="/tours" onClick={toggleMenu}>
                  TOURS
                </NavLink>

                <NavDropdown
                  title="DESTINATION"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavLink
                    className="nav-link text-dark"
                    to="/spain"
                    onClick={toggleMenu}
                  >
                    SPAIN TOURS
                  </NavLink>
                </NavDropdown>

                <NavLink
                  className="nav-link"
                  to="/gallery"
                  onClick={toggleMenu}
                >
                  GALLERY
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/contact"
                  onClick={toggleMenu}
                >
                  CONTACT
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="ms-md-4 ms-2">
            <NavLink className="primaryBtn d-none d-sm-inline-block">
              Book Now
            </NavLink>
            <li className="d-inline-block d-lg-none ms-3 toggle_btn">
              <i
                className={open ? "bi bi-x-lg" : "bi bi-list"}
                onClick={toggleMenu}
              ></i>
            </li>
          </div>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
