import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // ✅ State for each dropdown
  const [adminHomeOpen, setAdminHomeOpen] = useState(false);
  const [adminNavbarOpen, setAdminNavbarOpen] = useState(false);

  return (
    <div className="admin-sidebar">
      <h2>Admin Panel</h2>
      <ul>
        {/* Home Dropdown */}
        <li>
          <button
            className="admin-dropdown-btn"
            onClick={() => setAdminHomeOpen(!adminHomeOpen)}
            aria-expanded={adminHomeOpen}
          >
            <i className="fas fa-home"></i> Home
          </button>
          <ul className={`admin-dropdown-content ${adminHomeOpen ? "show" : ""}`}>
            <li><Link to="/admin/about-us">About Us</Link></li>
            <li><Link to="/admin/authors">Author</Link></li>
            <li><Link to="/admin/bestsellers">Bestseller</Link></li>
            <li><Link to="/admin/locations">Location</Link></li>
          </ul>
        </li>

        {/* Navbar Dropdown */}
        <li>
          <button
            className="admin-dropdown-btn"
            onClick={() => setAdminNavbarOpen(!adminNavbarOpen)}
            aria-expanded={adminNavbarOpen}
          >
            <i className="fas fa-bars"></i> Navbar
          </button>
          <ul className={`admin-dropdown-content ${adminNavbarOpen ? "show" : ""}`}>
            <li><Link to="/admin/conference">Conference Proceeding</Link></li>
            <li><Link to="/admin/export-info">Export Info</Link></li>
            <li><Link to="/admin/contact">Contact</Link></li>
            <li><Link to="/admin/management">Management</Link></li>
            <li><Link to="/admin/publisher">Distribution</Link></li>
            <li><Link to="/admin/special-agency">Specialized Agency</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
