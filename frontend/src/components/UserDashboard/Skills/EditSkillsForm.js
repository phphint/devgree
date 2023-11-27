// EditSkillsForm.js
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { editItem, addItem } from "../dashboardThunks";

const SkillSchema = Yup.object().shape({
  name: Yup.string().required("Skill name is required"),
  level: Yup.string().required("Skill level is required"),
  yearsOfExperience: Yup.number().min(0, "Years of experience cannot be negative").required("Years of experience is required"),
});

const EditSkillsForm = ({ initialData, itemId, closeModal }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: initialData.name || "",
      level: initialData.level || "",
      yearsOfExperience: initialData.yearsOfExperience || 0,
    },
    validationSchema: SkillSchema,
    onSubmit: (values) => {
      if (itemId) {
        dispatch(editItem({ section: "skills", itemId, newData: values }));
      } else {
        dispatch(addItem({ section: "skills", newData: values }));
      }
      closeModal();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="container mt-3">
      {/* Skill Name Input */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Skill Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-danger">{formik.errors.name}</div>
        )}
      </div>

      {/* Skill Level Input */}
      <div className="mb-3">
        <label htmlFor="level" className="form-label">Skill Level</label>
        <input
          type="text"
          className="form-control"
          id="level"
          name="level"
          onChange={formik.handleChange}
          value={formik.values.level}
        />
        {formik.touched.level && formik.errors.level && (
          <div className="text-danger">{formik.errors.level}</div>
        )}
      </div>

      {/* Years of Experience Input */}
      <div className="mb-3">
        <label htmlFor="yearsOfExperience" className="form-label">Years of Experience</label>
        <input
          type="number"
          className="form-control"
          id="yearsOfExperience"
          name="yearsOfExperience"
          onChange={formik.handleChange}
          value={formik.values.yearsOfExperience}
        />
        {formik.touched.yearsOfExperience && formik.errors.yearsOfExperience && (
          <div className="text-danger">{formik.errors.yearsOfExperience}</div>
        )}
      </div>

      {/* Submit Button */}
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </div>
    </form>
  );
};

export default EditSkillsForm;
