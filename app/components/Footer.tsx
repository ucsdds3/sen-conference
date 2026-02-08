export default function Footer() {
  return (
    <footer className="w-full last:mt-auto bg-[#0D1626] text-white">
      {/* Main footer content */}
      <div className="flex w-full px-[5%] py-[80px] justify-between items-center">
        
        {/* Left: Navigation */}
        <div className="flex flex-col gap-2 uppercase tracking-widest text-sm">
          <div>About</div>
          <div>Partners</div>
          <div>Venue</div>
          <div>Speakers</div>
          <div>Workshops</div>
          <div>Schedule</div>
          <div>Register</div>
        </div>

        {/* Center: Logo + Name */}
        <div className="flex items-center gap-6">
          <img
            src="/sen-conference/assets/SEN_full_logo_light_text.png"
            alt="SEN Logo"
          />
        </div>

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
};
