import React from "react";
import { FaBook, FaExternalLinkAlt } from "react-icons/fa";

export default function ResourcesCard({ title, description, link }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gradient-to-r from-white to-blue-50 border border-gray-200 m-4 transform transition duration-300 hover:scale-105">
      <div className="px-6 py-4">
        <div className="flex items-center mb-2">
          <FaBook className="text-blue-500 text-2xl mr-2" />
          <div className="font-bold text-xl text-gray-800">{title}</div>
        </div>
        <p className="text-gray-600 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Learn More
          <FaExternalLinkAlt className="ml-2" />
        </a>
      </div>
    </div>
  );
}
