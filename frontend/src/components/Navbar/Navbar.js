// Navbar.js

import React from "react";
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <header className="navbar">
      <img src="http://www.alliedpub.com/img/alliedlogo.png" alt="Allied Publishers" />
      <nav className="nav-links">
        <a href="#home" className="nav-link">Home</a>
        <a href="#distribution" className="nav-link">Distribution</a>
        <a href="#specialized_agencies" className="nav-link">Specialized Agencies</a>
        <a href="#export_division" className="nav-link">Export Division</a>
        <a href="#contact" className="nav-link">Contact Us</a>
      </nav>
      <div className="auth-buttons">
        <button className="sign-in">Sign in</button>
        <button className="sign-up">Sign up</button>
      </div>
    </header>
  );
};

export default Navbar;
