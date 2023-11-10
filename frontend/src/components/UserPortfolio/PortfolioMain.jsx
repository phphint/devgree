import React from 'react';

const MainSection = () => {
  // Placeholder images (you can replace these URLs with your actual image URLs)
  const placeholderImage1 = "https://via.placeholder.com/410x700";
  const placeholderImage2 = "https://via.placeholder.com/410x700";
  const placeholderImage3 = "https://via.placeholder.com/410x700";
  const placeholderImage4 = "https://via.placeholder.com/633x600";
  const placeholderImage5 = "https://via.placeholder.com/633x600";
 

  return (
    <div className="container my-4">
      {/* First Row */}
      <div className="row">
        <div className="col-md-4">
          <img src={placeholderImage1} alt="Placeholder" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={placeholderImage2} alt="Placeholder" className="img-fluid" />
        </div>
        <div className="col-md-4">
          <img src={placeholderImage3} alt="Placeholder" className="img-fluid" />
        </div>
      </div>

      {/* Second Row */}
      <div className="row mt-4">
        <div className="col-md-6">
          <img src={placeholderImage4} alt="Placeholder" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <img src={placeholderImage5} alt="Placeholder" className="img-fluid" />
        </div>
      </div>

        {/* Third Row */}
        <div className="row mt-4">
        <div className="col-md-6">
          <img src={placeholderImage4} alt="Placeholder" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <img src={placeholderImage5} alt="Placeholder" className="img-fluid" />
        </div>
      </div>

    
    </div>
  );
};

export default MainSection;
