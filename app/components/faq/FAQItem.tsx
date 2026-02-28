"use client";

import { ReactNode, useState } from "react";

interface FAQItemProps {
  question: string;
  answer?: ReactNode
}

export default function FAQItem({ question, answer = "Put answers here" }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-[clamp(300px,90%,900px)] mb-[clamp(0.3rem,0.5vw,0.5rem)]">
      {/* Question Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`
          relative
          w-full
          bg-sen-blue
          text-white
          px-[clamp(1rem,2vw,2rem)]
          py-[clamp(1rem,1.5vw,1.5rem)]
          text-[clamp(1.25rem,2.2vw,1.75rem)]
          font-medium
          text-center
          transition-all
          duration-300
          hover:opacity-90
          ${open ? "rounded-t-2xl" : "rounded-2xl"}
        `}
      >
        <span className="block w-full">{question}</span>
        <span
          className={`
            absolute
            right-[clamp(1rem,2vw,1.5rem)]
            top-1/2
            -translate-y-1/2
            transition-transform
            duration-300
            ${open ? "rotate-180" : ""}
          `}
        >
          ▾
        </span>
      </button>

      {/* Answer Dropdown */}
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
            bg-[#F0F0F0]
            border
            border-t-0
            border-gray-300
            shadow-sm
            rounded-b-2xl
            px-[clamp(1rem,2vw,2rem)]
            py-[clamp(0.75rem,1.5vw,1.25rem)]
            text-left
            text-[clamp(0.95rem,1.4vw,1.05rem)]
          "
        >
          {answer}
        </div>
      </div>
    </div>
  );
}