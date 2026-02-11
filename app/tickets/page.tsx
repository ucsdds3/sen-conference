"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function TicketsPage() {
  const router = useRouter();

  return (
    <main className="flex justify-center bg-[#F3F3F3] py-20 px-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Image
            src="/sen-conference/assets/SEN_small_logo.png"
            alt="SEN Logo"
            width={60}
            height={60}
          />
          <div>
            <h1 className="text-2xl font-bold text-black">
              Blueprint Summit 2026
            </h1>
            <p className="text-sm text-gray-600">
              SEN’s Startup & Innovation Conference
            </p>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center mb-12">
          <div className="w-[420px]">
            <div className="relative flex items-center w-full">
              <div className="absolute w-full h-[2px] bg-[#0D1626]" />

              <div className="relative z-10 w-5 h-5 rounded-full bg-[#0D1626] shadow-[0_0_0_4px_rgba(255,204,0,0.5)]" />

              <div className="flex-1" />

              <div className="relative z-10 w-5 h-5 rounded-full bg-[#0D1626]" />
            </div>

            <div className="flex justify-between mt-3 text-base">
              <span className="font-medium text-black">Details</span>
              <span className="text-gray-500">Payment</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Attendee First Name *
            </label>
            <input
              className="bg-gray-100 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F6B654]"
              type="text"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Attendee Last Name *
            </label>
            <input
              className="bg-gray-100 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F6B654]"
              type="text"
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <label className="text-sm font-medium mb-1">Attendee Email *</label>
            <input
              className="bg-gray-100 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F6B654]"
              type="email"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">City *</label>
            <input
              className="bg-gray-100 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F6B654]"
              type="text"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">State *</label>
            <input
              className="bg-gray-100 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F6B654]"
              type="text"
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <label className="text-sm font-medium mb-1">Choose Ticket *</label>
            <select className="bg-gray-100 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F6B654]">
              <option>General Admission</option>
              <option>Student</option>
              <option>VIP</option>
            </select>
          </div>

          <div className="col-span-2 flex flex-col">
            <label className="text-sm font-medium mb-1">
              Have a referral code from a friend?
            </label>
            <input
              className="bg-gray-100 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F6B654]"
              type="text"
            />
          </div>
        </div>

        {/* Checkout Button */}
        <button
          onClick={() => router.push("/tickets/payment")}
          className="mt-12 w-full bg-[#0D1626] text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition"
        >
          Check Out
        </button>
      </div>
    </main>
  );
}
