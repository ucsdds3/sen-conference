"use client";

import RegisterButton from "./RegisterButton";

export default function Header() {
  return (
    <header className="flex items-center w-full h-[10vh] min-h-[70px] px-6 md:px-10 gap-4 bg-sen-blue">
      {/* Logo */}
      <img
        src="/assets/SEN_small_logo.png"
        alt="SEN Badge"
        className="h-10 md:h-12 w-auto flex-shrink-0"
      />

      {/* Title */}
      <div className="flex flex-col md:flex-row text-white gap-1 items-start md:items-end">
        <span
          onClick={() => (window.location.href = "/")}
          className="font-medium text-xl sm:text-2xl md:text-3xl cursor-pointer"
        >
          Blueprint Summit 2026
        </span>
        <span className="font-normal text-xs sm:text-sm md:text-base">
          SEN’s Startup & Innovation Conference
        </span>
      </div>

      {/* Date & Location */}
      <div className="flex flex-row ml-auto gap-2 md:gap-4 bg-white px-3 py-1 rounded-full text-gray-800 font-medium text-xs sm:text-sm md:text-base">
        <span>La Jolla, CA</span>
        <span>—</span>
        <span>May 1, 2026</span>
      </div>

      {/* Register Button */}
      <RegisterButton classes="ml-4 text-sm sm:text-base md:text-lg" />
    </header>
  );
}