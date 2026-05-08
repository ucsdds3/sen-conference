import RegisterButton from "../../../components/layout/RegisterButton";

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-1 w-full items-center overflow-hidden">
      {/* Background image */}
      <img
        src="/assets/rady_hero.jpg"
        alt="Rady Background"
        className="absolute inset-0 w-full h-full object-cover object-center brightness-50 -z-10"
      />

      {/* Hero content */}
      <div className="flex h-fit max-w-full flex-col justify-center gap-1 px-6 py-16 md:max-h-none md:px-16 md:py-24">
        {/* Title */}
        <h1 className="text-white font-bold leading-tight my-4 text-4xl lg:text-6xl">
          Build What Actually Works.
          <br />
          Learn From People Who've Done It.
        </h1>

        {/* Subtitle */}
        <p className="text-white font-semibold text-[clamp(1rem,2vw,1.6rem)] max-w-3xl leading-relaxed mb-3 md:mb-4">
          A one-day, in-person conference bringing together founders, operators,
          and builders to share practical frameworks, real lessons, and
          actionable next steps you can actually use.
        </p>

        {/* Supporting line */}
        <p className="text-sen-yorange font-medium text-[clamp(1rem,1.5vw,1.3rem)] max-w-2xl mb-5 md:mb-6">
          Workshops. Panels. Real conversations. No fluff.
        </p>

        {/* CTA */}
        <RegisterButton />
      </div>
    </section>
  );
}
