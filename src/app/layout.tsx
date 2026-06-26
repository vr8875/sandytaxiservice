import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import { BUSINESS } from "@/lib/constants";

const BASE_URL = "https://sandytaxiservice.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Sandy Taxi Service Goa — 24x7 Cab Service in Candolim",
    template: "%s | Sandy Taxi Service Goa",
  },
  description:
    "Sandy Taxi Service — reliable 24x7 cab service in Goa. Airport transfers, sightseeing tours, outstation trips & more. Based in Candolim, North Goa. Call +91 91486 80513.",
  keywords: [
    "taxi in goa",
    "cab service goa",
    "goa taxi service",
    "airport taxi goa",
    "candolim taxi",
    "north goa taxi",
    "south goa taxi",
    "goa sightseeing cab",
    "outstation taxi goa",
    "24x7 taxi goa",
    "sandy taxi goa",
    "taxi candolim",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,

  verification: {
    google: "ZL_FGVzkB7A16T5MiVhf-lj0K31SF01q8WgfQWr5tXM",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: BUSINESS.name,
    title: "Sandy Taxi Service Goa — 24x7 Cab Service in Candolim",
    description:
      "Reliable 24x7 taxi in Goa. Airport transfers, sightseeing, outstation & more from Candolim, North Goa.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sandy Taxi Service Goa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandy Taxi Service Goa — 24x7 Cab Service",
    description:
      "Reliable 24x7 taxi in Goa. Airport transfers, sightseeing, outstation & more.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessSchema />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}