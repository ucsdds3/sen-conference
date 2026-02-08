export default function Footer() {
  return (
    <footer className="w-full last:mt-auto bg-[#0D1626] text-white">
      {/* Main footer content */}
      <div className="flex w-full gap-8 px-[5%] py-[5%] justify-between items-center">
        {/* Left: Navigation */}
        <div className="flex flex-col gap-2 min-w-min">
          <span className="footer-page">About</span>
          <span className="footer-page">Partners</span>
          <span className="footer-page">Venue</span>
          <span className="footer-page">Speakers</span>
          <span className="footer-page">Workshops</span>
          <span className="footer-page">Schedule</span>
          <span className="footer-page">Register</span>
        </div>

        {/* Center: Logo + Name */}
        <img
          src="/sen-conference/assets/SEN_full_logo_light_text.png"
          alt="SEN Logo"
          className="w-full max-w-md min-w-xs"
        />

        {/* Right: Social */}
        <div className="flex flex-col items-end gap-4">
          <div className="font-medium">Stay Connected</div>
          <div className="flex gap-4">
            <div className="w-[40px] h-[40px] border border-white rounded-md" />
            <div className="w-[40px] h-[40px] border border-white rounded-md" />
            <div className="w-[40px] h-[40px] border border-white rounded-md" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex w-full px-[5%] py-6 border-t border-white/30 justify-between text-sm text-white/80">
        <div>© 2026 SEN Conference</div>
        <div>Designed by DS3 Software Team</div>
      </div>
    </footer>
  );
}
