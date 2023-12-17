// CertificationsList.js

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../dashboardThunks';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import EditCertificationsForm from './EditCertificationsForm';

const CertificationsList = () => {
  const dispatch = useDispatch();
  const certifications = useSelector((state) => state.dashboard.resume.certifications);

  const [showModal, setShowModal] = useState(false);
  const [selectedCertification, setSelectedCertification] = useState(null);

  useEffect(() => {
    console.log('Current certifications state:', certifications);
  }, [certifications]);

  const handleDelete = (certificationId) => {
    if (certificationId && window.confirm('Are you sure you want to delete this certification?')) {
      dispatch(deleteItem({ section: 'certifications', itemId: certificationId }));
    } else {
      console.error('Error: certificationId is undefined');
    }
  };

  const handleEdit = (certification) => {
    setSelectedCertification(certification);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setSelectedCertification(null);
    setShowModal(true);
  };

  return (
    <div className="mt-3">
      <Button variant="primary" onClick={handleAddNew}>Add New Certification</Button>

      {certifications && certifications.length > 0 ? (
        <ListGroup className="mt-3">
          {certifications.map((certification, index) => (
            <ListGroup.Item key={certification._id || index} className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{certification.name}</div>
                Issued by: {certification.authority}
{certification.validUntil ? ` - Valid until: ${certification.validUntil}` : ""}
              </div>
              <Button variant="outline-secondary" size="sm me-2" onClick={() => handleEdit(certification)}>Edit</Button>
              <Button variant="outline-danger" size="sm" onClick={() => handleDelete(certification._id)}>Delete</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <div className="alert alert-info mt-3">No certifications found.</div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedCertification ? 'Edit Certification' : 'Add New Certification'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditCertificationsForm 
            initialData={selectedCertification || {}} 
            itemId={selectedCertification?._id} 
            closeModal={() => setShowModal(false)}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CertificationsList;
