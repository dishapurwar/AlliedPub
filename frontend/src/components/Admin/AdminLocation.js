import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminLocation.css";
import Sidebar from "./Sidebar";

const AdminLocation = () => {
  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState([]);

  // Fetch locations from backend
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/home/locations")
      .then((response) => setLocations(response.data))
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/home/admin/locations", { name: location });
      setLocations([...locations, { name: location }]); // Update UI
      setLocation(""); // Clear input
      alert("Location added successfully!");
    } catch (error) {
      console.error("Error adding location:", error);
    }
  };

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-location-container">
        <h2>Admin Panel - Manage Locations</h2>
        <form className="admin-location-form" onSubmit={handleSubmit}>
          <label>Location Name:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <button type="submit" className="save-button">Add Location</button>
        </form>

        {/* Display Existing Locations */}
        <ul className="location-list">
          {locations.map((loc, index) => (
            <li key={index}>{loc.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminLocation;
