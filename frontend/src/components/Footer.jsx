import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from './Contact/ContactForm'; // Assuming ContactForm is in the same directory.
import Copyright from './Copyright';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-3">
            <div className=" d-flex justify-content-between me-5 ms-5 ">
                <div>
                    {/* Using the Link component for internal app navigation */}
                    <Link to="/privacy" className="text-white me-4">Privacy Policy</Link>
                    <Link to="/terms" className="text-white me-4">Terms of Use</Link>
                    
                    {/* Contact Link - To trigger the modal */}
                    <a href="#" className="text-white" data-bs-toggle="modal" data-bs-target="#contactModal">Contact</a>
                </div>
                <Copyright />

                {/* Contact Form Modal */}
                <div className="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-dark" id="contactModalLabel">Contact Us</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
