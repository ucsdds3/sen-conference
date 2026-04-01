"use client";

import Link from "next/link";

type TicketSelectionCardProps = {
  title: string;
  description: string;
  cta: string;
  href: string;
};

export default function TicketSelectionCard({
  title,
  description,
  cta,
  href,
}: TicketSelectionCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sen-yorange"
    >
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-sen-blue">{title}</h2>
        <p className="text-sm text-slate-600">{description}</p>
      </div>

      <span className="mt-8 inline-flex items-center text-sm font-semibold text-sen-blue transition group-hover:text-sen-yorange">
        {cta} <span className="ml-2">↗</span>
      </span>
    </Link>
  );
}
