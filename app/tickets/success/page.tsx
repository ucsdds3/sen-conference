"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import TicketsHeader from "../components/TicketsHeader";

function SuccessContent() {
  const searchParams = useSearchParams();
  const referralCode = searchParams.get("code") || "";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(referralCode);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <main className="flex justify-center py-[5vh] px-4 bg-linear-to-r from-sen-blue from-50% to-[#5F6B80]">
      <div className="h-[90vh] w-full max-w-3xl bg-white rounded-xl shadow-[0px_0px_20px_white] py-10">
        <div className="mb-8">
          <TicketsHeader />
        </div>
        <div className="flex flex-col h-[75vh] justify-between pb-8">
          <div
            className="relative bg-sen-blue text-white text-center pt-20 pb-24"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
            }}
          >
            <h2 className="text-7xl font-extrabold tracking-tight mb-4">
              YOU’RE IN!
            </h2>

            <p className="text-xl opacity-90">
              Don’t leave, there’s one more step...
            </p>
          </div>

          <div className="bg-white text-center px-6">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-4xl font-bold text-[#0D1626] mb-6 tracking-wide">
                UNLOCK MORE FOR YOUR EXPERIENCE
              </h3>

              <p className="text-gray-600 mb-6">
                If people use your referral code at checkout, you can:
              </p>

              <ul className="text-gray-700 space-y-3 mb-6">
                <li>• Refer 1 attendee → Get a free upgrade to Premium</li>
                <li>• Refer 3 attendees → Get a free upgrade to VIP</li>
                <li>• Refer 5 attendees → Get SEN exclusive merchandise</li>
              </ul>

              <p
                className={`mb-4 font-medium transition ${
                  copied ? "text-green-600" : "text-gray-600"
                }`}
              >
                {copied
                  ? "Copied!"
                  : "Copy and save your referral code below (once you leave, it won't ever come back!)"}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="relative">
                  <input
                    value={referralCode}
                    readOnly
                    className="bg-white border border-gray-300 rounded-md px-4 py-2 pr-10 shadow"
                  />

                  <button
                    onClick={copyToClipboard}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 transition cursor-pointer ${
                      copied
                        ? "text-green-600 scale-110"
                        : "text-gray-500 hover:text-black"
                    }`}
                  >
                    {copied ? "✔️" : "📋"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
