import { fetchAvailableCars } from "@/lib/cars/data";
import CarCard from "../shared/CarCard";
import Link from "next/link";

const AvailableCars = async () => {
  const cars = await fetchAvailableCars();

  return (
    <div className="py-16 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Available Cars
          </h2>
          <p className="text-gray-500 mt-2">
            Choose your favorite car and start your journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars?.map((car) => (
            <CarCard key={car?._id} car={car} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="/explore-cars"
            className="px-7 py-3 rounded-xl bg-black text-white text-sm font-medium
            hover:bg-gray-800 transition duration-300 shadow-md"
          >
            Explore All Cars →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvailableCars;
