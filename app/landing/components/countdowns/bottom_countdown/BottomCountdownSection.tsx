"use client";

import { useCountdown } from "../hooks/useCountdown";
import DigitGroup from "./DigitGroup";
import RegisterButton from "../../../../components/layout/RegisterButton";

const TARGET_DATE = new Date("2026-11-17T00:00:00-08:00").getTime();

export default function BottomCountdownSection() {
  const { days, hours, minutes } = useCountdown(TARGET_DATE);

  return (
    <section className="relative z-10 flex h-fit w-full items-center justify-center bg-sen-blue px-4 py-10 sm:px-6">
      <div className="flex w-full flex-col items-center text-center gap-10">
        <div className="flex flex-row items-center gap-4 h-fit w-full">
          <div className="flex-1 h-px bg-white" />
          <h2 className="text-white font-bold tracking-[0.2em] text-[clamp(1.5rem,3.5vw,2.5rem)]">
            TIME LEFT TO REGISTER
          </h2>
          <div className="flex-1 h-px bg-white" />
        </div>

        <div className="flex w-full flex-col items-center gap-6 md:flex-row md:items-start md:justify-center">
          <DigitGroup value={days ?? 0} digits={3} label="DAYS" />
          <DigitGroup value={hours ?? 0} digits={2} label="HOURS" />
          <DigitGroup value={minutes ?? 0} digits={2} label="MINUTES" />
        </div>

        {/* Registration button */}
        <div className="flex flex-row items-center gap-4 h-fit w-full">
          <div className="flex-1 h-px bg-white" />
          <RegisterButton />
          <div className="flex-1 h-px bg-white" />
        </div>
      </div>
    </section>
  );
}
