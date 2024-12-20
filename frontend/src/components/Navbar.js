import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-xl font-bold text-purple-600 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full mr-2"></div>
        <span>Logo</span>
      </div>
      <nav className="space-x-4">
        <a href="#home" className="text-gray-600 hover:text-purple-600">
          Home
        </a>
        <a href="#distribution" className="text-gray-600 hover:text-purple-600">
          Distribution
        </a>
        <a href="#specializeda_gencies" className="text-gray-600 hover:text-purple-600">
          Specialized Agencies
        </a>
        <a href="#export_division" className="text-gray-600 hover:text-purple-600">
          Export Division
        </a>
        <a href="#contact" className="text-gray-600 hover:text-purple-600">
          Contact Us
        </a>
      </nav>
      <div className="space-x-2">
        <button className="text-purple-600 hover:underline">Sign in</button>
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Navbar;


