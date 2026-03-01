"use client";

import { useState } from "react";
import Form from "next/form";
import TicketsHeader from "./components/TicketsHeader";
import handleSubmit from "./scripts/handleSubmit";

export default function TicketsPage() {
  const [status, setStatus] = useState("");

  return (
    <main className="flex justify-center py-[5vh] px-4 bg-linear-to-r from-sen-blue from-50% to-[#5F6B80]">
      <div className="h-[90vh] w-full max-w-3xl bg-white rounded-xl shadow-[0px_0px_20px_white] p-10">
        <div className="flex flex-col gap-8">
          <TicketsHeader />

          <div className="flex justify-center mb-12">
            <div className="w-[420px]">
              <div className="relative flex items-center w-full">
                <div className="absolute w-full h-[2px] bg-sen-blue" />

                <div className="relative z-10 w-5 h-5 rounded-full bg-sen-blue border-3 border-sen-yorange p-2.5" />

                <div className="flex-1" />

                <div className="relative z-10 w-5 h-5 rounded-full bg-sen-blue" />
              </div>

              <div className="flex justify-between mt-3 text-base">
                <span className="font-medium text-black text-sm">Details</span>
                <span className="font-medium text-gray-500 text-sm">
                  Payment
                </span>
              </div>
            </div>
          </div>
        </div>

        <Form action={handleSubmit} className="flex flex-col h-[60vh]">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-xs font-medium mb-1">First Name *</label>
              <input
                required
                className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
                name="first-name"
                type="text"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-medium mb-1">Last Name *</label>
              <input
                required
                className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
                name="last-name"
                type="text"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-medium mb-1">Status *</label>
              <select
                required
                defaultValue=""
                name="status"
                id="status-dropdown"
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

            <div className="flex flex-col">
              <label className="text-xs font-medium mb-1">
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
                <option value="social media">Social media</option>
                <option value="website">Website</option>
                <option value="mouth">Word of mouth</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-medium mb-1">Email *</label>
              <input
                required
                className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
                name="email"
                type="email"
                placeholder={
                  status === "student" ? "Please use your school email." : ""
                }
                id="email-input"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-medium mb-1">Phone Number *</label>
              <input
                required
                className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
                name="number"
                type="text"
              />
            </div>

            <div
              className={status === "professional" ? "flex flex-col" : "hidden"}
              id="company-container"
            >
              <label className="text-xs font-medium mb-1">
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
              className={status === "professional" ? "flex flex-col" : "hidden"}
              id="job-title-container"
            >
              <label className="text-xs font-medium mb-1">Job Title *</label>
              <input
                required={status === "professional"}
                className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
                name="job-title"
                type="text"
              />
            </div>

            <hr className="col-span-2" />

            <div className="col-span-2 flex flex-col">
              <label className="text-xs font-medium mb-1">
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

            <div className="col-span-2 flex flex-col">
              <label className="text-xs font-medium mb-1">
                Have a referral code from a friend?
              </label>
              <input
                className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange text-xs"
                name="referral-code"
                type="text"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-auto w-full bg-sen-blue text-white py-3 rounded-lg font-semibold hover:opacity-90 transition text-md"
          >
            Check Out
          </button>
        </Form>
      </div>
    </main>
  );
}
