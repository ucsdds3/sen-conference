"use client";

import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ScheduleCard from "./components/ScheduleCard";
import schedule from "../../public/lib/schedule.json";
import { TARGET_DATE } from "../landing/components/countdowns/constants";

export default function SchedulePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () => setActiveIndex((i) => Math.min(schedule.length - 1, i + 1));

  const renderCards = (cardWidth: string, getOffset: (i: number) => number, scaled: boolean) =>
    schedule.map((event, i) => (
      <div
        key={i}
        className={`absolute top-0 h-full ${cardWidth} px-2 transition-all duration-500 ease-in-out`}
        style={{ left: `${getOffset(i)}%` }}
      >
        <div className={`w-full h-full ${scaled ? `transition-all duration-500 ${i === activeIndex ? "scale-105" : "scale-95 opacity-60"}` : ""}`}>
          <ScheduleCard {...event} active={i === activeIndex} />
        </div>
      </div>
    ));

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 gap-8">
        <h1 className="text-sen-blue font-bold text-4xl md:text-5xl">Schedule</h1>
        <p className="text-sen-blue/60 text-lg">
          {new Date(TARGET_DATE).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
            timeZone: "America/Los_Angeles",
          })}
        </p>

        <div className="relative w-full max-w-5xl flex items-center gap-4">
          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            aria-label="Previous event"
            className="shrink-0 w-11 h-11 rounded-full bg-sen-yorange flex items-center justify-center shadow disabled:opacity-30 transition-opacity z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sen-blue"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-sen-blue">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Mobile carousel — 1 card */}
          <div className="flex-1 relative overflow-hidden aspect-3/4 md:hidden">
            {renderCards("w-full", (i) => (i - activeIndex) * 100, false)}
          </div>

          {/* Desktop carousel — 3 cards */}
          <div className="flex-1 relative overflow-x-clip overflow-y-visible aspect-9/4 hidden md:block">
            {renderCards("w-1/3", (i) => (i - activeIndex + 1) * 33.333, true)}
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={schedule.length === 0 || activeIndex === schedule.length - 1}
            aria-label="Next event"
            className="shrink-0 w-11 h-11 rounded-full bg-sen-yorange flex items-center justify-center shadow disabled:opacity-30 transition-opacity z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sen-blue"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-sen-blue">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>

        <div aria-live="polite" aria-atomic="true" className="sr-only">
          {schedule[activeIndex]?.title ?? ""}
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {schedule.map((_, i) => (
            <button
              key={`dot-${i}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to event ${i + 1}`}
              aria-pressed={i === activeIndex}
              className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sen-blue ${
                i === activeIndex ? "bg-sen-blue w-4" : "bg-sen-blue/30 w-2"
              }`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
