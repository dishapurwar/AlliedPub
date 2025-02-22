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

  // Handle form submission (Add Location)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/home/admin/locations", { name: location });
      setLocations([...locations, response.data]); // Update UI
      setLocation(""); // Clear input
      alert("Location added successfully!");
    } catch (error) {
      console.error("Error adding location:", error);
    }
  };

  // Handle deleting a location
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/home/admin/locations/${id}`);
      setLocations(locations.filter((loc) => loc._id !== id)); // Remove from UI
      alert("Location deleted successfully!");
    } catch (error) {
      console.error("Error deleting location:", error);
    }
  };

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-location-container">
        <h3>Admin Panel - Manage Locations</h3>
        
        {/* Add Location Form */}
        <form className="admin-location-form" onSubmit={handleSubmit}>
          <label>Location Name:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            placeholder="Enter location name"
          />
          <button type="submit" className="save-button">Add Location</button>
        </form>

        {/* Display Existing Locations in a Table */}
        {locations.length > 0 ? (
          <div className="admin-location-list">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Location Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {locations.map((loc, index) => (
                  <tr key={loc._id}>
                    <td>{index + 1}</td>
                    <td>{loc.name}</td>
                    <td>
                      <button 
                        className="delete-button" 
                        onClick={() => handleDelete(loc._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="no-location">No locations added yet.</p>
        )}
      </div>
    </div>
  );
};

export default AdminLocation;
