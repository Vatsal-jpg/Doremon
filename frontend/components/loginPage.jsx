import React, { useState } from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();

      if (response.ok) {
        alert("Login successful! Welcome to Doraemon's Inventory.");
        navigate('/dashboard')
        // TODO: redirect to dashboard
      } else {
        alert(result.message || "Login failed.");
      }
    } catch (error) {
      alert("Error connecting to server.");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Doraemon <br />Inventory System</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <a href="#" className="forgot-password">Forget password?</a>
          <button type="submit" className="Loginpage-submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
