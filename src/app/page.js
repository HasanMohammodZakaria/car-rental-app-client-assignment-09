import AvailableCars from "@/components/home/AvailableCars";
import Banner from "@/components/home/Banner";
import CarSkeleton from "@/components/home/CarSkeleton";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { Suspense } from "react";


export default function Home() {
  return (
    <div>
      <Banner />
      <Suspense fallback={<CarSkeleton />}>
        <AvailableCars />
      </Suspense>
      <HowItWorks />
      <WhyChooseUs />
    </div>
  );
}
