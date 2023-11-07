// Location: /src/components/LoginForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/authSlice'; // Import the action
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

 


const LoginForm = ({ handleClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);  // New success message state
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize useNavigate hook



    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
                email,
                password
            });

            const { token } = response.data;
            localStorage.setItem('authToken', token);
        
            dispatch(login({
                token: response.data.token,
                fullName: response.data.fullName,
                profilePicture: response.data.profilePicture
              }));
              
              setSuccessMessage("Logged in successfully!"); // Set success message on successful login
        
            document.querySelector('.modal button.btn-close').click();
          navigate('/dashboard'); // Redirect to /dashboard on successful login


           

        } catch (error) {
            if (error.response && error.response.status === 401) {
                setErrorMessage("Unauthorized: Incorrect email or password.");
            } else if (error.response && error.response.data) {
                console.error('Error logging in:', error.response.data.message);
                setErrorMessage(error.response.data.message);
            } else {
                console.error('Error logging in:', error.message);
                setErrorMessage("There was an unexpected error. Please try again.");
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="p-4 p-md-5 border rounded-3 bg-light text-dark">
            {errorMessage && (
                <div className="alert alert-danger" role="alert">
                    {errorMessage}
                </div>
            )}
            {successMessage && (
                <div className="alert alert-success" role="alert">
                    {successMessage}
                </div>
            )}
            <div className="form-floating mb-3">
                <input 
                    type="email" 
                    className="form-control" 
                    id="loginFloatingInput" 
                    placeholder="name@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="loginFloatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input 
                    type="password" 
                    className="form-control" 
                    id="loginFloatingPassword" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label htmlFor="loginFloatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
                <label>
                    <input 
                        type="checkbox" 
                        value="remember-me" 
                        checked={remember}
                        onChange={() => setRemember(prev => !prev)}
                    /> 
                    Remember me
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
            <hr className="my-4" />
            <small className="text-muted">By logging in, you agree to our terms of use.</small>
        </form>
    );
}

export default LoginForm;
