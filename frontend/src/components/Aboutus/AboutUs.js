// import React from 'react';
// import './Aboutus.css'; // Import the CSS file

// const AboutUs = () => {
//   return (
//     <section id="about-us">
//       <h1>ABOUT US</h1>
//       <div className="about-us-content">
//         {/* About Us Image */}
//         <img
//           src="https://www.dropbox.com/scl/fi/wynbyixxetjsxc4def4i1/award-pic.jpg?rlkey=is0qurzu6y5j4k0xrft6xwht7&raw=1
//           "
//           />
//           <img
//           src="/images/Final pic.jpg
//           "
//           alt="About Us"
//           className="about-us-image"
//         />
//         {/* About Us Text */}
//         <div className="about-us-text">
//           <p>
//           Established in 1934 by M. Graham Brash, the Company was acquired by late Mr. R.N. Sachdev, founder
// Chairman of Allied Publishers in 1947. Thus started a wholly Indian management, under his inspiring
// stewardship, and began “The journey of a thousand miles…”
// Step by step, from humble beginnings, grew an elaborate network of four branch offices situated in the
// metro cities and state capitals, supported by Resident Marketing Executives in major University
// towns—all equipped with fully computerized systems to offer prompt and efficient service.
//           </p>
//           <p>
//             Our mission is to inspire and educate through our collection, offering quality and variety that you can trust.
//             Explore our collection and discover the joy of reading!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;


import React from 'react';
import './Aboutus.css'; // Import the CSS file

const AboutUs = () => {
  return (
    <section id="about-us">
      <h1>ABOUT US</h1>
      <div className="about-us-content">
        {/* About Us Images */}
        <img
          src="https://www.dropbox.com/scl/fi/wynbyixxetjsxc4def4i1/award-pic.jpg?rlkey=is0qurzu6y5j4k0xrft6xwht7&raw=1"
          alt="Award Pic"
          className="about-us-image"
        />
        <img
          src="/images/Final pic.jpg"
          alt="About Us"
          className="about-us-image about-us-image-large" // Added a new class
        />
        {/* About Us Text */}
        <div className="about-us-text">
          <p>
            Established in 1934 by M. Graham Brash, the Company was acquired by late Mr. R.N. Sachdev, 
            founder Chairman of Allied Publishers in 1947. Thus started a wholly Indian management, 
            under his inspiring stewardship, and began “The journey of a thousand miles…” Step by 
            step, from humble beginnings, grew an elaborate network of four branch offices situated 
            in the metro cities and state capitals, supported by Resident Marketing Executives in 
            major University towns—all equipped with fully computerized systems to offer prompt and 
            efficient service.
          </p>
          <p>
            Our mission is to inspire and educate through our collection, offering quality and variety 
            that you can trust. Explore our collection and discover the joy of reading!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
