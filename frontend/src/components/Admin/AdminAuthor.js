import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminAuthor.css";
import Sidebar from "./Sidebar";

const AdminAuthor = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [notableWorks, setNotableWorks] = useState("");
  const [authors, setAuthors] = useState([]);

  // Fetch all authors
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/home/authors")
      .then((response) => {
        console.log("Fetched Authors:", response.data);
        setAuthors(response.data);
      })
      .catch((error) => console.error("Error fetching authors:", error));
  }, []);

  // Add new author
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/home/admin/authors", {
        name,
        image,
        description,
        notableWorks: notableWorks.split(",").map((work) => work.trim()),
      });
      console.log("Author Added:", response.data);

      // Update state
      setAuthors([...authors, { _id: response.data._id, name, image, description, notableWorks: notableWorks.split(",") }]);

      // Reset form
      setName("");
      setImage("");
      setDescription("");
      setNotableWorks("");

      alert("Author added successfully!");
    } catch (error) {
      console.error("Error adding author:", error);
    }
  };

  // Delete an author
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/home/admin/authors/${id}`);

      // Remove from UI
      setAuthors(authors.filter((author) => author._id !== id));

      alert("Author deleted successfully!");
    } catch (error) {
      console.error("Error deleting author:", error);
    }
  };

  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-author-container">
        <h3>Admin Panel - Manage Authors</h3>

        {/* Add Author Form */}
        <form className="admin-author-form" onSubmit={handleSubmit}>
          <label>Author Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

          <label>Image URL:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />

          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

          <label>Notable Works (comma-separated):</label>
          <input type="text" value={notableWorks} onChange={(e) => setNotableWorks(e.target.value)} />

          <button type="submit" className="save-button">Add Author</button>
        </form>

        {/* Author List */}
        <ul className="author-list">
  {authors.length > 0 ? (
    authors.map((author) => (
      <li key={author._id} className="author-item">
        <div className="author-content">
          <img src={author.image} alt={author.name} className="author-image" />
          <div className="author-text">
            <h3>{author.name}</h3>
            <p>{author.description}</p>
            <p><strong>Notable Works:</strong> {author.notableWorks.join(", ")}</p>
          </div>
        </div>
        <button className="delete-button" onClick={() => handleDelete(author._id)}>Delete</button>
      </li>
    ))
  ) : (
    <p>No authors added yet.</p>
  )}


        </ul>
      </div>
    </div>
  );
};

export default AdminAuthor;
