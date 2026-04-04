"use client";

import { useCountdown } from "../hooks/useCountdown";
import DigitGroup from "./DigitGroup";
import RegisterButton from "../../RegisterButton";

const TARGET_DATE = new Date("2026-11-17T00:00:00").getTime();

export default function BottomCountdownSection() {
  const { days, hours, minutes } = useCountdown(TARGET_DATE);

  return (
    <section className="relative z-10 flex min-h-svh w-full items-center justify-center bg-sen-blue px-4 py-16 sm:px-6 md:min-h-screen">
      <div className="flex w-full max-w-[1400px] flex-col items-center text-center">
        <h2 className="mb-10 text-white font-bold tracking-[0.25em] text-[clamp(1.5rem,3.5vw,2.5rem)] md:mb-14">
          TIME LEFT TO REGISTER
        </h2>

        <div className="flex w-full max-w-4xl flex-col items-center gap-y-12 md:flex-row md:items-start md:justify-center md:gap-x-[clamp(2.5rem,8vw,7rem)] md:gap-y-0">
          <DigitGroup value={days ?? 0} digits={3} label="DAYS" />
          <DigitGroup value={hours ?? 0} digits={2} label="HOURS" />
          <DigitGroup value={minutes ?? 0} digits={2} label="MINUTES" />
        </div>

        <div className="mt-12 md:mt-16">
          <RegisterButton classes="text-[clamp(1.1rem,2vw,1.35rem)]" />
        </div>
      </div>
    </section>
  );
}
