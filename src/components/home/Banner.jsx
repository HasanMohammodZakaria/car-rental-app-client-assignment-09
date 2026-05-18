"use client";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div>
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Background */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          {/* This is the key fix */}
          <div className="w-full max-w-7xl mx-auto px-5 md:px-10 flex md:justify-start">
            <div className="text-center md:text-left flex flex-col items-center md:items-start max-w-2xl">
              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-white font-bold 
                   text-2xl sm:text-4xl md:text-6xl lg:text-7xl 
                   leading-snug md:leading-tight"
              >
                Drive Luxury Cars With Comfort & Style
              </motion.h1>

              {/* Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-5 text-gray-300 
                   text-sm sm:text-base md:text-lg
                   leading-relaxed"
              >
                Rent premium and luxury cars at affordable prices. Enjoy smooth
                booking and world-class driving experience.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 mt-7 justify-center md:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#F97316] text-white px-5 py-3 rounded-xl font-medium"
                >
                  Explore Cars
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-white text-white px-5 py-3 rounded-xl
                     hover:bg-white hover:text-black transition"
                >
                  Book Now
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
