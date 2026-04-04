"use client";

import RegisterButton from "./RegisterButton";

export default function Header() {
  return (
    <header className="flex items-center w-full h-[10vh] min-h-[70px] px-6 md:px-10 gap-4 bg-sen-blue overflow-x-hidden">
      {/* Logo */}
      <img
        src="/assets/SEN_small_logo.png"
        alt="SEN Badge"
        className="h-10 md:h-12 w-auto shrink-0"
      />

      {/* Title */}
      <div className="flex flex-col text-white gap-1 items-start md:items-end">
        <span
          onClick={() => (window.location.href = "/")}
          className="font-medium text-xl sm:text-2xl md:text-3xl cursor-pointer min-w-max"
        >
          Blueprint Summit 2026
        </span>
      </div>

      {/* Register Button */}
      <div className="ml-auto shrink-0">
        <RegisterButton classes="text-sm xs:text-base md:text-lg" />
      </div>
    </header>
  );
}
