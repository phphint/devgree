// myprofilemain.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateProfileAsync } from "../profileThunks"; // Adjust path as necessary

const ProfileSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  bio: Yup.string().required("Bio is required"),
  roleTitle: Yup.string().required("Role Title is required"),
  location: Yup.string(),
  phone: Yup.string(),
  videoIntro: Yup.object().shape({
    platform: Yup.string(),
    url: Yup.string().url("Enter a valid URL"),
  }),
});


const MyProfileMain = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.auth); // Access the Redux state
  const [selectedFile, setSelectedFile] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // Log Redux state
  console.log("Redux State (userProfile):", userProfile);

  useEffect(() => {
    console.log("Component Mounted/Updated");
    console.log("Current UserProfile from Redux:", userProfile);
  }, [userProfile]); // Debug: Log when component mounts or userProfile updates

  const formik = useFormik({
    initialValues: {
      fullName: userProfile?.fullName || "",
      profilePicture: userProfile?.profilePicture || "",
      bio: userProfile?.bio || "",
      roleTitle: userProfile?.roleTitle || "",
      location: userProfile?.location || "",
      phone: userProfile?.phone || "",
      videoIntro: userProfile?.videoIntro || { platform: "", url: "" },
    },
    validationSchema: ProfileSchema,
    onSubmit: async (values) => {
      console.log("Form values before processing:", values); // Debug: Inspect initial form values


      if (values.videoIntro.url && !values.videoIntro.platform) {
        formik.setFieldError("videoIntro.platform", "Platform is required when URL is provided");
        return;
      }

      setIsSubmitting(true);
      setSuccessMessage("");
      setErrorMessage("");

      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (key === "videoIntro") {
          formData.append(key, JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      });
      if (selectedFile) {
        formData.append("profilePicture", selectedFile);
      }

      // Debug: Log FormData content (for browsers that support it)
      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      try {
        console.log("Dispatching updateProfile action with formData"); // Debug: Log before dispatching
        const actionResult = await dispatch(
          updateProfileAsync(formData)
        ).unwrap();
        console.log("updateProfile action result:", actionResult); // Debug: Log the result of the action
        setSuccessMessage("Profile updated successfully!");
      } catch (error) {
        console.error("Error updating profile:", error);
        setErrorMessage("Failed to update profile. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },

    enableReinitialize: true, // Add this line
  });

  console.log("Formik Initial Values:", formik.values); // Debug: Log Formik initial values
  console.log("Formik Initial videoIntro Values:", formik.values.videoIntro); // Debug: Log Formik initial values

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark">
      <h2 className="pt-3">Profile</h2>

      {/* Display Success or Error Messages */}
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <form onSubmit={formik.handleSubmit}>
        {/* Full Name Input */}
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="text-danger">{formik.errors.fullName}</div>
          )}
        </div>

        {/* Bio Input */}
        <div className="mb-3">
          <label htmlFor="bio" className="form-label">
            Bio
          </label>
          <textarea
            className="form-control"
            id="bio"
            name="bio"
            value={formik.values.bio}
            onChange={formik.handleChange}
          />
          {formik.touched.bio && formik.errors.bio && (
            <div className="text-danger">{formik.errors.bio}</div>
          )}
        </div>

        {/* Role Title Input */}
        <div className="mb-3">
          <label htmlFor="roleTitle" className="form-label">
            Role Title
          </label>
          <input
            type="text"
            className="form-control"
            id="roleTitle"
            name="roleTitle"
            value={formik.values.roleTitle}
            onChange={formik.handleChange}
          />
          {formik.touched.roleTitle && formik.errors.roleTitle && (
            <div className="text-danger">{formik.errors.roleTitle}</div>
          )}
        </div>

        {/* Location Input */}
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
          />
          {formik.touched.location && formik.errors.location && (
            <div className="text-danger">{formik.errors.location}</div>
          )}
        </div>

        {/* Phone Input */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-danger">{formik.errors.phone}</div>
          )}
        </div>

        {/* Video Intro Platform Input */}
        <div className="mb-3">
          <label htmlFor="platform" className="form-label">
            Video Intro Platform
          </label>
          <select
            className="form-control"
            id="platform"
            name="videoIntro.platform"
            value={formik.values.videoIntro?.platform} // Access platform safely
            onChange={formik.handleChange}
          >
            <option value="">Select a platform</option>
            <option value="YouTube">YouTube</option>
            <option value="Vimeo">Vimeo</option>
            <option value="Dailymotion">Dailymotion</option>
            <option value="Twitch">Twitch</option>
          </select>
        </div>

        {/* Video Intro URL Input */}
        <div className="mb-3">
          <label htmlFor="url" className="form-label">
            Video Intro URL
          </label>
          <input
            type="text"
            className="form-control"
            id="url"
            name="videoIntro.url"
            value={formik.values.videoIntro?.url ?? ""} // Access url safely
            onChange={formik.handleChange}
          />
          {formik.touched.videoIntro?.url && formik.errors.videoIntro?.url && (
            <div className="text-danger">{formik.errors.videoIntro.url}</div>
          )}
          {formik.touched.videoIntro?.platform &&
            formik.errors.videoIntro?.platform && (
              <div className="text-danger">
                {formik.errors.videoIntro.platform}
              </div>
            )}
           
        </div>

        {/* Profile Picture Input */}
        <div className="mb-3">
          <label htmlFor="profilePicture" className="form-label">
            Profile Picture
          </label>
          <input
            type="file"
            className="form-control"
            id="profilePicture"
            name="profilePicture"
            onChange={handleFileChange}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary mb-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </main>
  );
};

export default MyProfileMain;
