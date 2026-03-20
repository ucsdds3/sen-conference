import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import nodemailer from "nodemailer";
import { randomBytes } from "crypto";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

type VerificationEntry = {
  code: string;
  formData: Record<string, string>;
};

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json(
      { ok: false, error: "Email is required." },
      { status: 400 }
    );
  }

  const key = email.trim();
  if (!key.toLowerCase().endsWith(".edu")) {
    return NextResponse.json(
      { ok: false, error: "Only student .edu emails can use verification." },
      { status: 400 }
    );
  }

  const entry = await redis.get<VerificationEntry>(key);

  if (!entry?.formData) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "No pending verification found. Your code may have expired—please go back to tickets and submit the form again.",
      },
      { status: 404 }
    );
  }

  await redis.del(key);

  const code = randomBytes(3).toString("hex").toUpperCase();
  await redis.set(key, { code, formData: entry.formData }, { ex: 120 });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: key,
    subject: "Verify your student email",
    text: `Your verification code is: ${code}`,
  });

  return NextResponse.json({ ok: true });
}
