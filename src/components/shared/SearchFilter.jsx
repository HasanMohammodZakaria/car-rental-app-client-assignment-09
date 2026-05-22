"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback, useEffect } from "react";

const SearchFilter = ({ carTypes = [] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    setSearch(searchParams.get("search") || "");
    setType(searchParams.get("type") || "");
  }, [searchParams]);

  const updateURL = useCallback(
    (newSearch, newType) => {
      const params = new URLSearchParams();

      if (newSearch) params.set("search", newSearch);

      if (newType) params.set("type", newType);
      const query = params.toString();
      router.push(query ? `/explore-cars?${query}` : "/explore-cars");
    },
    [router],
  );

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    updateURL(value, type);
  };

  const handleType = (e) => {
    const value = e.target.value;
    setType(value);
    updateURL(search, value);
  };

  const handleReset = () => {
    setSearch("");
    setType("");
    router.push("/explore-cars");
  };

  return (
    <div className="w-full mb-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search by car name..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        </div>

        {/* Type Dropdown — MongoDB থেকে আসা types */}
        <select
          value={type}
          onChange={handleType}
          className="w-full sm:w-44 px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 cursor-pointer"
        >
          <option value="">All Types</option>
          {carTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        {/* Reset Button */}
        {(search || type) && (
          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-4 py-2.5 bg-red-50 text-red-500 border border-red-200 rounded-lg text-sm font-medium hover:bg-red-100 transition duration-200 cursor-pointer"
          >
            Reset
          </button>
        )}
      </div>

      {/* Active Filter Tags */}
      {(search || type) && (
        <div className="flex flex-wrap gap-2 mt-3">
          {search && (
            <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full border border-blue-200">
              🔍 {search}
            </span>
          )}
          {type && (
            <span className="px-3 py-1 bg-green-50 text-green-600 text-xs rounded-full border border-green-200">
              🚗 {type}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchFilter;
