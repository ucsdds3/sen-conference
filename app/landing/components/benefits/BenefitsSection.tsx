"use client";

import BenefitsCard from "./BenefitsCard";
import RegisterButton from "../../../components/layout/RegisterButton";

export default function BenefitsSection() {
  return (
    <section className="relative w-screen min-h-screen h-full flex flex-col p-8 md:p-20 bg-white z-10">
      {/* background */}
      <svg
        viewBox="0 0 2400 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-10 top-[-5%] left-0 h-[110%] w-auto"
      >
        <path
          d="M30.1471 60.7677C290.581 -98.8937 529.667 100.93 845.383 150.34C1161.1 199.75 1612.61 180.348 1703.68 328.58C1794.75 476.811 1792.86 536 1703.68 644C1614.5 752 1250.5 954.5 913.234 928.979C575.968 903.457 279.377 1093.83 30.1471 890.492C-219.083 687.156 -230.287 220.429 30.1471 60.7677Z"
          fill="#0D1626"
        />
      </svg>

      {/* Title */}
      <h2 className="relative text-white text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-tight text-center md:text-left my-8 z-10">
        What You'll Get
      </h2>

      {/* Cards Wrapper */}
      <div className="relative w-full bg-transparent py-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto bg-transparent">
          <BenefitsCard
            title="Practical Frameworks"
            benefits="Learn how founders and operators actually think about growth, execution, and decision-making…not theory, not motivation"
          />
          <BenefitsCard
            title="Real Conversations"
            benefits="Panels, workshops, and small-group moments designed for interaction, not passive listening."
          />
          <BenefitsCard
            title="Actionable Insights"
            benefits="Leave with concrete ideas, tools, and mental models you can apply immediately to your startup, career, or next project."
          />
        </div>
      </div>

      <div className="self-center mt-24 mb-16 z-10">
        <RegisterButton classes="text-[clamp(1rem,2vw,1.6rem)]" />
      </div>
    </section>
  );
}