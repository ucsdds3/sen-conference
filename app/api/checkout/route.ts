import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

function generateReferralCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 16; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export async function POST(req: Request) {
  const body = await req.json();
  const { ticket, attendee } = body;

  const priceMap: Record<string, number> = {
    "General Admission": 5000, // in cents = $50
    "Premium": 7500,
    "VIP": 10000,
  };

  const assignedReferralCode = generateReferralCode();

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
    allow_promotion_codes: attendee.status === "student",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/tickets/success?code=${assignedReferralCode}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/tickets`,
    metadata: {
      firstName: attendee.firstName,
      lastName: attendee.lastName,
      email: attendee.email,
      number: attendee.number,
      status: attendee.status,
      reach: attendee.reach,
      company: attendee.company,
      jobTitle: attendee.jobTitle,
      ticket: attendee.ticket,
      referralCode: attendee.referralCode || "n/a",
      assignedReferralCode: assignedReferralCode,
    },
  });

  return NextResponse.json({ url: session.url, metadata: session.metadata });
}