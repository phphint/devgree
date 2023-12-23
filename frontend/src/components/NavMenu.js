import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import { Nav } from "react-bootstrap";

const NavMenu = () => {
  const activeStyle = {
    textDecoration: "underline", // Style for active link
    color: "#fff" // You can set the active link color if you want
  };

  return (
    <>  
      <Nav className="justify-content-center ">
        <Nav.Item className="text-center">
          <NavLink 
            to="/" 
            className="nav-link text-white" 
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </Nav.Item>
        <Nav.Item className="text-center">
          <NavLink 
            to="/features" 
            className="nav-link text-white" 
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Features
          </NavLink>
        </Nav.Item>
        <Nav.Item className="text-center">
          <NavLink 
            to="/about" 
            className="nav-link text-white" 
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            About
          </NavLink>
        </Nav.Item>
        <Nav.Item className="text-center">
          {/* For the Contact link, since it opens a modal, you may handle its active state separately */}
          <a
            href="#"
            className="nav-link text-white"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            Contact
          </a>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default NavMenu;
