// MyProfileMain.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../../reducers/authSlice"; // Make sure you import the new action

const MyProfileMain = () => {

    const dispatch = useDispatch();
    
  const [profileData, setProfileData] = useState({
    fullName: "",
    profilePicture: "",
    bio: "",
    roleTitle: "",
    location: "",
    phone: "",
    // Assuming videoIntro is an object with platform and url
    videoIntro: {
      platform: "",
      url: "",
    },
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch profile data
    const fetchProfileData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/profile`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );
        setProfileData(response.data.profile);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        // Handle error...
      } finally {
        setLoading(false);
      }
    };
    fetchProfileData();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("fullName", profileData.fullName);
    formData.append("bio", profileData.bio);
    // Append the file if selected
    if (selectedFile) {
      formData.append("profilePicture", selectedFile);
    }

    // Append other fields
    formData.append("roleTitle", profileData.roleTitle);
    formData.append("location", profileData.location);
    formData.append("phone", profileData.phone);

    // Convert videoIntro object into a JSON string
    formData.append("videoIntro", JSON.stringify(profileData.videoIntro));

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/profile`,
        formData, // Send form data
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Handle success...
      // Dispatch action to update Redux store
      dispatch(
        updateProfile({
          fullName: response.data.profile.fullName,
          profilePicture: response.data.profile.profilePicture,
        })
      );
      // ... any other success handling
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle error...
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "platform" || name === "url") {
      // Special handling for nested videoIntro object
      setProfileData((prevData) => ({
        ...prevData,
        videoIntro: {
          ...prevData.videoIntro,
          [name]: value,
        },
      }));
    } else {
      setProfileData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark ">
      <h2 className="pt-3">Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            name="fullName"
            value={profileData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

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

        {/* Add additional inputs for bio, coverImage as needed... */}
        {/* Bio input */}
        <div className="mb-3">
          <label htmlFor="bio" className="form-label">
            Bio
          </label>
          <textarea
            className="form-control"
            id="bio"
            name="bio"
            value={profileData.bio}
            onChange={handleInputChange}
            maxLength="2000"
          />
        </div>

        {/* Role title input */}
        <div className="mb-3">
          <label htmlFor="roleTitle" className="form-label">
            Role Title
          </label>
          <input
            type="text"
            className="form-control"
            id="roleTitle"
            name="roleTitle"
            value={profileData.roleTitle}
            onChange={handleInputChange}
          />
        </div>

        {/* Location input */}
        <div className="mb-3">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={profileData.location}
            onChange={handleInputChange}
          />
        </div>

        {/* Phone input */}
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={profileData.phone}
            onChange={handleInputChange}
          />
        </div>

        {/* Video intro inputs */}

        <div className="mb-3">
          <label htmlFor="platform" className="form-label">
            Video Intro Platform
          </label>
          <select
            className="form-control"
            id="platform"
            name="platform"
            value={profileData.videoIntro.platform}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a platform</option>
            <option value="YouTube">YouTube</option>
            <option value="Vimeo">Vimeo</option>
            <option value="Dailymotion">Dailymotion</option>
            <option value="Twitch">Twitch</option>
            {/* Add more platforms as needed */}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="url" className="form-label">
            Video Intro URL
          </label>
          <input
            type="text"
            className="form-control"
            id="url"
            name="url"
            value={profileData.videoIntro.url}
            onChange={handleInputChange}
          />
        </div>

        {/* ... rest of the form ... */}

        <button type="submit" className="btn btn-primary mb-3">
          Update Profile
        </button>
      </form>
    </main>
  );
};

export default MyProfileMain;
