"use server";

import { redirect } from "next/navigation";

export default async function handleCheckout(input: FormData) {
  const firstName = input.get("firstName");
  const lastName = input.get("lastName");
  const email = input.get("email");
  const status = input.get("status");
  const reach = input.get("reach");
  const phone = input.get("phone");
  const company = input.get("company")
  const jobTitle = input.get("jobTitle");
  const ticket = input.get("ticket");
  const referralCode = input.get("referralCode");

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ticket,
      attendee: { firstName, lastName, email, phone, status, reach, company, jobTitle, referralCode },
    }),
  });

  const data = await res.json();

  if (data.url) {
    redirect(data.url);
  }
}
