import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { editItem, addItem } from "../dashboardThunks";

const TestimonialSchema = Yup.object().shape({
  authorName: Yup.string().required("Author name is required"),
  relationship: Yup.string().required("Relationship is required"),
  testimonial: Yup.string().required("Testimonial is required"),
  dateGiven: Yup.date().required("Date is required"),
});

const EditTestimonialsReferencesForm = ({ initialData, itemId, closeModal }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      authorName: initialData.authorName || "",
      relationship: initialData.relationship || "",
      testimonial: initialData.testimonial || "",
      dateGiven: initialData.dateGiven || "",
    },
    validationSchema: TestimonialSchema,
    onSubmit: (values) => {
      if (itemId) {
        dispatch(editItem({ section: "testimonials", itemId, newData: values }));
      } else {
        dispatch(addItem({ section: "testimonials", newData: values }));
      }
      closeModal();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="container mt-3">
      {/* Author Name Input */}
      <div className="mb-3">
        <label htmlFor="authorName" className="form-label">Author Name</label>
        <input
          type="text"
          className="form-control"
          id="authorName"
          name="authorName"
          onChange={formik.handleChange}
          value={formik.values.authorName}
        />
        {formik.touched.authorName && formik.errors.authorName && (
          <div className="text-danger">{formik.errors.authorName}</div>
        )}
      </div>

      {/* Relationship Input */}
      <div className="mb-3">
        <label htmlFor="relationship" className="form-label">Relationship</label>
        <input
          type="text"
          className="form-control"
          id="relationship"
          name="relationship"
          onChange={formik.handleChange}
          value={formik.values.relationship}
        />
        {formik.touched.relationship && formik.errors.relationship && (
          <div className="text-danger">{formik.errors.relationship}</div>
        )}
      </div>

      {/* Testimonial Input */}
      <div className="mb-3">
        <label htmlFor="testimonial" className="form-label">Testimonial</label>
        <textarea
          className="form-control"
          id="testimonial"
          name="testimonial"
          onChange={formik.handleChange}
          value={formik.values.testimonial}
        />
        {formik.touched.testimonial && formik.errors.testimonial && (
          <div className="text-danger">{formik.errors.testimonial}</div>
        )}
      </div>

      {/* Date Given Input */}
      <div className="mb-3">
        <label htmlFor="dateGiven" className="form-label">Date Given</label>
        <input
          type="date"
          className="form-control"
          id="dateGiven"
          name="dateGiven"
          onChange={formik.handleChange}
          value={formik.values.dateGiven}
        />
        {formik.touched.dateGiven && formik.errors.dateGiven && (
          <div className="text-danger">{formik.errors.dateGiven}</div>
        )}
      </div>

      {/* Submit Button */}
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </div>
    </form>
  );
};

export default EditTestimonialsReferencesForm;
