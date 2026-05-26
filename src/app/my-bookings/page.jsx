import BookingCard from "@/components/shared/BookingCard";
import EmptyBookingCard from "@/components/shared/EmptyBookingCard";
import { auth } from "@/lib/auth";
import { fetchUserBooking } from "@/lib/cars/data";
import { headers } from "next/headers";
import React from "react";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  //console.log(user);
  const bookings = await fetchUserBooking(user?.id);
  console.log(bookings);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* TITLE */}
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#0F172A]">
        My Bookings Cars({bookings.length})
      </h1>

      {/* EMPTY STATE */}
      {bookings?.length === 0 ? (
        <EmptyBookingCard />
      ) : (
        <div
          className="
            grid gap-6

            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-2
          "
        >
          {bookings.map((booking) => (
            <BookingCard key={booking._id} booking={booking} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookingPage;
