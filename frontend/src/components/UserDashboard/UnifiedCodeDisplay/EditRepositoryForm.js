//editrepositoryform.js

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { editItem, addItem } from "../dashboardThunks";

const RepositorySchema = Yup.object().shape({
  platform: Yup.string().required("Platform is required"),
  repoUrl: Yup.string().required("Repository URL is required"),
});

// List of git repository platforms
const platforms = [
    'GitHub',
    'GitLab',
    'Bitbucket',
    'SourceForge',
    'Azure DevOps',
    'AWS CodeCommit',
    'Google Cloud Source Repositories',
    'Atlassian Stash',
    'Beanstalk',
    'Codebase',
    'Assembla',
    'Gitea',
    'Gogs',
    'Perforce Helix Core',
    'Phabricator',
    'Rational Team Concert',
    'Subversion (SVN)',
    'Mercurial',
    'Fossil',
    'Other' // Keeping 'Other' as an option for any not listed
];
const EditRepositoryForm = ({ initialData, itemId, closeModal }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      platform: initialData.platform || "",
      repoUrl: initialData.repoUrl || "",
    },
    validationSchema: RepositorySchema,
    onSubmit: (values) => {
      if (itemId) {
        dispatch(editItem({ section: "repositories", itemId, newData: values }));
      } else {
        dispatch(addItem({ section: "repositories", newData: values }));
      }
      closeModal();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="container mt-3">
      {/* Platform Select Dropdown */}
      <div className="mb-3">
        <label htmlFor="platform" className="form-label">Platform</label>
        <select
          className="form-select"
          id="platform"
          name="platform"
          onChange={formik.handleChange}
          value={formik.values.platform}
        >
          <option value="">Select a platform</option>
          {platforms.map((platform) => (
            <option key={platform} value={platform}>{platform}</option>
          ))}
        </select>
        {formik.touched.platform && formik.errors.platform && (
          <div className="text-danger">{formik.errors.platform}</div>
        )}
      </div>

      {/* Repository URL Input */}
      <div className="mb-3">
        <label htmlFor="repoUrl" className="form-label">Repository URL</label>
        <input
          type="text"
          className="form-control"
          id="repoUrl"
          name="repoUrl"
          onChange={formik.handleChange}
          value={formik.values.repoUrl}
          placeholder="Repository URL"
        />
        {formik.touched.repoUrl && formik.errors.repoUrl && (
          <div className="text-danger">{formik.errors.repoUrl}</div>
        )}
      </div>

      {/* Submit Button */}
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </div>
    </form>
  );
};

export default EditRepositoryForm;
