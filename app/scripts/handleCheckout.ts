"use server";

import { redirect } from "next/navigation";

export default async function handleCheckout(input: FormData) {
  const firstName = input.get("first-name");
  const lastName = input.get("last-name");
  const email = input.get("email");
  const city = input.get("city");
  const state = input.get("state");
  const ticket = input.get("ticket");
  const referralCode = input.get("referral-code");

  // Basic validation
  if (!firstName || !lastName || !email || !city || !state || !ticket) {
    throw new Error("Please fill in all required fields.");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ticket,
      attendee: { firstName, lastName, email, city, state, ticket, referralCode },
    }),
  });

  const data = await res.json();

  if (data.url) {
    redirect(data.url);
  }
}
