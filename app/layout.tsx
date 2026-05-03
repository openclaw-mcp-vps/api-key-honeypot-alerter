import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "API Key Honeypot Alerter — Detect Compromised API Keys Instantly",
  description: "Generate honeypot API keys and get alerted immediately when they're used. Protect your AWS, Stripe, and other API credentials from breaches."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="42ee3431-4013-4307-b825-72c4019497aa"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
