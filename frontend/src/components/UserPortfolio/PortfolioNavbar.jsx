import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const profile = useSelector((state) => state.userPortfolio.data.profile);

  const userName = profile?.fullName || 'No Name';
  const userRole = profile?.roleTitle || 'No Role';

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="d-flex justify-content-between align-items-center p-3 border-bottom">
      <div>
        <h2>{userName}</h2>
        <p>{userRole}</p>
      </div>

      <div className="d-flex align-items-center">
        <div className={`dropdown ${isOpen ? 'show' : ''}`}>
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" aria-expanded={isOpen} onClick={toggleDropdown}>
            <i className="bi bi-list"></i>
          </button>
          <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item" href="#/action-1">Link 1</a></li>
            <li><a className="dropdown-item" href="#/action-2">Link 2</a></li>
            <li><a className="dropdown-item" href="#/action-3">Link 3</a></li>
          </ul>
        </div>

        <span className="ms-3 fw-bold fs-4">Devgree</span>
      </div>
    </nav>
  );
};

export default CustomNavbar;
