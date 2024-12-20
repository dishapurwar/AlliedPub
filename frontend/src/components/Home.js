

// import React from "react";
// import Navbar from "./Navbar"; // Adjust the path based on your file structure
// import Carousel from "./Carousel"; // Adjust the path based on your file structure

// const Home = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Navbar */}
//       <Navbar />

//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
//         {/* Text Content */}
//         <div className="md:w-1/2 space-y-6">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
//             Discover Our Books Collection
//           </h1>
//           <p className="text-gray-600">
//             Explore a variety of books to suit your needs. From school textbooks to supplementary guides, we have it all.
//           </p>
//           <div className="space-x-4">
//             <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700">
//               Shop Now
//             </button>
//             <a href="#learn-more" className="text-purple-600 hover:underline">
//               Learn more
//             </a>
//           </div>
//         </div>

//         {/* Carousel Section */}
//         <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
//           <Carousel />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import Navbar from "./Navbar"; // Adjust the path based on your file structure
import Carousel from "./Carousel"; // Adjust the path based on your file structure
import AboutUs from "./AboutUs"; // Import the AboutUs component

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Discover Our Books Collection
          </h1>
          <p className="text-gray-600">
            Explore a variety of books to suit your needs. From school textbooks to supplementary guides, we have it all.
          </p>
          <div className="space-x-4">
            <button
              className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700"
              onClick={() => document.getElementById("about-us").scrollIntoView({ behavior: "smooth" })}
            >
              About Us
            </button>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Carousel />
        </div>
      </section>

      {/* About Us Section */}
      <AboutUs />
    </div>
  );
};

export default Home;


