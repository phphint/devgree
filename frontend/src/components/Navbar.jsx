import { Link } from 'react-router-dom'; // Import at the top

import RegForm from './RegForm';  // Ensure the path is correct
import LoginForm from './LoginForm';      // Ensure the path is correct

const Navbar = () => {
    return (
        <header className="p-3">
           <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-between bg-dark text-white"> {/* Change made here */}
                <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                       <span className="display-6 fw-bold">Devgree</span>
                       </Link>

                    <ul className="nav mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
    <li><Link to="/features" className="nav-link px-2 text-white">Features</Link></li>   
    <li><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
    

                    </ul>

                    <div className="text-end">
                        {/* Login Button */}
                        <button type="button" className="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
                        {/* Signup Button */}
                        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#signupModal">Sign-up</button>
                    </div>
                </div>
            </div>
            
            
            {/* Login Modal */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-dark" id="loginModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Signup Modal */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-dark" id="signupModalLabel">Sign Up</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <RegForm />
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Navbar;
