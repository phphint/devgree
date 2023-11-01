import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector hook from react-redux
import RegForm from './RegForm';

const RegSection = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn); // Access isLoggedIn from the state

  if (isLoggedIn) {
    return null; // Don't render anything if the user is logged in
  }

  return (
    <section className="container mx-auto py-5 text-center text-lg-start bg-dark text-white">
      <div className="row align-items-center g-lg-5">
        <div className="col-lg-7">
          <h1 className="display-4 fw-bold lh-1 mb-3">Ready to Begin?</h1>
          <p className="col-lg-10 fs-4">Start your journey with Devgree today and enhance your profile with our AI-powered skills assessments and certifications.</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <RegForm />
        </div>
      </div>
    </section>
  );
};

export default RegSection;
