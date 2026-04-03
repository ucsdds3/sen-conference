import TicketsHeader from "../components/TicketsHeader";
import CorporateForm from "./components/CorporateForm";

export default function CorporateTicketsPage() {
  return (
    <main className="flex justify-center px-4 py-[5vh] bg-sen-blue md:bg-linear-to-r md:from-sen-blue md:from-50% md:to-[#5F6B80]">
      <div className="w-full max-w-3xl min-h-[85vh] rounded-xl bg-white p-8 shadow-[0px_0px_20px_white] md:p-10 flex flex-col">
        <div className="flex flex-col gap-8 flex-1">
          <TicketsHeader />
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-sen-blue md:text-4xl">
              Corporate Ticket Purchases
            </h1>
            <p className="text-sm text-slate-600 md:text-base">
              Complete the form below to purchase tickets for your team or
              organization.
            </p>
          </div>
          <CorporateForm />
        </div>
      </div>
    </main>
  );
}
