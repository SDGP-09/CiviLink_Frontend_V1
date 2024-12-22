"use client";

import React from "react";

interface ConsultantLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

const ConsultantLayout: React.FC<ConsultantLayoutProps> = ({ children, sidebar }) => {
  return (
    <div className="bg-canvasWhite rounded-lg shadow-md flex flex-col h-full">
      {/* Header Section */}
      <header className="flex justify-between items-center p-6 border-b border-gray-200 bg-blue-50 rounded-t-lg">
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-gray-900">
            <span className="text-2xl">←</span> {/* Back button */}
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Consultant Profile</h1>
            <p className="text-sm text-gray-600">
              Detailed information about the consultant
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-500 text-sm">CiviLink - Sri Lankan Largest Construction Network</p>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col md:flex-row">
        {/* Left Content */}
        <main className="flex-1 p-6">{children}</main>

        {/* Right Sidebar */}
        <aside className="w-full md:w-1/3 bg-gray-50 border-t md:border-t-0 md:border-l border-gray-200 p-6">
          {sidebar}
        </aside>
      </div>
    </div>
  );
};

export default ConsultantLayout;
