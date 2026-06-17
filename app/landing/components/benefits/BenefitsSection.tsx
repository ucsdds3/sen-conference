import BenefitsCard from "./BenefitsCard";
import RegisterButton from "../../../components/layout/RegisterButton";
import WaveDivider from "../WaveDivider";

export default function BenefitsSection() {
  return (
    <section className="relative z-10 w-full bg-white py-12 md:py-20">
      {/* top curve */}
      <WaveDivider />

      <div className="relative z-10 flex w-full flex-col px-4 sm:px-6 lg:px-8 bg-sen-blue">
        <h2 className="relative my-6 w-full text-center text-[clamp(2.5rem,7vw,5rem)] font-semibold tracking-tight text-white md:my-8 md:text-left">
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
      </div>

      <div className="relative z-20 flex flex-col place-items-center bg-sen-blue">
        <RegisterButton />
      </div>

      {/* bottom curve */}
      <WaveDivider flipX flipY />
    </section>
  );
}
