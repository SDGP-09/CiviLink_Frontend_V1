"use client";

import React from "react";
import { FaSearch, FaArrowLeft } from "react-icons/fa";

const RequestConsultation = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl">
        <header className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">CiviLink</h1>
            <p className="text-gray-600">Sri Lankan Largest Construction Network</p>
          </div>
          <div className="flex items-center">
            <button className="text-black mr-4">
              <FaArrowLeft className="text-black text-4xl transform scale-110" />
            </button>
            <p className="text-3xl font-bold text-gray-800">Request Consultation</p>
          </div>
        </header>

        <div className="flex flex-col md:flex-row">
          {/* Left Form Section */}
          <div className="p-6 flex-1">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Requester Name</label>
                <div className="flex items-center space-x-2">
                  <select
                    className="border border-gray-300 rounded-md px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>Mr.</option>
                    <option>Mrs.</option>
                    <option>Ms.</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Project Type</label>
                <input
                  type="text"
                  placeholder="Project Type"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Location</label>
                <input
                  type="text"
                  placeholder="Project Location"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Project Estimation</label>
                <input
                  type="text"
                  placeholder="Project Estimation if available"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Project Time Frame Work</label>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm text-gray-500">Start</label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm text-gray-500">End</label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Project Information</label>
                <textarea
                  placeholder="Additional Project Details"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                //   rows="4"
                ></textarea>
              </div>
            </form>
          </div>

          {/* Right Section */}
          <div className="p-6 flex flex-col items-center md:border-l border-gray-200">
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
            <img
              src="/image 1.png"
              alt="Consultant"
              className="mb-6 w-40 h-40 object-cover border-2 border-gray-300 rounded"
            />

            {/* Request Consultation Button */}
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Request Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestConsultation;
