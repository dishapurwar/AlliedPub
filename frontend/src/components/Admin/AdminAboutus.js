import React, { useState, useEffect } from "react";
import axios from "axios";
import './AdminAboutus.css';
import Sidebar from "./Sidebar";

const AdminAboutUs = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState([""]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/home/about-us")
      .then((response) => {
        if (response.data) {
          setTitle(response.data.title);
          setImage(response.data.content.image);
          setDescription(response.data.content.description);
        }
      })
      .catch((error) => console.error("Error fetching About Us data:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/home/admin/about-us", {
        title,
        content: { image, description },
      });
      alert("About Us updated successfully!");
    } catch (error) {
      console.error("Error updating About Us:", error);
    }
  };

  return (
    <div className="admin-container">
      <Sidebar />
    <div className="admin-about-container">
      <h3>Admin Panel - Edit About Us</h3>
      <form className="admin-about-form" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Image URL:</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <label>Description:</label>
        {description.map((para, index) => (
          <textarea
            key={index}
            value={para}
            onChange={(e) => {
              const newDescription = [...description];
              newDescription[index] = e.target.value;
              setDescription(newDescription);
            }}
          />
        ))}

        <div className="form-buttons">
          <button
            type="button"
            className="add-button"
            onClick={() => setDescription([...description, ""])}
          >
            Add Paragraph
          </button>
          <button type="submit" className="save-button">Save</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AdminAboutUs;
