import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateSettings } from "./dashboardThunks"; // Create this thunk for updating settings
import TopNav from "./TopNav/index";
import SideNav from "./SideNav";
import Footer from "../Footer";
import  PortfolioDataFetcher  from "./hooks/PortfolioDataFetcher.js";


const SettingsSchema = Yup.object().shape({
  privacy: Yup.string().required("Privacy setting is required"),
  notifications: Yup.boolean(),
  profileSlug: Yup.string(),
  // Add other fields as necessary
});

const Settings = () => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.dashboard.settings) || {}; // Add a fallback to an empty object
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      privacy: settings.privacy || "private",
      notifications: settings.notifications || false,
      profileSlug: settings.profileSlug || "",
      // Initialize other fields if necessary
    },
    validationSchema: SettingsSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setSuccessMessage("");
      setErrorMessage("");

      try {
        await dispatch(updateSettings(values)).unwrap(); // Assuming updateSettings is an async thunk
        setSuccessMessage("Settings updated successfully!");
      } catch (error) {
        setErrorMessage("Failed to update settings. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <>
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark">
            <h1>Settings</h1>
            <PortfolioDataFetcher/>

            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="alert alert-danger">{errorMessage}</div>
            )}

            <form onSubmit={formik.handleSubmit} className="container mt-3">
              {/* Privacy Setting */}
              <div className="mb-3">
                <label htmlFor="privacy" className="form-label">
                  Privacy
                </label>
                <select
                  id="privacy"
                  name="privacy"
                  onChange={formik.handleChange}
                  value={formik.values.privacy}
                  className="form-control"
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>

              {/* Notifications Setting */}
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  id="notifications"
                  name="notifications"
                  onChange={formik.handleChange}
                  checked={formik.values.notifications}
                  className="form-check-input"
                />
                <label htmlFor="notifications" className="form-check-label">
                  Enable Notifications
                </label>
              </div>

              {/* Profile Slug */}
              <div className="mb-3">
                <label htmlFor="profileSlug" className="form-label">
                  Profile Slug
                </label>
                <input
                  type="text"
                  id="profileSlug"
                  name="profileSlug"
                  onChange={formik.handleChange}
                  value={formik.values.profileSlug}
                  className="form-control"
                />
              </div>

              {/* Add other fields as necessary */}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Saving..." : "Save Changes"}
              </button>
            </form>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Settings;
