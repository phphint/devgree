// BackgroundImage.js
import React from 'react';
import elevateSignupBg from './elevate-signup-bg.png';

const BackgroundImage = ({ children }) => (
  <section 
    style={{ backgroundImage: `url(${elevateSignupBg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
  >
    {children}
  </section>
);

export default BackgroundImage;
