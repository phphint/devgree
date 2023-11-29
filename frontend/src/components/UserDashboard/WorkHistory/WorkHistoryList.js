import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import EditWorkHistoryForm from './EditWorkHistoryForm';

const WorkHistoryList = () => {
  const dispatch = useDispatch();
  const workHistory = useSelector(state => state.dashboard.resume.workExperience);

  const [showModal, setShowModal] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const handleDelete = (workId) => {
    // Dispatch an action to delete work history (to be implemented)
  };

  const handleEdit = (work) => {
    setSelectedWork(work);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setSelectedWork(null);
    setShowModal(true);
  };

  return (
    <div className="mt-3">
      <Button variant="primary" onClick={handleAddNew}>Add New Work History</Button>

      {workHistory.length > 0 ? (
        <ListGroup className="mt-3">
          {workHistory.map((work, index) => (
            <ListGroup.Item key={work._id || index} className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{work.title} at {work.company}</div>
                {work.description}
              </div>
              <Button variant="outline-secondary" size="sm" onClick={() => handleEdit(work)}>Edit</Button>
              <Button variant="outline-danger" size="sm" onClick={() => handleDelete(work._id)}>Delete</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <div className="alert alert-info mt-3">No work history found.</div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedWork ? 'Edit Work History' : 'Add New Work History'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditWorkHistoryForm 
            initialData={selectedWork || {}} 
            itemId={selectedWork?._id} 
            closeModal={() => setShowModal(false)}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default WorkHistoryList;
