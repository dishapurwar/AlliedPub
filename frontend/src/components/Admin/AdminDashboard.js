// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import AdminAboutus from "./AdminAboutus";

// const AdminDashboard = () => {
//   const [selectedPage, setSelectedPage] = useState(null);

//   return (
//     <div className="admin-container">
//       <Sidebar onSelect={setSelectedPage} />
      
//       {/* Content Area */}
//       <div className="admin-content">
//         {selectedPage === "about-us" && <AdminAboutus />}
//         {selectedPage === "location" && <h2>Location Management</h2>}
//         {selectedPage === "author" && <h2>Author Management</h2>}
//         {selectedPage === "bestsellers" && <h2>Bestsellers Management</h2>}
        
//         {/* Default Message */}
//         {!selectedPage && <h2>Select an option from the sidebar</h2>}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
