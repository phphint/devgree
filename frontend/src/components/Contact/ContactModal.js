// ContactModal.js
import React from "react";
import ContactForm from "./ContactForm"; // Adjust the import path if necessary

const ContactModal = () => {
  return (
    <div
      className="modal fade"
      id="contactModal"
      tabIndex="-1"
      aria-labelledby="contactModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-dark" id="contactModalLabel">
              Contact Us
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
