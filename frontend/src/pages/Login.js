// frontend/src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      login(response.data.user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.msg || 'Server error');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content text-center">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <div className="mt-3">
          <Link to="/">
            <button className="btn btn-secondary">Go to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
