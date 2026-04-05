import Header from "../components/layout/Header";
import partners from "../../public/lib/partners.json";

const tiers = [
  { label: "Platinum", labelColor: "text-platinum" },
  { label: "Gold",     labelColor: "text-sen-yorange" },
  { label: "Silver",   labelColor: "text-silver" },
];

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-10 py-16 flex flex-col gap-16">
        {tiers.map(({ label, labelColor }) => {
          const tierPartners = partners.filter(
            (p) => p.tier === label.toLowerCase()
          );

          return (
            <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 md:gap-12">
              {/* Tier label */}
              <div className="min-w-30 md:min-w-40">
                <h2 className={`text-2xl md:text-3xl font-bold leading-tight ${labelColor}`}>
                  {label}<br />Sponsors
                </h2>
              </div>

              {/* Sponsor logos */}
              <div className="flex flex-1 flex-wrap gap-6 md:gap-8">
                {tierPartners.length > 0 ? (
                  tierPartners.map((partner, i) => (
                    <a
                      key={`${partner.tier}-${i}`}
                      href={partner.website || undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-20 w-20 flex items-center justify-center rounded-lg overflow-hidden"
                    >
                      {partner.logo ? (
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <div className="h-20 w-20 bg-black rounded-lg flex items-center justify-center p-2">
                          <p className="text-white text-xs text-center leading-tight">{partner.name}</p>
                        </div>
                      )}
                    </a>
                  ))
                ) : (
                  <div className="h-20 w-20 bg-black rounded-lg" />
                )}
              </div>
            </div>
          );
        })}

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
