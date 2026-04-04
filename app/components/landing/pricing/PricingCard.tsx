"use client";
type PricingCardProps = {
  title: string;
  features: string[];
  price: string;
  color: string;
  featured?: boolean;
};
export default function PricingCard({
  title,
  features,
  price,
  color,
  featured = false,
}: PricingCardProps) {
  const baseShadow = featured
    ? `0 0 56px rgba(255,255,255,0.12), 0 32px 90px rgba(0,0,0,0.55)`
    : `0 0 36px rgba(255,255,255,0.12), 0 20px 70px rgba(0,0,0,0.45)`;
  const hoverShadow = featured
    ? `0 0 72px rgba(255,255,255,0.12), 0 36px 100px rgba(0,0,0,0.6)`
    : `0 0 48px rgba(255,255,255,0.12), 0 24px 80px rgba(0,0,0,0.5)`;
  return (
    <div
      className={`
        relative flex w-full min-h-full flex-col px-8 py-8 lg:px-10 lg:py-10 shrink-0 lg:flex-1 lg:min-w-0 lg:max-w-sm justify-between rounded-2xl transition-all duration-200 ease-out
        ${color}
        ${
          featured
            ? "scale-110 hover:scale-[1.15]"
            : "hover:scale-[1.05]"
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
      <div className="flex flex-col h-full justify-between">
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
        <div className="mt-6 text-center text-2xl font-bold text-black md:mt-10 md:text-3xl">
          {price}
        </div>
      </div>
    </div>
  );
}
