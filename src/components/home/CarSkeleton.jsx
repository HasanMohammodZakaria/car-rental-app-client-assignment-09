"use client";

export default function CarSkeleton() {
  return (
    <div className="py-16 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="h-10 w-64 bg-gray-200 rounded mx-auto animate-pulse" />
          <div className="h-4 w-80 bg-gray-200 rounded mx-auto mt-4 animate-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-64 bg-gray-200 animate-pulse rounded-xl"
              />
            ))}
        </div>
      </div>
    </div>
  );
}
