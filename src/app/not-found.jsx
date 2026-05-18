"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B1220] text-white px-4 sm:px-6 md:px-10 py-8">
      <div className="text-center max-w-sm sm:max-w-md md:max-w-lg w-full space-y-3">
        {/* Icon / Illustration */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#111827] flex items-center justify-center border border-[#1E293B]">
            <span className="text-3xl sm:text-4xl md:text-5xl">🚗</span>
          </div>
        </motion.div>

        {/* Error Code */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F97316]"
        >
          404
        </motion.h1>

        {/* Title */}
        <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm sm:text-base text-gray-400 leading-relaxed">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-[#F97316] text-white font-medium hover:bg-orange-600 transition text-sm sm:text-base"
          >
            <span>🏠</span>
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
