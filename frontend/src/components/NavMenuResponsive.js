import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleCloseNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      {/* Navbar for Tablet/Desktop */}
      <Navbar expand="md" className="d-none d-md-flex"> {/* Change expand="lg" to expand="md" */}
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" onClick={() => setIsNavOpen(false)}>Home</Nav.Link>
          <Nav.Link as={NavLink} to="/features" onClick={() => setIsNavOpen(false)}>Features</Nav.Link>
          <Nav.Link as={NavLink} to="/about" onClick={() => setIsNavOpen(false)}>About</Nav.Link>
          <Nav.Link href="#" data-bs-toggle="modal" data-bs-target="#contactModal" onClick={() => setIsNavOpen(false)}>Contact</Nav.Link>
        </Nav>
      </Navbar>

      {/* Mobile Navbar */}
      <Navbar expand="md" className="d-flex d-md-none">
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav" 
          onClick={handleToggleNav}
        />
      </Navbar>

      {/* Full-Screen Nav for Mobile */}
      <div className={`full-screen-nav ${isNavOpen ? 'active' : ''}`}>
        <div className="full-screen-nav-content">
          <Nav.Link as={NavLink} to="/" onClick={handleCloseNav}>Home</Nav.Link>
          <Nav.Link as={NavLink} to="/features" onClick={handleCloseNav}>Features</Nav.Link>
          <Nav.Link as={NavLink} to="/about" onClick={handleCloseNav}>About</Nav.Link>
          <Nav.Link href="#" data-bs-toggle="modal" data-bs-target="#contactModal" onClick={handleCloseNav}>Contact</Nav.Link>
          
          <button className="btn btn-primary mt-3" onClick={handleCloseNav}>Close</button>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
