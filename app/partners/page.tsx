import type { Metadata } from "next";
import PageLayout from "../components/layout/PageLayout";
import partners from "../../public/lib/partners.json";

export const metadata: Metadata = {
  title: "Partners",
  description: "Meet the sponsors and partners supporting Blueprint Summit 2026.",
};

const tiers = [
  { label: "Platinum", labelColor: "text-platinum",    logoSize: "h-32 w-32" },
  { label: "Gold",     labelColor: "text-sen-yorange", logoSize: "h-24 w-24" },
  { label: "Silver",   labelColor: "text-silver",      logoSize: "h-16 w-16" },
];

export default function PartnersPage() {
  return (
    <PageLayout>

      <div className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col justify-center gap-8">
        {tiers.map(({ label, labelColor, logoSize }) => {
          const tierPartners = partners.filter(
            (p) => p.tier === label.toLowerCase()
          );

          return (
            <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 md:gap-12 border border-black/10 rounded-2xl p-6 md:p-8">
              {/* Tier label */}
              <div className="min-w-30 md:min-w-40">
                <h2 className={`text-2xl md:text-3xl font-bold leading-tight ${labelColor}`}>
                  {label}<br />Sponsors
                </h2>
              </div>

              {/* Sponsor logos */}
              <div className="flex flex-1 flex-wrap gap-6 md:gap-8">
                {tierPartners.length > 0 ? (
                  tierPartners.map((partner, i) => {
                    const logo = partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <div role="img" aria-label={partner.name} className={`${logoSize} bg-black rounded-lg flex items-center justify-center p-2`}>
                        <p className="text-white text-xs text-center leading-tight" aria-hidden="true">{partner.name}</p>
                      </div>
                    );

                    return partner.website ? (
                      <a
                        key={partner.name}
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${logoSize} flex items-center justify-center rounded-lg overflow-hidden transition-opacity hover:opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-sen-blue focus-visible:ring-offset-2`}
                      >
                        {logo}
                      </a>
                    ) : (
                      <div
                        key={partner.name}
                        className={`${logoSize} flex items-center justify-center rounded-lg overflow-hidden`}
                      >
                        {logo}
                      </div>
                    );
                  })
                ) : (
                  <div className={`${logoSize} bg-black rounded-lg flex items-center justify-center p-2`}>
                    <p className="text-white/40 text-xs text-center leading-tight">Coming soon</p>
                  </div>
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
            className="underline text-black/80 hover:text-sen-blue transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sen-blue focus-visible:ring-offset-2"
          >
            sen@ucsd.edu
          </a>!
        </p>
      </div>
    </PageLayout>
  );
}
