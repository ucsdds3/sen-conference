import { useEffect, useState } from "react";

export function useCountdown(targetDate: number) {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      setTimeLeft(targetDate - Date.now());
    };

    update();

    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft === null) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const ms = Math.max(timeLeft, 0);

  return {
    days: Math.floor(ms / 1000 / 60 / 60 / 24),
    hours: Math.floor((ms / 1000 / 60 / 60) % 24),
    minutes: Math.floor((ms / 1000 / 60) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}