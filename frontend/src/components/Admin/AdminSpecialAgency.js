// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Sidebar from "./Sidebar";  // Sidebar component
// import "./AdminSpecialAgency.css"; // CSS file

// const AdminSpecialAgency = () => {
//   const [agencies, setAgencies] = useState([]);
//   const [newAgency, setNewAgency] = useState({
//     name: "",
//     description: "",
//     keyFeatures: "",
//     partnerOrganizations: "",
//     currentAssociates: "",
//     contactDetails: { manager: "", address: "", phone: "", mobile: "", email: "" }
//   });

//   // ✅ Fetch Agencies
//   useEffect(() => {
//     axios.get("http://localhost:5001/api/home/special-agency")
//       .then(response => setAgencies(response.data))
//       .catch(error => console.error("Error fetching agencies:", error));
//   }, []);

//   // ✅ Handle Form Input
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewAgency((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   // ✅ Add Agency
//   const handleAddAgency = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:5001/api/home/admin/special-agency", newAgency)
//       .then(response => {
//         setAgencies([...agencies, response.data.agency]);
//         setNewAgency({
//           name: "",
//           description: "",
//           keyFeatures: "",
//           partnerOrganizations: "",
//           currentAssociates: "",
//           contactDetails: { manager: "", address: "", phone: "", mobile: "", email: "" }
//         });
//       })
//       .catch(error => console.error("Error adding agency:", error));
//   };

//   // ✅ Delete Agency
//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:5001/api/home/admin/special-agency/${id}`)
//       .then(() => setAgencies(agencies.filter(agency => agency._id !== id)))
//       .catch(error => console.error("Error deleting agency:", error));
//   };

//   return (
//     <div className="special-agency-page">
//       <Sidebar />
//       <div className="special-agency-container">
//         <h2>Specialized Agencies Management</h2>

//         {/* Display Agencies */}
//         <section className="agency-list">
//           {agencies.map(agency => (
//             <div key={agency._id} className="agency-card">
//               <h3>{agency.name}</h3>
//               <p>{agency.description}</p>
//               <button className="delete-button" onClick={() => handleDelete(agency._id)}>Delete</button>
//             </div>
//           ))}
//         </section>

//         {/* Add New Agency Form */}
//         <section className="agency-form">
//           <h3>Add New Agency</h3>
//           <form onSubmit={handleAddAgency}>
//             <input type="text" name="name" placeholder="Agency Name" onChange={handleChange} required />
//             <input type="text" name="description" placeholder="Description" onChange={handleChange} required />
//             <button type="submit" className="save-button">Add Agency</button>
//           </form>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AdminSpecialAgency;


import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import "./AdminSpecialAgency.css";

const AdminSpecialAgency = () => {
  const [agencies, setAgencies] = useState([]);
  const [editingAgency, setEditingAgency] = useState(null);
  const [agencyData, setAgencyData] = useState({
    name: "",
    description: "",
    keyFeatures: "",
    partnerOrganizations: "",
    currentAssociates: "",
    contactDetails: {
      manager: "",
      address: "",
      phone: "",
      mobile: "",
      email: "",
    },
  });

  // ✅ Fetch Agencies
  useEffect(() => {
    fetchAgencies();
  }, []);

  const fetchAgencies = () => {
    axios
      .get("http://localhost:5001/api/home/special-agency")
      .then((response) => setAgencies(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  // ✅ Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("contactDetails.")) {
      const key = name.split(".")[1];
      setAgencyData({
        ...agencyData,
        contactDetails: { ...agencyData.contactDetails, [key]: value },
      });
    } else {
      setAgencyData({ ...agencyData, [name]: value });
    }
  };

  // ✅ Add or Update Agency
  const handleSaveAgency = (e) => {
    e.preventDefault();
    const formattedData = {
      ...agencyData,
      keyFeatures: agencyData.keyFeatures.split(","),
      partnerOrganizations: agencyData.partnerOrganizations.split(","),
      currentAssociates: agencyData.currentAssociates.split(","),
      contactDetails: {
        ...agencyData.contactDetails,
        email: agencyData.contactDetails.email.split(","),
      },
    };

    if (editingAgency) {
      axios
        .put(`http://localhost:5001/api/home/admin/special-agency/${editingAgency._id}`, formattedData)
        .then(() => {
          fetchAgencies();
          setEditingAgency(null);
          resetForm();
        })
        .catch((error) => console.error("Error updating agency:", error));
    } else {
      axios
        .post("http://localhost:5001/api/home/admin/special-agency", formattedData)
        .then((response) => {
          setAgencies([...agencies, response.data.agency]);
          resetForm();
        })
        .catch((error) => console.error("Error adding agency:", error));
    }
  };

  // ✅ Delete Agency
  const handleDeleteAgency = (id) => {
    axios
      .delete(`http://localhost:5001/api/home/admin/special-agency/${id}`)
      .then(() => fetchAgencies())
      .catch((error) => console.error("Error deleting agency:", error));
  };

  // ✅ Edit Agency
  const handleEditAgency = (agency) => {
    setEditingAgency(agency);
    setAgencyData({
      name: agency.name,
      description: agency.description,
      keyFeatures: agency.keyFeatures.join(","),
      partnerOrganizations: agency.partnerOrganizations.join(","),
      currentAssociates: agency.currentAssociates.join(","),
      contactDetails: {
        manager: agency.contactDetails.manager || "",
        address: agency.contactDetails.address || "",
        phone: agency.contactDetails.phone || "",
        mobile: agency.contactDetails.mobile || "",
        email: agency.contactDetails.email.join(",") || "",
      },
    });
  };

  // ✅ Reset Form
  const resetForm = () => {
    setAgencyData({
      name: "",
      description: "",
      keyFeatures: "",
      partnerOrganizations: "",
      currentAssociates: "",
      contactDetails: {
        manager: "",
        address: "",
        phone: "",
        mobile: "",
        email: "",
      },
    });
  };

  return (
    <div className="special-agency-page">
      <Sidebar />
      <div className="special-agency-container">
        <h3>Specialized Agencies Management</h3>

        {/* ✅ List of Agencies */}
        <section className="agency-list">
          {agencies.map((agency) => (
            <div key={agency._id} className="agency-card">
              <div className="agency-info">
                <h3>{agency.name}</h3>
                <p>{agency.description}</p>
                <ul>
                  {agency.keyFeatures.map((feature, index) => (
                    <li key={index}>✅ {feature}</li>
                  ))}
                </ul>
                <strong>Manager:</strong> {agency.contactDetails.manager} <br />
                <strong>Address:</strong> {agency.contactDetails.address} <br />
                <strong>Phone:</strong> {agency.contactDetails.phone} <br />
              </div>
              <button className="edit-button" onClick={() => handleEditAgency(agency)}>
                Edit
              </button>
              <button className="delete-button" onClick={() => handleDeleteAgency(agency._id)}>
                Delete
              </button>
            </div>
          ))}
        </section>

        {/* ✅ Add or Edit Agency Form */}
        <section className="add-agency-section">
          <h3>{editingAgency ? "Edit Agency" : "Add New Specialized Agency"}</h3>
          <form onSubmit={handleSaveAgency}>
            <input type="text" name="name" placeholder="Agency Name" value={agencyData.name} onChange={handleChange} required />
            <textarea name="description" placeholder="Description" value={agencyData.description} onChange={handleChange} />
            <input type="text" name="keyFeatures" placeholder="Key Features (comma-separated)" value={agencyData.keyFeatures} onChange={handleChange} />
            <input type="text" name="partnerOrganizations" placeholder="Partner Organizations (comma-separated)" value={agencyData.partnerOrganizations} onChange={handleChange} />
            <input type="text" name="currentAssociates" placeholder="Current Associates (comma-separated)" value={agencyData.currentAssociates} onChange={handleChange} />
            <input type="text" name="contactDetails.manager" placeholder="Manager Name" value={agencyData.contactDetails.manager} onChange={handleChange} />
            <input type="text" name="contactDetails.address" placeholder="Address" value={agencyData.contactDetails.address} onChange={handleChange} />
            <input type="text" name="contactDetails.phone" placeholder="Phone" value={agencyData.contactDetails.phone} onChange={handleChange} />
            <input type="text" name="contactDetails.mobile" placeholder="Mobile" value={agencyData.contactDetails.mobile} onChange={handleChange} />
            <input type="text" name="contactDetails.email" placeholder="Emails (comma-separated)" value={agencyData.contactDetails.email} onChange={handleChange} />
            <button type="submit" className="save-button">{editingAgency ? "Update" : "Add"}</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AdminSpecialAgency;
