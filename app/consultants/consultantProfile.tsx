"use client";

import React from 'react';
import { FaSearch, FaArrowLeft } from 'react-icons/fa'; // Left arrow icon

const ConsultantProfile = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl">
        <header className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">CiviLink</h1>
            <p className="text-gray-600">Sri Lankan Largest Construction Network</p>
          </div>
          <div className="flex items-center">
            <button className="text-black mr-4">
              <FaArrowLeft className="text-black text-4xl transform scale-110" /> {/* Larger and fat arrowhead */}
            </button>
           <p className="text-3xl font-bold text-gray-800">Consultants</p>
          </div>
        </header>

        <div className="flex flex-col md:flex-row">
          {/* Left Content */}
          <div className="p-6 flex-1">
            <div className="mb-4 flex justify-between">
              <h2 className="text-xl  text-gray-700">Name</h2> {/* Normal color */}
              <p className="text-black font-semibold">Mr. Gunapala Samarasinghe</p> {/* Black color */}
            </div>
            <div className="mb-4 flex justify-between">
              <h2 className="text-xl  text-gray-700">Specialization</h2> {/* Normal color */}
              <p className="text-black font-semibold">Electrical Engineering</p> {/* Black color */}
            </div>
            <div className="mb-4 flex justify-between">
              <h2 className="text-xl  text-gray-700">Location</h2> {/* Normal color */}
              <p className="text-black font-semibold">Kaduwela</p> {/* Black color */}
            </div>
            <div className="mb-4 flex justify-between">
              <h2 className="text-xl  text-gray-700">Qualifications</h2> {/* Normal color */}
              <p className="text-black font-semibold">BSc in Electrical Engineering / Chartered Engineer</p> {/* Black color */}
            </div>
            <div className="mb-4 flex justify-between">
              <h2 className="text-xl  text-gray-700">Services</h2> {/* Normal color */}
              <p className="text-black font-semibold">Electrical Consultant / System Auditor / System Designer</p> {/* Black color */}
            </div>
            <div className="mb-4 flex justify-between">
              <h2 className="text-xl  text-gray-700">Minimum Project Value</h2> {/* Normal color */}
              <p className="text-black font-semibold">Rs. 5 Mn</p> {/* Black color */}
            </div>
            <div className="mb-4 flex justify-between">
              <h2 className="text-xl  text-gray-700">Professional Fee</h2> {/* Normal color */}
              <p className="text-black font-semibold">5% of Total Project Cost</p> {/* Black color */}
            </div>
            <div className="mb-4 flex justify-between">
              <h2 className="text-xl  text-gray-700">Platform Fee</h2> {/* Normal color */}
              <p className="text-black font-semibold">Rs. 3500.00</p> {/* Black color */}
            </div>
          </div>

          {/* Right Content */}
          <div className="p-6 flex flex-col items-center md:border-l border-gray-200">
            {/* Search Bar */}
            <div className="mb-6 w-full max-w-xs relative">
              <input
                type="text"
                placeholder="Search text here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10 "
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Consultant Picture (Square Border) */}
            <img
              src="/image 1.png"
              alt="Consultant"
              className="mb-6 w-40 h-40 object-cover border-2 border-gray-300"
            />

            {/* Request Consultation Button */}
            <button
              className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Request Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantProfile;

