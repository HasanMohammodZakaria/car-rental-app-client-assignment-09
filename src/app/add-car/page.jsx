// "use client";
// import { fetchAddCar } from "@/lib/cars/data";
// import { useRouter } from "next/navigation";
// import {
//   Button,
//   FieldError,
//   Input,
//   Label,
//   TextArea,
//   TextField,
//   Select,
//   ListBox,
//   Card,
// } from "@heroui/react";

// const AddCarPage = () => {
//   const router = useRouter();
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const car = Object.fromEntries(formData.entries());
//     console.log("sending car", car);

//     const result = await fetchAddCar(car);
//     if (result?.insertedId) {
//       router.push("/explore-cars");
//     }
//   };
//   return (
//     <div className="max-w-7xl mx-auto px-10">
//       <h1 className="text-2xl font-bold">Add Cars</h1>
//       <Card>
//         <form className="p-10 space-y-8 " onSubmit={onSubmit}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="md:col-span-2">
//               <TextField name="carName" isRequired>
//                 <Label> Car Name</Label>
//                 <Input placeholder="Nissan X-Trail" className="rounded-2xl" />
//                 <FieldError />
//               </TextField>
//             </div>

//             <TextField name="dailyRentPrice" type="number" isRequired>
//               <Label>Price (USD)</Label>
//               <Input type="number" placeholder="1299" className="rounded-2xl" />
//               <FieldError />
//             </TextField>

//             <div>
//               <Select
//                 name="carType"
//                 isRequired
//                 className="w-full"
//                 placeholder="Select Car Type"
//               >
//                 <Label>Car Type</Label>
//                 <Select.Trigger className="rounded-2xl">
//                   <Select.Value />
//                   <Select.Indicator />
//                 </Select.Trigger>
//                 <Select.Popover>
//                   <ListBox>
//                     <ListBox.Item id="Luxury" textValue="Luxury">
//                       Luxury
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>
//                     <ListBox.Item id="Sedan" textValue="Sedan">
//                       Sedan
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>
//                     <ListBox.Item id="SUV" textValue="SUV">
//                       SUV
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>
//                     <ListBox.Item id="Hybrid" textValue="Hybrid">
//                       Hybrid
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>
//                     <ListBox.Item id="Hatchback" textValue="Hatchback">
//                       Hatchback
//                       <ListBox.ItemIndicator />
//                     </ListBox.Item>
//                   </ListBox>
//                 </Select.Popover>
//               </Select>
//             </div>

//             <div className="md:col-span-2">
//               <TextField name="imageUrl" isRequired>
//                 <Label>Image URL</Label>
//                 <Input
//                   type="url"
//                   placeholder="https://example.com/bali-paradise.jpg"
//                   className="rounded-2xl"
//                 />
//                 <FieldError />
//               </TextField>
//             </div>

//             <TextField name="seatCapacity" isRequired>
//               <Label>Seat Capacity</Label>
//               <Input placeholder="5 Seat / 7 Seat" className="rounded-2xl" />
//               <FieldError />
//             </TextField>

//             <div className="md:col-span-2">
//               <TextField name="pickupLocation" isRequired>
//                 <Label>Pickup Location</Label>
//                 <Input placeholder="Dhaka / Uttara" className="rounded-2xl" />
//                 <FieldError />
//               </TextField>
//             </div>

//             <div className="md:col-span-2">
//               <TextField name="description" isRequired>
//                 <Label>Description</Label>
//                 <TextArea
//                   placeholder="Describe the travel experience..."
//                   className="rounded-3xl"
//                 />
//                 <FieldError />
//               </TextField>
//             </div>

//             <div className="md:col-span-2">
//               <TextField name="availabilityStatus" isRequired>
//                 <Label>Availability Status</Label>
//                 <TextArea
//                   placeholder="Describe the travel experience..."
//                   className="rounded-3xl"
//                 />
//                 <FieldError />
//               </TextField>
//             </div>
//           </div>

//           <Button
//             type="submit"
//             variant="outline"
//             className=" rounded-none w-full bg-black text-white text-sm font-medium
//             hover:bg-gray-800 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
//           >
//             Add car
//           </Button>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default AddCarPage;

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

const AddCarPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const car = Object.fromEntries(formData.entries());

    const result = await fetchAddCar(car);

    if (result?.insertedId) {
      router.push("/explore-cars");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-10">
      <h1 className="text-2xl font-bold mb-6">Add Cars</h1>

      <Card className="p-4 md:p-6 lg:p-8">
        <form onSubmit={onSubmit} className="space-y-6 md:space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Car Name (Full width) */}
            <div className="md:col-span-2">
              <TextField name="carName" isRequired>
                <Label>Car Name</Label>
                <Input placeholder="Nissan X-Trail" className="rounded-xl" />
                <FieldError />
              </TextField>
            </div>

            {/* Price */}
            <TextField name="dailyRentPrice" type="number" isRequired>
              <Label>Price (USD)</Label>
              <Input type="number" placeholder="999" className="rounded-xl" />
              <FieldError />
            </TextField>

            {/* Car Type */}
            <Select
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
              <TextField name="imageUrl" isRequired>
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
            <TextField name="seatCapacity" isRequired>
              <Label>Seat Capacity</Label>
              <Input placeholder="5 Seat / 7 Seat" className="rounded-xl" />
              <FieldError />
            </TextField>

            {/* Pickup Location */}
            <TextField name="pickupLocation" isRequired>
              <Label>Pickup Location</Label>
              <Input placeholder="Dhaka / Uttara" className="rounded-xl" />
              <FieldError />
            </TextField>

            {/* Description (Full width) */}
            <div className="md:col-span-2">
              <TextField name="description" isRequired>
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
              <TextField name="availabilityStatus" isRequired>
                <Label>Availability Status</Label>
                <TextArea
                  placeholder="Available / Booked"
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
