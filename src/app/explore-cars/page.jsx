import CarCard from "@/components/shared/CarCard";
import SearchFilter from "@/components/shared/SearchFilter";
import { fetchCars, fetchCarTypes } from "@/lib/cars/data";

const ExploreCarsPage = async ({ searchParams }) => {
  const resolvedParams = await searchParams;
  const search = resolvedParams?.search || "";
  const type = resolvedParams?.type || "";

  // fetch both together
  const [cars, carTypes] = await Promise.all([
    fetchCars(search, type),
    fetchCarTypes(),
  ]);

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            Available Cars
          </h1>
          <p className="text-gray-500 mt-2 text-xs sm:text-sm lg:text-base">
            Choose your perfect car for your journey
          </p>
        </div>

        {/* Filter */}
        <SearchFilter carTypes={carTypes} />

        {/* Result Count */}
        <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
          <span className="font-semibold text-gray-600">
            {cars?.length || 0}
          </span>{" "}
          cars found
        </p>

        {/* Car Grid */}
        {cars?.length > 0 ? (
          <div className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cars.map((car) => (
              <CarCard key={car?._id} car={car} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 sm:py-24 text-center">
            <span className="text-5xl sm:text-6xl mb-4">🚗</span>
            <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2">
              No cars found
            </h3>
            <p className="text-sm text-gray-400">
              Try searching with a different name or type
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExploreCarsPage;
