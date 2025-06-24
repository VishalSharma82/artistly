"use client";
import { useState } from "react";

export default function FilterBlock({ onFilterChange }) {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const handleFilter = () => {
    onFilterChange({ category, location });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8 bg-white p-4 rounded-xl shadow-md">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
      >
        <option value="">All Categories</option>
        <option value="Singer">Singer</option>
        <option value="DJ">DJ</option>
        <option value="Dancer">Dancer</option>
        <option value="Speaker">Speaker</option>
      </select>

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
      >
        <option value="">All Locations</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Hyderabad">Hyderabad</option>
      </select>

      <button
        onClick={handleFilter}
        className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-green-500 transition font-semibold shadow-sm"
      >
        Apply Filters
      </button>
    </div>
  );
}
