import React from "react";
import "./globals.css";  

export default function Home() {
  return (

    <div className="container mx-auto p-4">
      <h1 className="text-4xl">Welcome to CiviLink</h1>
      <h2 className="text-3x1">Sri Lankan Largest Construction Network</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    <a href="/project" className="block bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src="/project.jpg"
        alt="Create Project"
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <h3 className="p-4 text-lg font-bold text-center">Create Project</h3>
    </a>

    <a href="/consultant" className="block bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src="/consultant.jpg"
        alt="Find Consultant"
        width={300}
        height={300}
        className="w-full h-48 object-cover"
      />
      <h3 className="p-4 text-lg font-bold text-center">Find Consultant</h3>
    </a>

    <a href="/contractor" className="block bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src="/contractor.jpg"
        alt="Find Contractor"
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <h3 className="p-4 text-lg font-bold text-center">Find Contractor</h3>
    </a>
  </div>
</div>

  );
}
