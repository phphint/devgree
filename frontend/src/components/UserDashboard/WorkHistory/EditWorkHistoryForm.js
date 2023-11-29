// editworkhistoryform.js 
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { editItem, addItem } from '../dashboardThunks'; // Adjust path as necessary

const WorkHistorySchema = Yup.object().shape({
  company: Yup.string().required('Company name is required'),
  title: Yup.string().required('Title is required'),
  location: Yup.string().required('Location is required'),
  startDate: Yup.date().required('Start date is required'),
  endDate: Yup.date(),
  current: Yup.boolean(),
  description: Yup.string(),
});

const EditWorkHistoryForm = ({ initialData, itemId, closeModal }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      company: initialData.company || '',
      title: initialData.title || '',
      location: initialData.location || '',
      startDate: initialData.startDate ? initialData.startDate.substring(0, 10) : '',
      endDate: initialData.endDate ? initialData.endDate.substring(0, 10) : '',
      current: initialData.current || false,
      description: initialData.description || '',
    },
    validationSchema: WorkHistorySchema,
    onSubmit: (values) => {
      if (itemId) {
        dispatch(editItem({ section: 'workExperience', itemId, newData: values }));
      } else {
        dispatch(addItem({ section: 'workExperience', newData: values }));
      }
      closeModal();
    },
  });

  return (
<form onSubmit={formik.handleSubmit}>
  {/* Company Input */}
  <div className="mb-3">
    <label htmlFor="company" className="form-label">Company</label>
    <input
      type="text"
      className="form-control"
      id="company"
      name="company"
      onChange={formik.handleChange}
      value={formik.values.company}
    />
    {formik.touched.company && formik.errors.company && (
      <div className="text-danger">{formik.errors.company}</div>
    )}
  </div>

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

  {/* Location Input */}
  <div className="mb-3">
    <label htmlFor="location" className="form-label">Location</label>
    <input
      type="text"
      className="form-control"
      id="location"
      name="location"
      onChange={formik.handleChange}
      value={formik.values.location}
    />
    {formik.touched.location && formik.errors.location && (
      <div className="text-danger">{formik.errors.location}</div>
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
      disabled={formik.values.current}
    />
    {formik.touched.endDate && formik.errors.endDate && (
      <div className="text-danger">{formik.errors.endDate}</div>
    )}
  </div>

  {/* Current Checkbox */}
  <div className="mb-3 form-check">
    <input
      type="checkbox"
      className="form-check-input"
      id="current"
      name="current"
      onChange={formik.handleChange}
      checked={formik.values.current}
    />
    <label className="form-check-label" htmlFor="current">Current</label>
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

  {/* Submit Button */}
  <button type="submit" className="btn btn-primary">Save Changes</button>
</form>

  );
};

export default EditWorkHistoryForm;
