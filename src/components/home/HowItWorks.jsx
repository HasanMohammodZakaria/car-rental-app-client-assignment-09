import React from "react";

const steps = [
  {
    title: "Choose Your Car",
    desc: "Browse our wide range of vehicles and select your preferred car easily.",
    icon: "🚗",
  },
  {
    title: "Book Online",
    desc: "Fill in your details and confirm your booking in just a few clicks.",
    icon: "📝",
  },
  {
    title: "Pick & Drive",
    desc: "Pick up your car or get it delivered and enjoy your journey.",
    icon: "🛣️",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full py-16 bg-white dark:bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-white">
            How It Works
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mt-2">
            Simple 3 steps to rent your car
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 dark:border-[#1E293B] 
              hover:shadow-lg transition bg-gray-50 dark:bg-[#111827]"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-[#0F172A] dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-300 mt-2">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
