import BenefitsCard from "./BenefitsCard";
import RegisterButton from "../../../components/layout/RegisterButton";

export default function BenefitsSection() {
  return (
    <section className="relative z-10 w-full bg-white py-12 md:py-20">
      {/* top curve */}
      <div className="block overflow-hidden leading-none bg-white">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full h-32 md:h-40 -mb-px translate-y-px"
        >
          <path
            d="M0,0 C300,60 900,0 1200,40 L1200,60 L0,60 Z"
            fill="#0D1626"
          />
        </svg>
      </div>

      <div className="relative z-10 flex w-screen flex-col px-4 sm:px-6 lg:px-8 bg-sen-blue">
        <h2 className="relative my-6 text-center text-[clamp(2.5rem,7vw,5rem)] font-semibold tracking-tight text-white md:my-8 md:text-left self-center">
          What You'll Get
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
      <div className="block overflow-hidden leading-none bg-white">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full h-32 md:h-40 scale-x-[-1] scale-y-[-1] mb-px -translate-y-px"
        >
          <path
            d="M0,0 C300,60 900,0 1200,40 L1200,60 L0,60 Z"
            fill="#0D1626"
          />
        </svg>
      </div>
    </section>
  );
}
