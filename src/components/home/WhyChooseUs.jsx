import React from "react";

const features = [
  {
    title: "Affordable Pricing",
    desc: "We offer competitive prices with no hidden charges.",
    icon: "💰",
  },
  {
    title: "Trusted Vehicles",
    desc: "All cars are fully inspected, safe and reliable.",
    icon: "🛡️",
  },
  {
    title: "24/7 Support",
    desc: "Our support team is always ready to help you anytime.",
    icon: "📞",
  },
  {
    title: "Easy Booking",
    desc: "Fast and simple booking process within minutes.",
    icon: "⚡",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-[#111827]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] dark:text-white">
            Why Choose Us
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mt-2">
            We provide the best experience for your journey
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-[#0F172A] 
              border border-gray-200 dark:border-[#1E293B]
              hover:-translate-y-1 transition duration-300"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#0F172A] dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
