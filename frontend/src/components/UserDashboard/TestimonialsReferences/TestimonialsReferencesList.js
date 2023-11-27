// testmonialsrefrenceslist.js 
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem } from '../dashboardThunks';
import { Modal, Button, ListGroup } from 'react-bootstrap';
import EditTestimonialsReferencesForm from './EditTestimonialsReferencesForm';

const TestimonialsReferencesList = () => {
  const dispatch = useDispatch();
  const testimonials = useSelector((state) => state.dashboard.testimonials);

  const [showModal, setShowModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    console.log('Current testimonials state:', testimonials);
  }, [testimonials]);

  const handleDelete = (itemId) => {
    if (itemId && window.confirm('Are you sure you want to delete this item?')) {
      dispatch(deleteItem({ section: 'testimonials', itemId }));
    } else {
      console.error('Error: itemId is undefined');
    }
  };

  const handleEdit = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowModal(true);
  };

  const handleAddNew = () => {
    setSelectedTestimonial(null);
    setShowModal(true);
  };

  return (
    <div className="mt-3">
      <Button variant="primary" onClick={handleAddNew}>Add New</Button>

      {testimonials && testimonials.length > 0 ? (
        <ListGroup className="mt-3">
          {testimonials.map((entry, index) => (
            <ListGroup.Item key={entry._id || index} className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{entry.authorName}</div>
                {entry.relationship} - {entry.testimonial}
              </div>
              <Button variant="outline-secondary" size="sm me-2" onClick={() => handleEdit(entry)}>Edit</Button>
              <Button variant="outline-danger" size="sm" onClick={() => handleDelete(entry._id)}>Delete</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <div className="alert alert-info mt-3">No testimonials found.</div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedTestimonial ? 'Edit Testimonial' : 'Add New Testimonial'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditTestimonialsReferencesForm 
            initialData={selectedTestimonial || {}} 
            itemId={selectedTestimonial?._id} 
            closeModal={() => setShowModal(false)}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TestimonialsReferencesList;
