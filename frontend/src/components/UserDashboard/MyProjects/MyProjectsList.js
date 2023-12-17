// MyProjectsList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../dashboardThunks';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import EditMyProjectsForm from './EditMyProjectsForm';

const MyProjectsList = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.dashboard.resume.projects);

  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleDelete = (projectId) => {
    if (projectId && window.confirm('Are you sure you want to delete this project?')) {
      dispatch(deleteItem({ section: 'projects', itemId: projectId }));
    } else {
      console.error('Error: projectId is undefined');
    }
  };

  const handleEdit = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setSelectedProject(null);
    setShowModal(true);
  };

  return (
    <div className="mt-3">
      <Button variant="primary" onClick={handleAddNew}>Add New Project</Button>

      {projects && projects.length > 0 ? (
        <ListGroup className="mt-3">
          {projects.map((project, index) => (
            <ListGroup.Item key={project._id || index} className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{project.title}</div>
              </div>
              <Button variant="outline-secondary" size="sm" onClick={() => handleEdit(project)} style={{ marginRight: '.5rem' }}>Edit</Button>
              <Button variant="outline-danger" size="sm" onClick={() => handleDelete(project._id)}>Delete</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <div className="alert alert-info mt-3">No projects found.</div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject ? 'Edit Project' : 'Add New Project'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditMyProjectsForm 
            initialData={selectedProject || {}} 
            itemId={selectedProject?._id} 
            closeModal={() => setShowModal(false)}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MyProjectsList;
