import BenefitsCard from "./BenefitsCard";
import RegisterButton from "../../../components/layout/RegisterButton";

export default function BenefitsSection() {
  return (
    <section className="relative z-10 w-full bg-white py-12 md:py-20">
      <svg
        viewBox="0 0 2400 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-10 top-[-5%] left-0 h-[110%]"
      >
        <path
          d="M30.1471 60.7677C290.581 -98.8937 529.667 100.93 845.383 150.34C1161.1 199.75 1612.61 180.348 1703.68 328.58C1794.75 476.811 1792.86 536 1703.68 644C1614.5 752 1250.5 954.5 913.234 928.979C575.968 903.457 279.377 1093.83 30.1471 890.492C-219.083 687.156 -230.287 220.429 30.1471 60.7677Z"
          className="fill-sen-blue"
        />
      </svg>
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
        <h2 className="relative my-6 text-center text-[clamp(2.5rem,7vw,5rem)] font-semibold tracking-tight text-white md:my-8 md:text-left">
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

      <div className="relative z-20 flex flex-col place-items-center mt-6">
        <RegisterButton />
      </div>
    </section>
  );
}
