import PricingCard from "./PricingCard";

export default function PricingSection() {
  return (
    <section className="relative w-screen min-h-screen flex flex-col p-8 md:p-20 bg-white">
      {/* background */}
      <svg
        viewBox="-400 0 3000 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-10 top-[-5%] left-[-15%] h-[125%] w-auto"
      >
        <path
          d="M1422.5 77.1817C1152.14 -82.4796 896.335 34.5809 576.183 166.754C256.032 298.927 -137.468 552.927 -314.835 344.994C-492.203 137.061 -406.631 540.146 -342.066 708.914C-277.5 877.681 183.992 898.604 505.746 945.393C827.5 992.181 1163.77 1110.24 1422.5 906.905C1681.23 703.57 1692.86 236.843 1422.5 77.1817Z"
          fill="#0D1626"
        />
      </svg>

      {/* Title */}
      <h2 className="relative text-white text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-tight text-center md:text-right my-8 z-10">
        Ticket Pricing
      </h2>

      {/* Cards Wrapper */}
      <div className="relative w-full px-4 md:px-20 mt-12 md:mt-24 z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-6xl mx-auto">
          <PricingCard
            title="General"
            features={[
              "Full access to all talks, panels, and workshops",
              "Networking with attendees and speakers",
            ]}
            price="$XX"
            bgColor="bg-[#C4C4C4]"
            height="md:min-h-[80%]"
            glowColor="rgba(217,217,217,0.6)"
          />
          <PricingCard
            title="Premium"
            features={[
              "Everything in General",
              "Priority seating",
              "Enhanced event experience",
            ]}
            price="$XX"
            bgColor="bg-[var(--color-sen-yorange)]"
            height="md:min-h-[90%]"
            glowColor="rgba(246,182,84,0.5)"
          />
          <PricingCard
            title="VIP"
            features={[
              "Everything in Premium",
              "Exclusive pre-conference experience with speakers",
              "Private, small-group access",
            ]}
            price="$XX"
            bgColor="bg-[#99B2DD]"
            height="md:h-full"
            glowColor="rgba(153,178,221,0.6)"
          />
        </div>
      </div>
    </section>
  );
}