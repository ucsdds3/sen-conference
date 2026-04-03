"use client";

import { useState } from "react";
import Form from "next/form";
import TicketsHeader from "./components/TicketsHeader";
import handleSubmit from "./scripts/handleSubmit";

export default function TicketsPage() {
  const [status, setStatus] = useState("");
  const HEAR_ABOUT_OPTIONS = [
    { value: "social media", label: "Social media" },
    { value: "website", label: "Website" },
    { value: "word of mouth", label: "Word of mouth" },
  ];

  return (
    <main className="min-h-screen flex items-start md:items-center justify-center px-4 py-8 bg-linear-to-r from-sen-blue from-50% to-[#5F6B80]">
      <div className="w-full max-w-3xl h-auto bg-white rounded-xl shadow-[0px_0px_20px_white] p-6 md:p-8 flex flex-col">
        <div className="flex flex-col gap-6">
          <TicketsHeader />

          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-sen-blue md:text-4xl">
              Individual Ticket Purchase
            </h1>
            <p className="text-sm text-slate-600 md:text-base">
              Complete the form below to purchase your ticket.
            </p>
          </div>

          <Form action={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <section className="grid grid-cols-1 gap-4 rounded-lg border border-slate-200 p-4 md:grid-cols-2">
                <h2 className="col-span-2 text-sm font-semibold text-sen-blue">
                  Contact Info
                </h2>

                <div className="flex flex-col gap-1 justify-end">
                  <label className="text-xs font-medium">First Name *</label>
                  <input
                    required
                    className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
                    name="firstName"
                    type="text"
                  />
                </div>

                <div className="flex flex-col gap-1 justify-end">
                  <label className="text-xs font-medium">Last Name *</label>
                  <input
                    required
                    className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
                    name="lastName"
                    type="text"
                  />
                </div>

                <div className="flex flex-col gap-1 justify-end">
                  <label className="text-xs font-medium">Status *</label>
                  <select
                    required
                    defaultValue=""
                    name="status"
                    onChange={(e) => setStatus(e.target.value)}
                    className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
                  >
                    <option value="" disabled hidden>
                      Click for dropdown
                    </option>
                    <option value="professional">Professional</option>
                    <option value="investor">Investor</option>
                    <option value="student">Student</option>
                    <option value="professor">University Professor</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1 justify-end">
                  <label className="text-xs font-medium">
                    How did you hear about us? *
                  </label>
                  <select
                    required
                    defaultValue=""
                    name="reach"
                    className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
                  >
                    <option value="" disabled hidden>
                      Click for dropdown
                    </option>
                    {HEAR_ABOUT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1 justify-end">
                  <label className="text-xs font-medium">Email *</label>
                  <input
                    required
                    className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
                    name="email"
                    type="email"
                    placeholder={
                      status === "student"
                        ? "Please use your school email."
                        : ""
                    }
                  />
                </div>

                <div className="flex flex-col gap-1 justify-end">
                  <label className="text-xs font-medium">Phone Number *</label>
                  <input
                    required
                    className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
                    name="phone"
                    type="text"
                  />
                </div>

                <div
                  className={
                    status === "professional"
                      ? "flex flex-col gap-1 justify-end"
                      : "hidden"
                  }
                >
                  <label className="text-xs font-medium">
                    Company/Organization *
                  </label>
                  <input
                    required={status === "professional"}
                    className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
                    name="company"
                    type="text"
                  />
                </div>

                <div
                  className={
                    status === "professional"
                      ? "flex flex-col gap-1 justify-end"
                      : "hidden"
                  }
                >
                  <label className="text-xs font-medium">Job Title *</label>
                  <input
                    required={status === "professional"}
                    className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
                    name="jobTitle"
                    type="text"
                  />
                </div>

                <div
                  className={
                    status === "student"
                      ? "flex flex-col gap-1 justify-end"
                      : "hidden"
                  }
                >
                  <label className="text-xs font-medium">
                    University/School *
                  </label>
                  <input
                    required={status === "student"}
                    className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
                    name="school"
                    type="text"
                  />
                </div>

                <div
                  className={
                    status === "student"
                      ? "flex flex-col gap-1 justify-end"
                      : "hidden"
                  }
                >
                  <label className="text-xs font-medium">Major *</label>
                  <input
                    required={status === "student"}
                    className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
                    name="major"
                    type="text"
                  />
                </div>
              </section>

              <section className="grid grid-cols-1 gap-4 rounded-lg border border-slate-200 p-4 md:grid-cols-2">
                <h2 className="col-span-2 text-sm font-semibold text-sen-blue">
                  Ticket Details
                </h2>

                <div className="col-span-2 flex flex-col gap-1 justify-end">
                  <label className="text-xs font-medium">
                    Choose Ticket *
                  </label>
                  <select
                    required
                    defaultValue=""
                    name="ticket"
                    className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
                  >
                    <option value="" disabled hidden>
                      Click for dropdown
                    </option>
                    <option value="General Admission">General Admission</option>
                    <option value="Premium">Premium</option>
                    <option value="VIP">VIP</option>
                  </select>
                </div>

                <div className="col-span-2 flex flex-col gap-1 justify-end">
                  <label className="text-xs font-medium">
                    Have a referral code from a friend?
                  </label>
                  <input
                    className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
                    name="referral-code"
                    type="text"
                  />
                </div>
              </section>
            </div>

            <button
              type="submit"
              className="w-full bg-sen-blue text-white py-3 rounded-lg cursor-pointer font-semibold hover:opacity-90 transition text-md mt-2"
            >
              Check Out
            </button>
          </Form>
        </div>
      </div>
    </main>
  );
}
