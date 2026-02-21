"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-05-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const ms = Math.max(timeLeft, 0);
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor((ms / 1000 / 60 / 60) % 24);
  const days = Math.floor((ms / 1000 / 60 / 60 / 24) % 30);
  const months = Math.floor(ms / 1000 / 60 / 60 / 24 / 30);

  const format = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="w-screen bg-[var(--color-sen-yorange)]">
      <div className="flex justify-center">
        <span className="font-semibold text-white text-[clamp(0.9rem,2vw,1.2rem)] tracking-wide py-[clamp(0.25rem,1vw,0.5rem)] text-center">
          {format(months)}mo {format(days)}d {format(hours)}h {format(minutes)}m {format(seconds)}s left to sign up
        </span>
      </div>
    </div>
  );
}