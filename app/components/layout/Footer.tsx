import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-sen-blue text-white mt-auto">
      {/* Top Section */}
      <div className="flex flex-col min-h-fit items-center gap-6 px-5 py-6 md:flex-row md:justify-between md:px-10 md:py-8">
        {/* Links */}
        <div className="flex w-full h-full justify-evenly items-start md:flex-col md:w-[10vw] md:justify-between">
          <Link
            href="/partners"
            className="uppercase text-sm sm:text-base md:text-lg hover:text-sen-yorange transition-colors"
          >
            Partners
          </Link>
          <Link
            href="/speakers"
            className="uppercase text-sm sm:text-base md:text-lg hover:text-sen-yorange transition-colors"
          >
            Speakers
          </Link>
          <Link
            href="/schedule"
            className="uppercase text-sm sm:text-base md:text-lg hover:text-sen-yorange transition-colors"
          >
            Schedule
          </Link>
          <Link
            href="/tickets/select"
            className="uppercase text-sm sm:text-base md:text-lg hover:text-sen-yorange transition-colors"
          >
            Register
          </Link>
        </div>

        {/* logo */}
        <img
          src="/assets/SEN_full_logo_light_text.png"
          alt="SEN Logo"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md justify-center object-contain"
        />

        {/* Social / Stay Connected */}
        <div className="flex md:flex-col h-full items-start md:items-end md:w-[10vw] md:justify-between">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/senatucsd/"
            className="w-10 h-10 rounded-md flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:sen@ucsd.edu"
            className="w-10 h-10 rounded-md flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 7l10 7 10-7" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/sen-ucsandiego/"
            className="w-10 h-10 rounded-md flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          {/* Website */}
          <a
            href="https://senatucsd.org/"
            className="w-10 h-10 rounded-md flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </a>
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
