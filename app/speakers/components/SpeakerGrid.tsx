"use client";

import { useState } from "react";
import SpeakerCard from "./SpeakerCard";
import speakers from "../../../public/lib/speakers.json";

export default function SpeakerGrid() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {speakers.map((speaker, i) => (
        <SpeakerCard
          key={`${speaker.name}-${i}`}
          {...speaker}
          flipped={i === flippedIndex}
          onFlip={() => setFlippedIndex(i === flippedIndex ? null : i)}
        />
      ))}
    </div>
  );
}
