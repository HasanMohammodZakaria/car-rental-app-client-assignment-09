"use client";
import { authClient } from "@/lib/auth-client";
import { fetchBooking } from "@/lib/cars/data";
import {
  Button,
  Label,
  Modal,
  Radio,
  RadioGroup,
  Surface,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export function BookingFormModal({ car }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const {
    _id,
    imageUrl,
    carName,
    dailyRentPrice,
    carType,
    seatCapacity,
    pickupLocation,

    availabilityStatus,
  } = car;

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      if (!user) {
        toast("Please login first");
        return;
      }
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());

      const bookingData = {
        carId: _id,
        carName,
        carImage: imageUrl,
        carPrice: dailyRentPrice,
        pickupLocation,

        bookedById: user.id,
        bookedByName: user.name,
        bookedByEmail: user.email,
        bookedByImage: user.image,

        driverNeeded: data.driverNeeded,
        specialNote: data.specialNote,

        bookingDate: new Date(),
      };

      // Api call
      const bookings = await fetchBooking(bookingData);
      //console.log(bookings);

      console.log(bookingData);
      toast.success("Booking successful!");
      router.refresh();
      router.push("/my-bookings");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Modal isOpen={open} onOpenChange={setOpen}>
      <button
        className="w-full mt-8 bg-black hover:bg-primary duration-300 text-white py-4 rounded-2xl text-lg font-semibold cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Book Now
      </button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="text-base">Booking Form</Modal.Heading>
              <h3 className="text-2xl font-bold">{carName}</h3>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleBooking} className="flex flex-col gap-4">
                  <RadioGroup defaultValue="yes" name="driverNeeded">
                    <Label>Driver Needed</Label>
                    <Radio value="yes">
                      <Radio.Control>
                        <Radio.Indicator />
                      </Radio.Control>
                      <Radio.Content>
                        <Label>Yes</Label>
                      </Radio.Content>
                    </Radio>
                    <Radio value="no">
                      <Radio.Control>
                        <Radio.Indicator />
                      </Radio.Control>
                      <Radio.Content>
                        <Label>No</Label>
                      </Radio.Content>
                    </Radio>
                  </RadioGroup>
                  <div className="flex flex-col gap-2 w-full">
                    <Label className="text-sm md:text-base lg:text-lg">
                      Special Note
                    </Label>

                    <textarea
                      name="specialNote"
                      placeholder="Enter your message"
                      rows={3}
                      className="
                      w-full
                      border border-gray-300
                      rounded-xl
                      px-4 py-3
                      outline-none
                      focus:outline-none
                    focus:border-orange-500
                      focus:ring-4 focus:ring-orange-500/30
                      transition-all duration-200
                      resize-none
                      "
                    />
                  </div>

                  <Modal.Footer>
                    <Button
                      type="submit"
                      className="w-full bg-[#F97316] rounded-xl"
                    >
                      Confirm Booking
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
