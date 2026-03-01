"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import TicketsHeader from "../components/TicketsHeader";

function VerificationContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const [error, setError] = useState("");

  const handleVerify = async () => {
    const codeInput = document.getElementById("code-input") as HTMLInputElement;
    const code = codeInput.value;

    console.log(code);

    const res = await fetch("/api/verify-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code }),
    });

    const data = await res.json();
    console.log("data:", data);

    if (!data.valid) {
      setError("Invalid or expired code. Please try again.");
      return;
    }

    // proceed to checkout with stored form data
    const checkoutRes = await fetch("/api/checkout", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    ticket: data.formData.ticket,
    attendee: {
      firstName: data.formData["first-name"],
      lastName: data.formData["last-name"],
      email: data.formData.email,
      number: data.formData.number,
      status: data.formData.status,
      reach: data.formData.reach,
      company: data.formData.company,
      jobTitle: data.formData["job-title"],
      ticket: data.formData.ticket,
      referralCode: data.formData["referral-code"],
    },
  }),
});

    const checkoutData = await checkoutRes.json();
    if (checkoutData.url) {
      window.location.href = checkoutData.url;
    }
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col bg-white p-8 rounded-xl shadow max-w-md w-full text-center gap-10">
        <TicketsHeader />

        <div>
          <h2 className="text-2xl font-bold mb-4">Verify your student email</h2>
          <p className="text-gray-600 mb-6">
            We sent a code to <strong>{email}</strong>
          </p>
          <input
            id="code-input"
            placeholder="Enter code"
            className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4 text-center tracking-widest text-xl"
            type="text"
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            onClick={handleVerify}
            className="w-full bg-sen-blue text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Verify
          </button>
        </div>
      </div>
    </main>
  );
}

export default function Verification() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerificationContent />
    </Suspense>
  );
}
