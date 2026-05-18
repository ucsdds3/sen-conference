"use client";

import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center gap-6 px-6 py-20 text-center">
      <p className="text-sen-yorange font-semibold text-lg tracking-wide uppercase">Error</p>
      <h1 className="text-sen-blue font-bold text-4xl md:text-5xl">Something went wrong</h1>
      <p className="text-sen-blue/60 max-w-md text-base md:text-lg">
        An unexpected error occurred. You can try again or return home.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-sen-blue px-8 py-3 text-white font-semibold text-base transition-all duration-200 hover:scale-105 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-sen-yorange focus:ring-offset-2"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border-2 border-sen-blue px-8 py-3 text-sen-blue font-semibold text-base transition-all duration-200 hover:scale-105 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-sen-yorange focus:ring-offset-2"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
