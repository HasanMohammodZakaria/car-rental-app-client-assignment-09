import { fetchUpdateCar } from "@/lib/cars/data";
import {
  Button,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox,
  Card,
  Modal,
  Surface,
} from "@heroui/react";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";
const EditCarModal = ({ car }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const {
    carName,
    dailyRentPrice,
    carType,
    imageUrl,
    seatCapacity,
    pickupLocation,
    availabilityStatus,
    description,
  } = car;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedCar = Object.fromEntries(formData.entries());

    const result = await fetchUpdateCar(car._id, updatedCar);

    if (result?.modifiedCount > 0) {
      router.refresh();
      setOpen(false);

      toast.success("Car updated successfully!");
    } else {
      toast.error("Failed to update car!");
    }
    console.log(result);
  };
  return (
    <Modal isOpen={open} onOpenChange={setOpen}>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
        style={{
          backgroundColor: "#F9731615",
          color: "#F97316",
          border: "1px solid #F97316",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#F97316";
          e.currentTarget.style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#F9731615";
          e.currentTarget.style.color = "#F97316";
        }}
      >
        <FiEdit className="w-4 h-4" />
        Edit Car
      </button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-2xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiEdit className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Cars</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default"></Surface>
              <Card className="p-4 md:p-6 lg:p-8">
                <form className="space-y-6 md:space-y-8" onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Car Name (Full width) */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={carName}
                        name="carName"
                        isRequired
                      >
                        <Label>Car Name</Label>
                        <Input
                          placeholder="Nissan X-Trail"
                          className="rounded-xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Price */}
                    <TextField
                      defaultValue={dailyRentPrice}
                      name="dailyRentPrice"
                      type="number"
                      isRequired
                    >
                      <Label>Price (USD)</Label>
                      <Input
                        type="number"
                        placeholder="999"
                        className="rounded-xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Car Type */}
                    <Select
                      defaultValue={carType}
                      name="carType"
                      isRequired
                      className="w-full"
                      placeholder="Select Car Type"
                    >
                      <Label>Car Type</Label>
                      <Select.Trigger className="rounded-xl">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Luxury" textValue="Luxury">
                            Luxury <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Sedan" textValue="Sedan">
                            Sedan <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="SUV" textValue="SUV">
                            SUV <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Hybrid" textValue="Hybrid">
                            Hybrid <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="Hatchback" textValue="Hatchback">
                            Hatchback <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                    {/* Image URL (Full width) */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={imageUrl}
                        name="imageUrl"
                        isRequired
                      >
                        <Label>Image URL</Label>
                        <Input
                          type="url"
                          placeholder="https://example.com/image.jpg"
                          className="rounded-xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Seat Capacity */}
                    <TextField
                      defaultValue={seatCapacity}
                      name="seatCapacity"
                      isRequired
                    >
                      <Label>Seat Capacity</Label>
                      <Input
                        placeholder="5 Seat / 7 Seat"
                        className="rounded-xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Pickup Location */}
                    <TextField
                      defaultValue={pickupLocation}
                      name="pickupLocation"
                      isRequired
                    >
                      <Label>Pickup Location</Label>
                      <Input
                        placeholder="Dhaka / Uttara"
                        className="rounded-xl"
                      />
                      <FieldError />
                    </TextField>

                    {/* Description (Full width) */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={description}
                        name="description"
                        isRequired
                      >
                        <Label>Description</Label>
                        <TextArea
                          rows={6}
                          placeholder="Describe the travel experience..."
                          className="rounded-xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>

                    {/* Availability (Full width) */}
                    <div className="md:col-span-2">
                      <TextField
                        defaultValue={availabilityStatus}
                        name="availabilityStatus"
                        isRequired
                      >
                        <Label>Availability Status</Label>
                        <TextArea
                          placeholder="Available / Booked"
                          className="rounded-xl"
                        />
                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  <Modal.Footer>
                    <Button
                      slot="close"
                      variant="secondary"
                      className="text-red-500"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-[#F97316] text-white">
                      Update car
                    </Button>
                  </Modal.Footer>
                </form>
              </Card>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditCarModal;
