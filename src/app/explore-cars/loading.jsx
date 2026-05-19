import React from "react";

const Loading = () => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className="w-full max-w-7xl">
        {/* Title Skeleton */}
        <div className="text-center mb-10 space-y-3">
          <div className="h-6 w-52 bg-gray-200 rounded mx-auto animate-pulse"></div>
          <div className="h-4 w-72 bg-gray-200 rounded mx-auto animate-pulse"></div>
        </div>

        {/* Cards Skeleton Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-72 rounded-2xl bg-gray-100 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
