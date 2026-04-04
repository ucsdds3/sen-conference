import Header from "../components/layout/Header";

const tiers = [
  {
    label: "Platinum",
    labelColor: "text-[#99B2DD]",
    boxHeight: "h-20 w-20",
  },
  {
    label: "Gold",
    labelColor: "text-sen-yorange",
    boxHeight: "h-20 w-20",
  },
  {
    label: "Silver",
    labelColor: "text-[#C4C4C4]",
    boxHeight: "h-20 w-20",
  },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-10 py-16 flex flex-col gap-16">
        {/* When given assets for sponsor logos, extract this into a SponsorTier component (label on the left + row of sponsor logo images to the right) */}
        {tiers.map(({ label, labelColor, boxHeight }) => (
          <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 md:gap-12">
            {/* Tier label */}
            <div className="min-w-30 md:min-w-40">
              <h2 className={`text-2xl md:text-3xl font-bold leading-tight ${labelColor}`}>
                {label}<br />Sponsors
              </h2>
            </div>

            {/* Placeholder boxes */}
            <div className="flex flex-1 flex-wrap gap-6 md:gap-8">
              {[0, 1, 2].map((i) => (
                <div key={i} className={`${boxHeight} bg-black rounded-lg`} />
              ))}
            </div>
          </div>
        ))}

        {/* Sponsorship contact */}
        <p className="text-center text-sm md:text-base text-black/60 mt-8 pb-4">
          If you are interested in sponsoring us, email us at{" "}
          <a
            href="mailto:sen@ucsd.edu"
            className="underline text-black/80 hover:text-sen-blue transition-colors"
          >
            sen@ucsd.edu
          </a>!
        </p>
      </div>
    </main>
  );
}
