"use client";

import { bottomCountdownTimer } from "./BottomCountdownTimer";
import DigitGroup from "./DigitGroup";
import RegisterButton from "../RegisterButton";

export default function BottomCountdownSection() {
  const { days, hours, minutes } = bottomCountdownTimer();

  return (
    <section className="min-h-screen bg-sen-blue flex items-center justify-center px-6">
      {/* Countdown wrapper */}
      <div className="w-full max-w-[1400px] flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-white font-bold tracking-[0.25em] text-[clamp(1.75rem,3.5vw,2.5rem)] mb-[clamp(3rem,6vw,5rem)]">
          TIME LEFT TO REGISTER
        </h2>

        {/* Digit groups for days, hours, and minutes */}
        <div className="flex justify-center items-start gap-[clamp(3rem,7vw,7rem)] w-full">
          <DigitGroup value={days} digits={3} label="DAYS" />
          <DigitGroup value={hours} digits={2} label="HOURS" />
          <DigitGroup value={minutes} digits={2} label="MINUTES" />
        </div>

        {/* Registration button */}
        <div className="mt-[clamp(4rem,8vw,6rem)]">
          <RegisterButton classes="text-[clamp(1.1rem,2vw,1.35rem)]" />
        </div>
      </div>
    </section>
  );
}