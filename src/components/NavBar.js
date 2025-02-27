import React, { useState } from "react";
import { FaHome, FaNewspaper, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/icon/5.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r mx-auto sticky right-0 left-0 top-0 from-blue-400 to-blue-200 text-white p-4 shadow-md max-w-[700px] z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          <li className="flex items-center space-x-2 hover:text-gray-300 transition">
            <FaHome className="text-2xl" />
            <a href="#">Home Page</a>
          </li>
          <li className="flex items-center space-x-2 hover:text-gray-300 transition">
            <FaNewspaper className="text-2xl" />
            <a href="#">News Feed</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none transition-transform duration-300 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Navigation with Glassmorphism Effect */}
      <ul
        className={`fixed top-0 right-0 h-full w-64 p-6 bg-blue-200 backdrop-blur-lg shadow-lg border-l border-white/10 text-white transition-transform duration-500 ease-in-out ${
          isOpen ? "z-10 translate-x-0" : "z-10 translate-x-full"
        }`}
      >
        <li className="flex items-center justify-between mb-6">
          <span className="text-xl font-semibold">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <FaTimes className="text-3xl hover:text-gray-300 transition" />
          </button>
        </li>
        <li className="flex items-center space-x-3 p-4 rounded-lg hover:bg-white/10 transition">
          <FaHome className="text-2xl" />
          <a href="#" className="text-lg">Home Page</a>
        </li>
        <li className="flex items-center space-x-3 p-4 rounded-lg hover:bg-white/10 transition">
          <FaNewspaper className="text-2xl" />
          <a href="#" className="text-lg">News Feed</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
