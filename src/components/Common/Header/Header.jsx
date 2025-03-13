import React, { useEffect, useState } from "react";
import "animate.css";
import { motion } from "framer-motion";
import img from "./../../../assets/images/logo/logo4.png";
import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Header/header.css";

const AnimatedText = ({ text, className }) => {
  return (
    <span className={className} style={{ whiteSpace: "pre", fontFamily: "'Great Vibes', cursive" }}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} style={{ marginRight: "8px" }}>
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (wordIndex * 0.4) + (charIndex * 0.1), ease: "easeOut" }}
              style={{ display: "inline-block", fontFamily: "inherit" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};


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
  }, []);

  const isSticky = () => {
    const header = document.querySelector(".header-section");
    const rentNowBtn = document.querySelector(".Rent-Now");
    const scrollTop = window.scrollY;

    if (scrollTop >= 120) {
      header.classList.add("is-sticky");
      rentNowBtn.classList.add("black-button");
    } else {
      header.classList.remove("is-sticky");
      rentNowBtn.classList.remove("black-button");
    }
  };

  return (
    <header className="header-section">
      <Container>
        <Navbar expand="lg" className="p-0">
          <Navbar.Brand>
            <NavLink
              to="/"
              style={{ display: "flex", gap: 5, alignItems: "center" }}
            >
              <img className="logo-img" src={img} alt="logo" />
              <h2 className="logo" >
                <AnimatedText text="Hammad Travels" />
              </h2>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            placement="start"
            show={open}
          >
            <Offcanvas.Header>
              <h1 className="logo">Hammad Travels</h1>
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/" onClick={toggleMenu}>
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
                <NavLink
                  className="nav-link text-dark"
                  to="/car-hire"
                  onClick={toggleMenu}
                >
                  CAR HIRE
                </NavLink>
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
            <NavLink
              to="/car-hire"
              className="Rent-Now d-none d-sm-inline-block animate__animated animate__pulse animate__infinite"
            >
              Rent Now
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
