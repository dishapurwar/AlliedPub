// import React from "react";
// import { Link } from "react-router-dom";
// import { FaSearch } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <>
//       {/* Search Bar & Auth Buttons */}
//       <div className="flex justify-end items-center bg-white shadow-md px-6 py-3">
//         {/* Search Bar (Just Left of Sign-in) */}
//         <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-72 mr-4 transition duration-300 hover:shadow-md">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="p-2 w-full outline-none text-gray-700"
//           />
//           <button className="bg-[#75609c] hover:bg-[#5a497a] text-white px-3 py-2 transition duration-300">
//             <FaSearch />
//           </button>
//         </div>

//         {/* Sign-in & Sign-up Buttons */}
//         <div className="flex items-center gap-2">
//           <button className="text-[#20232a] underline transition duration-300 hover:text-black">
//             Sign in
//           </button>
//           <button className="bg-[#75609c] hover:bg-[#5a497a] text-white px-4 py-2 rounded-md transition duration-300 shadow-md hover:shadow-lg">
//             Sign up
//           </button>
//         </div>
//       </div>

//       {/* Navbar */}
//       <header className="bg-[#20232a] text-white shadow-md">
//         <div className="container mx-auto flex items-center justify-between py-3 px-6">
//           {/* Logo */}
//           <div>
//             <img
//               src="/images/alliedlogo.png"
//               alt="Allied Publishers"
//               className="h-12 w-auto"
//             />
//           </div>

//           {/* Nav Links */}
//           <nav className="hidden lg:flex space-x-6">
//             <Link to="/" className="nav-link">
//               Home
//             </Link>
//             <Link to="/publisher" className="nav-link">
//               Distribution
//             </Link>
//             <Link to="/special-agency" className="nav-link">
//               Specialized Agencies
//             </Link>
//             <Link to="/export-info" className="nav-link">
//               Export Division
//             </Link>
//             <Link to="/conference" className="nav-link">
//               Conference Proceedings
//             </Link>
//             <Link to="/journal" className="nav-link">
//               Journal
//             </Link>
//             <Link to="/management" className="nav-link">
//               Management
//             </Link>
//             <Link to="/contact" className="nav-link">
//               Contact Us
//             </Link>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button className="lg:hidden text-white focus:outline-none">
//             ☰
//           </button>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <>
//       {/* 🔹 Top Bar: Search & Auth Buttons */}
//       <div className="flex justify-between items-center bg-white shadow-md px-6 py-3">
//         {/* 🔹 Logo (Visible in Mobile View) */}
//         <div className="lg:hidden">
//           <img src="/images/alliedlogo.png" alt="Allied Publishers" className="h-10 w-auto" />
//         </div>

//         {/* 🔹 Search Bar */}
//         <div className="hidden md:flex items-center border border-gray-300 rounded-lg overflow-hidden w-72 transition duration-300 hover:shadow-md">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="p-2 w-full outline-none text-gray-700"
//           />
//           <button className="bg-[#75609c] hover:bg-[#5a497a] text-white px-3 py-2 transition duration-300">
//             <FaSearch />
//           </button>
//         </div>

//         {/* 🔹 Sign-in & Sign-up Buttons */}
//         <div className="flex items-center gap-3">
//           <Link to="/login" className="text-[#20232a] underline transition duration-300 hover:text-black">
//             Sign in
//           </Link>
//           <Link
//             to="/register"
//             className="bg-[#75609c] hover:bg-[#5a497a] text-white px-4 py-2 rounded-md transition duration-300 shadow-md hover:shadow-lg"
//           >
//             Sign up
//           </Link>

//           {/* 🔹 Mobile Menu Toggle Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="lg:hidden text-[#20232a] text-xl focus:outline-none ml-3"
//           >
//             {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* 🔹 Navbar */}
//       <header className="bg-[#20232a] text-white shadow-md">
//         <div className="container mx-auto flex items-center justify-between py-3 px-6">
//           {/* 🔹 Logo */}
//           <div className="hidden lg:block">
//             <img src="/images/alliedlogo.png" alt="Allied Publishers" className="h-12 w-auto" />
//           </div>

//           {/* 🔹 Desktop Navigation */}
//           <nav className="hidden lg:flex space-x-6">
//             <Link to="/" className="nav-link">Home</Link>
//             <Link to="/publisher" className="nav-link">Distribution</Link>
//             <Link to="/special-agency" className="nav-link">Specialized Agencies</Link>
//             <Link to="/export-info" className="nav-link">Export Division</Link>
//             <Link to="/conference" className="nav-link">Conference Proceedings</Link>
//             <Link to="/journal" className="nav-link">Journal</Link>
//             <Link to="/management" className="nav-link">Management</Link>
//             <Link to="/contact" className="nav-link">Contact Us</Link>
//           </nav>
//         </div>
//       </header>

//       {/* 🔹 Mobile Navigation Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden bg-[#20232a] text-white px-6 py-4 space-y-3">
//           <Link to="/" className="block py-2 border-b border-gray-600">Home</Link>
//           <Link to="/publisher" className="block py-2 border-b border-gray-600">Distribution</Link>
//           <Link to="/special-agency" className="block py-2 border-b border-gray-600">Specialized Agencies</Link>
//           <Link to="/export-info" className="block py-2 border-b border-gray-600">Export Division</Link>
//           <Link to="/conference" className="block py-2 border-b border-gray-600">Conference Proceedings</Link>
//           <Link to="/journal" className="block py-2 border-b border-gray-600">Journal</Link>
//           <Link to="/management" className="block py-2 border-b border-gray-600">Management</Link>
//           <Link to="/contact" className="block py-2 border-b border-gray-600">Contact Us</Link>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
// import jwtDecode from "jwt-decode"; // To decode JWT token

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   // Function to check user login status
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decoded = jwtDecode(token);
//         setUser(decoded); // Store user details from token
//       } catch (error) {
//         console.error("Invalid token:", error);
//         localStorage.removeItem("token"); // Remove invalid token
//       }
//     }
//   }, []);

//   // Logout Function
//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Remove token from storage
//     setUser(null); // Clear user state
//     navigate("/"); // Redirect to home
//   };

//   return (
//     <>
//       {/* 🔹 Top Bar: Search & Auth/Profile Buttons */}
//       <div className="flex justify-between items-center bg-white shadow-md px-6 py-3">
//         {/* 🔹 Logo (Visible in Mobile View) */}
//         <div className="lg:hidden">
//           <img src="/images/alliedlogo.png" alt="Allied Publishers" className="h-10 w-auto" />
//         </div>

//         {/* 🔹 Search Bar */}
//         <div className="hidden md:flex items-center border border-gray-300 rounded-lg overflow-hidden w-72 transition duration-300 hover:shadow-md">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="p-2 w-full outline-none text-gray-700"
//           />
//           <button className="bg-[#75609c] hover:bg-[#5a497a] text-white px-3 py-2 transition duration-300">
//             <FaSearch />
//           </button>
//         </div>

//         {/* 🔹 Authentication or Profile Section */}
//         <div className="flex items-center gap-3">
//           {user ? (
//             <div className="flex items-center gap-3">
//               {/* Profile Circle with First Letter of Name */}
//               <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#75609c] text-white text-lg font-semibold uppercase">
//                 {user.id ? user.id.charAt(0) : "U"}
//               </div>

//               {/* Logout Button */}
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300 shadow-md hover:shadow-lg"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <>
//               <Link to="/login" className="text-[#20232a] underline transition duration-300 hover:text-black">
//                 Sign in
//               </Link>
//               <Link
//                 to="/register"
//                 className="bg-[#75609c] hover:bg-[#5a497a] text-white px-4 py-2 rounded-md transition duration-300 shadow-md hover:shadow-lg"
//               >
//                 Sign up
//               </Link>
//             </>
//           )}

//           {/* 🔹 Mobile Menu Toggle Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="lg:hidden text-[#20232a] text-xl focus:outline-none ml-3"
//           >
//             {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* 🔹 Navbar */}
//       <header className="bg-[#20232a] text-white shadow-md">
//         <div className="container mx-auto flex items-center justify-between py-3 px-6">
//           {/* 🔹 Logo */}
//           <div className="hidden lg:block">
//             <img src="/images/alliedlogo.png" alt="Allied Publishers" className="h-12 w-auto" />
//           </div>

//           {/* 🔹 Desktop Navigation */}
//           <nav className="hidden lg:flex space-x-6">
//             <Link to="/" className="nav-link">Home</Link>
//             <Link to="/publisher" className="nav-link">Distribution</Link>
//             <Link to="/special-agency" className="nav-link">Specialized Agencies</Link>
//             <Link to="/export-info" className="nav-link">Export Division</Link>
//             <Link to="/conference" className="nav-link">Conference Proceedings</Link>
//             <Link to="/journal" className="nav-link">Journal</Link>
//             <Link to="/management" className="nav-link">Management</Link>
//             <Link to="/contact" className="nav-link">Contact Us</Link>
//           </nav>
//         </div>
//       </header>

//       {/* 🔹 Mobile Navigation Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden bg-[#20232a] text-white px-6 py-4 space-y-3">
//           <Link to="/" className="block py-2 border-b border-gray-600">Home</Link>
//           <Link to="/publisher" className="block py-2 border-b border-gray-600">Distribution</Link>
//           <Link to="/special-agency" className="block py-2 border-b border-gray-600">Specialized Agencies</Link>
//           <Link to="/export-info" className="block py-2 border-b border-gray-600">Export Division</Link>
//           <Link to="/conference" className="block py-2 border-b border-gray-600">Conference Proceedings</Link>
//           <Link to="/journal" className="block py-2 border-b border-gray-600">Journal</Link>
//           <Link to="/management" className="block py-2 border-b border-gray-600">Management</Link>
//           <Link to="/contact" className="block py-2 border-b border-gray-600">Contact Us</Link>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/auth/logout", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        alert("Logout successful.");
        navigate("/");
      } else {
        const data = await response.json();
        alert(`Logout failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  

  return (
    <>
      {/* Search Bar & Auth Buttons */}
      <div className="flex justify-end items-center bg-white shadow-md px-6 py-3">
        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-72 mr-4 transition duration-300 hover:shadow-md">
          <input type="text" placeholder="Search..." className="p-2 w-full outline-none text-gray-700" />
          <button className="bg-[#75609c] hover:bg-[#5a497a] text-white px-3 py-2 transition duration-300">
            <FaSearch />
          </button>
        </div>

        {/* If NOT logged in, show Sign-in & Sign-up */}
        {!user ? (
          <div className="flex items-center gap-2">
            <Link to="/login" className="text-[#20232a] underline transition duration-300 hover:text-black">
              Sign in
            </Link>
            <Link to="/register" className="bg-[#75609c] hover:bg-[#5a497a] text-white px-4 py-2 rounded-md transition duration-300 shadow-md hover:shadow-lg">
              Sign up
            </Link>
          </div>
        ) : (
          // If Logged In -> Show Profile Circle & Logout Button
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#75609c] text-white flex justify-center items-center rounded-full text-lg font-semibold uppercase">
              {user.name.charAt(0)}
            </div>
            <button onClick={handleLogout} className="bg-[#75609c] hover:bg-[#5a497a] text-white px-4 py-2 rounded-md transition duration-300 shadow-md hover:shadow-lg">
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Navbar */}
      <header className="bg-[#20232a] text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-3 px-6">
          {/* Logo */}
          <div>
            <img src="/images/alliedlogo.png" alt="Allied Publishers" className="h-12 w-auto" />
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex space-x-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/publisher" className="nav-link">Distribution</Link>
            <Link to="/special-agency" className="nav-link">Specialized Agencies</Link>
            <Link to="/export-info" className="nav-link">Export Division</Link>
            <Link to="/conference" className="nav-link">Conference Proceedings</Link>
            <Link to="/journal" className="nav-link">Journal</Link>
            <Link to="/management" className="nav-link">Management</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white focus:outline-none">
            ☰
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
