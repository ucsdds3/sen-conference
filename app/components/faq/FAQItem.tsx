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
        w-screen
        max-w-[clamp(300px,90%,900px)]
        mb-[clamp(0.75rem,1vw,1rem)]
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
          relative
          w-full
          bg-sen-blue
          text-white
          px-[clamp(1.25rem,2.5vw,2rem)]
          py-[clamp(1.1rem,1.6vw,1.6rem)]
          text-[clamp(1.3rem,2.2vw,1.8rem)]
          font-medium
          text-center
          transition-all
          duration-300
          hover:opacity-95
          cursor-pointer
        "
      >
        {question}

        {/* Dropdown Arrow */}
        <span
          className={`
            absolute
            right-[clamp(1rem,2vw,1.5rem)]
            top-1/2
            -translate-y-1/2
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
          ${open ? "max-h-[1000px]" : "max-h-0"}
        `}
      >
        <div
          className="
            bg-[#FFFFFF]
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
