import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fontsource/inter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SabbPe - Enterprise Digital Payments & Fintech Solutions",
  description: "India-focused, enterprise-grade digital payments and fintech solutions. Modern payment infrastructure for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
