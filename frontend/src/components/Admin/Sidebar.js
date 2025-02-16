import React from "react";
import "./Sidebar.css"; // Importing the sidebar CSS
import { Link } from "react-router-dom"; // If using React Router

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
        <li><Link to="/category"><i className="fas fa-list"></i> Categories</Link></li>
        <li><Link to="/books"><i className="fas fa-book"></i> Books</Link></li>
        <li><Link to="/orders"><i className="fas fa-shopping-cart"></i> Orders</Link></li>
        <li><Link to="/settings"><i className="fas fa-cog"></i> Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
