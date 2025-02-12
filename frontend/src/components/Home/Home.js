// // import React from "react";
// // import Navbar from "../Navbar/Navbar"; // Adjust the path based on your file structure
// // import Carousel from "../Carousel"; // Adjust the path based on your file structure
// // import AboutUs from "../Aboutus/AboutUs"; // Import the AboutUs component
// // import Bestsellers from "../Bestseller/Bestseller";
// // import Author from "../FeaturedAuthor/Author";
// // import Footer from "../Footer/Fotter";
// // import { FaMapMarkerAlt, FaMapPin } from 'react-icons/fa'; // Import both icons

// // const Home = () => {
// //   return (
// //     <div className="home-container min-h-screen">
// //       {/* Navbar */}
// //       <Navbar />
// //       <div className="flex items-center ml-24 mt-2">
// //         <p className="text-gray-600 font-semibold mr-5">Available Locations :</p>
// //         <div className="location-list flex items-center space-x-7">
// //           <span className="location-item flex items-center text-gray-800 hover:text-red-500 transition">
// //             <FaMapPin className="text-red-500 text-xl mr-1" />
// //             Delhi
// //           </span>
// //           <span className="location-item flex items-center text-gray-800 hover:text-red-500 transition">
// //             <FaMapPin className="text-red-500 text-xl mr-1" />
// //             Lucknow
// //           </span>
// //           <span className="location-item flex items-center text-gray-800 hover:text-red-500 transition">
// //             <FaMapPin className="text-red-500 text-xl mr-1" />
// //             Kolkata
// //           </span>
// //           <span className="location-item flex items-center text-gray-800 hover:text-red-500 transition">
// //             <FaMapPin className="text-red-500 text-xl mr-1" />
// //             Mumbai
// //           </span>
// //           <span className="location-item flex items-center text-gray-800 hover:text-red-500 transition">
// //             <FaMapPin className="text-red-500 text-xl mr-1" />
// //             Nagpur
// //           </span>
// //           <span className="location-item flex items-center text-gray-800 hover:text-red-500 transition">
// //             <FaMapPin className="text-red-500 text-xl mr-1" />
// //             Ahmedabad
// //           </span>
// //           <span className="location-item flex items-center text-gray-800 hover:text-red-500 transition">
// //             <FaMapPin  className="text-red-500 text-xl mr-1" />
// //             Hyderabad
// //           </span>
// //           <span className="location-item flex items-center text-gray-800 hover:text-red-500 transition">
// //             <FaMapPin className="text-red-500 text-xl mr-1" /> {/* Use FaMapPin here */}
// //             Chennai
// //           </span>
// //           <span className="location-item flex items-center text-gray-800 hover:text-red-500 transition">
// //             <FaMapPin className="text-red-500 text-xl mr-1" />
// //             Bangalore
// //           </span>
// //         </div>
// //       </div>
// //       {/* Hero Section */}
// //       <section className="hero-section flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-slate-200 shadow-lg rounded-lg">
// //         {/* Text Content */}
// //         <div className="text-content md:w-1/2 space-y-6">
// //           <h1 className="hero-title text-4xl md:text-5xl font-bold text-gray-800">
// //             Discover Our Books Collection
// //           </h1>
// //           <p className="hero-description text-gray-600 text-lg">
// //             Explore a variety of books to suit your needs. From school textbooks to supplementary guides, we have it all.
// //           </p>
// //           <blockquote className="quote italic text-gray-500 border-l-4 border-green-500 pl-4">
// //             "Knowledge with an edge."
// //           </blockquote>
// //           <button 
// //   id="about" 
// //   style={{
// //     backgroundColor: '#75609c',
// //     color: 'white',
// //     padding: '0.5rem 1rem',
// //     border: 'none',
// //     borderRadius: '0.25rem',
// //     cursor: 'pointer',
// //     transition: 'background-color 0.3s'
// //   }}
// // >
// //   About us<span className="arrow">→</span>
// // </button>

// //         </div>

// //         {/* Carousel Section */}
// //         <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
// //           <Carousel />
// //         </div>
// //       </section>

// //       {/* About Us Section */}
// //       <AboutUs />
// //       <Bestsellers />
// //       <Author />
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Home;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Navbar/Navbar"; // Adjust the path based on your file structure
// import Carousel from "../Carousel"; // Adjust the path based on your file structure
// import AboutUs from "../Aboutus/AboutUs"; // Import the AboutUs component
// import Bestsellers from "../Bestseller/Bestseller";
// import Author from "../FeaturedAuthor/Author";
// import Footer from "../Footer/Fotter";
// import { FaMapPin } from "react-icons/fa"; // Import the icon

// const Home = () => {
//   const navigate = useNavigate(); // Hook for navigation

//   return (
//     <div className="home-container min-h-screen">
//       {/* Navbar */}
//       <Navbar />

//       {/* Location Section */}
//       <div className="flex  ml-24 mt-2">
//         <p className="text-gray-600 font-semibold mr-10 ml-28">Available Locations :</p>
//         <div className="location-list flex items-center space-x-7">
//           <span className="location-item flex items-center text-gray-800 hover:text-red-500 transition">
//             <FaMapPin className="text-red-500 text-xl mr-1 ml-12" />
//             Noida
//           </span>
//           <span className="location-item flex items-center text-gray-800 hover:text-red-500 transition">
//             <FaMapPin className="text-red-500 text-xl mr-1 ml-12" />
//             Kolkata
//           </span>
//           <span className="location-item flex items-center text-gray-800 hover:text-red-500 transition">
//             <FaMapPin className="text-red-500 text-xl mr-1 ml-12" />
//             Mumbai
//           </span>
          
//           <span className="location-item flex items-center text-gray-800 hover:text-red-500 transition">
//             <FaMapPin className="text-red-500 text-xl mr-1 ml-12" />
//             Chennai
//           </span>
          
//         </div>
//       </div>

//       {/* Hero Section */}
//       <section className="hero-section flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-slate-200 shadow-lg rounded-lg">
//         {/* Text Content */}
//         <div className="text-content md:w-1/2 space-y-6">
//           <h1 className="hero-title text-4xl md:text-5xl font-bold text-gray-800">
//             Discover Our Books Collection
//           </h1>
//           <p className="hero-description text-gray-600 text-lg">
//             Explore a variety of books to suit your needs.
//           </p>
//           <blockquote className="quote italic text-gray-500 border-l-4 border-green-500 pl-4">
//             "Knowledge with an edge."
//           </blockquote>
//           <button
//             id="about"
//             style={{
//               backgroundColor: "#75609c",
//               color: "white",
//               padding: "0.5rem 1rem",
//               border: "none",
//               borderRadius: "0.25rem",
//               cursor: "pointer",
//               transition: "background-color 0.3s",
//             }}
//             onClick={() => navigate("/about-us")}
//           >
//             About us<span className="arrow">→</span>
//           </button>
//         </div>

//         {/* Carousel Section */}
//         <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
//           <Carousel />
//         </div>
//       </section>

//       {/* About Us Section */}
//       <AboutUs />
//       <Bestsellers />
//       <Author />
//       <Footer />
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaMapPin } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Carousel from "../Carousel";
import AboutUs from "../Aboutus/AboutUs";
import Bestsellers from "../Bestseller/Bestseller";
import Author from "../FeaturedAuthor/Author";
import Footer from "../Footer/Fotter";
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5001";
;
const Home = () => {
  const [locations, setLocations] = useState([]);
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  // 📍 Fetch Locations
  useEffect(() => {
    axios.get("http://localhost:5001/api/home/locations")
      .then((res) => setLocations(res.data))
      .catch((err) => console.log(err));
  }, []);

  // 📚 Fetch Bestsellers
  useEffect(() => {
    axios.get("http://localhost:5001/api/home/bestsellers")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  // ✍ Fetch Featured Authors
  useEffect(() => {
    axios.get("http://localhost:5001/api/home/authors")
      .then((res) => setAuthors(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home-container min-h-screen">
      <Navbar />

      {/* 📍 Locations Section */}
      <div className="flex ml-24 mt-2">
        <p className="text-gray-600 font-semibold mr-10 ml-28">Available Locations :</p>
        <div className="location-list flex items-center space-x-7">
          {locations.map((loc, index) => (
            <span key={index} className="location-item flex items-center text-gray-800 hover:text-red-500 transition">
              <FaMapPin className="text-red-500 text-xl mr-1 ml-12" />
              {loc.name}
            </span>
          ))}
        </div>
      </div>

      {/* 🎡 Hero Section */}
      <section className="hero-section flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-slate-200 shadow-lg rounded-lg">
        <div className="text-content md:w-1/2 space-y-6">
          <h1 className="hero-title text-4xl md:text-5xl font-bold text-gray-800">
            Discover Our Books Collection
          </h1>
          <p className="hero-description text-gray-600 text-lg">
            Explore a variety of books to suit your needs.
          </p>
          <blockquote className="quote italic text-gray-500 border-l-4 border-green-500 pl-4">
            "Knowledge with an edge."
          </blockquote>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Carousel />
        </div>
      </section>
      <AboutUs />

      {/* 📚 Bestsellers Section */}
    <Bestsellers/>

      {/* ✍ Featured Authors Section */}
      {/* ✍ Featured Authors Section */}
      <div id="Authors">
        <Author authors={authors} /> {/* Pass the authors data to FeaturedAuthor */}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
