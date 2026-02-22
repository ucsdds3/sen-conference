"use client";

import Countdown from "./Countdown";
import RegisterButton from "../RegisterButton";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <img
        src="/assets/speaker.png"
        alt="Speaker Background"
        className="absolute inset-0 w-full h-full object-cover brightness-50 -z-10"
      />

      {/* Countdown */}
      <div className="absolute top-0 left-0 w-full">
        <Countdown />
      </div>

      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 gap-6 md:gap-8">
        {/* Title */}
        <h1
          className="text-white font-bold leading-tight mb-3 md:mb-4"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 4.4rem)",
            maxWidth: "36ch",
          }}
        >
          Build What Actually Works.
          <br />
          Learn From People Who’ve Done It.
        </h1>

        {/* Subtitle */}
        <p className="text-white font-semibold text-[clamp(1rem,2vw,1.6rem)] max-w-3xl leading-relaxed mb-3 md:mb-4">
          A one-day, in-person conference bringing together founders, operators,
          and builders to share practical frameworks, real lessons, and actionable
          next steps you can actually use.
        </p>

        {/* Supporting line */}
        <p className="text-sen-yorange font-medium text-[clamp(1rem,1.5vw,1.3rem)] max-w-2xl mb-5 md:mb-6">
          Workshops. Panels. Real conversations. No fluff.
        </p>

        {/* CTA */}
        <RegisterButton classes="text-[clamp(1rem,2vw,1.6rem)]" />
      </div>
    </section>
  );
}