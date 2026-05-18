import Image from "next/image";
import Flogo from "@/assets/logo-light.png";

import {
  FaEnvelopeOpen,
  FaFacebook,
  FaLinkedin,
  FaMobileRetro,
  FaSquareXTwitter,
  FaCopyright,
} from "react-icons/fa6";

import { FaInstagramSquare, FaMapMarkerAlt } from "react-icons/fa";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0F172A] pt-14 pb-6 px-4 md:px-8 lg:px-10">
      {/* Footer Top */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 items-start">
        {/* About Us */}
        <div className="w-full space-y-5">
          <h3 className="text-2xl font-bold text-white">About Us</h3>

          <p className="text-[16px] leading-7 text-[#CBD5E1]">
            About Us Getting dressed up and traveling with good friends makes
            for a shared, unforgettable experience.
          </p>

          <Image src={Flogo} alt="logo" height={80} width={180} />
        </div>

        {/* Contact Info */}
        <div className="w-full space-y-5">
          <h3 className="text-2xl font-bold text-white">Contact Info</h3>

          <div className="space-y-4">
            <p className="text-[16px] text-[#CBD5E1] flex items-center gap-3">
              <FaMobileRetro className="text-[#F97316]" />
              +880 1739108253
            </p>

            <p className="text-[16px] text-[#CBD5E1] flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#F97316]" />
              Tangail, Dhaka, Bangladesh
            </p>

            <p className="text-[16px] text-[#CBD5E1] flex items-center gap-3">
              <FaEnvelopeOpen className="text-[#F97316]" />
              zakariak4@gmail.com
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 pt-2">
            <Link href="#">
              <FaFacebook className="text-white text-[28px] hover:text-[#F97316] duration-300 cursor-pointer" />
            </Link>

            <Link href="#">
              <FaInstagramSquare className="text-white text-[28px] hover:text-[#F97316] duration-300 cursor-pointer" />
            </Link>

            <Link href="#">
              <FaSquareXTwitter className="text-white text-[28px] hover:text-[#F97316] duration-300 cursor-pointer" />
            </Link>

            <Link href="#">
              <FaLinkedin className="text-white text-[28px] hover:text-[#F97316] duration-300 cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Legal Policy */}
        <div className="w-full space-y-5">
          <h3 className="text-2xl font-bold text-white">Legal Policy</h3>

          <div className="flex flex-col gap-4">
            <Link
              href="#"
              className="text-[16px] text-[#CBD5E1] hover:text-[#F97316] duration-300"
            >
              Term & Condition
            </Link>

            <Link
              href="#"
              className="text-[16px] text-[#CBD5E1] hover:text-[#F97316] duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-[16px] text-[#CBD5E1] hover:text-[#F97316] duration-300"
            >
              Legal Notice
            </Link>

            <Link
              href="#"
              className="text-[16px] text-[#CBD5E1] hover:text-[#F97316] duration-300"
            >
              Accessibility
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full space-y-5">
          <h3 className="text-2xl font-bold text-white">Quick Links</h3>

          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-[16px] text-[#CBD5E1] hover:text-[#F97316] duration-300"
            >
              Home
            </Link>

            <Link
              href="/explore-cars"
              className="text-[16px] text-[#CBD5E1] hover:text-[#F97316] duration-300"
            >
              Explore Cars
            </Link>

            <Link
              href="/add-car"
              className="text-[16px] text-[#CBD5E1] hover:text-[#F97316] duration-300"
            >
              Add Car
            </Link>

            <Link
              href="/my-bookings"
              className="text-[16px] text-[#CBD5E1] hover:text-[#F97316] duration-300"
            >
              My Bookings
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#1E293B] mt-14 pt-6">
        <div className="flex justify-center items-center gap-2 text-[#CBD5E1] text-sm md:text-base">
          <FaCopyright className="text-[#F97316]" />

          <p className="text-center">2026 Deep Nest. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
