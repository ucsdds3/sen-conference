"use client";

import { useState } from "react";
import Header from "../components/layout/Header";
import ScheduleCard from "./components/ScheduleCard";
import schedule from "../../public/lib/schedule.json";

export default function SchedulePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const next = () => setActiveIndex((i) => Math.min(schedule.length - 1, i + 1));

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-16 gap-8">
        <h1 className="text-sen-blue font-bold text-4xl md:text-5xl">Schedule</h1>
        <p className="text-sen-blue/60 text-lg">Insert date of conference here</p>

        <div className="relative w-full max-w-5xl flex items-center gap-4">
          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={activeIndex === 0}
            className="shrink-0 w-11 h-11 rounded-full bg-sen-yorange flex items-center justify-center shadow disabled:opacity-30 transition-opacity z-10"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-sen-blue">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Mobile carousel — 1 card */}
          <div className="flex-1 relative overflow-hidden aspect-3/4 md:hidden">
            {schedule.map((event, i) => (
              <div
                key={i}
                className="absolute top-0 h-full w-full px-2 transition-all duration-500 ease-in-out"
                style={{ left: `${(i - activeIndex) * 100}%` }}
              >
                <div className="w-full h-full">
                  <ScheduleCard {...event} active={i === activeIndex} />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop carousel — 3 cards */}
          <div className="flex-1 relative overflow-hidden aspect-9/4 hidden md:block">
            {schedule.map((event, i) => (
              <div
                key={i}
                className="absolute top-0 h-full w-1/3 px-2 transition-all duration-500 ease-in-out"
                style={{ left: `${(i - activeIndex + 1) * 33.333}%` }}
              >
                <div className={`w-full h-full transition-all duration-500 ${i === activeIndex ? "scale-105" : "scale-95 opacity-60"}`}>
                  <ScheduleCard {...event} active={i === activeIndex} />
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={activeIndex === schedule.length - 1}
            className="shrink-0 w-11 h-11 rounded-full bg-sen-yorange flex items-center justify-center shadow disabled:opacity-30 transition-opacity z-10"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-sen-blue">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {schedule.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-sen-blue w-4" : "bg-sen-blue/30 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
