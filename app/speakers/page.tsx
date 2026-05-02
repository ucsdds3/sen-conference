"use client";

import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SpeakerCard from "./components/SpeakerCard";
import speakers from "../../public/lib/speakers.json";

export default function SpeakersPage() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-sen-blue mb-12">Speakers</h1>
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
      </div>
      <Footer />
    </main>
  );
}
