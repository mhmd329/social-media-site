import React, { useState } from "react";
import { FaHome, FaNewspaper, FaTimes,FaArrowRight } from "react-icons/fa";

const LeftBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* زر فتح القائمة في الموبايل */}
      <button
        className="fixed top-80 left-0 md:hidden bg-blue-400 text-white p-2 rounded-full shadow-lg z-50 transition-transform duration-300 hover:scale-110"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <FaTimes className="text-xl" /> : <FaArrowRight className="text-xl" />}
      </button>

      {/* الشريط الجانبي */}
      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-t from-blue-500 to-blue-300 text-white p-5 shadow-lg z-40 transition-transform duration-300 ease-in-out
          ${isExpanded ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:w-24 lg:w-32`}
      >
        {/* العنوان في الشاشات الكبيرة */}
        <h2 className="hidden lg:block text-xl font-bold text-center mb-6">Dashboard</h2>

        <ul className="space-y-6 mt-10">
          <li className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition cursor-pointer">
            <FaHome className="text-2xl" />
            <span className="hidden lg:inline text-lg font-semibold">Home</span>
          </li>
          <li className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition cursor-pointer">
            <FaNewspaper className="text-2xl" />
            <span className="hidden lg:inline text-lg font-semibold">News</span>
          </li>
        </ul>
      </div>

      {/* خلفية شفافة عند فتح القائمة في الموبايل */}
      {isExpanded && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-30 md:hidden"
          onClick={() => setIsExpanded(false)}
        ></div>
      )}
    </>
  );
};

export default LeftBar;
