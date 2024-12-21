import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <header className="navbar">
      <img src="http://www.alliedpub.com/img/alliedlogo.png" alt="Allied Publishers" />
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/distribution" className="nav-link">Distribution</Link>
        <Link to="/specialized-agencies" className="nav-link">Specialized Agencies</Link>
        <Link to="/export-division" className="nav-link">Export Division</Link>
        <Link to="/contact" className="nav-link">Contact Us</Link>
        <Link to="/conference" className="nav-link">Conference Proceedings</Link>
      </nav>
   
      <div className="auth-buttons">
        <button className="sign-in">Sign in</button>
        <button className="sign-up">Sign up</button>
      </div>
    </header>
  );
};

export default Navbar;
