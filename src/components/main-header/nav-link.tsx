"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={clsx(
        "text-[#ddd6cb] font-bold px-2 py-1 no-underline hover:text-[#f9b331] hover:drop-shadow-[0_0_18px_rgba(248,190,42,0.8)] transition duration-300",
        path.startsWith(href) &&
          "bg-gradient-to-r from-[#ff8a05] to-[#f9b331] bg-clip-text text-transparent"
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
