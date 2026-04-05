"use client";

import { useState } from "react";

interface ScheduleCardProps {
  type: string;
  image: string;
  startTime: string;
  endTime: string;
  title: string;
  speakers: string;
  location: string;
  description: string;
  active: boolean;
}

export default function ScheduleCard({
  type,
  image,
  startTime,
  endTime,
  title,
  speakers,
  location,
  description,
  active,
}: ScheduleCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [hovered, setHovered] = useState(false);

  const transform = flipped
    ? "rotateY(-180deg)"
    : hovered && active
    ? "rotateY(-15deg)"
    : "rotateY(0deg)";

  return (
    <div
      className="relative w-full h-full cursor-pointer perspective-[1000px]"
      onClick={() => active && setFlipped((f) => !f)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{ transformStyle: "preserve-3d", transform }}
        onMouseEnter={() => { if (!flipped && active) setHovered(true); }}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl border border-black/10 bg-[#FAF9F6] flex flex-col overflow-hidden backface-hidden px-5 pt-10 pb-5">
          {/* Event type */}
          <p className="text-center text-sen-blue font-semibold text-lg mb-3">{type}</p>

          {/* Image */}
          {image ? (
            <img src={image} alt={title} className="w-full aspect-video object-cover rounded-lg mb-3" />
          ) : (
            <div className="w-full aspect-video bg-black rounded-lg mb-3 flex items-center justify-center">
              <p className="text-white/40 text-sm">No image provided</p>
            </div>
          )}

          {/* Time */}
          <p className="text-center text-sen-blue/70 font-medium text-sm mb-1">
            {startTime} – {endTime}
          </p>

          {/* Title */}
          <p className="text-center text-sen-blue font-bold text-lg mb-2">{title}</p>

          {/* Speakers */}
          {speakers && (
            <p className="text-center text-sen-blue/80 text-sm">{speakers}</p>
          )}

          {/* Location */}
          <div className="mt-auto flex items-center gap-1.5 text-sen-blue/70 text-sm">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-red-500 shrink-0">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span>{location}</span>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl border border-black/10 bg-[#FAF9F6] flex items-center justify-center p-6 backface-hidden"
          style={{ transform: "rotateY(-180deg)" }}
        >
          <p className="text-sen-blue/80 text-sm leading-relaxed text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}
