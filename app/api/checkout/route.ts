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
    "General Admission": 5000, // in cents = $50
    "Premium": 7500,
    "VIP": 10000,
  };

  const type = purchaseType === "corporate" ? "corporate" : "individual";

  const toMetadataString = (value: unknown) => {
    if (value === null || value === undefined) return "";
    return String(value);
  };

  if (type === "corporate") {
    const companyName = body.companyName;
    const industry = body.industry;
    const firstName = body.firstName;
    const lastName = body.lastName;
    const email = body.email;
    const phone = body.phone;
    const ticketType = body.ticketType;
    const quantity = Math.max(1, Number(body.quantity) || 1);
    const howHeard = body.howHeard;
    const attendeeNames = Array.isArray(body.attendeeNames) ? body.attendeeNames : [];
    const referralCode = body.referralCode || "";
    const corporateSuccessParams = new URLSearchParams({
      quantity: String(quantity),
      ticketType: String(ticketType || ""),
      company: String(companyName || ""),
    }).toString();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${ticketType} Ticket`,
              description: `Corporate purchase for ${companyName}`,
            },
            unit_amount: priceMap[ticketType] ?? priceMap["General Admission"],
          },
          quantity,
        },
      ],
      mode: "payment",
      customer_email: toMetadataString(email),
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/tickets/corporate/success?${corporateSuccessParams}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/tickets/corporate`,
      metadata: {
        purchaseType: toMetadataString(type),
        quantity: toMetadataString(quantity),
        firstName: toMetadataString(firstName),
        lastName: toMetadataString(lastName),
        email: toMetadataString(email),
        number: toMetadataString(phone),
        status: "corporate",
        reach: toMetadataString(howHeard),
        company: toMetadataString(companyName),
        jobTitle: "",
        ticket: toMetadataString(ticketType),
        referralCode: toMetadataString(referralCode),
        assignedReferralCode: "",

        companyName: toMetadataString(companyName),
        industry: toMetadataString(industry),
        phone: toMetadataString(phone),
        ticketType: toMetadataString(ticketType),
        howHeard: toMetadataString(howHeard),
        attendeeNames: toMetadataString(JSON.stringify(attendeeNames)),
      },
    });

    return NextResponse.json({ url: session.url, metadata: session.metadata });
  }

  const individualQuantity = Math.max(1, Number(body.quantity) || 1);
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
        quantity: individualQuantity,
      },
    ],
    mode: "payment",
    customer_email: attendee.email,
    allow_promotion_codes: attendee.status === "student",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/tickets/success?code=${assignedReferralCode}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/tickets`,
    metadata: {
      purchaseType: toMetadataString(type || "individual"),
      quantity: toMetadataString(individualQuantity || 1),
      firstName: toMetadataString(attendee.firstName),
      lastName: toMetadataString(attendee.lastName),
      email: toMetadataString(attendee.email),
      number: toMetadataString(attendee.number),
      status: toMetadataString(attendee.status),
      reach: toMetadataString(attendee.reach),
      company: toMetadataString(attendee.company),
      jobTitle: toMetadataString(attendee.jobTitle),
      ticket: toMetadataString(ticket),
      referralCode: toMetadataString(attendee.referralCode || ""),
      assignedReferralCode: toMetadataString(assignedReferralCode),
      companyName: "",
      industry: "",
      phone: "",
      ticketType: "",
      howHeard: "",
      attendeeNames: "",
    },
  });

  return NextResponse.json({ url: session.url, metadata: session.metadata });
}