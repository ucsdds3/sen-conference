"use client";

interface PricingCardProps {
  title: string;
  features: string[];
  price: string;
  bgColor: string;
  glowColor: string;
  featured?: boolean;
}

export default function PricingCard({
  title,
  features,
  price,
  bgColor,
  glowColor,
  featured = false,
}: PricingCardProps) {
  const baseShadow = featured
    ? `0 0 56px ${glowColor}, 0 32px 90px rgba(0,0,0,0.55)`
    : `0 0 36px ${glowColor}, 0 20px 70px rgba(0,0,0,0.45)`;

  const hoverShadow = featured
    ? `0 0 72px ${glowColor}, 0 36px 100px rgba(0,0,0,0.6)`
    : `0 0 48px ${glowColor}, 0 24px 80px rgba(0,0,0,0.5)`;

  return (
    <div
      className={`
        relative flex w-full flex-col justify-between rounded-2xl transition-all duration-200 ease-out
        ${bgColor}
        ${
          featured
            ? "z-20 px-8 py-10 shadow-2xl lg:scale-105 lg:px-10 lg:py-12 lg:hover:scale-[1.08]"
            : "z-10 px-8 py-8 shadow-xl hover:scale-105 lg:scale-[0.98]"
        }
      `}
      style={{ boxShadow: baseShadow }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = hoverShadow;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = baseShadow;
      }}
    >
      {featured ? (
        <span className="absolute -top-3 left-1/2 z-30 -translate-x-1/2 rounded-full bg-sen-blue px-4 py-1 text-xs font-semibold tracking-wide text-white shadow-md md:text-sm">
          Most Value
        </span>
      ) : null}

      <div>
        <h3 className="mb-6 text-center text-2xl font-semibold text-black md:mb-8 md:text-3xl">
          {title}
        </h3>

        <ul className="space-y-4 text-base text-black/90 md:text-lg">
          {features.map((feature, index) => (
            <li key={index} className="relative pl-7">
              <span className="absolute left-0 top-0 text-xl">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 text-center text-2xl font-bold text-black md:mt-10 md:text-3xl">
        {price}
      </div>
    </div>
  );
}
