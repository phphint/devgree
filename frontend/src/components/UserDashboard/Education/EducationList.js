// educationlist.js

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../dashboardThunks';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import EditEducationForm from './EditEducationForm';

const EducationList = () => {
  const dispatch = useDispatch();
  const education = useSelector((state) => state.dashboard.resume.education);

  const [showModal, setShowModal] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState(null);

  useEffect(() => {
    console.log('Current education state:', education);
  }, [education]);

  const handleDelete = (itemId) => {
    if (itemId && window.confirm('Are you sure you want to delete this item?')) {
      dispatch(deleteItem({ section: 'education', itemId }));
    } else {
      console.error('Error: itemId is undefined');
    }
  };

  const handleEdit = (educationEntry) => {
    setSelectedEducation(educationEntry);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setSelectedEducation(null);
    setShowModal(true);
  };

  if (!education.length) {
    return <div className="alert alert-info">No education records found.</div>;
  }

  return (
    <div className="mt-3">
      <Button variant="primary" onClick={handleAddNew}>Add New</Button>

      <ListGroup className="mt-3">
        {education.map((entry) => (
          <ListGroup.Item key={entry._id} className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{entry.institution}</div>
              {entry.degree}
              {/* Additional fields */}
            </div>
            <Button variant="outline-secondary" size="sm me-2" onClick={() => handleEdit(entry)}>Edit</Button>
            <Button variant="outline-danger" size="sm" onClick={() => handleDelete(entry._id)}>Delete</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedEducation ? 'Edit Education' : 'Add New Education'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditEducationForm 
            initialData={selectedEducation || {}} 
            itemId={selectedEducation?._id} 
            closeModal={() => setShowModal(false)}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EducationList;
