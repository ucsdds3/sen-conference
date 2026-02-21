"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-sen-blue text-white mt-auto">
      {/* Top Section */}
      <div className="flex flex-wrap justify-between items-start gap-6 px-5 py-6 md:px-10 md:py-8">
        {/* Links */}
        <div className="flex flex-col gap-2 min-w-max">
          <span className="uppercase text-sm sm:text-base md:text-lg cursor-pointer">About</span>
          <span className="uppercase text-sm sm:text-base md:text-lg cursor-pointer">Partners</span>
          <span className="uppercase text-sm sm:text-base md:text-lg cursor-pointer">Venue</span>
          <span className="uppercase text-sm sm:text-base md:text-lg cursor-pointer">Speakers</span>
          <span className="uppercase text-sm sm:text-base md:text-lg cursor-pointer">Workshops</span>
          <span className="uppercase text-sm sm:text-base md:text-lg cursor-pointer">Schedule</span>
          <span className="uppercase text-sm sm:text-base md:text-lg cursor-pointer">Register</span>
        </div>

        {/* Logo */}
        <img
          src="/sen-conference/assets/SEN_full_logo_light_text.png"
          alt="SEN Logo"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
        />

        {/* Social / Stay Connected */}
        <div className="flex flex-col items-start sm:items-end gap-4 min-w-[120px]">
          <div className="font-medium text-sm sm:text-base">Stay Connected</div>
          <div className="flex gap-3">
            <div className="w-10 h-10 border border-white rounded-md" />
            <div className="w-10 h-10 border border-white rounded-md" />
            <div className="w-10 h-10 border border-white rounded-md" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col sm:flex-row w-full px-5 py-4 md:px-10 md:py-6 border-t border-white/30 justify-between text-xs sm:text-sm text-white/80 gap-2 sm:gap-0">
        <div>© 2026 SEN Conference</div>
        <div>Designed by DS3 Software Team</div>
      </div>
    </footer>
  );
}