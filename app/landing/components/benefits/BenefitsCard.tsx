"use client";

interface BenefitsCardProps {
  title: string;
  benefits: string;
  imageSrc: string;
  imageAlt: string;
  minHeight?: string;
  glowColor?: string;
}

export default function BenefitsCard({
  title,
  benefits,
  imageSrc,
  imageAlt,
  minHeight = "md:min-h-[clamp(360px,36vh,420px)]",
  glowColor = "rgba(246, 182, 84, 0.3)",
}: BenefitsCardProps) {
  return (
    <div
      className={`${minHeight} flex h-full w-full flex-col justify-between rounded-2xl bg-white p-6 transition-all duration-200 ease-out hover:scale-105 md:p-8`}
      style={{
        boxShadow: `
          0 0 40px ${glowColor},
          0 20px 60px rgba(0,0,0,0.08)
        `,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `
          0 0 70px ${glowColor},
          0 25px 80px rgba(0,0,0,0.12)
        `;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = `
          0 0 40px ${glowColor},
          0 20px 60px rgba(0,0,0,0.08)
        `;
      }}
    >
      <div className="flex flex-col items-center">
        <h3 className="mb-4 text-center text-lg font-semibold text-black md:text-xl lg:text-2xl">
          {title}
        </h3>

        <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <p className="mt-4 text-center text-base leading-relaxed text-black/90 md:text-lg lg:text-xl">
        {benefits}
      </p>
    </div>
  );
}
