"use client";

import { useState } from "react";
import FAQItem from "./FAQItem";

const faqs = [
    {
      question: "What actually happens during the conference?",
      answer: (
        <>
          This is not a motivational conference.
          <br />
          <br />
          Expect zero hype talks.
          <br />
          <br />
          Blueprint Summit 2026 is a one-day, operator-led experience focused on{" "}
          <strong>how real companies are built, scaled, and operated.</strong>
          <br />
          <br />
          You&apos;ll rotate through workshops, panels, and small-group sessions led
          by founders, operators, and builders who are actively doing the work.
          <br />
          <br />
          Instead of passively listening, you&apos;ll engage directly, ask questions,
          and see how decisions are made in real businesses across different
          stages and industries.
        </>
      ),
    },
    {
      question: "What do I walk away with?",
      answer: (
        <>
          You leave with <strong>clear next steps</strong>, not just ideas.
          <br />
          <br />
          By the end of the day, you should walk away with:
          <ul className="list-disc list-inside mt-2 mb-2">
            <li>
              A sharper understanding of where you fit in the startup ecosystem
            </li>
            <li>
              Practical frameworks you can apply immediately to a business,
              role, or idea
            </li>
            <li>New relationships with people building at similar levels</li>
          </ul>
          <br />
          The goal is simple: you should be able to point to specific insights,
          decisions, or connections and say, &ldquo;
          <em>This changed how I think or act.</em>&rdquo;
        </>
      ),
    },
    {
      question:
        "Is this right for me if I'm early or not running a startup yet?",
      answer: (
        <>
          Yes, if you are serious about entrepreneurship.
          <br />
          <br />
          This event is designed for:
          <ul className="list-disc list-inside mt-2 mb-2">
            <li>Students exploring startups beyond surface-level interest</li>
            <li>Early-stage founders validating or building ideas</li>
            <li>
              Aspiring operators who want real exposure before joining a startup
            </li>
            <li>
              Builders who want to learn directly from people doing the work
            </li>
          </ul>
          <br />
          If you&apos;re looking for inspiration without action, this is not a fit.
          <br />
          <br />
          If you want clarity, direction, and exposure to real operators, it is.
        </>
      ),
    },
    {
      question: "Why is this a paid event?",
      answer: (
        <>
          Charging for tickets helps keep the room quality high.
          <br />
          <br />
          It filters for people who are serious, engaged, and willing to invest
          in their own growth. It also allows us to bring in operators,
          founders, and speakers who deliver real value rather than
          surface-level content.
          <br />
          <br />
          Student tickets are discounted to keep it accessible. Premium and VIP
          tiers exist for those who want closer access, better seating, and
          deeper interaction.
          <br />
          <br />
          If you&apos;re not willing to invest in learning from people who are
          actively building, this isn&apos;t for you. If you are, chances are you&apos;ll
          get far more out than you put in.
        </>
      ),
    },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full flex flex-col items-center py-[clamp(4rem,8vw,6rem)] px-[clamp(2rem,5vw,4rem)] bg-white">
      {/* Container */}
      <div className="flex w-full max-w-[clamp(300px,90%,1100px)] gap-[clamp(1rem,3vw,2rem)] flex-col items-center">
        {/* Heading */}
        <h2 className="relative text-sen-blue text-[clamp(3rem,6vw,5rem)] font-bold tracking-tight text-center z-10">
          FAQs
        </h2>

        {/* FAQ List */}
        <div className="flex flex-col gap-[clamp(0.3rem,0.5vw,0.5rem)] w-full items-center">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
