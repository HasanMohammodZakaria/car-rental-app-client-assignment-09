"use client";

import { fetchDeleteMyBooking, fetchDeleteMyCar } from "@/lib/cars/data";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

export function DeleteBookingsAlert({ booking }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { carName } = booking;

  const handleMyDeleteBooking = async () => {
    const deleteBooking = await fetchDeleteMyBooking(booking._id);
    console.log(deleteBooking);
    setOpen(false);
    router.refresh();
  };
  return (
    <AlertDialog isOpen={open} onOpenChange={setOpen}>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 bg-[#ff444415] text-[#ff4444] border-[ff4444]"
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#ff4444";
          e.currentTarget.style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#ff444415";
          e.currentTarget.style.color = "#ff4444";
        }}
      >
        <MdDeleteOutline className="w-5 h-5" />
        Delete Booking
      </button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete Booking permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{carName}</strong>
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button variant="danger" onClick={handleMyDeleteBooking}>
                Delete Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
