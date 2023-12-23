import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";


const RegForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null); // State for success message

    // Ref for the invisible reCAPTCHA
    const recaptchaRef = useRef(null);


  const handleSubmit = async (event) => {
    event.preventDefault();
    // Clear any existing messages
    setErrorMessage(null);
    setSuccessMessage(null);

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

      // Execute reCAPTCHA and get the token
  const recaptchaToken = await recaptchaRef.current.executeAsync();
  recaptchaRef.current.reset();


    const user = {
      email,
      password,
      profile: {
        fullName, // This places fullName inside the profile object, as expected by your Mongoose model.
      },
      recaptchaToken  // Add this line to include the token

    };

    try {
      const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

      const response = await fetch(`${API_BASE_URL}/register`, {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), // Send the structured user object

      });

      const data = await response.json();

      if (response.ok) {
        // Handle success
        setSuccessMessage(data.message || "Registered successfully!"); // Set success message
        document.querySelector('.modal button.btn-close').click();

      } else {
        setErrorMessage(data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Failed to register:", error);
      setErrorMessage("Something went wrong! Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 p-md-5 border rounded-3 bg-light text-dark">
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}
      {successMessage && (
        <div className="alert alert-success" role="alert"> {/* Bootstrap class for success */}
          {successMessage}
        </div>
      )}
      {/* ... rest of the form fields ... */}
           {/* Full Name Field */}
           <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingFullName"
          placeholder="John Doe"
          value={fullName} // Add this line
          onChange={(e) => setFullName(e.target.value)} // And this line
          required
        />
        <label htmlFor="floatingFullName">Full Name</label>
      </div>

      {/* Email Field */}
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={email} // Add this line
          onChange={(e) => setEmail(e.target.value)} // And this line
          required
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>

      {/* Password Field */}
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      {/* Confirm Password Field */}
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="floatingConfirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <label htmlFor="floatingConfirmPassword">Confirm Password</label>
      </div>

      {/* Remember Me Checkbox */}
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>


        {/* Invisible reCAPTCHA */}
        <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} // Replace with your reCAPTCHA site key
      />

      {/* Submit Button */}
      <button className="w-100 btn btn-lg elevate-custom-button text-white" type="submit">
        Sign Up for Free
      </button>
      <hr className="my-4" />
      <small className="text-muted">
        By clicking Sign up, you agree to the terms of use.
      </small>
    </form>
  );
};

export default RegForm;
