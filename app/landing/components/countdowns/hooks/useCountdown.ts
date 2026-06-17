import { useEffect, useState } from "react";

export function useCountdown(targetDate: number) {
  const [timeLeft, setTimeLeft] = useState(() => targetDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const ms = Math.max(timeLeft, 0);

  return {
    days: Math.floor(ms / 1000 / 60 / 60 / 24),
    hours: Math.floor((ms / 1000 / 60 / 60) % 24),
    minutes: Math.floor((ms / 1000 / 60) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}