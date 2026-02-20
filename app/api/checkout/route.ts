import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.json();
  const { ticket, attendee } = body;

  const priceMap: Record<string, number> = {
    "General Admission": 5000, // in cents = $50
    "Student": 2500,
    "VIP": 15000,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `${ticket} Ticket`,
            description: `For ${attendee.firstName} ${attendee.lastName}`,
          },
          unit_amount: priceMap[ticket],
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    customer_email: attendee.email,
    allow_promotion_codes: true,
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/tickets/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/tickets`,
    metadata: {
      firstName: attendee.firstName,
      lastName: attendee.lastName,
      city: attendee.city,
      state: attendee.state,
      referralCode: attendee.referralCode || "",
    },
  });

  return NextResponse.json({ url: session.url, metadata: session.metadata });
}