// RegSection.js
import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';

const BackgroundImage = lazy(() => import('../assets/images/ElevateSignupBg'));
const RegForm = lazy(() => import('./RegForm'));

const RegSection = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return null;
  }

  return (
<Suspense fallback={<div>Loading...</div>}>
  <BackgroundImage>
    <div className="container mx-auto py-5 text-center text-lg-start text-white">
      <div className="row align-items-center g-lg-5">
        <div className="col-lg-7">
          <h1 className="display-4 fw-bold lh-1 mb-3">Ready to Begin?</h1>
          <p className="col-lg-10 fs-4">Start your journey with Devgree today and enhance your profile with our AI-powered skills assessments and certifications.</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <Suspense fallback={<div>Loading Form...</div>}>
            <RegForm />
          </Suspense>
        </div>
      </div>
    </div>
  </BackgroundImage>
</Suspense>

  );
};

export default RegSection;
