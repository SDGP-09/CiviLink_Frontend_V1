"use client";

import React from "react";
import { FaSearch, FaArrowLeft } from "react-icons/fa"; // Left arrow icon
import SidebarCalendar from "../components/SidebarCalendar/SidebarCalendar";

const ConsultantProfile = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg opacity-100 flex-1 w-full flex flex-col h-full">
      {/* Header Section */}
      <header className="p-6 border-b border-white flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">CiviLink</h1>
          <p className="text-gray-600">Sri Lankan Largest Construction Network</p>
        </div>
        <div className="flex items-center">
          <button className="text-black mr-4">
            <FaArrowLeft className="text-black text-4xl transform scale-110" />
          </button>
          <p className="text-3xl font-bold text-gray-800">Consultants</p>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left Content: Consultant Details */}
        <div className="p-6 flex-1">
          <div className="grid grid-cols-2 gap-y-4 gap-x-2">
            <p className="text-xl text-gray-700">Name</p>
            <p className="text-black font-semibold">Mr. Gunapala Samarasinghe</p>

            <p className="text-xl text-gray-700">Specialization</p>
            <p className="text-black font-semibold">Electrical Engineering</p>

            <p className="text-xl text-gray-700">Location</p>
            <p className="text-black font-semibold">Kaduwela</p>

            <p className="text-xl text-gray-700">Qualifications</p>
            <p className="text-black font-semibold mb-4">
              BSc in Electrical Engineering / Chartered Engineer
            </p>

            <p className="text-xl text-gray-700">Services</p>
            <p className="text-black font-semibold">
              Electrical Consultant / System Auditor / System Designer
            </p>

            <p className="text-xl text-gray-700">Minimum Project Value</p>
            <p className="text-black font-semibold">Rs. 5 Mn</p>

            <p className="text-xl text-gray-700">Professional Fee</p>
            <p className="text-black font-semibold">5% of Total Project Cost</p>

            <p className="text-xl text-gray-700">Platform Fee</p>
            <p className="text-black font-semibold">Rs. 3500.00</p>
          </div>
        </div>

        {/* Right Content: Profile Picture, Calendar, Search, and Button */}
        <div className="p-6 flex flex-col items-center md:border-l border-gray-200 bg-white">
          {/* Search Bar */}
          <div className="mb-6 w-full max-w-xs relative">
            <input
              type="text"
              placeholder="Search text here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Consultant Picture */}
          <div className="mb-6">
            <img
              src="/image 1.png"
              alt="Consultant"
              className="w-60 h-60 object-cover border-2 border-gray-300 rounded"
            />
          </div>

          {/* Calendar */}
          <div className="w-60 h-60 bg-blue-600 mt-5">
            <SidebarCalendar />
          </div>

          {/* Request Consultation Button */}
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Request Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultantProfile;
