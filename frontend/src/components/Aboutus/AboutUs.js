// import React from "react";

// const AboutUs = () => {
//   return (
//     <section id="about-us" className="p-8 md:p-16 bg-white">
//       <h1 className="text-5xl text-center font-bold text-gray-800 mb-4">About Us</h1>
//       <div className="flex flex-col md:flex-row items-center md:items-start">
//         {/* About Us Image */}
//         <img
//           src="https://static.vecteezy.com/system/resources/thumbnails/041/509/305/small_2x/ai-generated-antique-styled-books-arranged-neatly-on-wooden-shelves-concept-of-antiquarian-books-classic-literature-and-home-library-aesthetics-photo.jpeg" 
//           alt="About Us"
//           className="w-1/2 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4 rounded"

//         />
//         {/* About Us Text */}
//         <div className="md:w-1/2 space-y-4">
//           <p className="text-gray-600">
//             Welcome to our bookstore! We are dedicated to providing a curated selection of books for all ages and interests. 
//             Whether you're a student, a parent, or an avid reader, we have something for everyone.
//           </p>
//           <p className="text-gray-600">
//             Our mission is to inspire and educate through our collection, offering quality and variety that you can trust. 
//             Explore our collection and discover the joy of reading!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;
// AboutUs.jsx
import React from 'react';
import './Aboutus.css'; // Import the CSS file

const AboutUs = () => {
  return (
    <section id="about-us">
      <h1>About Us</h1>
      <div className="about-us-content">
        {/* About Us Image */}
        <img
          src="https://www.dropbox.com/scl/fi/wynbyixxetjsxc4def4i1/award-pic.jpg?rlkey=is0qurzu6y5j4k0xrft6xwht7&raw=1
          "
          alt="About Us"
          className="about-us-image"
        />
        {/* About Us Text */}
        <div className="about-us-text">
          <p>
          Established in 1934 by M. Graham Brash, the Company was acquired by late Mr. R.N. Sachdev, founder
Chairman of Allied Publishers in 1947. Thus started a wholly Indian management, under his inspiring
stewardship, and began “The journey of a thousand miles…”
Step by step, from humble beginnings, grew an elaborate network of four branch offices situated in the
metro cities and state capitals, supported by Resident Marketing Executives in major University
towns—all equipped with fully computerized systems to offer prompt and efficient service.
          </p>
          <p>
            Our mission is to inspire and educate through our collection, offering quality and variety that you can trust.
            Explore our collection and discover the joy of reading!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
