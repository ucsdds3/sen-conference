import TicketsHeader from "../components/TicketsHeader";
import TicketSelectionCard from "./components/TicketSelectionCard";

export default function TicketTypeSelectionPage() {
  return (
    <main className="flex justify-center px-4 py-[5vh] bg-linear-to-r from-sen-blue from-50% to-[#5F6B80]">
      <div className="w-full max-w-5xl min-h-[90vh] rounded-xl bg-white p-8 shadow-[0px_0px_20px_white] md:p-10">
        <div className="flex h-full flex-col gap-10">
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
