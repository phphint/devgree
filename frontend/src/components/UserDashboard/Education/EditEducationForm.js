//editeducationform.js

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { editItem, addItem } from "../dashboardThunks"; // Import the universal thunks

// Validation Schema
const EducationSchema = Yup.object().shape({
  institution: Yup.string().required("Institution is required"),
  degree: Yup.string(), // Made optional
  fieldOfStudy: Yup.string(), // Made optional
  startDate: Yup.date(), // Made optional
  endDate: Yup.date(),
  description: Yup.string(),
});

const EditEducationForm = ({ initialData, itemId, closeModal }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      institution: initialData.institution || "",
      degree: initialData.degree || "",
      fieldOfStudy: initialData.fieldOfStudy || "",
      startDate: initialData.startDate || "",
      endDate: initialData.endDate || "",
      description: initialData.description || "",
    },
    validationSchema: EducationSchema,
    onSubmit: (values) => {
      // Dispatch the editEducation thunk with the item ID and new data
      if (itemId) {
        // If itemId is present, update the existing education entry
        dispatch(editItem({ section: "education", itemId, newData: values }));
      } else {
        // Add a new education entry
        dispatch(addItem({ section: "education", newData: values }));
      }

         // Call the closeModal function after dispatch
         closeModal();  // This will close the modal
  
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="container mt-3">
      {/* Institution Input */}
      <div className="mb-3">
        <label htmlFor="institution" className="form-label">
          Institution
        </label>
        <input
          type="text"
          className="form-control"
          id="institution"
          name="institution"
          onChange={formik.handleChange}
          value={formik.values.institution}
          placeholder="Institution"
        />
        {formik.touched.institution && formik.errors.institution && (
          <div className="text-danger">{formik.errors.institution}</div>
        )}
      </div>

      {/* Degree Input */}
      <div className="mb-3">
        <label htmlFor="degree" className="form-label">
          Degree
        </label>
        <input
          type="text"
          className="form-control"
          id="degree"
          name="degree"
          onChange={formik.handleChange}
          value={formik.values.degree}
          placeholder="Degree"
        />
        {formik.touched.degree && formik.errors.degree && (
          <div className="text-danger">{formik.errors.degree}</div>
        )}
      </div>

      {/* Field of Study Input */}
      <div className="mb-3">
        <label htmlFor="fieldOfStudy" className="form-label">
          Field of Study
        </label>
        <input
          type="text"
          className="form-control"
          id="fieldOfStudy"
          name="fieldOfStudy"
          onChange={formik.handleChange}
          value={formik.values.fieldOfStudy}
          placeholder="Field of Study"
        />
        {formik.touched.fieldOfStudy && formik.errors.fieldOfStudy && (
          <div className="text-danger">{formik.errors.fieldOfStudy}</div>
        )}
      </div>

      {/* Start Date Input */}
      <div className="mb-3">
        <label htmlFor="startDate" className="form-label">
          Start Date
        </label>
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
        <label htmlFor="endDate" className="form-label">
          End Date
        </label>
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

      {/* Description Input */}
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
          placeholder="Description"
        />
        {formik.touched.description && formik.errors.description && (
          <div className="text-danger">{formik.errors.description}</div>
        )}
      </div>

      {/* Submit Button */}
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditEducationForm;
