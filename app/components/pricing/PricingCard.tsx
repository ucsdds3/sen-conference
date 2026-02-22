"use client";

interface PricingCardProps {
  title: string;
  features: string[];
  price: string;
  bgColor: string;
  minHeight: string;
  glowColor: string;
}

export default function PricingCard({
  title,
  features,
  price,
  bgColor,
  minHeight,
  glowColor,
}: PricingCardProps) {
  return (
    <div
      className={`
        ${bgColor}
        ${minHeight}
        w-full
        p-12
        flex flex-col justify-between
        transition-all duration-300
        hover:scale-105
        rounded-2xl
      `}
      style={{
        boxShadow: `
          0 0 40px ${glowColor},
          0 25px 80px rgba(0,0,0,0.6)
        `,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `
          0 0 60px ${glowColor},
          0 25px 100px rgba(0,0,0,0.7)
        `;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `
          0 0 40px ${glowColor},
          0 25px 80px rgba(0,0,0,0.6)
        `;
      }}
    >
      <div>
        <h3 className="text-4xl font-semibold text-center mb-10 text-black">
          {title}
        </h3>

        <ul className="space-y-6 text-xl text-black/90">
          {features.map((feature, index) => (
            <li key={index} className="relative pl-8">
              <span className="absolute left-0 top-0 text-2xl">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center text-4xl font-bold mt-12 text-black">
        {price}
      </div>
    </div>
  );
}