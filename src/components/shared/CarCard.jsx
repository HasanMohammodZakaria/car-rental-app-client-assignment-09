import Image from "next/image";
const CarCard = ({ car }) => {
  const { imageUrl, carName, dailyRentPrice, carType, seatCapacity } = car;
  return (
    <div className="group relative w-full">
      <div className="absolute -inset-x-0.5 rounded-2xl bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-60 group-hover:opacity-100 blur-sm transition"></div>

      <div className="relative h-full rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
        <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden">
          <Image
            src={imageUrl}
            alt={carName}
            fill
            className="object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        <div className="p-5">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
            {carName}
          </h2>

          <div className="mt-3 space-y-1 text-sm text-gray-600">
            <p>
              💰 Daily Rent:{" "}
              <span className="font-medium text-gray-900">
                ${dailyRentPrice}
              </span>
            </p>
            <p>🚘 Type: {carType}</p>
            <p>🪑 Seats: {seatCapacity}</p>
          </div>

          <button
            className="mt-5 w-full py-2.5 rounded-xl bg-black text-white text-sm font-medium
            hover:bg-gray-800 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
