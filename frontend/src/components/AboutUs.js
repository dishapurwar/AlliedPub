import React from "react";

const AboutUs = () => {
  return (
    <section id="about-us" className="p-8 md:p-16 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* About Us Image */}
        <img
          src="https://via.placeholder.com/400" // Replace with your image URL
          alt="About Us"
          className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-8"
        />
        {/* About Us Text */}
        <div className="md:w-1/2 space-y-4">
          <p className="text-gray-600">
            Welcome to our bookstore! We are dedicated to providing a curated selection of books for all ages and interests. 
            Whether you're a student, a parent, or an avid reader, we have something for everyone.
          </p>
          <p className="text-gray-600">
            Our mission is to inspire and educate through our collection, offering quality and variety that you can trust. 
            Explore our collection and discover the joy of reading!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
