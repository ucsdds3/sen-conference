"use client";

import BenefitsCard from "./BenefitsCard";

export default function BenefitsSection() {
  return (
    <section className="relative w-full h-screen bg-[var(--color-sen-blue)] overflow-hidden flex flex-col pt-32 md:pt-40">

      {/* Title */}
      <h2 className="absolute top-12 left-16 md:top-12 md:left-20 text-[var(--color-white)] text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
        What You'll Get
      </h2>

      {/* Cards Wrapper */}
      <div className="w-full px-8 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">

          {/* Card 1 */}
          <BenefitsCard
            title="Practical Frameworks"
            benefits="Learn how founders and operators actually think about growth, execution, and decision-making…not theory, not motivation"
          />

          {/* Card 2 */}
          <BenefitsCard
            title="Real Conversations"
            benefits="Panels, workshops, and small-group moments designed for interaction, not passive listening."
          />

          {/* Card 3 */}
          <BenefitsCard
            title="Actionable Insights"
            benefits="Leave with concrete ideas, tools, and mental models you can apply immediately to your startup, career, or next project."
          />

        </div>
      </div>
    </section>
  );
}