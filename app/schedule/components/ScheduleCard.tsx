"use client";

import { useEffect, useState } from "react";
import { useFlipCardHover } from "../../hooks/useFlipCardHover";

interface ScheduleCardProps {
  type: string;
  image?: string;
  startTime: string;
  endTime: string;
  title: string;
  speakers?: string;
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
  const { transform, mouseHandlers } = useFlipCardHover(flipped, active);

  useEffect(() => {
    if (!active) setFlipped(false);
  }, [active]);

  return (
    <div
      className="relative w-full h-full cursor-pointer perspective-[1000px]"
      onClick={() => { if (active) setFlipped((f) => !f); }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{ transformStyle: "preserve-3d", WebkitTransformStyle: "preserve-3d", transform }}
        {...mouseHandlers}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl border border-black/10 bg-sen-card flex flex-col justify-between overflow-hidden backface-hidden px-5 py-6">
          <div className="flex-1 flex flex-col justify-center gap-2">
            <p className="text-center text-sen-blue font-semibold text-lg">{type}</p>

            {image ? (
              <img src={image} alt={title} className="w-full aspect-video object-cover rounded-lg" />
            ) : (
              <div className="w-full aspect-video bg-black rounded-lg flex items-center justify-center">
                <p className="text-white/40 text-sm">No image provided</p>
              </div>
            )}

            <p className="text-center text-sen-blue/70 font-medium text-sm">
              {startTime} – {endTime}
            </p>
            <p className="text-center text-sen-blue font-bold text-lg">{title}</p>

            {speakers && (
              <p className="text-center text-sen-blue/80 text-sm">{speakers}</p>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-sen-blue/70 text-sm pt-3">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-red-500 shrink-0" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span>{location}</span>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl border border-black/10 bg-sen-card flex items-center justify-center p-6 backface-hidden overflow-y-auto"
          style={{ transform: "rotateY(-180deg)" }}
        >
          <p className="text-sen-blue/80 text-sm leading-relaxed text-center">{description}</p>
        </div>
      </div>
    </div>
  );
}
