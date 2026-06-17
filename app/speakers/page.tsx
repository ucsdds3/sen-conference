import type { Metadata } from "next";
import PageLayout from "../components/layout/PageLayout";
import SpeakerGrid from "./components/SpeakerGrid";

export const metadata: Metadata = {
  title: "Speakers",
  description: "Meet the founders, operators, and builders speaking at Blueprint Summit 2026.",
};

export default function SpeakersPage() {
  return (
    <PageLayout>
      <div className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-sen-blue mb-12">Speakers</h1>
        <SpeakerGrid />
      </div>
    </PageLayout>
  );
}
