"use client";

import { useState } from "react";
import TicketsHeader from "../../components/TicketsHeader";

export default function SuccessPage() {
  const [referralCode] = useState(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  });

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
    <main className="min-h-screen bg-[#EAEAEA]">

      <div className="bg-[#EAEAEA] py-8">
        <div className="max-w-6xl mx-auto px-6">
          <TicketsHeader />
        </div>
      </div>

      <div
        className="relative bg-[#0D1626] text-white text-center pt-20 pb-24"
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

      <div className="bg-[#EAEAEA] pt-20 pb-24 text-center px-6">
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
            {copied ? "Copied!" : "Copy your referral code below:"}
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
                className={`absolute right-2 top-1/2 -translate-y-1/2 transition ${
                  copied
                    ? "text-green-600 scale-110"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {copied ? "✔️" : "📋"}
              </button>
            </div>

            <span className="text-gray-500 text-sm">OR</span>

            <button className="bg-[#F5A623] text-black px-6 py-2 rounded-md font-medium shadow-md hover:opacity-90 transition">
              Email me!
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}