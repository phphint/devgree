import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactModal from "./Contact/ContactModal";
import Copyright from "./Copyright";
import footerBg from "../assets/images/devgree-footer-bg.png";

const Footer = () => {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = footerBg;
    img.onload = () => setBgLoaded(true);
  }, []);

  const footerStyle = bgLoaded ? {
    backgroundImage: `url(${footerBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
  } : {};

  return (
    <footer style={footerStyle} className="text-white py-3">
      <div className="footer-links me-5 ms-5">
        <div>
          <Link to="/privacy" className="text-white me-4">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-white me-4">
            Terms of Use
          </Link>
          {/* Changed from <a> to <button> */}
          <button
            className="text-white btn btn-link p-0 m-0 align-baseline"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            Contact
          </button>
        </div>
        <div className="copyright-footer">
          <Copyright />
        </div>
      </div>

      <ContactModal />
    </footer>
  );
};

export default Footer;
