import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      {/* Search Bar & Auth Buttons */}
      <div className="flex justify-end items-center bg-white shadow-md px-6 py-3">
        {/* Search Bar (Just Left of Sign-in) */}
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-72 mr-4 transition duration-300 hover:shadow-md">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 w-full outline-none text-gray-700"
          />
          <button className="bg-[#75609c] hover:bg-[#5a497a] text-white px-3 py-2 transition duration-300">
            <FaSearch />
          </button>
        </div>

        {/* Sign-in & Sign-up Buttons */}
        <div className="flex items-center gap-2">
          <button className="text-[#20232a] underline transition duration-300 hover:text-black">
            Sign in
          </button>
          <button className="bg-[#75609c] hover:bg-[#5a497a] text-white px-4 py-2 rounded-md transition duration-300 shadow-md hover:shadow-lg">
            Sign up
          </button>
        </div>
      </div>

      {/* Navbar */}
      <header className="bg-[#20232a] text-white shadow-md">
        <div className="container mx-auto flex items-center justify-between py-3 px-6">
          {/* Logo */}
          <div>
            <img
              src="/images/alliedlogo.png"
              alt="Allied Publishers"
              className="h-12 w-auto"
            />
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex space-x-6">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/publisher" className="nav-link">
              Distribution
            </Link>
            <Link to="/special-agency" className="nav-link">
              Specialized Agencies
            </Link>
            <Link to="/export-info" className="nav-link">
              Export Division
            </Link>
            <Link to="/conference" className="nav-link">
              Conference Proceedings
            </Link>
            <Link to="/journal" className="nav-link">
              Journal
            </Link>
            <Link to="/management" className="nav-link">
              Management
            </Link>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
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
