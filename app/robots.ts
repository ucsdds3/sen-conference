import type { MetadataRoute } from "next";
import { getBaseUrl } from "./lib/utils";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/tickets/verification", "/tickets/success", "/tickets/corporate"],
    },
    ...(baseUrl && { sitemap: `${baseUrl}/sitemap.xml` }),
  };
}
