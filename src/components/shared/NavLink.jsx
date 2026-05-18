"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <div className="relative inline-block">
      <Link href={href} className="relative pb-1">
        {children}
        <span
          className={`absolute left-0 -bottom-1 h-0.5 bg-[#F97316] transition-all duration-300
          ${isActive ? "w-full" : "w-0"}`}
        />
      </Link>
    </div>
  );
};

export default NavLink;
