// repositorylist.js 
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../dashboardThunks';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import EditRepositoryForm from './EditRepositoryForm';

const RepositoryList = () => {
  const dispatch = useDispatch();
  const repositories = useSelector((state) => state.dashboard.repositories);

  const [showModal, setShowModal] = useState(false);
  const [selectedRepository, setSelectedRepository] = useState(null);

  useEffect(() => {
    console.log('Current repositories state:', repositories);
  }, [repositories]);

  const handleDelete = (itemId) => {
    if (itemId && window.confirm('Are you sure you want to delete this item?')) {
      dispatch(deleteItem({ section: 'repositories', itemId }));
    } else {
      console.error('Error: itemId is undefined');
    }
  };

  const handleEdit = (repositoryEntry) => {
    setSelectedRepository(repositoryEntry);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setSelectedRepository(null);
    setShowModal(true);
  };

  return (
    <div className="mt-3">
      <Button variant="primary" onClick={handleAddNew}>Add New</Button>

      {repositories && repositories.length > 0 ? (
        <ListGroup className="mt-3">
          {repositories.map((entry) => (
            <ListGroup.Item key={entry._id} className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{entry.platform}</div>
                {entry.repoUrl}
                {/* Additional fields */}
              </div>
              <Button variant="outline-secondary" size="sm me-2" onClick={() => handleEdit(entry)}>Edit</Button>
              <Button variant="outline-danger" size="sm" onClick={() => handleDelete(entry._id)}>Delete</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <div className="alert alert-info mt-3">No repository records found.</div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedRepository ? 'Edit Repository' : 'Add New Repository'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditRepositoryForm 
            initialData={selectedRepository || {}} 
            itemId={selectedRepository?._id} 
            closeModal={() => setShowModal(false)}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RepositoryList;
