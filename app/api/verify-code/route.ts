import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({ 
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function POST(req: Request) {
  const { email, code } = await req.json();
  const entry = await redis.get<{ code: string; formData: Record<string, string> }>(email);

  if (!entry) return NextResponse.json({ valid: false, reason: "no code" });
  if (entry.code !== code.toUpperCase()) return NextResponse.json({ valid: false, reason: "wrong code" });

  await redis.del(email);
  return NextResponse.json({ valid: true, formData: entry.formData });
}