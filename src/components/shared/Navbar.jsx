"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/assets/logo-rental.png";
import { Button } from "@heroui/react";
import NavLink from "./NavLink";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const isLoggedIn = true;

  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="border-b border-[#E2E8F0]">
      <nav className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between ">
        {/* LEFT: LOGO */}
        <div className="shrink-0">
          <Link href="/">
            <Image src={Logo} alt="logo" width={130} height={50} />
          </Link>
        </div>

        {/* CENTER: MENU (desktop only — lg+) */}
        <ul className="hidden lg:flex items-center gap-6 flex-1 justify-center">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/explore-cars">Explore Cars</NavLink>
          </li>
          <li>
            <NavLink href="/add-car">Add Car</NavLink>
          </li>
          <li>
            <NavLink href="/my-bookings">My Bookings</NavLink>
          </li>
        </ul>

        {/* RIGHT: AUTH (desktop only — lg+) */}
        <div className="hidden lg:flex items-center gap-4 shrink-0 relative">
          {!isLoggedIn ? (
            <Link href="/login">
              <Button className="border border-[#F97316] bg-transparent hover:bg-[#F97316] hover:text-white">
                Login
              </Button>
            </Link>
          ) : (
            <div className="relative">
              {/* Avatar + Name */}
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2"
              >
                <div className="w-10 h-10 rounded-full bg-[#F97316] flex items-center justify-center text-white font-semibold">
                  U
                </div>
                <span className="font-medium">User</span>
              </button>

              {/* Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 mt-3 w-52 bg-white shadow-lg rounded-md border z-50">
                  <Link
                    className="block px-4 py-2 hover:bg-gray-100"
                    href="/add-car"
                  >
                    Add Car
                  </Link>
                  <Link
                    className="block px-4 py-2 hover:bg-gray-100"
                    href="/my-bookings"
                  >
                    My Bookings
                  </Link>
                  <Link
                    className="block px-4 py-2 hover:bg-gray-100"
                    href="/my-cars"
                  >
                    My Cars
                  </Link>
                  <button className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50">
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* MOBILE/TABLET HAMBURGER (shows below lg) */}
        <button className="lg:hidden text-3xl" onClick={() => setOpen(true)}>
          <GiHamburgerMenu />
        </button>
      </nav>

      {/* ================= OFFCANVAS ================= */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Image src={Logo} alt="logo" width={130} height={50} />
          <button onClick={() => setOpen(false)} className="text-2xl">
            <IoCloseSharp />
          </button>
        </div>

        <div className="flex flex-col gap-4 p-5">
          <NavLink href="/" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink href="/explore-cars" onClick={() => setOpen(false)}>
            Explore Cars
          </NavLink>
          <NavLink href="/add-car" onClick={() => setOpen(false)}>
            Add Car
          </NavLink>
          <NavLink href="/my-bookings" onClick={() => setOpen(false)}>
            My Bookings
          </NavLink>

          <hr />

          {!isLoggedIn ? (
            <Link href="/login">
              <Button className="w-full border border-[#F97316]">Login</Button>
            </Link>
          ) : (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#F97316] rounded-full flex items-center justify-center text-white font-semibold">
                  U
                </div>
                <span>User Name</span>
              </div>
              <Link href="/add-car" className="hover:text-[#F97316]">
                Add Car
              </Link>
              <Link href="/my-cars" className="hover:text-[#F97316]">
                My Cars
              </Link>
              <Link href="/my-bookings" className="hover:text-[#F97316]">
                My Bookings
              </Link>

              <button className="text-left text-red-500">Logout</button>
            </div>
          )}
        </div>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}
    </div>
  );
};

export default Navbar;
