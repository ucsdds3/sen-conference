"use server";
import { redirect } from "next/navigation";
import handleCheckout from "./handleCheckout";
import nodemailer from "nodemailer";
import { randomBytes } from "crypto";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export default async function handleSubmit(input: FormData) {
  const status = input.get("status") as string;
  const email = input.get("email") as string;

  if (status === "student" && email?.endsWith(".edu")) {
    const code = randomBytes(3).toString("hex").toUpperCase();

    // store in Redis with 2 min expiry
    await redis.set(email, { code, formData: Object.fromEntries(input.entries()) }, { ex: 120 });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Verify your student email",
      text: `Your verification code is: ${code}`,
    });

    redirect(`/tickets/verification?email=${encodeURIComponent(email)}`);
  } else {
    await handleCheckout(input);
  }
}