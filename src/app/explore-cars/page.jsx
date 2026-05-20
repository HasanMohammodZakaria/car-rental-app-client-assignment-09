import CarCard from "@/components/shared/CarCard";
import { fetchCars } from "@/lib/cars/data";

const ExploreCarsPage = async () => {
  const cars = await fetchCars();
  //console.log(cars);
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className="w-full max-w-7xl">
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Available Cars
          </h1>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Choose your perfect car for your journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars?.map((car) => (
            <CarCard key={car?._id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCarsPage;
