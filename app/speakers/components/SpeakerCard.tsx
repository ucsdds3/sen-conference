"use client";

import { useFlipCardHover } from "../../hooks/useFlipCardHover";

interface SpeakerCardProps {
  name: string;
  image?: string;
  accomplishments: string[];
  linkedin?: string;
  website?: string;
  flipped: boolean;
  onFlip: () => void;
}

export default function SpeakerCard({
  name,
  image,
  accomplishments,
  linkedin,
  website,
  flipped,
  onFlip,
}: SpeakerCardProps) {
  const { transform, mouseHandlers } = useFlipCardHover(flipped);

  return (
    <div
      className="relative w-full aspect-3/4 cursor-pointer perspective-[1000px]"
      onClick={onFlip}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{ transformStyle: "preserve-3d", WebkitTransformStyle: "preserve-3d", transform }}
        {...mouseHandlers}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl border border-black/10 bg-sen-card flex flex-col overflow-hidden backface-hidden">
          {image ? (
            <img src={image} alt={name} className="flex-1 object-cover" />
          ) : (
            <div className="flex-1 bg-black flex items-center justify-center">
              <p className="text-white/40 text-sm">No picture provided</p>
            </div>
          )}
          <div className="p-4">
            <p className="font-semibold text-sen-blue text-lg">{name}</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl border border-black/10 bg-sen-blue flex flex-col justify-between p-5 backface-hidden"
          style={{ transform: "rotateY(-180deg)" }}
        >
          <div>
            <p className="font-bold text-white text-lg mb-3">{name}</p>
            <ul className="space-y-2">
              {accomplishments.map((a, index) => (
                <li key={`${a}-${index}`} className="text-white/80 text-sm leading-snug flex gap-2">
                  <span className="text-sen-yorange mt-0.5">•</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2 mt-4">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-sen-blue"
                aria-label={`${name} on LinkedIn`}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                </svg>
              </a>
            )}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-sen-blue"
                aria-label={`Visit ${name}'s website`}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
