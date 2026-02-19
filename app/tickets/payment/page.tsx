"use client";
import { useRouter } from "next/navigation";
import TicketsHeader from "../components/TicketsHeader";

export default function PaymentPage() {
  const router = useRouter();

  return (
    <main className="flex justify-center py-[5vh] px-4 bg-linear-to-r from-sen-blue from-50% to-[#5F6B80]">
      <div className="h-[90vh] flex flex-col w-full max-w-3xl bg-white rounded-xl shadow-md p-10 justify-evenly">
        <TicketsHeader />

        <div className="flex justify-center mb-12">
          <div className="w-[420px]">
            <div className="relative flex items-center w-full">
              <div className="absolute w-full h-[2px] bg-[#0D1626]" />

              <div className="relative z-10 w-5 h-5 rounded-full bg-[#0D1626]" />

              <div className="flex-1" />

              <div className="relative z-10 w-5 h-5 rounded-full bg-[#0D1626] border-3 border-sen-yorange p-2.5" />
            </div>

            <div className="flex justify-between mt-3 text-base">
              <span className="font-medium text-gray-500">Details</span>
              <span className="font-medium text-black">Payment</span>
            </div>
          </div>
        </div>

        <div className='h-[60vh] bg-gray-500'>

        </div>

        {/* TODO: Stripe Checkout Integration */}
      </div>
    </main>
  );
}
