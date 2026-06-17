import { ReactNode } from "react";

interface FAQItemProps {
  id: number;
  question: string;
  answer: ReactNode;
  open: boolean;
  onToggle: () => void;
}

export default function FAQItem({ id, question, answer, open, onToggle }: FAQItemProps) {
  const glowColor = "rgba(13, 22, 38, 0.25)";

  return (
    <div
      className="
        w-full
        max-w-[clamp(300px,90%,900px)]
        rounded-2xl
        overflow-hidden
        transition-shadow
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
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-answer-${id}`}
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
          gap-2
          transition-opacity
          duration-300
          hover:opacity-95
          cursor-pointer
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-inset
          focus-visible:ring-sen-yorange
        "
      >
        <span className="w-full">{question}</span>
        {/* Dropdown Arrow */}
        <span
          aria-hidden="true"
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
        id={`faq-answer-${id}`}
        className={`
          grid
          transition-[grid-template-rows]
          duration-500
          ease-in-out
          ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        <div className="overflow-hidden min-h-0">
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
    </div>
  );
}
