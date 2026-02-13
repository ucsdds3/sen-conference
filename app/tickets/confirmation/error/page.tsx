import Link from "next/link";
import TicketsHeader from "../../components/TicketsHeader";

export default function ErrorPage() {
  return (
    <main className="flex justify-center bg-[#F3F3F3] py-20 px-4">
      <div className="w-full max-w-2xl text-center">

        <TicketsHeader />

        <h2 className="text-5xl font-extrabold text-black mb-4">
          PAYMENT FAILED
        </h2>

        <p className="text-gray-700 mb-8">
          Something went wrong during checkout. Please try again.
        </p>

        <Link
          href="/tickets/payment"
          className="inline-block bg-[#0D1626] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Return to Payment
        </Link>

      </div>
    </main>
  );
}