import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/gtt_logo.png" alt="Group Technology Logo" className="logo-image" />
        <div className="logo-text">
          <h1>IT Consulting and Staffing Services</h1>
        </div>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
