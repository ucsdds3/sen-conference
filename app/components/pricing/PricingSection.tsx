"use client";

import PricingCard from "./PricingCard";

export default function PricingSection() {
  return (
    <>
      <div className="block overflow-hidden leading-none bg-white">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full h-32 md:h-40 scale-x-[-1] -mb-px translate-y-px"
        >
          <path
            d="M0,0 C300,60 900,0 1200,40 L1200,60 L0,60 Z"
            fill="#0D1626"
          />
        </svg>
      </div>
      <section className="font-editorial relative z-10 w-full bg-sen-blue">
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
          <h2 className="relative text-center text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-tight text-white md:text-right">
            Ticket Pricing
          </h2>

          {/* Mobile: vertical stack · lg+: three columns, featured center emphasis */}
          <div className="relative mx-auto mt-8 flex w-full max-w-lg flex-col gap-6 md:max-w-md md:gap-8 lg:max-w-6xl lg:flex-row lg:items-end lg:justify-center lg:gap-6 xl:gap-8">
            <div className="w-full shrink-0 lg:flex-1 lg:min-w-0 lg:max-w-sm">
              <PricingCard
                title="General"
                features={[
                  "Full access to all talks, panels, and workshops",
                  "Networking with attendees and speakers",
                ]}
                price="$XX"
                bgColor="bg-[var(--color-white)]"
                glowColor="rgba(255,255,255,0.12)"
              />
            </div>
            <div className="w-full shrink-0 lg:z-20 lg:flex-1 lg:min-w-0 lg:max-w-sm">
              <PricingCard
                title="Premium"
                features={[
                  "Everything in General",
                  "Priority seating",
                  "Enhanced event experience",
                ]}
                price="$XX"
                bgColor="bg-[var(--color-sen-yorange)]"
                glowColor="rgba(246,182,84,0.5)"
                featured
              />
            </div>
            <div className="w-full shrink-0 lg:flex-1 lg:min-w-0 lg:max-w-sm">
              <PricingCard
                title="VIP"
                features={[
                  "Everything in Premium",
                  "Exclusive pre-conference experience with speakers",
                  "Private, small-group access",
                ]}
                price="$XX"
                bgColor="bg-[#8FA4C5]"
                glowColor="rgba(143,164,197,0.6)"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="block overflow-hidden leading-none bg-white">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full h-32 md:h-40 scale-y-[-1] mb-px -translate-y-px"
        >
          <path
            d="M0,0 C300,60 900,0 1200,40 L1200,60 L0,60 Z"
            fill="#0D1626"
          />
        </svg>
      </div>
    </>
  );
}
