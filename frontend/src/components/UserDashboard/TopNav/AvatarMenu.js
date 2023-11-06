import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../reducers/authSlice.js";

const AvatarMenu = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="nav-item dropdown">
      <button
        className="btn nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          className="rounded-circle me-lg-2"
          src="https://via.placeholder.com/40"
          alt=""
          style={{ width: "40px", height: "40px" }}
        />
        <span className="d-none d-lg-inline-flex">John Doe</span>
      </button>
      <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
        <Link className="dropdown-item" to="/dashboard/profile">
          My Profile
        </Link>
        <Link className="dropdown-item" to="/dashboard/settings">
          Settings
        </Link>
        <button className="dropdown-item" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default AvatarMenu;
