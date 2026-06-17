import type { Metadata } from "next";
import Link from "next/link";
import PageLayout from "./components/layout/PageLayout";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <PageLayout>
      <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6 py-20 text-center">
        <p className="text-sen-yorange font-semibold text-lg tracking-wide uppercase">404</p>
        <h1 className="text-sen-blue font-bold text-4xl md:text-5xl">Page not found</h1>
        <p className="text-sen-blue/60 max-w-md text-base md:text-lg">
          This page doesn&apos;t exist. Head back to the conference homepage.
        </p>
        <Link
          href="/"
          className="rounded-full bg-sen-blue px-8 py-3 text-white font-semibold text-base transition-all duration-200 hover:scale-105 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-sen-yorange focus-visible:ring-offset-2"
        >
          Back to home
        </Link>
      </div>
    </PageLayout>
  );
}
