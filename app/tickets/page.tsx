"use client";

import { useRouter } from "next/navigation";
import Form from "next/form";
import TicketsHeader from "./components/TicketsHeader";
import handleCheckout from "../scripts/handleCheckout";

export default function TicketsPage() {
  const router = useRouter();

  return (
    <main className="flex justify-center py-[5vh] px-4 bg-linear-to-r from-sen-blue from-50% to-[#5F6B80]">
      <div className="h-[90vh] w-full max-w-3xl bg-white rounded-xl shadow-[0px_0px_20px_white] p-10">
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
              <span className="font-medium text-black">Details</span>
              <span className="font-medium text-gray-500">Payment</span>
            </div>
          </div>
        </div>

        <Form action={handleCheckout} className="flex flex-col h-[60vh]">
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">
                Attendee First Name *
              </label>
              <input
                className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange"
                name='first-name'
                type="text"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">
                Attendee Last Name *
              </label>
              <input
                className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange"
                name='last-name'
                type="text"
              />
            </div>

            <div className="col-span-2 flex flex-col">
              <label className="text-sm font-medium mb-1">
                Attendee Email *
              </label>
              <input
                className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange"
                name='email'
                type="email"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">City *</label>
              <input
                className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange"
                name='city'
                type="text"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">State *</label>
              <input
                className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange"
                name='state'
                type="text"
              />
            </div>

            <div className="col-span-2 flex flex-col">
              <label className="text-sm font-medium mb-1">
                Choose Ticket *
              </label>
              <select defaultValue="" name="ticket" className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange">
                <option value="" disabled hidden>Click for dropdown</option>
                <option value="General Admission">General Admission</option>
                <option value="Premium">Premium</option>
                <option value="VIP">VIP</option>
              </select>
            </div>

            <div className="col-span-2 flex flex-col">
              <label className="text-sm font-medium mb-1">
                Have a referral code from a friend?
              </label>
              <input
                className="bg-[#D9D9D9] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sen-yorange"
                name="referral-code"
                type="text"
              />
            </div>
          </div>

          <button
            type='submit'
            className="mt-auto w-full bg-sen-blue text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition"
          >
            Check Out
          </button>
        </Form>
      </div>
    </main>
  );
}
