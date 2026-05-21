import Image from "next/image";
import { FaCar, FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";

const BookingCard = ({ booking }) => {
  return (
    <div className="flex md:flex-row bg-white border rounded-2xl shadow-md overflow-hidden mt-5">
      {/* 📷 LEFT IMAGE */}
      <div className="relative w-full md:w-1/3 " style={{ minHeight: "240px" }}>
        <Image
          src={booking?.carImage}
          alt={booking.carName}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      {/* 📄 RIGHT CONTENT */}
      <div className="w-full md:w-2/3 p-5 flex flex-col gap-3">
        {/* NAME */}
        <h2 className="text-xl font-bold text-gray-800">{booking.carName}</h2>

        {/* PRICE */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaCar />
          <span>${booking.carPrice} / day</span>
        </div>

        {/* LOCATION */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaMapMarkerAlt />
          <span>{booking.pickupLocation}</span>
        </div>

        {/* DRIVER */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaUser />
          <span>Driver: {booking.driverNeeded}</span>
        </div>

        {/* DATE */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaCalendarAlt />
          <span>{new Date(booking.bookingDate).toLocaleDateString()}</span>
        </div>

        {/* STATUS */}
        <span
          className={`w-fit px-3 py-1 rounded-full text-sm font-medium
            ${booking.status === "pending" && "bg-yellow-100 text-yellow-700"}
            ${booking.status === "approved" && "bg-green-100 text-green-700"}
            ${booking.status === "cancelled" && "bg-red-100 text-red-700"}
          `}
        >
          {booking.status}
        </span>
      </div>
    </div>
  );
};

export default BookingCard;
