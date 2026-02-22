"use client";

import PricingCard from "./PricingCard";

export default function PricingSection() {
  return (
    <section className="relative w-full min-h-screen bg-[var(--color-sen-blue)] overflow-hidden flex flex-col justify-center">

      {/* Title */}
      <h2 className="absolute top-12 right-16 text-[var(--color-white)] text-7xl font-bold tracking-tight">
        Ticket Pricing
      </h2>

      {/* Cards Wrapper */}
      <div className="w-full px-8 md:px-20 mt-24">
        <div className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
          items-end
          max-w-6xl
          mx-auto
        ">

          {/* Grey Card */}
          <PricingCard
            title="General"
            features={[
              "Full access to all talks, panels, and workshops",
              "Networking with attendees and speakers",
            ]}
            price="$XX"
            bgColor="bg-[var(--color-white)]"
            minHeight="md:min-h-[clamp(340px,30vh,360px)]"
            glowColor="rgba(255,255,255,0.12)"
          />

          {/* Yellow Card */}
          <PricingCard
            title="Premium"
            features={[
              "Everything in General",
              "Priority seating",
              "Enhanced event experience",
            ]}
            price="$XX"
            bgColor="bg-[var(--color-sen-yorange)]"
            minHeight="md:min-h-[clamp(360px,37.5vh,420px)]"
            glowColor="rgba(246,182,84,0.5)"
          />

          {/* Blue Card */}
          <PricingCard
            title="VIP"
            features={[
              "Everything in Premium",
              "Exclusive pre-conference experience with speakers",
              "Private, small-group access",
            ]}
            price="$XX"
            bgColor="bg-[#8FA4C5]"
            minHeight="md:min-h-[clamp(420px,40vh,480px)]"
            glowColor="rgba(143,164,197,0.6)"
          />

        </div>
      </div>
    </section>
  );
}