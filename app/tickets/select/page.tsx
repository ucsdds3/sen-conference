import TicketsHeader from "../components/TicketsHeader";
import TicketSelectionCard from "./components/TicketSelectionCard";

export default function TicketSelectionPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8 bg-sen-blue md:bg-linear-to-r md:from-sen-blue md:from-50% md:to-[#5F6B80]">
      <div className="w-full max-w-4xl h-auto rounded-xl bg-white p-6 shadow-[0px_0px_20px_white] md:p-8">
        <div className="flex flex-col gap-10">
          <TicketsHeader />

          <section className="mx-auto w-full max-w-4xl">
            <h1 className="text-center text-3xl font-bold text-sen-blue md:text-4xl">
              Select Your Ticket Type
            </h1>
            <p className="mt-3 text-center text-sm text-slate-600 md:text-base">
              Choose the purchase path that best fits your needs.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <TicketSelectionCard
                title="Individual Tickets"
                description="For personal attendance"
                cta="Buy Individual Tickets"
                href="/tickets"
              />
              <TicketSelectionCard
                title="Corporate Purchases"
                description="For teams and organizations"
                cta="Purchase for a Company"
                href="/tickets/corporate"
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
