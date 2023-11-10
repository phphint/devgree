import React from 'react';

const UserInfo = () => {
  // Example data
  const location = "New York, USA";
  const email = "user@example.com";
  const phone = "+1234567890";
  const languages = "English, Spanish, French";

  return (
    <div className="container my-4">
      <div className="row">
        {/* Location */}
        <div className="col-md-3 text-center">
          <i className="fas fa-map-marker-alt fa-2x"></i>
          <h5 className="mt-2">Location</h5>
          <p>{location}</p>
        </div>

        {/* Email */}
        <div className="col-md-3 text-center">
          <i className="fas fa-envelope fa-2x"></i>
          <h5 className="mt-2">Email</h5>
          <p>{email}</p>
        </div>

        {/* Phone */}
        <div className="col-md-3 text-center">
          <i className="fas fa-phone fa-2x"></i>
          <h5 className="mt-2">Phone</h5>
          <p>{phone}</p>
        </div>

        {/* Languages */}
        <div className="col-md-3 text-center">
          <i className="fas fa-language fa-2x"></i>
          <h5 className="mt-2">Languages</h5>
          <p>{languages}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
