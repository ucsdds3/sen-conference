export function getBaseUrl(devFallback = "") {
  return (
    process.env.NEXT_PUBLIC_BASE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : devFallback)
  );
}
