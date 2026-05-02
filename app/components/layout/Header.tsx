"use client";

import { useState } from "react";
import Link from "next/link";
import RegisterButton from "./RegisterButton";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "Schedule", href: "/schedule" },
  { label: "Speakers", href: "/speakers" },
  { label: "Partners", href: "/partners" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 w-full bg-sen-blue">
      {/* Nav row */}
      <div className="flex h-[10vh] min-h-17.5 w-full items-center gap-4 overflow-x-hidden px-6 md:px-10">
        {/* Logo */}
        <img
          src="/assets/SEN_small_logo.png"
          alt="SEN Badge"
          className="h-10 md:h-12 w-auto shrink-0"
        />

        {/* Title */}
        <div className="flex flex-col text-white gap-1 items-start md:items-end">
          <Link
            href="/"
            className="font-medium text-xl sm:text-2xl md:text-3xl truncate"
          >
            Blueprint Summit 2026
          </Link>
        </div>

        {/* Register Button */}
        <div className="ml-auto hidden sm:block shrink-0">
          <RegisterButton />
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="shrink-0 flex flex-col justify-center items-center gap-1.5 w-8 h-8 sm:ml-4 cursor-pointer group"
        >
          <span className={`block h-0.5 w-6 bg-white group-hover:bg-sen-yorange transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white group-hover:bg-sen-yorange transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white group-hover:bg-sen-yorange transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Dropdown */}
      <div className={`absolute top-full right-6 md:right-10 mt-1 w-44 bg-sen-blue rounded-xl shadow-lg flex flex-col overflow-hidden transition-all duration-300 ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        {navLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            className="px-5 py-3 text-white font-medium hover:bg-white/10 transition-colors"
          >
            {label}
          </Link>
        ))}
        <div className="px-5 py-3 sm:hidden">
          <RegisterButton />
        </div>
      </div>
    </header>
  );
}
