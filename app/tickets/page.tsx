"use client";

import { useRouter } from "next/navigation";
import TicketsHeader from "./components/TicketsHeader";

export default function TicketsPage() {
  const router = useRouter();

  return (
    <main className="flex justify-center py-[5vh] px-4 bg-linear-to-r from-sen-blue from-50% to-[#5F6B80]">
      <div className="h-[90vh] w-full max-w-3xl bg-white rounded-xl shadow-md p-10">
        <TicketsHeader />
        
        <div className="flex justify-center mb-12">
          <div className="w-[420px]">
            <div className="relative flex items-center w-full">
              <div className="absolute w-full h-[2px] bg-[#0D1626]" />

              <div className="relative z-10 w-5 h-5 rounded-full bg-[#0D1626] border-3 border-sen-yorange p-2.5" />

              <div className="flex-1" />

              <div className="relative z-10 w-5 h-5 rounded-full bg-[#0D1626]" />
            </div>

            <div className="flex justify-between mt-3 text-base">
              <span className="font-medium text-black">Details</span>
              <span className="font-medium text-gray-500">Payment</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col h-[60vh]'>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Attendee First Name *
            </label>
            <input
              className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F6B654]"
              type="text"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">
              Attendee Last Name *
            </label>
            <input
              className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F6B654]"
              type="text"
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <label className="text-sm font-medium mb-1">Attendee Email *</label>
            <input
              className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F6B654]"
              type="email"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">City *</label>
            <input
              className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F6B654]"
              type="text"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">State *</label>
            <input
              className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F6B654]"
              type="text"
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <label className="text-sm font-medium mb-1">Choose Ticket *</label>
            <select className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F6B654]">
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
              className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F6B654]"
              type="text"
            />
          </div>
        </div>

        {/* TODO: stop people from clicking 'check out' button when not all required fields are filled out */}
        <button
          onClick={() => router.push("/tickets/payment")}
          className="mt-auto w-full bg-[#0D1626] text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition"
        >
          Check Out
        </button>
        </div>
      </div>
    </main>
  );
}
