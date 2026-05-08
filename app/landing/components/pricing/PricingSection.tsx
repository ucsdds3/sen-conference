import PricingCard from "./PricingCard";
import RegisterButton from "../../../components/layout/RegisterButton";
import WaveDivider from "../WaveDivider";

type TicketTier = {
  id: string;
  features: string[];
  price: number;
  color: string;
  featured?: boolean;
};

const ticketTiers = [
  {
    id: "General",
    features: [
      "Full access to all talks, panels, and workshops",
      "Networking with attendees and speakers",
    ],
    price: 50,
    color: "bg-[#D0D0D0]",
  },
  {
    id: "Premium",
    features: [
      "Everything in General",
      "Priority seating",
      "Enhanced event experience",
    ],
    price: 75,
    color: "bg-sen-yorange",
    featured: true,
  },
  {
    id: "VIP",
    features: [
      "Everything in Premium",
      "Exclusive pre-conference experience with speakers",
      "Private, small-group access",
    ],
    price: 100,
    color: "bg-[#8FA4C5]",
  },
];

export default function PricingSection() {
  return (
    <>
      {/* top curve */}
      <WaveDivider flipX />

      <section className="relative z-10 w-full bg-sen-blue">
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-10">
          <h2 className="relative text-center text-[clamp(2.5rem,7vw,5rem)] font-semibold tracking-tight text-white md:text-right">
            Ticket Pricing
          </h2>

          {/* Mobile: vertical stack · lg+: three columns, featured center emphasis */}
          <div className="relative mx-auto mt-8 flex w-full max-w-md flex-col gap-10 lg:max-w-6xl lg:flex-row lg:items-stretch lg:justify-center xl:gap-8">
            {ticketTiers.map((ticketTier: TicketTier) => (
              <PricingCard
                key={ticketTier.id}
                title={ticketTier.id}
                features={ticketTier.features}
                price={`$${ticketTier.price}`}
                color={ticketTier.color}
                featured={ticketTier.featured}
              />
            ))}
          </div>
        </div>

        <div className="relative z-20 flex flex-col place-items-center mt-10">
          <RegisterButton />
        </div>
      </section>

      {/* bottom curve */}
      <WaveDivider flipY />
    </>
  );
}
