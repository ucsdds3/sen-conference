"use client";

import { ReactNode, useState } from "react";

interface FAQItemProps {
  question: string;
  answer?: ReactNode;
  glowColor?: string;
}

export default function FAQItem({
  question,
  answer,
  glowColor = "rgba(13, 22, 38, 0.25)",
}: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        w-full
        max-w-[clamp(300px,90%,900px)]
        rounded-2xl
        overflow-hidden
        transition-all
        duration-300
      "
      style={{
        boxShadow: open
          ? `
            0 0 25px ${glowColor},
            0 18px 45px rgba(0,0,0,0.15)
          `
          : `
            0 0 15px ${glowColor},
            0 10px 25px rgba(0,0,0,0.08)
          `,
      }}
    >
      {/* Question */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          relative
          w-full
          bg-sen-blue
          text-white
          px-[clamp(1.25rem,2.5vw,2rem)]
          py-[clamp(1.1rem,1.6vw,1.6rem)]
          text-[clamp(1rem,1.6vw,1.8rem)]
          font-medium
          place-items-center
          transition-all
          gap-2
          duration-300
          hover:opacity-95
          cursor-pointer
        "
      >
        <span className="w-full">{question}</span>
        {/* Dropdown Arrow */}
        <span
          className={`
            h-fit
            text-2xl
            transition-transform
            duration-300
            ${open ? "rotate-180" : ""}
          `}
        >
          ▾
        </span>
      </button>

      {/* Answer */}
      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          ${open ? "max-h-250" : "max-h-0"}
        `}
      >
        <div
          className="
            bg-white
            border-t border-sen-blue/20
            px-[clamp(1.25rem,2.5vw,2rem)]
            py-[clamp(1rem,1.8vw,1.5rem)]
            text-left
            text-[clamp(1rem,1.4vw,1.1rem)]
            leading-relaxed
          "
        >
          {answer}
        </div>
      </div>
    </div>
  );
}
