import Image from "next/image";
import {
  FaCar,
  FaChair,
  FaMapMarkerAlt,
  FaUser,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

import { fetchSingleCar } from "@/lib/cars/data";
import { BookingFormModal } from "@/components/BookingFormModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
export const dynamic = "force-dynamic";

const CarDetailsPage = async ({ params }) => {
  const { id } = await params;

  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;

  const car = await fetchSingleCar(id);

  const {
    _id,
    imageUrl,
    carName,
    dailyRentPrice,
    carType,
    seatCapacity,
    pickupLocation,
    description,
    availabilityStatus,
    bookedCount,
    ownerName,
    ownerEmail,
    fleetAddress,
  } = car;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* LEFT SIDE IMAGE */}
        <div className="relative w-full h-87.5 md:h-125 overflow-hidden rounded-3xl shadow-xl border">
          <Image
            src={imageUrl}
            alt={carName}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>

        {/* RIGHT SIDE DETAILS CARD */}
        <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-lg">
          {/* Car Type */}
          <span className="inline-block bg-[#F97316] text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
            {carType}
          </span>

          {/* Car Name */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {carName}
          </h1>

          {/* Price */}
          <div className="flex items-center gap-2 mb-6">
            <FaCar className="text-primary text-xl" />
            <h2 className="text-2xl font-bold text-primary">
              ${dailyRentPrice}
              <span className="text-base text-gray-500 font-medium">
                / Per Day
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

          {/* INFO LIST */}
          <div className="space-y-4">
            {/* Booked Count */}
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
              <FaUsers className="text-primary text-lg" />
              <p className="text-gray-700 font-medium">
                Booked{" "}
                <span className="font-bold text-black">{bookedCount || 0}</span>{" "}
                {bookedCount === 1 ? "times" : "time"}
              </p>
            </div>

            {/* Seat Capacity */}
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
              <FaChair className="text-primary text-lg" />
              <p className="text-gray-700 font-medium">
                {seatCapacity} Seats Capacity
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
              <FaMapMarkerAlt className="text-primary text-lg" />
              <p className="text-gray-700 font-medium">{pickupLocation}</p>
            </div>

            {/* Owner */}
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
              <FaUser className="text-primary text-lg" />
              <div>
                <p className="font-semibold text-gray-800">
                  {ownerName || "Fleet Owner"}
                </p>
                <p className="text-sm text-gray-500">{ownerEmail}</p>
                <p className="text-sm text-gray-500">
                  {fleetAddress || "Local Fleet Address"}
                </p>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
              <FaCheckCircle className="text-green-500 text-lg" />

              <span
                className={`font-semibold ${
                  availabilityStatus === "available"
                    ? "text-green-600"
                    : "text-[#F97316]"
                }`}
              >
                {availabilityStatus}
              </span>
            </div>
          </div>

          {/* BUTTON */}
          <BookingFormModal car={car} />
        </div>
      </div>
    </section>
  );
};

export default CarDetailsPage;
