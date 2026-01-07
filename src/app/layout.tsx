import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anchor Point Accounting | Tax Preparation & Bookkeeping in Goose Creek, SC",
  description:
    "Professional tax preparation, bookkeeping, and accounting services in Goose Creek, SC. Serving individuals, businesses, and non-profits with over two decades of experience. Call (843) 797-5185.",
  keywords: ["tax preparation", "bookkeeping", "accounting", "Goose Creek", "Charleston", "South Carolina", "CPA", "tax services", "business taxes", "individual taxes"],
  authors: [{ name: "Anchor Point Accounting" }],
  openGraph: {
    title: "Anchor Point Accounting | Tax Preparation & Bookkeeping",
    description: "Professional tax preparation, bookkeeping, and accounting services in Goose Creek, SC. Over two decades of experience.",
    url: "https://anchorpoint-accounting.com",
    siteName: "Anchor Point Accounting",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "US-SC",
    "geo.placename": "Goose Creek",
    "geo.position": "32.9812;-80.0325",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
