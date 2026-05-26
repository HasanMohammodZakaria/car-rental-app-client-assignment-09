import Image from "next/image";
import { FaCar, FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";

import { DeleteBookingsAlert } from "./DeleteBookingsAlert";

const BookingCard = ({ booking }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white border rounded-2xl shadow-md overflow-hidden min-h-50">
      <div className="relative w-full md:w-3/5 h-56 md:h-auto">
        <Image
          src={booking?.carImage}
          alt={booking.carName}
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full md:w-2/5 p-4 flex flex-col justify-center gap-2 bg-white">
        <h2 className="text-lg font-bold text-gray-800 leading-tight">
          {booking.carName}
        </h2>

        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <FaCar className="shrink-0" />
          <span>${booking.carPrice} / day</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <FaMapMarkerAlt className="shrink-0" />
          <span>{booking.pickupLocation}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <FaUser className="shrink-0" />
          <span>Driver: {booking.driverNeeded}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <FaCalendarAlt className="shrink-0" />
          <span>{new Date(booking.bookingDate).toLocaleDateString()}</span>
        </div>

        <span
          className={`w-fit px-3 py-1 rounded-full text-xs font-medium mt-1
            ${booking.status === "pending" && "bg-yellow-100 text-yellow-700"}
            ${booking.status === "approved" && "bg-green-100 text-green-700"}
            ${booking.status === "cancelled" && "bg-red-100 text-red-700"}
          `}
        >
          {booking.status}
        </span>

        <DeleteBookingsAlert booking={booking} />
      </div>
    </div>
  );
};

export default BookingCard;
