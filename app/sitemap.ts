import type { MetadataRoute } from "next";
import { getBaseUrl } from "./lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();

  if (!baseUrl && process.env.NODE_ENV === "development") {
    console.warn("NEXT_PUBLIC_BASE_URL is not set — sitemap URLs will be invalid");
  }

  const routes = ["/", "/tickets/select"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));
}
