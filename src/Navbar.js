import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="public\gtt_logo.png" alt="Group Technology Logo" className="logo-image" />
        <div className="logo-text">
          <h1>Group Technology</h1>
          <p>...partners in staffing</p>
        </div>
      </div>
      <div className="nav-links">
        <Link to="/homepage.js">Home</Link>
        <Link to="/staff">Staff</Link>
      </div>
    </nav>
  );
};

export default Navbar;
