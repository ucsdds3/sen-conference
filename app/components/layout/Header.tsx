"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RegisterButton from "./RegisterButton";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "Speakers", href: "/maintenance" },
  { label: "Schedule", href: "/maintenance" },
  { label: "Partners", href: "/maintenance" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const handleMouseDown = (e: MouseEvent) => {
      if (open && headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [open]);

  return (
    <header ref={headerRef} className="relative z-20 w-full bg-sen-blue">
      {/* Nav row */}
      <div className="flex h-[10vh] min-h-17.5 w-full items-center gap-4 overflow-x-hidden px-6 md:px-10">
        {/* Logo */}
        <Image
          src="/assets/SEN_small_logo.png"
          alt="SEN Badge"
          width={48}
          height={48}
          priority
          className="h-10 md:h-12 w-auto shrink-0"
        />

        {/* Title */}
        <div className="flex flex-col text-white gap-1 items-start md:items-end min-w-0">
          <Link
            href="/"
            className="font-medium text-xl sm:text-2xl md:text-3xl truncate focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sen-yorange"
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
          ref={buttonRef}
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="nav-dropdown"
          className="shrink-0 flex flex-col justify-center items-center gap-1.5 w-8 h-8 sm:ml-4 cursor-pointer group rounded focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sen-yorange"
        >
          <span className={`block h-0.5 w-6 bg-white group-hover:bg-sen-yorange transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white group-hover:bg-sen-yorange transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white group-hover:bg-sen-yorange transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Dropdown */}
      <nav
        id="nav-dropdown"
        className={`absolute top-full right-4 md:right-10 mt-2 w-[min(22rem,calc(100vw-2rem))] bg-sen-blue rounded-xl shadow-lg flex flex-col overflow-hidden transition-all duration-300 ${
          open
            ? "max-h-80 opacity-100 visible pointer-events-auto"
            : "max-h-0 opacity-0 invisible pointer-events-none"
        }`}
      >
        {navLinks.map(({ label, href }) => (
          <Link
            key={`${label}-${href}`}
            href={href}
            onClick={() => setOpen(false)}
            className="px-5 py-3 text-white font-medium hover:bg-white/10 transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-sen-yorange"
          >
            {label}
          </Link>
        ))}
        <div className="px-5 py-3 sm:hidden flex justify-center">
          <RegisterButton />
        </div>
      </nav>
    </header>
  );
}
