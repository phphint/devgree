import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ResumeUploadModal = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');

  const token = useSelector((state) => state.auth.token); // Retrieve the token from the auth slice

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const file = e.target.elements.resumeFile.files[0];
    if (!file) {
      console.error("No file selected");
      setMessage("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/import-resume`, {
        method: "POST",
        body: formData,
        headers: {
          'Authorization': `Bearer ${token}` // Include the token in the request headers
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Upload successful:", result);
      setMessage("Resume successfully uploaded.");
    } catch (error) {
      console.error("Upload error:", error);
      setMessage(`Upload failed: ${error.message}`);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Import Résumé
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Import Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFileUpload}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="resumeFile">Upload your résumé</Form.Label>
              <Form.Control
                type="file"
                id="resumeFile"
                accept=".pdf,.doc,.docx"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Upload
            </Button>
          </Form>
          {message && <div className="alert alert-info mt-3">{message}</div>}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ResumeUploadModal;
