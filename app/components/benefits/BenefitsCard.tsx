"use client";

interface BenefitsCardProps {
  title: string;
  benefits: string;
  minHeight?: string;
  glowColor?: string;
}

export default function BenefitsCard({
  title,
  benefits,
  minHeight = "md:min-h-[clamp(360px,36vh,420px)]",
  glowColor = "rgba(246, 182, 84, 0.3)",
}: BenefitsCardProps) {
  return (
    <div
      className={`${minHeight} w-full h-full bg-white p-6 md:p-8 flex flex-col justify-between rounded-2xl transition-all duration-300 hover:scale-105`}
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
      {/*Title + Image */}
      <div className="flex flex-col items-center">
        <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-center text-black mb-4">
          {title}
        </h3>

        {/* Image Placeholder with fixed height (Will Put Image in Here with SEN Provided Photo*/}
        <div className="w-full h-36 md:h-44 lg:h-48 bg-black rounded-lg" />
      </div>

      {/* Paragraph */}
      <p className="text-base md:text-lg lg:text-xl text-black/90 text-center leading-relaxed mt-4">
        {benefits}
      </p>
    </div>
  );
}
