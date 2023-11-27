// EditMyProjectsForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { editItem, addItem } from '../dashboardThunks';

// Validation schema for the project form
const ProjectSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  role: Yup.string().required('Role is required'),
  technologies: Yup.array().of(Yup.string()).required('Technologies are required'),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date(),
  url: Yup.string().url('Enter a valid URL').nullable(),
});

const EditMyProjectsForm = ({ initialData, itemId, closeModal }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: initialData.title || '',
      description: initialData.description || '',
      role: initialData.role || '',
      technologies: initialData.technologies || [],
      startDate: initialData.startDate ? initialData.startDate.substring(0, 10) : '', // YYYY-MM-DD
      endDate: initialData.endDate ? initialData.endDate.substring(0, 10) : '',
      url: initialData.url || '',
    },
    validationSchema: ProjectSchema,
    onSubmit: (values) => {
      if (itemId) {
        dispatch(editItem({ section: 'projects', itemId, newData: values }));
      } else {
        dispatch(addItem({ section: 'projects', newData: values }));
      }
      closeModal();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="container mt-3">
      {/* Title Input */}
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title && (
          <div className="text-danger">{formik.errors.title}</div>
        )}
      </div>

      {/* Description Input */}
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description && (
          <div className="text-danger">{formik.errors.description}</div>
        )}
      </div>

      {/* Role Input */}
      <div className="mb-3">
        <label htmlFor="role" className="form-label">Role</label>
        <input
          type="text"
          className="form-control"
          id="role"
          name="role"
          onChange={formik.handleChange}
          value={formik.values.role}
        />
        {formik.touched.role && formik.errors.role && (
          <div className="text-danger">{formik.errors.role}</div>
        )}
      </div>

      {/* Technologies Input */}
      <div className="mb-3">
        <label htmlFor="technologies" className="form-label">Technologies</label>
        <input
          type="text"
          className="form-control"
          id="technologies"
          name="technologies"
          onChange={formik.handleChange}
          value={formik.values.technologies.join(', ')}
          placeholder="Enter technologies separated by commas"
        />
        {formik.touched.technologies && formik.errors.technologies && (
          <div className="text-danger">{formik.errors.technologies}</div>
        )}
      </div>

      {/* Start Date Input */}
      <div className="mb-3">
        <label htmlFor="startDate" className="form-label">Start Date</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          name="startDate"
          onChange={formik.handleChange}
          value={formik.values.startDate}
        />
        {formik.touched.startDate && formik.errors.startDate && (
          <div className="text-danger">{formik.errors.startDate}</div>
        )}
      </div>

      {/* End Date Input */}
      <div className="mb-3">
        <label htmlFor="endDate" className="form-label">End Date</label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          name="endDate"
          onChange={formik.handleChange}
          value={formik.values.endDate}
        />
        {formik.touched.endDate && formik.errors.endDate && (
          <div className="text-danger">{formik.errors.endDate}</div>
        )}
      </div>

      {/* URL Input */}
      <div className="mb-3">
        <label htmlFor="url" className="form-label">URL</label>
        <input
          type="text"
          className="form-control"
          id="url"
          name="url"
          onChange={formik.handleChange}
          value={formik.values.url}
        />
        {formik.touched.url && formik.errors.url && (
          <div className="text-danger">{formik.errors.url}</div>
        )}
      </div>

      {/* Submit Button */}
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </div>
    </form>
  );
};

export default EditMyProjectsForm;
