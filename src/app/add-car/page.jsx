"use client";
import { fetchAddCar } from "@/lib/cars/data";
import { useRouter } from "next/navigation";
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
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const AddCarPage = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const user = session?.user;
  const userId = user?.id;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const car = Object.fromEntries(formData.entries());

    car.addedBy = userId;

    car.ownerName = user?.name;
    car.ownerEmail = user?.email;
    const result = await fetchAddCar(car);

    if (result?.insertedId) {
      router.push("/explore-cars");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">
      <h2 className="text-2xl font-bold mb-6">Add Cars</h2>

      <Card className="p-4 md:p-6 lg:p-8">
        <form onSubmit={onSubmit} className="space-y-6 md:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Car Name (Full width) */}
            <div className="md:col-span-2">
              <TextField name="carName" isRequired>
                <Label>Car Name</Label>
                <Input
                  placeholder="e.g. Nissan X-Trail"
                  className="rounded-xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Price */}
            <TextField name="dailyRentPrice" type="number" isRequired>
              <Label>Price (USD)</Label>
              <Input
                type="number"
                placeholder="e.g. 999"
                className="rounded-xl"
              />
              <FieldError />
            </TextField>

            {/* Car Type */}
            <Select
              name="carType"
              isRequired
              className="w-full"
              placeholder="e.g. Select Car Type"
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
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>
                <Input
                  type="url"
                  placeholder="e.g. https://example.com/image.jpg"
                  className="rounded-xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Seat Capacity */}
            <TextField name="seatCapacity" isRequired>
              <Label>Seat Capacity</Label>
              <Input
                placeholder="e.g. 5 Seat / 7 Seat"
                className="rounded-xl"
              />
              <FieldError />
            </TextField>

            {/* Pickup Location */}
            <TextField name="pickupLocation" isRequired>
              <Label>Pickup Location</Label>
              <Input placeholder="e.g. Dhaka / Uttara" className="rounded-xl" />
              <FieldError />
            </TextField>

            {/* Fleet Address */}
            <div className="md:col-span-2">
              <TextField name="fleetAddress" isRequired>
                <Label>Fleet Address</Label>
                <Input
                  placeholder="e.g. 123 Main St, Dhaka"
                  className="rounded-xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Description (Full width) */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>
                <TextArea
                  rows={6}
                  placeholder="e.g. Describe the travel experience..."
                  className="rounded-xl"
                />
                <FieldError />
              </TextField>
            </div>

            {/* Availability (Full width) */}
            <div className="md:col-span-2">
              <TextField name="availabilityStatus" isRequired>
                <Label>Availability Status</Label>
                <Input
                  placeholder="e.g. Available / Booked"
                  className="rounded-xl"
                />
                <FieldError />
              </TextField>
            </div>
          </div>

          {/* Button spacing fix */}
          <div className="pt-4 md:pt-6">
            <Button
              type="submit"
              variant="outline"
              className="w-full bg-black text-white text-lg font-medium
              hover:bg-gray-800 shadow-md hover:shadow-lg hover:scale-[1.02]
              transition-all duration-300 py-5 rounded-xl"
            >
              Add Car
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddCarPage;
