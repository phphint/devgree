import React from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const email = useSelector((state) => state.userPortfolio.data.email);
  const profile = useSelector((state) => state.userPortfolio.data.profile);

  const userPortfolio = useSelector((state) => state.userPortfolio.data);
  console.log('User Portfolio State:', userPortfolio);


  // Safely access languages with optional chaining and nullish coalescing
  const languages = useSelector((state) => 
    state.userPortfolio.resume?.languages?.map(lang => `${lang.language} (${lang.proficiency})`).join(', ') ?? 'Languages not available'
  );

  const location = profile?.location || 'Location not available';
  const phone = profile?.phone || 'Phone not available';

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
