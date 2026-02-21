"use client";

import RegisterButton from "./RegisterButton";

export default function Header() {
  return (
    <header className="flex items-center w-full min-h-[60px] px-6 md:px-10 gap-3 bg-sen-blue">
      {/* Logo */}
      <img
        src="/assets/SEN_small_logo.png"
        alt="SEN Badge"
        className="h-10 md:h-12 w-auto flex-shrink-0"
      />

      {/* Title */}
      <div className="flex flex-col md:flex-row text-white gap-0.5 md:gap-1 items-start md:items-end">
        <span
          onClick={() => (window.location.href = "/sen-conference")}
          className="font-medium text-xl sm:text-2xl md:text-3xl cursor-pointer"
        >
          Blueprint Summit 2026
        </span>
        <span className="font-normal text-xs sm:text-sm md:text-base">
          SEN’s Startup & Innovation Conference
        </span>
      </div>

      {/* Date & Location */}
      <div className="flex flex-row ml-auto gap-1 md:gap-3 bg-white px-3 py-1 rounded-full text-gray-800 font-medium text-xs sm:text-sm md:text-base">
        <span>La Jolla, CA</span>
        <span>—</span>
        <span>May 1, 2026</span>
      </div>

      {/* Register Button */}
      <RegisterButton classes="ml-3 text-sm sm:text-base md:text-lg" />
    </header>
  );
}