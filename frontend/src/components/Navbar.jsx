import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Import at the top
import { logout } from "../reducers/authSlice.js"; // Import your logout action creator from your auth slice
import { ReactComponent as Logo } from "../logo4.svg";
import NavMenu from "./NavMenu"; // Import NavBar component
import AuthModals from "./AuthModals"; // Import AuthModals component

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Access isLoggedIn from the state
  const dispatch = useDispatch(); // Create a dispatch function

  // Handler function for logout button
  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
  };

  return (
    <>
    <header className="devgree-header">
      <div
        className="nav-logo"
        style={{ paddingLeft: "15px", padding: "20px" }}
      >
        {" "}
        {/* Increased vertical padding */}
        <Link
          to="/"
          className="d-flex align-items-center text-white text-decoration-none"
        >
          <Logo
            style={{ width: "auto", height: "44px", marginRight: "10px" }}
          />
          <span className="display-6 fw-bold">Devgree</span>
        </Link>
      </div>

      <div
        className="nav-menu d-flex align-items-center justify-content-between"
        style={{ paddingRight: "15px", padding: "20px 0" }}
      >
        {" "}
        {/* Increased vertical padding */}
        <NavMenu />
        <div className="text-end">
          {isLoggedIn ? (
            // Show dashboard and logout buttons when logged in
            <>
              <Link
                to="/dashboard"
                className="btn me-2"
                style={{
                  backgroundColor: "#e14549", // Change background color
                  color: "white", // Assuming you want white text
                  borderRadius: "50px", // Very round corners
                }}
              >
                Dashboard
              </Link>

              <button
                type="button"
                className="btn btn-outline-light me-4"
                style={{
                  color: "#292c4f", // Font color
                  borderColor: "#292c4f", // Outline color
                  borderRadius: "50px", // Very round corners
                }}
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            // Show login and signup buttons when not logged in
            <>
              <button
                type="button"
                className="btn btn-outline-light me-2"
                style={{
                  color: "#292c4f", // Font color
                  borderColor: "#292c4f", // Outline color
                  borderRadius: "50px", // Very round corners
                }}
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Login
              </button>

              <button
                type="button"
                className="btn me-4"
                style={{
                  backgroundColor: "#e14549", // Change background color
                  color: "white", // Assuming you want white text
                  borderRadius: "50px", // Very round corners
                }}
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              >
                Sign-up
              </button>
            </>
          )}
        </div>
      </div>

    
    </header>
      <AuthModals />
    </>
  );
};

export default Navbar;
