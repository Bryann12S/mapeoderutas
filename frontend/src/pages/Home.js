// frontend/src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content text-center">
        <h2>Welcome to Home</h2>
        <p>This is the homepage of your application.</p>
        <div className="home-buttons">
          <Link to="/">
            <button className="btn btn-primary">Home</button>
          </Link>
          <Link to="/login">
            <button className="btn btn-success">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-info">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
