import Stripe from "stripe";
import { NextResponse } from "next/server";
import { google } from "googleapis";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const metadata = session.metadata || {};
    const now = new Date()
    const date = now.toLocaleDateString()
    const time = now.toLocaleTimeString()

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:O",
      valueInputOption: "RAW",
      requestBody: {
        values: [[
          date,
          time,
          metadata.firstName,
          metadata.lastName,
          metadata.email,
          metadata.phone,
          metadata.status || metadata.purchaseType, // professional, student, professor, investor, corporate
          metadata.ticketType,
          metadata.quantity,
          metadata.company || metadata.school,
          metadata.jobTitle,
          metadata.industry || metadata.major,
          metadata.reach,
          metadata.attendeeNames,
          metadata.referralCode,
          metadata.assignedReferralCode,
        ]],
      },
    });
  }

  return NextResponse.json({ received: true });
}