import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar"; // ✅ Include Sidebar
import "./AdminExportInfo.css"; // ✅ Updated CSS Import

const AdminExportInfo = () => {
  const [exportInfo, setExportInfo] = useState({
    description: "",
    exports: [],
    coreAreas: [],
    customerCategories: [],
    contact: {
      name: "",
      address: "",
      mobile: "",
      phone: [],
      email: [],
      note: ""
    }
  });

  useEffect(() => {
    fetchExportInfo();
  }, []);

  const fetchExportInfo = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/home/export-info");
      console.log("API Response:", res.data); // ✅ Debugging log
      if (res.data) {
        setExportInfo(res.data);
      }
    } catch (err) {
      console.error("Error fetching export info:", err);
    }
  };

  const handleChange = (field, value) => {
    setExportInfo({ ...exportInfo, [field]: value });
  };

  const handleContactChange = (field, value) => {
    setExportInfo({
      ...exportInfo,
      contact: { ...exportInfo.contact, [field]: value }
    });
  };

  const handleArrayChange = (field, value) => {
    setExportInfo({ ...exportInfo, [field]: value.split(",") });
  };

  const handleContactArrayChange = (field, value) => {
    setExportInfo({
      ...exportInfo,
      contact: { ...exportInfo.contact, [field]: value.split(",") }
    });
  };

  const handleUpdate = async () => {
    try {
      await axios.put("http://localhost:5001/api/home/admin/export-info", exportInfo);
      alert("Export Info updated successfully!");
      fetchExportInfo();
    } catch (err) {
      console.error("Error updating export info:", err);
    }
  };

  return (
    <div className="export-info-container">
      <Sidebar /> {/* ✅ Sidebar Included */}
      <div className="export-info-content">
        <h3>Manage Export Information</h3>

        <label>Description</label>
        <textarea
          className="export-info-form"
          value={exportInfo.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />

        <label>Exports (Comma-separated)</label>
        <input
          className="export-info-form"
          type="text"
          value={exportInfo.exports.join(", ")}
          onChange={(e) => handleArrayChange("exports", e.target.value)}
        />

        <label>Core Areas (Comma-separated)</label>
        <input
          className="export-info-form"
          type="text"
          value={exportInfo.coreAreas.join(", ")}
          onChange={(e) => handleArrayChange("coreAreas", e.target.value)}
        />

        <label>Customer Categories (Comma-separated)</label>
        <input
          className="export-info-form"
          type="text"
          value={exportInfo.customerCategories.join(", ")}
          onChange={(e) => handleArrayChange("customerCategories", e.target.value)}
        />

        <h3>Contact Details</h3>

        <label>Name</label>
        <input
          className="export-info-form"
          type="text"
          value={exportInfo.contact.name}
          onChange={(e) => handleContactChange("name", e.target.value)}
        />

        <label>Address</label>
        <input
          className="export-info-form"
          type="text"
          value={exportInfo.contact.address}
          onChange={(e) => handleContactChange("address", e.target.value)}
        />

        <label>Mobile</label>
        <input
          className="export-info-form"
          type="text"
          value={exportInfo.contact.mobile}
          onChange={(e) => handleContactChange("mobile", e.target.value)}
        />

        <label>Phone Numbers (Comma-separated)</label>
        <input
          className="export-info-form"
          type="text"
          value={exportInfo.contact.phone.join(", ")}
          onChange={(e) => handleContactArrayChange("phone", e.target.value)}
        />

        <label>Email (Comma-separated)</label>
        <input
          className="export-info-form"
          type="text"
          value={exportInfo.contact.email.join(", ")}
          onChange={(e) => handleContactArrayChange("email", e.target.value)}
        />

        <label>Legal Disputes Note</label>
        <textarea
          className="export-info-form"
          value={exportInfo.contact.note}
          onChange={(e) => handleContactChange("note", e.target.value)}
        />

        <button className="export-save-button" onClick={handleUpdate}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AdminExportInfo;
