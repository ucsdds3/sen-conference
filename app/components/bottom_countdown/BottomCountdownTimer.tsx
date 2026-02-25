"use client";

import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-11-17T00:00:00").getTime();

export function bottomCountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(TARGET_DATE - Date.now());

  useEffect(() => {
    // Update countdown every second
    const timer = setInterval(() => {
      setTimeLeft(TARGET_DATE - Date.now());
    }, 1000);

    // Cleanup interval
    return () => clearInterval(timer);
  }, []);

  const ms = Math.max(timeLeft, 0);

  return {
    days: Math.floor(ms / 1000 / 60 / 60 / 24),
    hours: Math.floor((ms / 1000 / 60 / 60) % 24),
    minutes: Math.floor((ms / 1000 / 60) % 60),
  };
}