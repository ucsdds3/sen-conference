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
  const { purchaseType, ticket, attendee } = body;

  const priceMap: Record<string, number> = {
    "General Admission": 5000,
    "Premium": 7500,
    "VIP": 10000,
  };

  const toMetadataString = (value: unknown) => {
    if (value === null || value === undefined) return "";
    return String(value);
  };

  const type = purchaseType === "corporate" ? "corporate" : "individual";

  let firstName: string;
  let lastName: string;
  let email: string;
  let phone: string;
  let companyName: string;
  let industry: string;
  let ticketType: string;
  let reach: string;
  let attendeeNames: string;
  let referralCode: string;
  let assignedReferralCode: string;
  let quantity: number;
  let customerEmail: string;
  let productName: string;
  let productDescription: string;
  let successUrl: string;
  let cancelUrl: string;
  let allowPromotionCodes: boolean | undefined;

  if (type === "corporate") {
    firstName = body.firstName;
    lastName = body.lastName;
    email = body.email;
    phone = body.phone;
    companyName = body.companyName;
    industry = body.industry;
    ticketType = body.ticketType;
    reach = body.reach;
    attendeeNames = toMetadataString(
      JSON.stringify(
        Array.isArray(body.attendeeNames) ? body.attendeeNames : [],
      ),
    );
    referralCode = body.referralCode || "";
    assignedReferralCode = "";
    quantity = Math.max(1, Number(body.quantity) || 1);
    customerEmail = email;
    productName = `${ticketType} Ticket`;
    productDescription = `Corporate purchase for ${companyName}`;
    successUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/tickets/corporate/success?${new URLSearchParams(
      {
        quantity: String(quantity),
        ticketType: String(ticketType || ""),
        company: String(companyName || ""),
      },
    ).toString()}`;
    cancelUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/tickets/corporate`;
    allowPromotionCodes = undefined;
  } else {
    firstName = attendee.firstName;
    lastName = attendee.lastName;
    email = attendee.email;
    phone = attendee.phone;
    companyName = attendee.companyName || "";
    industry = "";
    ticketType = ticket;
    reach = attendee.reach || "";
    attendeeNames = "";
    referralCode = attendee.referralCode || "";
    assignedReferralCode = generateReferralCode();
    quantity = Math.max(1, Number(body.quantity) || 1);
    customerEmail = attendee.email;
    productName = `${ticket} Ticket`;
    productDescription = `For ${attendee.firstName} ${attendee.lastName}`;
    successUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/tickets/success?code=${assignedReferralCode}`;
    cancelUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/tickets`;
    allowPromotionCodes = attendee.status === "student";
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: productName,
            description: productDescription,
          },
          unit_amount: priceMap[ticketType] ?? priceMap["General Admission"],
        },
        quantity,
      },
    ],
    mode: "payment",
    customer_email: customerEmail,
    success_url: successUrl,
    cancel_url: cancelUrl,
    ...(allowPromotionCodes !== undefined && {
      allow_promotion_codes: allowPromotionCodes,
    }),
    metadata: {
      purchaseType: toMetadataString(type),
      quantity: toMetadataString(quantity),
      firstName: toMetadataString(firstName),
      lastName: toMetadataString(lastName),
      email: toMetadataString(email),
      phone: toMetadataString(phone),
      companyName: toMetadataString(companyName),
      industry: toMetadataString(industry),
      ticketType: toMetadataString(ticketType),
      reach: toMetadataString(reach),
      attendeeNames: toMetadataString(attendeeNames),
      referralCode: toMetadataString(referralCode),
      assignedReferralCode: toMetadataString(assignedReferralCode),
    },
  });

  return NextResponse.json({ url: session.url, metadata: session.metadata });
}