// MyProfile.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopNav from './TopNav/index';
import SideNav from './SideNav';
import Footer from '../Footer';

const MyProfile = () => {
  const [profileData, setProfileData] = useState({
    fullName: '',
    profilePicture: '',
    bio: '',
    coverImage: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch profile data
    const fetchProfileData = async () => {
      setLoading(true);
      try {  

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/profile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });
        setProfileData(response.data.profile);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        // Handle error...
      } finally {
        setLoading(false);
      }
    };
    fetchProfileData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/profile`, profileData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      // Handle success...
    } catch (error) {
      console.error('Error updating profile:', error);
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
                <label htmlFor="fullName" className="form-label">Full Name</label>
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
              {/* Add inputs for profilePicture, bio, coverImage */}
              {/* ... */}
              <button type="submit" className="btn btn-primary">Update Profile</button>
            </form>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyProfile;