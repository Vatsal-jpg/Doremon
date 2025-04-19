import React, { useState } from 'react';
import axios from 'axios';
import '../styles/login.css'; 
import '../styles/register.css' // Make sure your styles are imported

const RegisterPage = () => {
  // State for the form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: ''
  });

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form behavior (which would reload the page)

    try {
      // Make a POST request to your backend
      const response = await axios.post('http://localhost:5000/api/register', formData);

      if (response.data.success) {
        alert('Registration successful!');
        // Optionally, you can redirect the user to the login page or home page
        window.location.href = '/';  // Redirect to login page after successful registration
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      alert('Error registering user');
      console.error(error);
    }
  };

  return (
    <div className="login-container register-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Register Yourself</h1>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Enter your Role"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
