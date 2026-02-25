"use client";

import { useCountdown } from "../hooks/useCountdown";
import DigitGroup from "./DigitGroup";
import RegisterButton from "../../RegisterButton";

const TARGET_DATE = new Date("2026-11-17T00:00:00").getTime();

export default function BottomCountdownSection() {
  const { days, hours, minutes } = useCountdown(TARGET_DATE);

  return (
    <section className="min-h-screen bg-sen-blue flex items-center justify-center px-6">
      {/* Container */}
      <div className="w-full max-w-[1400px] flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-white font-bold tracking-[0.25em] text-[clamp(1.75rem,3.5vw,2.5rem)] mb-[clamp(3rem,6vw,5rem)]">
          TIME LEFT TO REGISTER
        </h2>

        {/* Countdown digits */}
        <div className="flex justify-center items-start gap-[clamp(3rem,7vw,7rem)] w-full">
          <DigitGroup value={days ?? 0} digits={3} label="DAYS" />
          <DigitGroup value={hours ?? 0} digits={2} label="HOURS" />
          <DigitGroup value={minutes ?? 0} digits={2} label="MINUTES" />
        </div>

        {/* Registration button */}
        <div className="mt-[clamp(4rem,8vw,6rem)]">
          <RegisterButton classes="text-[clamp(1.1rem,2vw,1.35rem)]" />
        </div>
      </div>
    </section>
  );
}
