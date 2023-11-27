// SkillsList.js

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../dashboardThunks';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import EditSkillsForm from './EditSkillsForm';

const SkillsList = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.dashboard.resume.skills);

  const [showModal, setShowModal] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    console.log('Current skills state:', skills);
  }, [skills]);

  const handleDelete = (skillId) => {
    if (skillId && window.confirm('Are you sure you want to delete this skill?')) {
      dispatch(deleteItem({ section: 'skills', itemId: skillId }));
    } else {
      console.error('Error: skillId is undefined');
    }
  };

  const handleEdit = (skill) => {
    setSelectedSkill(skill);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setSelectedSkill(null);
    setShowModal(true);
  };

  return (
    <div className="mt-3">
      <Button variant="primary" onClick={handleAddNew}>Add New Skill</Button>

      {skills && skills.length > 0 ? (
        <ListGroup className="mt-3">
          {skills.map((skill, index) => (
            <ListGroup.Item key={skill._id || index} className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{skill.name}</div>
                Level: {skill.level} - Years of Experience: {skill.yearsOfExperience}
              </div>
              <Button variant="outline-secondary" size="sm me-2" onClick={() => handleEdit(skill)}>Edit</Button>
              <Button variant="outline-danger" size="sm" onClick={() => handleDelete(skill._id)}>Delete</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <div className="alert alert-info mt-3">No skills found.</div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedSkill ? 'Edit Skill' : 'Add New Skill'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditSkillsForm 
            initialData={selectedSkill || {}} 
            itemId={selectedSkill?._id} 
            closeModal={() => setShowModal(false)}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SkillsList;
