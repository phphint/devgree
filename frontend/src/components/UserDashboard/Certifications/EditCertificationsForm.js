import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { editItem, addItem } from "../dashboardThunks";

const CertificationSchema = Yup.object().shape({
  name: Yup.string().required("Certification name is required"),
  authority: Yup.string().required("Issuing authority is required"),
  dateObtained: Yup.date().required("Date obtained is required"),
  validUntil: Yup.date(),
  credentialID: Yup.string(),
  credentialURL: Yup.string().url("Invalid URL format"),
});

const EditCertificationsForm = ({ initialData, itemId, closeModal }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: initialData.name || "",
      authority: initialData.authority || "",
      dateObtained: initialData.dateObtained || "",
      validUntil: initialData.validUntil || "",
      credentialID: initialData.credentialID || "",
      credentialURL: initialData.credentialURL || "",
    },
    validationSchema: CertificationSchema,
    onSubmit: (values) => {
      if (itemId) {
        dispatch(editItem({ section: "certifications", itemId, newData: values }));
      } else {
        dispatch(addItem({ section: "certifications", newData: values }));
      }
      closeModal();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="container mt-3">
      {/* Certification Name Input */}
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Certification Name</label>
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

      {/* Issuing Authority Input */}
      <div className="mb-3">
        <label htmlFor="authority" className="form-label">Issuing Authority</label>
        <input
          type="text"
          className="form-control"
          id="authority"
          name="authority"
          onChange={formik.handleChange}
          value={formik.values.authority}
        />
        {formik.touched.authority && formik.errors.authority && (
          <div className="text-danger">{formik.errors.authority}</div>
        )}
      </div>

      {/* Date Obtained Input */}
      <div className="mb-3">
        <label htmlFor="dateObtained" className="form-label">Date Obtained</label>
        <input
          type="date"
          className="form-control"
          id="dateObtained"
          name="dateObtained"
          onChange={formik.handleChange}
          value={formik.values.dateObtained}
        />
        {formik.touched.dateObtained && formik.errors.dateObtained && (
          <div className="text-danger">{formik.errors.dateObtained}</div>
        )}
      </div>

      {/* Valid Until Input */}
      <div className="mb-3">
        <label htmlFor="validUntil" className="form-label">Valid Until (optional)</label>
        <input
          type="date"
          className="form-control"
          id="validUntil"
          name="validUntil"
          onChange={formik.handleChange}
          value={formik.values.validUntil}
        />
        {formik.touched.validUntil && formik.errors.validUntil && (
          <div className="text-danger">{formik.errors.validUntil}</div>
        )}
      </div>

      {/* Credential ID Input */}
      <div className="mb-3">
        <label htmlFor="credentialID" className="form-label">Credential ID (optional)</label>
        <input
          type="text"
          className="form-control"
          id="credentialID"
          name="credentialID"
          onChange={formik.handleChange}
          value={formik.values.credentialID}
        />
      </div>

      {/* Credential URL Input */}
      <div className="mb-3">
        <label htmlFor="credentialURL" className="form-label">Credential URL (optional)</label>
        <input
          type="url"
          className="form-control"
          id="credentialURL"
          name="credentialURL"
          onChange={formik.handleChange}
          value={formik.values.credentialURL}
        />
        {formik.touched.credentialURL && formik.errors.credentialURL && (
          <div className="text-danger">{formik.errors.credentialURL}</div>
        )}
      </div>

      {/* Submit Button */}
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </div>
    </form>
  );
};

export default EditCertificationsForm;
