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
          {/* Change the <a> tag to a <button> */}
          <button
            className="nav-link text-white btn btn-link p-0 align-baseline"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
            style={{ 
              backgroundColor: 'transparent', 
              border: 'none',
              marginTop: '8px',
              marginLeft: '8px',
              textDecoration: 'none',
              display: 'block',
              width: '100%'
            }}
          >
            Contact
          </button>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default NavMenu;
