import React from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const email = useSelector((state) => state.userPortfolio.data.email);
  const profile = useSelector((state) => state.userPortfolio.data.profile);

  const languages = useSelector((state) => 
    state.userPortfolio.resume?.languages?.map(lang => `${lang.language} (${lang.proficiency})`).join(', ') ?? 'Languages not available'
  );

  const location = profile?.location || 'Location not available';
  const phone = profile?.phone || 'Phone not available';

  return (
    <div className="container shadow-wrapper  ">
      <div class=" "> 
      <div className="row navbar-height bg-white text-dark">
        {/* Location */}
        <div className="col-md-3 d-flex align-items-center">
          <i className="fas fa-map-marker-alt me-2"></i>
          <span>{location}</span>
        </div>

        {/* Email */}
        <div className="col-md-3 d-flex align-items-center">
          <i className="fas fa-envelope me-2"></i>
          <span>{email}</span>
        </div>

        {/* Phone */}
        <div className="col-md-3 d-flex align-items-center">
          <i className="fas fa-phone me-2"></i>
          <span>{phone}</span>
        </div>

        {/* Languages */}
        <div className="col-md-3 d-flex align-items-center">
          <i className="fas fa-language me-2"></i>
          <span>{languages}</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default UserInfo;
