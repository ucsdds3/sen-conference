"use client";

import { useEffect, useState } from "react";

/* ---------------- RETRO FLIP DIGIT ---------------- */
export default function FlipDigit({ value }: { value: string }) {
  const [current, setCurrent] = useState(value);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (value !== current) {
      // Start flip
      setRotation(-90);

      const timeout = setTimeout(() => {
        setCurrent(value);
        setRotation(0);
      }, 600);

      return () => clearTimeout(timeout);
    }
  }, [value, current]);

  return (
    <div className="relative aspect-[3/4] w-[clamp(85px,9vw,140px)] perspective-[1000px]">
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotation}deg)`,
          transition: "transform 0.45s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {/* Front face showing current digit */}
        <div className="absolute inset-0 bg-sen-yorange rounded-xl flex items-center justify-center backface-hidden">
          <span className="text-black font-black text-[clamp(3.25rem,6vw,4.75rem)] leading-none">
            {current}
          </span>
        </div>

        {/* Back face showing next digit */}
        <div
          className="absolute inset-0 bg-sen-yorange rounded-xl flex items-center justify-center backface-hidden"
          style={{ transform: "rotateX(180deg)" }}
        >
          <span className="text-black font-black text-[clamp(3.25rem,6vw,4.75rem)] leading-none">
            {value}
          </span>
        </div>
      </div>
    </div>
  );
}