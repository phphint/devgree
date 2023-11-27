import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../reducers/authSlice.js";

 

// In AvatarMenu.js
import ResumeUploadModal from "../../ResumeUploadModal";



const AvatarMenu = () => {
  const { fullName, profilePicture } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const baseURL = process.env.REACT_APP_S3_BASE_URL || "http://localhost:9000/";
  const profilePicURL = profilePicture
    ? `${baseURL}/${profilePicture}`
    : "https://via.placeholder.com/40";

  const handleLogout = () => {
    dispatch(logout());
  };

   

  return (
    
      <div className="nav-item dropdown flex-nowrap">
       
        <button
          className="btn nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            className="rounded-circle me-lg-2"
            src={profilePicURL}
            alt="Profile"
            style={{ width: "40px", height: "40px" }}
          />
          <span className="d-none d-lg-inline-flex">
            {fullName || "Your Name"}
          </span>
        </button>
        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
          <Link className="dropdown-item" to="/dashboard/profile">
            My Profile
          </Link>
          <Link className="dropdown-item" to="/dashboard/settings">
            Settings
          </Link>

          {/* Button to trigger modal */}
          <button
            className="dropdown-item"
            data-bs-toggle="modal"
            data-bs-target="#resumeUploadModal"
          >
            Import Résumé
          </button>

          <button className="dropdown-item" onClick={handleLogout}>
            Log Out
          </button>

          <ResumeUploadModal />
        </div>

      </div>
 

 
  );
};

export default AvatarMenu;
