import TicketsHeader from "../../components/TicketsHeader";

export default function SuccessPage() {
  return (
    <main className="flex justify-center bg-[#F3F3F3] py-20 px-4">
      <div className="w-full max-w-3xl text-center">
        
        <TicketsHeader />

        <h2 className="text-6xl font-extrabold text-black mb-2">
          YOU’RE IN!
        </h2>

        <p className="text-xl font-semibold mb-10">
          ONE MORE STEP, DO NOT LEAVE
        </p>

        <div className="bg-[#0D1626] text-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto text-left">
          <h3 className="text-xl font-semibold mb-4">
            UNLOCK MORE for your experience
          </h3>

          <p className="text-sm mb-4 opacity-80">
            When people use your referral code at checkout, you can:
          </p>

          <ul className="space-y-2 text-sm mb-6">
            <li>• Refer 1 attendee → Get a free upgrade to premium</li>
            <li>• Refer 3 attendees → Get a free upgrade to VIP</li>
            <li>• Refer 5 attendees → Get SEN exclusive merchandise</li>
          </ul>

          <p className="text-sm mb-2">Copy your referral code below.</p>

          <input
            value="SEN2026REF"
            readOnly
            className="w-full bg-white text-black rounded-md px-3 py-2 mb-4"
          />

          <p className="text-sm mb-3">Or email it to yourself.</p>

          <button className="bg-sen-yorange text-black px-5 py-2 rounded-md font-medium hover:opacity-90 transition">
            Email me!
          </button>
        </div>
      </div>
    </main>
  );
}