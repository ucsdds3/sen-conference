import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { getBaseUrl } from "./lib/utils";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl("http://localhost:3000")),
  title: {
    default: "Blueprint Summit 2026",
    template: "%s | Blueprint Summit 2026",
  },
  description: "SEN’s Startup & Innovation Conference",
  icons: {
    icon: "/assets/SEN_small_logo.png"
  },
  openGraph: {
    title: "Blueprint Summit 2026",
    description: "SEN’s Startup & Innovation Conference",
    type: "website",
    url: getBaseUrl("/"),
    images: [{ url: "/assets/SEN_full_logo_light_text.png", width: 914, height: 258 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blueprint Summit 2026",
    description: "SEN’s Startup & Innovation Conference",
    images: ["/assets/SEN_full_logo_light_text.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen ${instrumentSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
