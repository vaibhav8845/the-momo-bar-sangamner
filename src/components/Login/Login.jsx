import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles for Toastify
import './Login.css'; // External CSS for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the email and password are correct
    if (email === 'vaibhavsonawane2005@gmail.com' && password === 'Vaibhav@9022') {
      console.log('Email:', email);
      console.log('Password:', password);
      toast.success('Login successful!'); // Show success toast

      // Redirect to OrderForm page
      navigate('/orderform'); // Redirect to /orderform after successful login
    } else {
      toast.error('Invalid email or password'); // Show error toast
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-container">
        <h1 className="login-title">Welcome Back!</h1>
        <p className="login-subtitle">Please enter your email and password to log in.</p>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="submit-button">Log In</button>
        </form>
      </div>
      <ToastContainer /> {/* Place ToastContainer outside form to ensure it only renders once */}
    </div>
  );
};

export default Login;
