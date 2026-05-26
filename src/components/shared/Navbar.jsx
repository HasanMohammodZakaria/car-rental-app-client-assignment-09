"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "@/assets/logo-rental.png";

import { Avatar, Button } from "@heroui/react";

import NavLink from "./NavLink";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;
  // console.log(user);

  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  return (
    <div className="border-b border-[#E2E8F0] sticky top-0 bg-white z-999 shadow-sm">
      <nav className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="shrink-0">
          <Link href="/">
            <Image src={Logo} alt="logo" width={130} height={50} />
          </Link>
        </div>

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

        <div className="hidden lg:flex items-center gap-4 shrink-0 relative">
          {isPending ? (
            <div className="flex items-center gap-3 border border-gray-200 px-4 py-2 rounded-xl animate-pulse">
              <div className="w-9 h-9 rounded-full bg-gray-200" />
              <div className="w-24 h-4 rounded bg-gray-200" />
            </div>
          ) : !user ? (
            <Link href="/login">
              <Button className="border border-[#F97316] bg-transparent text-[#F97316] hover:bg-[#F97316] hover:text-white">
                Login
              </Button>
            </Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3 border border-[#F97316] px-4 py-2 rounded-xl cursor-pointer"
              >
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt={user?.name}
                    src={user?.image}
                  />
                  <Avatar.Fallback>
                    {user?.name.charAt(0)?.toUpperCase()}
                  </Avatar.Fallback>
                </Avatar>

                <span className="font-medium">{user?.name || "User"}</span>
              </button>

              {profileOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-64 min-w-60 bg-white border rounded-lg shadow-lg z-50 overflow-hidden">
                  <Link
                    href="/add-car"
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    Add Car
                  </Link>

                  <Link
                    href="/my-bookings"
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    My Bookings
                  </Link>

                  <Link
                    href="/my-cars"
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    My Added Cars
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-red-500 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        <button className="lg:hidden text-3xl" onClick={() => setOpen(true)}>
          <GiHamburgerMenu />
        </button>
      </nav>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
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

          {isPending ? (
            <div className="flex items-center gap-3 animate-pulse">
              <div className="w-9 h-9 rounded-full bg-gray-200" />
              <div className="w-24 h-4 rounded bg-gray-200" />
            </div>
          ) : !user ? (
            <Link href="/login">
              <Button className="w-full border border-[#F97316] text-[#F97316] bg-transparent">
                Login
              </Button>
            </Link>
          ) : (
            <div className="flex flex-col gap-4">
              {/* USER INFO */}
              <div className="flex items-center gap-3">
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt={user?.name}
                    src={user?.image}
                  />
                  <Avatar.Fallback>
                    {user?.name.charAt(0)?.toUpperCase()}
                  </Avatar.Fallback>
                </Avatar>

                <span className="font-medium">{user?.name || "User"}</span>
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

              <button onClick={handleLogout} className="text-left text-red-500">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

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
