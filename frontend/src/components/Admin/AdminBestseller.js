import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminBestseller.css";
import Sidebar from "./Sidebar";

const AdminBestseller = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [bestsellers, setBestsellers] = useState([]);

  // Fetch bestsellers
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/home/bestsellers")
      .then((response) => setBestsellers(response.data))
      .catch((error) => console.error("Error fetching bestsellers:", error));
  }, []);

  // Add new bestseller
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/home/admin/bestsellers", { name, image });
      setBestsellers([...bestsellers, response.data]); // Update UI
      setName("");
      setImage("");
      alert("Bestseller added successfully!");
    } catch (error) {
      console.error("Error adding bestseller:", error);
    }
  };

  // Delete a bestseller
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/home/admin/bestsellers/${id}`);
      setBestsellers(bestsellers.filter((book) => book._id !== id));
      alert("Bestseller deleted successfully!");
    } catch (error) {
      console.error("Error deleting bestseller:", error);
    }
  };

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-bestseller-container">
        <h3>Admin Panel - Manage Bestsellers</h3>

        {/* Form to Add Bestseller */}
        <form className="admin-bestseller-form" onSubmit={handleSubmit}>
          <label>Book Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

          <label>Image URL:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />

          <button type="submit" className="save-button">Add Bestseller</button>
        </form>

        {/* Display Existing Bestsellers */}
        <ul className="bestseller-list">
          {bestsellers.map((book) => (
            <li key={book._id}>
              <img src={book.image} alt={book.name} className="book-image" />
              <p>{book.name}</p>
              <button className="delete-button" onClick={() => handleDelete(book._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminBestseller;
