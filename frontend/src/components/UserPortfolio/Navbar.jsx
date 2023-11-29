import React from 'react';
import { Dropdown } from 'react-bootstrap';
import './portfoslio.css'; 


const CustomNavbar = ({ userName, userRole }) => {
  return (
    <nav className="portfolio-top d-flex justify-content-between align-items-center p-3 border-bottom">
      <div>
        <h2>name</h2>
        <p>role</p>
      </div>

      <div className="d-flex align-items-center">
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            <i className="bi bi-list"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Link 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Link 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Link 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <span className="ms-3">Devgree</span>
      </div>
    </nav>
  );
}; 

export default CustomNavbar; 
 