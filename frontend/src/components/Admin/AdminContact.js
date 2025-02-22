import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import "./AdminContact.css";

const AdminContact = () => {
  const [branches, setBranches] = useState([]);
  const [editingBranch, setEditingBranch] = useState(null);
  const [branchData, setBranchData] = useState({
    city: "",
    address: "",
    phone: "",
    email: ""
  });

  // ✅ Fetch Branches
  useEffect(() => {
    fetchBranches();
  }, []);

  const fetchBranches = () => {
    axios
      .get("http://localhost:5001/api/home/contact")
      .then((response) => setBranches(response.data.branches))
      .catch((error) => console.error("Error fetching branches:", error));
  };

  // ✅ Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBranchData({ ...branchData, [name]: value });
  };

  // ✅ Add or Update Branch
  const handleSaveBranch = (e) => {
    e.preventDefault();
    const formattedData = {
      ...branchData,
      phone: branchData.phone.split(",") // Convert phone numbers into an array
    };

    if (editingBranch) {
      axios
        .put(`http://localhost:5001/api/home/admin/contact/${editingBranch._id}`, formattedData)
        .then(() => {
          fetchBranches();
          setEditingBranch(null);
          resetForm();
        })
        .catch((error) => console.error("Error updating branch:", error));
    } else {
      axios
        .post("http://localhost:5001/api/home/admin/contact", formattedData)
        .then(() => {
          fetchBranches();
          resetForm();
        })
        .catch((error) => console.error("Error adding branch:", error));
    }
  };

  // ✅ Delete Branch
  const handleDeleteBranch = (id) => {
    axios
      .delete(`http://localhost:5001/api/home/admin/contact/${id}`)
      .then(() => fetchBranches())
      .catch((error) => console.error("Error deleting branch:", error));
  };

  // ✅ Edit Branch
  const handleEditBranch = (branch) => {
    setEditingBranch(branch);
    setBranchData({
      city: branch.city,
      address: branch.address,
      phone: branch.phone.join(","), // Convert array to string
      email: branch.email
    });
  };

  // ✅ Reset Form
  const resetForm = () => {
    setBranchData({
      city: "",
      address: "",
      phone: "",
      email: ""
    });
  };

  return (
    <div className="branch-page">
      <Sidebar />
      <div className="branch-container">
        <h3>Contact Information</h3>

        {/* ✅ Branch List */}
        <section className="branch-list">
          {branches.map((branch) => (
            <div key={branch._id} className="branch-card">
              <h3>{branch.city}</h3>
              <p><strong>Address:</strong> {branch.address}</p>
              <p><strong>Phone:</strong> {branch.phone.join(", ")}</p>
              <p><strong>Email:</strong> {branch.email}</p>
              <button className="edit-button" onClick={() => handleEditBranch(branch)}>Edit</button>
              <button className="delete-button" onClick={() => handleDeleteBranch(branch._id)}>Delete</button>
            </div>
          ))}
        </section>

        {/* ✅ Add or Edit Branch Form */}
        <section className="add-branch-section">
          <h3>{editingBranch ? "Edit Branch" : "Add New Branch"}</h3>
          <form onSubmit={handleSaveBranch}>
            <input type="text" name="city" placeholder="City" value={branchData.city} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" value={branchData.address} onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone Numbers (comma-separated)" value={branchData.phone} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={branchData.email} onChange={handleChange} required />
            <button type="submit" className="save-button">{editingBranch ? "Update" : "Add"}</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AdminContact;
