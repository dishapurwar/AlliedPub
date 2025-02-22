import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar"; // Import Sidebar
import "./AdminConference.css";

const AdminConference = () => {
  const [conferenceData, setConferenceData] = useState({
    description: "",
    institutions: [],
    services: [],
    contact: {
      name: "",
      position: "",
      company: "",
      address: "",
      mobile: [],
      email: [],
    },
  });

  useEffect(() => {
    fetchConferenceData();
  }, []);

  const fetchConferenceData = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/home/conference");
      setConferenceData(res.data);
    } catch (err) {
      console.error("Error fetching conference data:", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConferenceData({ ...conferenceData, [name]: value });
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setConferenceData({
      ...conferenceData,
      contact: { ...conferenceData.contact, [name]: value },
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put("http://localhost:5001/api/home/admin/conference", conferenceData);
      alert("Conference data updated successfully!");
      fetchConferenceData();
    } catch (err) {
      console.error("Error updating conference data:", err);
    }
  };

  return (
    <div className="admin-container">
      <Sidebar /> {/* Sidebar included */}
      
        <h3>Manage Conference Proceedings</h3>
        <div className="admin-conference-form">
          <h3>Description</h3>
          <textarea
            name="description"
            value={conferenceData.description}
            onChange={handleChange}
          />

          <h3>Contact Information</h3>
          <div className="contact-section">
            <label>Contact Name</label>
            <input
              name="name"
              value={conferenceData.contact.name}
              onChange={handleContactChange}
            />

            <label>Position</label>
            <input
              name="position"
              value={conferenceData.contact.position}
              onChange={handleContactChange}
            />

            <label>Company</label>
            <input
              name="company"
              value={conferenceData.contact.company}
              onChange={handleContactChange}
            />

            <label>Address</label>
            <input
              name="address"
              value={conferenceData.contact.address}
              onChange={handleContactChange}
            />
          </div>

          <button className="save-button" onClick={handleUpdate}>
            Save Changes
          </button>
        </div>
      </div>
   
  );
};

export default AdminConference;
