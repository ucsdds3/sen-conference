"use client";

import { useCountdown } from "../hooks/useCountdown";

const TARGET_DATE = new Date("2026-11-17T00:00:00-08:00").getTime();

export default function TopCountdownSection() {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);

  const format = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="w-full bg-sen-yorange">
      <div className="flex justify-center">
        <span className="font-semibold text-black text-[clamp(0.9rem,2vw,1.2rem)] tracking-wide py-[clamp(0.25rem,1vw,0.5rem)] text-center">
          {format(days)}d {format(hours)}h {format(minutes)}m {format(seconds)}s
          left to sign up
        </span>
      </div>
    </div>
  );
}
