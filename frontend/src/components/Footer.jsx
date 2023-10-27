import React from 'react';
import { Link } from 'react-router-dom';
import Copyright from './Copyright';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-3">
            <div className="container d-flex justify-content-between">
                <div>
                    {/* Using the Link component for internal app navigation */}
                    <Link to="/privacy" className="text-white me-4">Privacy Policy</Link>
                    <Link to="/terms" className="text-white">Terms of Use</Link>
                </div>
                <Copyright />
            </div>
        </footer>
    );
}

export default Footer;
