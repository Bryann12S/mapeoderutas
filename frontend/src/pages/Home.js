// frontend/src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to Home</h2>
      <p>This is the homepage of your application.</p>
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
        
      </div>
    </div>
  );
};

export default Home;