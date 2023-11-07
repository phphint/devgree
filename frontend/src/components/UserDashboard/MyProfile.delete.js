// MyProfile.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import TopNav from "./TopNav/index";
import SideNav from "./SideNav";
import Footer from "../Footer";

const MyProfile = () => {
  const [profileData, setProfileData] = useState({
    fullName: "",
    profilePicture: "",
    bio: "",
    coverImage: "",
  });

  // Add a new state to handle the file
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("fullName", profileData.fullName);
    formData.append("bio", profileData.bio);
    formData.append("coverImage", profileData.coverImage);
    // Append the file if selected
    if (selectedFile) {
      formData.append("profilePicture", selectedFile);
    }

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
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle error...
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <TopNav />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-white text-dark">
            <h1>Profile</h1>
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

              {/* Add inputs for profilePicture, bio, coverImage */}
              {/* ... */}
              <button type="submit" className="btn btn-primary">
                Update Profile
              </button>
            </form>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyProfile;
