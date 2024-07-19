import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import logo from './logo.png'; // Ensure this path is correct

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      // Sign-up logic
      if (!validateSignUp()) {
        return;
      }

      console.log('Sign-up:', { name, username, email, password });
      // Redirect to the home page after successful sign-up
      navigate('/home');
    } else {
      // Login logic
      if (!validateLogin()) {
        return;
      }

      console.log('Login:', { email, password });
      // Redirect to the home page after successful login
      navigate('/home');
    }
  };

  const validateSignUp = () => {
    // Basic email validation
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return false;
    }

    // Username validation
    if (!username || username.length < 4) {
      alert('Username must be at least 4 characters long.');
      return false;
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if (!password || !passwordRegex.test(password)) {
      alert('Password must be at least 8 characters long and contain at least one symbol, one number, and one alphabet character.');
      return false;
    }

    return true;
  };

  const validateLogin = () => {
    // Basic email validation
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return false;
    }

    // Password validation (optional for login)
    if (!password) {
      alert('Please enter your password.');
      return false;
    }

    return true;
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="app-name">MeetUp</h1>
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {isSignUp && (
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        {isSignUp && (
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <button onClick={handleToggle} className="toggle-button">
        {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default LoginPage;