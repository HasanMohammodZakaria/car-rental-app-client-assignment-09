"use client";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { fetchMyAddedCars } from "@/lib/cars/data";
import Image from "next/image";
import EditCarModal from "@/components/shared/EditCarModal";
import { DeleteAlert } from "@/components/shared/DeleteAlert";
import { Card } from "@heroui/react";
import { CgTrashEmpty } from "react-icons/cg";

const MyAddedCarsPage = () => {
  const { data: session } = authClient.useSession();
  const userId = session?.user?.id;

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      fetchMyAddedCars(userId).then((data) => {
        setCars(Array.isArray(data) ? data : []);
        setLoading(false);
      });
    }
  }, [userId]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="border rounded-xl p-4 animate-pulse">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4" />
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (cars.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <Card className="border py-8 flex items-center ">
          <CgTrashEmpty size={40} />

          <h2 className=" text-md md:text-2xl font-bold text-[#0F172A]">
            You have not added any car yet.
          </h2>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6 text-[#0F172A]">
        My Added Cars ({cars.length})
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car._id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={car.imageUrl}
                alt={car.carName}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Availability Badge */}
              <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold z-10 bg-[#F97316] text-white">
                {car.availabilityStatus}
              </span>
            </div>

            {/* Card Body */}
            <div className="p-4 space-y-3 bg-[#0F172A]">
              {/* Car Name */}
              <h2 className="text-xl font-bold text-[#F97316]">
                {car.carName}
              </h2>

              {/* Type & Price */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#F9731620] text-[#F97316] border-[#F97316]">
                  {car.carType}
                </span>
                <span className="font-bold text-lg text-[#F97316]">
                  ${car.dailyRentPrice}
                  <span className="text-sm font-normal text-gray-400">
                    {" "}
                    /day
                  </span>
                </span>
              </div>

              {/* Seat & Location */}
              <div className="flex items-center gap-4 text-sm text-[#CBD5E1]">
                <span>💺 {car.seatCapacity}</span>
                <span>📍 {car.pickupLocation}</span>
              </div>

              {/* Description */}
              <p className="text-sm line-clamp-2 text-[#94A3B8]">
                {car.description}
              </p>

              {/* Edit & Delete Buttons */}
              <div className="flex items-center justify-between pt-3 border-t-[#F9731640]">
                {/* Edit — Left */}
                <EditCarModal car={car} />

                {/* Delete Button */}
                <DeleteAlert car={car} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddedCarsPage;
