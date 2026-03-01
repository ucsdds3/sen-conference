"use server";

import { redirect } from "next/navigation";

export default async function handleCheckout(input: FormData) {
  const firstName = input.get("first-name");
  const lastName = input.get("last-name");
  const email = input.get("email");
  const status = input.get("status");
  const reach = input.get("reach");
  const number = input.get("number");
  const company = input.get("company")
  const jobTitle = input.get("job-title");
  const ticket = input.get("ticket");
  const referralCode = input.get("referral-code");

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ticket,
      attendee: { firstName, lastName, email, number, status, reach, company, jobTitle, referralCode },
    }),
  });

  const data = await res.json();

  if (data.url) {
    redirect(data.url);
  }
}
