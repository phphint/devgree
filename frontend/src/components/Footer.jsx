// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import ContactModal from "./Contact/ContactModal"; // Import the new ContactModal component
import Copyright from "./Copyright";
import footerBg from "../assets/images/devgree-footer-bg.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
      className="text-white py-3"
    >
      <div className="d-flex justify-content-between me-5 ms-5  pt-5">
        <div>
          <Link to="/privacy" className="text-white me-4">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-white me-4">
            Terms of Use
          </Link>
          <a
            href="#"
            className="text-white"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            Contact
          </a>
        </div>
        <Copyright />
      </div>

      <ContactModal /> {/* Use the ContactModal component here */}
    </footer>
  );
};

export default Footer;
