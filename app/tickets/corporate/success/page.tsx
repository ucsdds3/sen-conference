"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import TicketsHeader from "../../components/TicketsHeader";

function CorporateSuccessContent() {
  const searchParams = useSearchParams();
  const company = searchParams.get("company") || "your organization";
  const quantity = searchParams.get("quantity") || "1";
  const ticket = searchParams.get("ticket") || "General Admission";

  return (
    <main className="flex justify-center py-[5vh] px-4 bg-linear-to-r from-sen-blue from-50% to-[#5F6B80]">
      <div className="h-[90vh] w-full max-w-3xl bg-white rounded-xl shadow-[0px_0px_20px_white] py-10">
        <div className="mb-8">
          <TicketsHeader />
        </div>

        <div className="mx-auto flex h-[75vh] max-w-2xl flex-col justify-center px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-sen-blue md:text-5xl">
            Purchase Confirmed
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Your corporate ticket purchase is confirmed.
          </p>

          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-6 text-left">
            <p className="text-sm text-slate-500">Company</p>
            <p className="mb-4 text-base font-semibold text-slate-900">
              {company}
            </p>

            <p className="text-sm text-slate-500">Ticket Type</p>
            <p className="mb-4 text-base font-semibold text-slate-900">
              {ticket}
            </p>

            <p className="text-sm text-slate-500">Number of Tickets</p>
            <p className="text-base font-semibold text-slate-900">{quantity}</p>
          </div>

          <p className="mt-6 text-sm text-slate-600">
            Need help? Contact our team for attendee updates or support.
          </p>
        </div>
      </div>
    </main>
  );
}

export default function CorporateSuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CorporateSuccessContent />
    </Suspense>
  );
}
