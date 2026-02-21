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
      <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-12 gap-4 md:gap-6">
        {/* Headline — fluid font, max 2 lines */}
        <h1
          className="text-white font-bold leading-snug"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            maxWidth: "36ch", // ensures exactly 2 lines
          }}
        >
          Build What Actually Works.
          <br />
          Learn From People Who’ve Done It.
        </h1>

        {/* Description */}
        <p className="text-white font-semibold text-[clamp(0.9rem,2vw,1.5rem)] max-w-3xl leading-relaxed">
          A one-day, in-person conference bringing together founders, operators,
          and builders to share practical frameworks, real lessons, and actionable
          next steps you can actually use.
        </p>

        {/* Tagline */}
        <p className="text-sen-yorange font-medium text-[clamp(0.9rem,1.5vw,1.25rem)] max-w-2xl">
          Workshops. Panels. Real conversations. No fluff.
        </p>

        {/* Register Button */}
        <RegisterButton classes="text-[clamp(0.9rem,2vw,1.5rem)] mt-2" />
      </div>
    </section>
  );
}