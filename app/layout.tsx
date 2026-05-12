import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  title: "Blueprint Summit 2026",
  description: "SEN’s Startup & Innovation Conference",
  icons: {
    icon: "/assets/SEN_small_logo.png"
  },
  openGraph: {
    title: "Blueprint Summit 2026",
    description: "SEN’s Startup & Innovation Conference",
    type: "website",
    images: [{ url: "/assets/SEN_full_logo_light_text.png", width: 448, height: 127 }],
  },
  twitter: {
    card: "summary",
    title: "Blueprint Summit 2026",
    description: "SEN’s Startup & Innovation Conference",
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
