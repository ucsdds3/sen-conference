import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SpeakerGrid from "./components/SpeakerGrid";

export default function SpeakersPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-sen-blue mb-12">Speakers</h1>
        <SpeakerGrid />
      </div>
      <Footer />
    </main>
  );
}
