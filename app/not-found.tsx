import Link from "next/link";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6 py-20 text-center">
        <p className="text-sen-yorange font-semibold text-lg tracking-wide uppercase">404</p>
        <h1 className="text-sen-blue font-bold text-4xl md:text-5xl">Page not found</h1>
        <p className="text-sen-blue/60 max-w-md text-base md:text-lg">
          This page doesn&apos;t exist. Head back to the conference homepage.
        </p>
        <Link
          href="/"
          className="rounded-full bg-sen-blue px-8 py-3 text-white font-semibold text-base transition-all duration-200 hover:scale-105 hover:opacity-90"
        >
          Back to home
        </Link>
      </div>
      <Footer />
    </main>
  );
}
