"use client";

import BenefitsCard from "./BenefitsCard";
import RegisterButton from "../RegisterButton";

export default function BenefitsSection() {
  return (
    <section className="relative z-10 w-full bg-sen-blue py-12 md:py-20">
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <h2 className="relative my-6 text-center text-[clamp(2.5rem,7vw,5rem)] font-bold tracking-tight text-white md:my-8 md:text-left">
          What You&apos;ll Get
        </h2>

        <div className="relative w-full py-4">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 md:grid-cols-3 md:gap-8">
            <BenefitsCard
              title="Practical Frameworks"
              benefits="Learn how founders and operators actually think about growth, execution, and decision-making…not theory, not motivation"
              imageSrc="/assets/sen-picture-1.jpg"
              imageAlt="Blueprint Summit — practical frameworks"
            />
            <BenefitsCard
              title="Real Conversations"
              benefits="Panels, workshops, and small-group moments designed for interaction, not passive listening."
              imageSrc="/assets/sen-picture-2.jpg"
              imageAlt="Blueprint Summit — real conversations"
            />
            <BenefitsCard
              title="Actionable Insights"
              benefits="Leave with concrete ideas, tools, and mental models you can apply immediately to your startup, career, or next project."
              imageSrc="/assets/sen-picture-3.jpg"
              imageAlt="Blueprint Summit — actionable insights"
            />
          </div>
        </div>

        <div className="z-10 mx-auto mt-12 mb-8 md:mt-16 md:mb-12">
          <RegisterButton classes="text-[clamp(1rem,2vw,1.6rem)]" />
        </div>
      </div>
    </section>
  );
}
