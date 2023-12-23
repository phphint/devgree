import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducers/authSlice.js"; // Adjust the import path as necessary
import { Container, Row, Col } from "react-bootstrap";
import backgroundImage from "../assets/images/banner-background.png"; // Import the image
import { ReactComponent as Logo } from "../logo4.svg"; // Logo import
import arrowDownImage from "../assets/images/arrow_page_down_banner.png"; // Import the arrow image
import NavMenu from "./NavMenu"; // Import NavBar component

import AuthModals from "./AuthModals"; // Import AuthModals component


const FullHeightBanner = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Access isLoggedIn from the state
  const dispatch = useDispatch(); // Create a dispatch function

  // Handler function for logout button
  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        {/* First Row: Nav Menu */}
        <Row>
          <Col md={6} className="text-end">
            {" "}
            {/* Empty column for spacing */}
            {/* Empty space */}
          </Col>
          <Col md={6} style={{ backgroundColor: "#1e293f", padding: "5px" }}>
            <NavMenu></NavMenu>
            <AuthModals />

          </Col>
        </Row>

        {/* Second Row: Logo and Buttons */}
        <Row className="align-items-center my-4 justify-content-between">
          <Col md={6}>
            <Link
              to="/"
              className="d-flex flex-column align-items-start text-decoration-none"
            >
              <div className="d-flex align-items-center">
                <Logo
                  style={{ width: "auto", height: "60px", marginRight: "10px" }} // Increased logo height
                />
                <span
                  className="display-6 fw-bold"
                  style={{ color: "#33dbbd", fontSize: "3.85rem" }} // Increased font size for logo text
                >
                  Devgree
                </span>
              </div>
              <p
                style={{
                  color: "#b24957",
                  fontSize: "1.60rem",
                  marginTop: "5px",
                }} // Increased font size for subtitle
              >
                Innovative Portfolio Platform
              </p>
            </Link>
          </Col>

          <Col md={6} className="text-end">
            {isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className="btn btn-warning me-2"
                  style={{
                    backgroundColor: "#65eae1",
                    borderRadius: "25px",
                    border: " #65eae1",
                  }}
                >
                  Dashboard
                </Link>
                <button
                  type="button"
                  className="btn btn-outline-light"
                  style={{ borderRadius: "25px" }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-outline-light me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  style={{ borderRadius: "25px" }}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#signupModal"
                  style={{
                    backgroundColor: "#65eae1",
                    borderRadius: "25px",
                    border: "#65eae1",
                  }}
                >
                  Sign-up
                </button>
              </>
            )}
          </Col>
        </Row>

        {/* Third Row: Title and Text */}
        <Row>
          <Col className="text-center">
            <h1 style={{ fontSize: "8rem", color: "#6d8896" }}>Elevate</h1>{" "}
            {/* Elevate text color */}
            <p style={{ fontSize: "2rem" }}>
              <span style={{ color: "#fbc6c6" }}>Your</span>{" "}
              {/* 'Tech' color */}
              <span style={{ color: "#a7ad78" }}> Tech </span>{" "}
              {/* Rest of the text white */}
              <span style={{ color: "#fbc6c6" }}>Portfolio</span>
            </p>
            <p style={{ color: "#fbc6c6" }}>
              Step into a new era of showcasing
            </p>
          </Col>
        </Row>
      </Container>

 

      {/* Scroll Down Arrow */}
      <a
        href="#featuresBlock"
        className="scroll-down-arrow"
        style={{ backgroundImage: `url(${arrowDownImage})` }}
      ></a>
    </div>
  );
};

export default FullHeightBanner;
