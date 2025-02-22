import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminManagement.css";
import Sidebar from "./Sidebar";

const AdminManagement = () => {
  const [management, setManagement] = useState({ board_of_directors: [], branches: [] });
  const [newMember, setNewMember] = useState({ section: "", name: "", position: "", phone: "", city: "" });

  // ✅ Fetch Management Data
  useEffect(() => {
    axios.get("http://localhost:5001/api/home/management/")
      .then(response => setManagement(response.data))
      .catch(error => console.error("Error fetching management data:", error));
  }, []);

  // ✅ Handle Form Input
  const handleChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  // ✅ Add New Member
  const handleAddMember = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5001/api/home/admin/management", newMember)
      .then(response => {
        setManagement(response.data.managementData);
        setNewMember({ section: "", name: "", position: "", phone: "", city: "" });
      })
      .catch(error => console.error("Error adding member:", error));
  };

  // ✅ Delete Member
  const handleDelete = (section, id) => {
    axios.delete(`http://localhost:5001/api/home/admin/management/${section}/${id}`)
      .then(() => {
        setManagement(prevState => ({
          ...prevState,
          [section]: prevState[section].filter(item => item._id !== id)
        }));
      })
      .catch(error => console.error("Error deleting member:", error));
  };

  return (
    <div className="management-page">
        <Sidebar />
      <div className="management-container">
        <h3>Management Panel</h3>

        {/* Directors Section */}
        <section className="management-section">
          <h3>Board of Directors</h3>
          <ul className="management-list">
            {management.board_of_directors.map(director => (
              <li key={director._id}>
                <strong>{director.name}</strong> - {director.position}
                <button className="delete-button" onClick={() => handleDelete("board_of_directors", director._id)}>Delete</button>
              </li>
            ))}
          </ul>
        </section>

        {/* Branches Section */}
        <section className="management-section">
          <h3>Branches</h3>
          {management.branches.map(branch => (
            <div key={branch.city}>
              <h4>{branch.city}</h4>
              <ul className="management-list">
                {branch.members.map(member => (
                  <li key={member._id}>
                    <strong>{member.name}</strong> - {member.position} (📞 {member.phone})
                    <button className="delete-button" onClick={() => handleDelete("branches", member._id)}>Delete</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Add Member Form */}
        <section className="management-section">
          <h3>Add New Member</h3>
          <form onSubmit={handleAddMember}>
            <select name="section" onChange={handleChange} required>
              <option value="">Select Section</option>
              <option value="board_of_directors">Board of Directors</option>
              <option value="branches">Branches</option>
            </select>
            <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
            <input type="text" name="position" placeholder="Position" onChange={handleChange} required />
            {newMember.section === "branches" && (
              <>
                <input type="text" name="city" placeholder="Branch City" onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
              </>
            )}
            <button type="submit" className="save-button">Add Member</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AdminManagement;
