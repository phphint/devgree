import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./portfolio.css";
import backgroundImage from './Elevate_Your_Tech_Portfolio.png';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const profile = useSelector((state) => state.userPortfolio.data.profile);

  const userName = profile?.fullName || "No Name";
  const userRole = profile?.roleTitle || "No Role";

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="portfolio-top d-flex justify-content-between">

      <div className="left-column pl-1 pt-1">
        <h2 className="mb-0">{userName}</h2>
        <p className="mb-0 pb-0">{userRole}</p>
      </div>

      <div className="right-column">
        <div className="top-row d-flex justify-content-end">
          {/* Dropdown */}
          <div className={`dropdown ${isOpen ? "show" : ""}`}>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              aria-expanded={isOpen}
              onClick={toggleDropdown}
            >
              <i className="bi bi-list"></i>
            </button>
            <div>
              <ul
                className={`dropdown-menu ${isOpen ? "show" : ""}`}
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="/about">
                    About Devgree
                  </a>
                </li>
              
                <li>
                  <a className="dropdown-item" href="/dashboard">
                    Return to Dashboard
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Logo area */}
          <div className="logo-area logo-bg pt-1 pl-1" onClick={toggleDropdown}>

            <span className="pr-1 ">Devgree</span>
          </div>
        </div>

        <div className="bottom-row" style={{ backgroundImage: `url(${backgroundImage})` }}>

        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
