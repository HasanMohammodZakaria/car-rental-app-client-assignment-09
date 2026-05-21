import { FaBoxOpen } from "react-icons/fa";

const EmptyBookingCard = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div
        className="
          bg-white border shadow-lg rounded-3xl
          p-6 md:p-10
          text-center
          w-full max-w-md
        "
      >
        <div className="flex justify-center mb-4">
          <FaBoxOpen className="text-5xl md:text-6xl text-orange-500" />
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          No Bookings Found
        </h2>

        <p className="text-gray-500 mt-2 text-sm md:text-base">
          You haven’t booked any cars yet. Your bookings will appear here after
          confirmation.
        </p>
      </div>
    </div>
  );
};
export default EmptyBookingCard;
