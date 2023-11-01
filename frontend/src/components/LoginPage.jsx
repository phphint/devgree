// LoginPage.js
import React from 'react';
import LoginForm from './LoginForm';  // Import your LoginForm component
import Footer from './Footer';



const Login = () => {
  const currentYear = new Date().getFullYear();

  return (
    <main className="form-signin mx-auto p-4">
      <i className="fas fa-user-circle fa-3x mb-4 mx-auto d-block text-center"></i>

      <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

      {/* Use your LoginForm component in place of the HTML form */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <LoginForm />
          </div>
        </div>
      </div>
      
  
      <Footer /> 
    </main>
 
  );
};

export default Login;
