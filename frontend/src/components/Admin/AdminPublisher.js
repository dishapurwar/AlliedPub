import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminPublisher.css";
import Sidebar from "./Sidebar";

const AdminPublisher = () => {
  const [publishers, setPublishers] = useState([]);
  const [newPublisher, setNewPublisher] = useState({ category: "", publisherName: "" });

  // ✅ Fetch Publishers
  useEffect(() => {
    axios.get("http://localhost:5001/api/home/publisher")
      .then(response => setPublishers(response.data))
      .catch(error => console.error("Error fetching publishers:", error));
  }, []);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setNewPublisher({ ...newPublisher, [e.target.name]: e.target.value });
  };

  // ✅ Add a Single Publisher to a Category
  const handleAddPublisher = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5001/api/home/admin/publisher", newPublisher)
      .then(response => {
        setPublishers(prevState => {
          const updatedPublishers = [...prevState];
          const index = updatedPublishers.findIndex(pub => pub.category === response.data.publisher.category);
          if (index !== -1) {
            updatedPublishers[index] = response.data.publisher;
          } else {
            updatedPublishers.push(response.data.publisher);
          }
          return updatedPublishers;
        });
        setNewPublisher({ category: "", publisherName: "" });
      })
      .catch(error => console.error("Error adding publisher:", error));
  };

  // ✅ Delete a Single Publisher from a Category
  const handleDelete = (category, publisherName) => {
    axios.delete(`http://localhost:5001/api/home/admin/publisher/${category}/${publisherName}`)
      .then(() => {
        setPublishers(prevState =>
          prevState.map(pub =>
            pub.category === category
              ? { ...pub, publishers: pub.publishers.filter(p => p !== publisherName) }
              : pub
          ).filter(pub => pub.publishers.length > 0) // Remove empty categories
        );
      })
      .catch(error => console.error("Error deleting publisher:", error));
  };

  return (
    <div className="publisher-page">
      <Sidebar />
      <div className="publisher-container">
        <h3>Publisher Management</h3>

        {/* Publisher List */}
        <section className="publisher-section">
          <h3>Available Publishers</h3>
          {publishers.map(pub => (
            <div key={pub.category} className="publisher-category">
              <h4>{pub.category}</h4>
              <ul className="publisher-list">
                {pub.publishers.map((name, index) => (
                  <li key={index}>
                    <span>{name}</span>
                    <button className="delete-button" onClick={() => handleDelete(pub.category, name)}>Delete</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Add Publisher Form */}
        <section className="publisher-section">
          <h3>Add Single Publisher</h3>
          <form onSubmit={handleAddPublisher}>
            <input type="text" name="category" placeholder="Category" onChange={handleChange} value={newPublisher.category} required />
            <input type="text" name="publisherName" placeholder="Publisher Name" onChange={handleChange} value={newPublisher.publisherName} required />
            <button type="submit" className="save-button">Add Publisher</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AdminPublisher;
